import React from "react";
import { withPrefix, Link } from "gatsby";
import "bulma/css/bulma.css";
import styled from "styled-components";

import LayoutEn from "@common/Layout/LayoutEn";
import HelmetForOGPEn from "@common/Helmet/HelmetForOGPEn";

const EnCatalogGradIndexPage = () => {
  return (
    <LayoutEn>
      <HelmetForOGPEn title={"English-Taught Course Catalog for Graduate"} />
      <section className="section">
        <div className="container is-paddingless">
          <div className="section is-paddingless">
            <div className="content is-paddingless is-size-5-mobile is-size-5-tablet is-size-4-widescreen">
              <div
                className="is-paddingless"
                style={{
                  height: "60px",
                  backgroundColor: `#FF6860`,
                  marginTop: "30px",
                  marginBottom: "20px",
                }}
              >
                <img
                  className="is-paddingless"
                  src={withPrefix("/img/catalog/grad/c_type_title.png")}
                ></img>
              </div>
              <Accordion>
                <InputAcParent type="checkbox" id="ac0"></InputAcParent>
                <LabelAcParent for="ac0">Letters</LabelAcParent>
                <DivAcParentContent>
                  <InputAcChild type="checkbox" id="ac0-0"></InputAcChild>
                  <LabelAcChild for="ac0-0">
                    Critical Literary Analysis
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      "Love" at first sight appears as an obvious concept, but
                      in reality it has undergone radical changes over time and
                      differs depending on the cultural context. This course
                      explores representations of love, longing, and desire in
                      modern Japanese culture and literature. Following a brief
                      excursion to pre-modern understandings of love and tracing
                      its translation into a modern, westernized notion, we ask
                      how love has been conceptualized in relation to sexuality,
                      gender, marriage, and the modern nation state. In
                      particular, we will discuss the (literary) representation
                      of themes such as romantic love, postwar pure love,
                      homosexual love, prostitution, love suicide, parental
                      love, and more.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac0-1"></InputAcChild>
                  <LabelAcChild for="ac0-1">
                    Transnational Japanese Literature
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This course will explore transnational Japanese
                      literature, particularly reconsidering the fixed notion of
                      nation-state in relation to literature. In particular, the
                      course will focus on the 20th century historical context
                      of the Japan-US relationship, and will examine
                      broadly-defined literature written by people who moved
                      back and forth between the two countries. Throughout the
                      course, we will critically examine the notion of
                      "Japanese", exploring the ways in which people's movement,
                      imperialism, war, language etc., affected their lives and
                      writings.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac0-2"></InputAcChild>
                  <LabelAcChild for="ac0-2">
                    Critical Film Analysis
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This course is designed to engage students with vital
                      research perspectives in Film Studies on theory, method
                      and analysis. Building upon the study of a wide range of
                      global films produced at different times, we would
                      navigate the students through several crucial strands of
                      film theories and cultivate their ability in critically
                      approaching the style, aesthetics, and politics of a film
                      work. Theoretical toolkits that we would explore include
                      but are not limited to mise-en-scene, thematic and auteur
                      criticism, genre, psychoanalysis, gender studies, new
                      media theory and so forth.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac0-3"></InputAcChild>
                  <LabelAcChild for="ac0-3">
                    Asian Cinema Before 1945
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      By figuratively dividing the film history in Asia into two
                      stages, namely the pre and post World War II periods, we
                      shall start our two-part survey on Asian film history with
                      this particular course, in which the highlight is directed
                      to early cinemas from East Asia. In positioning the survey
                      of films within the socio-historical exigencies and
                      cultural context of Japan, China (Taiwan &amp; Hong Kong)
                      and Korea before and during World War II, this course
                      offers the students an opportunity to engage with the
                      early cinemas and their evolvement from the perspective of
                      social history and discourses of modernities in this
                      region. Students are expected to acquire the basic
                      knowledge on early cinemas in Asia, and learn to analyze
                      films in relation to certain socio-cultural issues that
                      became significant during the timeframe under examination.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac0-4"></InputAcChild>
                  <LabelAcChild for="ac0-4">
                    Japanese Cinema Before 1945
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This class provides students with an opportunity to
                      analyze films related to historical issues. The course
                      comprises a combination of screenings, lectures, and
                      discussions.
                    </p>
                    <ul>
                      <li>Early Cinema, Early Star</li>
                      <li>Restructuring Japanese Cinema in the 1920s</li>
                      <li>Tendency Film and Marxism</li>
                      <li>
                        Shōshimin (Petit-bourgeois) Film and Everyday Life
                      </li>
                      <li>The Modern Girl and Modernity</li>
                      <li>Militarism and Nationalism</li>
                      <li>Empire and Colonialism</li>
                    </ul>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac0-5"></InputAcChild>
                  <LabelAcChild for="ac0-5">
                    Modern Japanese History
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This course surveys the dramatic transformation of Japan
                      from isolated "feudal" state to expansionist empire to
                      modern economic superpower and producer of hybrid cars,
                      cool games, cute characters, and wacky TV. The course has
                      the following principal goals:{" "}
                      <ol>
                        <li>
                          to become conversant with a general narrative of
                          events (1850-present)
                        </li>
                        <li>
                          to learn to read and interpret primary documents
                        </li>
                      </ol>
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac0-6"></InputAcChild>
                  <LabelAcChild for="ac0-6">
                    Japanese Culture and Asia
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This is an introduction to the formation of (mostly)
                      modern and contemporary Japanese culture(s) in the context
                      of East Asian histories and cultures. Rather than assuming
                      a singular, reified Japanese national culture-either
                      synchronically or diachronically-this class will attempt
                      to draw out the diversity of cultures in the archipelago
                      as well as their relationships to the larger East Asian
                      milieu.{" "}
                      <ol>
                        <li>
                          Develop an understanding of Japanese culture(s) in
                          East Asian context.
                        </li>
                        <li>
                          Develop critical reading, analytical, and
                          communication skills.
                        </li>
                      </ol>
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac0-7"></InputAcChild>
                  <LabelAcChild for="ac0-7">
                    Japanese Literature and Gender
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      The course is intended to examine the relationship between
                      literature and gender from a broad perspective. To this
                      end, we will look at literary representations of gender
                      and sexuality issues within a wide range of modern and
                      contemporary literary texts. We will also consider how
                      gender plays an important role when it comes to the
                      production and reception of literature in different
                      historic and social contexts. The course will cover the
                      gendering of representational modes, reading practices,
                      writing and genre conventions, and much more.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac0-8"></InputAcChild>
                  <LabelAcChild for="ac0-8">
                    Contemporary Film Theory
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This course aims to provide students with a survey on
                      contemporary Western film theories mainly after the 1960s.
                      More specific goals are:
                    </p>
                    <ol className="parenthesized-decimal">
                      <li>to understand contemporary film theories</li>
                      <li>
                        to nurture a critical and analytical view on visual
                        media, particularly cinema
                      </li>
                      <li>
                        to develop each student's knowledge and questions with a
                        wide scope of contemporary intellectual thoughts
                      </li>
                    </ol>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac0-9"></InputAcChild>
                  <LabelAcChild for="ac0-9">
                    Research Methods for Culture and History I
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This course surveys the basics of research methodology
                      used in cultural and historical studies. Class will cover
                      such issues as what is required in good research,
                      developing a research question, and how to write a
                      research proposal and literature review. Students are
                      expected to read and analyse exemplary research articles
                      in the field, and also practice designing and writing
                      their own proposal and literature review. There will be
                      end of term presentation sessions regarding individual
                      research.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac0-10"></InputAcChild>
                  <LabelAcChild for="ac0-10">
                    Research Methods for Culture and History IV
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      Planned as the second part of reviewing and practicing
                      research methods for graduate studies, this course aims to
                      examine research with various methods in cultural and
                      historical studies, and provide students an opportunity to
                      conduct their own research using the methods covered in
                      class. Students are expected to develop and write a
                      chapter that can be a part of their master's thesis. Most
                      classes will be in seminar form, presenting, analysing and
                      discussing exemplary research articles tailored to each
                      student's research project. There will be mid and end of
                      term presentation sessions to report and discuss the
                      progress of individual research.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac0-11"></InputAcChild>
                  <LabelAcChild for="ac0-11">
                    Graduate Seminar: Literary Theory and Practice I
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      The course aims to deepen graduate students' understanding
                      of research approaches to the study of modern and
                      contemporary Japanese literature, as well as related
                      fields. This graduate seminar will examine a broad range
                      of topics in modern literature and related fields. The
                      course is designed to give maximum support to students and
                      aims to familiarize them with critical and theoretical
                      approaches useful for their specific research projects.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac0-12"></InputAcChild>
                  <LabelAcChild for="ac0-12">
                    Graduate Seminar: Literary Theory and Practice IV
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This is a reading-intensive course the outcome of which
                      depends on your preparation and active discussion in
                      class. This graduate seminar will examine a broad range of
                      topics in modern literature and related fields. The course
                      is designed to give maximum support to students and aims
                      to familiarize them with critical and theoretical
                      approaches useful for their specific research projects.{" "}
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac0-13"></InputAcChild>
                  <LabelAcChild for="ac0-13">
                    Graduate Seminar: Cinema Theory and Practice I
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      In this fast-changing, ever globalizing world, the life
                      and existence of human beings are to a great extent
                      defined by the urban condition they are enmeshed within
                      and struggling with. This seminar attempts to survey major
                      urban issues and cultural topics in modern societies by
                      engaging with a wide spectrum of cultural texts drawn from
                      films and related media texts; in case studies, particular
                      attention is paid to the social context and cities in
                      Asia. Through the seminar, students will learn to approach
                      and critique the cultural space of cities by utilising key
                      concepts drawn from various theoretical perspectives such
                      as cultural studies, visual culture and sociology.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac0-14"></InputAcChild>
                  <LabelAcChild for="ac0-14">
                    Graduate Seminar: Cinema Theory and Practice IV
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This theory-intensive seminar seeks to explore and reflect
                      upon cinematic image's (im)possibility in representing
                      memory, desire and reality in contemporary times.
                      Following a one-month theory building session based on
                      group reading/discussion of works by philosophers and art
                      historians such as Michel Foucault, Georges Didi-Huberman
                      and Jacques Ranciere, we dedicate the remaining part of
                      the seminar to the critical analysis of a group of
                      contemporary films by global filmmakers, most of which are
                      documentaries. Through this unusual journey, not only do
                      we reconsider how would cinema and image engage political
                      movements and subjects that have been either significant
                      to or suppressed in modern history. Also, we hope that the
                      exploration of both political images and of the politics
                      of image would illuminate our continuing debate in the
                      field of film studies and visual culture.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac0-15"></InputAcChild>
                  <LabelAcChild for="ac0-15">
                    Graduate Seminar: Modern Japanese Cultural History I
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      Field research on Japanese history in Nagoya. First, we
                      will visit archives, libraries, and museums to gather
                      primary resources. We will analyze these resources to
                      produce a single, group project on the history of Nagoya
                      and its environs.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac0-16"></InputAcChild>
                  <LabelAcChild for="ac0-16">
                    Graduate Seminar: Modern Japanese Cultural History IV
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      Food is fundamental. It has unparalleled social, economic,
                      and political significance, and is a key marker of power
                      and identity. According to eminent British food historian
                      Ben Rogers, "after language, food is the most important
                      bearer of national identity." Food often serves as a
                      symbol of the primordial self, of "our land," and "our
                      history," and some of the most important national-cultural
                      divisions of humankind are intimately related to diet.
                      Food, as one commentator observed, "is not just relevant,
                      but critical to dozens of disciplines. It's agriculture;
                      it's business; it's health; it's the economy; it's the
                      environment; it's international relations; it's war and
                      peace."
                    </p>
                  </DivAcChildContent>
                </DivAcParentContent>
                <InputAcParent type="checkbox" id="ac1"></InputAcParent>
                <LabelAcParent for="ac1">
                  Education and Human Development
                </LabelAcParent>
                <DivAcParentContent>
                  <InputAcChild type="checkbox" id="ac1-0"></InputAcChild>
                  <LabelAcChild for="ac1-0">
                    Seminar on Psychometrics I
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      Data analysis ability has become more important in
                      societies. This course deals with several fundamental
                      concepts in psychometrics, educational measurement, and
                      statistics. We do NOT focus on remembering data analysis
                      techniques, but on understanding thoughts and principles
                      behind them. It will provide you with the insight of how
                      you should obtain data, analyze them, and derive
                      conclusions. There are a lot of topics we recommend you to
                      study. In this semester, we will focus on TEST
                      DEVELOPMENT.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac1-1"></InputAcChild>
                  <LabelAcChild for="ac1-1">
                    Seminar on Psychometrics II
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      Data analysis ability has become more important in
                      societies. This course deals with several fundamental
                      concepts in psychometrics, educational measurement, and
                      statistics. We do NOT focus on remembering data analysis
                      techniques, but on understanding thoughts and principles
                      behind them. It will provide you with the insight of how
                      you should obtain data, analyze them, and derive
                      conclusions. There are a lot of topics we recommend you to
                      study. In this semester, we will focus on what most
                      attendants want to study in the class. It may be the
                      sequel of the previous semester or completely a new topic.
                      We will decide the topic in the Spring semester together.
                      If you have any requests or ideas, please inform the
                      course instructor.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac1-2"></InputAcChild>
                  <LabelAcChild for="ac1-2">
                    Seminar on Anthropology of Education I
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      Education problems in a society are often perceived as a
                      political or government decision based problem. But if we
                      see the reality in many countries, some of those problems
                      are actually cultural based. As a Well-being program
                      course, this anthropology of education course aims to
                      equip students (participants) with greater understanding
                      of education problems and culture so as to create
                      wellbeing in Asia from the perspective of women leaders.
                      Students learn some important concepts related to cultural
                      issues (religion, philosophy, manner, oral culture, etc.)
                      in educational problems with reference to real problems
                      happening in the South East Asia region.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac1-3"></InputAcChild>
                  <LabelAcChild for="ac1-3">
                    Seminar on Philosophy of Human Becoming I
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      The aim of education processes is a basic problem, which
                      should be discussed before other themes. Sometimes,
                      however, this theme is skipped and discussion on education
                      will flow to themes such as curriculum, education content,
                      pedagogic, skill etc. Does education in every nation have
                      the same aim? As a Well-being program course, this seminar
                      on philosophy of human becoming course aims to equip
                      students (participants) with greater understanding of the
                      aims of education process in societies, with special
                      reference to South East Asia. The goal of the course is to
                      have participants understand the varieties of human
                      becoming processes and its objective as the goal of
                      education in societies.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac1-4"></InputAcChild>
                  <LabelAcChild for="ac1-4">
                    Seminar on Social Psychology I
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      Wellbeing is one of the main aims in life for people in
                      modern society. However, the science of well-being and
                      happiness is a relatively new branch of Psychology. This
                      course offers a scientific exploration of the topic
                      through the lenses of Social and Positive Psychology,
                      exploring the key issues with cross-cultural references.
                      The class focuses on the psychological aspects of a
                      fulfilling and flourishing life with special emphasis on
                      the wellbeing of women.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac1-5"></InputAcChild>
                  <LabelAcChild for="ac1-5">
                    Seminar on Social Psychology I
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This course aims to introduce students to intercultural
                      education and training, covering background theories,
                      practical methods, ethics, and evaluation. As part of
                      human resources development (HRD), intercultural education
                      and training equips personnel with cognitive, affective,
                      and behavioral skills to deal with cross-cultural
                      interaction. We will look at cross-cultural theories that
                      identify difficulty in communication between cultures, and
                      then discuss what content and method would be most
                      effective in training people to deal with such difficulty.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac1-6"></InputAcChild>
                  <LabelAcChild for="ac1-6">
                    Seminar on Sociology of Education I
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      In the human development process, the problem of a
                      society's values and how they induct other members into
                      through education should be an issue of concern since it
                      could interfere with people's wellbeing. If anthropologist
                      are trying to look at what really happened in a society
                      (what is the purpose of education but to build a
                      society?), to know how people recognise their own problems
                      and explain them logically is important. By knowing how a
                      society identifies problems related to education
                      (theoretically), we can know the relation between ideology
                      and views in the society and how the same ideology is
                      applied within that society.
                    </p>
                  </DivAcChildContent>
                </DivAcParentContent>
                <InputAcParent type="checkbox" id="ac2"></InputAcParent>
                <LabelAcParent for="ac2">Law</LabelAcParent>
                <DivAcParentContent>
                  <InputAcChild type="checkbox" id="ac2-0"></InputAcChild>
                  <LabelAcChild for="ac2-0">Academic Writing I</LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This course covers issues in the first phase of a thesis
                    </p>
                    <ul>
                      <li>Topic selection</li>
                      <li>Basic research strategies</li>
                      <li>Bibliography development</li>
                      <li>Literature review</li>
                      <li>Correct use of footnotes</li>
                      <li>Table of Contents</li>
                      <li>Composition: drafting the Introduction</li>
                    </ul>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac2-1"></InputAcChild>
                  <LabelAcChild for="ac2-1">Academic Writing I</LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This course introduces participants to the first phase of
                      academic writing. The first phase covers topics, including
                      selecting a thesis topic, basic research skills, writing a
                      survey paper, developing a bibliography, referencing,
                      creating a table of contents, and developing an
                      introduction. Weekly practical assignments will help
                      students hone their academic writing skills.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac2-2"></InputAcChild>
                  <LabelAcChild for="ac2-2">Academic Writing II</LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This course examines various styles and methods used in
                      academic writing within the Social Sciences. It introduces
                      students to the idea of clarity and consistency in
                      writing. The course is open to all graduate students in
                      law school who are interested in the topic; however, it is
                      aimed primarily at the introductory level of academic
                      work. The course is designed to supplement and enhance
                      Academic Writing courses I &amp; III and will include a
                      review of the grammar and structural issues that often
                      plague students at this level as well as provide lessons
                      on developing organized paragraphs. At present, no text is
                      offered although there will be required supplementary
                      lessons accessed through My Writing Lab. Students are
                      advised to become familiar with the required departmental
                      writing guidelines for their theses available on the GSL
                      web-site.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac2-3"></InputAcChild>
                  <LabelAcChild for="ac2-3">Academic Writing III</LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This course is a combination of 15 interactive lectures
                      and 2 compulsory individual meetings with Prof. Lawson.
                      The lectures are held as a double-period class on Friday
                      mornings in October and November. Individual meetings will
                      be scheduled at other times during the period from October
                      to mid-December. Appointments will be held in the Writing
                      Booths in the Main Library Learning Commons.{" "}
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac2-4"></InputAcChild>
                  <LabelAcChild for="ac2-4">
                    Comparative Law Workshop
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This workshop fully acknowledges the ever increasing need
                      for comparison in a world in which pluralistic and
                      transnational features are commonplace. In addressing the
                      'comparative study of law', it covers broad fields
                      comprising different scholarly orientations and inside
                      debates. However, rather than focusing on knowledge about
                      comparative law as a separate academic field of legal
                      science in the law curriculum, this workshop provides
                      students with the opportunity to actually engage in
                      comparative legal studies. First, they will gain a
                      critical appreciation of the need to undertake the complex
                      task of studying law comparatively. Second, they will
                      learn how to handle a wide range of transborder issues
                      through various comparative research strategies, practices
                      and techniques from a comparative perspective. Focusing
                      more precisely on questions relating to cross-border legal
                      institution design, this workshop deals with the many
                      processes involved in contemporary legal borrowings, and
                      questions the pertinence from a practical perspective of
                      concepts (including 'legal transplants') generally used by
                      comparatists to explain the 'transfrontier mobility of the
                      law'.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac2-5"></InputAcChild>
                  <LabelAcChild for="ac2-5">
                    Comparative Politics Workshop
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This course builds on the knowledge acquired in political
                      science for undergraduates, and focuses on the comparative
                      perspective and critical thinking skills required to make
                      policies. Regular reading assignments will be issued and
                      class members will take an active role in discussing the
                      issues. Prof. Westra will also provide supplementary
                      sessions on international political economics to enable
                      students to understand the context of contemporary
                      domestic politics. A short final essay will test basic
                      knowledge and skills acquired during the course, but our
                      most important work will be done in class discussions.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac2-6"></InputAcChild>
                  <LabelAcChild for="ac2-6">
                    Comparative Studies in Administrative Law
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      In 1947, the Judicial Constitution Act and the
                      Administrative Court Act were repealed. This marked a new
                      beginning for the new court system. More than 60 years
                      have since passed during which time the system of judicial
                      review of administrative action has developed. However,
                      the contemporary situation raises many problems for us for
                      which we need urgent reform. Through this lecture,
                    </p>
                    <ol className="right-parenthesized-decimal">
                      <li>a brief history of administrative law in Japan,</li>
                      <li>basic legal framework of administrative action,</li>
                      <li>administrative procedures, and</li>
                      <li>administrative litigation will be explained.</li>
                    </ol>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac2-7"></InputAcChild>
                  <LabelAcChild for="ac2-7">
                    Comparative Studies in Business Law I
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This course aims to explore some characteristic regimes of
                      company law from a comparative perspective. Each class
                      deals with specific topics related to company law,
                      inspired by theoretical and practical discussions about
                      German, UK and US company law carried out in a comparative
                      manner. Depending on students' interests and enthusiasm,
                      the comparison can extend to counterparts in Japanese or
                      other students' home countries.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac2-8"></InputAcChild>
                  <LabelAcChild for="ac2-8">
                    Comparative Studies in Civil Law I
                  </LabelAcChild>
                  <DivAcChildContent>
                    <ol className="ol-decimal">
                      <li>Introduction Planning to the lecture</li>
                      <li>Stolen backhoe case, Exercise 1</li>
                      <li>
                        Introduction to Civil Law{" "}
                        <ol className="parenthesized-upper-alpha">
                          <li>What is Civil Law? Exercise 2 and 3</li>
                          <li>History of Civil Code of Japan</li>
                          <li>
                            Comparison Civil Code of Japan with Uniform law
                            (CISG, Unidroit Principles and PECL)
                          </li>
                        </ol>
                      </li>
                      <li>
                        Formation of Contract{" "}
                        <ul>
                          <li>
                            Principles of the formation of contract, Exercise 4
                            and 5
                          </li>
                        </ul>
                      </li>
                      <li>
                        Validity of Contract{" "}
                        <ul>
                          <li>
                            Principles of the validity of contract, Exercise 6
                            and 7
                          </li>
                        </ul>
                      </li>
                      <li>
                        Performance of contract{" "}
                        <ol className="parenthesized-upper-alpha">
                          <li>Principles of the contents of contract</li>
                          <li>Principles of the performance of contract</li>
                        </ol>
                      </li>
                      <li>
                        Non-performance of contract and its remedies{" "}
                        <ul>
                          <li>
                            Principles of the non-performance and remedies of
                            contract, Exercise 8 and 9{" "}
                          </li>
                        </ul>
                      </li>
                      <li>Principles of unjust enrichment, Exercise 10</li>
                      <li>Presentation of participants groups</li>
                    </ol>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac2-9"></InputAcChild>
                  <LabelAcChild for="ac2-9">
                    Comparative Studies in Civil Law II
                  </LabelAcChild>
                  <DivAcChildContent>
                    <ol className="decimal">
                      <li>
                        Introduction{" "}
                        <ol className="parenthesized-upper-alpha">
                          <li>
                            Frequency of application of tort law by Japanese
                            courts
                          </li>
                          <li>Types of tort law around the world</li>
                        </ol>
                      </li>
                      <li>
                        General tort law{" "}
                        <ol className="parenthesized-upper-alpha">
                          <li>
                            Illustration of Point of Due Care{" "}
                            <ol className="parenthesized-lower-alpha">
                              <li>Breach of the duty of foreseeability</li>
                              <li>Breach of the duty of avoidability</li>
                            </ol>
                          </li>
                          <li>
                            Causality between the tortfeasor's act and damages{" "}
                            <ol className="parenthesized-lower-alpha">
                              <li>Factual causation</li>
                              <li>Adequate causation</li>
                            </ol>
                          </li>
                        </ol>
                      </li>
                      <li>
                        Specific tort law{" "}
                        <ol className="parenthesized-upper-alpha">
                          <li>
                            Case study on joint torts{" "}
                            <ol className="parenthesized-lower-alpha">
                              <li>Judgment of Supreme Court, 13 March, 2001</li>
                              <li>Judgment of Supreme Court, 11 July, 2003</li>
                            </ol>
                          </li>
                          <li>Product Liability</li>
                        </ol>
                      </li>
                      <li>Summary of the Lecture</li>
                      <li>
                        Presentation{" "}
                        <ul>
                          <li>
                            The results of the application of your country's
                            Tort law to the same cases that I prepared in my
                            lecture.
                          </li>
                        </ul>
                      </li>
                    </ol>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac2-10"></InputAcChild>
                  <LabelAcChild for="ac2-10">
                    Comparative Studies in Constitutional Law
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This course is an introduction to the theory of the modern
                      Constitution followed by a comparative analysis of issues
                      in Japan and selected Asian countries.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac2-11"></InputAcChild>
                  <LabelAcChild for="ac2-11">
                    Comparative Studies in Criminal Law
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      The purpose of this course is to analyze development of
                      national criminal law under the influence of foreign and
                      international law. Comparison between different judicial
                      families such as common law countries, countries with
                      continental European legal tradition, Islamic countries
                      and so on will be particularly focused on. Participants
                      are required to report their country's experience and
                      their view on desirable legislation in the future. Legal
                      systems in general as well as specific topics in criminal
                      law and criminal procedure will be discussed.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac2-12"></InputAcChild>
                  <LabelAcChild for="ac2-12">
                    Comparative Studies in Judicial System
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This course is an introduction to the Japanese judicial
                      system in comparative perspective with Asian countries.
                      Discussions about judicial reform in students' countries
                      are also included.{" "}
                    </p>
                    <ol>
                      <li>
                        Theory and practice of the Japanese judicial system,
                      </li>
                      <li>
                        Legal professions(judges, public prosecutors, and
                        lawyers)in Japan,
                      </li>
                      <li>The judicial systems of Asian countries; and</li>
                      <li>
                        Issues related to judicial reform in Asian countries.
                      </li>
                    </ol>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac2-13"></InputAcChild>
                  <LabelAcChild for="ac2-13">
                    Comparative Studies in Jurisprudence I
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      What is the most difficult aspect of setting up a legal
                      system? Legislation, funding, or the provision of
                      facilities? Each of these stages does have its own
                      problems, but it is believed that training of personnel
                      presents the biggest hurdle. Technical, legal and moral
                      competence is required for those who staff and run the
                      legal system. How can legal education provide such
                      qualities to its trainees? Discussion and interviews are
                      conducted following intensive reading on the subject.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac2-14"></InputAcChild>
                  <LabelAcChild for="ac2-14">
                    Comparative Studies in JurisprudenceII
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This seminar will combine the theory of legal and business
                      ethics with the practicalities of developing nations.
                      Students will wrestle with questions such as how one can
                      be ethical when working in a system containing corruption.
                      The course, on the one hand, will draw upon theory of
                      liberal democracy and the constitutional state. On the
                      other, it will ask students to address scenarios testing
                      their practical knowledge and rectitude. Practitioners and
                      experts will participate as necessary. The course will be
                      taught in English. Students will give oral presentations
                      of assigned topics during the course. A short research
                      paper is also required as the final essay. International
                      and Japanese students are invited to attend.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac2-15"></InputAcChild>
                  <LabelAcChild for="ac2-15">
                    Comparative Studies in Politics I
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This course deals with several important topics of the
                      Meiji and Taisho periods when Japanese democracy was
                      developing. Students will be required to make a
                      presentation and discuss certain topics in the text books
                      during each class.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac2-16"></InputAcChild>
                  <LabelAcChild for="ac2-16">
                    Comparative Studies in Politics II
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This course is designed to help students understand the
                      evolution of Japanese diplomacy and the dynamics of
                      contemporary international relations:{" "}
                      <ol>
                        <li>
                          History of Japanese Foreign Policy since the Meiji
                          Restoration
                        </li>
                        <li>The Role of Japan in Asian Security Cooperation</li>
                        <li>History of International Relations Theory</li>
                        <li>International Security in the Post-Cold War Era</li>
                        <li>
                          The United Nations and International Organizations
                        </li>
                      </ol>
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac2-17"></InputAcChild>
                  <LabelAcChild for="ac2-17">
                    Comparative Studies in Public Administration
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      In the first half of the seminar, we will read each
                      chapter of the text on comparative public administration
                      and discuss related arguments. In the second half, each
                      student will report about the Public Administration of
                      his/her country and discuss the report.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac2-18"></InputAcChild>
                  <LabelAcChild for="ac2-18">
                    Legal Transplantation
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      It has been six years since Uzbek government forces killed
                      hundreds of unarmed protesters in the eastern city of
                      Andijan on May 13, 2005, following prison attacks by armed
                      men. Divergent views persist today with regard to this
                      Andijan tragedy in the context of human rights and
                      democracy.{" "}
                    </p>
                    <p>
                      The position taken by the Uzbek government, supported by
                      Russia, China and countries in Central Asia, places the
                      blame on the terrorists. It claims that the armed group
                      belonged to the terrorists group known as Akramia - a
                      faction of the illegal Hizb-ut-Tahri (an Islam
                      fundamentalist Party), which sought to establish an
                      Islamic State refusing to accept human rights and
                      democracy. They attacked the prison and used citizens as
                      human shields while attempting to withdraw. That was how
                      the gun battle started and they should be held responsible
                      for the subsequent deaths. Uzbekistan has no choice but to
                      respond to "violence" by the Islamic fundamentalists, who
                      reject human rights and democracy, with equal violence.
                      The argument states that, for a premature secular state
                      that had gained independence for a mere 20 years, any
                      response to violence by means of respect for human rights
                      and democracy would lead to the demise of the State and
                      therefore the end of human rights and democracy. (Cry like
                      a wolf when living with the wolf).
                    </p>
                    <p>
                      In light of this first view, certain Western countries and
                      international human rights NGOs come up with their
                      critical arguments that human rights were violated in
                      Uzbekistan under the pretext of fighting terrorism led by
                      the Islamic fundamentalists. Even a young 20-year-old
                      independent State has a duty to respect human rights and
                      democracy. Notwithstanding the future goal of human rights
                      and democracy, violence carried out in response to
                      violence will create a vicious circle of violence and
                      hatred and render the future goal unachievable.
                    </p>
                    <p>
                      Six years after the Andijan tragedy, this criticism of
                      Uzbekistan has not changed. For example, the Human Rights
                      Watch included the following wording in its 2012 World
                      Report: Uzbekistan's human rights record remains
                      appalling, with no meaningful improvements in 2011.
                      Torture remains endemic in the criminal justice system.
                      Authorities continue to target civil society activists,
                      opposition members, and journalists, and to persecute
                      religious believers who worship outside strict state
                      controls. What should be an appropriate way for
                      Uzbekistan, a State still in the building process and the
                      front line of the war against terror, to develop its own
                      goals of human rights and democracy? How should legal
                      assistance proceed to promote the development of human
                      rights and democracy in this country? This paper reviews
                      some lessons learned from JICA's experience of legal
                      assistance (assistance in drafting the law on
                      administrative procedures) in Uzbekistan and raises some
                      issues that may be useful for the development of
                      comparative studies in administrative law.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac2-19"></InputAcChild>
                  <LabelAcChild for="ac2-19">On-demand Seminars</LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      The purpose of this course is to explore the main
                      methodological traditions and their practical implications
                      in comparing different legal institutions in a globalized
                      world. The first session (lectures 1-3) will consist of a
                      theoretical inquiry into traditional, as well as
                      innovative, comparative law methods. We will study how to
                      compare and apply these methods to the most controversial
                      topics existing within the current legal debate. In the
                      second session (lectures 4-6), we will turn our attention
                      to globalization, an area in which comparative law is
                      essential for understanding many contemporary relevant
                      phenomena.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac2-20"></InputAcChild>
                  <LabelAcChild for="ac2-20">
                    Professional Studies in Contemporary Legal Disciplines
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This course examines property law from a comparative
                      perspective. Specific topics to be explored include:
                    </p>
                    <ul>
                      <li>Ownership</li>
                      <li>Adverse possession</li>
                      <li>Registration and deed recording systems</li>
                      <li>Mortgage lending and priorities</li>
                      <li>Intangible property rights</li>
                    </ul>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac2-21"></InputAcChild>
                  <LabelAcChild for="ac2-21">
                    Professional Studies in International Economic Law I
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This course focuses on the law of the World Trade
                      Organization (WTO). It examines both its institutional and
                      substantive aspects including its structure, decision
                      making procedures, and dispute settlement procedures as
                      well as major principles used to promote free trade.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac2-22"></InputAcChild>
                  <LabelAcChild for="ac2-22">
                    Professional Studies in International Economic Law II
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This course is designed to examine certain problems of
                      international economic law, including the World Trade
                      Organization's legal system and international investment
                      laws. The course topics will be chosen in consultation
                      with students. In 2013, we took up various articles in
                      "International Investment Law and General International
                      Law: From Clinical Isolation to Systemic Integration?"
                      (Rainer Hofmann &amp; Christian J. Tams (eds), 2011).
                      Students are expected to give presentations on assigned
                      topics and make positive contributions to class
                      discussions.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac2-23"></InputAcChild>
                  <LabelAcChild for="ac2-23">
                    Professional Studies in International Human Rights Law II
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      In this seminar, we will choose some current problems
                      relating to International Human Rights Law or Refugee Law
                      as topics, and read relevant materials and/or articles. In
                      every class, reporters will make presentations on the
                      assigned subject(s). This will be followed by discussions
                      among participants.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac2-24"></InputAcChild>
                  <LabelAcChild for="ac2-24">
                    Professional Studies in International Human Rights Law I
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      International protection of human rights has largely
                      developed under the auspices of the United Nations. In
                      particular, international law in the field of human rights
                      has contributed greatly to such developments. The first
                      part of this course is designed to provide students with
                      general knowledge of international human rights law, and,
                      based on such perspectives, the second part will focus on
                      rather specific problems/situations around the world. (The
                      "international human rights law" mentioned above includes,
                      for example, the International Covenant on Civil and
                      Political Rights, and on Economic, Social and Cultural
                      Rights, the Convention of the Rights of Child, etc.) The
                      discussion of the course will evolve around the following
                      questions:{" "}
                      <ol>
                        <li>
                          What principles should form the foundations of
                          international human rights laws?
                        </li>
                        <li>
                          Under what conditions can an international law system
                          contribute to the realization of universal protection
                          of human rights?
                        </li>
                        <li>
                          What are the limitations of current international
                          human rights laws and institutions?
                        </li>
                      </ol>{" "}
                      Students are required to study assigned reading materials
                      prior to each class and to be prepared for discussions.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac2-25"></InputAcChild>
                  <LabelAcChild for="ac2-25">
                    Professional Studies in International Law
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This is an introductory course aimed at those who want to
                      study international law, with the aim of imparting what
                      international law is and how it functions. Due to time
                      constraints, it does not cover the entire field of
                      international law. However, through the analysis of the
                      ICJ judgment in the Nicaragua case, it will give you a
                      basic idea of international law. Emphasis will be placed
                      on the structural change of international law between
                      traditional and contemporary international law.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac2-26"></InputAcChild>
                  <LabelAcChild for="ac2-26">Project Management I</LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      The course is a combination of lectures, small group
                      workshops, and individual meetings with the instructor.
                      The lectures and small group work will take place in the
                      morning. Individual meetings will be scheduled at other
                      times during the period (Tuesday 9, October to Friday 19,
                      October). Each student is asked to SIGN UP after the end
                      of each lecture or workshop. Appointment confirmation will
                      be sent via e-mail. Check the INFORMATION areas of this
                      syllabus regularly for announcements.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac2-27"></InputAcChild>
                  <LabelAcChild for="ac2-27">
                    Seminar in International Law and Politics I
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This is an internship program for students. Each student
                      will develop a plan for an overseas internship and/or the
                      domestic internship in cooperation with the supervisor and
                      the program coordinator. The internship will take place
                      mainly during the summer months and each student will
                      experience some aspects of cross-border institutional
                      design. In addition, students can receive intensive
                      training in an Asian language and conduct research
                      relevant to their joint work as well as their individual
                      research.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac2-28"></InputAcChild>
                  <LabelAcChild for="ac2-28">
                    Special Lecture and Seminar (Introduction to the Japanese
                    Litigation)
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This lecture targets foreign students, aiming at providing
                      them with an overview of Japanese litigation procedure,
                      deepening their knowledge and understanding of the system
                      that can be applied to their own field of study.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac2-29"></InputAcChild>
                  <LabelAcChild for="ac2-29">
                    Special Lecture and Seminar (Comparative Asian Corporate
                    Theory)
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      Lecturers from the Tokyo Office of The Yomiuri Shimbun
                      will conduct this course in English, based on their
                      on-the-spot news coverage activities in Japan and many
                      other countries, including the United States, as well as
                      teaching experiences in California. A series of topics
                      related to Japan and other Asian countries will be
                      included in the lecture. The objective of this course is
                      not only to provide Asian students with global visions and
                      to prepare themselves as future leaders of their
                      respective countries, but also to encourage their interest
                      in news reporting.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac2-30"></InputAcChild>
                  <LabelAcChild for="ac2-30">
                    Special Lecture and Seminar (International Environmental
                    Law)
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      International environmental law (IEL), an evolving branch
                      of international law aimed at protecting the environment,
                      has been providing a legal framework for international
                      environmental cooperation. The main topics of the course
                      are as follows:{" "}
                      <ol>
                        <li>IEL and its Historical Development;</li>
                        <li>Key Concepts of IEL;</li>
                        <li>Law making of IEL;</li>
                        <li>Ensuring Compliance with IEL;</li>
                        <li>
                          Relationship between IEL and Other Areas of
                          International Law
                        </li>
                      </ol>
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac2-31"></InputAcChild>
                  <LabelAcChild for="ac2-31">
                    Special Lecture and Seminar (Japanese Judicial Institutions)
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      It would appear that overseas students entering the LL.M.
                      in Comparative Law Program (English-taught program) arrive
                      knowing very little about Japan. However, while this
                      course curriculum presents advanced theories of law in
                      each of its lecture series, there is a lack of explanation
                      for those new to Japanese law and society. Therefore, to
                      provide overseas students with some general information
                      regarding Japan, this course is run in conjunction with
                      the Aichi Prefectural Bar Association (International
                      Special Committee) and the teaching staff of Nagoya
                      University. Lectures are given in conjunction with onsite
                      visits (around half the time for each. Several lectures
                      are presented). The lectures consist of prior study of
                      relevant materials, pre-visit explanations, question and
                      answer sessions based on the visits, and a comparison of
                      the system in Japan with that in students' country so as
                      to further students' understanding of the law and society
                      in their own countries. It is important that the onsite
                      visits become the core part of the lectures so as to
                      enhance students' knowledge of Japanese society and law.
                      As a result of this varied learning experience, students
                      will make comparisons with their own countries' systems
                      and societies, and submit reports on future perspectives
                      they see developing for their own countries. Over the
                      course of a half year of lectures, students will be given
                      a vivid impression of the overall shape of Japanese
                      society and legal system.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac2-32"></InputAcChild>
                  <LabelAcChild for="ac2-32">
                    Special Lecture and Seminar (Japanese law and society)
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This seminar provides students with opportunities to learn
                      and discuss the actual functioning state of Japanese law
                      and the legal system in a social context. In this
                      semester, we will focus on the reality of legal resolution
                      of private disputes in Japan. The lecturer will suggest
                      reading materials (law articles) for each session. Topics
                      may include, but will not be limited to:
                    </p>
                    <ol className="upper-alpha">
                      <li>Reluctant litigants? Legacy of Kawashima theory.</li>
                      <li>
                        Socio-legal process of dispute resolution?different
                        strategies in different areas{" "}
                        <ol className="parenthesized-decimal">
                          <li>automobile accidents,</li>
                          <li>environmental pollution,</li>
                          <li>neighborhood noise disputes,</li>
                          <li>product liability,</li>
                          <li>medical malpractice, etc.</li>
                        </ol>
                      </li>
                      <li>
                        Court procedures for civil disputes{" "}
                        <ol className="parenthesized-decimal">
                          <li>Analysis of the Japanese judiciary,</li>
                          <li>
                            Roles of judge and parties in civil procedures,
                          </li>
                          <li>Small claims litigation/mediation.</li>
                        </ol>
                      </li>
                    </ol>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac2-33"></InputAcChild>
                  <LabelAcChild for="ac2-33">
                    Special Lecture and Seminar (Japanese Legal System)
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This lecture will provide international students who are
                      not familiar with the Japanese legal system with
                      fundamental knowledge on and a basic understanding of the
                      subject. The course will start with a description of
                      fundamental perspectives of comparative law. Students will
                      examine the Japanese legal system from different angles,
                      look into the basic structure of the Japanese government,
                      differences between the pre- and post-war eras,
                      legislation processes, the unique character of the
                      relationship between law and society, and recent reforms
                      of Japanese law.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac2-34"></InputAcChild>
                  <LabelAcChild for="ac2-34">
                    Special Lecture and Seminar (Legal Transformation in Japan
                    during the Early Period of the Allied Occupation)
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      The transformation that took place in Japan during the
                      period of the Allied occupation (1945-1952) is generally
                      regarded as a successful case of
                      institution-transplantation under international control
                      coupled with democratization. This example is considered a
                      good stepping stone for a study of "cross-border legal
                      institution transplantation". This lecture focuses on the
                      process of crafting the Constitution of Japan (promulgated
                      in 1946, entered into force in 1947), picking up and
                      examining the representative legal theories supporting
                      this transformation.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac2-35"></InputAcChild>
                  <LabelAcChild for="ac2-35">
                    Special Lecture and Seminar (Workshop on International
                    Negotiation)
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This special subject will cover negotiation and debating
                      skills relevant to international business transactions.
                      The course will be divided into two parts. In a series of
                      practical exercises, class members will be divided into
                      teams, and attempt to negotiate on the basis of the facts
                      presented in the exercise materials. In most class
                      sessions, half of class time will be assigned to
                      negotiation exercises, and half to discussion of the
                      outcome.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac2-36"></InputAcChild>
                  <LabelAcChild for="ac2-36">
                    Special Lecture and Seminar (Comparative Law and Politics
                    seminars I)
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      Course Design: This course is composed of three subjects.
                      The coursework of each subject will build on the last,
                      which means that each subject must be undertaken in the
                      appropriate order and successfully completed. Thus, Peer
                      Support Initiative 1 (PSI 1) must be completed before
                      moving onto PSI 2 and then PSI 3, which centers on
                      overseas training. It is not possible to skip any of these
                      subjects. About PSI-1 focuses on providing new
                      international students with information on Japan's
                      culture, society, laws and politics, as well as helping
                      these students to adjust their new environment. Japanese
                      students will gain an understanding of the laws, politics
                      and society of their respective international student
                      group members and explain Japanese law, politics and
                      society in a comparative way.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac2-37"></InputAcChild>
                  <LabelAcChild for="ac2-37">
                    Special Lecture and Seminar (Comparative Law and Politics
                    seminars II)
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      PSI-2 (Peer Support Initiative 2) prioritizes the law and
                      politics of the international students' home countries,
                      with the aim of deepening mutual understanding of the
                      participants' countries. To enable the characteristics of
                      the international students' home countries' legal and
                      political systems to be better highlighted, Japanese
                      students shall, when needed, provide information on Japan.
                      As far as possible, the international students will
                      explain the law and society of their own country in
                      Japanese. Opportunities for Japanese students to give the
                      same explanations in the languages of international
                      students will be increased. Documents containing these
                      explanations will be created by Japanese and international
                      students in cooperation with each other. Video
                      conferencing, multilingual group bulletin boards and so on
                      will be actively used, and collaborative learning will
                      take place in a variety of fields, not just in students'
                      specialist areas. The video conferencing system will be
                      useful for training within informal discussions. Small
                      group trips to investigate the courts and other judicial
                      institutions in Japan will be encouraged and students will
                      receive assistance to independently gather materials for
                      Japanese students' research of these places.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac2-38"></InputAcChild>
                  <LabelAcChild for="ac2-38">
                    Special Lecture and Seminar (Comparative Law and Politics
                    seminars III)
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      The purpose of this final phase is to bring together the
                      work carried out in the prior two semesters and to conduct
                      detailed field research. In this portion of the program,
                      students will conduct field research in their target
                      countries, complete a report detailing their research, and
                      present their research results. The field trip portion is
                      not required for foreign students though they are
                      encouraged to attend if possible. Foreign students are
                      however responsible for working with their Japanese team
                      members to organize the field research and cooperate in
                      the final report and research presentation.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac2-39"></InputAcChild>
                  <LabelAcChild for="ac2-39">
                    Special Lecture and Seminar (Intellectual Property Law)
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      In the first three classes, the instructor (Suzuki) will
                      give lectures. The students are supposed to study the
                      materials (distributed in advance) and prepare for the
                      discussion in the class. The remaining classes will be
                      conducted as seminars. Namely, assigned student(s) will
                      give presentations first, and then all the participants
                      join discussions which will be moderated by the assigned
                      student(s) with assistance from the instructor. In these
                      seminars, all the participants are expected to read
                      assignments (academic articles and/or court decisions with
                      comments) beforehand and contribute actively to the
                      discussion.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac2-40"></InputAcChild>
                  <LabelAcChild for="ac2-40">
                    Special Lecture and Seminars(Asian Family Law)
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      The purpose of this course is to allow students to develop
                      the skills needed to understand foreign legal systems and
                      search for better ways of building appropriate legal
                      systems for different communities using comparative
                      techniques. This series of lectures focuses mainly on East
                      and South Asia. Because Asia is a vast region that
                      contains a multitude of cultural backgrounds, we do not
                      have a clear definition of the term "Asian law". Only a
                      small number of universities in the world provide courses
                      on "Asian law" at either the undergraduate or graduate
                      level. The term is often used to refer simply to Chinese
                      law, even in Asia, or Indian law as it is in the United
                      Kingdom. In this course, we use East Asia in order to gain
                      a clearer understanding of contemporary Japanese law, and
                      South Asia to gain a better understanding of the actual
                      situation surrounding the application of religious laws.
                      During the course of these lectures we will learn how to
                      locate appropriate sources, a skill that is essential in
                      finding the applicable law and resolving legal problems.
                      An example of this would be finding the conditions
                      necessary for a valid marriage in the case of a mixed
                      marriage.
                    </p>
                  </DivAcChildContent>
                </DivAcParentContent>
                <InputAcParent type="checkbox" id="ac3"></InputAcParent>
                <LabelAcParent for="ac3">Economics</LabelAcParent>
                <DivAcParentContent>
                  <InputAcChild type="checkbox" id="ac3-0"></InputAcChild>
                  <LabelAcChild for="ac3-0">Accounting I</LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This course offers lectures about the Implementation of
                      Management Accounting System for SMEs in Japan; develops
                      an understanding through case studies of the
                      implementation of Management Accounting System for the
                      revival of SMEs in Japan; develops an understanding
                      through discussions about case studies; and enhances
                      applicable ability in the practice of Management
                      Accounting.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac3-1"></InputAcChild>
                  <LabelAcChild for="ac3-1">Accounting II</LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This course enhances applicable ability in VBM (value
                      based management), especially decision making for company
                      capital policy, financial strategy and M&amp;A valuation
                      with understanding corporate finance and valuation theory.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac3-2"></InputAcChild>
                  <LabelAcChild for="ac3-2">Advanced Accounting I</LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      The primary objective of the course is to provide an
                      introduction to the current empirical auditing or
                      financial accounting research literature. The course aims
                      to develop:
                    </p>
                    <ol className="parenthesized-decimal">
                      <li>
                        An appreciation of the roles of theory in empirical
                        research.
                      </li>
                      <li>
                        A knowledge of the research methods and designs employed
                        in empirical auditing research to examine various
                        financial accounting issues.
                      </li>
                      <li>
                        A research ability to critically analyze, evaluate, and
                        apply various research methods and designs employed in
                        empirical auditing or financial accounting research.
                      </li>
                      <li>
                        An applicable ability to generate, design, and conduct
                        empirical auditing or financial accounting research.{" "}
                      </li>
                    </ol>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac3-3"></InputAcChild>
                  <LabelAcChild for="ac3-3">
                    Advanced Accounting II
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      The purpose of this course is to enhance applicable
                      ability in reading and writing English papers by
                      discussing the contents of high quality academic journals
                      in the field of accounting and auditing.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac3-4"></InputAcChild>
                  <LabelAcChild for="ac3-4">
                    Advanced Econometrics I
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This course enhances research ability by teaching
                      classical ordinary least squares (OLS) regression
                      analysis. The emphasis is on understanding the assumptions
                      underlying OLS regression models. The goal is to
                      critically understand various empirical studies that use
                      OLS regression models.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac3-5"></InputAcChild>
                  <LabelAcChild for="ac3-5">
                    Advanced Econometrics II
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This course enhances research ability by learning how
                      previous good studies in development/health economics
                      established causality.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac3-6"></InputAcChild>
                  <LabelAcChild for="ac3-6">
                    Advanced Economic History I
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This course enhances research ability in economic history
                      by acquiring fundamental understandings about some
                      theories and the course of world economic history between
                      the primitive and modern era.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac3-7"></InputAcChild>
                  <LabelAcChild for="ac3-7">
                    Advanced History of Economic Theories I
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      The aim of this course is to improve the research ability
                      for a research agenda involved in Economics or Economic
                      Thought, by understanding the History of Economics from a
                      methodological view.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac3-8"></InputAcChild>
                  <LabelAcChild for="ac3-8">
                    Advanced Macroeconomics I
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This course is designed to build your research ability by
                      providing particularly important methodological skills
                      that are often used in modern macroeconomic research. In
                      particular, we shall focus on
                    </p>
                    <ol className="parenthesized-decimal">
                      <li>
                        difference equations for describing variables that
                        evolve over time, and
                      </li>
                      <li>
                        dynamic optimization for describing the optimal
                        allocation of resources over time.{" "}
                      </li>
                    </ol>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac3-9"></InputAcChild>
                  <LabelAcChild for="ac3-9">
                    Advanced Macroeconomics II
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      The aim of the course is to introduce students to a
                      variety of topics related to the empirical study of
                      macroeconomics. After briefly summarizing the theory for
                      each topic, the course focuses on understanding the major
                      empirical evidence in the macroeconomy and will provide
                      insight into macroeconomics for those interested in the
                      practical analysis of macroeconomy. We will develop tools
                      for understanding (or ability to apply the theory to)
                      current topics in macroeconomics by analyzing economic
                      models and examining actual data. Students are expected to
                      make a presentation of each empirical paper and to
                      participate in class discussions.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac3-10"></InputAcChild>
                  <LabelAcChild for="ac3-10">
                    Advanced Management I
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      The purpose of this course is to read academic journals on
                      strategic management and innovation to enhance research
                      ability in management.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac3-11"></InputAcChild>
                  <LabelAcChild for="ac3-11">
                    Advanced Management II
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This course is designed for the students to acquire the
                      basic knowledge in behavioral finance. We cover the
                      on-going research in addition to the well-known important
                      articles to enhance research ability.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac3-12"></InputAcChild>
                  <LabelAcChild for="ac3-12">
                    Advanced Mathematical Economics II
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This course enhances research ability by studying Dynamic
                      Optimization Theory.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac3-13"></InputAcChild>
                  <LabelAcChild for="ac3-13">
                    Advanced Microeconomics II
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      Following Advanced Microeconomic Theory I, this course
                      offers advanced-level materials in microeconomic theory
                      with special attention to game theory and its
                      applications. It is intended to provide students with a
                      comprehensive grasp of game theory with specific emphasis
                      on applications in Economics. This course enhances
                      applicable ability in the strategic thinking and economic
                      analysis.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac3-14"></InputAcChild>
                  <LabelAcChild for="ac3-14">
                    Advanced Political Economy I
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This course aims to enhance the research ability on
                      fundamental issues of a capitalist economy by learning the
                      basic framework of radical political economy.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac3-15"></InputAcChild>
                  <LabelAcChild for="ac3-15">
                    Advanced Price Theory I
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      The modern microeconomics consists of the theories of
                      perfect competition and other complementary theories that
                      have been significantly advanced in the last couple of
                      decades (taught in Advanced Price Theory). This course is
                      designed for those who seek to conduct original research,
                      and covers basic concepts in the theory of consumption and
                      production under perfect competition.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac3-16"></InputAcChild>
                  <LabelAcChild for="ac3-16">
                    Agricultural Economics B
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      We study various methods and interpretations of
                      agricultural production functions and develop research
                      ability related to this topic.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac3-17"></InputAcChild>
                  <LabelAcChild for="ac3-17">Auditing B</LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This course enhances research ability in the research
                      areas of earning management and audit.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac3-18"></InputAcChild>
                  <LabelAcChild for="ac3-18">Business Analysis B</LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      The purpose of this course is to enhance applicable
                      ability in implementing a business analysis using
                      financial statements.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac3-19"></InputAcChild>
                  <LabelAcChild for="ac3-19">
                    Contemporary Capitalism B
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This course enhances Applicable Ability in studying income
                      distribution from the viewpoint of post-Keynesian
                      economics and the US radicals.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac3-20"></InputAcChild>
                  <LabelAcChild for="ac3-20">
                    Development Economics
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This course is a subject study of the Chinese economy. The
                      purpose is to foster the ability to analyze the Chinese
                      economy through studying theories of economic development
                      and case studies of China's economic development. China
                      became the world's second largest economy beyond Japan in
                      2010, the largest exporter in 2013 and will surpass the
                      United States as No.1 in 2018 by PPP according to a
                      prediction of OECD. Currently China is transforming itself
                      from a "factory of the world" into the main "market of the
                      world". What are the secrets of China high growth? What
                      are the problems facing China now? Can China continue its
                      high growth? How should the world deal with a rising
                      China? This lecture will provide you some optional answers
                      to the above questions.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac3-21"></InputAcChild>
                  <LabelAcChild for="ac3-21">Econometrics I</LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This course aims to enhance research ability by
                      introducing elementary econometric techniques with their
                      statistical background. Main topics include statistical
                      inference, regression analysis, and quality choice models.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac3-22"></InputAcChild>
                  <LabelAcChild for="ac3-22">Econometrics II</LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This course enhances research ability in empirical
                      economic research.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac3-23"></InputAcChild>
                  <LabelAcChild for="ac3-23">Economic Policy B</LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This lecture is a subject study on climate change and
                      low-carbon economy. It offers students monographic studies
                      on the theories of climate change, environment economics,
                      global value chains and carbon emissions, carbon tax,
                      energy policy as well as country studies such as China,
                      the largest carbon emitter in the world.
                    </p>
                    <p>
                      It fosters to enhance applicable ability in improving the
                      research capacity of students through advanced lectures
                      and case studies given by internationally well-known
                      scholars.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac3-24"></InputAcChild>
                  <LabelAcChild for="ac3-24">
                    European Economic History B
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This course enhances applicable ability in understanding
                      the basic structure of the economic society which has been
                      formed in the historical process. In this lecture we focus
                      the analysis especially in the transition from the 19th to
                      20th century.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac3-25"></InputAcChild>
                  <LabelAcChild for="ac3-25">Finance B</LabelAcChild>
                  <DivAcChildContent>
                    <p>The objectives of this course are twofold:</p>
                    <ol className="parenthesized-decimal">
                      <li>
                        to introduce students to the current research topics in
                        finance, and
                      </li>
                      <li>
                        to develop their own research questions that are related
                        to the study of finance.{" "}
                      </li>
                    </ol>
                    <p>
                      By the end of the module, students should have the
                      "applicable ability" in finance. We focus mainly on
                      empirical finance. The topics (below) will be modified
                      depending on the interest of participants.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac3-26"></InputAcChild>
                  <LabelAcChild for="ac3-26">
                    Financial Accounting B
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      To provide students with an understanding of the theory
                      and application of accounting principles generally
                      accepted in the USA.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac3-27"></InputAcChild>
                  <LabelAcChild for="ac3-27">
                    History of Economic Theories B
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      Reading and analysing several classical texts in the
                      western thoughts and economics, the lectures will give a
                      broad perspective of the history of economics both in the
                      past and the future. The aim is to promote research
                      ability in the history of economics
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac3-28"></InputAcChild>
                  <LabelAcChild for="ac3-28">
                    History of Social Thoughts B
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      Studying the origin and developments of modern European
                      thought in the18th century and their contradictions and
                      significances in today's world, this lecture will consider
                      the meaning of the Enlightenment for humanity in the 21st
                      century.
                    </p>
                    <p>
                      The aim is to promote research ability in the history of
                      thought
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac3-29"></InputAcChild>
                  <LabelAcChild for="ac3-29">
                    Industrial Organization B
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      The aim of this course is to provide students with how to
                      conduct research in Industrial Organization. In
                      particular, it deals with firms' behavior (on pricing and
                      other related activities) under oligopolistic competition.
                      The emphasis will be placed on how to come up with a good
                      research question, and how to combine knowledge on
                      industry, data, economic theory, and econometrics.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac3-30"></InputAcChild>
                  <LabelAcChild for="ac3-30">
                    International Accounting B
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      The lecture is intended to provide an opportunity for
                      students to learn and understand international aspects of
                      accounting. (This lecture is for applicable ability.)
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac3-31"></InputAcChild>
                  <LabelAcChild for="ac3-31">
                    International Economics B
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This course offers materials in international trade theory
                      under imperfect competition. The goal is to enhance
                      students' research ability by complete understanding of
                      basic models of international trade and their
                      applications.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac3-32"></InputAcChild>
                  <LabelAcChild for="ac3-32">
                    Japanese Economic History B
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This course enhances applicable ability to analyze
                      economic development theoretically and substantially by
                      comparing the Industrial Revolution of Japan with the
                      experience in Europe, America, and Asia.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac3-33"></InputAcChild>
                  <LabelAcChild for="ac3-33">Labor Economics B</LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This course enhances applicable ability in research in
                      development/labor economics by providing economics
                      explanations on human resources development and human
                      behavior especially in developing countries.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac3-34"></InputAcChild>
                  <LabelAcChild for="ac3-34">Macroeconomics I</LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      In macroeconomics, subjects of the analysis are the
                      economic activities in a whole country. Thus, learning the
                      macroeconomic theory, we can understand various issues
                      faced by the country. The objective of this course is to
                      learn an applicable ability of the basic macroeconomic
                      theory and an insight into the economy with the
                      perspective of macroeconomics.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac3-35"></InputAcChild>
                  <LabelAcChild for="ac3-35">Macroeconomics II</LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This course enhances applicable ability in macroeconomics
                      by studying the following topics: First, we will review
                      foundations of macroeconomics and mathematics. Second,
                      students should understand the Solow model, which is a
                      basic model of economic growth theory. Finally,
                      participants are expected to explain the essential
                      concepts of the overlapping generations model, which is
                      one dynamic macroeconomic model with microfoundations.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac3-36"></InputAcChild>
                  <LabelAcChild for="ac3-36">Macroeconomics III</LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This course is designed to help students to understand the
                      behavior of individual economic units. It focuses on the
                      intuitive understanding of theories and their application
                      to business decision making and policy analysis. Topics
                      examined include the analysis of demand, cost, and market
                      efficiency; the design of pricing strategies; investment
                      and production decisions; as well as public policy
                      analysis. Upon successful completion of the course, the
                      students should be able to improve their research
                      ability/applicable ability in the following senses:
                    </p>
                    <ol className="parenthesized-decimal">
                      <li>
                        understand the principles of microeconomics, especially
                        those related to the strategic interactions of firms;
                      </li>
                      <li>
                        understand public policy and appreciate how a modern
                        economy functions; and
                      </li>
                      <li>
                        apply the principles of microeconomics in the arenas of
                        private and public-policy decision making.{" "}
                      </li>
                    </ol>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac3-37"></InputAcChild>
                  <LabelAcChild for="ac3-37">Management I</LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This course enhances research ability in Portfolio Theory
                      and Asset Pricing Model.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac3-38"></InputAcChild>
                  <LabelAcChild for="ac3-38">Management II</LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      Scheduling is one of the important issues to manage
                      production systems. This course deals with various
                      scheduling problems and the theoretical approaches in
                      order to enhance the applicable ability for managing the
                      actual manufacturing processes of industrial products such
                      as automobiles and semiconductor devices. Furthermore, the
                      relation among scheduling, process planning and resource
                      allocation is introduced by the examples in order to
                      understand integrated management of production systems.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac3-39"></InputAcChild>
                  <LabelAcChild for="ac3-39">
                    Management Accounting B
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This course cultivates a better understanding and enhances
                      applicable ability on Management Accounting through
                      reading a representative text on Management Control
                      System.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac3-40"></InputAcChild>
                  <LabelAcChild for="ac3-40">Management II</LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      Through an exploration of fundamental management concepts
                      and skills, this course promotes critical thinking and the
                      ability to make sound business decisions using managerial
                      theory. During Fall semester we will examine various
                      approaches to management, ethical issues, sustainability
                      and innovation, cultural diversity, decision making,
                      planning, and strategic management.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac3-41"></InputAcChild>
                  <LabelAcChild for="ac3-41">
                    Management Information B
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This course deals with acquisition and application in
                      order to enhance applicable ability for management on
                      production. The method is based on the mathematical
                      approach and their applications are introduced in order to
                      choose one solution for production management.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac3-42"></InputAcChild>
                  <LabelAcChild for="ac3-42">
                    Management Strategy B
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This course reviews strategic management theories by
                      examining various books and academic papers. The goal is
                      to enhance your applicable ability of theoretical
                      knowledge.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac3-43"></InputAcChild>
                  <LabelAcChild for="ac3-43">Microeconomics I</LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This course aims at enhancing basic research ability and
                      applied skill in microeconomic theory.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac3-44"></InputAcChild>
                  <LabelAcChild for="ac3-44">Microeconomics II</LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This course provides an introduction to topics in game
                      theory and the economics of information and enhances the
                      ability to apply theoretical knowledge in practice. Topics
                      include Nash equilibrium and its refinements, cheap talk,
                      mechanism design, repeated games, and reputations.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac3-45"></InputAcChild>
                  <LabelAcChild for="ac3-45">Money and Finance B</LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      The aim of the course is to introduce students to a
                      variety of topics related to financial economics. The
                      course will provide insight into the economics of
                      financial markets and institutions for those interested in
                      both the practice of finance and financial management,
                      including financial regulatory policy. In the course, we
                      will develop tools for understanding (or ability to apply
                      the theory to) current topics in financial economics by
                      analyzing economic models and examining actual financial
                      data.{" "}
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac3-46"></InputAcChild>
                  <LabelAcChild for="ac3-46">
                    Organization and Management B
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      The course will provide topics relating to knowledge
                      management with up-to-date empirical studies. The course
                      contains six lessons labelled "Empirical Study" in which
                      the lecturer and students discuss the techniques used in
                      reading assignments (empirical papers) and their adequacy.
                      Through the discussion, the course expects students to
                      develop academic thinking and/or skills (research ability)
                      required to write their own papers.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac3-47"></InputAcChild>
                  <LabelAcChild for="ac3-47">
                    Personnel Management B
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      By reading and discussing academic HRM articles published
                      recently, this course will enhances students' applicable
                      ability in business administration.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac3-48"></InputAcChild>
                  <LabelAcChild for="ac3-48">
                    Production Management B
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This course enhances research ability in management
                      through reading the textbook on new product development.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac3-49"></InputAcChild>
                  <LabelAcChild for="ac3-49">Public Economics B</LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This course deals with basic and applied models of public
                      economics. It also enhances research ability in this
                      research field.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac3-50"></InputAcChild>
                  <LabelAcChild for="ac3-50">Public Finance B</LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      The goal of this lecture is to enhance research ability in
                      tax issues on global trade by understanding the basic
                      theory of international taxation.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac3-51"></InputAcChild>
                  <LabelAcChild for="ac3-51">
                    Seminar on Economics and Business Administration I
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      In this seminar, we will discuss topics of mutual
                      interest, including students' current graduate research
                      topics and selected readings.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac3-52"></InputAcChild>
                  <LabelAcChild for="ac3-52">
                    Seminar on Economics and Business Administration II
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      The purpose of this seminar is to instruct graduate
                      students for their own research, including how to narrow
                      down a topic, how to construct an academic paper, and how
                      to make a good presentation.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac3-53"></InputAcChild>
                  <LabelAcChild for="ac3-53">
                    Seminar on Economics and Business Administration III
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      In this seminar, we will discuss topics of mutual
                      interest, including students' current graduate research
                      topics and selected readings.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac3-54"></InputAcChild>
                  <LabelAcChild for="ac3-54">
                    Seminar on Economics and Business Administration IV
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      The main purpose of the seminar is to support students in
                      the completion of their master's theses.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac3-55"></InputAcChild>
                  <LabelAcChild for="ac3-55">
                    Special Lecture for Advanced Subjects(Introduction to
                    Empirical Research){" "}
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      The course is designed to provide the necessary research
                      tools to analyze real-life problems in which the data set
                      is collected as a cross section. Through a combination of
                      theory and data, we will learn the restrictive assumptions
                      that support the consistent estimation in the simple
                      regression model, and how to proceed when these
                      assumptions do not hold in our dataset.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac3-56"></InputAcChild>
                  <LabelAcChild for="ac3-56">
                    Special Lectures for Advanced Subjects (Introduction to
                    Global Management){" "}
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This workshop presents an overview of the current global
                      economy and global management of various issues, such as
                      corporate management, global human resources management,
                      and global trade and environmental issues. By inviting
                      guest speakers from several global companies, we will
                      review the hands-on activities of those companies within
                      the global economy. By reviewing Japan's economic history
                      we will try to gain an understanding of the conditions
                      that are essential for economic development and
                      globalization.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac3-57"></InputAcChild>
                  <LabelAcChild for="ac3-57">
                    Specialized Advanced Lecture(Cooperate Finance Workshop){" "}
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This course is designed to enhance research ability/
                      applicable ability of graduate students through the
                      presentation of the speaker and discussions among the
                      workshop participants. Furthermore, students may acquire
                      more specific knowledge in a certain area of finance,
                      better presentation skills, and a quick summary of the
                      topic.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac3-58"></InputAcChild>
                  <LabelAcChild for="ac3-58">Theme Studies</LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This course enhances research ability in investigating
                      short term and long term movement of the Japanese Economy.
                      At the end of this course participants are required to
                      make forecasts regarding the Japanese economy and to
                      recommend a fundamental policy for their own future.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac3-59"></InputAcChild>
                  <LabelAcChild for="ac3-59">Theme Studies</LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This course deals with unique characteristics of
                      management under a socialist market economy. This course
                      enhances applicable ability.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac3-60"></InputAcChild>
                  <LabelAcChild for="ac3-60">Theme Studies</LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This course enhances applicable ability in learning
                      corporate management by long term planning.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac3-61"></InputAcChild>
                  <LabelAcChild for="ac3-61">Theme Studies</LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This lecture is a subject study on climate change and the
                      low-carbon economy. It offers students monographic studies
                      on the theories of climate change, environment economics,
                      global value chains and carbon emissions, carbon tax,
                      energy policy as well as country studies such as China,
                      the largest carbon emitter in the world. It fosters
                      applicable ability in improving the research capacity of
                      students through advanced lectures and case studies given
                      by internationally known scholars.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac3-62"></InputAcChild>
                  <LabelAcChild for="ac3-62">Theme Studies</LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This course will introduce the statistical base of data
                      analysis as well as the statistical way of thinking. The
                      course is designed for students concerned with the
                      business practice to enhance their ability of applying
                      statistical techniques.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac3-63"></InputAcChild>
                  <LabelAcChild for="ac3-63">Theme Studies</LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This course enhances applicable ability in innovation of
                      management by studying the Toyota production and Toyota
                      management systems.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac3-64"></InputAcChild>
                  <LabelAcChild for="ac3-64">Theme Studies</LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      We learn applicable management through instructing,
                      leveraging and connecting people. "Only One" management
                      can only be achieved by employees who believe in the
                      corporate mission and who rise to challenges through their
                      own work. Employee satisfaction is the source of customer
                      satisfaction. We learn a methodology to achieve customer
                      satisfaction and employee satisfaction management and
                      polish applicable ability in order to leverage corporate
                      innovation.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac3-65"></InputAcChild>
                  <LabelAcChild for="ac3-65">
                    Theme Studies (Introductory Accounting I)
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      Accounting is called the "language of business", as they
                      are used to communicate among interested parties of the
                      business. Students will be learning very basics of how to
                      write (make entries) and read (financial statement
                      analysis) that "language".
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac3-66"></InputAcChild>
                  <LabelAcChild for="ac3-66">
                    Theme Studies (ASEAN Business and Management)
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This course covers Japanese organizational change,
                      followed by their reforms in other countries like in
                      ASEAN. The structure of this course is lectures, student
                      presentations and discussion sessions. It aims to:
                      introduce students to various ways of restructuring in
                      large organizations focusing on how external pressure has
                      influenced their restructuring measures; provide students
                      with an opportunity to analyze different ways of reforms
                      and acquire insight into how much Japanese organizations
                      have really changed through students' presentation and
                      discussion sessions; an impart critical thinking of the
                      main theoretical ideas relating to Japanese organizational
                      change.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac3-67"></InputAcChild>
                  <LabelAcChild for="ac3-67">
                    Theme Studies (Japanese Human Resources Management)
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This class looks at how Japanese companies are managed
                      from human resources aspects. We will introduce Japanese
                      business ethics and several successful businessmen. We
                      also look at Leadership manifested in Japanese companies.
                      Case studies are used. Guest speakers will be invited.
                      Active participation of the students is required. We will
                      organize group discussion, group study and group
                      presentation at the end of the term. This class aims to
                      foster the research ability by encouraging individual /
                      group study and presentations.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac3-68"></InputAcChild>
                  <LabelAcChild for="ac3-68">
                    Theme Studies (Profitability Analysis)
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This course enhances applicable ability by studying basic
                      principles, procedures and skills needed for selecting the
                      most economically attractive investment proposal or the
                      best combination of proposals among technically feasible
                      alternatives in a production environment. In the class,
                      the concept of profitability judgment for different types
                      of investment proposals is discussed and the basic
                      procedure for selecting the most attractive proposal is
                      summarized. The major subjects of the course include
                      principles for comparison, the concept of sunk costs, use
                      of efficiency indices, evaluation of investment proposals,
                      the influence of price increase, and risk analysis
                      including sensitivity analysis and break-even analysis.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac3-69"></InputAcChild>
                  <LabelAcChild for="ac3-69">Theme Workshop</LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This workshop enhances the applicable ability to
                      understand contemporary socio-economic systems from a
                      broad perspective.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac3-70"></InputAcChild>
                  <LabelAcChild for="ac3-70">Theme Workshop</LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This course cultivates research ability and applicable
                      ability through lots of cases of a product development
                      process of Toyota Motor Corporation.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac3-71"></InputAcChild>
                  <LabelAcChild for="ac3-71">Theme Workshop</LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This lecture is a subject study on resource, environment,
                      and economic growth. It offers students monographic
                      studies on the theories of climate change, environment
                      economics, labor migration and income distribution, global
                      value chains and carbon emissions, carbon tax, energy
                      policy as well as country studies such as China. Some
                      lectures will be given by invited scholars and other
                      experts. It fosters to enhance applicable ability in
                      improving the research capacity of students through
                      advanced lectures and case studies.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac3-72"></InputAcChild>
                  <LabelAcChild for="ac3-72">Theme Workshop</LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      The objective of this seminar is, through exposure to the
                      micro/macroeconomic research frontier and the discussions
                      on it, to help broaden participants' perspectives and
                      foster their research capability.
                    </p>
                  </DivAcChildContent>
                </DivAcParentContent>
                <InputAcParent type="checkbox" id="ac4"></InputAcParent>
                <LabelAcParent for="ac4">Science</LabelAcParent>
                <DivAcParentContent>
                  <InputAcChild type="checkbox" id="ac4-0"></InputAcChild>
                  <LabelAcChild for="ac4-0">
                    Advanced Astrophysics A
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      The aim of Astrophysics A is to understand the basic
                      physics that affect the structure formation in the
                      Universe.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac4-1"></InputAcChild>
                  <LabelAcChild for="ac4-1">
                    Advanced Astrophysics B
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      Basics of Astrophysics: Basic equations for theoretical
                      astrophysics are derived from the first principle and
                      links to astronomical observations are made.
                    </p>
                    <p>
                      X-ray Astrophysics: X-ray observations have revealed that
                      high-energy phenomena are ubiquitous in the universe. In
                      this lecture, various celestial X-ray phenomena will be
                      presented and basic physical processes for understanding
                      the phenomena will be explained.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac4-2"></InputAcChild>
                  <LabelAcChild for="ac4-2">Advanced Biophysics</LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This class provides the basic knowledge of physics,
                      chemistry, and biology necessary for biophysical
                      researches, as well as the methodology to study the
                      molecular mechanisms of biological phenomena.{" "}
                      <ol>
                        <li>
                          Biological energy{" "}
                          <ol>
                            <li>Gibbs free energy, Chemical equilibrium</li>
                            <li>
                              Redox potentials, electron transfer reactions
                            </li>
                            <li>Enzymatic reactions, effects of inhibitors</li>
                          </ol>
                        </li>
                        <li>
                          Spectroscopic methods to study biological systems{" "}
                          <ol>
                            <li>Light and life</li>
                            <li>Molecular orbitals of biomolecules</li>
                            <li>Light absorption and emission</li>
                            <li>Molecular vibrations, infrared absorption</li>
                            <li>Structures and functions of proteins</li>
                          </ol>
                        </li>
                      </ol>
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac4-3"></InputAcChild>
                  <LabelAcChild for="ac4-3">
                    Advanced Condensed Matter Physics
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      In the first two thirds of the courses, the contemporary
                      understanding of the critical phenomena and phase
                      transition are introduced. We especially focus on the idea
                      of the renormalization group. The rest of the course will
                      be devoted to a crash course of the nonequilibrium
                      statistical physics. Outline Overview:{" "}
                      <ol>
                        <li>Phase and phase transition</li>
                        <li>Mean field theory</li>
                        <li>Scaling and renormalization group</li>
                        <li>Renormalization group in real space</li>
                        <li>
                          Renormalization group in k-space: Perturbative method
                        </li>
                        <li>
                          Introduction of nonequilibrium statistical physics
                        </li>
                      </ol>
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac4-4"></InputAcChild>
                  <LabelAcChild for="ac4-4">
                    Advanced Course of Geoscience
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      At first, dynamics of present Space-Sun-Earth system will
                      be explained. The basic structure of the solar-terrestrial
                      system and the controlling physical processes will be
                      overviewed. After that, atmospheric - hydrospheric
                      processes in the Earth surface, which is essential for
                      maintaining the life system, will be explained.
                      Specifically, the role of water in the atmospheric
                      circulation, physical - biological processes in the
                      hydrosphere, and those structures and variations will be
                      explained. Additionally, current status of climate warming
                      as well as the adaptation strategies in the Arctic regions
                      will be overviewed. Finally, several paleoclimate studies
                      will be introduced.{" "}
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac4-5"></InputAcChild>
                  <LabelAcChild for="ac4-5">
                    Advanced Inorganic Chemistry
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      In this lecture, students will learn theoretical concepts
                      that determine structures and reaction pathways of
                      chemical compounds without using complicated mathematics.
                      For this purpose, students will learn the basics of group
                      theory in the first half of this course. They will learn
                      various point groups, structures of character tables, and
                      basic mathematical techniques related to group theory.
                      Students will then learn the first- and second-order
                      Jahn-Teller effects that are related to the distortions of
                      ground-state structures and the activation energy of
                      chemical reactions. Finally, students will learn symmetry
                      rules that determine the pathways of reactions. By taking
                      this course, students will understand{" "}
                    </p>
                    <ol className="parenthesized-decimal">
                      <li>
                        symmetry elements and symmetry operations of various
                        point groups;
                      </li>
                      <li>
                        methods of mathematical calculations using character
                        tables;
                      </li>
                      <li>
                        principles to draw molecular orbital of complicated
                        molecules and metal complexes;{" "}
                      </li>
                      <li>
                        analyses of normal mode vibrations of simple molecules;
                      </li>
                      <li>
                        judgment if a given dipole transition is allowed or not;
                      </li>
                      <li>
                        determinations of ground-state structures of various
                        compounds; and
                      </li>
                      <li>
                        judgment if a given reaction is allowed to proceed
                        thermally or not.
                      </li>
                    </ol>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac4-6"></InputAcChild>
                  <LabelAcChild for="ac4-6">
                    Advanced Organic Chemistry
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      The purpose of this course is to learn some important
                      features of basic/advanced organic chemistry. This course
                      will assist student in understanding the intellectual
                      roots of organic chemistry under the specific topics
                      selectively chosen and to develop knowledge and
                      appreciation of structure, mechanism, reactions, and
                      synthesis in organic chemistry.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac4-7"></InputAcChild>
                  <LabelAcChild for="ac4-7">
                    Advanced Physical Chemistry
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This course is designed as a broad survey of modern topics
                      in physical chemistry. The omnibus form of lecture is
                      conducted by Professors and Associate Professors. They
                      will provide you the most-advanced physics and chemistry
                      concerning fullerenes, carbon nanotubes, organometallics,
                      nanoparticles, electronic devices, catalysts, solar cells,
                      etc. These lectures will help you to understand the
                      important issues in modern physical chemistry.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac4-8"></InputAcChild>
                  <LabelAcChild for="ac4-8">
                    Advanced Polymer Chemistry
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      The purpose of this course is to learn the basics of
                      polymer science. The course begins with basic polymer
                      concepts, then proceeds to polymerization and synthesis of
                      various structured polymers, and finishes with polymer
                      characterization and properties of polymers.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac4-9"></InputAcChild>
                  <LabelAcChild for="ac4-9">
                    Advanced Quantum Chemistry
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      In complex reaction systems at high temperatures,
                      following the minimum energy pathways on the potential
                      energy surface is not only impossible, but will entirely
                      neglect important entropic effects during the reactions.
                      Quantum chemical molecular dynamics (QM/MD) simulations
                      have recently elucidated the formation as well as erosion
                      mechanisms of nanomaterials such as fullerenes, carbon
                      nanotubes, and graphenes. In this class, all theoretical
                      concepts important for QM/MD simulations will be covered.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac4-10"></InputAcChild>
                  <LabelAcChild for="ac4-10">
                    Astroparticle Physics
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This lecture covers interdisciplinary fields between
                      elementary particle physics and astrophysics probed by
                      cosmic rays, namely, astroparticle physics. The lecture
                      reveals how cosmic rays opened elementary particle physics
                      and extended its field to contemporary cutting edge
                      science. The lecture provides very basic knowledge on
                      particle and nuclear physics, strong and weak
                      interactions, the structure of hadrons as well as basic
                      knowledge on astronomy and astrophysics, which are all
                      relevant to understand the universe in terms of particle
                      physics. The lectures also cover very recent hot topics in
                      astrophysics and non-accelerator particle physics such as
                      neutrino physics, dark matter searches, and gravitational
                      micro-lensing.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac4-11"></InputAcChild>
                  <LabelAcChild for="ac4-11">
                    Atmospheric Chemistry
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This course is an introduction to atmospheric chemistry.
                      We will learn the fundamentals of atomic and molecular
                      spectroscopy as well as reaction kinetics. Then, we will
                      present various chemical reaction mechanisms controlling
                      the abundance of stratospheric ozone, the oxidizing power
                      of the atmosphere, smog, and acid rain. We will learn the
                      Chapman mechanism for ozone formation and ozone depletion
                      catalytic reactions in the stratosphere.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac4-12"></InputAcChild>
                  <LabelAcChild for="ac4-12">Colloquium 1</LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      In this course, laboratory members will take turns giving
                      a one-hour presentation accompanied by another-hour long
                      discussion. Students will critique the latest research.
                      Every session will require that participants work more
                      then eight hours on their research work for their thesis.
                      For more details, M1 students are going to learn the basic
                      theories of the main themes of this laboratory such as
                      metal complex, protein, enzyme reaction and structural
                      analysis, and then have a presentation to the other
                      members on these topics including their own research
                      results. In addition to these sessions, participants will
                      also directly learn how to carry out various kinds of
                      enzyme reaction research through discussions.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac4-13"></InputAcChild>
                  <LabelAcChild for="ac4-13">Colloquium 2</LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      The purpose of this course is to learn about the research
                      process from the academic literature.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac4-14"></InputAcChild>
                  <LabelAcChild for="ac4-14">Colloquium 3</LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      The purpose of this course is to learn about the research
                      process from the academic literature.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac4-15"></InputAcChild>
                  <LabelAcChild for="ac4-15">Colloquium 4</LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      In this course, laboratory members will take turns giving
                      a one-hour presentation accompanied by another-hour long
                      discussion. Students will critique the latest research.
                      Every session will require that participants work more
                      then eight hours on their research work for their thesis.
                      For more details, M1 students are going to learn the basic
                      theories of the main themes of this laboratory such as
                      metal complex, protein, enzyme reaction and structural
                      analysis, and then have a presentation to the other
                      members on these topics including their own research
                      results. In addition to these sessions, participants will
                      also directly learn how to carry out various kinds of
                      enzyme reaction research through discussions.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac4-16"></InputAcChild>
                  <LabelAcChild for="ac4-16">Core Biophysics</LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This course is intended to increase a student's knowledge
                      of basic biophysical sciences based on the principles of
                      physics, and honing their ability to think deeply from a
                      broad range of perspectives. <br />
                      Course contents{" "}
                      <ol>
                        <li>
                          Electronic state, structure, and dynamics of molecular
                          systems
                        </li>
                        <li>Transitions between states of matter</li>
                        <li>Interaction between light and matter</li>
                        <li>Liquid theory</li>
                        <li>
                          Electron transfer, Proton transfer, and Vibrational
                          energy tranfer
                        </li>
                        <li>What is Biophysics ?</li>
                      </ol>
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac4-17"></InputAcChild>
                  <LabelAcChild for="ac4-17">
                    Core Inorganic Chemistry
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      In this lecture, students will learn theoretical concepts
                      that determine structures and reaction pathways of
                      chemical compounds without using complicated mathematics.
                      For this purpose, students will learn basic concepts of
                      group theory in the first half of this course. Students
                      will learn various point groups, structures of character
                      tables, and basic mathematical techniques related to group
                      theory. Then the students will learn first- and
                      second-order Jahn-Teller effects that are related to the
                      distortions of ground-state structures and the activation
                      energy of chemical reactions. Finally, the students will
                      learn symmetry rules that determine the pathways of
                      reactions.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac4-18"></InputAcChild>
                  <LabelAcChild for="ac4-18">
                    Core Organic Chemistry
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      The purpose of this course is to learn some important
                      features of basic/advanced organic chemistry. This course
                      will assist the student to understand the intellectual
                      roots of organic chemistry under the specific topics
                      selectively chosen and to develop knowledge and
                      appreciation of structure, mechanism, reactions, and
                      synthesis in organic chemistry.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac4-19"></InputAcChild>
                  <LabelAcChild for="ac4-19">
                    Core Physical Chemistry
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      The purpose of this course is to review the formerly
                      acquired knowledge of Physical Chemistry, and apply it to
                      solve problems in chemistry and biochemistry. Solving
                      problems in the class and at home is the focus of this
                      course, which will prepare the student for more
                      specialized Physical Chemistry courses in the future.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac4-20"></InputAcChild>
                  <LabelAcChild for="ac4-20">Cosmic-Ray Physics</LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      Cosmic rays are particles with the highest energy from the
                      Universe. We can now understand most of the energetic
                      phenomena in the universe by observing cosmic rays.
                      Therefore several kinds of energetic astrophysical objects
                      are shown at first. Multiwavelength observations are also
                      introduced together with cosmic rays in order for students
                      to develop wide astrophysical views. Specific topics in
                      cosmic rays, such as gamma ray astronomy, gamma ray
                      bursts, and most energetic cosmic rays, are also
                      discussed.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac4-21"></InputAcChild>
                  <LabelAcChild for="ac4-21">
                    Cosmic-Ray Physics Seminar 1
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      One way to know the origin and acceleration mechanism of
                      cosmic rays is by observing neutral particles which are
                      produced at the acceleration sites of cosmic rays. In
                      contrast to charged particles, which occupy the main
                      portion of cosmic rays, neutral particles are not
                      reflected by magnetic fields in space. Therefore, we can
                      obtain information about the place and time of the
                      acceleration by observing neutral particles. Among the
                      neutral particles, neutrons associated with solar flares
                      will be the main focus for this lecture.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac4-22"></InputAcChild>
                  <LabelAcChild for="ac4-22">
                    Cosmic-Ray Physics Seminar 2{" "}
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This seminar is designed in a typical journalist club
                      style for students. Every student provides a short
                      presentation about one of the recent topics on cosmic ray
                      physics, astrophysics, particle physics and
                      solar-terrestrial physics. The topics should be selected
                      from very recent journal papers or similar publications.
                      In this way students will develop the skills to search,
                      digest and make a presentation on various works. The
                      students will also learn about recent activities in
                      related research fields and key technologies. Reports are
                      shared among all the CR-lab members. Students who take
                      this seminar must actively join the discussions, and
                      evaluate their own presentation.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac4-23"></InputAcChild>
                  <LabelAcChild for="ac4-23">
                    Cosmic-Ray Physics Seminar 3{" "}
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      The course objectives for this seminar are as follows:{" "}
                      <ol>
                        <li>
                          To acquire a broader knowledge on recent activities in
                          cosmic-ray physics as well as astrophysics, particle
                          physics and solar-terrestrial physics.
                        </li>
                        <li>
                          To obtain the skills required to search and understand
                          other works in recent publications, to summarize the
                          contents of the publication and present it in a way to
                          draw other students' attentions, and to identify and
                          critically discuss important issues in the
                          presentations.
                        </li>
                      </ol>
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac4-24"></InputAcChild>
                  <LabelAcChild for="ac4-24">
                    Cosmic-Ray Physics Seminar 4{" "}
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This seminar aims to deepen students' knowledge on various
                      phenomena in space, to improve the skill for presentation
                      and to cultivate the ability for active discussions on
                      various research themes. The themes of the seminar are
                      selected in the fields of space environment, the sun,
                      cosmic rays and their relations to the earth. In
                      particular, the aim is to promote a flexible use of
                      knowledge by presenting the contents of their own theme to
                      other students and to accelerate to understand the
                      presentation on different themes and participate
                      discussions.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac4-25"></InputAcChild>
                  <LabelAcChild for="ac4-25">
                    Data Processing for STE Research
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      Understanding of computer systems, error analyses, and
                      statistics are indispensable in scientific research. The
                      purpose of this lecture is to understand computers, error
                      analyses and statistics. The lecture includes hardware,
                      software, and network of the computer system, error and
                      statistical analyses. Exercises of a free analysis tool
                      ROOT that is widely used in high-energy physics and
                      cosmic-ray research are included.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac4-26"></InputAcChild>
                  <LabelAcChild for="ac4-26">
                    Earth and Planetary Atmospheric Science Seminar 1
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      The objectives of this seminar are as follows:{" "}
                      <ol>
                        <li>
                          To obtain the basic knowledge about chemical processes
                          and measurement techniques for minor constituents in
                          the atmosphere.
                        </li>
                        <li>
                          To obtain the skill of explaining the contents of
                          basic books and reference papers on atmospheric
                          chemistry and physics.
                        </li>
                      </ol>
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac4-27"></InputAcChild>
                  <LabelAcChild for="ac4-27">
                    Earth and Planetary Atmospheric Science Seminar 2
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      The objectives of this seminar are as follows:{" "}
                      <ol>
                        <li>
                          To obtain the basic knowledge about chemical processes
                          and measurement techniques for minor constituents in
                          the atmosphere, and to understand the mechanisms of
                          atmospheric environmental issues caused by
                          anthropogenic activities.
                        </li>
                        <li>
                          To obtain the skill of explaining the contents of
                          texts and research papers on atmospheric chemistry and
                          physics.
                        </li>
                      </ol>
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac4-28"></InputAcChild>
                  <LabelAcChild for="ac4-28">
                    Earth and Planetary Atmospheric Science Seminar 3
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      The objectives of this seminar are as follows:{" "}
                      <ol>
                        <li>
                          To obtain the basic knowledge about the chemical and
                          physical processes of minor constituents in the lower
                          and middle atmosphere.
                        </li>
                        <li>
                          To learn the basic techniques of atmospheric
                          measurements and data analysis.
                        </li>
                        <li>
                          To obtain the skill of intelligible presentation and
                          discussion about the contents of basic textbooks and
                          reference papers on atmospheric science.
                        </li>
                      </ol>
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac4-29"></InputAcChild>
                  <LabelAcChild for="ac4-29">
                    Earth and Planetary Atmospheric Science Seminar 4
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>The objectives of this seminar are as follows:</p>
                    <ol>
                      <li>
                        To obtain the comprehensive and latest knowledge about
                        the chemical and physical processes of minor
                        constituents in the lower and middle atmosphere and to
                        understand the significance of students' individual
                        research subjects in the related field of study.
                      </li>
                      <li>
                        To learn the advanced techniques of atmospheric
                        observations and data analysis.
                      </li>
                      <li>
                        To obtain the skill of intelligible presentation and
                        discussion about the contents of advanced textbooks and
                        the cutting-edge topics in journal papers on atmospheric
                        science.
                      </li>
                    </ol>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac4-30"></InputAcChild>
                  <LabelAcChild for="ac4-30">
                    Experimental Cosmic-Ray Physics Research
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This course provides an overview of the basic cosmic-ray
                      observations such as interactions of cosmic rays, detector
                      technologies and signal processing electronics. Topics
                      includes charged-particle interactions, photon
                      interactions, electromagnetic and hadronic cascades for
                      cosmic-ray interactions, scintillation detectors, gas
                      detectors, liquid detectors and semiconductor detectors
                      for detector technologies, and analog and digital signal
                      processing for signal processing electronics. In addition,
                      we will review currently operating or planned cosmic-ray
                      experiments, and discuss real-life usages and development
                      issues of detector and signal processing technologies.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac4-31"></InputAcChild>
                  <LabelAcChild for="ac4-31">
                    Fundamentals of Advanced Physics 1
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      Overview of the basis of modern physics aiming to nurture
                      researchers to pioneer new physics beyond the assembly of
                      existing astronomy, astrophysics, nuclear and particle
                      physics. Lecture Plan{" "}
                    </p>
                    <ol>
                      <li>
                        Overview of elementary particles and their interactions
                      </li>
                      <li>Basics of relativity</li>
                      <li>
                        What is field theory? (basics of scalar field theory)
                      </li>
                      <li>
                        Quantization of fields (production and annihilation of
                        particles)
                      </li>
                      <li>Fermions (Dirac's equation)</li>
                      <li>Dirac's theory of fields</li>
                      <li>Gauge symmetry</li>
                      <li>Quantum Electro-Dynamics, Quantum Chromo-Dynamics</li>
                      <li>
                        Spontaneous breaking of gauge symmetry (Higgs mechanism)
                      </li>
                      <li>
                        Standard model of elementary particles and theories
                        beyond it
                      </li>
                      <li>
                        Overview of the standard model of elementary particles
                      </li>
                      <li>Elementary particle reactions</li>
                      <li>Particle accelerators</li>
                      <li>Particle detectors</li>
                      <li>Data reduction and analysis</li>
                    </ol>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac4-32"></InputAcChild>
                  <LabelAcChild for="ac4-32">
                    Fundamentals of Advanced Physics 2
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This course aims at studying the basics on the Universe
                      and the basic cosmology which deals with evolution of the
                      Universe. The related key words of this course are as
                      follows:
                    </p>
                    <p>Elements of the Universe</p>
                    <ul>
                      <li>stars and planets</li>
                      <li>galaxies and clusters of galaxies</li>
                    </ul>
                    <p>Evolution of the Universe</p>
                    <ul>
                      <li>the interstellar medium</li>
                      <li>the high energy universe</li>
                      <li>galaxy evolution</li>
                    </ul>
                    <p>Expanding universe</p>
                    <ul>
                      <li>Friedman equation</li>
                      <li>cosmological parameters</li>
                      <li>definitions of distance in the Universe</li>
                      <li>evolution of the Universe</li>
                    </ul>
                    <p>Big bang</p>
                    <ul>
                      <li>transparent to radiation</li>
                      <li>nuclear synthesis</li>
                      <li>inflation</li>
                      <li>thermal history of the Universe</li>
                    </ul>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac4-33"></InputAcChild>
                  <LabelAcChild for="ac4-33">
                    Fundamentals of Advanced Physics 3
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      Space between the sun and the earth, called the
                      solar-terrestrial environment, is the main subject of this
                      class. Various phenomena observed in the solar-terrestrial
                      environment will be described. As an introduction to the
                      advanced solar-terrestrial science, this class will touch
                      on the implications of how we attempt to understand
                      various phenomena in the sun, geo-space, heliosphere,
                      atmosphere, and cosmic ray. Recent studies of space
                      weather and space climate will also be explained.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac4-34"></InputAcChild>
                  <LabelAcChild for="ac4-34">
                    Heliospheric Plasma Physics Seminar 1{" "}
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      Research on Heliospheric Plasma Physics 1 and 2 are
                      continuous seminars opened through a year, and these
                      seminars liaise with Research on Heliospheric Plasma
                      Physics 3 and 4 which are also opened through a year.
                      Therefore it is recommended to take these four seminars.
                      These seminars study the solar wind physics (basics and
                      advanced topics), and observation /analysis methods which
                      are necessary to pursue your own research.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac4-35"></InputAcChild>
                  <LabelAcChild for="ac4-35">
                    Heliospheric Plasma Physics Seminar 2{" "}
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      Research on Heliospheric Plasma Physics 1 and 2 are
                      continuous seminars opened through a year, and these
                      seminars liaise with Research on Heliospheric Plasma
                      Physics 3 and 4 which are also open through the year.
                      Therefore it is recommended to take these four seminars.
                      These seminars aim at studying the solar wind physics
                      (basics and advanced topics), and observation /analysis
                      methods which are necessary to pursue your own research.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac4-36"></InputAcChild>
                  <LabelAcChild for="ac4-36">
                    Heliospheric Plasma Physics Seminar 3{" "}
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      Research on Heliospheric Plasma Physics 3 and 4 are
                      continuous seminars opened through a year, and these
                      seminars liaise with Research on Heliospheric Plasma
                      Physics 1 and 2 which are also open through the year.
                      Therefore it is recommended to take these four seminars.
                      These seminars aim at studying the solar wind physics
                      (basics and advanced topics), and observation /analysis
                      methods which are necessary to pursue your own research.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac4-37"></InputAcChild>
                  <LabelAcChild for="ac4-37">
                    Heliospheric Plasma Physics Seminar 4{" "}
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      Research on Heliospheric Plasma Physics 3 and 4 are
                      continuous seminars opened through a year, and these
                      seminars liaise with Research on Heliospheric Plasma
                      Physics 1 and 2 which are also open through the year.
                      Therefore it is recommended to take these four seminars.
                      These seminars aim at studying the solar wind physics
                      (basics and advanced topics), and observation /analysis
                      methods which are necessary to pursue your own research.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac4-38"></InputAcChild>
                  <LabelAcChild for="ac4-38">High Energy Physics</LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      The aim of this course is to understand the basic of
                      particle physics from experimental point of views, learn
                      how the Standard Model has been established throughout
                      collider, fixed-target and non-accelerator experiments,
                      discuss possibility to find New Physics beyond the
                      Standard Model, and also learn the basics of detectors and
                      accelerators.
                    </p>
                    <ol>
                      <li>Introduction</li>
                      <li>Quark flavor physics</li>
                      <li>Lepton flavor physics</li>
                      <li>Energy Frontier</li>
                      <li>Fundamental physics with neutrons</li>
                      <li>Neutrino and dark matter physics</li>
                    </ol>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac4-39"></InputAcChild>
                  <LabelAcChild for="ac4-39">Ionospheric Physics</LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      In order to understand the Earth's ionosphere, we study
                      the plasma motion and electric currents in the ionosphere
                      where the plasma collides with the neutral particles.
                      Basic physics of various phenomena in the ionosphere, such
                      as plasma fountain, equatorial anomaly, plasma bubble,
                      traveling ionospheric disturbance, sporadic E, dynamo
                      mechanism and so on, are studied. Radio wave propagation
                      in the ionosphere and ionospheric measurements using radio
                      and optical techniques, especially radar, GPS and airglow
                      CCD imager, are also studied.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac4-40"></InputAcChild>
                  <LabelAcChild for="ac4-40">
                    Magnetospheric Physics
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This class deals with basic space plasma physics in the
                      terrestrial/planetary magnetosphere, their structure and
                      dynamics, and the in-situ measurement techniques in space.
                      The contents are as follows:{" "}
                    </p>
                    <ol>
                      <li>Lecture Briefing and Research Activity</li>
                      <li>Basic Concepts of Plasma</li>
                      <li>Single Particle Motion</li>
                      <li>
                        Structure and Dynamics of Terrestrial Magnetosphere
                      </li>
                      <li>Measurement Techniques for Magnetospheric Physics</li>
                      <li>Dynamics of the Magnetosphere.</li>
                    </ol>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac4-41"></InputAcChild>
                  <LabelAcChild for="ac4-41">
                    Measurements in Middle Atmosphere
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This lecture provides an advanced review of the physical
                      and chemical processes in the middle atmosphere based on
                      observational results obtained by using in-situ,
                      ground-based, airborne and satellite-based instruments.
                      Principles and practical techniques with various methods
                      to observe physical properties and chemical composition in
                      the middle atmosphere are reviewed. In addition, the
                      analysis techniques for retrieving information from the
                      observed data are discussed.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac4-42"></InputAcChild>
                  <LabelAcChild for="ac4-42">
                    Paleo Cosmic Ray Physics
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      Paleo cosmic ray physics is a research field relating the
                      variations in past cosmic ray intensity, solar activity,
                      terrestrial and space environments derived from time
                      variation of cosmogenic isotope production. This course
                      aims to teach about nuclear reactions by cosmic rays,
                      behaviour of produced isotopes and the measurements
                      methods. A discussion on how cosmic ray intensity and
                      solar activity have changed and the effect on the earth's
                      climate will also be given.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac4-43"></InputAcChild>
                  <LabelAcChild for="ac4-43">Particle Physics</LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This course aims to introduce students basic knowledge in
                      the particle physics to help them to understand recent
                      developments in this area. Improvements in thinking are
                      also required to solve assignments in the class.
                    </p>
                    <ol className="parenthesized-decimal">
                      <li>
                        Particle phenomenologies in the standard model of
                        particle physics, which are vital to understand various
                        beyond-the-standard models (BSM).{" "}
                        <ul>
                          <li>Particle phenomena in the standard model</li>
                          <li>Electroweak precision tests</li>
                          <li>Dynamics of the electroweak symmetry breaking</li>
                        </ul>
                      </li>
                      <li>
                        Supersymmetric grand unification theory, which is
                        considered to be one of the most promising BSM
                        scenarios.{" "}
                        <ul>
                          <li>Grand Unification Theories (GUT)</li>
                          <li>Supersymmetry</li>
                          <li>Phenomenologies in the supersymmetric GUTs</li>
                          <li>Supersymmetric GUTs</li>
                        </ul>
                      </li>
                      <li>
                        ã{" "}
                        <ul>
                          <li>Polyakov string</li>
                          <li>Light cone quantization in the string theory</li>
                          <li>D-brane</li>
                          <li>T-duality</li>
                        </ul>
                      </li>
                    </ol>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac4-44"></InputAcChild>
                  <LabelAcChild for="ac4-44">
                    Physics and Chemistry of Middle Atmosphere
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This lecture provides an overview of the physics and
                      chemistry involved in the atmospheric radiative processes
                      which occur in the middle atmosphere. We study basic
                      principles of the radiation and absorption processes and
                      apply them to the Earth atmosphere in order to understand
                      the vertical structure of the atmosphere and the energy
                      budget that affects the climate on the Earth.{" "}
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac4-45"></InputAcChild>
                  <LabelAcChild for="ac4-45">
                    Physics of the Solar Wind
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      The Solar wind, which is the supersonic plasma outflow
                      from the Sun, has a significant influence on the space
                      environment near the Earth (the geospace). Recently, it
                      has been recognized that solar wind affects the
                      environment near the Earth's surface. Thus, a sound
                      understanding of the solar wind is vital for students who
                      study solar-terrestrial physics. This lecture aims to
                      provide basic knowledge on the 3D structure and dynamical
                      behavior of solar wind.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac4-46"></InputAcChild>
                  <LabelAcChild for="ac4-46">Plasma Astrophysics</LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      The purpose of this course is to give each student an
                      appreciation and understanding of the theoretical
                      framework for space and astronomical plasma phenomena, in
                      particular of magnetohydrodynamics. This course shall
                      discuss the following subjects:
                    </p>
                    <p>What is plasma?</p>
                    <ul>
                      <li>Mathematical description of plasmas</li>
                      <li>Magnetohydrodynamics (MHD)</li>
                      <li>MHD equilibrium</li>
                      <li>Waves in plasma</li>
                      <li>Instability</li>
                      <li>Self-gravity fluid</li>
                      <li>Convection. Dynamos</li>
                      <li>Magnetic reconnection</li>
                      <li>Radial flow</li>
                      <li>Shock</li>
                      <li>Particle acceleration</li>
                      <li>Landau damping</li>
                      <li>Plasma simulation.</li>
                    </ul>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac4-47"></InputAcChild>
                  <LabelAcChild for="ac4-47">
                    Principles of Life Science 1
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      The aim of the course is to provide a theoretical
                      framework for the application of molecular genetics to
                      research in life sciences. Analyses of major breakthroughs
                      in molecular genetics, with descriptions of their
                      historical and biological backgrounds, will be followed by
                      discussions on future prospects.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac4-48"></InputAcChild>
                  <LabelAcChild for="ac4-48">
                    Principles of Life Science 2
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      Important subjects in current modern life science have
                      been investigated by using the biochemical and biophysical
                      methods. The aim of this course is to introduce
                      fundamental principals of such methods, and insights into
                      functions of gene products in vivo and in vitro. Lectures
                      will begin with the explanation of fundamental principles
                      followed by in-depth analysis.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac4-49"></InputAcChild>
                  <LabelAcChild for="ac4-49">
                    Seminar on Astronomy 1
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      In astrophysics, since we can examine the properties by
                      experiments for very limited objects, it is fundamental to
                      understand the basic process of astrophysical phenomena
                      through observation. We regard the observation process as
                      a part of the fundamental physical processes and learn
                      astrophysics from a viewpoint of radiation, matter, and
                      spacetime.
                    </p>
                    <p>
                      We choose some sections and participants give a student
                      lecture on the subject. The presenter should distribute
                      material, and we discuss the topics based on it.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac4-50"></InputAcChild>
                  <LabelAcChild for="ac4-50">
                    Seminar on Astronomy 2
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      In astrophysics, since we can examine the properties by
                      experiments for very limited objects, it is fundamental to
                      understand the basic process of astrophysical phenomena
                      through observation. We regard the observation process as
                      a part of the fundamental physical processes and learn
                      astrophysics from a viewpoint of radiation, matter, and
                      spacetime.
                    </p>
                    <p>
                      We choose some sections and participants give a student
                      lecture on the subject. The presenter should distribute
                      material, and we discuss the topics based on it.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac4-51"></InputAcChild>
                  <LabelAcChild for="ac4-51">
                    Seminar on Particle Physics 1
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      The purpose of this seminar is to train the ability of
                      thinking logically and of studying by oneself, through a
                      series of seminars on a specific topic chosen from the
                      quantum field theory, the elementary particle physics,
                      etc.
                    </p>
                    <p>
                      Every seminar is open to free discussion, organized by one
                      of the attendees. The topic together with a textbook will
                      be determined via the discussion among attendee at the
                      first seminar. Examples of candidates of topics are as
                      follows; quantum field theory, basic of elementary
                      particle physics, representation theory of Lie groups and
                      Lie algebras, introduction to string theory.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac4-52"></InputAcChild>
                  <LabelAcChild for="ac4-52">
                    Seminar on Particle Physics 2
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      Learn on the basic knowledge of particle physics from the
                      experimental viewpoint. Especially, understand the
                      overview of the Standard Model of the current particle
                      physics. Furthermore, discuss the issues on the Standard
                      Model and direction of future experiments. The most
                      important purpose is to discuss the physics among the
                      students actively. Discuss the following items among the
                      students, based on the reference textbooks, and in some
                      cases, discuss the current studies, which students
                      actually work on.
                    </p>
                    <ul>
                      <li>Basic particle physics</li>
                      <li>Strong interaction</li>
                      <li>Electroweak interaction</li>
                      <li>Gauge theory</li>
                      <li>Higgs mechanism</li>
                      <li>Particle experiments</li>
                      <li>Detector technology</li>
                    </ul>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac4-53"></InputAcChild>
                  <LabelAcChild for="ac4-53">
                    Seminar on Particle Physics 3
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      Aim to investigate the main subjects on Elementary
                      particle physics from the experimental point of view to
                      get a trigger to learn enough experimental knowledge for
                      the research for a Master's thesis.
                    </p>
                    <p>
                      Presentation on subjects are prepared by several reporters
                      who discuss the related content.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac4-54"></InputAcChild>
                  <LabelAcChild for="ac4-54">
                    Seminar on Particle Physics 4
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      We learn fundamental concepts in elementary physics with
                      lecturing in turn and discussions to understand the
                      fundamental concepts in quantum field theory for the
                      standard model and beyond in elementary particle physics,
                      and to learn logical thinking, explaining, and discussing
                      abilities and developing thought. Lecturing in turn the
                      standard textbook for quantum field theory, and
                      understanding the following things by discussions between
                      participants.
                    </p>
                    <ol>
                      <li>Symmetry and Conservation law</li>
                      <li>Quantization of fields</li>
                      <li>Perturbation theory and Feynmann rule</li>
                      <li>Renormalization</li>
                      <li>Gauge theory</li>
                    </ol>
                    <p>
                      Basically, this seminar is a sequel to the seminar on
                      particle physics 1.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac4-55"></InputAcChild>
                  <LabelAcChild for="ac4-55">
                    Solar and Space Physics Seminar 1{" "}
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>The objectives of this seminar are as follows:</p>
                    <ol>
                      <li>
                        To understand dynamics of electromagnetic disturbances,
                        plasma phenomena, and upper-atmospheric environment in
                        the solar-terrestrial system.
                      </li>
                      <li>
                        To obtain skill in scientific research of the
                        solar-terrestrial physics by conducting numerical
                        simulation and/or observations and necessary data
                        analyses.
                      </li>
                      <li>
                        To obtain skills of giving clear scientific
                        presentations.
                      </li>
                    </ol>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac4-56"></InputAcChild>
                  <LabelAcChild for="ac4-56">
                    Solar and Space Physics Seminar 2{" "}
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>The objects of this seminar are as follows:</p>
                    <ol>
                      <li>
                        To understand dynamics of electromagnetic disturbances,
                        plasma phenomena, and upper-atmospheric environment in
                        the solar-terrestrial system.
                      </li>
                      <li>
                        To obtain skill in scientific research of the
                        solar-terrestrial physics by conducting numerical
                        simulation and/or observations and necessary data
                        analyses.
                      </li>
                      <li>
                        To obtain skills of giving clear scientific
                        presentations.
                      </li>
                    </ol>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac4-57"></InputAcChild>
                  <LabelAcChild for="ac4-57">
                    Solar and Space Physics Seminar 3
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>The objectives of this seminar are as follows:</p>
                    <ol>
                      <li>
                        To understand dynamics of electromagnetic disturbances,
                        plasma phenomena, and upper-atmospheric environment in
                        the solar-terrestrial system.
                      </li>
                      <li>
                        To obtain skill in scientific research of the
                        solar-terrestrial physics by conducting numerical
                        simulation and/or observations and necessary data
                        analyses.
                      </li>
                      <li>To obtain skills of writing a scientific paper.</li>
                    </ol>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac4-58"></InputAcChild>
                  <LabelAcChild for="ac4-58">
                    Solar and Space Physics Seminar 4
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>The objectives of this seminar are as follows:</p>
                    <ol>
                      <li>
                        To understand dynamics of electromagnetic disturbances,
                        plasma phenomena, and upper-atmospheric environment in
                        the solar-terrestrial system.
                      </li>
                      <li>
                        To obtain skill in scientific research of the
                        solar-terrestrial physics by conducting numerical
                        simulation and/or observations and necessary data
                        analyses.
                      </li>
                      <li>
                        To obtain skills of clear scientific presentations.
                      </li>
                    </ol>
                    <p>
                      Students are required to make reviews of text, journal
                      papers in the solar-terrestrial physics and presentations
                      of their own research. Active participation in scientific
                      discussions at presentations by other students, teachers,
                      and related scientists is also expected.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac4-59"></InputAcChild>
                  <LabelAcChild for="ac4-59">Solar Physics</LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      The main purpose of this lecture is to learn the
                      fundamental structure of the sun and various physical
                      phenomena in the solar atmosphere. This lecture also aims
                      to develop a detailed consideration of the physical
                      phenomena with a wide field of view. The contents of this
                      lecture include
                    </p>
                    <ul>
                      <li>the History of Solar Research</li>
                      <li>Structure of the Sun</li>
                      <li>Radiation in the Corona</li>
                      <li>Solar Flare</li>
                      <li>Coronal Mass Ejection</li>
                      <li>Coronal Heating</li>
                      <li>Coronal Hole</li>
                      <li>High</li>
                      <li>Energy Particle</li>
                      <li>Solar Activity and the Earth.</li>
                    </ul>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac4-60"></InputAcChild>
                  <LabelAcChild for="ac4-60">
                    Space Science Seminar 1
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      A student reads an assigned part of an English textbook in
                      advance then gives presentation about what he/she has
                      learned from the assigned part of the text book. All the
                      students attending the class are recommended to join a
                      discussion about the topics presented by a speaker with
                      other staff and students. The objectives of this seminar
                      are as follows:
                    </p>
                    <ol>
                      <li>
                        To learn about electromagnetic, plasma, and atmospheric
                        environments in the solar-terrestrial region and in the
                        upper atmosphere.
                      </li>
                      <li>
                        To obtain the ability to clearly explain their own
                        ideas.
                      </li>
                      <li>
                        To obtain the ability to have a scientific discussion
                        with others.
                      </li>
                    </ol>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac4-61"></InputAcChild>
                  <LabelAcChild for="ac4-61">
                    Space Science Seminar 2{" "}
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      A student reads an assigned part of an English textbook in
                      advance and then gives a presentation about what he/she
                      has learned from the assigned part of the text book. All
                      the students attending the class are recommended to join a
                      discussion about the topics presented by a speaker with
                      other staff and students. The objectives of this seminar
                      are as follows:
                    </p>
                    <ol>
                      <li>
                        To learn about electromagnetic, plasma, and atmospheric
                        environments in the solar-terrestrial region and in the
                        upper atmosphere.
                      </li>
                      <li>
                        To obtain the ability to clearly explain their own
                        ideas.
                      </li>
                      <li>
                        To obtain the ability to have a scientific discussion
                        with others.
                      </li>
                    </ol>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac4-62"></InputAcChild>
                  <LabelAcChild for="ac4-62">
                    Space Science Seminar 3
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      A student reads an assigned part of an English textbook in
                      advance then gives a presentation about what he/she has
                      learned from the assigned part of the text book. All the
                      students attending the class are recommended to join a
                      discussion about the topics presented by the speaker with
                      other staff and students. The objectives of this seminar
                      are as follows:
                    </p>
                    <ol>
                      <li>
                        To learn about electromagnetic, plasma, and atmospheric
                        environments in the solar-terrestrial region and in the
                        upper atmosphere.
                      </li>
                      <li>
                        To obtain the ability to clearly explain their own
                        ideas.
                      </li>
                      <li>
                        To obtain the ability to have a scientific discussion
                        with others.
                      </li>
                    </ol>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac4-63"></InputAcChild>
                  <LabelAcChild for="ac4-63">
                    Space Science Seminar 4{" "}
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      A student reads an assigned part of an English textbook in
                      advance then presents what he or she has learned from the
                      assigned part of the text book. All students are
                      recommended to join a discussion about the topics
                      presented by a speaker with other staff and students. The
                      objectives of this seminar are as follows:
                    </p>
                    <ol>
                      <li>
                        To learn electromagnetic, plasma, and atmospheric
                        environments in the solar-terrestrial region and in the
                        upper atmosphere.
                      </li>
                      <li>
                        To obtain the ability to clearly explain their own
                        ideas.
                      </li>
                      <li>
                        To obtain the ability to have a scientific discussion
                        with others.
                      </li>
                    </ol>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac4-64"></InputAcChild>
                  <LabelAcChild for="ac4-64">Topics in Algebra I </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This course will mainly focus on cluster algebras,
                      introduced by Fomin and Zelevinsky in 2002, and their
                      elementary properties. It will also make the link with
                      representation theory of hereditary algebras. A lot of
                      explicit examples will be computed.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac4-65"></InputAcChild>
                  <LabelAcChild for="ac4-65">
                    Upper Atmospheric Physics
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      In this course we study upper atmospheric physics. We
                      focus on the lower thermosphere, the upper mesosphere, and
                      the ionosphere. To understand the upper atmosphere more
                      deeply, we also study the lower and middle atmosphere
                      briefly. In particular, we study what makes the atmosphere
                      in motion, interplay between the thermosphere (neutral
                      atmosphere) and ionosphere (ion and electron) and
                      atmospheric waves (gravity waves, tidal waves, and
                      planetary waves).
                    </p>
                  </DivAcChildContent>
                </DivAcParentContent>
                <InputAcParent type="checkbox" id="ac5"></InputAcParent>
                <LabelAcParent for="ac5">Medicine</LabelAcParent>
                <DivAcParentContent>
                  <InputAcChild type="checkbox" id="ac5-0"></InputAcChild>
                  <LabelAcChild for="ac5-0">
                    Administrative Regulation for Health
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      The overall aim of this course is to understand the
                      Administrative Regulations for Health in Japan. This
                      course will cover the framework provided by the Ministry
                      of Health, Labour and Welfare as well as the roles of
                      local authorities and the judicial system. In addition,
                      details about food safety, drug safety and related issues
                      in Japan will also be discussed.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac5-1"></InputAcChild>
                  <LabelAcChild for="ac5-1">Biostatistics</LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      Biostatistics provides us with tools to describe and
                      summarize phenomena observed in populations. The basic
                      approaches of biostatistics include significance testing
                      and inference. This course will explain how to
                      successfully apply both approaches for epidemiologic
                      measurements. In addition, we will cover survival analysis
                      and multivariate analyses including logistic and
                      proportional hazard models.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac5-2"></InputAcChild>
                  <LabelAcChild for="ac5-2">
                    Cell cycle synchronization
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      Students will synchronize cells at the G1 phase. On the
                      first day, the professor will give you a short
                      orientation. According to the protocol participants change
                      culture medium daily and sequentially. Cell cycle phases
                      are analyzed on the morning of the last day.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac5-3"></InputAcChild>
                  <LabelAcChild for="ac5-3">Colloquium</LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This course provides students with the opportunity to
                      listen and hold discussions with scholars, medical
                      officers, doctors, other healthcare professionals and
                      future leaders from various fields inside and outside of
                      Japan on topics relevant to people's health.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac5-4"></InputAcChild>
                  <LabelAcChild for="ac5-4">
                    Community Health and International Health
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>The aim of this course is to understand:</p>
                    <ol>
                      <li>
                        The systems that support community health in Japan
                      </li>
                      <li>Global public health issues and strategies</li>
                      <li>Social and demographic determinants of health</li>
                    </ol>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac5-5"></InputAcChild>
                  <LabelAcChild for="ac5-5">
                    DNA typing by fragment analysis
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      In this course, the participants learn how to genotype by
                      DNA fragment analysis from PCR products for STR (short
                      tandem repeat) (microsatellite) markers, which are widely
                      applied in forensic field for personal identification and
                      kinship analyses. This technique will make it possible for
                      the participants to perform linkage analyses using
                      microsatellite markers in clinical medicine.
                    </p>
                    <p>
                      To be concrete, the participants extract DNA from their
                      own buccal swabs by a convenient commercial kit. Those DNA
                      samples are amplified using a commercially released PCR
                      multiplex kit with multi-colored fluorescently labeled
                      primer sets for personal identification. The PCR products
                      are loaded, sized and genotyped by capillary
                      electrophoresis with a Genetic Analyzer 310. The
                      participants calculate the probabilities for personal
                      identification.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac5-6"></InputAcChild>
                  <LabelAcChild for="ac5-6">Document retrieval</LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This course will provide basic knowledge of document
                      retrieval, and basic skills of some typical databases of
                      medical science. In addition, the lecturer will introduce
                      some useful library services for the members of Nagoya
                      University.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac5-7"></InputAcChild>
                  <LabelAcChild for="ac5-7">Epidemiology</LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This course covers an introduction to epidemiology. Basic
                      epidemiological concepts include measures of disease
                      frequency and measures of association between particular
                      factors and disease. Study designs in epidemiology, such
                      as cross-sectional studies, case-control studies, cohort
                      studies and intervention studies are explained.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac5-8"></InputAcChild>
                  <LabelAcChild for="ac5-8">
                    Experimental model of acute atrial pressure overload
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      First, the rabbit heart is removed and ensured the
                      coronary artery flow through the aorta (Langendorff
                      perfusion). Subsequently, cannulation to the pulmonary
                      vein, pulmonary artery, and superior vena cava (including
                      left superior vena cava) is performed with ligated
                      inferior vena cava. In this model, the atrial pressure is
                      adjusted voluntarily. Electrophysiological properties of
                      atrium will be examined after creating the model.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac5-9"></InputAcChild>
                  <LabelAcChild for="ac5-9">
                    Field Trips/Site Visits
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      Excursions to different regions in Japan visiting medical
                      and public health related facilities, enabling
                      participants to better-undrstand Japanese healthcare
                      system and the culture behind it as well.{" "}
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac5-10"></InputAcChild>
                  <LabelAcChild for="ac5-10">
                    Health Care Administration{" "}
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>The objectives of this course are to comprehend</p>
                    <ol className="right-parenthesized-decimal">
                      <li>
                        medical service and facilities in Japanese health care
                        system,
                      </li>
                      <li>
                        education and licensing for medical professionals in
                        Japan,
                      </li>
                      <li>administrative regulations for health</li>
                      <li>ospital administration and</li>
                      <li>
                        to compare Japanese situation with those in Asian
                        countries.
                      </li>
                    </ol>
                    <p>
                      Students are expected to discuss current health care
                      status, professions and administration with classmate who
                      have individual specialty and propose your own ideas in
                      English.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac5-11"></InputAcChild>
                  <LabelAcChild for="ac5-11">
                    Health Insurance and Economics
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      Japan has achieved the highest life expectancy in the
                      world mainly because of its early introduction of
                      universal health insurance coverage. The successful
                      implementation of an efficient health insurance system
                      should protect and promote the health of the people, as
                      well as contribute to achieving the Millennium Development
                      Goals. The focus of this course is to learn how to develop
                      such a system compatible with the social system, economy,
                      culture and ethics of a particular country. The basics of
                      healthcare economics will also be introduced.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac5-12"></InputAcChild>
                  <LabelAcChild for="ac5-12">
                    Healthcare Service Facilities and Professonals
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>The aim of this course is to understand:</p>
                    <ol>
                      <li>
                        Available healthcare facilities and services in Japan.
                      </li>
                      <li>
                        Education, licensing, and services provided by
                        professionals.
                      </li>
                      <li>
                        Introduction of these points to students in YLP (Young
                        Leaders Program).
                      </li>
                    </ol>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac5-13"></InputAcChild>
                  <LabelAcChild for="ac5-13">
                    Hospital Administration
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      The aim of this course is to understand the requirements
                      of hospital administrators to manage a hospital in Japan.
                      The sections of a hospital and the practices of each
                      section, as well as infection control methods and patient
                      safety, are introduced.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac5-14"></InputAcChild>
                  <LabelAcChild for="ac5-14">
                    In utero electroporation and slice culture to study cellular
                    and molecular mechanisms underlying brain development
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      Rationale and protocols of in utero
                      electroporation-mediated gene transfer and other related
                      methods will be introduced. Mouse embryos that had been
                      subjected to electroporation, as well as
                      fluorescent-labeled slices, will be observed under a
                      fluorescent microscope.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac5-15"></InputAcChild>
                  <LabelAcChild for="ac5-15">
                    Introduction for Clinical Medicine
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      In this course, the fundamentals of clinical practice will
                      be taught as well as basic knowledge about representative
                      clinical medicine such as internal medicine, surgery, and
                      pediatrics.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac5-16"></InputAcChild>
                  <LabelAcChild for="ac5-16">
                    Introduction to Healthcare System in Asia
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      In this course, students will be expected to be able to
                      identify and explain the following characteristics of each
                      healthcare system in Asia:
                    </p>
                    <ul>
                      <li>Historical and political background</li>
                      <li>
                        Basic structure of public policy making and public
                        health systems
                      </li>
                      <li>Financing</li>
                      <li>Healthcare delivery system</li>
                      <li>
                        Issues including research, healthcare industry, quality,
                        consumerism, and a review of past and future health care
                        trends
                      </li>
                    </ul>
                    <p>
                      And, this course will develop students' skills to
                      professional demands to examine the philosophical, social,
                      and political economic foundation underlying a healthcare
                      system in Asia.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac5-17"></InputAcChild>
                  <LabelAcChild for="ac5-17">
                    Introduction to Meta-Analysis{" "}
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      Participants will be introduced to the basic skills of
                      conducting a meta-analysis using Comprehensive
                      Meta-Analysis (CMA) software.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac5-18"></InputAcChild>
                  <LabelAcChild for="ac5-18">
                    Laser Microdissection
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This course gives you an opportunity to obtain the
                      knowledge and technique how to cut single or clustered
                      cells from pathological specimens by the use of a special
                      microscope. Thereafter, the cells will be used for DNA or
                      RNA extraction, followed by PCR analysis or microarray
                      analyses. The training contains the specific cutting of
                      glomerulus from the frozen kidney specimen.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac5-19"></InputAcChild>
                  <LabelAcChild for="ac5-19">Master's Thesis</LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      YLP participants will complete a Master's thesis project
                      and give an oral presentation on their findings. Every YLP
                      thesis is expected to be policy-oriented or practical
                      since graduates are potentially future leaders in
                      healthcare administration. Writing a policy-oriented or
                      practice-oriented paper should be useful for participant's
                      future work and, therefore, for people's health.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac5-20"></InputAcChild>
                  <LabelAcChild for="ac5-20">
                    Measurement of ion transport and intracellular Ca
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      Fluid secretion containing high concentrations of HCO3- is
                      produced by epithelial cells lining distal pancreatic
                      ducts. Interlobular ducts isolated from rodent pancreas
                      (diameter: ~100 µm) retain the polarity and function of
                      epithelia and provides a useful tool to investigate
                      cellular and molecular mechanisms of vectorial HCO3-
                      transport. In this course, we introduce the basics and
                      techniques to measure intracellular ion concentrations and
                      analyze transepithelial ion transport by using isolated
                      pancreatic ductules as a model cell.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac5-21"></InputAcChild>
                  <LabelAcChild for="ac5-21">Medical Law</LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      Many regulations restrict medical administration and
                      practices. In this course the fundamental principles of
                      criminal law, civil law, and administrative law will be
                      briefly explained and specific laws relating to medical
                      administration and practices in Japan will also be
                      discussed. The application of bioethics in health services
                      will also be taught. This knowledge of legal and ethical
                      issues will be useful for participants developing health
                      policies.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac5-22"></InputAcChild>
                  <LabelAcChild for="ac5-22">
                    Medical Science Seminar Medical Science Practical Research{" "}
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>This course will cover:</p>
                    <ol>
                      <li>
                        Elucidation of mechanisms underlying development and
                        regression of neuroblastoma{" "}
                      </li>
                      <li>
                        Elucidation of regulatory mechanisms of axon
                        regeneration by sulfated glycans
                      </li>
                      <li>
                        Elucidation of mechanisms of synaptic plasticity
                        regulated by sulfated glycans
                      </li>
                    </ol>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac5-23"></InputAcChild>
                  <LabelAcChild for="ac5-23">
                    Medical Science Seminar Medical Science Practical Research{" "}
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>This course will cover:</p>
                    <ol>
                      <li>
                        Identification and analysis of action mechanisms of
                        genes/molecules that are involved in cancer cell growth,
                        invasion and metastasis.
                      </li>
                      <li>
                        Analyses of neurodegeneration, regeneration with a focus
                        on glials using glycosylation mutant mice.{" "}
                      </li>
                      <li>
                        Regulatory mechanisms of lipid-nutrition metabolism and
                        functions of cell membrane with sugar chains.
                      </li>
                      <li>
                        Self-renewal/differentiation of (cancer) stem cells, and
                        mechanisms for cancer metastasis.
                      </li>
                      <li>
                        Development of antibody therapy and anti-signaling
                        molecule therapy toward cancers.{" "}
                      </li>
                      <li>
                        Analysis of cell cycle-associated kinases and their
                        target molecules.
                      </li>
                      <li>
                        Regulatory mechanisms for immune-inflammatory reaction
                        and autoimmune reaction with glycosylation. By studying
                        these subjects, we will aim towards applicative trials
                        of results in the clinical field.{" "}
                      </li>
                    </ol>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac5-24"></InputAcChild>
                  <LabelAcChild for="ac5-24">
                    Medical Science Seminar Medical Science Practical Research
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>This course will cover:</p>
                    <ol>
                      <li>
                        Isolation and identification of pathogenic bacteria
                      </li>
                      <li>
                        Evaluation and analyses of bacterial pathogenicity
                      </li>
                      <li>
                        Test and characterization of antimicrobial resistance of
                        bacteria
                      </li>
                      <li>
                        Genetic characterization of molecular mechanisms of
                        antimicrobial resistance
                      </li>
                      <li>Molecular epidemiology of pathogenic bacteria</li>
                      <li>
                        Purification and crystallization of molecules involved
                        with antimicrobial resistance{" "}
                      </li>
                      <li>
                        Designing and evaluation of inhibitors that depend on
                        molecular information
                      </li>
                    </ol>
                    <p>
                      This course should aid participants in promoting measures
                      for the diagnosis and treatment of bacterial infections
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac5-25"></InputAcChild>
                  <LabelAcChild for="ac5-25">
                    Medical Science Seminar Medical Science Practical Research{" "}
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      Through lectures students will learn about the immune
                      system before joining a research group. Current topics
                      include:
                    </p>
                    <ol>
                      <li>
                        Development of neutrophils from bone marrow and function
                        of neutrophils to bacteria{" "}
                      </li>
                      <li>
                        Development of macrophages from yolk sac and bone marrow
                        and function of macrophages to microbes{" "}
                      </li>
                      <li>Innate immune system from fetus to aged</li>
                      <li>Production of pluripotent cells from macrophages</li>
                      <li>Molecular mechanism of regulatory T cells</li>
                      <li>
                        Obesity and immune system; metabolic diseases and fatty
                        liver, Type II Diabetes
                      </li>
                      <li>
                        Murine model of colon cancer development and innate
                        immune cells
                      </li>
                    </ol>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac5-26"></InputAcChild>
                  <LabelAcChild for="ac5-26">
                    Medical Science Seminar Medical Science Practical Research{" "}
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      We try to clarify the molecular pathology of how virus
                      infections lead to disorders. We also develop novel
                      methods of diagnosis, prevention, and treatment for such
                      virus infections. Our goal is not confined to basic
                      virology, but we would like to emphasize a "translational"
                      mindset by integrating information from clinical and
                      applicative aspects.
                    </p>
                    <ol>
                      <li>Basic theory and methodology of virology</li>
                      <li>
                        Development of novel method of diagnosis, prevention for
                        intractable virus infection{" "}
                      </li>
                      <li>Molecular pathology of virus-associated lymphomas</li>
                      <li>
                        Development of novel treatment for intractable virus
                        infection
                      </li>
                      <li>
                        Basic/clinical application of oncolytic therapy using
                        herpes simplex virus
                      </li>
                      <li>
                        Development of novel treatment for central neurological
                        infection
                      </li>
                      <li>
                        Molecular mechanism and regulation of opportunistic
                        infection in immunodeficiency{" "}
                      </li>
                      <li>
                        Molecular mechanism of mother-to-child transmission and
                        congenital infection
                      </li>
                    </ol>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac5-27"></InputAcChild>
                  <LabelAcChild for="ac5-27">
                    Medical Science Seminar Medical Science Practical Research{" "}
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>Several topics will be presented in this course:</p>
                    <ol>
                      <li>
                        The fundamental cell biology and molecular genetics of
                        the yeasts and the fungi
                      </li>
                      <li>
                        The relationship between pathogenicity and stress
                        sensitivity on pathogenic yeast{" "}
                      </li>
                      <li>
                        The genomic information needed for rapid identification
                        of pathogenic yeast
                      </li>
                      <li>
                        The relationship between candidiasis and genetic type
                      </li>
                      <li>
                        Genotyping of Candida albicans and its geographical
                        distribution based on the microsatellite analysis
                      </li>
                      <li>
                        The fundamental information about the secondary
                        metabolite genes of fungi
                      </li>
                    </ol>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac5-28"></InputAcChild>
                  <LabelAcChild for="ac5-28">
                    Medical Science Seminar Medical Science Practical Research{" "}
                  </LabelAcChild>
                  <DivAcChildContent>
                    <ol>
                      <li>
                        Molecular architecture of the neuromuscular junction
                      </li>
                      <li>
                        Pathomechanisms and therapy of abnormal neuromuscular
                        signal transmission due to genetic mutations{" "}
                      </li>
                      <li>Physiological roles of RNA-binding proteins</li>
                      <li>
                        Molecular mechanisms underlying aberrations of RNA
                        metabolism
                      </li>
                      <li>Drug-repositioning strategy for orphan diseases</li>
                      <li>
                        The effects of molecular hydrogen on oxidative
                        stress-mediated and inflammatory diseases
                      </li>
                      <li>Tools to analyze the microarray data</li>
                      <li>
                        Tools to analyze the next generation sequencing data
                      </li>
                    </ol>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac5-29"></InputAcChild>
                  <LabelAcChild for="ac5-29">
                    Medical Science Seminar Medical Science Practical Research{" "}
                  </LabelAcChild>
                  <DivAcChildContent>
                    <ol className="parenthesized-decimal">
                      <li>
                        Genome-wide discovery of biological modulation factors
                        with gene networks
                      </li>
                      <li>Trans omics analysis of intra-tumor heterogeneity</li>
                      <li>
                        Analysis of reprogramming energy metabolism in cancer
                        cells
                      </li>
                      <li>Analysis of epigenetic alterations in cancer</li>
                      <li>
                        Chromatin conformation analysis for characterizing
                        cell-type specificity
                      </li>
                      <li>Development of tools for analyzing NGS data</li>
                      <li>
                        Development of tools for visualization of omics data
                      </li>
                    </ol>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac5-30"></InputAcChild>
                  <LabelAcChild for="ac5-30">
                    Medical Science Seminar Medical Science Practical Research{" "}
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      The seminars cover the identification and functional
                      analysis of susceptible genes by systematic genetic tools
                      using laboratory mice. The exercises cover the
                      identification and functional analysis of susceptible
                      genes for human disease including parasitic infection and
                      diabetes by the method of forward genetics in mice.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac5-31"></InputAcChild>
                  <LabelAcChild for="ac5-31">
                    Medical Science Seminar Medical Science Practical Research{" "}
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>This course covers:</p>
                    <ol>
                      <li>
                        Analysis of physiological function of cellular
                        senescence related genes involved in individual aging{" "}
                      </li>
                      <li>
                        Regulatory mechanism of apoptosis-related factors and
                        aging suffered from the oxidative stress
                      </li>
                      <li>
                        Study on the mechanism of cell cycle regulation or
                        cellular senescence induction through DNA damage
                        checkpoints
                      </li>
                      <li>
                        Analysis of the inducible mechanism of cellular
                        senescence by DNA damage response{" "}
                      </li>
                      <li>
                        Research on the mechanism of physiological aging or
                        onset of geriatric diseases by model mice
                      </li>
                      <li>
                        Analysis of molecular mechanism of functional decline in
                        immunosenescence and development of its rejuvenation
                      </li>
                    </ol>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac5-32"></InputAcChild>
                  <LabelAcChild for="ac5-32">
                    Medical Science Seminar Medical Science Practical Research{" "}
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      The seminar will focus on virus structure, replication,
                      and pathogenesis as well as anti-HIV treatment and
                      molecular-epidemiological trends. The training covers the
                      basic molecular biological techniques and the following
                      special techniques to work on HIV; isolation of infectious
                      HIV by in vitro culture system, amplification of HIV gene
                      by RT-PCR, nucleotide sequencing and bioinformatics
                      analysis, protein crystalizing and in silico structural
                      analysis.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac5-33"></InputAcChild>
                  <LabelAcChild for="ac5-33">
                    Medical Science Seminar Medical Science Practical Research{" "}
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>This course will cover:</p>
                    <ol>
                      <li>
                        Molecular biology of mechanosensing and patch clamp
                        recordings of mechanosensitive channels
                      </li>
                      <li>
                        Cellular biology and cellular physiology of
                        mechanosensitive channels
                      </li>
                      <li>
                        Neuroscience of synaptic formation and growth cones
                        dynamic movements
                      </li>
                      <li>
                        Real time imaging of synaptic plasticity in animal
                        brains
                      </li>
                    </ol>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac5-34"></InputAcChild>
                  <LabelAcChild for="ac5-34">
                    Medical Science Seminar Medical Science Practical Research{" "}
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>This course will cover:</p>
                    <ol>
                      <li>
                        Physiological techniques (patch clamp, microelectrode
                        arrays, ion imaging)
                      </li>
                      <li>
                        Histochemical techniques (immunostaining, in-situ
                        hybridization)
                      </li>
                      <li>
                        Molecular biological techniques (quantitative PCR,
                        transgenic animals)
                      </li>
                      <li>Computer simulation</li>
                      <li>Clinical measurements (MRI, magnetic sensor)</li>
                      <li>
                        Tips on organizing research, writing papers,
                        presentations
                      </li>
                    </ol>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac5-35"></InputAcChild>
                  <LabelAcChild for="ac5-35">
                    Medical Science Seminar Medical Science Practical Research{" "}
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>This course will cover:</p>
                    <ol>
                      <li>
                        The mechanisms of various cellular processes such as
                        cell polarity, migration and cytokinesis
                      </li>
                      <li>The mechanisms of neuronal polarity</li>
                      <li>
                        The pathology of psychiatric disorders such as
                        schizophrenia and bipolar disorder{" "}
                      </li>
                    </ol>
                    <p>
                      The course contents of the Medical Science Practical
                      Research are to learn biochemical and cell biological
                      techniques
                    </p>
                    <ol>
                      <li>
                        To monitor living cells using fluorescent protein-tagged
                        cytoskeletal proteins or signaling molecules
                      </li>
                      <li>
                        To monitor neuronal polarity using time-lapse analysis
                      </li>
                      <li>
                        To understand the molecular mechanisms underlying
                        psychiatric disorders
                      </li>
                    </ol>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac5-36"></InputAcChild>
                  <LabelAcChild for="ac5-36">
                    Medical Science Seminar Medical Science Practical Research{" "}
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      The enrolled students participate in our research on the
                      molecular pathogenesis of human solid hard-to-cure
                      cancers, especially lung cancer, through state-of-the-art
                      genomic/proteomic and bioinformatic analyses, coupled with
                      elucidation of their detailed biological and biochemical
                      functions. They are also provided with opportunities to
                      learn how to translate basic findings for the development
                      of novel diagnosis, treatment, and prevention, in order to
                      realize "from bench to bedside."
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac5-37"></InputAcChild>
                  <LabelAcChild for="ac5-37">
                    Medical Science Seminar Medical Science Practical Research{" "}
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      Students will read representative papers related to the
                      topics below. The students will make presentations based
                      on the papers they read and participate in discussions.
                      The course aims to help students acquire the ability to
                      research information and prepare presentations. Topics
                      include:
                    </p>
                    <ol>
                      <li>Cell cycle control</li>
                      <li>Signal transductions in cancer</li>
                      <li>
                        Cancer cell invasion, metastasis and epithelial to
                        mesenchymal transition (EMT)
                      </li>
                      <li>Regulation of RNA splicing and translation</li>
                    </ol>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac5-38"></InputAcChild>
                  <LabelAcChild for="ac5-38">
                    Medical Science Seminar Medical Science Practical Research{" "}
                  </LabelAcChild>
                  <DivAcChildContent>
                    <ol>
                      <li>
                        Students will obtain basic and up-to-date knowledge of
                        synaptic transmission, information processing in neural
                        circuits, synaptic plasticity, learning, and
                        experience-dependent development of brain functions by
                        reading and introducing original papers.
                      </li>
                      <li>
                        Students will analyze synaptic transmission, the
                        properties of neural circuits, and synaptic plasticity
                        using the patch-clamp recording method in visual
                        cortical slices. They will also record and analyze the
                        response of cortical neurons to visual stimulation using
                        anesthetized animals.
                      </li>
                    </ol>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac5-39"></InputAcChild>
                  <LabelAcChild for="ac5-39">
                    Medical Science Seminar Medical Science Practical Research{" "}
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      Medical Science Seminar: The course includes a series of
                      seminars in which the molecular mechanism underlying
                      metabolic diseases are actively discussed. Especially,
                      focusing on the involvement of stromal cells such as
                      immune cells, novel pathogenesis and therapeutic strategy
                      are discussed.{" "}
                    </p>
                    <p>
                      Medical Science Practical Research: The exercises include
                      basic procedure of experiments such as molecular biology,
                      cell biology and histopathology. Depending on the projects
                      that the student is engaged, the exercises cover how to
                      produce and evaluate animal models on metabolic diseases
                      using genetically engineered mice.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac5-40"></InputAcChild>
                  <LabelAcChild for="ac5-40">
                    Medical Science Seminar Medical Science Practical Research{" "}
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      The course is a series of seminars in which neural
                      regulatory mechanisms of instinctive behaviors are
                      described. The course also includes a discussion about
                      state of the art research using molecular biology,
                      behavior pharmacology and electrophysiology.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac5-41"></InputAcChild>
                  <LabelAcChild for="ac5-41">
                    Medical Science Seminar Medical Science Practical Research{" "}
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      Medical Science Seminar In this seminar, students will
                      acquire a basic knowledge regarding pathobiology of
                      neurodegenerative diseases with a focus on the roles of
                      glia-neuron interaction and protein/nucleic acid
                      metabolism in disease. Medical Science Practical Research
                      The laboratory course provides students with opportunities
                      to analyze the cell/animal models of neurodegenerative
                      diseases using multiple methods in cell biology,
                      biochemistry, immunology, and neuroscience.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac5-42"></InputAcChild>
                  <LabelAcChild for="ac5-42">
                    Medical Science Seminar Medical Science Practical Research{" "}
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This seminar plans to provide knowledge on the emerging
                      relationship between genetic abnormalities and
                      neuropathogenesis in developmental disorders, focusing
                      especially on Autism spectrum disorders and mental
                      retardations.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac5-43"></InputAcChild>
                  <LabelAcChild for="ac5-43">
                    Medical Science Seminar Medical Science Practical Research{" "}
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>This course will cover:</p>
                    <ol>
                      <li>Membrane domains</li>
                      <li>
                        Physiological functions and abnormality of lipid
                        droplets
                      </li>
                      <li>Mechanism of autophagosome biogenesis</li>
                      <li>Techniques for membrane research</li>
                      <li>
                        Application of chemical biology to ultrastructure
                        analysis
                      </li>
                    </ol>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac5-44"></InputAcChild>
                  <LabelAcChild for="ac5-44">
                    Medical Science Seminar Medical Science Practical Research{" "}
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>This course will cover:</p>
                    <ol>
                      <li>Mechanisms underlying nerve regeneration</li>
                      <li>Neuron-Glia interactions after nerve injury</li>
                      <li>
                        Cellular and molecular responses under chronic stress
                      </li>
                      <li>
                        Molecular and cellular mechanisms underlying abnormal
                        pain in response to nerve injury and chronic stress
                      </li>
                    </ol>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac5-45"></InputAcChild>
                  <LabelAcChild for="ac5-45">
                    Medical Science Seminar Medical Science Practical Research{" "}
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      Anatomical training is necessary. For example, students
                      should learn how to dissect mouse embryos to isolate brain
                      promordia. Basic histological techniques such as how to
                      fix the specimen using fixatives such as paraformaldehyde,
                      and then how to make a frozen block for further sectioning
                      of the sample should be understood. Then, obtained
                      sections will be stained using classical dyes or by using
                      antibodies. Immunostained sections will be inspected using
                      fluorescent microscopes. Images will be captured using CCD
                      cameras and processed to make informative figures. For
                      live imaging, slice culture techniques will be learned and
                      practiced. On-stage cultures will be performed and images
                      will be filmed. Cellular behaviors captured in movies will
                      be analyzed quantitatively and statistically.{" "}
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac5-46"></InputAcChild>
                  <LabelAcChild for="ac5-46">
                    Medical Science Seminar Medical Science Practical Research{" "}
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>Projects in this course include:</p>
                    <ol>
                      <li>
                        Elucidation of iron-mediated oxidative stress-induced
                        carcinogenesis
                      </li>
                      <li>
                        Elucidation of asbestos-induced mesothelioma and
                        development of prevention strategies
                      </li>
                      <li>
                        Prevention of oxidative stress-induced carcinogenesis
                      </li>
                      <li>
                        Evaluation of novel nanomaterials including carbon
                        nanotubes
                      </li>
                    </ol>
                    <p>
                      Students will learn to mix and harmonize several different
                      strategies such as pathological, genetic and molecular
                      biology techniques.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac5-47"></InputAcChild>
                  <LabelAcChild for="ac5-47">
                    Medical Science Seminar Medical Science Practical Research{" "}
                  </LabelAcChild>
                  <DivAcChildContent>
                    <ol>
                      <li>
                        In this course, students will study the molecular
                        mechanisms of cancer development, invasion and
                        metastasis caused by mutations of cancer-related genes
                        including receptor tyrosine kinases and their downstream
                        molecules and transcription factors and methods to apply
                        the findings of basic research to issues related to
                        human cancers using clinical pathological samples.
                      </li>
                      <li>
                        In this seminar, students will study the molecular
                        mechanisms of cytoskeleton regulation by growth factors
                        which control cell mortality. This course will show the
                        biological and biochemical research methods with
                        cultured cell lines. In addition, students will learn
                        the histological methods to analyze in vivo roles of
                        cytoskeleton regulation with the gene targeted mice.
                        This course also provides the knowledge about biological
                        roles of cell mortality in cancer cells, endothelial
                        cells and neural cells with medical view points.
                      </li>
                      <li>
                        In this course, students will study the molecular
                        mechanisms of survival and differentiation of neuronal
                        cells regulated by neurotrophic factors such as GDNF and
                        NGF. Students will also learn the techniques to study
                        the mechanisms of neuronal survival and differentiation
                        using cultured neuronal cell lines and primary cultured
                        neurons. In addition, students will learn the techniques
                        to study the development and in vivo roles of neural
                        tissues in genetically modified mice.
                      </li>
                    </ol>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac5-48"></InputAcChild>
                  <LabelAcChild for="ac5-48">
                    Medical Science Seminar Medical Science Practical Research{" "}
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This course uses seminars in which research on cell cycle
                      control, including the novel molecular mechanism of the
                      regulation of the cell cycle by centrosomes and primary
                      cilia, are presented and actively discussed. The course
                      also includes seminars on cutting edge knowledge of cancer
                      immunology and immunotherapy.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac5-49"></InputAcChild>
                  <LabelAcChild for="ac5-49">
                    Medical Science Seminar Medical Science Practical Research{" "}
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>This course covers:</p>
                    <ol>
                      <li>
                        Development of highly-sensitive analysis method of drugs
                        and poisons by various mass spectrometry{" "}
                      </li>
                      <li>
                        Development of mass spectrometric differentiation method
                        of isomers of designer drugs
                      </li>
                      <li>
                        Development of analysis method of bile acids and its
                        application to biochemical research
                      </li>
                      <li>
                        Application of metabolomics to forensic toxicology
                      </li>
                      <li>
                        Assessment of toxicities and biological effects of
                        designer drugs by metabolomics{" "}
                      </li>
                      <li>
                        Studies on personal identification and kinship by DNA
                        analysis from human specimens{" "}
                      </li>
                      <li>
                        Human population genetical studies focused on Japanese
                        and East/Southeast Asians{" "}
                      </li>
                      <li>
                        DNA analyses with human genome information from
                        archaeological/historical samples{" "}
                      </li>
                      <li>
                        Evolutional studies on microsatellites in primates
                      </li>
                    </ol>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac5-50"></InputAcChild>
                  <LabelAcChild for="ac5-50">
                    Medical Science Seminar Medical Science Practical Research{" "}
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      Students will learn about the basic knowledge regarding
                      cell cultures, immunoblot and PCR, immunohistochemistry
                      and management of genetically-modified mice. Students will
                      also learn about environmental monitoring using advanced
                      equipment such as HPLC, ICP-MS and GC-MS. Moreover, it is
                      possible to learn basic knowledge and technique of
                      fieldwork research as a department of social medicine.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac5-51"></InputAcChild>
                  <LabelAcChild for="ac5-51">
                    Medical Science Seminar Medical Science Practical Research{" "}
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      The seminars in this course cover epidemiological
                      measures, and typical designs and statistical analysis of
                      epidemiological studies, including multivariate analysis.
                      Lectures on basic medical statistics are also provided.
                      Students will participate in a cross-sectional study,
                      case-control study, cohort study, or intervention study
                      conducted at the Department. Applicants may also design a
                      medical study and conduct it themselves.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac5-52"></InputAcChild>
                  <LabelAcChild for="ac5-52">
                    Medical Science Seminar Medical Science Practical Research{" "}
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      In the seminar students will learn about the health
                      situation and trends in Japan and the world; epidemiology
                      and control of communicable and non-communicable diseases;
                      social determinants of health; healthcare management;
                      health communication; health systems; health policies;
                      community health; etc. Students will also conduct
                      practical research where they will learn methodologies of
                      data collection, how to do statistical and qualitative
                      analyses, research design and logistics management,
                      preparation of scientific papers and presentations.
                      Students will also learn and practice systematic review,
                      social science approaches, and participatory problem
                      analysis.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac5-53"></InputAcChild>
                  <LabelAcChild for="ac5-53">
                    Medical Science Seminar Medical Science Practical Research{" "}
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>This course covers:</p>
                    <ol>
                      <li>
                        Public health in general: epidemiology, biostatistics,
                        environmental health, occupational health, international
                        health, community health, and medical law
                      </li>
                      <li>
                        Healthcare administration in general: population
                        structure, disease patterns, medical facilities, medical
                        professionals, healthcare levels, hospital
                        administration, health insurance, long term care
                        insurance, regulations by law, roles and structures of
                        central government and local governments
                      </li>
                      <li>
                        Healthcare systems in Asia, supportive measures, and
                        international organizations{" "}
                      </li>
                    </ol>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac5-54"></InputAcChild>
                  <LabelAcChild for="ac5-54">
                    Medical Science Seminar Medical Science Practical Research{" "}
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      The seminar course is composed of a series of seminars
                      which cover the mechanisms of digestion and absorption of
                      nutrients at molecular, cellular, and organ levels. The
                      course also includes a series of seminars to understand
                      the pathogenesis and genetic background of cystic fibrosis
                      and pancreatitis. The exercises for practical research
                      include:
                    </p>
                    <ol className="right-parenthesized-decimal">
                      <li>
                        the basics and techniques to measure intracellular ion
                        concentrations and analyze transepithelial ion transport
                      </li>
                      <li>
                        the skills to isolate pancreatic ductules retaining
                        epithelial polarity and the activity of bicarbonate
                        secretion
                      </li>
                      <li>
                        the methods to analyze mutations/polymorphisms of the
                        genes related to cystic fibrosis and pancreatitis
                      </li>
                    </ol>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac5-55"></InputAcChild>
                  <LabelAcChild for="ac5-55">
                    Medical Science Seminar Medical Science Practical Research{" "}
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      Effects of life-style modification(ex. Increase in
                      physical activity) could clinically and basally be
                      understood in metabolic syndorome, type 2 diabetes,
                      hypertension and artheriosclerosis.{" "}
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac5-56"></InputAcChild>
                  <LabelAcChild for="ac5-56">
                    Medical Science Seminar Medical Science Practical Research{" "}
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      Students will attempt to develop the results of basic
                      medicine and physiology to promote health under the
                      following themes:
                    </p>
                    <ol>
                      <li>
                        Clarification of characteristics and mechanisms for
                        respiratory and cardiovascular responses to exercise
                      </li>
                      <li>
                        Clarification of volitional respiration during exercise
                        by means of learning and cognition
                      </li>
                      <li>
                        Clarification of mechanism and physiological
                        significance for locomotor-respiratory coupling during
                        exercise
                      </li>
                      <li>
                        Clarification of respiratory and cardiovascular
                        responses to hypoxic condition and exercise under
                        hypoxic condition
                      </li>
                      <li>
                        Clarification of adaptation to respiratory and
                        cardiovascular functions after aerobic training
                      </li>
                    </ol>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac5-57"></InputAcChild>
                  <LabelAcChild for="ac5-57">
                    Medical Science Seminar Medical Science Practical Research{" "}
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      In this course, students will analyze existing data on
                      cancer by applying the different methods of statistical
                      studies. This includes
                    </p>
                    <ol>
                      <li>Basic method of cancer descriptive epidemiology</li>
                      <li>Analysis using Aichi Cancer Registry data</li>
                      <li>How to analyze data for case-control study</li>
                      <li>
                        To know current studies on gene-environment interaction
                      </li>
                      <li>How to analyze survival data</li>
                    </ol>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac5-58"></InputAcChild>
                  <LabelAcChild for="ac5-58">
                    Medical Science Seminar Medical Science Practical Research{" "}
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>This course covers:</p>
                    <ol>
                      <li>
                        Regulation mechanism of proliferation, differentiation
                        and living in hematopoiesis{" "}
                      </li>
                      <li>Development of novel molecularly targeting agents</li>
                      <li>Development of immunotherapy for neoplasm</li>
                      <li>
                        Analysis of molecular events associated with the
                        development and progression of hematological
                        malignancies
                      </li>
                    </ol>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac5-59"></InputAcChild>
                  <LabelAcChild for="ac5-59">
                    Medical Science Seminar Medical Science Practical Research{" "}
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      For this purpose, we offer a series of seminars using
                      clinical symptomatology, neuropathology, molecular
                      biology, epidemiology, neurophysiology, and imaging study
                      including molecular imaging technique, and actively
                      discuss with participants.
                    </p>
                    <ul>
                      <li>
                        Diganosis and therapy of neurodegeneration/dementia
                      </li>
                      <li>
                        Translational research on neurodegeneration/dementia
                      </li>
                      <li>Heath and disease of neural network</li>
                      <li>Application of omics analyses</li>
                    </ul>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac5-60"></InputAcChild>
                  <LabelAcChild for="ac5-60">
                    Medical Science Seminar Medical Science Practical Research{" "}
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>This course covers:</p>
                    <ol>
                      <li>
                        Identification of causative genes for genodermatosis
                        using the next generation sequencer
                      </li>
                      <li>
                        Analysis of anti-nuclear antibodies and their target
                        epitopes in a variety of collagen diseases
                      </li>
                      <li>
                        Innovation of novel therapeutic strategies for genetic
                        keratinization disorders using genetically engineered
                        mice
                      </li>
                      <li>
                        Elucidation of roles of ER stress response during
                        differentiation of epidermal keratinocytes
                      </li>
                      <li>
                        Analysis of filaggrin gene mutations as a predisposing
                        factor for atopic dermatitis{" "}
                      </li>
                      <li>
                        Prenatal diagnosis of severe genetic skin disorders
                      </li>
                    </ol>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac5-61"></InputAcChild>
                  <LabelAcChild for="ac5-61">
                    Medical Science Seminar Medical Science Practical Research{" "}
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      Lectures are provided in order for students to attain the
                      following learning objectives:{" "}
                    </p>
                    <ol>
                      <li>
                        Current status of healthcare and long-term care in Japan
                      </li>
                      <li>
                        Common characteristics of illnesses in old age and their
                        symptoms.
                      </li>
                      <li>
                        Basic researches aimed to elucidate the mechanism and
                        etiology of age-related diseases.
                      </li>
                      <li>
                        Community-based observational/interventional studies
                      </li>
                      <li>
                        Interprofessional work and its involvement in community
                        healthcare
                      </li>
                      <li>Healthcare policy for Japan's older population</li>
                    </ol>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac5-62"></InputAcChild>
                  <LabelAcChild for="ac5-62">
                    Medical Science Seminar Medical Science Practical Research{" "}
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      The course compromises a series of seminars in which
                      molecular mechanisms maintain and regulate the genomic
                      stability. Their physiological relevance are presented and
                      actively discussed. Basic techniques for molecular and
                      cellular biology required for the genome dynamics research
                      will be studied. Those include molecular cloning of the
                      genes of interest, expression and purification of the
                      proteins, and functional analyses of the gene products in
                      cell-free systems and in cells.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac5-63"></InputAcChild>
                  <LabelAcChild for="ac5-63">
                    Medical Science Seminar Medical Science Practical Research{" "}
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      Studies on the quantitative evaluations of in vivo
                      toxicokinetics of drugs and chemicals will be done, and
                      then, the prediction methods for adverse drug reactions
                      will be reviewed. Application studies for processing,
                      evaluation and statistical analyses of genome-related data
                      will also be learned.
                    </p>
                    <ol>
                      <li>
                        Establishment of animal model for drug-induced liver
                        injury
                      </li>
                      <li>
                        Elucidation of the mechanism of drug-induced liver
                        injury
                      </li>
                      <li>
                        Development of in vitro cell-based assay system for the
                        screening of drug-induced liver injury
                      </li>
                      <li>Evaluation of the toxicity of acyl glucuronides</li>
                      <li>
                        Involvement of non-coding RNAs in drug metabolism and
                        drug disposition
                      </li>
                      <li>
                        Establishment of biomarker of non-coding RNA for
                        organ-toxicity
                      </li>
                      <li>
                        Study for the hypersensitivity of drug-induced skin
                        adverse reactions
                      </li>
                    </ol>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac5-64"></InputAcChild>
                  <LabelAcChild for="ac5-64">
                    Medical Science Seminar Medical Science Practical Research{" "}
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>This course will focus on the following objectives:</p>
                    <ol>
                      <li>
                        Identification and functional analysis of neural
                        circuits and molecules that are involved in the
                        regulation of higher brain function such as learning/
                        memory and emotion
                      </li>
                      <li>
                        Development of animal models for neuropsychiatric
                        disorders such as Alzheimer's disease and schizophrenia,
                        and the application for drug discovery
                      </li>
                      <li>
                        Investigation of neuronal mechanism for pathological
                        gambling as well as drug addiction, and the development
                        of new treatment
                      </li>
                      <li>
                        Investigation of immune responses in the central nervous
                        system
                      </li>
                      <li>
                        Molecular mechanism of stress-induced brain dysfunction
                      </li>
                    </ol>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac5-65"></InputAcChild>
                  <LabelAcChild for="ac5-65">
                    Medical Science Seminar Medical Science Practical Research{" "}
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This course will focus on the application of
                      biostatistical methods through the following key points:{" "}
                    </p>
                    <ol>
                      <li>
                        Foundations of biostatistical methods (statistical
                        inference/modelling, regression and discriminant
                        analysis, Bayesian analysis etc.) and methods for
                        designing and analyzing clinical/epidemiologic studies
                      </li>
                      <li>
                        Data analysis and simulation experiments using
                        statistical software such as R and SAS
                      </li>
                      <li>
                        Practice of biostatistics in real biomedical researches
                      </li>
                    </ol>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac5-66"></InputAcChild>
                  <LabelAcChild for="ac5-66">
                    Mitochondorial dysfunctin, metabolism changes and premature
                    senescence
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      It has been becoming clear that mitochondrial dysfunction
                      plays an impotant role in induction of senescence and
                      premature senescence in humans, animals and cultured
                      cells. Therefore, telomera shortening and free radical
                      theory of ageing should be reconsidered at this moment.
                      Metabolic changes occured through mitochondrial
                      dysfunction. In the course, mitochondrial membrane
                      potentials of cultured cells are manipulated by expression
                      of UCP2 (uncoupling protein). We will discuss the
                      metabolic changes caused by the impairment of oxdative
                      phosphorylation and morphological changes.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac5-67"></InputAcChild>
                  <LabelAcChild for="ac5-67">
                    Molecular analysis using by real time PCR and direct
                    sequencing.
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      We are going to perform the following training, Direct
                      sequencing and Real time PCR.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac5-68"></InputAcChild>
                  <LabelAcChild for="ac5-68">
                    Morphological Sciences of The Human
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This course covers medical fields where normal or abnormal
                      morphologies and structural organizations are studied in a
                      variety of systems comprising the human body. It includes
                      gross anatomy, histology, electron microscopy, cell
                      biology, developmental biology, neuroanatomy,
                      neurosymptomatology, radiology, and pathology.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac5-69"></InputAcChild>
                  <LabelAcChild for="ac5-69">
                    Occupational and Environmental Health
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      The goal of this course is to provide a comprehensive
                      overview of occupational and environmental health. The
                      course will provide a framework for understanding how
                      scientific information is used in risk assessment
                      designated to protect workers and information. Students
                      will learn to research and develop integrated
                      presentations on occupational and environmental health
                      issues, supported by current scientific knowledge.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac5-70"></InputAcChild>
                  <LabelAcChild for="ac5-70">
                    Optogenetic analysis of neural circuit function
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      Participants learn methodological principles and practical
                      tips for optogenetical analysis of neural circuit
                      functions. They are provided with opportunities to perform
                      experiments in which freely moving transgenic animals
                      where photosensitive proteins are expressed in specific
                      neurons are photostimulated and change their behavior.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac5-71"></InputAcChild>
                  <LabelAcChild for="ac5-71">
                    Outline of Clinical Medicine
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      Clinical doctors from various areas of expertise will
                      address YLP participants on the latest technology in
                      clinical medicine in Japan. Students will have an
                      opportunity to be exposed to how clinical education is
                      actually conducted.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac5-72"></InputAcChild>
                  <LabelAcChild for="ac5-72">Pathology</LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      In this course we learn about the pathological changes
                      caused by microbial infections (virus, bacteria and
                      fungus) or toxic materials which induce tissue damage.
                      Then we learn that our immune system recognizes them using
                      receptors, eradicates microbes and repairs damaged
                      tissues. Specific microbes such as hepatitis C and
                      continued or carcinogenetic stimuli can overcome the
                      immune system and lead to tissue failure or the
                      development of cancer.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac5-73"></InputAcChild>
                  <LabelAcChild for="ac5-73">
                    Perfusion fixation of mouse brain & cryosectioning
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      Primacy of cryosectioning over paraffin sectioning is
                      preservation of enzymatic activity, RNA content, lipid
                      content, and antigenecities of protein. In this seminar,
                      students will experience perfusion, dissection,
                      cryosectioning, and slide preparation in a single day.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac5-74"></InputAcChild>
                  <LabelAcChild for="ac5-74">Pharmacy Management</LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This course covers an introduction to Pharmacy Management.
                      The mission, goals and policies of hospital pharmacists
                      are introduced.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac5-75"></InputAcChild>
                  <LabelAcChild for="ac5-75">
                    Physiology of Human Body
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This course aims to provide basic knowledge on physiology,
                      biochemistry, molecular biology, neuroscience and
                      pharmacology in the human body, as well as providing a
                      discussion on the fundamentals of life sciences.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac5-76"></InputAcChild>
                  <LabelAcChild for="ac5-76">
                    Preparation of recombinant proteins using yeast expression
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      For protein expression, various expression systems such as
                      E. coli, yeast and insect cells are available. The yeast
                      expression system offers several advantages over other
                      systems since it allows to produce a large amount of
                      correctly folded disulfide-bonded recombinant proteins. In
                      this training course, EGF domains of Notch receptors are
                      expressed using K. lactis and detected by dot-blotting.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac5-77"></InputAcChild>
                  <LabelAcChild for="ac5-77">Seminar I</LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      The overall aim of this course is to understand the
                      essentials of how to write health research papers. Problem
                      statement, literature search, what to write and what not
                      write in each of the introduction, methods, results and
                      discussion sections will be explained.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac5-78"></InputAcChild>
                  <LabelAcChild for="ac5-78">Seminar II</LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This course is designed to develop student skills in
                      practice/policy-oriented research. The concept of
                      practice/policy-oriented research and the different
                      approaches for health research such as practical
                      quantitative research, qualitative research, and mixed
                      methods are covered in this course.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac5-79"></InputAcChild>
                  <LabelAcChild for="ac5-79">Seminar III</LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      The overall aim of this course is to develop the basic
                      knowledge and management skills of epidemiological data
                      and basic statistical analysis. The collection, entry,
                      management, description, recording and analysis of data is
                      covered.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac5-80"></InputAcChild>
                  <LabelAcChild for="ac5-80">Seminar IV</LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      The overall aim of this course is to increase
                      understanding of policy-oriented and practical field
                      research. Invited lecturers will share their research
                      areas and introduce previous studies which they conducted
                      or were involved. Research methods introduced in this
                      course are advanced and complex but will be helpful for
                      public health administrators participating in large
                      research projects.{" "}
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac5-81"></InputAcChild>
                  <LabelAcChild for="ac5-81">Seminar Ⅴ</LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      Issues related to health services administration will be
                      covered in each class.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac5-82"></InputAcChild>
                  <LabelAcChild for="ac5-82">
                    Site visit on healthcare administration (I)
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      The participants will visit healthcare administration
                      offices which have pivotal roles in healthcare
                      administration in Japan or the region. Roles will be
                      discussed with the persons in charge after the
                      explanation.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac5-83"></InputAcChild>
                  <LabelAcChild for="ac5-83">Social Medicine</LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      Students will learn about the ideal correlation between
                      society and medicine by studying Public Health and Health
                      Systems, Occupational and Environmental Health, Preventive
                      Medicine, Legal Medicine and Bioethics, Geriatric
                      Medicine, Transplantation and Health Promotion.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac5-84"></InputAcChild>
                  <LabelAcChild for="ac5-84">
                    Statistical analysis using SPSS for Windows
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      We will set up web pages for this course. Students are
                      requested to download the text and data for practice and
                      to solve the given tasks by themselves. After completing
                      the tasks, please send a report answering questions for
                      credit to our department. Consult instructors in office
                      hours (mentioned above) if needed.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac5-85"></InputAcChild>
                  <LabelAcChild for="ac5-85">Western blotting</LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This practical course will provide a SDS page protocol at
                      the first day and Western blotting protocol on the second
                      day. You can perform each step by yourself. The purpose of
                      the course is to provide practical knowledge.
                    </p>
                  </DivAcChildContent>
                </DivAcParentContent>
                <InputAcParent type="checkbox" id="ac6"></InputAcParent>
                <LabelAcParent for="ac6">Engineering</LabelAcParent>
                <DivAcParentContent>
                  <InputAcChild type="checkbox" id="ac6-0"></InputAcChild>
                  <LabelAcChild for="ac6-0">
                    Advanced Battery Systems for Future Automobiles
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This course will provide the basics of the development and
                      protection of batteries in electric vehicles (EVs) and
                      plug-in hybrid electric vehicles (PHEVs). The study and
                      insightful understanding of this topic is of immense
                      importance to the future of the electric vehicle industry.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac6-1"></InputAcChild>
                  <LabelAcChild for="ac6-1">
                    Advanced Experiments and Exercises in Automotive Engineering
                    A
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      The aim of this course is to help students acquire deep
                      understanding of the fundamental science and engineering
                      related to automobiles through experiments.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac6-2"></InputAcChild>
                  <LabelAcChild for="ac6-2">
                    Advanced Experiments and Exercises in Automotive Engineering
                    B
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      The aim of this course is to help students acquire deep
                      understanding of the fundamental science and engineering
                      related to automobiles through experiments.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac6-3"></InputAcChild>
                  <LabelAcChild for="ac6-3">
                    Advanced Infrastructure Planning
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      The purpose of this course is to understand the role of
                      infrastructure by learning its economic characteristics,
                      planning procedure, financing and evaluation methods.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac6-4"></InputAcChild>
                  <LabelAcChild for="ac6-4">
                    Advanced Lectures for Information and Computer Sciences
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This lecture covers several topics related to information
                      systems, which include statistical hypothesis testing,
                      logic, operating system, algorithmic techniques, and
                      information security.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac6-5"></InputAcChild>
                  <LabelAcChild for="ac6-5">
                    Advanced Lectures on Automotive Engineering
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      In this course, students will learn about the advanced
                      direct injection gasoline and gas engines. Course
                      objectives include
                    </p>
                    <ol className="parenthesized-decimal">
                      <li>
                        developing an understanding of the design and mechanics
                        of direct injection gasoline and gas engines and,
                      </li>
                      <li>
                        reviewing revolutionary enabling technologies for direct
                        injection gasoline and gas engines.
                      </li>
                    </ol>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac6-6"></InputAcChild>
                  <LabelAcChild for="ac6-6">
                    Advanced Lectures on Chemical Engineering
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This course discusses chemical engineering, such as mass
                      balance, transport phenomena, reaction engineering, powder
                      technology, and material engineering.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac6-7"></InputAcChild>
                  <LabelAcChild for="ac6-7">
                    Advanced Lectures on Communication and Image Processing
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This lecture focuses on wireless communication and image
                      processing technologies which are fundamental to
                      automotive engineering.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac6-8"></InputAcChild>
                  <LabelAcChild for="ac6-8">
                    Advanced Lectures on Computer-Aided Engineering
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      Fundamentals and applications of some major computational
                      techniques currently used to analyze mechanical behaviors
                      of continuum media are given.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac6-9"></InputAcChild>
                  <LabelAcChild for="ac6-9">
                    Advanced Lectures on Dynamical System Theory
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      Advanced lectures on the fundamental and applied subjects
                      of the dynamical system. Particle system, rigid body
                      system with constraints will be described. Moreover, the
                      analytical techniques, concepts in the dynamical analysis
                      for these systems will be described.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac6-10"></InputAcChild>
                  <LabelAcChild for="ac6-10">
                    Advanced Lectures on Mathematical Analysis of Heat Transfer
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      To understand how to utilize knowledge of heat transfer in
                      the real world, and think about their purpose (thermal
                      management, serious energy problems, and global warming)
                    </p>
                    <p>To understand the importance of thermal management.</p>
                    <p>
                      To understand about trend of research and development for
                      thermal &amp; energy management in the engineering field
                      (Not limited to space field)
                    </p>
                    <p>
                      To understand the thermal environment in space and how
                      thermal control is conducted for spacecraft.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac6-11"></InputAcChild>
                  <LabelAcChild for="ac6-11">
                    Advanced Lectures on Scientific English
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This series of special lectures provides guided practice
                      in written and spoken English in academic, scientific, and
                      technical contexts. Lectures include illustrated
                      presentations and activities for students to utilize to
                      apply their learning. The series is open to native
                      speakers and non-native speakers of English.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac6-12"></InputAcChild>
                  <LabelAcChild for="ac6-12">
                    Advanced Lectures on Strength and Fracture of Materials
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>Topics include:</p>
                    <ol>
                      <li>Impact biomechanics</li>
                      <li>Crash dummies</li>
                      <li>Structural deformation</li>
                      <li>Frontal impact</li>
                      <li>Occupant protection</li>
                      <li>Side impact</li>
                      <li>Compatibility</li>
                      <li>Pedestrian protection,</li>
                      <li>Child occupant protection</li>
                      <li>Accident reconstruction</li>
                      <li>Whiplash injury</li>
                    </ol>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac6-13"></InputAcChild>
                  <LabelAcChild for="ac6-13">
                    Advanced Lectures on System Dynamics
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      Substantial difficulties of dynamic systems in the real
                      world lie in the involvement of a large number of related
                      factors that deviate statistically. Multivariate analyses
                      and statistics are common tools for understanding and
                      modeling these intricate systems. This course is arranged
                      for those who had few opportunities to study statistics,
                      multivariate analyses, and some basis for these
                      mathematics. We learn intermediate topics of classic and
                      modern multivariate analyses and related statistics. We
                      also practice how to apply each method of multivariate
                      analysis on real data and interpret the results.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac6-14"></InputAcChild>
                  <LabelAcChild for="ac6-14">
                    Advanced Lectures on System Safety
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      Securing safety of mechanical systems can be achieved
                      through the life cycle of the targeted system by risk
                      assessment followed by risk reduction measures based upon
                      the assessment results. The course aims at providing
                      mathematical /logical tools indispensable when conducting
                      risk assessment processes.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac6-15"></InputAcChild>
                  <LabelAcChild for="ac6-15">
                    Advanced Numerical Analysis
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>Lecture on basics of numerical analysis technique.</p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac6-16"></InputAcChild>
                  <LabelAcChild for="ac6-16">
                    Advanced Theory of River Basin Management
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      Understand the roles of infrastructure by learning its
                      economic characteristics, planning procedures, financing
                      and evaluation methods.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac6-17"></InputAcChild>
                  <LabelAcChild for="ac6-17">
                    Advanced Thermal Engineering
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      The purpose of this course is to learn the fundamental
                      knowledge of various energy conversion systems and
                      technologies for energy saving and environmental
                      protections. More specific goals include:
                    </p>
                    <ol>
                      <li>
                        to understand the basis of thermodynamics, and be able
                        to make the calculation connected with them{" "}
                      </li>
                      <li>
                        to understand the principle of various energy conversion
                        systems like combustion and gasification{" "}
                      </li>
                      <li>
                        to understand the principle of global environmental
                        problems, and be able to estimate the contribution of
                        energy conversion systems to the global environment,
                        using thermodynamic quantities such as exergy analyses.
                      </li>
                    </ol>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac6-18"></InputAcChild>
                  <LabelAcChild for="ac6-18">
                    Advanced Traffic Engineering and Management
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      There is no doubt that a considerable portion of pollution
                      emissions result from transportation related activities
                      and vehicular movements in particular. Managing traffic
                      safely and efficiently is one of the most effective
                      solutions to relieve environmental issues worldwide.
                      Training specialists who have the knowledge and skills of
                      traffic engineering is highly demanded especially in
                      developing countries where travel demand is rapidly
                      increasing despite insufficient transportation
                      infrastructure. In this course, fundamentals and
                      international issues in traffic engineering are to be
                      covered in theory and practice, so that students can
                      effectively master the most important issues for
                      practicing highway planning and traffic operations.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac6-19"></InputAcChild>
                  <LabelAcChild for="ac6-19">
                    Applied Heat Transfer
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      The purpose of this course is for students: to understand
                      how to utilize knowledge of heat transfer in the real
                      world, and think about its purpose (thermal management,
                      serious energy problem, and global warming); to understand
                      the importance of thermal management; to understand trends
                      of research and development for thermal &amp; energy
                      management in the engineering field (Not limited To space
                      field); and to understand about the thermal environment in
                      space and how thermal control is conducted for spacecraft.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac6-20"></InputAcChild>
                  <LabelAcChild for="ac6-20">
                    Automotive Engineering Seminar 1A
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      The aim of this course is to help students acquire deep
                      understanding of the fundamental science and engineering
                      related to automobiles.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac6-21"></InputAcChild>
                  <LabelAcChild for="ac6-21">
                    Automotive Engineering Seminar 1B
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      The aim of this course is to help students acquire deep
                      understanding of the fundamental science and engineering
                      related to automobiles.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac6-22"></InputAcChild>
                  <LabelAcChild for="ac6-22">
                    Automotive Engineering Seminar 1C
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      The aim of this course is to help students acquire deep
                      understanding of the fundamental science and engineering
                      related to automobiles.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac6-23"></InputAcChild>
                  <LabelAcChild for="ac6-23">
                    Automotive Engineering Seminar 1D
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      The aim of this course is to help students acquire deep
                      understanding of the fundamental science and engineering
                      related to automobiles.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac6-24"></InputAcChild>
                  <LabelAcChild for="ac6-24">
                    Civil Engineering and Policies for Developing Countries I
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      The objective of this course is to enable students to
                      study various issues including sustainable development,
                      environmental management, and international cooperation in
                      order to gain a better understanding of the fundamental
                      knowledge and applied skills that are required in the
                      field of civil engineering in developing countries. A
                      comprehensive method of thinking will be studied.{" "}
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac6-25"></InputAcChild>
                  <LabelAcChild for="ac6-25">
                    Civil Engineering and Policies for Developing Countries II
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>The objectives of this course are</p>
                    <ol className="parenthesized-decimal">
                      <li>
                        to study fundamental knowledge on planning, design,
                        construction and maintenance of infrastructure in Japan,
                        as well as in developing countries, and
                      </li>
                      <li>
                        to survey various civil engineering issues, including
                        those related to environmental problems and recent
                        development of regional disaster mitigation activities.
                      </li>
                    </ol>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac6-26"></InputAcChild>
                  <LabelAcChild for="ac6-26">
                    Climate Change Policies
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      Lectures on climate change (global warming) will be
                      presented, particularly from the viewpoints of policies
                      and institutions. Students are expected to understand:
                    </p>
                    <ol className="right-parenthesized-decimal">
                      <li> basic facts about climate change, </li>
                      <li>
                        {" "}
                        United Nations Framework Convention on Climate Change
                        (UNFCCC), and{" "}
                      </li>
                      <li>
                        {" "}
                        climate change mitigation measures in developing
                        countries.
                      </li>
                    </ol>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac6-27"></InputAcChild>
                  <LabelAcChild for="ac6-27">
                    Conservation and Ecotoxicology of Soil and Water
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      The aims of this lecture-style class is to teach students
                      to understand the basics of remediation of contaminated
                      soil and water through a lecture on the outbreak of
                      pollution, environmental standards, exposure to organisms,
                      toxicity, environmental fates of pollutants, effects on
                      ecosystems, remediation technologies of soil and water,
                      and waste treatment technologies.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac6-28"></InputAcChild>
                  <LabelAcChild for="ac6-28">
                    Electric Power and Energy Engineering
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      Fundamentals on electric power and energy engineering will
                      be studied.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac6-29"></InputAcChild>
                  <LabelAcChild for="ac6-29">
                    English Communication in Environmental Issues
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      Develop ability to learn and think about environmental
                      problems in English, and apply this present and discuss
                      one's ideas in English.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac6-30"></InputAcChild>
                  <LabelAcChild for="ac6-30">
                    Environmental Industry Systems
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This course encourages a unique style of learning. The
                      course consists of:
                    </p>
                    <ol className="right-parenthesized-decimal">
                      <li>
                        {" "}
                        lectures by representatives of environmental industries
                        located in the Chubu area,{" "}
                      </li>
                      <li>
                        {" "}
                        presentations and/or discussions among students,{" "}
                      </li>
                      <li>
                        {" "}
                        discussions between students and industry staff. The
                        guest speakers are from prominent companies primarily in
                        the manufacturing field.
                      </li>
                    </ol>
                    <p>
                      Note that the students are strongly recommended to take a
                      course on "Theory of Environmental Resources Management".
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac6-31"></InputAcChild>
                  <LabelAcChild for="ac6-31">
                    Exercise on Conservation and Ecotoxicology of Soil and Water
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      The class aims to understand the basic knowledge and
                      techniques to carry out the research on the pollution of
                      soil and groundwater, and waste treatment by the exercise.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac6-32"></InputAcChild>
                  <LabelAcChild for="ac6-32">
                    Frontier in Civil Engineering
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      The aim of the lecture is to comprehensively examine the
                      framework of civil engineering by introducing various
                      research topics, projects and so on that civil engineering
                      staff have investigated in recent years.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac6-33"></InputAcChild>
                  <LabelAcChild for="ac6-33">
                    Global Research Internship
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      As part of the Global Environmental Leaders Program, this
                      course aims to provide students with research and survey
                      opportunities at universities, research institutions,
                      companies and governments in Japan and overseas to enable
                      them to acquire the ability to conduct practical and
                      applied research. Internships should be conducted based on
                      close communication with Academic Advisors. Students are
                      expected to acquire practical research know-how through
                      Research Training (ORT). Details of internships such as
                      periods and terms of implementation should be decided
                      through consultation with the Academic Advisor and experts
                      at recipient organizations.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac6-34"></InputAcChild>
                  <LabelAcChild for="ac6-34">
                    Industrial Uses of Radiation
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      In this course, students study ionizing radiations,
                      activity, and radiation detections. Students will also
                      study how ionizing radiations are powerful tools in
                      manufacturing industries.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac6-35"></InputAcChild>
                  <LabelAcChild for="ac6-35">
                    Low Carbon Cities Studies
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      To learn about policies, plans and technological and
                      institutional measures to realize low carbon cities with a
                      view to integrating climatic change mitigation into urban
                      development.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac6-36"></InputAcChild>
                  <LabelAcChild for="ac6-36">
                    Semiconductor Devices
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      Fundamental properties of semiconductors and physics of
                      photonic devices and quantum devices for micro- and nano
                      electronics are studied. A guideline of novel device
                      designs is mastered in this lecture.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac6-37"></InputAcChild>
                  <LabelAcChild for="ac6-37">
                    Seminar on Computational Science and Engineering
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>The aims of this seminar are:</p>
                    <ol className="parenthesized-decimal">
                      <li>
                        to cultivate a broad and general view on computational
                        science and engineering, and{" "}
                      </li>
                      <li>
                        to acquire the ability to present in English through
                        practices presentations and cross examination under
                        supervision by native speakers of English.
                      </li>
                    </ol>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac6-38"></InputAcChild>
                  <LabelAcChild for="ac6-38">
                    Seminar on Conservation of Geoenvironment 1A
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      The following issues can be explained using a
                      comprehensive understanding: of
                    </p>
                    <ol>
                      <li>Mechanism of soil and groundwater pollution.</li>
                      <li>Fate of pollutants in soil and groundwater.</li>
                      <li>Bioremediation technologies and microorganisms.</li>
                      <li>
                        Other physical and chemical remediation technologies.
                      </li>
                    </ol>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac6-39"></InputAcChild>
                  <LabelAcChild for="ac6-39">
                    Seminar on Conservation of Geoenvironment 1B
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      The aim of this class is to equip students with an
                      understanding of the fundamental phenomena in relation to
                      the pollution of soil and ground water: mechanism and
                      modelling of pollutant behavior, bioremediation
                      technologies and microbial behavior, waste management and
                      environmental risk assessment, and other relevant issues.
                      Students should be able to explain two of the following
                      issues based on a comprehensive understanding.
                    </p>
                    <ol>
                      <li>Mechanism of soil and groundwater pollution</li>
                      <li>Fate of pollutants in soil and groundwater.</li>
                      <li>Bioremediation technologies and microorganisms.</li>
                      <li>
                        Other physical and chemical remediation technologies
                      </li>
                    </ol>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac6-40"></InputAcChild>
                  <LabelAcChild for="ac6-40">
                    Seminar on Conservation of Geoenvironment 1C
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      The aim of this class is to equip students with an
                      understanding of the fundamental phenomena in relation to
                      the pollution of soil and ground water and, the mechanism
                      and modelling of pollutant behavior, bioremediation
                      technologies and microbial behavior, waste management.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac6-41"></InputAcChild>
                  <LabelAcChild for="ac6-41">
                    Seminar on Conservation of Geoenvironment 1D
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      The aim of this class is to equip students with an
                      understanding of the fundamental phenomena in relation to
                      the pollution of soil and ground water and, the mechanism
                      and modelling of pollutant behavior, bioremediation
                      technologies and microbial behavior, waste management.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac6-42"></InputAcChild>
                  <LabelAcChild for="ac6-42">
                    Sustainability and Environmental Studies
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      The objective of the course is to provide students with
                      several definitions, views, interpretations, and analyses
                      on the notion of sustainability.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac6-43"></InputAcChild>
                  <LabelAcChild for="ac6-43">
                    Theory of Data Analysis and Processing
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      The purpose of this seminar is to learn measuring methods
                      and the technique of data analysis for experiments of
                      electronic and information systems. You can understand
                      main methods through lectures and exercises using
                      computers. The lecture cultivates the fundamental skill of
                      collecting and analyzing experimental data.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac6-44"></InputAcChild>
                  <LabelAcChild for="ac6-44">
                    Theory of Environmental Resources Management
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      Students are expected to understand environmental problems
                      from the viewpoint of 'resources'. They are required to
                      understand
                    </p>
                    <ol className="right-parenthesized-decimal">
                      <li> Optimal point of use of the resources; and</li>
                      <li> Theory and cases of 3R. </li>
                    </ol>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac6-45"></InputAcChild>
                  <LabelAcChild for="ac6-45">
                    Transportation Systems Analysis{" "}
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      To understand approaches and methods to analyze travel
                      behavior and demands for various transportation systems
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac6-46"></InputAcChild>
                  <LabelAcChild for="ac6-46">
                    Water and Waste Engineering
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      Water pollution and solid waste are two major
                      environmental problems facing our society today. In this
                      class, we will learn about various technologies and
                      measures applied to drinking water supply, control of
                      pollution of water bodies, and solid waste management.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac6-47"></InputAcChild>
                  <LabelAcChild for="ac6-47">
                    Water and Waste Management Policies
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      Water pollution and solid waste are some of the major
                      environmental problems facing our society today. In this
                      class we will learn about various technologies and
                      measures applied to the drinking water supply, control of
                      pollution of water bodies, and solid waste management.
                    </p>
                  </DivAcChildContent>
                </DivAcParentContent>
                <InputAcParent type="checkbox" id="ac7"></InputAcParent>
                <LabelAcParent for="ac7">
                  Bioagricultural Sciences
                </LabelAcParent>
                <DivAcParentContent>
                  <InputAcChild type="checkbox" id="ac7-0"></InputAcChild>
                  <LabelAcChild for="ac7-0">
                    Basics of Bioagricultural Sciences
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This course will introduce the latest scientific findings
                      related to bioagricultural sciences. Also in this course,
                      students will introduce their own research subjects. The
                      aim of this course is to learn presentation and discussion
                      skills and to deepen the knowledge for own study through
                      the discussion with the students from different research
                      fields.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac7-1"></InputAcChild>
                  <LabelAcChild for="ac7-1">
                    Bioagricultural Sciences
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This course will introduce the scientific breakthroughs
                      and technological innovations that contributed to modern
                      agriculture. The aim of this course is to familiarize
                      students with the current advances in science and
                      technology and how such innovations have shaped the
                      agriculture that we know today. In this course, active
                      discussion among students will be facilitated in order to
                      evaluate the application of scientific and technological
                      advances that will promote agricultural progress not only
                      in developed countries but in all countries worldwide.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac7-2"></InputAcChild>
                  <LabelAcChild for="ac7-2">
                    Bioresource Cycling System Science
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This course will be based on participants' presentations.
                      Some of the students will be assigned to do a presentation
                      in a session, but all of them are requested to prepare
                      every class and actively participate in it. Topics include
                    </p>
                    <ol>
                      <li>Basic theory of method for growth analysis</li>
                      <li>Absolute growth rate and relative growth rate</li>
                      <li>Basic parameters for growth analysis</li>
                      <li>Cross relationships between the parameters</li>
                      <li>
                        Basic tips for how to proceed with a research and growth
                        analysis
                      </li>
                    </ol>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac7-3"></InputAcChild>
                  <LabelAcChild for="ac7-3">
                    lnternational Cooperation in Agricultural Sciences II
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This program will look at the following topics: history of
                      ODA (Official Development Assistance) and JICA (Japan
                      International Cooperation Agency), activities of JICA
                      specialists, roles of NGOs (non-governmental
                      organization), developing international consortium run by
                      ICCAE (International Cooperation Center for Agricultural
                      Education, NU), networks for north-south international
                      cooperation and other related matters.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac7-4"></InputAcChild>
                  <LabelAcChild for="ac7-4">
                    lnternational Cooperation in Agricultural Sciences I
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This course aims at comparing and analyzing the activities
                      of international organizations and NGOs for solving the
                      problems developing countries are suffering from. You are
                      going to generate reform policies for education, an
                      efficient curriculum and syllabus to foster professional
                      people in the agricultural field. You could also get
                      profound insight into common problems when disseminating
                      technologies and building effective systems of it. Other
                      issues for the course will be set on learning to find out
                      the local needs and the methods for prior, mid-term,
                      wrap-up and post-project evaluation in the agricultural
                      international cooperation.
                    </p>
                  </DivAcChildContent>
                </DivAcParentContent>
                <InputAcParent type="checkbox" id="ac8"></InputAcParent>
                <LabelAcParent for="ac8">
                  International Development
                </LabelAcParent>
                <DivAcParentContent>
                  <InputAcChild type="checkbox" id="ac8-0"></InputAcChild>
                  <LabelAcChild for="ac8-0">
                    Academic Writing Skills I
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      The aim of this course is to develop students' writing
                      skills and familiarize them with the conventions related
                      to academic writing in English. We will focus on cleaning
                      up common errors of grammar, collocation and word choice.
                      We will use paragraph structure as a starting point to
                      expand in to longer essay formats, focusing on how to
                      formulate sound topics, concluding sentences, and
                      providing supporting information. Some of the classes will
                      also be conducted like workshop sessions, where the
                      instructor works closely with students in small groups.
                      Evaluation will be based on in-class and homework
                      assignments as well as some short writing assignments.
                      Students will use workshop sessions to formulate topics
                      for their writing assignments. The small-group sessions
                      will also feature peer review and revision to encourage
                      collaborative habits and allow students to learn from, and
                      assist, their classmates.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac8-1"></InputAcChild>
                  <LabelAcChild for="ac8-1">
                    Academic Writing Skills II
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      Academic Writing Skills II consolidates and expands on the
                      writing skills learned in Academic Writing Skills I while
                      also focusing on more specific issues relating to academic
                      writing, such as document formats and style guides, citing
                      and footnoting, and avoiding plagiarism. Another goal is
                      to familiarize students with a number of different essay
                      formats, such as contrastive essays and argumentative
                      essays. Within each topic of study we will also examine
                      grammar-related problems that frequently occur. Students
                      will use their own thesis or dissertation topic as the
                      basis for in-class and homework assignments with the goal
                      of improving the quality of their work prior to submission
                      for examination.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac8-2"></InputAcChild>
                  <LabelAcChild for="ac8-2">Asian Politics</LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This course aims to develop various perspectives to
                      analyze politics in developing countries through examining
                      various case studies which are sometimes overlooked by the
                      perspectives of Western Political Science.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac8-3"></InputAcChild>
                  <LabelAcChild for="ac8-3">
                    Comparative and International Education{" "}
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      The main objective of this course is to know and discuss
                      various perspectives on the meanings and functions of
                      education in society and for individual learners.
                      Particular references will be given to the learners in
                      developing countries and issues encountered there. For
                      that objective, the students will be exposed to the
                      research paradigms, methodologies, and issues of
                      international development, comparative education and
                      relevant academic fields. While the course in the fall
                      semester focuses more on school-based education and policy
                      issues, this course will look at educational phenomena in
                      the wider socio-economic, cultural, and political
                      pictures. The questions to be raised include: What does it
                      mean to educate people? And how is it interpreted from
                      different perspectives?
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac8-4"></InputAcChild>
                  <LabelAcChild for="ac8-4">
                    Development and Socio-Cultural Change
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This course will identify key issues concerning
                      international labor migration. Starting from theories and
                      concepts of migration studies, participants will discuss
                      various aspects and case studies of both sending and
                      receiving countries of migrants. Students are requested to
                      make presentations depending on their research interests.
                    </p>
                    <p>
                      Participants are expected to acquire comprehensive view of
                      migration issues through discussion and presentation.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac8-5"></InputAcChild>
                  <LabelAcChild for="ac8-5">
                    Development Assistance
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This course will introduce the policies and practices of
                      Japan's Official Development Assistance (ODA) on current
                      hot issues in the subject of infrastructure development.
                      This includes transportation and urban development,
                      regional development, the global environment including
                      climate change, disaster risk management, and other trends
                      and topics in recent development cooperation. Some
                      lecturers will offer the lecture through their practical
                      experiences related to the above subjects. The student is
                      given the assignment of both report and presentation.
                      There are some presentation/report themes presented by the
                      lecturers, which are related to the above subjects. Each
                      student needs to choose one out of the presented themes
                      and make a presentation (individual or group) in the
                      latter part of this course. They must also submit a report
                      on a chosen theme after the presentation.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac8-6"></InputAcChild>
                  <LabelAcChild for="ac8-6">
                    Development Cooperation
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      The course discusses the practical side of development
                      cooperation that participants have to know about to work
                      on projects. Firstly, we will study World Bank aid
                      strategy including activities in the International
                      Development Association of the World Bank group.
                      Development practitioners should not be isolated from what
                      is going on in the international aid community.
                      Understanding of aid strategy in the international aid
                      community will not only help participants work together
                      with other development institutions in donor meetings but
                      also enhance the impact of projects and improve their
                      quality. The second topic of the course is about credit
                      risk analysis. Participants will study debt crisis as a
                      consequence of project lending without credit analysis on
                      repayment capability. Familiarity of macroeconomic risk
                      management of the projects is crucial for development
                      practitioners in identifying projects, funding them and
                      managing them. We will work through several criteria
                      broadly employed by aid organizations including JICA, the
                      World Bank and the IMF. The required level of economics
                      will be kept to a minimum (second year college level). The
                      third topic will be social protection with a focus on
                      pension system. Developing countries are aging faster than
                      developed countries. However, developing countries are not
                      well prepared against rapid aging in terms of income
                      levels as well as institutions including pension systems.
                      Income inequality is substantially higher among the
                      elderly than the national average. Reforming and
                      initiating pension systems is of urgent importance for
                      developing countries since it will take time for any
                      reforms to have an effect. The course will also cover the
                      social side of aid with many examples from the World Bank
                      and ADB. Apart from the above three topics, development
                      cooperation by the private sector and development
                      cooperation in the areas of education will be discussed.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac8-7"></InputAcChild>
                  <LabelAcChild for="ac8-7">Development Economics</LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      As the core discipline subject of the DID's Economic
                      Development Policy &amp; Management (EDPM) Program, this
                      course offers key principles and issues of the Economics
                      of Development bearing the needs of first-time learners in
                      mind. Topics to be covered are:
                    </p>
                    <ol className="right-parenthesized-decimal">
                      <li>
                        {" "}
                        the role of economic development in "development" and
                        poverty reduction (in conjunction with attaining the
                        MDGs);
                      </li>
                      <li> the evolution of economic development thinking;</li>
                      <li>
                        {" "}
                        stylized facts in economic development (open and closed
                        questions);
                      </li>
                      <li>
                        {" "}
                        theories of development (traditional and new growth
                        theories);
                      </li>
                      <li>
                        {" "}
                        dualistic development and structural change (growth,
                        poverty, and income distribution; rural-urban
                        dichotomy);
                      </li>
                      <li> education and development;</li>
                      <li>
                        {" "}
                        sustainable development (the environment and
                        development);
                      </li>
                      <li>
                        {" "}
                        trade and development (import substitution, export
                        promotion, and globalization);{" "}
                      </li>
                      <li>
                        {" "}
                        financing development (capital and saving, financial
                        system and development);
                      </li>
                      <li>
                        {" "}
                        guiding development of markets vs. controls (the role of
                        government in development, good governance);
                      </li>
                      <li> development and institutions; and</li>
                      <li>
                        {" "}
                        new development challenges in the 21st century
                        (globalization, international economic system, peace
                        building, growth fetishism (?), etc.)
                      </li>
                    </ol>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac8-8"></InputAcChild>
                  <LabelAcChild for="ac8-8">Development Finance</LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This course will cover various topics of development
                      finance. The first part of this course is dedicated to
                      policy issues of development finance and related theories.
                      In the second part, we will discuss country or
                      region-specific issues of development finance and consider
                      policy recommendations based on macroeconomic situations,
                      financial crises, and MDGs based on presentations of
                      textbooks and related papers. Having a good understanding
                      of all the core courses of the EDPM program would be
                      preferable.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac8-9"></InputAcChild>
                  <LabelAcChild for="ac8-9">
                    Development Macroeconomics
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      The objective of this subject is to understand basic macro
                      &amp; international economic theories and apply them to
                      developing countries. It begins with the basic concepts of
                      Economics (demand, supply and price), National Accounts,
                      GNI (Gross National Income), Keynesian theories,
                      International trade theories, economic growth and
                      development models, and Globalization of the world
                      economy. We will deal with economic topics in Japan and
                      also practice how to extract macroeconomic features of a
                      country from various economic statistics. Students are
                      expected to acquire basic knowledge and tools for the
                      analysis of developing economies.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac8-10"></InputAcChild>
                  <LabelAcChild for="ac8-10">
                    Development Microeconomics
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This course is designed to provide the essence of
                      microeconomic theory, which would be useful for the
                      analysis on development microeconomics. Later in this
                      course, we will discuss various issues on development
                      microeconomics. Students will be asked to write a term
                      paper on those topics presented in the class or of their
                      choices and to present in the class.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac8-11"></InputAcChild>
                  <LabelAcChild for="ac8-11">
                    Development Politics I
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      Development is inevitably political as it is fundamentally
                      related with distribution of scarce resources which are
                      very critical for us to realize "good lives". People have
                      developed various thoughts, practices and institutions to
                      tame conflicts over the resources. This course aims to
                      encourage students to precisely analyze political and
                      developmental problems of developing countries through
                      deepening their understanding on important political
                      philosophies.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac8-12"></InputAcChild>
                  <LabelAcChild for="ac8-12">
                    Development Politics II
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This course aims to argue one of the most important
                      aspects of development politics: institution. Recently
                      institution has been widely employed by many social
                      scientists as the concept that occupies the centre of
                      analysis. The role of the State and its different
                      organizational levels and "capacities" have also been
                      questioned over the last decades. In this course, we first
                      address the puzzle of collective action as the limit of
                      self-government, and then discuss how institution has
                      become one of the fundamental perspectives to understand
                      political processes, policy outcomes and varieties of
                      political phenomena. We will review both classical and
                      recent works that directly tackled institutional aspects
                      of politics, so as to comprehend and critically argue the
                      most recent development of theories as well as their
                      possible application in empirical analysis. All
                      participants are required to read the designated course
                      materials in advance, and actively participate in the
                      discussion of each class.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac8-13"></InputAcChild>
                  <LabelAcChild for="ac8-13">
                    Development Project Management
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This course provides students with basic knowledge and
                      concepts of "Management" and theories of "Plan", "Do", and
                      "See" in implementing development projects related to
                      economy, society, humanity and environment, especially
                      taking "sustainability" into account.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac8-14"></InputAcChild>
                  <LabelAcChild for="ac8-14">
                    Development Sociology
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This lecture series will introduce students to basic
                      theories and approaches in international development. We
                      will begin by examining how development has been defined,
                      measured, and approached by the development community.
                      This is followed by the review of classical theories of
                      development that examine the roles of the market and the
                      state in promoting development. We will try particularly
                      to understand theories about modernization and
                      underdevelopment, the two major currents of thought that
                      explore the causes of why nations stay poor. We will then
                      look at development actors, i.e., foreign donors, aid
                      recipients, international financial institutions, the
                      United Nations, multinational corporations, and civil
                      society organizations. Lastly, we will discuss some of the
                      current issues in international development: environment,
                      rural and urban development, and health. By the end of
                      this course, students will be expected to demonstrate
                      their understanding of the evolution of development
                      theories and to enhance their ability to articulate their
                      views concerning current development issues.{" "}
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac8-15"></InputAcChild>
                  <LabelAcChild for="ac8-15">
                    Development Statistics
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This is an introductory statistics course for social
                      sciences, especially for development economics. Lectures
                      cover basic theories and applications of regression
                      analysis.
                    </p>
                    <p>
                      Computer assisted practical exercises are given using
                      EXCEL and SPSS. Supplementary lectures on basic
                      mathematics, probability and statistics are provided for
                      those who need them.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac8-16"></InputAcChild>
                  <LabelAcChild for="ac8-16">Education and Health</LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This course introduces students to current trends and
                      issues on health and development in developing countries.
                      A combination of various methods, such as lectures, group
                      discussion, workshops and case studies will be used. By
                      the end of the course, students are expected to be able to
                      explain the key concept of primary health care, factors
                      affecting people's health, and approaches to link health
                      with other social development issues.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac8-17"></InputAcChild>
                  <LabelAcChild for="ac8-17">
                    Education, Skill Development and Work
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This course considers how firm-based research, education,
                      and training contribute to the creation and dissemination
                      of knowledge and the formation and development of skills,
                      and thereby to industrial and economic development. This
                      course is divided into three parts. The first part
                      theoretically and historically analyzes the relationship
                      between skills development and economic development. The
                      second part examines the role of institutions associated
                      with the formation and dissemination of knowledge and
                      skills, such as research and development (R&amp;D)
                      laboratories, corporate training centers, and technical
                      and vocational education and training (TVET) in improving
                      industrial performance. The third part explores the
                      effects of digitization of the workplace on firm-based
                      skill formation and considers implications of the ongoing
                      process toward a "knowledge-based economy" for the nature
                      of work, the patterns of skill formation, and the labor
                      markets in developing countries. This course includes a
                      few field visits to corporate training centers in Nagoya
                      and adjacent cities for observing the actual practice of
                      in-firm human resources development.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac8-18"></InputAcChild>
                  <LabelAcChild for="ac8-18">
                    Educational Development and Cooperation
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This course is intended to generate comprehensive
                      understanding of theories and practices in educational
                      development and cooperation. The course is divided into
                      two parts. Part 1 is aimed at fostering the acquisition of
                      basic knowledge and skills necessary when approaching
                      issues in educational development and cooperation. The
                      class covers major methodologies in social sciences, as
                      research in educational development and cooperation
                      inevitably requires an interdisciplinary approach. Part 2
                      provides an overview of practices in international
                      cooperation in education. Starting with an introduction to
                      basic governance structures and organizations of
                      international cooperation, the class covers major issues
                      in the practices of educational development and
                      cooperation at various levels in education.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac8-19"></InputAcChild>
                  <LabelAcChild for="ac8-19">
                    Educational Development Planning and Evaluation
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This course aims to consider the role of higher education
                      under the framework of educational development planning
                      and evaluation. Higher education plays an essential role
                      in contemporary knowledge based society, and has its own
                      context distinguished from primary and secondary
                      education. At the same time, education planning and
                      evaluation is inevitably linked with the issues of access
                      to higher education, brain drain and brain gain typically
                      occurring at the higher education level. The class covers
                      the following topics:
                    </p>
                    <ol className="parenthesized-decimal">
                      <li>historical origins of modern higher education,</li>
                      <li>access and equity in higher education,</li>
                      <li>knowledge economy and higher education, and</li>
                      <li>
                        assessment of international cooperation in higher
                        education.
                      </li>
                    </ol>
                    <p>
                      Across these topics, participants are expected to examine
                      the role and value of international cooperation in higher
                      education.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac8-20"></InputAcChild>
                  <LabelAcChild for="ac8-20">
                    Educational Development Policies
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      The major objective of this course is to acquire a
                      comprehensive understanding of theories and practical
                      issues on educational development and international
                      cooperation for it. The course is divided into two parts.
                      The first part is to review major theories and dimensions
                      of educational development as an area contributing to the
                      comprehensive national development, economically,
                      socially, or culturally. This part also focuses on the
                      cooperation/aid by the outside actors, mostly multi- and
                      bi-lateral donor organizations in relation to the
                      historical changes of international educational
                      cooperation from the 1960s up to the present. Normative
                      trends of educational assistance, oft-used modalities of
                      aid, and challenges of aid will be discussed. The last
                      part of the course will touch upon issues regarding
                      different aspects of formal education, such as quality of
                      teaching and learning, administration, finance, and
                      decentralization.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac8-21"></InputAcChild>
                  <LabelAcChild for="ac8-21">
                    GSID Domestic Fieldwork
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      GSID Domestic Fieldwork (DFW) is a research programme to
                      understand issues on regional development in Japan. It is
                      composed of several parts: lectures, preparation of
                      research tools, field work, analysis, and reporting back
                      to the stakeholders. It is planned to be held during
                      October 21-23, 2014 in Ohdai town, Mie Prefecture.
                      Presentation to stakeholders will be held afterward.
                      Students will be divided into different thematic groups.
                      They are expected to write up reports on their findings as
                      group work. Those who register this course should take
                      Preparatory Seminar for GSID DFW.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac8-22"></InputAcChild>
                  <LabelAcChild for="ac8-22">
                    GSID Overseas Fieldwork
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      The Overseas Fieldwork Program (OFW) of GSID aims to
                      provide students with an opportunity to gain first-hand
                      experiences of conducting fieldworks in a developing
                      country and to enhance communication skills based on group
                      work. In the past, overseas fieldworks were conducted in
                      Thailand, Indonesia, the Philippines, China, South Korea,
                      and Cambodia.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac8-23"></InputAcChild>
                  <LabelAcChild for="ac8-23">
                    Indigenous Development and Capacity Building in Rural Area
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      The main aim of this course is to enable students to
                      understand and evaluate "indigenous development" both in
                      theory and in practice. By the end of this course,
                      students will
                    </p>
                    <ol className="parenthesized-decimal">
                      <li>
                        understand the current main points of debate on cultural
                        transformation and globalisation,
                      </li>
                      <li>
                        be able to critically examine the concept of "indigenous
                        development"
                      </li>
                      <li>
                        be able to contextualise "indigenous development" within
                        the current debate of development and to evaluate its
                        role.
                      </li>
                    </ol>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac8-24"></InputAcChild>
                  <LabelAcChild for="ac8-24">
                    International Cooperation Law
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This is an introductory course for the study of
                      international law, with the aim of imparting a basic
                      knowledge of what international law is, and how it
                      functions. International law is understood as a set of
                      rules to promote friendly relations among States and
                      international cooperation to ensure peace, human rights
                      and democracy. Due to time constraints, it does not cover
                      the entire field of international law; however, it will
                      impart a basic idea on how international law is created,
                      how it is enforced and how it is implemented.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac8-25"></InputAcChild>
                  <LabelAcChild for="ac8-25">
                    International Economic Law
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This course provides an examination of the law of the
                      World Trade Organization (WTO) and the law on foreign
                      investment. It first provides a brief introduction to the
                      history and evolution of the legal framework for trade
                      liberalization and investment protection. It then proceeds
                      to examine WTO law, focusing primarily on the WTO
                      Agreement on Goods (GATT) and on the WTO Dispute
                      Settlement Understanding (DSU), while a brief overview of
                      topics such as the General Agreement on Services (GATS)
                      and financial services in the GATS as well as intellectual
                      property under the WTO will also be provided. The latter
                      half of this course deals with investment law, focusing on
                      selected substantive obligations for investment protection
                      and investment arbitration as a means of procedural
                      protection for foreign investment. The course concludes by
                      examining the developing trends towards regionalism
                      demonstrated by the ongoing negotiations of mega Free
                      Trade Agreements such as the Trans-Pacific Strategic
                      Economic Partnership Agreement, Transatlantic Trade and
                      Investment Partnership and Regional Comprehensive Economic
                      Partnership.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac8-26"></InputAcChild>
                  <LabelAcChild for="ac8-26">
                    International Labor Migration
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This course will identify key issues concerning
                      international labor migration. Starting from theories and
                      concepts of migration studies, participants will discuss
                      various aspects and case studies of both sending and
                      receiving countries of migrants. Students are requested to
                      make presentations depending on their research interests.
                    </p>
                    <p>
                      Participants are expected to acquire comprehensive view of
                      migration issues through discussion and presentation.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac8-27"></InputAcChild>
                  <LabelAcChild for="ac8-27">
                    Introduction to International Development
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This course will introduce an overall framework and
                      essential ideas of International Development and
                      Cooperation using an interdisciplinary approach.
                      Participants in this GSID common course are expected to
                      acquire wider knowledge and overview of international
                      development study. Disciplines and crucial issues of
                      International Development will be explained by instructors
                      from seven programs, and help participants open up
                      perspectives on International Development.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac8-28"></InputAcChild>
                  <LabelAcChild for="ac8-28">
                    Introduction to Questionnaire Survey and Interview
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      The main purpose of this course is to help students
                      acquire the basic knowledge and skills needed to conduct
                      interviews and surveys during fieldwork. This course first
                      introduces students to the principles of fieldwork and
                      then provides hands-on experience by doing a small
                      fieldwork project in a group of three or four students.
                      Each month, the course focuses upon a different aspect of
                      fieldwork. In April, students will learn the basics of
                      fieldwork research and research design, decide on their
                      fieldwork topic, and begin their pre-fieldwork. In May,
                      students will learn how to plan interviews, conduct them
                      in a professional way, and analyze interview data. They
                      will also learn how to present interview data effectively.
                      In June, students will learn how to create a field survey
                      and how to do basic descriptive and inferential analysis.
                      They will also learn how to present survey data
                      effectively. In July, students will first learn how to
                      make strong and credible claims based upon the evidence
                      that they have gathered. Then, each group will present
                      their findings. By the end of the semester, students
                      should have developed a strong understanding of the
                      principles and practice of fieldwork.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac8-29"></InputAcChild>
                  <LabelAcChild for="ac8-29">
                    Japan's Development Experience
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This course examines the development and modernisation
                      process of Japan from various perspectives, including both
                      positive and negative. Lecturers from different
                      disciplines deal with issues such as economy, law,
                      governments, agricultural/rural development, education,
                      social development, peace-building, etc. Participants will
                      understand the crucial issues pertaining to Japan's
                      development experience, and consider the adaptability of
                      this experience to other countries.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac8-30"></InputAcChild>
                  <LabelAcChild for="ac8-30">
                    Law and Development Studies
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      The aim of "Law and Development Studies (LDS)" is analysis
                      of the role of legal system and institutions in
                      socio-economic development, or relationship between
                      development and legal systems in developing countries.
                      This course focuses on the relevant theories on LDS, and
                      case studies. Participants are required to read designated
                      reading materials (in English) on LDS before each lecture.
                      The reading list will be given in the first lecture. This
                      course also covers issues about legal culture and informal
                      law (e.g. religious law) in the modern world.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac8-31"></InputAcChild>
                  <LabelAcChild for="ac8-31">
                    Lecture on Development Policy Ib
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This is a special lecture focusing on the policies of
                      energy and climate change and carbon emissions. The
                      lecture will provide students the theories and
                      methodologies low-carbon economics, a brand new research
                      field of economic theory. Students are encouraged to do
                      field studies in local countries and present research
                      result in workshop and international conference.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac8-32"></InputAcChild>
                  <LabelAcChild for="ac8-32">
                    Lecture on International Development I (Campus ASEAN Joint
                    Education Course)
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      In this lecture the student will not only learn theory
                      about the UN agency but also look back on individual
                      students' history and experiences. As we do this those
                      attending the lecture will be able to create their own
                      precise career path which is preparation for those who
                      want to work in either the UN agency or another workplace.
                      In these intensive lectures, students will prepare their
                      own UN personal history form (P-11) / CV and practice
                      interviewing. In the lectures, handouts will mainly be
                      used.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac8-33"></InputAcChild>
                  <LabelAcChild for="ac8-33">
                    Lecture on International Development I (Citizenship and
                    Immigration)
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      What is a nation, and who belongs in it/to it? How does
                      human mobility affect development on the levels of labor,
                      policy, culture and society? This course will explore the
                      concepts of nation and citizenship by examining how
                      different societies throughout the world deal with the
                      question of including or excluding the "other". This
                      examination will then expand to focus on how questions of
                      human mobility and development issues. It will look at the
                      presence of both foreign others (immigrants, refugees and
                      exiles) and domestic others (minority ethnicities and
                      internal migrants, for example) in different nations, and
                      how different approaches are used to include or exclude
                      non- or marginalized citizens. We will examine these
                      issues starting from a historical perspective and trace
                      developments to the present day, using themes relating to
                      selected countries from a variety of continents and
                      regions
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac8-34"></InputAcChild>
                  <LabelAcChild for="ac8-34">
                    Lecture on International Development I (International
                    Migration Theory){" "}
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      The purpose of this class is to gain a deeper
                      understanding of the global movement of people, which is
                      becoming much more active due to the phenomenon of
                      globalization. In this class, a wide range of historical
                      and contemporary issues related to international migration
                      will be considered through active discussions among
                      participants. To understand current immigration issues,
                      Australian radio news on immigration related topic will be
                      introduced at every class.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac8-35"></InputAcChild>
                  <LabelAcChild for="ac8-35">
                    Lecture on International Development I (International Career
                    Development)
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      People saying that I am aiming to work in the UN is like
                      saying I want to take part in the Olympics. The reason is
                      that the Olympics has many games, and so in a similar way,
                      the UN has many agencies and organizations. And so it can
                      be vague as to what exactly you want to work as. In the
                      Olympics, you need to decide which sport you take part in
                      and your ability in that sport. In a similar way, in the
                      UN, you need to decide which agency or organization to
                      join and know your ability to work in that chosen agency.
                      In this class student will not only learn theory about the
                      UN agency but also look back on individual students'
                      history and experiences. As we do this those attending the
                      lecture will be able to create their own precise career
                      path which is preparation for those who want to work in
                      either the UN agency or another workplace. In these
                      intensive lectures, students will prepare their own UN
                      personal history form (P-11) / CV and practice
                      interviewing. In the lectures, handouts will mainly be
                      used.{" "}
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac8-36"></InputAcChild>
                  <LabelAcChild for="ac8-36">
                    Lecture on Managerial Development Ia
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This course introduces students to typical topics in
                      development economics. Both micro and macro issues in
                      development economics will be covered. For example, we
                      will discuss rural credit issues. Informal money lenders,
                      such as landlords and shopkeepers, and the offering of
                      loans with high interest rates in rural credit markets.
                      What prevents formal lenders, such as government and
                      commercial banks, from participating in rural credit
                      markets in spite of the prevalent high interest rates? For
                      another example, we will study agricultural land tenancy.
                      In Latin American countries, land tenancy is largely in
                      the form of fixed rent, whereas Asian tenancy is
                      characterized by a high incidence of sharecropping. Where
                      does the difference come from?
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac8-37"></InputAcChild>
                  <LabelAcChild for="ac8-37">
                    Lecture on Managerial Development Ib
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This course introduces students to typical topics in
                      development economics. Both micro and macro issues in
                      development economics will be covered. For example, we
                      will discuss rural credit issues, informal money lenders,
                      such as landlords and shopkeepers, and those who offer
                      loans with high interest rates in rural credit markets.
                      What prevents formal lenders, such as government and
                      commercial banks, from participating in rural credit
                      markets in spite of the prevalent high interest rates? For
                      another example, we will study agricultural land tenancy.
                      In Latin American countries, land tenancy is largely in
                      the form of fixed rent, whereas Asian tenancy is
                      characterized by a high incidence of sharecropping. Where
                      does the difference come from?
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac8-38"></InputAcChild>
                  <LabelAcChild for="ac8-38">
                    Lecture on Peacebuilding I
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      The aim of "Peace building" is to research and analyze the
                      normalization process of a social system in post-conflict
                      or post-disaster societies. This course focuses the
                      relationship between "rule of law" and peace building
                      process. In the lecture, we will read a monograph on human
                      rights and the peace building process.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac8-39"></InputAcChild>
                  <LabelAcChild for="ac8-39">Multi-Ethnic Society</LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This course will deal with ethnicity-related issues.
                      Starting from key concepts (ethnicity, nationalism, etc.),
                      it will cover various topics and cases of nation-state
                      building and majority-minority relations mainly from a
                      sociological viewpoint. Students may be requested to make
                      presentations on case studies depending on their research
                      interests.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac8-40"></InputAcChild>
                  <LabelAcChild for="ac8-40">
                    Participatory Rural Industory Promotion
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      The aim of this course is to enable students to understand
                      and evaluate the theories and practices of participatory
                      rural development, especially aspects of rural industry
                      promotion. By the end of this course, students will have
                      achieved the following:
                    </p>
                    <ol className="parenthesized-decimal">
                      <li>
                        Have a critical understanding of the major and minor
                        strands in debates on participatory rural industry
                        promotion
                      </li>
                      <li>
                        Be able to critically assess cases of participatory
                        development in rural communities{" "}
                      </li>
                      <li>
                        Be able to apply theoretical and practical lessons of
                        effective interventions using participatory methods
                      </li>
                    </ol>
                    <p>
                      The course provides students with a critical understanding
                      of participatory rural industry promotion in both theory
                      and practice. The course is divided into three parts. The
                      first part provides a general theoretical grounding and
                      traces developments in the theoretical understanding of
                      participatory and rural development. It then moves onto
                      some of the main issues and current debates pertaining to
                      rural development, with specific reference to industry
                      promotion. Finally, it examines concrete case studies.
                      Students are expected to read the key text for each week
                      specified in the reading list, which will be provided in
                      the first lecture.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac8-41"></InputAcChild>
                  <LabelAcChild for="ac8-41">Peacebuilding</LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This course introduces key concepts and issues related to
                      peacebuilding in conflict-prone and post-conflict
                      societies. It aims to examine central challenges in
                      peacebuilding as a part of development cooperation
                      activities - both in terms of theory and practice. The
                      course is made up of three parts. Part I explores
                      frameworks for peacebuilding. In so doing, students will
                      be equipped with some conflict analysis and impact
                      assessment tools. Part II explores three basic strategies
                      commonly seen in peacebuilding:
                    </p>
                    <ol className="right-parenthesized-lower-alpha">
                      <li>humanitarian/emergency response,</li>
                      <li>institutionalization, and</li>
                      <li>societal reconstruction.</li>
                    </ol>
                    <p>
                      Part III focuses on cross-sector issues, exploring some
                      foundational themes for sustainable peace.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac8-42"></InputAcChild>
                  <LabelAcChild for="ac8-42">
                    Politics in Developing Countries
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This course is aimed for discussing political
                      representation and participation in developing countries.
                      This course begins with a traditional argument that the
                      system of political representation is sometimes not
                      designed necessarily to reflect the interest of people. To
                      understand this discussion practically, we start with a
                      discussion of "policy switching", that is, the violation
                      of mandate by an elected authority, which was observed in
                      some developing countries during the neoliberal era. The
                      same problem may apply in cases where the opposing
                      interests of actors prevail or the distribution of
                      disadvantages is inevitable. Then we will discuss the
                      different forms of political representation and
                      participation, the factors and conditions related to
                      collective action, and the variety of relationship between
                      governmental elites and the population. Participants are
                      required to read the assigned material and submit the
                      answers to quiz before class.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac8-43"></InputAcChild>
                  <LabelAcChild for="ac8-43">
                    Politics of Conflict{" "}
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This course aims at deepening our macro-level
                      understanding of conflict. A broad theme is presented in
                      each class. On each theme, a short video clip will be
                      introduced. Students are expected to undertake a small
                      study project based on the video clip and share it with
                      other members of the course. By the end of the course,
                      students are expected to grasp the changing context of
                      international politics and its effects on conflict.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac8-44"></InputAcChild>
                  <LabelAcChild for="ac8-44">
                    Poverty Reduction Strategies
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This course reviews changing debates on poverty in the
                      field of international development and is intended to help
                      you gain policy perspectives on poverty reduction. It does
                      so by making connections between theory and practice and
                      by examining poverty reduction tools used around the
                      world. Intended learning goals
                    </p>
                    <ul>
                      <li>
                        Understand the multi-dimensional nature of poverty
                      </li>
                      <li>
                        Understand the historical changes in the geography of
                        global poverty
                      </li>
                      <li>
                        Understand the changing global strategies for poverty
                        reduction
                      </li>
                      <li>
                        Understand global debates concerning the different types
                        of poverty reduction tools used around the world.
                      </li>
                    </ul>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac8-45"></InputAcChild>
                  <LabelAcChild for="ac8-45">
                    Preparatory Seminar for GSID Domestic Fieldwork
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This course is a preparation course for Domestic Fieldwork
                      (DFW). DFW participants should take this course. By
                      attending lectures, participants could understand the
                      basic characteristics of local administration, rural
                      development, and education in Japan. Especially, are
                      introduced various activities to revitalize the
                      communities in the DFW site in 2015 (Ohdai-cho town, Mie
                      prefecture). DFW participants also make a research plan of
                      DFW held in October, 2015.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac8-46"></InputAcChild>
                  <LabelAcChild for="ac8-46">
                    Preparatory Seminar for GSID Overseas Fieldwork
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This seminar series aims to provide participants in OFW
                      with basic information about the country of study,
                      background of field sites and fieldwork methods. All the
                      OFW participants are required to take this course for
                      credit. Classes will be given by resource persons both
                      within and outside GSID.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac8-47"></InputAcChild>
                  <LabelAcChild for="ac8-47">Project Evaluation</LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This is an introductory course on project planning and
                      evaluation. It aims to provide basic knowledge required
                      for management of whole programs and project cycles
                      including identification, preparation, appraisal,
                      implementation and evaluation of projects. Special
                      attention is given to various ex-ante and ex-post
                      evaluation methods. Computer exercises of calculation of
                      project cash flow are included. Participatory methods of
                      formation and the preparation of projects as well as
                      Public Financial Management, which has developed recently,
                      are also included in the lectures.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac8-48"></InputAcChild>
                  <LabelAcChild for="ac8-48">
                    Quantitative Analysis for Developing Countries
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This is an advanced statistics course for development
                      economics to be continued from the course of Development
                      Statistics. Lectures cover regression analysis of time
                      series data, panel data analysis, simultaneous equations
                      model, CGE (Computable General Equilibrium) model, and so
                      on. Computer assisted exercises are given based on the
                      developing country data.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac8-49"></InputAcChild>
                  <LabelAcChild for="ac8-49">
                    Regional Development Planning
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This interdisciplinary course focuses on the sub-national
                      region as a socioeconomic development unit, and considers
                      various issues related to regional development in the
                      context of developing countries. The course first
                      introduces basic theories and concepts concerning regional
                      development planning, and then discusses contemporary
                      issues and policies pertinent to promoting regional social
                      and economic development from a political economy
                      perspective. Topics covered in this course include
                      urbanization, rural-urban linkages, community development,
                      regional disparities, urban labor markets, regional
                      industrial clusters development, and regional innovation
                      systems.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac8-50"></InputAcChild>
                  <LabelAcChild for="ac8-50">Rural Development</LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This course introduces the scope and nature of development
                      in developing countries from two viewpoints: macro-level
                      like nation or region and micro-level like farmers or
                      community. The lectures aim to help students understand
                      "How disciplines similar to Economics grasp development"
                      and learning how to improve rural livelihoods as well as
                      agricultural production, especially through reviewing
                      issues in rural development. Furthermore, factors for
                      sustainable development are learned from agricultural and
                      rural development projects experiences.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac8-51"></InputAcChild>
                  <LabelAcChild for="ac8-51">
                    Seminar on Economic Development Policy and Management Ia,
                    Ib, IIa, IIb
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      The main theme of this seminar is basically Economic and
                      Tourism Development, more specifically, Sustainable
                      Tourism Development in Developing Countries from the
                      community to the international level. Seminar I for M1 and
                      II for M2 will be a joint class. Both M1 and M2 students
                      have to attend two classes. All students are expected to
                      participate in discussions and make presentation according
                      to their research progress by rotation. Students
                      registered these seminars should take the lecture on
                      Economic Development Policy and Management I.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac8-52"></InputAcChild>
                  <LabelAcChild for="ac8-52">
                    Seminar on Economic Development Policy and Management Ia,
                    Ib, IIa, IIb
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      Frontiers of development studies will be explored. Otsubo
                      Seminar generally deals with the existing and emerging
                      development management/governance issues under
                      globalization and the market-oriented development process.
                      Our recent research agenda includes International Trade
                      and Development (incl. strategic trade liberalization and
                      FTA/CEP strategies), External Finance of Development
                      (incl. capital flow management and FDI induction
                      strategies), Macroeconomic Management under Globalization
                      (incl. exchange rate regimes and monetary policy rules,
                      and debt sustainability and fiscal management),
                      Investment/Industrial Promotion, Structural Reforms and
                      Institution Building, ICT and Development, Roles of
                      Government in Market-Oriented Development Strategies,
                      Public Sector Management, Global Governance (incl. WTO,
                      IMF, WB), Globalization and Income/Spatial Inequality, and
                      so forth. Each participant is expected to conduct research
                      in his/her chosen field, make periodic presentations, and
                      prepare academic papers and a degree thesis.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac8-53"></InputAcChild>
                  <LabelAcChild for="ac8-53">
                    Seminar on Economic Development Policy and Management Ia,
                    Ib, IIa, IIb
                  </LabelAcChild>
                  <DivAcChildContent>
                    <dl>
                      <dt>(1) Seminar 1:Monday Period 4</dt>
                      <dd>
                        In this seminar the first year students in the Master's
                        program will read a text book of statistics and do some
                        computer based practice on statistical analysis.
                        Students are also occasionally asked to make
                        presentations about their research topics.
                      </dd>
                      <dt>(2) Seminar 2: Monday Period 3</dt>
                      <dd>
                        In this seminar, the second year students in the
                        Master's program and the students in the Doctoral
                        program are asked to make presentations on their
                        research progress leading to some hot discussions.
                        Through the seminar, M2 students are expected to write
                        good Master theses.
                      </dd>
                    </dl>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac8-54"></InputAcChild>
                  <LabelAcChild for="ac8-54">
                    Seminar on Economic Development Policy and Management Ia,
                    Ib, IIa, IIb
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This seminar is on development economics and public
                      policies. We will read textbooks on development economics,
                      micro-surveys, and discuss policies for welfare
                      improvement, trade, and poverty reduction. Students will
                      be expected to make presentations on their research plans,
                      progress, and papers of their research interests later in
                      the course.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac8-55"></InputAcChild>
                  <LabelAcChild for="ac8-55">
                    Seminar on Education and Human Resource Development Ia, Ib,
                    IIa, IIb
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This research seminar is primarily intended to help
                      students develop analytical skills, conduct research, and
                      write a thesis. It also introduces students to qualitative
                      research methods and strategies. In the first semester,
                      students will critically discuss the key literature
                      relevant to their research, formulate research questions,
                      and carry out literature reviews. In the second semester,
                      M2 and doctoral students will present their research in
                      progress, while M1 students select a topic, consider
                      research methodologies, and write a research paper.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac8-56"></InputAcChild>
                  <LabelAcChild for="ac8-56">
                    Seminar on Education and Human Resource Development Ia, Ib,
                    IIa, IIb
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      The major objective of this research seminar is to help
                      students develop skills of critical thinking and analysis.
                      M1 students are expected to learn, by participating in a
                      joint research project, the critical reading of
                      literature, designing a research framework, conducting
                      interviews, analysis, and writing up. M2 and other
                      students will design their own thesis research and present
                      its progress in the seminar to get suggestions for
                      improvement.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac8-57"></InputAcChild>
                  <LabelAcChild for="ac8-57">
                    Seminar on International Cooperation Studies Ia, Ib, IIa,
                    IIb
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This seminar focuses on presentations and discussions,
                      concerning master thesis while examining the basic
                      research of social issues. Assignments, such as the
                      selection of a thesis topic, literature review, data
                      collection, analysis, and writing are decided through
                      consultation with students. Any empirical research is
                      acceptable.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac8-58"></InputAcChild>
                  <LabelAcChild for="ac8-58">
                    Seminar on International Cooperation Studies Ia, Ib, IIa,
                    IIb
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This seminar series will be used as small group tutorials
                      to provide M1 students with opportunities to discuss
                      issues covered by lecture series, and to exchange views on
                      what they have learned during the week. Additionally -
                      depending on the participants' composition and disposition
                      to talk, students will be given 'cases' to discuss or
                      topics to debate on. The purpose of the tutorials is to
                      get students to talk. M2 students will be trained in
                      research methods and thesis writing skills.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac8-59"></InputAcChild>
                  <LabelAcChild for="ac8-59">
                    Seminar on International Cooperation Studies Ia, Ib, IIa,
                    IIb
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This seminar will serve as a forum of students who are
                      interested in the role of laws in global and domestic
                      governance, particularly in the economic area. Depending
                      upon interests of participants, it will cover various
                      topics including current issues in international economic
                      law as well as development and implementation of
                      competition laws in developed and developing economies.
                      For example, it will deal with issues such as "trade and
                      development" in the World Trade Organization (WTO) law,
                      accession negotiations to the WTO, development of Doha
                      Round negotiations, and cases of competition laws in
                      Japan, the United States, the European Union and other
                      countries. Participants are required to make presentations
                      on assigned topics and encouraged to contribute to
                      discussion thereon, based on their experience and
                      expertise. Participants are advised to also take my
                      courses: International Economic Law (Spring) and
                      International Competition Law (Fall).
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac8-60"></InputAcChild>
                  <LabelAcChild for="ac8-60">
                    Seminar on International Cooperation Studies Ia, Ib, IIa,
                    IIb
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This seminar aims to explore perspectives that bridge
                      qualitative research of area studies and political
                      theories to analyze politics of developing countries.
                      Participants are required to present on their studies and
                      reviews of related materials.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac8-61"></InputAcChild>
                  <LabelAcChild for="ac8-61">
                    Seminar on International Cooperation Studies Ia, Ib, IIa,
                    IIb
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This seminar helps students to develop their research
                      themes for MA and PhD dissertations. Students are expected
                      to prepare presentation on their own research topic.
                      Participants of this seminar are also expected to actively
                      comment on the presented topic(s).
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac8-62"></InputAcChild>
                  <LabelAcChild for="ac8-62">
                    Seminar on International Cooperation Studies Ia, Ib, IIa,
                    IIb
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      In this course, students will learn how to write a thesis
                      on social and cultural changes resulting from economic
                      development, globalization, and modernization. Coursework
                      includes learning how to formulate research questions,
                      developing fieldwork plans, examining case studies, giving
                      presentations, and writing reports.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac8-63"></InputAcChild>
                  <LabelAcChild for="ac8-63">
                    Seminar on International Cooperation Studies Ia, Ib, IIa,
                    IIb
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This seminar is to discuss the crucial points of
                      methodology in causal inference, especially the difference
                      between quantitative and qualitative analysis. Methodology
                      is one of the area where many arguments have taken place
                      during the last two decades. While many common
                      understandings have been submitted by retrospective
                      reflection and introduction of quantitative techniques
                      still many others have been left as topics of
                      contestation.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac8-64"></InputAcChild>
                  <LabelAcChild for="ac8-64">
                    Seminar on International Cooperation Studies Ia, Ib, IIa,
                    IIb
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      In this seminar, we will discuss, mainly, the legal
                      systems in non-European countries, and the relationship
                      between socio-economic development and the legal system in
                      developing countries. First year students in master's
                      degree course are required to read and make presentations
                      on one monograph about law and economic development.
                      Second year students and doctoral degree course students
                      are required to make presentations about their own
                      research theme.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac8-65"></InputAcChild>
                  <LabelAcChild for="ac8-65">
                    Seminar on International Cooperation Studies Ia, Ib, IIa,
                    IIb
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>Seminar I</p>
                    <p>
                      This is a seminar on international law, which is often
                      called "law of war and peace." International law provides
                      the international society with order, stability and
                      standards on the basis of which international disputes
                      shall be settled. Rules of international law regulate the
                      daily conducts of states, international organizations,
                      NGOs and individuals. One of the examples is the Charter
                      of the United Nations. In this seminar, some aspects of
                      international law will be examined.
                    </p>
                    <p>Seminar II</p>
                    <p>
                      This seminar has a purpose to give students basic
                      knowledge necessary for writing a dissertation as a
                      partial requirement of M.A. Participants are expected to
                      make presentation on their own research and to be actively
                      involved in discussion.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac8-66"></InputAcChild>
                  <LabelAcChild for="ac8-66">
                    Seminar on Rural and Regional Development Ia, Ib, IIa, IIb
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      Seminar I aims at reviewing articles/reports related to
                      regional/area studies as well as rural studies and
                      acquiring research abilities through intensive discussion
                      of their methodologies and empirical knowledge. In Seminar
                      II, students make regular presentations on their research
                      theme/interests related to rural development or regional
                      development. In practice, students can complete basic
                      research works like survey (preparation and
                      implementation), analyses and writing etc.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac8-67"></InputAcChild>
                  <LabelAcChild for="ac8-67">
                    Seminar on Rural and Regional Development Ia, Ib, IIa, IIb
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This research seminar is primarily intended to help
                      students develop analytical skills, conduct research, and
                      write a thesis. It also introduces students to inductive
                      qualitative research methods and strategies. In the first
                      semester, students will critically discuss the key
                      literature relevant to their research, formulate research
                      questions, and carry out literature reviews. In the second
                      semester, M2 and doctoral students will present their
                      research in progress, while M1 students select a topic,
                      consider research methodologies, and write a research
                      paper.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac8-68"></InputAcChild>
                  <LabelAcChild for="ac8-68">
                    Seminar on Rural and Regional Development Ia, Ib, IIa, IIb
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      Each month, the course focuses upon a different aspect of
                      fieldwork. In April, students will learn the basics of
                      fieldwork research and research design, decide on their
                      fieldwork topic, and begin their pre-fieldwork. In May,
                      students will learn how to plan interviews, conduct them
                      in a professional way, and analyze interview data. They
                      will also learn how to present interview data effectively.
                      In June, students will learn how to create a field survey
                      and how to do basic descriptive and inferential analysis.
                      They will also learn how to present survey data
                      effectively. In July, students will first learn how to
                      make strong and credible claims based upon the evidence
                      that they have gathered. Then, each group will present
                      their findings. By the end of the semester, students
                      should have developed a strong understanding of the
                      principles and practice of fieldwork.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac8-69"></InputAcChild>
                  <LabelAcChild for="ac8-69">
                    Seminar on Rural and Regional Development Ia, Ib, IIa, IIb
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This research seminar is primarily intended to help
                      students develop analytical skills, conduct research, and
                      write a thesis. It also introduces students with inductive
                      qualitative research methods and strategies. In the first
                      semester, students will critically discuss the key
                      literature relevant to their research, formulate research
                      questions, and carry out literature reviews. In the second
                      semester, M2 and doctoral students present their research
                      in progress, while M1 students select a topic, consider
                      research methodologies, and write a research paper.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac8-70"></InputAcChild>
                  <LabelAcChild for="ac8-70">
                    Sustainable Tourism and Development
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      The main theme of this seminar is "Tourism and
                      Development" and "Economics of Tourism". More
                      specifically, we look at "Sustainable Tourism Development
                      in Developing Countries", from the community to the
                      international level. As you know, tourism might be helpful
                      or harmful for destinations and the local people. The
                      objective of this lecture is to understand both positive
                      and negative effects of tourism in a sustainable manner.
                      This lecture includes various aspects not only economic
                      but also social and other aspects of tourism and its
                      development. An introductory textbook will be used. Also
                      various cases studies especially tourism development of
                      small island developing states will be discussed.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac8-71"></InputAcChild>
                  <LabelAcChild for="ac8-71">
                    The Law of the United Nations
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This course has an aim to understand the security issues
                      in the framework of the Charter of the United Nations.
                      First the collective security system is dealt with in
                      comparison with the old balance of power structure.
                      Secondly the changing system of UN collective security
                      after 1990 will be addressed. Finally, a moot court
                      competition will be practiced by students, who will play a
                      role as agent for the plaintiff, defendant, or judge. If
                      you have no knowledge on international law you are
                      strongly advised to take the course International
                      Cooperation Law in the spring semester first.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac8-72"></InputAcChild>
                  <LabelAcChild for="ac8-72">
                    Theory on Non-Governmental Organizations
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This course examines NGOs and civil society in development
                      as well as other issues in the world, including how they
                      have grown and developed and their present conditions and
                      challenges. This course will also introduce the practical
                      management of NGOs and the value and skills necessary to
                      understand the function of NGOs. Various practical cases
                      will be introduced, and students will be encouraged to
                      discuss and debate each issue.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac8-73"></InputAcChild>
                  <LabelAcChild for="ac8-73">
                    Urban and Rural Relations
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This course aims at understanding urbanity, rurality and
                      their relations from a diverse perspective. The lectures
                      are delivered by three experts on India (Prof Ota),
                      Indonesia (Prof Arata) and Japan (Prof Yasumoto) and
                      examine the characteristics of urban and rural areas, and
                      interactions and influences between urban and rural areas.{" "}
                    </p>
                  </DivAcChildContent>
                </DivAcParentContent>
                <InputAcParent type="checkbox" id="ac9"></InputAcParent>
                <LabelAcParent for="ac9">Mathematics</LabelAcParent>
                <DivAcParentContent>
                  <InputAcChild type="checkbox" id="ac9-0"></InputAcChild>
                  <LabelAcChild for="ac9-0">
                    Perspectives in Mathematical Science I
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This course is designed to be one of the English courses
                      which the Graduate School of Mathematics is providing for
                      the graduate and undergraduate students not only from
                      foreign countries but also domestic students who wish to
                      study abroad or to communicate with foreign scientists in
                      English. All course activities including lectures,
                      homework assignments, questions and consultations are in
                      English. The purpose of this course is to introduce and
                      explain the various methods in mathematical science.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac9-1"></InputAcChild>
                  <LabelAcChild for="ac9-1">
                    Perspectives in Mathematical Science II
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This course is designed to be one of the English courses
                      which the Graduate School of Mathematics is providing for
                      the graduate and undergraduate students not only from
                      foreign countries but also domestic students who wish to
                      study abroad or to communicate with foreign scientists in
                      English. All course activities including lectures,
                      homework assignments, questions and consultations are in
                      English. The purpose of this course is to introduce and
                      explain the various methods in mathematical science.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac9-2"></InputAcChild>
                  <LabelAcChild for="ac9-2">Topics in Analysis II</LabelAcChild>
                  <DivAcChildContent>
                    <p>Subtitle: Hilbert space methods for quantum mechanics</p>
                    <p>
                      This course will provide an overview of some classical
                      tools of functional analysis which have been partially
                      developed for quantum mechanics. In particular, an
                      introduction to spectral and scattering theory will be
                      presented. These theories have deep connections with other
                      branches of mathematics, like PDE, operator algebras or
                      dynamical systems. Some up-to-date tools of spectral
                      theory will also be introduced, as for example commutator
                      methods for spectral theory. In order to provide a large
                      panorama on the subject together with applications, some
                      details might be omitted, but references for all proofs
                      will be provided.
                    </p>
                  </DivAcChildContent>
                </DivAcParentContent>
                <InputAcParent type="checkbox" id="ac10"></InputAcParent>
                <LabelAcParent for="ac10">Languages and Cultures</LabelAcParent>
                <DivAcParentContent>
                  <InputAcChild type="checkbox" id="ac10-0"></InputAcChild>
                  <LabelAcChild for="ac10-0">
                    A Comparative Approach to Media Discourse I
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      Setting aside for the time being the question of precisely
                      what the word ‘media’ means in today's rapidly-evolving
                      communication context we may say that, in very broad
                      terms, ‘media studies’ entails investigation of three core
                      areas: production (including regulation, ownership and
                      working practices), consumption and texts. Although this
                      course focuses mainly on texts it also involves a
                      consideration of the other two areas since it views texts
                      not as free-standing linguistic or semiotic phenomena but
                      as instances of discourse, that is, as the discoursal
                      aspect of social practices including those of production
                      and consumption. Moreover, although most of the media
                      texts to be studied will be in English (with some Japanese
                      too depending on the ability of the participants), we
                      shall aim to transcend national frontiers and consider how
                      media discourses are propagated and circulated on a global
                      scale. In doing so, participants will be encouraged to
                      share their knowledge and describe their personal
                      experience of media texts in their own countries, Japan
                      and elsewhere.
                    </p>
                    <p>
                      We shall begin in the first few weeks of the course by
                      mapping out the territory of the academic border zone
                      where media studies and discourse studies meet. This will
                      entail a discussion of the meaning of a number of key
                      terms including mediation, discourse, ideology, hegemony,
                      genre and intertextuality. The remainder of the course
                      will be devoted to an exploration of the two theoretical
                      and methodological frameworks that underpin the course as
                      a whole: systemic functional grammar (which turns out to
                      be far less boring than it sounds!) and critical discourse
                      analysis. There is a great deal of complex information to
                      be absorbed here and participants, particularly those who
                      do not have a background in linguistics, will have to put
                      in considerable time and energy in order to keep on track.
                      Those who do so successfully, however, will be rewarded by
                      the acquisition of a powerful set of theoretical tools
                      with which to approach the comparative analysis of media
                      discourse in a global context.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac10-1"></InputAcChild>
                  <LabelAcChild for="ac10-1">
                    A Comparative Approach to Media Discourse II
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      The first few weeks of the course will be spent reviewing
                      the theoretical concepts, methodological techniques and
                      key issues introduced in the previous course. The
                      remainder of the course will be devoted to two activities
                      to be conducted in parallel. The first will be the
                      selection, development and implementation of a student-led
                      group media discourse analysis project. The findings of
                      this project will be reported on as a series of Powerpoint
                      presentations. The second will be the study of selected
                      advanced readings in this field and discussion of some of
                      the key issues arising therefrom. This will culminate in
                      the production of individually authored written papers. As
                      with the previous course, although most of the media texts
                      and discourses to be studied will be in English we shall
                      aim to transcend national frontiers and consider how media
                      discourses are propagated and circulated on a global
                      scale. In doing so, participants will be encouraged to
                      share their knowledge and describe their personal
                      experience of media texts in their own countries, Japan
                      and elsewhere.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac10-2"></InputAcChild>
                  <LabelAcChild for="ac10-2">
                    Cognitive Linguistics
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      Ideophones (called giongoor gitaigoin Japanese) such as
                      the words bowwow, swoosh and wobble and sound symbolism
                      (for example the non-word bouba sounds curvy, whereas kiki
                      sounds spiky) constitute a complex research topic in
                      cognitive linguistics and psychology. In this course, we
                      will look at various empirical approaches, both formal and
                      functional and both qualitative and quantitative, to this
                      interesting but seemingly elusive topic. The issues to be
                      discussed include the following:
                    </p>
                    <p>
                      The embodied basis of sound symbolism (phonetics,
                      phonosemantics);
                    </p>
                    <p>
                      The distribution of quotative markers in Japanese
                      ideophones (phonology);
                    </p>
                    <p>
                      The meanings of ideophonic templates (morphology,
                      semantics);
                    </p>
                    <p>The typology of ideophonic syntax (morphosyntax);</p>
                    <p>
                      Ideophones and paralinguistic features (semiotics,
                      pragmatics);
                    </p>
                    <p>
                      Ideophones and language acquisition
                      (developmental/cognitive psychology).
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac10-3"></InputAcChild>
                  <LabelAcChild for="ac10-3">
                    Cultural and Intellectual History of Japan II
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This course is a survey of modern Japanese cultural and
                      intellectual history, spanning the Meiji (1868-1912) and
                      Taishō (1912-1926) periods. With a focus on novels, short
                      stories, poetry, essays, and cinema, we will examine how
                      these cultural forms served as vehicles for interrogating
                      ideologies of modernity and depicting the effects of
                      industrialization, urbanization, and Westernization on
                      Japan and its people.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac10-4"></InputAcChild>
                  <LabelAcChild for="ac10-4">
                    Cultural and Intellectual History of Japan III
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This seminar is an introduction to classical Japanese
                      literature, spanning the genres of poetry, narrative
                      prose, and drama. Working within this context, students
                      will be introduced to basic concepts and methods in
                      literary studies, and challenged to think critically about
                      the linguistic, aesthetic, and cultural conditions that
                      informed literary production and reception within the
                      early and medieval Japanese contexts.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac10-5"></InputAcChild>
                  <LabelAcChild for="ac10-5">
                    Culture and Technology in Modern Japan
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      In order to acquire a deep understanding of Japanese
                      culture and society, students will use a technology,
                      industrial field, particular company or product that
                      interests them as a basis for investigating Japanese
                      technology through comparison of that same case in their
                      country of origin or elsewhere. At least one presentation
                      on this comparative research is assigned to each student
                      during the course in addition to the final paper.
                    </p>
                    <p>
                      Topic details, expectations and the due date will be
                      explained in the first class session. Successful students
                      will also actively participate in class discussion. Topics
                      that will be discussed in the class:{" "}
                    </p>
                    <ol className="right-parenthesized-decimal">
                      <li> Introduction to a history of technology;</li>
                      <li>
                        {" "}
                        Establishment of the Meiji Administration and the
                        network of the telegraph;
                      </li>
                      <li>
                        {" "}
                        Electrification of factories - Management and discipline
                        of labor;
                      </li>
                      <li>
                        {" "}
                        The beginning of the domestic production of household
                        appliances;
                      </li>
                      <li>
                        {" "}
                        Sending one's voice - Telephone as a new sound media;
                      </li>
                      <li> Radio and propaganda in wartime;</li>
                      <li>
                        {" "}
                        Science and technology policies in the postwar period.
                      </li>
                    </ol>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac10-6"></InputAcChild>
                  <LabelAcChild for="ac10-6">
                    Japanese Psycholinguistics
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      Studies on native Japanese speakers are first introduced
                      to identify how native speakers process their first
                      language, (L1) Japanese. Based on L1 Japanese studies, the
                      Japanese processing mechanism of JSL learners, such as
                      native Chinese, Korean and English speakers, are examined
                      by reading previous publications related to JSL processing
                      and acquisition. New techniques such as
                      electroencephalography (EEG) and eye-tracking are utilized
                      in the experimental field of psycholinguistics and are
                      applied to JSL learners. Therefore, previous studies that
                      used these new techniques are also presented during the
                      course of 15 classes.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac10-7"></InputAcChild>
                  <LabelAcChild for="ac10-7">
                    Linguistic Typology and the Japanese Language
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This class situates the Japanese language within the
                      context of recent findings in Linguistic Typology, a
                      discipline that inquires into language universals and
                      cross-linguistic variation. Participants are expected to
                      gain
                    </p>
                    <ol className="parenthesized-lower-roman">
                      <li>
                        an enhanced understanding of how Japanese differs from
                        other languages of the world, and
                      </li>
                      <li>
                        an analytical perspective from which to view and work on
                        linguistic phenomenon in Japanese cross-linguistically.
                      </li>
                    </ol>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac10-8"></InputAcChild>
                  <LabelAcChild for="ac10-8">
                    Literary Modernism and the Avant-Garde
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      In this course, students will learn and discuss how
                      innovative poets and writers in the Modernist tradition
                      have utilized translation and expressions in foreign
                      languages in the composition of their works. The special
                      focus will be on Ezra Pound, especially his translation
                      and use of Japanese and Chinese literature, but we will
                      also pay attention to other poets and writers such as
                      Kenneth Rexroth, Rosmarie Waldrop, Theresa Hak Kyung Cha
                      and Yoko Tawada, and discuss how they use translation and
                      expressions in foreign languages and what kinds of
                      meanings -- literary, linguistic, sociological and
                      political -- can be found in each of the examples. A more
                      detailed class schedule will be provided on the class
                      website:{" "}
                      <a href="http://www.lang.nagoya-u.ac.jp/~nagahata/lectures15/modernism/modernism15.html">
                        http://www.lang.nagoya-u.ac.jp/~nagahata/lectures15/modernism/modernism15.html
                      </a>
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac10-9"></InputAcChild>
                  <LabelAcChild for="ac10-9">
                    North American Cultural Studies a
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      Taking Canada's official multiculturalism as a starting
                      point, we shall discuss issues connected to
                      historiography, national identity, multiculturalism, and
                      issues of representation in contemporary media and
                      cultural texts, including literature, film, and
                      television. Course themes include aboriginal-Euro-Canadian
                      relations, French-English relations, immigration in the
                      twentieth century, English-Canadian identity, and
                      multiculturalism as ideology, policy, and practice.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac10-10"></InputAcChild>
                  <LabelAcChild for="ac10-10">
                    North American Cultural Studies b
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      The course will examine key literary and film texts in
                      order to understand the image and significance of the
                      automobile and the road in American culture.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac10-11"></InputAcChild>
                  <LabelAcChild for="ac10-11">
                    Online Communication
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This course explores the social and cultural implications
                      of developments in information and communications
                      technology (ICT) and related digital media such as smart
                      phones, particularly in terms of how these have
                      dramatically altered the processes of news production,
                      distribution, and consumption and the formation of public
                      opinion. From the theoretical perspective of online
                      communication, we will investigate the influence that
                      interactive web-based communication tools such as social
                      networking services (SNS) are having on the political
                      process and consider the potential role of digital media
                      in promoting social trust and greater participation in
                      elections. In addition, we will discuss the some of the
                      negative social effects of social media such as the
                      digital divide, the knowledge gap and the gender gap.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac10-12"></InputAcChild>
                  <LabelAcChild for="ac10-12">
                    Political Communication
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This course aims to introduce graduate students to the
                      study of political communication by providing students
                      with general understanding of the key terms and ideas in
                      the field. While it gives an overview of the Japanese and
                      global systems of media communications, it also examines
                      the changing relationship between the media and
                      contemporary political institutions and processes. Major
                      topics include the media's role in setting political
                      agendas; the growing importance of public opinion; current
                      international issues on Japan and Northeast Asia and the
                      emerging professional political communications.{" "}
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac10-13"></InputAcChild>
                  <LabelAcChild for="ac10-13">
                    Pragmatics of Verbal Expression a
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      In this course, participants will read and discuss essays
                      about translation. Every week the participants will be
                      assigned a scholarly article about translation, and one of
                      the participants will be selected as the designated
                      commentator for the week. He or she will write a position
                      paper about the assigned article and post it to the class
                      mailing list one day before the meeting of the class. The
                      other participants will read the assigned text and the
                      position paper before coming to the classroom. In the
                      class the designated commentator will introduce the author
                      of the article, give its summary and start a discussion by
                      presenting his/her position orally.
                    </p>
                    <p>
                      The articles to be discussed will be announced in the
                      first meeting of the class. They will be mainly those
                      collected in Lawrence Venuti, ed., The Translation Studies
                      Reader, 2nd edition, and Mona Baker, ed, Critical Reader
                      in Translation Studies.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac10-14"></InputAcChild>
                  <LabelAcChild for="ac10-14">
                    Second Language Development
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This course will focus on examining the mechanism of first
                      and second language spoken word recognition. The
                      instructor will provide and introduction to the key issues
                      of the topic for each class using PowerPoint. Students
                      will be asked questions regarding the issue, and will be
                      given some time to discuss with other students to answer
                      the questions. At the beginning of every lesson after the
                      first one, a quiz on the key concepts from the previous
                      week will be given. The following topics will be covered
                      in this course:
                    </p>
                    <ol className="right-parenthesized-decimal">
                      <li>
                        {" "}
                        Prosody in the lexical activation and competition
                        processes
                      </li>
                      <li> Where does language-specificity begin?</li>
                      <li> Second-language listening: sounds to words</li>
                      <li>
                        {" "}
                        Second-language listening: words in their speech
                        contexts
                      </li>
                      <li> The plasticity of adult speech perception</li>
                      <li> The architecture of native listening system</li>
                    </ol>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac10-15"></InputAcChild>
                  <LabelAcChild for="ac10-15">
                    Sociocultural Perspectives on Language Leaning I
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      We will focus on sociocultural theory and practice from a
                      pedagogical perspective. Underlying concepts such as the
                      ZPD, Activity Theory, and dynamic assessment will be
                      covered, as well as empirical research which examines the
                      application of such notions in relation to L2 reading,
                      writing, listening and speaking.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac10-16"></InputAcChild>
                  <LabelAcChild for="ac10-16">
                    Sociocultural Perspectives on Language Leaning II
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      We will focus on sociocultural theory and practice from a
                      pedagogical perspective. Underlying concepts such as the
                      ZPD, Activity Theory, and dynamic assessment will be
                      covered, as well as empirical research which examines the
                      application of such notions in relation to L2 reading,
                      writing, listening and speaking.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac10-17"></InputAcChild>
                  <LabelAcChild for="ac10-17">Thesis Writing I</LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This is a practical course for students in the initial
                      stages of their Master's level research. In this course,
                      students will consider issues related to their research
                      including the formulation of research questions, research
                      design, data collection and analysis. Students will be
                      provided with ample opportunities to improve their
                      academic writing skills by writing on these aspects of
                      their research in a thesis chapter format. Students will
                      be encouraged to present their research to their peers,
                      participate in group discussions and give feedback.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac10-18"></InputAcChild>
                  <LabelAcChild for="ac10-18">Thesis Writing II</LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This is a practical course for students in the initial
                      stages of their Master's level research. In this course,
                      students will consider issues related to their research
                      including the formulation of research questions, research
                      design, data collection and analysis. Students will be
                      provided with ample opportunities to improve their
                      academic writing skills by writing on these aspects of
                      their research in a thesis chapter format. Students will
                      be encouraged to present their research to their peers,
                      participate in group discussions and give feedback.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac10-19"></InputAcChild>
                  <LabelAcChild for="ac10-19">
                    Word and Image in Japanese Narrative II
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This course is a survey of modern forms of visual
                      storytelling that flourished between the Meiji (1868-1912)
                      and mid-Shōwa (1926-1989) periods. Through a series of
                      units on individual works and genres, including woodblock
                      prints, photography, ponchi-e, manga, kami-shibai ("paper
                      theater"), shashin shōsetsu (photo novels), early film and
                      animation, students will gain practical knowledge about
                      the production and reception of visual narratives, with a
                      view towards gaining historical and cultural context for
                      appreciating the interplay between word and image.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac10-20"></InputAcChild>
                  <LabelAcChild for="ac10-20">
                    Word and Image in Japanese Narrative III
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This seminar is an introduction to Japanese visual
                      culture, from the Edo period (1603-1868) to the present.
                      In this course, we will examine how formations of cultural
                      production and visual practice have shaped national and
                      ethnic identities, consumer desires, cultural memory, and
                      the aesthetics of everyday life. Students will be
                      challenged to engage with different methodologies and
                      analytic approaches as they develop original research on
                      topics of their choosing. Students are free to work in
                      anime, film, digital media, photography, fine art, print
                      media, manga, manuscripts, or material objects.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac10-21"></InputAcChild>
                  <LabelAcChild for="ac10-21">World Animation</LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      During the first few weeks students will be introduced to
                      a wide range of animated works created during the past
                      decade. Then we will proceed to discussions of works by
                      major figures in the history of animation. Although
                      countries like Korea, Thailand and China have recently
                      started to produce interesting works we will limit our
                      scope to three major areas in the world: Northern America,
                      Europe and Japan. Major figures and studios chosen for
                      discussion will include Walt Disney, Fleischer Studios,
                      Ray Harryhausen, Jiri Trnka, Priit Parn, Yuri Norstein,
                      Hayao Miyazaki, Noburo Ofuji, Jan Svankmajer, Oskar
                      Fischinger, Osamu Tezuka, Winsor McCay, Norman McLaren and
                      others. There will be in-class screenings but students are
                      expected to view assigned films in advance on the internet
                      if they are available. Students are also assigned to read
                      articles related to the authors and films in discussion.
                      Our theoretical approach will be that of 'thick
                      description' as introduced by anthropologist Clifford
                      Geertz. This can be thought of as a common sense approach.
                      Trivia for the sake of trivia do not interest us. Only
                      such information that aids understanding of works of art
                      does. Students are expected to participate in discussions
                      with the instructor and with eachother. Term papers can be
                      on any topic as long as it is related to animation.
                      Students are also encouraged to give one presentation per
                      semester on a topic of his or her choosing.
                    </p>
                  </DivAcChildContent>
                </DivAcParentContent>
                <InputAcParent type="checkbox" id="ac11"></InputAcParent>
                <LabelAcParent for="ac11">Environmental Studies</LabelAcParent>
                <DivAcParentContent>
                  <InputAcChild type="checkbox" id="ac11-0"></InputAcChild>
                  <LabelAcChild for="ac11-0">
                    English Communication in Environmental Issues
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      English communication ability is a fundamental requirement
                      for engineers and scientists working in the field of
                      environmental problems. This course aims to develop
                      student's ability to learn and think about environmental
                      problems in English by presenting and discussing these
                      ideas in English. Students will be assigned specific
                      subjects concerning environmental problems and will be
                      required to study the assigned subjects deeply, and then
                      present and discuss the studied subjects in class in
                      English.{" "}
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac11-1"></InputAcChild>
                  <LabelAcChild for="ac11-1">
                    Environmental Industry Systems
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This course tries to realize a unique style of learning.
                      It consists of
                    </p>
                    <ol className="right-parenthesized-decimal">
                      <li>
                        {" "}
                        lectures by environmental industries located in the
                        Chubu region around Nagoya
                      </li>
                      <li> presentations and/or discussions among students</li>
                      <li>
                        {" "}
                        discussions between students and industry members
                      </li>
                    </ol>
                    <p>
                      The industries are of prominent companies mainly in the
                      field of manufacturing. Students are strongly recommended
                      to also take "Theory of Environmental Resources
                      Management" course.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac11-2"></InputAcChild>
                  <LabelAcChild for="ac11-2">
                    Environmental Systems Analysis and Planning
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>Description</p>
                    <ol>
                      <li>
                        Environmental Systems: Natural Resources and Human
                        Activities
                      </li>
                      <li>
                        Circulation and Transformation of Water, Air, Energy and
                        Materials
                      </li>
                      <li>
                        Environmental Space and Carrying Capacity of the Earth
                      </li>
                      <li>Global Climate Issues</li>
                      <li>Math: Modeling of Climate Change</li>
                      <li>Environmental Resouce Economics</li>
                      <li>Math: Lotka-Volterra's Equations</li>
                      <li>Sustainable Development</li>
                      <li>
                        Environmental Indicators and Environmental Resource
                        Accounting
                      </li>
                      <li>Life Cycle Assessment</li>
                      <li>Urban Climate System</li>
                    </ol>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac11-3"></InputAcChild>
                  <LabelAcChild for="ac11-3">
                    Global Research Internship
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      As part of the Global Environmental Leaders Program, this
                      course aims at providing students research and survey
                      opportunities at universities, research institutions,
                      companies, governments in Japan and overseas to acquire
                      the ability to conduct practical and applied research. The
                      internship should be conducted based on close
                      communication with Academic Advisors. Students are
                      expected to acquire practical research skills through
                      Research Training (ORT). Details of the Internship such as
                      period and terms of implementation should be decided
                      through consultation with Academic Advisor and experts at
                      recipient organizations. Students are able to learn
                      through research and survey practice at universities,
                      research institutions, companies, governments in Japan and
                      overseas.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac11-4"></InputAcChild>
                  <LabelAcChild for="ac11-4">
                    Low Carbon Cities Studies
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>The aim of this course is:</p>
                    <ol>
                      <li>
                        To learn the policies, plans, technological and
                        institutional measures to realize low carbon cities with
                        a vision to integrate climatic change mitigation in
                        urban development.
                      </li>
                      <li>
                        To have a concrete idea of planning a low carbon city.
                        An actual policy plan for establishing a low carbon city
                        will be reviewed in this course.
                      </li>
                    </ol>
                    <p>
                      Students are supposed to have taken (or be taking)
                      "Environmental Systems Analysis and Planning" course.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac11-5"></InputAcChild>
                  <LabelAcChild for="ac11-5">
                    Practice in Environmental Systems Analysis and Planning
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      Choose two or three methods from the following and apply
                      them to the analysis of topics which the student is
                      interested in.
                    </p>
                    <ol>
                      <li>GIS (Geographic Information Systems, ArcGIS)</li>
                      <li>Statistical Analysis such as SPSS or R</li>
                      <li>Systems Dynamics</li>
                    </ol>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac11-6"></InputAcChild>
                  <LabelAcChild for="ac11-6">
                    Seminar on Space and Environmental Planning 1A
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      Group reading of an English book on Environmental Resource
                      Economics.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac11-7"></InputAcChild>
                  <LabelAcChild for="ac11-7">
                    Seminar on Space and Environmental Planning 1B
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      Group reading of an English book on global environmental
                      issues.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac11-8"></InputAcChild>
                  <LabelAcChild for="ac11-8">
                    Seminar on Space and Environmental Planning 1C
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      Group reading of an English book on regional economics and
                      space economics.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac11-9"></InputAcChild>
                  <LabelAcChild for="ac11-9">
                    Seminar on Space and Environmental Planning 1D
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      Group reading of an English book on regional economics and
                      space economics.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac11-10"></InputAcChild>
                  <LabelAcChild for="ac11-10">
                    Seminar on Space and Environmental Planning 1E
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      Students will present materials related to their research
                      themes and make group discussions.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac11-11"></InputAcChild>
                  <LabelAcChild for="ac11-11">
                    Seminar on Space and Environmental Planning 1F
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      Students will present materials related to their research
                      themes and make group discussions.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac11-12"></InputAcChild>
                  <LabelAcChild for="ac11-12">
                    Seminar on Space and Environmental Planning 1G
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      Students will present materials related to their research
                      themes and make group discussions.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac11-13"></InputAcChild>
                  <LabelAcChild for="ac11-13">
                    Seminar on Space and Environmental Planning 1H
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      Students will present materials related to their research
                      themes and make group discussions.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac11-14"></InputAcChild>
                  <LabelAcChild for="ac11-14">
                    Seminar on Sustainable Urban Development A
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      Constructing a methodology for infrastructure improvement
                      associated with the development stage of cities and
                      regions, and social capitalization of urban area district
                      blocks is the objective of this seminar. Technologies,
                      institutions and policy measures for sustainable
                      development of cities are discussed within the scope of
                      the regional economy and public policy analysis. Students
                      review and collect the relevant advanced and recent
                      literatures. The results are presented and discussed
                      together with students and supervisors.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac11-15"></InputAcChild>
                  <LabelAcChild for="ac11-15">
                    Seminar on Sustainable Urban Development B
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      Constructing a methodology for infrastructure improvement
                      associated with the development stage of cities and
                      regions, and social capitalization of urban area district
                      blocks is the objective of this seminar. Technologies,
                      institutions and policy measures for sustainable
                      development of cities are discussed within the scope of
                      the regional economy and public policy analysis. Students
                      review and collect the relevant advanced and recent
                      literatures. The results are presented and discussed
                      together with students and supervisors.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac11-16"></InputAcChild>
                  <LabelAcChild for="ac11-16">
                    Seminar on Sustainable Urban Development C
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      Constructing a methodology for infrastructure improvement
                      associated with the development stage of cities and
                      regions, and social capitalization of urban area district
                      blocks is the objective of this seminar. Technologies,
                      institutions and policy measures for sustainable
                      development of cities are discussed within the scope of
                      the regional economy and public policy analysis. Students
                      review and collect the relevant advanced and recent
                      literatures. The results are presented and discussed
                      together with students and supervisors.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac11-17"></InputAcChild>
                  <LabelAcChild for="ac11-17">
                    Seminar on Sustainable Urban Development D
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      Constructing a methodology for infrastructure improvement
                      associated with the development stage of cities and
                      regions, and social capitalization of urban area district
                      blocks is the objective of this seminar. Technologies,
                      institutions and policy measures for sustainable
                      development of cities are discussed within the scope of
                      the regional economy and public policy analysis. Students
                      review and collect the relevant advanced and recent
                      literatures. The results are presented and discussed
                      together with students and supervisors.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac11-18"></InputAcChild>
                  <LabelAcChild for="ac11-18">
                    Seminar on Sustainable Urban Development E
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      Constructing a methodology for infrastructure improvement
                      associated with the development stage of cities and
                      regions, and social capitalization of urban area district
                      blocks is the objective of this seminar. Technologies,
                      institutions and policy measures for sustainable
                      development of cities are discussed within the scope of
                      the regional economy and public policy analysis. Students
                      review and collect the relevant advanced and recent
                      literatures. The results are presented and discussed
                      together with students and supervisors.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac11-19"></InputAcChild>
                  <LabelAcChild for="ac11-19">
                    Seminar on Sustainable Urban Development F
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      Constructing a methodology for infrastructure improvement
                      associated with the development stage of cities and
                      regions, and social capitalization of urban area district
                      blocks is the objective of this seminar. Technologies,
                      institutions and policy measures for sustainable
                      development of cities are discussed within the scope of
                      the regional economy and public policy analysis. Students
                      review and collect the relevant advanced and recent
                      literatures. The results are presented and discussed
                      together with students and supervisors.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac11-20"></InputAcChild>
                  <LabelAcChild for="ac11-20">
                    Seminar on Sustainable Urban Development G
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      Constructing a methodology for infrastructure improvement
                      associated with the development stage of cities and
                      regions, and social capitalization of urban area district
                      blocks is the objective of this seminar. Technologies,
                      institutions and policy measures for sustainable
                      development of cities are discussed within the scope of
                      the regional economy and public policy analysis. Students
                      review and collect the relevant advanced and recent
                      literatures. The results are presented and discussed
                      together with students and supervisors.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac11-21"></InputAcChild>
                  <LabelAcChild for="ac11-21">
                    Seminar on Sustainable Urban Development H
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      Constructing a methodology for infrastructure improvement
                      associated with the development stage of cities and
                      regions, and social capitalization of urban area district
                      blocks is the objective of this seminar. Technologies,
                      institutions and policy measures for sustainable
                      development of cities are discussed within the scope of
                      the regional economy and public policy analysis. Students
                      review and collect the relevant advanced and recent
                      literatures. The results are presented and discussed
                      together with students and supervisors.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac11-22"></InputAcChild>
                  <LabelAcChild for="ac11-22">
                    Special Lecture on Environmental Studies (English language)
                    1
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      The purpose of this course is to acquire thinking and
                      discussing skills in English, as well as the most
                      up-to-date knowledge and awareness of environmental
                      issues. Lectures are done by guest professors and
                      discussions are held on various topics in English. Some
                      other short courses (e.g. workshop) may be authorized by
                      the curriculum committee.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac11-23"></InputAcChild>
                  <LabelAcChild for="ac11-23">
                    Special Lecture on Environmental Studies (English language)
                    2
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      The purpose of this course is to acquire thinking and
                      discussing skills in English, as well as the most
                      up-to-date knowledge and awareness of environmental
                      issues. Lectures are done by guest professors and
                      discussions are held on various topics in English. Some
                      other short courses (e.g. workshop) may be authorized by
                      the curriculum committee.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac11-24"></InputAcChild>
                  <LabelAcChild for="ac11-24">
                    Sustainability and Environmental Studies
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      The objective of the course is to provide students with
                      several definitions, views, interpretations, and analyses
                      on the notion of sustainability. The lessons are to be
                      given by several lecturers which may include external
                      guest speakers. Due to the fact that sustainability covers
                      broad areas, it is inevitable that the course consists of
                      various topics. The course tries to clarify the topics
                      from three viewpoints, namely:
                    </p>
                    <ol>
                      <li>Society and/or social sciences.</li>
                      <li>Observation and data by natural sciences.</li>
                      <li>Urban and spatial perspective.</li>
                    </ol>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac11-25"></InputAcChild>
                  <LabelAcChild for="ac11-25">
                    Water and Waste Engineering
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      Water pollution and solid waste are some of the major
                      environmental problems facing our society today. In this
                      class we will learn about various technologies and
                      measures applied to the supply of drinking water, the
                      control of pollution of water bodies, and solid waste
                      management.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac11-26"></InputAcChild>
                  <LabelAcChild for="ac11-26">
                    Water and Waste Management Policies
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      Water pollution and solid waste are some of the major
                      environmental problems facing our society today. For
                      effective management of water and waste, it is essential
                      to have relevant rules, laws and policies, and the
                      appropriate institutions to monitor them. This course will
                      introduce legal, policy and institutional frameworks for
                      managing water and waste.
                    </p>
                  </DivAcChildContent>
                </DivAcParentContent>
                <InputAcParent type="checkbox" id="ac12"></InputAcParent>
                <LabelAcParent for="ac12">Information Science</LabelAcParent>
                <DivAcParentContent>
                  <InputAcChild type="checkbox" id="ac12-0"></InputAcChild>
                  <LabelAcChild for="ac12-0">
                    Advanced Lectures on Quantum Information
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      The course provides an introduction to quantum information
                      and quantum computation. It is suitable for any audience
                      and requires no specific background. The following topics
                      are covered:
                    </p>
                    <ol>
                      <li>Mathematical description of quantum systems</li>
                      <li>
                        Composite systems, purification, and quantum
                        entanglement
                      </li>
                      <li>
                        Evolution of open quantum systems - quantum channels
                      </li>
                      <li>Quantum measurement processes</li>
                      <li>
                        Simple quantum communication scenarios (noiseless
                        channels, super-dense coding, quantum teleportation)
                      </li>
                      <li>Quantum circuit formalism</li>
                      <li>Deutsch-Jozsa quantum algorithm</li>
                      <li>Bernstein-Vazirani quantum algorithm</li>
                      <li>Gover's quantum search algorithm</li>
                      <li>Shor's quantum factorization algorithm</li>
                    </ol>
                  </DivAcChildContent>
                </DivAcParentContent>
                <InputAcParent type="checkbox" id="ac13"></InputAcParent>
                <LabelAcParent for="ac13">
                  Pharmaceutical Sciences
                </LabelAcParent>
                <DivAcParentContent>
                  <InputAcChild type="checkbox" id="ac13-0"></InputAcChild>
                  <LabelAcChild for="ac13-0">Advanced Bioscience</LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This class is intended for students to learn about
                      molecular biology, biochemistry, bioengineering, and
                      information science, and also to obtain the scientific
                      capability of dealing with important problems in life
                      science. In addition, technical knowledge for better use
                      of biological systems is also learned. In lectures, we
                      provide you with recent progress of science and technology
                      especially concerning drug development. It is required
                      that students participate in discussions and express their
                      own opinions.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac13-1"></InputAcChild>
                  <LabelAcChild for="ac13-1">
                    Advanced Organic Chemistry
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This Advanced Organic Chemistry course covers diverse
                      topics in modern synthetic organic chemistry. In the very
                      first part of this course, total synthesis of natural
                      products will be discussed on the basis of structural
                      types including alkaroids, polyketides, quinones,
                      terpenoids, and steroids. The second part is devoted to
                      the chemistry of functional molecules and their
                      applications to organic synthesis. Amino acids and sugars
                      as chiral pools and the structure and synthesis of
                      heterocycles will be covered. The last part will deal with
                      organometallic chemistry and its application to
                      homogeneous catalysis. These include important principles
                      of organometallic chemistry, transition-metal catalyses,
                      and catalytic asymmetric transformations.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac13-2"></InputAcChild>
                  <LabelAcChild for="ac13-2">
                    Advanced Structural Biophysics
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      The three major methods for structural biology, X-ray
                      crystallography, Nuclear Magnetic Resonance, and
                      Cryo-electron Microscopy, are explained. The lecture
                      topics include:
                    </p>
                    <ol>
                      <li>
                        Experimental aspects for structure determination of
                        membrane proteins
                      </li>
                      <li>Structural biology of channels and adhennels</li>
                      <li>Structural biology of GPCRs and other receptors</li>
                      <li>Structural biology of multi-domain proteins</li>
                      <li>
                        Pharmaceutical NMR applications and HSQC based
                        experiments
                      </li>
                      <li>NMR-guided in silico drug screening</li>
                      <li>
                        Conformationally restricted nucleic acids as medicines.
                      </li>
                    </ol>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac13-3"></InputAcChild>
                  <LabelAcChild for="ac13-3">Scientific English</LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This course aims at improving the student's level of
                      understanding of scientific English by practicing correct
                      pronunciation of English terminology of chemistry and
                      biology. It also includes a self-introduction speech by
                      students and exercises in English dictation.
                    </p>
                  </DivAcChildContent>
                </DivAcParentContent>
                <InputAcParent type="checkbox" id="ac14"></InputAcParent>
                <LabelAcParent for="ac14">
                  Institute of Liberal Arts and Sciences
                </LabelAcParent>
                <DivAcParentContent>
                  <InputAcChild type="checkbox" id="ac14-0"></InputAcChild>
                  <LabelAcChild for="ac14-0">
                    Research Skills A-1 (Logical Thinking Skills in Research
                    Writing I)
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This is an active learning course! It means that you will
                      learn through active interactions with the course
                      instructor and your group members. There will be plenty of
                      lectures, group works, presentations, and discussions. All
                      these activities will be implemented based on YOUR OWN
                      RESEARCH! The spring semester will cover the following
                      sessions:
                    </p>
                    <dl>
                      <dt>Lesson 1:</dt>
                      <dd>
                        Introduction to the course: Why is logical thinking
                        necessary for research writing? (Lecture)
                      </dd>
                      <dt>Lesson 2:</dt>
                      <dd>
                        What is research writing? Introducing a narrow but
                        useful definition of research writing. (Lecture){" "}
                      </dd>
                      <dt>Lesson 3:</dt>
                      <dd>
                        Developing a main idea for your research - Part 1:
                        Understanding the role of thesis statement in research
                        writing. (Lecture)
                      </dd>
                      <dt>Lesson 4:</dt>
                      <dd>
                        Developing a main idea for your research - Part 2:
                        Step-by-step guide on how to build a thesis statement
                        for your research.
                      </dd>
                      <dt>Lesson 5:</dt>
                      <dd>
                        Let's present and discuss your thesis statement.
                        (Student presentation - part 1){" "}
                      </dd>
                      <dt>Lesson 6:</dt>
                      <dd>
                        Let's present and discuss your thesis statement.
                        (Student presentation - part 2){" "}
                      </dd>
                      <dt>Lesson 7:</dt>
                      <dd>
                        What is logic? How it can be used practically and
                        effectively? (Lecture)
                      </dd>
                      <dt>Lesson 8:</dt>
                      <dd>
                        YES! Logic can be practically applied to YOUR research!
                        (Lecture)
                      </dd>
                      <dt>Lesson 9:</dt>
                      <dd>
                        Let's learn to apply logic through some fun and exciting
                        exercises! (Group work){" "}
                      </dd>
                      <dt>Lesson 10:</dt>
                      <dd>
                        Developing a logical argument for your research - Part
                        1: Step-by-step guide on how to build an argument for
                        your research.
                      </dd>
                      <dt>Lesson 11:</dt>
                      <dd>
                        Developing a logical argument for your research - Part
                        2: Let's build your argument!{" "}
                      </dd>
                    </dl>
                    <p>(Group work)</p>
                    <dl>
                      <dt>Lesson 12:</dt>
                      <dd>
                        Let's present and discuss your logical argument.
                        (Student presentation - part 1){" "}
                      </dd>
                      <dt>Lesson 13:</dt>
                      <dd>
                        Let's present and discuss your logical argument.
                        (Student presentation - part 2){" "}
                      </dd>
                      <dt>Lesson 14:</dt>
                      <dd>
                        What is plagiarism? How logic education can combat
                        plagiarism? (Lecture)
                      </dd>
                      <dt>Lesson 15:</dt>
                      <dd>
                        Review, reflection, and course evaluation. (Discussion)
                      </dd>
                    </dl>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac14-1"></InputAcChild>
                  <LabelAcChild for="ac14-1">
                    Research Skills B-1 (Fundamentals of Academic Writing)
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>Tentative schedule</p>
                    <ol>
                      <li>What is academic writing?</li>
                      <li>Audience and purpose in academic writing</li>
                      <li>Developing a research question</li>
                      <li>What is a thesis statement?</li>
                      <li>Logical argumentation 1: Deductive reasoning</li>
                      <li>Logical argumentation 2: Inductive reasoning</li>
                      <li>Research design</li>
                      <li>Writing a strong thesis statement</li>
                      <li>What is an abstract?</li>
                      <li>Writing an abstract</li>
                      <li>Logical, rhetorical, and statistical fallacies</li>
                      <li>Student presentations</li>
                      <li>Student presentations</li>
                      <li>Peer review</li>
                      <li>Final abstracts</li>
                    </ol>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac14-2"></InputAcChild>
                  <LabelAcChild for="ac14-2">
                    Research Skills B-3 (Elements of Academic Wirting I)
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      Students should come to class with research ideas from
                      their field of study. This class will be very interactive.
                      Lectures will be interwoven with activities, tasks, and
                      questions. Lessons will proceed as follows:
                    </p>
                    <dl>
                      <dt>Lesson 1:</dt>
                      <dd>
                        What is the purpose of your research? What is the
                        purpose of this class?
                      </dd>
                      <dt>HW1:</dt>
                      <dd>Expectations Survey</dd>
                      <dt>Lesson 2:</dt>
                      <dd>
                        Critical thinking (What does this mean? How to do it
                        better?)
                      </dd>
                      <dd>Old Problems --&gt; New Insights</dd>
                      <dt>Lesson 3:</dt>
                      <dd>Critical thinking and Common Logical Fallacies</dd>
                      <dd>
                        Evaluating the claims of other researchers -- Activity
                      </dd>
                      <dt>HW 2:</dt>
                      <dd>Evaluate the claims of a paper in your field</dd>
                      <dt>Lesson 4:</dt>
                      <dd>
                        The function of a thesis statement in your research
                      </dd>
                      <dt>HW 3:</dt>
                      <dd>Create a novel thesis statement</dd>
                      <dt>Lesson 5:</dt>
                      <dd>Refining your thesis, proposal, research question</dd>
                      <dt>Lesson 6:</dt>
                      <dd>
                        Research Outline (An organized plan to investigate your
                        thesis)
                      </dd>
                      <dt>HW 4:</dt>
                      <dd>
                        Draft outline of your proposal/plan for your
                        presentation
                      </dd>
                      <dt>Lesson 7:</dt>
                      <dd>
                        Student thesis statement and research proposal
                        presentation.
                      </dd>
                      <dt>Lesson 8:</dt>
                      <dd>
                        Student thesis statement and research proposal
                        presentation.
                      </dd>
                      <dt>Lesson 9:</dt>
                      <dd>Writing Abstracts: Types and Organization</dd>
                      <dt>Lesson 10:</dt>
                      <dd>
                        Writing Abstracts: Paper Conference vs. Paper Abstracts
                        / Weak vs. Strong
                      </dd>
                    </dl>
                    <p>Abstracts</p>
                    <dl>
                      <dt>HW 5:</dt>
                      <dd>
                        Draft outline of your Abstract /plan for your
                        presentation
                      </dd>
                      <dt>Lesson 11:</dt>
                      <dd>Student Abstract Presentations</dd>
                      <dt>Lesson 12:</dt>
                      <dd>Student Abstract Presentations</dd>
                      <dt>Lesson 13:</dt>
                      <dd>
                        Collaborating with your research (Due: Conference
                        Abstract Draft 1)
                      </dd>
                      <dd>
                        Writing Workshop (group work focused on helping each
                        other)
                      </dd>
                      <dt>Lesson 14:</dt>
                      <dd>
                        Learning from the editorial process (Abstracts are
                        returned with comments)
                      </dd>
                      <dt>Lesson 15:</dt>
                      <dd>
                        Review, reflection, and course evaluation. (Due: Final
                        Abstract)
                      </dd>
                    </dl>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac14-3"></InputAcChild>
                  <LabelAcChild for="ac14-3">
                    Research Skills C-1 (Academic Presentation Skills I)
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      Classes are conducted in an informal, communicative
                      atmosphere. Students discuss issues and work together in
                      pairs or small groups, changing partners each week in
                      order to increase communication opportunities. Most
                      lessons include a short interactive lecture.
                    </p>
                    <ol>
                      <li>
                        Introduction: the functions and pleasures of
                        presentations
                      </li>
                      <li>Understanding audiences, reducing nervousness</li>
                      <li>Finding your main idea and significance</li>
                      <li>Logically structuring your presentation</li>
                      <li>Using logical support and evidence effectively</li>
                      <li>Effective slide design principles, techniques</li>
                      <li>1st presentations</li>
                      <li>1st presentations</li>
                      <li>1st presentations</li>
                      <li>
                        Delivery: voice, body language, interaction with slides
                      </li>
                      <li>Question time strategies and language</li>
                      <li>2nd presentations</li>
                      <li>2nd presentations</li>
                      <li>2nd presentations</li>
                      <li>Course review</li>
                    </ol>
                    <p>
                      * Students give 2 short presentations and may use their
                      own research or other research material. Consultation is
                      offered during preparation and detailed feedback is given
                      to support improvement.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac14-4"></InputAcChild>
                  <LabelAcChild for="ac14-4">
                    Research Skills C-3 (Presentation as Writing)
                  </LabelAcChild>
                  <DivAcChildContent>
                    <ol>
                      <li>Introduction</li>
                      <li>Plans to Deal with Information Overload</li>
                      <li>Notes-Style Writing</li>
                      <li>Communicating with Visual Symbols</li>
                      <li>1st Presentation: Effectively Using Handouts</li>
                      <li>Readings from a Script vs. Reading from a Paper</li>
                      <li>
                        Practice Maintaining Eye Contact while Using a Script
                        [viewing of video examples]{" "}
                      </li>
                      <li>Compacting Sentences into Notes</li>
                      <li>In Class Critiques of Student Scripts</li>
                      <li>2nd Presentation Using A Script</li>
                      <li>Elements of a PowerPoint Presentation</li>
                      <li>
                        Literature, Theory, and Methodology Sections of a Power
                        Point Presentation
                      </li>
                      <li>
                        The Data and Findings Section of a PowerPoint
                        Presentation
                      </li>
                      <li>Visual Elements of a PowerPoint Presentation</li>
                      <li>Final Presentation</li>
                    </ol>
                    <p>
                      [This schedule and its contents are subject to change]
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac14-5"></InputAcChild>
                  <LabelAcChild for="ac14-5">
                    Research Skills D-1 (Academic Writing and research
                    integrity)
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      The summer camp has been widely praised as the best
                      outdoor learning experience in the university life. It is
                      the perfect combination of learning and enjoyment. The
                      5-day camp will cover the following sessions:
                    </p>
                    <dl>
                      <dt>Session 1:</dt>
                      <dd>
                        Introduction to the course. (To be carried out at a date
                        prior to departure)
                      </dd>
                      <dt>Session 2:</dt>
                      <dd>Camp orientation. (Day 1)</dd>
                      <dt>Session 3:</dt>
                      <dd>
                        Workshop on academic writing and logical thinking. (Day
                        2)
                      </dd>
                      <dt>Session 4:</dt>
                      <dd>Student teamwork - 1. (Day 1)</dd>
                      <dt>Session 5:</dt>
                      <dd>Student teamwork - 2. (Day 1)</dd>
                      <dt>Session 6:</dt>
                      <dd>Workshop on thesis statement. (Day 2)</dd>
                      <dt>Session 7:</dt>
                      <dd>Student teamwork - 3. (Day 2)</dd>
                      <dt>Session 8:</dt>
                      <dd>Student teamwork - 4. (Day 2)</dd>
                      <dt>Session 9:</dt>
                      <dd>Workshop on logical argumentation. (Day 3)</dd>
                      <dt>Session 10:</dt>
                      <dd>Student teamwork - 5. (Day 3)</dd>
                      <dt>Session 11:</dt>
                      <dd>Student teamwork - 6. (Day 3)</dd>
                      <dt>Session 12:</dt>
                      <dd>Workshop on research ethics. (Day 4)</dd>
                      <dt>Session 13:</dt>
                      <dd>Student teamwork - 7. (Day 4)</dd>
                      <dt>Session 14:</dt>
                      <dd>Final presentation (Day 4)</dd>
                      <dt>Session 15:</dt>
                      <dd>Review and reflections (Day 5)</dd>
                    </dl>
                  </DivAcChildContent>
                </DivAcParentContent>
              </Accordion>
              <div
                className="is-paddingless"
                style={{
                  height: "60px",
                  marginTop: "30px",
                  marginBottom: "20px",
                }}
              >
                <Link
                  class="button is-paddingless is-marginless"
                  style={{
                    height: "60px",
                    border: "solid white",
                    borderWidth: "0px 0px 0px 2px",
                    backgroundColor: `#16A6B6`,
                  }}
                  to="../u_grad"
                >
                  <img
                    className="is-paddingless is-marginless"
                    src={withPrefix("/img/catalog/grad/c_type_chg.png")}
                  ></img>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </LayoutEn>
  );
};

const Accordion = styled.div``;

const DivAcParentContent = styled.div`
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  transform: translateZ(0);
  transition: all 0.3s;
  max-height: 0;
  overflow: hidden;
  margin-left: 20px;

  p {
    margin: 0;
    padding: 0.5em 1em 1em;
    line-height: 1.5;
  }
`;

const LabelAcParent = styled.label`
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  transform: translateZ(0);
  transition: all 0.3s;
  border-bottom: solid 1px #ccc;
  border-top: none !important;
  border-right: none !important;
  border-left: none !important;
  border-color: #ff6860 !important;
  margin-top: 0.3em;
  padding: 0.5em !important;
  display: block;
  color: #333;
  font-weight: bold;

  &::before {
    content: "";
    position: absolute;
    right: 1.25em;
    top: 1.25em;
    width: 2px;
    height: 0.75em;
    background-color: #999;
    transition: all 0.3s;
  }

  &::after {
    content: "";
    position: absolute;
    right: 1.25em;
    top: 1.25em;
    width: 2px;
    height: 0.75em;
    background-color: #999;
    transition: all 0.3s;
    transform: rotate(90deg);
  }
`;

const InputAcParent = styled.input`
  display: none;

  &:checked + ${LabelAcParent} + ${DivAcParentContent} {
    max-height: 50000px;
    transition: all 1.5s;
  }

  &:checked + ${LabelAcParent}::before {
    transform: rotate(90deg) !important;
  }
`;

const DivAcChildContent = styled.div`
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  transform: translateZ(0);
  transition: all 0.3s;
  max-height: 0;
  overflow: hidden;
  margin-left: 20px;
  font-size: 1rem !important;

  p {
    margin: 0;
    padding: 0.5em 1em 1em;
    line-height: 1.5;
  }
`;

const LabelAcChild = styled.label`
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  transform: translateZ(0);
  transition: all 0.3s;
  border-bottom: solid 1px #ccc;
  border-top: none !important;
  border-right: none !important;
  border-left: none !important;
  border-color: #ff6860 !important;
  margin-top: 0.3em;
  padding: 0.5em !important;
  display: block;
  color: #333;
  font-weight: bold;

  &::before {
    content: "";
    position: absolute;
    right: 1.25em;
    top: 1.25em;
    width: 2px;
    height: 0.75em;
    background-color: #999;
    transition: all 0.3s;
  }

  &::after {
    content: "";
    position: absolute;
    right: 1.25em;
    top: 1.25em;
    width: 2px;
    height: 0.75em;
    background-color: #999;
    transition: all 0.3s;
    transform: rotate(90deg);
  }
`;

const InputAcChild = styled.input`
  display: none;

  &:checked + ${LabelAcChild} + ${DivAcChildContent} {
    max-height: 50000px;
    transition: all 1.5s;
  }

  &:checked + ${LabelAcChild}::before {
    transform: rotate(90deg) !important;
  }
`;

export default EnCatalogGradIndexPage;
