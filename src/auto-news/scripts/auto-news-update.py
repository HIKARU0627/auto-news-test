import os
import json
import re
import datetime


def parse_title(title):
    match = re.match(r'^(Create (Courses|Courses-En|Farewell)) “(\d+)-(.+)-(\d{4})”$', title)
    if match:
        category = match.group(2)
        course_id = match.group(3)
        course_name = f"{match.group(4)}-{match.group(5)}"
        return category, course_id, course_name
    return None, None, None

def main():
    pr_titles = True

    # pr_titles = os.getenv('PR_TITLES')
    if pr_titles:
        # pr_titles_list = json.loads(pr_titles)
        pr_titles_list = ["Create Courses-En “0980-special-mathematics-lecture-differential-geometry-2025”","Create Courses “0976-英語（コミュニケーション）-2025”","Create Courses “0975-地球科学基礎ｉ-2025”","Create Courses “976-英語（コミュニケーション）-2025”","Create Courses-En “0974-studium-generale-2024-2024”","Create Courses “0973-考古学講義i-2024”","Create Courses “0972-留学生対象-日本語総合演習2-2024”","Create Courses-En “0964-electromagnetics-2024”","Create Courses “972-留学生対象-日本語総合演習1-2024”","Create Courses-En “0963-electronic-circuits-2024”","Create Courses “0971-細胞学ia-2024”", "Create Farewell “0989-「人工生命、というか「感じる」と「考える」」-2025”"]
        # pr_titles_list = ["Create Courses-En “0980-special-mathematics-lecture-differential-geometry-2025”"]
        print("Received PR Titles:")
        for title in pr_titles_list:
            course_type, course_id, course_name = parse_title(title)
            if course_type and course_id and course_name:
                print(f"Category: {course_type}, Course Id: {course_id}, Course Name: {course_name}")
                generate_news_md(course_type, course_id, course_name)
            else:
                print(f"Unrecognized format: {title}")
                exit(1)
    else:
        print("No PR Titles found in environment variables.")
        exit(1)

def generate_news_md(course_type, course_id, course_name):
    match course_type:
        case "Courses":
            news_path = "../../pages/news/course"
            source_path = "../../pages/course"
        case "Courses-En":
            news_path = "../../pages/en/news/course"
            source_path = "../../pages/en/courses"
        case "Farewell":
            news_path = "../../pages/news/farewell"
            source_path = "../../pages/farewell"
        case _:
            news_path = "../../pages/news/other"
            source_path = None

    md_file_path = '/'.join([news_path, f"{course_id}-news.md"])
    print(f"Checking if {md_file_path} exists...")
    if not os.path.exists(md_file_path):
        (lecturer, department, term, description) = get_course_info(source_path, course_id)
        # 同じファイルが存在しないため、新規作成
        with open(md_file_path, "w", encoding='utf-8') as f:
            f.write(f"---\n")
            f.write(f"# テンプレート指定\n")
            f.write(f"templateKey: news\n")
            f.write(f"\n")
            f.write(f"# タイトル\n")
            f.write(f"title: {course_name}が新規公開されました!\n")
            f.write(f"\n")
            f.write(f"# 簡単な説明\n")
            f.write(f"description: >-\n")
            f.write(f"  {description}\n")
            f.write(f"\n")
            f.write(f"# リンク先\n")
            f.write(f"link: ""\n")
            f.write(f"\n")
            f.write(f"# 種類\n")
            f.write(f"type: {course_type}\n")
            f.write(f"\n")
            f.write(f"# 記事として表示するか\n")
            f.write(f"visible: true\n")
            f.write(f"\n")
            f.write(f"# 関連するタグ\n")
            f.write(f"tags:\n")
            f.write(f"\n")
            f.write(f"# ロールに表示する画像\n")
            f.write(f"\n")
            f.write(f"# 記事投稿日\n")
            f.write(f"date: {datetime.datetime.now().strftime('%Y-%m-%d')}\n")
            f.write(f"---\n")
        return 1
    else:
        # 同じファイルが存在するためとばす
        return 0
    
def get_course_info(source_path, course_id):
    print("====================================")

    # ファイルを開いて、course_idに一致する情報を取得する
    if source_path is None:
        return None, None, None, None

    for root, dirs, files in os.walk(source_path):
        for file in files:
            if file.endswith(".md") and course_id in file:
                with open(os.path.join(root, file), "r", encoding="utf-8") as f:
                    content = f.read()
                    lecturer = re.search(r'lecturer:\s*(.*)', content)
                    department = re.search(r'department:\s*(.*)', content)
                    term = re.search(r'term:\s*(.*)', content)
                    description = re.search(r'description:\s*(.*)', content)

                    lecturer = lecturer.group(1) if lecturer else None
                    department = department.group(1) if department else None
                    term = term.group(1) if term else None
                    description = description.group(1) if description else None

                    return lecturer, department, term, description

    return None, None, None, None

if __name__ == "__main__":
    main()
