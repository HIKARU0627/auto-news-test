# Google Apps Script上のコード

## 処理内容
1. Google Analytics APIを使って、GAのデータを取得
2. 取得したデータをスプレッドシートに書き込む

## スクリプトプロパティ
- `GA4_ID`: GA4のID
- `SPREAD_SHEET_ID`: スプレッドシートのID
- `SPREAD_SHEET_NAME_COURSES`: スプレッドシートのシート名（日本語講義用）
- `SPREAD_SHEET_NAME_EN_COURSES`: スプレッドシートのシート名（英語講義用）
- `SPREAD_SHEET_NAME_FAREWELL`: スプレッドシートのシート名（最終講義用）
- `SLACK_WEBHOOK_URL`: SlackのWebhook URL