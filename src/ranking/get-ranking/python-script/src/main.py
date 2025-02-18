# encoding: utf-8

""" Googleスプレッドシートからランキングを取ってきて，CSVに出力するスクリプト """

import os
import subprocess

from dotenv import load_dotenv

load_dotenv()


def gsheet_url(key: str, fmt: str, gid: str) -> str:
    """スプレッドシートのダウンロードURLを生成する

    Args:
        key (str): スプレッドシートのID
        fmt (str): ダウンロード形式
        gid (str): シートのID

    Returns:
        str: ダウンロード用URL
    """
    path = f"https://docs.google.com/spreadsheets/d/{key}/export"
    query = f"format={fmt}"
    if not gid is None:
        query += f"&gid={gid}"
    url = f"{path}?{query}"
    return url


def gsheet_wget(key: str, fmt: str, gid: str, save_name: str) -> list[str]:
    """{save_name}.{fmt} というファイル名で、downloads/ に保存する

    Args:
        key (str): スプレッドシートのID
        fmt (str): ダウンロード形式
        gid (str): _シートのID
        save_name (str): 保存名

    Raises:
        RuntimeError: ダウンロードに失敗した場合

    Returns:
        list[str]: 実行したコマンド
    """
    os.makedirs("downloads", exist_ok=True)
    ofn = f"{save_name}.{fmt}"
    url = gsheet_url(key, fmt, gid)
    cmd = ["wget", "-q", "-O", ofn, url]
    cp = subprocess.run(cmd, cwd="downloads")
    if cp.returncode != 0:
        print(cp.stderr)
        raise RuntimeError(f"Failed to download {url}")
    print(f"{save_name} is saved.")
    return cmd


def main():
    spread_sheet_id = os.getenv("SPREAD_SHEET_ID")
    fmt = "csv"

    gid_courses = os.getenv("SHEET_ID_COURSES")
    gid_en_courses = os.getenv("SHEET_ID_EN_COURSES")
    gid_farewell = os.getenv("SHEET_ID_FAREWELL")

    gsheet_wget(spread_sheet_id, fmt, gid_courses, "ranking_courses")
    gsheet_wget(spread_sheet_id, fmt, gid_en_courses, "ranking_en_courses")
    gsheet_wget(spread_sheet_id, fmt, gid_farewell, "ranking_farewell")


if __name__ == "__main__":
    main()
