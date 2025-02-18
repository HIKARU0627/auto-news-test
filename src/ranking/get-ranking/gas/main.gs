function main() {
  // 参考にしたサイト：https://qiita.com/kakakaori830/items/98325c31584d2b056990

  const spreadSheetId =
    PropertiesService.getScriptProperties().getProperty("SPREAD_SHEET_ID");
  const spreadSheet = SpreadsheetApp.openById(spreadSheetId);

  try {
    data = getDataFromGA4();
    header = data.shift();
    // 「page_view」のイベントのみにフィルタ
    data = data.filter((row) => row[1].includes("page_view"));

    // courses
    let spreadSheetSheetName =
      PropertiesService.getScriptProperties().getProperty(
        "SPREAD_SHEET_NAME_COURSES"
      );
    saveData(
      data,
      /\/courses\/(?!.*en$).+/g,
      spreadSheet,
      spreadSheetSheetName
    );
    // en-course
    spreadSheetSheetName = PropertiesService.getScriptProperties().getProperty(
      "SPREAD_SHEET_NAME_EN_COURSES"
    );
    saveData(data, /\/en\/courses\/.+/g, spreadSheet, spreadSheetSheetName);

    // farewell
    spreadSheetSheetName = PropertiesService.getScriptProperties().getProperty(
      "SPREAD_SHEET_NAME_FAREWELL"
    );
    saveData(data, /\/farewell\/.+/g, spreadSheet, spreadSheetSheetName);

    notificationToSlack("正常にランキングの取得が完了しました！");
  } catch (error) {
    Logger.log(`error!: ${error}`);
    notificationToSlack("ランキング取得に失敗しました...");
  }
}

function saveData(data, filter, spreadSheet, sheetName) {
  const sheet = spreadSheet.getSheetByName(sheetName);
  sheet.clear();
  viewCourses = data.filter((row) => row[0].search(filter) === 0);
  // 2列目を削除
  viewCourses = viewCourses.map(row => [row.splice(0, 1), row.splice(1,1)]);
  console.log(viewCourses)
  sheet
    .getRange(1, 1, viewCourses.length, viewCourses[0].length)
    .setValues(viewCourses);
}

function getDataFromGA4() {
  const metrics = [{ name: "eventCount" }];
  const dimensions = [{ name: "pagePath" }, { name: "eventName" }];

  const timezone = "JST";
  const today = new Date();
  const thirtyDaysAgo = new Date();
  thirtyDaysAgo.setDate(today.getDate() - 30); // 30日前の日付をセット
  const formattedTodayDate = Utilities.formatDate(
    today,
    timezone,
    "yyyy-MM-dd"
  );
  const formattedThirtyDaysAgoDate = Utilities.formatDate(
    thirtyDaysAgo,
    timezone,
    "yyyy-MM-dd"
  );
  const dateRanges = [
    { startDate: formattedThirtyDaysAgoDate, endDate: formattedTodayDate },
  ];

  const request = {
    dimensions: dimensions,
    metrics: metrics,
    dateRanges: dateRanges,
  };

  const PROPERTY_ID =
    PropertiesService.getScriptProperties().getProperty("GA4_ID");

  try {
    const response = AnalyticsData.Properties.runReport(
      request,
      "properties/" + PROPERTY_ID
    );

    if (
      !response.hasOwnProperty("dimensionHeaders") ||
      !response.hasOwnProperty("metricHeaders") ||
      !response.hasOwnProperty("rows")
    ) {
      Logger.log("データが取得できませんでした。");
      return;
    }

    const data = response.rows.map((row) => {
      const dimensionValues = row.dimensionValues.map(
        (dimension) => dimension.value
      );
      const metricValues = row.metricValues.map((metric) => metric.value);
      return dimensionValues.concat(metricValues);
    });

    const header = response.dimensionHeaders
      .map((header) => header.name)
      .concat(response.metricHeaders.map((header) => header.name));
    data.unshift(header);

    return data;
  } catch (error) {
    Logger.log(`error!: ${error}`);
    return -1;
  }
}

function notificationToSlack(message) {
  const url =
    PropertiesService.getScriptProperties().getProperty("SLACK_WEBHOOK_URL");

  const payload = {
    icon_emoji: ":google_apps_script:",
    username: "Google Apps Script実行通知",
    text: message,
  };

  const options = {
    method: "post",
    contentType: "application/json",
    payload: JSON.stringify(payload),
  };

  UrlFetchApp.fetch(url, options);
}
