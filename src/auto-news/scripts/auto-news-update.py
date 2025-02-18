import os
import json
import re


def parse_title(title):
    match = re.match(r'^(Create (Courses|Courses-En|Farewell)) “(\d+)-(.+)-(\d{4})”$', title)
    if match:
        category = match.group(2)
        course_number = match.group(3)
        course_name = f"{match.group(4)}-{match.group(5)}"
        return category, course_number, course_name
    return None, None, None

def main():
    pr_titles = os.getenv('PR_TITLES')
    if pr_titles:
        pr_titles_list = json.loads(pr_titles)
        print("Received PR Titles:")
        for title in pr_titles_list:
            category, course_number, course_name = parse_title(title)
            if category and course_number and course_name:
                print(f"Category: {category}, Course Number: {course_number}, Course Name: {course_name}")
            else:
                print(f"Unrecognized format: {title}")
    else:
        print("No PR Titles found in environment variables.")

    with open('test.txt', 'w') as file:
        file.write('test')

if __name__ == "__main__":
    main()
