---
# テンプレート指定
templateKey: "courses-en"

# コースID
course_id: "0207"

# タイトル
title: "Signal Transmission and Detection Theory"

# 簡単な説明
description: >-
   ....
# 講師名
lecturer: "Takaya YAMAZATO, Professor"

# 部局名
department: "School of Engineering / Graduate School of Engineering"

# 開講時限
term: "2012	Spring"

# 対象者、単位数、授業回数（修正用の元データ）
class_is_for: "工学研究科電子情報システム専攻　博士前期課程、2単位、週1回全15回"

# 対象者
target: "Graduate students of Electrical Engineering and Computer science Course"

# 授業回数
classes: "1.5 hours / session
  One session / week
  15 weeks / semester"

# 単位数
credit: "2"

# pdfなどの追加資料
attachments:
  - name: "講義ノート" 
    path: https://ocw.nagoya-u.jp/files/207/ocw_yamazato.pdf

# 関連するタグ
# （頻度の高い単語を出力）
tags:
    - theory
    - engineering
    - detection
    - transmission
    - WSN
# カテゴリ
category:
 - "Engineering"

# 色付けのロールにするか
featuredpost: true

# 画像
## rootフォルダはstaticになっている
## なにも指定がない場合はデフォルトの画像が表示される
## 映像がある場合は映像優先で表示する

# 映像のURL
## なにも指定がない場合は画像が表示される
movie: https://nuvideo.media.nagoya-u.ac.jp/embed/05678a76f144c3e406e77314c98250db531efa12

# 記事投稿日
date: 2020-04-27 14:53:03
---

![Signal Transmission and Detection Theory](https://ocw.nagoya-u.jp/files/207/WSN.jpg)

### Key Features

This lecture is alternatively taught in the every other year with Professor Masaaki Katayama. When my turn comes to take charge of the lecture, I teach WSN.

Theory of WSN covers, sensing theory, communication and networks, distributed sensing theory, signal processing, control theory, system theory and more. In this lecture, I mainly focus on signal processing and detection theory, communication and network theory. I try to organize to teach only the essence of those theories and try not to give every detail. Students will be asked to read the original papers of WSN for deeper understanding and write reports about them. I also present brief survey of current research trend of WSN to draw students' attentions.

### Course Aims

1. To introduce the fundamentals of WSN and students can explain feature, technical problem and the trend of WSN.
2. To introduce the distributed detection and students can explain it.
3. To introduce the capacity of WSN and students can explain it.
4. To introduce the protocol of WSN and students can explain it.

### Recommended Courses

It is highly recommended that you take the courses "Transmission System Engineering", "Information & Communications Engineering 1", "Information & Communications Engineering 2", and "Information & Communications Engineering 3" beforehand.

<h3>Course Schedule</h3>
<h4>Chapter1: Overview</h4>
<table class="basic" width="455">
<tr>
<th width="20" class="center">Session</th>
<th width="435" class="center">Contents</th>
</tr>
<tr>
<td width="20" class="center">1</td>
<td width="435">Ubiquitous and wireless sensor network(WSN)</td>
</tr>
<tr>
<td width="20" class="center">2</td>
<td width="435">Feature of WSN, technical problem and its trend</td>
</tr>
</table>
<h4>Chapter2: The signal processing and detection theory in WSN</h4>
<table class="basic" width="455">
<tr>
<th width="20" class="center">Session</th>
<th width="435" class="center">Contents</th>
</tr>
<tr>
<td width="20" class="center">3</td>
<td width="435">Expression and analysis of observation space</td>
</tr>
<tr>
<td width="20" class="center">4</td>
<td width="435">Distributed detection and sensor fusion</td>
</tr>
<tr>
<td width="20" class="center">5</td>
<td width="435">Kalman filters and particle filters</td>
</tr>
<tr>
<td width="20" class="center">6</td>
<td width="435">Distributed detection and Kullback&#8211;Leibler divergence (information gain)</td>
</tr>
</table>
<h4>Chapter3: The signal transmission in WSN</h4>
<table class="basic" width="455">
<tr>
<th width="20" class="center">Session</th>
<th width="435" class="center">Contents</th>
</tr>
<tr>
<td width="20" class="center">7</td>
<td width="435">Expression of transmission signal</td>
</tr>
<tr>
<td width="20" class="center">8</td>
<td width="435">The signal transmission in WSN</td>
</tr>
<tr>
<td width="20" class="center">9</td>
<td width="435">Channel capacity</td>
</tr>
<tr>
<td width="20" class="center">10</td>
<td width="435">Network capacity</td>
</tr>
<tr>
<td width="20" class="center">11</td>
<td width="435">Network information theory</td>
</tr>
</table>
<h4>Chapter4: Realization of WSN</h4>
<table class="basic" width="455">
<tr>
<th width="20" class="center">Session</th>
<th width="435" class="center">Contents</th>
</tr>
<tr>
<td width="20" class="center">12</td>
<td width="435">Protocols of WSN</td>
</tr>
<tr>
<td width="20" class="center">13</td>
<td width="435">Platform of WSN</td>
</tr>
<tr>
<td width="20" class="center">14</td>
<td width="435">Applications of WSN1</td>
</tr>
<tr>
<td width="20" class="center">15</td>
<td width="435">Applications of WSN2</td>
</tr>
</table>

<h3>Reports and Assignments</h3>

Assignments 1

- WSN are considered as the fundamental technology to realize ubiquitous society. However, it is yet to become widespread. Arrange to the report concerning why sensor network does not spread; and give examples of the technical issues for spreading.

Assignments 2

- Read the following article on WSN and arrange to the report concerning the trend of WSN.

<ul><li>I. Akyildiz, W. Su, Y. Sankarasubramaniam, and E. Cayirci, "A Survey on Sensor Networks,"

IEEE Communications Magazine, Vol. 40, no. 8, pp. 102-114, Aug. 2002</li></ul>

Assignments 3

- Read the following paper on Kalman filter and arrange to the report concerning the Kalman filter. <ul><li>G. Welch and B. Bishop, "An Introduction to the Kalman Filter," <a href="http://www.cs.unc.edu/~welch/kalman/kalmanIntro.html">http://www.cs.unc.edu/~welch/kalman/kalmanIntro.html</a>

</li></ul>

Assignments 4

- Arrange to the report concerning the Slepian-Wolf source coded theorem.

Assignments 5

- Arrange to the report concerning Energy Harvesting in WSN.

### Grading

- Students are required to achieve objectives written in course targets.
- Evaluation will be given based on reports and assignments.
- It is required to get more than 55% to get credits from this course.

---
