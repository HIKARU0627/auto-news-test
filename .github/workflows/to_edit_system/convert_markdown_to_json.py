import json
import sys
import yaml
import requests

def markdown_to_json(markdown_files):
    json_data_list = []
    # マークダウンファイルの読み込み
    for markdown_file in markdown_files:
        # マークダウンファイルの読み込み
        with open(markdown_file, 'r', encoding='utf-8') as f:
            markdown_text = f.read()
        # マークダウンフロントマター（YAML形式）の抽出
        front_matter_end = markdown_text.find('---', 3)  # 3番目のハイフンまでを探す
        front_matter = markdown_text[3:front_matter_end]
        # YAML形式の解析
        front_matter_data = yaml.safe_load(front_matter)
        # 必要な情報の抽出
        templateKey = front_matter_data.get('templateKey', '')
        course_id = int(front_matter_data.get('course_id', ''))
        title = front_matter_data.get('title', '')
        language = 1 if templateKey == 'courses-en' else 0
        # JSON形式に変換
        json_data = {"course_id": course_id, "title": title, "status": 0, "language": language, "article_type": 0}
        # JSONデータをダブルクオートで囲む
        json_data = json.dumps(json_data)
        json_data_list.append(json_data)
        f.close()
    return json_data_list

def send_json_data(json_data, url):
    headers = {'Content-Type': 'application/json'}
    response = requests.post(url, data=json_data, headers=headers)
    return response

if __name__ == "__main__":
    # マークダウンファイルのパス
    markdown_file_paths = sys.argv[1:]
    json_data_list = []
    for markdown_file in markdown_file_paths:
        json_data = markdown_to_json([markdown_file])
        json_data_list.extend(json_data)

    # 変換したJSONを出力
    url = 'https://dev.ocw.media.nagoya-u.ac.jp/edit-system/registration/regist/'
    response_list = []
    for json_data in json_data_list:
        response = send_json_data(json_data, url)
        response_list.append(response)
    print(response.text)
