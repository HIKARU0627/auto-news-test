import React from "react";
import { withPrefix, Link } from "gatsby";
import "bulma/css/bulma.css";
import styled from "styled-components";

import LayoutEn from "@common/Layout/LayoutEn";
import HelmetForOGPEn from "@common/Helmet/HelmetForOGPEn";

const EnCatalogUGradIndexPage = () => {
  return (
    <LayoutEn>
      <HelmetForOGPEn
        title={"English-Taught Course Catalog for Undergraduate"}
      />
      <section className="section">
        <div className="container is-paddingless">
          <div className="section is-paddingless">
            <div className="content is-paddingless is-size-5-mobile is-size-5-tablet is-size-4-widescreen">
              <div
                className="is-paddingless"
                style={{
                  height: "60px",
                  backgroundColor: `#16A6B6`,
                  marginTop: "30px",
                  marginBottom: "20px",
                }}
              >
                <img
                  className="is-paddingless"
                  src={withPrefix("/img/catalog/u_grad/c_type_title.png")}
                ></img>
              </div>
              <Accordion>
                <InputAcParent type="checkbox" id="ac0"></InputAcParent>
                <LabelAcParent for="ac0">Letters</LabelAcParent>
                <DivAcParentContent>
                  <InputAcChild type="checkbox" id="ac0-0"></InputAcChild>
                  <LabelAcChild for="ac0-0">
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
                      became significant during the timeframe under examination.{" "}
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac0-1"></InputAcChild>
                  <LabelAcChild for="ac0-1">
                    Colonialism in Language and Literature: Introduction to the
                    African Short Story in English
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      The purpose of the course is to teach the students to read
                      fiction more perceptively and reflectively. As we read
                      stories by contemporary African writers we will examine
                      the experience of colonization and the impact cultural
                      contact has had on traditional African societies. The
                      course will combine lecture and student-teacher
                      interaction. The teacher will guide the students through a
                      summary of the contents of the reading in a
                      question-answer session.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac0-2"></InputAcChild>
                  <LabelAcChild for="ac0-2">
                    Colonialism in Language and Literature: Short Stories by
                    Chinua Achebe
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      The purpose of the course is to teach the students to read
                      fiction more perceptively and reflectively. As we read
                      stories by Chinua Achebe we will explore the experience of
                      colonial contact on modern Igbo society in postcolonial
                      Nigeria. The course will combine lecture and
                      student-teacher interaction. The teacher will guide the
                      students through a summary of the contents of the reading
                      in a question-answer session.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac0-3"></InputAcChild>
                  <LabelAcChild for="ac0-3">
                    Contemporary Film Theory
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This course aims to provide students with a survey on
                      contemporary Western film theories mainly after the 1960s.
                      More specific goals are:{" "}
                      <ol>
                        <li>to understand contemporary film theories</li>
                        <li>
                          to nurture a critical and analytical view on visual
                          media, particularly cinema
                        </li>
                        <li>
                          to to develop each student's knowledge and questions
                          with a wide scope of contemporary intellectual
                          thoughts
                        </li>
                      </ol>
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac0-4"></InputAcChild>
                  <LabelAcChild for="ac0-4">
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
                  <InputAcChild type="checkbox" id="ac0-5"></InputAcChild>
                  <LabelAcChild for="ac0-5">
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
                  <InputAcChild type="checkbox" id="ac0-6"></InputAcChild>
                  <LabelAcChild for="ac0-6">Intellectual History</LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      The aim of this course is to supply students with an
                      opportunity of thinking on their own, through learning
                      about Plato's philosophy, which is based on the Socratic
                      spirit of continuous inquiry. We explore together the
                      philosophical journey of Socrates, which started from the
                      revelation of the value of the awareness of one's own
                      ignorance, as well as Plato's endeavour to take care of
                      his own soul, following Socrates' footsteps. In this
                      course we ourselves follow their journey together,
                      according to the development of Plato's philosophy. I
                      emphasize that students should connect what they know or
                      interested in with what they find in the inquiry of
                      Socrates and Plato, more than that they memorize things.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac0-7"></InputAcChild>
                  <LabelAcChild for="ac0-7">
                    Introduction to Cultural Theory
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This course is a general introduction to cultural studies
                      and theory. Knowledge of theoretical approaches,
                      analytical techniques, and interpretive strategies
                      commonly used in the interdisciplinary field of cultural
                      studies will enable students to understand culture not
                      only as a "way of life", but as a contested site for human
                      discourse and action. Students will learn to "read"
                      culture by looking at theoretical and literary texts,
                      visual images, and film. We will discuss definitions of
                      culture and related concepts such as identity, hybridity,
                      translation, power, representation, gender/sexuality.
                      Special attention will be given to concepts that are key
                      to Japanese studies, including orientalism, exoticism, and
                      so-called discourses of Japaneseness (nihonjinron).
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac0-8"></InputAcChild>
                  <LabelAcChild for="ac0-8">
                    Introduction to Japanese history
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This is a lecture course following the development of life
                      and society in the archipelago from prehistory to the
                      present (or as close as time permits). We will focus on
                      socioeconomic and political developments to provide a
                      foundation for understanding contemporary Japan.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac0-9"></InputAcChild>
                  <LabelAcChild for="ac0-9">
                    Introduction to Research Methods for Culture and History I
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This is an introductory course for learning and practicing
                      the basics of research methodology used in cultural and
                      historical studies. Class will cover the entire procedure
                      of research from finding a topic and researching academic
                      sources to writing a proposal and research report.
                      Lectures will be given on basic principles of academic
                      research, including finding and reviewing sources, and
                      developing research questions. Students are expected to
                      develop their own research project, producing an
                      end-of-term research paper.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac0-10"></InputAcChild>
                  <LabelAcChild for="ac0-10">
                    Introduction to Research Methods for Culture and History II
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This is an introductory course for learning and practicing
                      the basics of research methodology used in cultural and
                      historical studies. Class will cover the entire procedure
                      of research from finding a topic and researching academic
                      sources to writing a proposal and research report.
                      Lectures will be given on basic principles of academic
                      research, including finding and reviewing sources, and
                      developing research questions. Students are expected to
                      develop their own research project, producing an
                      end-of-term research paper.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac0-11"></InputAcChild>
                  <LabelAcChild for="ac0-11">
                    Introdution to Asian Cinema Culture
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This survey course aims to introduce to the students' the
                      diverse dimensions and recent development of contemporary
                      Asian cinemas mainly through presenting and analyzing
                      outstanding genre films and award-winning arthouse works
                      produced in the post-Cold War era. Importantly, we would
                      situate our study of film culture at the conjuncture of
                      cinephile culture, national/transnational film industries
                      and business, and the larger socio-cultural contexts in
                      Asian countries that has been drastically changing since
                      1989. Through this unusual journey, the students are
                      encouraged to rethink and debate on crucial issues related
                      to the film cultures and film movements in Iran, Hong
                      Kong, Taiwan, People's Republic of China, South Korea,
                      Japan and Southeast Asian countries.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac0-12"></InputAcChild>
                  <LabelAcChild for="ac0-12">
                    Japanese Cinema Before 1945
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This class provides students with an opportunity to
                      analyze films related to historical issues. The course
                      comprises a combination of screenings, lectures, and
                      discussions.{" "}
                      <ul>
                        <li>Early Cinema, Early Star</li>
                        <li>Restructuring Japanese Cinema in the 1920s</li>
                        <li>Tendency Film and Marxism</li>
                        <li>
                          Shōshimin (Petit-bourgeois) Film and Everyday Life
                        </li>
                        <li>The Modern Girl and Modernity</li>
                        <li>
                          Militarism and Nationalism Empire and Colonialism
                        </li>
                      </ul>
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac0-13"></InputAcChild>
                  <LabelAcChild for="ac0-13">
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
                  <InputAcChild type="checkbox" id="ac0-14"></InputAcChild>
                  <LabelAcChild for="ac0-14">
                    Japanese Culture and Communication I
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This course on Japanese communication provides the
                      students with an interdisciplinary overview of how
                      language and culture of Japanese form the ways people
                      communicate, examining various linguistic phenomena in
                      Japanese everyday conversations. Through this class,
                      students are expected to understand the relationship
                      between language and culture, and obtain resources to
                      theoretically describe and analyze the behaviors of people
                      in Japanese culture as well as other cultures. Students
                      should expect to work in groups and actively participate
                      in discussions and in-class group activities.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac0-15"></InputAcChild>
                  <LabelAcChild for="ac0-15">
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
                  <InputAcChild type="checkbox" id="ac0-16"></InputAcChild>
                  <LabelAcChild for="ac0-16">
                    Joint Undergraduate Seminar: Japan-in-Asia Cultural Studies
                    I
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      Colloquium-style seminar assist fourth-year JACS students
                      in preparing their graduation thesis. Student research
                      presentations and faculty feedback, working toward
                      producing a complete, quality draft of the graduation
                      thesis. It is critical that students fully prepare for
                      each presentation, including the necessary written and/or
                      audiovisual materials to demonstrate their progress. The
                      course will be team-taught by Profs. Hopson,
                      Iwata-Weickgenannt, and Ma.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac0-17"></InputAcChild>
                  <LabelAcChild for="ac0-17">
                    Language in Social Interaction II
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      Various social activities that constitute our everyday
                      lives, such as talking with friends, shopping at a store,
                      ordering food at a restaurant, having a discussion at a
                      meeting, etc., are accomplished through our interaction
                      with others. In interaction, we employ language and body
                      to "do things" - produce social actions, such as a
                      question, greeting, request, offer, etc. - and
                      collaboratively build actions in sequence, responding to
                      each other's verbal and non-verbal behaviors. This course
                      aims at exploring the organization of social interaction
                      from a micro perspective, introducing the findings from
                      'conversation analysis (CA),' a micro-analytic approach to
                      actual talk in everyday settings that examines how people
                      accomplish things in the world. Students will
                      theoretically understand and describe what people take for
                      granted in their everyday lives since how they, as members
                      of a society, behave with others in interaction shows what
                      is taken as social norms.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac0-18"></InputAcChild>
                  <LabelAcChild for="ac0-18">
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
                  <InputAcChild type="checkbox" id="ac0-19"></InputAcChild>
                  <LabelAcChild for="ac0-19">
                    Transnational Japanese Literature
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This course will explore transnational Japanese
                      literature, particularly reconsidering the fixed notion of
                      nation-sate in relation to literature. In particular, the
                      course will focus on the 20th century historical context
                      of the Japan-US relationship, and will examine
                      broadly-defined literature written by people who moved
                      back and forth between the two countries. Throughout the
                      course, we will critically examine the notion of
                      "Japanese," exploring the ways in which people's movement,
                      imperialism, war, language etc., affected their lives and
                      writings.
                    </p>
                  </DivAcChildContent>
                </DivAcParentContent>
                <InputAcParent type="checkbox" id="ac1"></InputAcParent>
                <LabelAcParent for="ac1">Education</LabelAcParent>
                <DivAcParentContent>
                  <InputAcChild type="checkbox" id="ac1-0"></InputAcChild>
                  <LabelAcChild for="ac1-0">
                    Lecture on Comparative Education 1
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      Education is very closely related to our life in modern
                      society. Nevertheless, we have not much chance to think
                      reflectively and to discuss about educational subjects.
                      This course aims to introduce an overview and explore
                      these key educational issues, ideas and concepts.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac1-1"></InputAcChild>
                  <LabelAcChild for="ac1-1">
                    Lecture on Cross-cultural Education{" "}
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      Lectures, discussions, simulation games, group interaction
                      and presentation will be designed to provide students with
                      insight and skills for building on their intercultural
                      competence.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac1-2"></InputAcChild>
                  <LabelAcChild for="ac1-2">
                    Lecture on International Exchange of Culture and Education
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This course discusses the development of the Javanese
                      traditional performing arts education system, particularly
                      in music, dancing, and puppetry (pedhalangan) arts.
                      Historically, there are three education systems in
                      Javanese traditional performing arts, i.e. tradition
                      (learning to parents and / or to an maestro artist or
                      nyantrik), course, and a formal education system.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac1-3"></InputAcChild>
                  <LabelAcChild for="ac1-3">
                    Seminar on Psychometrics 1
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      Data analysis has become more important in societies. This
                      course deals with several fundamental concepts in
                      psychometrics, educational measurement, and statistics. We
                      do NOT focus on remembering data analysis techniques, but
                      on understanding thoughts and principles behind them. It
                      will provide you with insights in how you should obtain
                      data, analyze them, and derive conclusions. There are a
                      lot of topics we recommend that you study. In this
                      semester, we will focus on TEST DEVELOPMENT.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac1-4"></InputAcChild>
                  <LabelAcChild for="ac1-4">
                    Seminar on Psychometrics 2
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      Data analysis has become more important in societies. This
                      course deals with several fundamental concepts in
                      psychometrics, educational measurement, and statistics. We
                      do NOT focus on remembering data analysis techniques, but
                      on understanding thoughts and principles behind them. It
                      will provide you with insights in how you should obtain
                      data, analyze them, and derive conclusions. There are a
                      lot of topics we recommend you to study. In this semester,
                      we will focus on what most attendants want to study in the
                      class. It may be the sequel of the previous semester or
                      completely a new topic. We will decide the topic in spring
                      semester together. If you have any requests or ideas,
                      please inform them to the course instructor
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac1-5"></InputAcChild>
                  <LabelAcChild for="ac1-5">
                    Seminar on Social Psychology 1{" "}
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      Wellbeing is one of the main aims in life for people in
                      modern society. However, the science of well-being and
                      happiness is a relatively new branch of psychology. This
                      course offers a scientific exploration of the topic
                      through the lenses of social and positive psychology,
                      exploring the key issues with cross-cultural references.
                      The class focuses on the psychological aspects of a
                      fulfilling and flourishing life with special emphasis on
                      the wellbeing of women.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac1-6"></InputAcChild>
                  <LabelAcChild for="ac1-6">
                    Seminar on Social Psychology 2
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
                </DivAcParentContent>
                <InputAcParent type="checkbox" id="ac2"></InputAcParent>
                <LabelAcParent for="ac2">Law</LabelAcParent>
                <DivAcParentContent>
                  <InputAcChild type="checkbox" id="ac2-0"></InputAcChild>
                  <LabelAcChild for="ac2-0">
                    Comparative Constitution{" "}
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      The purpose of this course is to review the fundamentals
                      of constitutional theory, and examine how the theoretical
                      application of Japanese constitutional law to various
                      constitution-related issues compare to that of students'
                      home countries, while reviewing constitutional theory and
                      its various manifestations in Asian and other countries.
                      Students will learn about the history and fundamental
                      principles of modern constitutions, gain a fundamental
                      understanding of the constitutions of Japan and modern
                      constitutional countries in Western Europe, and review the
                      constitutions of various countries, particularly in Asia.
                      These subjects will be further explored in class
                      discussions in which students will proactively debate
                      various related issues.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac2-1"></InputAcChild>
                  <LabelAcChild for="ac2-1">
                    Comparative European Politics
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This course aims to introduce students to the fundamentals
                      of comparative politics with a particular focus on Europe.
                      The course is composed of two parts. In the first part of
                      the course we will explore the basic concepts in
                      comparative politics, and discuss the role of theory and
                      empirical research within this field. In the second part
                      of the course, we will highlight these ideas and concepts
                      in the context of 'real world' politics, through a close
                      examination of various contentious issues in Europe,
                      including: the welfare state regimes, immigration and
                      multiculturalism, borders and security, democracy and
                      political participation, and European integration.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac2-2"></InputAcChild>
                  <LabelAcChild for="ac2-2">
                    Comparative Law I (Anglo-American)
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      To enable students to understand:{" "}
                      <ol className="parenthesized-lower-alpha">
                        <li>
                          The essential features of common law and the role of
                          law in Anglo-American legal systems
                        </li>
                        <li>
                          basic Anglo-American legal terminology and concepts
                        </li>
                        <li>
                          why Anglo-American law's development must be
                          understood as a historical phenomenon with
                          sociological significance
                        </li>
                        <li>
                          the interaction of case law and statutory
                          interpretation
                        </li>
                        <li>
                          comparative constitutional law issues in
                          Anglo-American law
                        </li>
                        <li>
                          the importance of res judicata, obiter dictum, and
                          precedent in the Anglo-American system
                        </li>
                        <li>
                          how Anglo-American law has developed in a few specific
                          examples that have been selected for illustrative
                          purposes including contract law and environmental law.
                        </li>
                      </ol>
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac2-3"></InputAcChild>
                  <LabelAcChild for="ac2-3">
                    Comparative Law II (Continental){" "}
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This course covers selected aspects of Comparative Law.
                      The focus is on Continental Law as opposed to Common Law,
                      among the major legal systems.
                    </p>
                    ,{" "}
                    <p>
                      The course intends to give students a better understanding
                      of the structure and the differences between various legal
                      systems around the world. It should also enhance the
                      students' comprehension of their own legal systems.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac2-4"></InputAcChild>
                  <LabelAcChild for="ac2-4">
                    Comparative Law III (Regime-Changing)
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      The purpose of this course is to develop the skills needed
                      to understand foreign legal systems using comparative
                      techniques. We define 'regime-changing' as a wider norm,
                      not only reviewing legal systems of countries in their
                      current or recent stages of political and social
                      transition, but also observing and comparing legal systems
                      of such countries from historical and cultural viewpoints.
                    </p>
                    ,{" "}
                    <p>
                      We will learn how a particular society grows its
                      indigenous law, and then how they have maintained it by
                      adopting foreign systems before discussing future
                      directions it might take. We focus on Family Law because
                      it reflects the historical and social background of each
                      society. It also often contains religious and customary
                      laws that are common and continuous problems despite
                      changes to social and political systems.{" "}
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac2-5"></InputAcChild>
                  <LabelAcChild for="ac2-5">
                    Contemporary Japanese Diplomacy{" "}
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      The lecture first traces the historical evolution of
                      Japanese diplomacy during the Cold War and post-Cold War
                      periods. It then proceeds to look at various
                      characteristics of Japanese diplomacy and the rationale on
                      which it is premised. Finally, it evaluates Japanese
                      diplomacy in the context of the current international
                      political environment.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac2-6"></InputAcChild>
                  <LabelAcChild for="ac2-6">
                    Contemporary Japanese Law I
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      The purpose of the course is to provide an introduction to
                      the contemporary Japanese legal system. This is done by
                      examining a number of areas, namely Article 9 of the
                      Constitution, Criminal Law, Procedural Law, Nationality
                      Law, and Family Law. Within each area, some of the most
                      relevant rules and institutions are selected, and they are
                      studied not only in and by themselves, but also by taking
                      into account their social, economic, and political
                      foundations. We also compare them to similar rules and
                      institutions in other countries.
                    </p>
                    ,{" "}
                    <p>
                      The course is designed with non-law students in mind, and
                      is therefore accessible to those with no or little former
                      university-level experience in this field. An effort is
                      made to highlight issues that are relevant for a wide
                      future range of careers, including, but not limited to,
                      business, public service, diplomacy, and national
                      security.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac2-7"></InputAcChild>
                  <LabelAcChild for="ac2-7">
                    Contemporary Japanese Law II
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This will be a student-driven course on selected topics in
                      Japanese law. The first session will concern "identity" in
                      Japanese law: how it is recorded and how it is proven. The
                      second session on "identity and land" will explore the
                      operation of property transactions. Subsequent sessions
                      will be driven by proposals that build out from a
                      preceding session (such as "identity and theft" or "land
                      and pollution"). Session topics and coordinators will be
                      set two weeks in advance in a short in-class discussion,
                      and the instructor may pitch in with supplementary
                      readings one week in advance.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac2-8"></InputAcChild>
                  <LabelAcChild for="ac2-8">
                    Contemporary Japanese Politics{" "}
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      The purpose of this class is to understand the history of
                      politics and public administration in Japan after the
                      Second World War. In addition to the video, texts and
                      reference works introduced in class, you will deepen your
                      understanding of current Japanese politics by using
                      articles from daily newspapers. Finally, you will gain the
                      ability to judge issues of Japanese politics
                      independently.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac2-9"></InputAcChild>
                  <LabelAcChild for="ac2-9">
                    International Politics{" "}
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This course serves as an introduction to International
                      Relations Theory. It is, however, based more on
                      discussions and presentations by students than on lectures
                      by the instructor. As theories are valuable only insofar
                      as they help us understand and explain concrete events and
                      phenomena, strong emphasis is placed on applying them to
                      current international and global affairs.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac2-10"></InputAcChild>
                  <LabelAcChild for="ac2-10">Introduction to Law </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This introductory course covers selected aspects of modern
                      legal theory, substantive law and procedural law. The
                      first half of the course concerns modern legal theory in
                      broad outline, particularly the relationship between
                      positivism, other legal theories, and events on the world
                      stage. In the second half of the course the focus is on
                      the reading of court judgements, with discussion of legal
                      process, legal change, and comparative law.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac2-11"></InputAcChild>
                  <LabelAcChild for="ac2-11">
                    Peer Support Initiative I
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This course focuses on providing newcomer-international
                      students with information on Japan's culture, society,
                      laws and politics, as well as helping these students to
                      acclimatize to their new environment. Japanese students
                      will gain an understanding of the laws, politics and
                      society of their respective international student group
                      members and explain Japanese law, politics and society in
                      a comparative way.{" "}
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac2-12"></InputAcChild>
                  <LabelAcChild for="ac2-12">
                    Peer Support Initiative II
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This course prioritizes the law and politics of the
                      international students' home country, with the aim of
                      deepening the mutual understanding of the participants'
                      countries. So that the characteristics of the
                      international students' home countries' legal and
                      political systems can be highlighted better, the Japanese
                      students shall, when needed, provide information on Japan.
                    </p>
                    ,{" "}
                    <p>
                      As far as possible, the international students will
                      explain the law and society of their own country in
                      Japanese. Opportunities for Japanese students to give the
                      same explanation in the languages of the international
                      students will be increased.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac2-13"></InputAcChild>
                  <LabelAcChild for="ac2-13">
                    Peer Support Initiative III
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      The purpose of this final phase is to bring together the
                      work in the prior two semesters and to conduct detailed
                      field research. In this portion of the program, students
                      will conduct field research in their target country,
                      complete a report detailing their research, and present
                      their research results. The field trip portion is not
                      required for foreign students though they are encouraged
                      to attend if possible. Foreign students are however
                      responsible for working with their Japanese team members
                      to organize the field research and cooperate in the final
                      report and research presentation.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac2-14"></InputAcChild>
                  <LabelAcChild for="ac2-14">Political Science</LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This course examines various theories and approaches to
                      political studies. Since our understanding of the
                      "reality"of politics always depends on some theoretical
                      viewpoint it goes without saying that theory matters.
                      While many of the examples used in this course will be
                      taken from advanced democracies such as Japan, many of the
                      concepts will also be applied to developing countries. We
                      will examine the following topics:{" "}
                      <ol>
                        <li>Pluralism</li>
                        <li>Critiques of pluralism</li>
                        <li>Neo-Corporatism</li>
                        <li>Neo-Marxist theory of the state</li>
                        <li>
                          Power resource theory and comparative welfare states
                        </li>
                        <li>Critiques of power resource theory</li>
                        <li>New Institutionalisms</li>
                        <li>Ideas and discourse in political analysis</li>
                        <li>
                          Rethinking politics: civil society debates and
                          feminist criticism of public/private distinction
                        </li>
                        <li>Deliberative Democratic Theory</li>
                      </ol>
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac2-15"></InputAcChild>
                  <LabelAcChild for="ac2-15">Political Systems</LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This class introduces students to the study of politics
                      and political systems. The first aim is to familiarize
                      students with basic concepts in the field of political
                      science. The second aim is to build the capacity of
                      students for comparing political systems in advanced,
                      developed democracies. The third aim of the class is to
                      cultivate critical thinking among students as to the
                      benefits and drawbacks of a particular political model.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac2-16"></InputAcChild>
                  <LabelAcChild for="ac2-16">Political Thoughts</LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      All developing societies since the Industrial Revolution
                      have faced the challenge of so-called "Westernization".
                      Japan, it appears, is one country that has been relatively
                      successful in adapting and integrating Western
                      socio-political values.
                    </p>
                    ,{" "}
                    <p>
                      But modern Japanese history contains a tension between
                      traditional values and Western ones. This is most clearly
                      reflected in the efforts of many Japanese thinkers to
                      accept with reservations, or sometimes even completely
                      refuse, "advanced" thoughts from the Western world.
                    </p>
                    ,{" "}
                    <p>
                      In this Course, we use a textbook which introduces
                      Japanese intellectual history since the Meiji Era to try
                      to understand the meaning of this tension and its
                      implications. In the globalizing world we live, it is
                      meaningful to step into the shoes of those Japanese
                      thinkers endeavoring to bridge the gap between their own
                      thoughts and morals and Western ones. By reading the book
                      over the semester, I hope that students will discover a
                      way in which different cultures can successfully interact.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac2-17"></InputAcChild>
                  <LabelAcChild for="ac2-17">
                    Preliminary Seminar A
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This course looks at legal issues from a cross-cultural,
                      comparative and pluralistic perspective. The course will
                      comprise both a theoretical explanation of the field and
                      its historical evolution, but will largely focus on
                      contemporary and highly debated themes like legal
                      pluralism, dispute resolution and access to justice, human
                      rights, cultural defense. Notions like "law", "justice",
                      "sanction", etc. will be analyzed in context, to show
                      students that the idea of law as merely legal order
                      imposed from the State could be limiting if not
                      misleading. Most of the course will be centered about
                      instructor-administered debates among students.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac2-18"></InputAcChild>
                  <LabelAcChild for="ac2-18">
                    Preliminary Seminar B{" "}
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      In this course we will explore a variety of social,
                      economic, technological and political trends in a selected
                      group of fields which demonstrate the ways in which
                      international law and domestic law interact to address
                      these problems. These range from major global issues which
                      require collective action at the international level to
                      avert potentially catastrophic outcomes - like climate
                      change - to more niche areas in which interesting legal
                      issues are being debated like the cross border protection
                      of cultural property.{" "}
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac2-19"></InputAcChild>
                  <LabelAcChild for="ac2-19">
                    Public Administration
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      In this class we study about the historical and structural
                      changes of Public Administration from the "Big Government"
                      era to the "Small Government" era.
                    </p>
                    ,{" "}
                    <p>
                      From the macro view point we focus the shift from an era
                      in which the "state" sought to seize and control over its
                      economy to an era in which the ideas of competition,
                      openness, privatization and deregulation have captured
                      world economic thinking.
                    </p>
                    ,{" "}
                    <p>
                      From the micro view point we focus on the changes of the
                      hierarchical, centralized bureaucracies designed in the
                      1930s or 1940s to the entrepreneurial governments which
                      promote competition between service providers, empower
                      citizens and focus not on inputs but on outcomes.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac2-20"></InputAcChild>
                  <LabelAcChild for="ac2-20">
                    Reading Legal Documents
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      The purpose of the course is to give students the chance
                      to acquaint themselves with some key legal international
                      documents, both public and private. Reading and discussing
                      them should provide students with the opportunity to
                      explore some of the legal foundations of international
                      relations and international financial markets. Students
                      are expected to be active participants in class, since the
                      course is based on active learning, reading, and
                      comprehension, rather than the mere passive study of
                      texts.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac2-21"></InputAcChild>
                  <LabelAcChild for="ac2-21">
                    Reading Political Documents
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This class introduces students to a selection of political
                      documents in the history of Western democracy. It requires
                      students to read sections of these documents and to
                      develop an eye for interpreting their meaning and
                      significance. Students will also learn about the
                      historical situation which existed at the time the
                      documents were promulgated. Finally, students are
                      encouraged to think critically about the documents
                      regarding their implications for the future of democracy.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac2-22"></InputAcChild>
                  <LabelAcChild for="ac2-22">Seminar IA/IIA/IIIA</LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      The purpose of Seminar IA/IIA is to introduce students to
                      the founding ideas of the bourgeois (liberal) political
                      tradition. It aims to do this by setting out select basic
                      readings from foundational works in the liberty tradition.
                      Students will come to class prepared to discuss the
                      readings, and will also make short presentations on
                      foundational works of their choice. Students are
                      encouraged to think critically about the founding works of
                      the bourgeois political tradition and to make assessments
                      of the relevance of the early writings to today's
                      political society.
                    </p>
                    ,{" "}
                    <p>
                      The purpose of Seminar IIIA is for advanced students
                      preparing their honors graduation thesis to not only
                      participate in discussions with IA and IIA students, but
                      also to present elements of their in-progress thesis to
                      the class. This will help junior seminar members orient
                      their thinking towards selecting and developing their own
                      thesis projects.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac2-23"></InputAcChild>
                  <LabelAcChild for="ac2-23">Seminar IA/IIA/IIIA</LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      Law is an amalgam of pragmatism, doctrine, and overriding
                      theory. Registration systems are one of the most common
                      supporting devices for the pragmatic implementation of
                      legal rules in fields ranging from Immigration to
                      Corporate Law. With the advent of the Internet, direct
                      interaction with government-operated and
                      government-recognized registration systems (both reading
                      and writing) has become a more common experience.
                    </p>
                    ,{" "}
                    <p>
                      In Seminar IA/IIA, students will each serve as a
                      rapporteur on a specific registration system of their
                      choice. Student reports will progress concurrently through
                      the term by examining a common set of questions about each
                      registration "gateway", spanning data collection, data
                      storage and management, public accessibility and
                      accountability, laws dependent upon collected data, and
                      related public discourse.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac2-24"></InputAcChild>
                  <LabelAcChild for="ac2-24">Seminar IB/IIB</LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This class introduces students to the foundational ideas
                      of political economy. Students will learn that many of the
                      original thinkers of the bourgeois liberal tradition were
                      not only political thinkers but political economists who
                      saw their arguments about things like freedom and
                      government as intimately linked to questions of political
                      economy such as property rights, workings of the market,
                      rights to the fruits of one's labor and what the ultimate
                      source of social wealth is.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac2-25"></InputAcChild>
                  <LabelAcChild for="ac2-25">Seminar IB/IIB</LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      The subject of this seminar will be contract law. At the
                      end of the course, students will have systematic knowledge
                      of black-letter contract law, and be equipped to identify
                      the legal rights and obligations arising in the course of
                      a transaction.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac2-26"></InputAcChild>
                  <LabelAcChild for="ac2-26">
                    Special Problems (Basic Readings on Japanese Law and
                    Society)
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This seminar provides students the opportunity to learn
                      and discuss the actual functioning of Japanese law and the
                      legal system in its social context. This semester we are
                      focusing on the reality of the legal resolution of private
                      disputes in Japan. Suggested reading materials (law
                      articles) will be provided for each session. Topics may
                      include, but are not limited to, the following:
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac2-27"></InputAcChild>
                  <LabelAcChild for="ac2-27">
                    Special Problems (Case Study of International Commercial
                    Arbitration)
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      Legal Education is presently facing challenges related to
                      the internationalization of the legal profession. New,
                      truly international, learning experiences are flourishing,
                      particularly, the extremely useful and challenging
                      international commercial arbitration moots. One of the
                      most prestigious is the Vis (East) Moot. As the organizers
                      of this competition state, the Vis Moot was created as a
                      clinical tool for training law students in crucial aspects
                      of the procedure: research, drafting and advocacy. The
                      goals of the Moot are to promote the study of
                      international commercial arbitration and to train
                      tomorrow's legal leaders in methods of alternate dispute
                      resolution.
                    </p>
                    ,{" "}
                    <p>
                      This seminar focuses on both theoretical and practical
                      issues related to the Moot. This year's (2015) case will
                      be studied in detail. Starting from that, students will
                      prepare the case by doing research and collecting
                      materials, develop a defensive strategy and learn the
                      basic skills of oral advocacy in arbitration. As the Moot
                      case is based on the Convention on the International Sale
                      of Goods (CISG), the seminar will be an occasion for an
                      in-depth study of this extremely useful international
                      convention.
                    </p>
                    ,{" "}
                    <p>
                      Ordinary students will work together with the Nagoya
                      University Team for the Vis (East) Moot 2015, in order to
                      gain a first-hand experience preparing for a Moot.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac2-28"></InputAcChild>
                  <LabelAcChild for="ac2-28">
                    Special Problems (Good Governance vs. Corruption)
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This seminar will combine the theory of legal and business
                      ethics with the practicalities of developing nations.
                      Students will wrestle with questions such as how one can
                      be ethical when working in a system that has corruption.
                      The course, on the one hand, will draw upon the theory of
                      liberal democracy and the constitutional state. On the
                      other hand, it will ask students to test their practical
                      knowledge and rectitude by addressing different scenarios.
                      We will have participation from practitioners and experts,
                      as necessary. Students will give oral presentations of
                      assigned topics and a short research paper is also
                      required as the final essay. International and Japanese
                      students are encouraged to attend.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac2-29"></InputAcChild>
                  <LabelAcChild for="ac2-29">
                    Special Problems (International Relations of East Asia)
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This is an introductory course on international relations
                      in East Asia taught in an intensive manner over a period
                      of four days. East Asia has become the most important
                      region of the world with its economic rise and strategic
                      importance, which presents a plethora of important and
                      interesting security and economic issues. In this course
                      we will{" "}
                      <ol>
                        <li>
                          introduce the essential theories of international
                          relations that will help us analyse these issues{" "}
                        </li>
                        <li>
                          discuss several key issues, including, but not limited
                          to, the rise of China, the issue of nuclear weapons in
                          North Korea, the controversial "history problem",
                          financial cooperation and FTAs
                        </li>
                        <li>
                          engage students in discussions and presentations. The
                          purpose of the course is to provoke students' thinking
                          about regional interstate relations by applying major
                          international relations theories to critical issues
                          affecting the region. Hence, the task of the students
                          is to think critically about the issues covered in the
                          course and evaluate which theoretical approach(es)
                          best explain major trends in the level of cooperation
                          and conflict within the region. The course does not
                          assume that you have any background in international
                          relations theory or in East Asian history.
                        </li>
                      </ol>
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac2-30"></InputAcChild>
                  <LabelAcChild for="ac2-30">
                    Special Problems (Political Theory of Law A)
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This bi-weekly, two-semester course introduces students to
                      the world of legal and political theory, especially those
                      of a liberal democracy.
                    </p>
                    ,{" "}
                    <p>
                      Burning questions students have regarding political power
                      and public order will be examined and the role of law
                      therein will be explained.
                    </p>
                    ,{" "}
                    <p>
                      To facilitate the inquiry, theories of law and state by
                      Hobbes, Locke, Rousseau, Kant, Hegel and Marx, as well as
                      their contemporary counterparts developed by Hart,
                      Dworkin, Raz and Rawls, may be discussed. The course will
                      be taught in English, with summaries in Japanese, as
                      necessary. International and Japanese students are welcome
                      to attend.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac2-31"></InputAcChild>
                  <LabelAcChild for="ac2-31">
                    Special Problems (Political Theory of Law B)
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This bi-weekly two semester course introduces the student
                      to the world of legal and political theory, especially
                      those of a liberal democracy.
                    </p>
                    ,{" "}
                    <p>
                      Burning questions students have on political power and
                      public order will be examined and the role of law therein
                      will be explained.
                    </p>
                    ,{" "}
                    <p>
                      To facilitate the inquiry, theories of law and state by
                      Hobbes, Locke, Rousseau, Kant, Hegel and Marx, as well as
                      their contemporary counterparts developed by Hart,
                      Dworkin, Raz and Rawls may be discussed.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac2-32"></InputAcChild>
                  <LabelAcChild for="ac2-32">
                    Special Problems (Quantitative Analysis in the Social
                    Sciences)
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This course teaches the use of social science quantitative
                      techniques, emphasizing applications of value to
                      administrators and researchers alike in the fields of law,
                      political science, public policy, and public and
                      international affairs. It includes a review of theoretical
                      application as well as a practical use of descriptive
                      statistics and hypothesis testing.
                    </p>
                    ,{" "}
                    <p>
                      Quantitative Analysis is designed to provide students with
                      the knowledge and skills to reach a new level of
                      understanding and analysis of social science data. The
                      course will begin broadly by teaching students how to
                      develop good, quantifiable research questions and the most
                      appropriate methods to answer them. Students will learn to
                      use statistics as a method of determining what, if any
                      relationships exist between variables and if those
                      relationships are significant. By the end of the term,
                      students should have the tools not only to develop and
                      test their own research questions, but also to read and
                      critique the work of other authors in books and scholarly
                      journals with an eye for finding areas of the discipline
                      that are in need of future research.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac2-33"></InputAcChild>
                  <LabelAcChild for="ac2-33">
                    Special Problems(Campus Asean Joint Education Course){" "}
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This course has been developed by collaboration among 5
                      departments (Law, Economics, Agriculture, International
                      Development, etc.) for the purpose of fostering new
                      generation leaders who can bridge between ASEAN countries
                      and Japan, having a wide spectrum of expertise in
                      Economics, Law, Politics, Diplomacy and International
                      Development and applied skill for cross-cutting policies,
                      and intercultural Knowledge Competence. To fulfill the
                      purpose, professors with expertise in each academic field
                      will give a series of lectures to encourage students{" "}
                      <ol>
                        <li>
                          to hold an initial interest in a particular topic
                        </li>
                        <li>to acquire basic knowledge, and</li>
                        <li>
                          to gain motivation to expand and deepen studies in
                          each academic field about the ASEAN region and Japan.
                        </li>
                      </ol>
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac2-34"></InputAcChild>
                  <LabelAcChild for="ac2-34">
                    Special Problems(Quantitative Analysis in the Social
                    Sciences II)
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This course teaches the use of social science quantitative
                      techniques, emphasizing applications of value to
                      administrators and researchers alike in the fields of law,
                      political science, public policy, and public and
                      international affairs. It includes a review of theoretical
                      application as well as practical use of descriptive
                      statistics, hypothesis testing and inferential statistics.
                    </p>
                  </DivAcChildContent>
                </DivAcParentContent>
                <InputAcParent type="checkbox" id="ac3"></InputAcParent>
                <LabelAcParent for="ac3">Economics</LabelAcParent>
                <DivAcParentContent>
                  <InputAcChild type="checkbox" id="ac3-0"></InputAcChild>
                  <LabelAcChild for="ac3-0">
                    Advanced Course of Business Analysis
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      The purpose of this course is to enhance research ability
                      in implementing a business analysis using financial
                      statements.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac3-1"></InputAcChild>
                  <LabelAcChild for="ac3-1">
                    Advanced Course of Economic Policy
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This lecture is a subject study on climate change and
                      low-carbon economy. It offers students monographic studies
                      on the theories of climate change, environment economics,
                      global value chains and carbon emissions, carbon tax,
                      energy policy as well as country studies such as China,
                      the largest carbon emitter in the world. It fosters to
                      enhance applicable ability in improving the research
                      capacity of students through advanced lectures and case
                      studies given by internationally well-known scholars.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac3-2"></InputAcChild>
                  <LabelAcChild for="ac3-2">
                    Advanced Course of Financial Accounting
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      The aim of this course is to provide students with an
                      understanding of the theory and application of accounting
                      principles generally accepted in the USA.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac3-3"></InputAcChild>
                  <LabelAcChild for="ac3-3">
                    Advanced Course of Industrial Organization
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      The aim of this course is to provide students with how to
                      conduct research in Industrial Organization. In
                      particular, it deals with firms' behavior (on pricing and
                      other related activities) under oligopolistic competition.
                      The emphasis will be placed on how to propose a good
                      research question, and how to combine knowledge on
                      industry, data, economic theory, and econometrics.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac3-4"></InputAcChild>
                  <LabelAcChild for="ac3-4">
                    Advanced Course of International Accounting
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      The lecture is intended to provide the opportunity for
                      students to learn and understand international aspects of
                      accounting.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac3-5"></InputAcChild>
                  <LabelAcChild for="ac3-5">
                    Advanced Course of International Economics
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
                  <InputAcChild type="checkbox" id="ac3-6"></InputAcChild>
                  <LabelAcChild for="ac3-6">
                    Applied Macroeconomics{" "}
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This course is designed to introduce students to the
                      workings of the macroeconomic environment and its
                      potential impact on business firms. It focuses on how to
                      apply economic theory to current issues in macroeconomics.
                      Upon successful completion of this course, the students
                      should be able to improve their research
                      ability/application ability in the following sense:{" "}
                      <ol>
                        <li>
                          solving problems with basic principles of
                          macroeconomics, including national income accounting,
                          aggregate demand and supply, price fluctuations, and
                          fiscal and monetary policies
                        </li>
                        <li>
                          analyzing and summarizing the current and future
                          impact of important macroeconomic issues.
                        </li>
                      </ol>
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac3-7"></InputAcChild>
                  <LabelAcChild for="ac3-7">
                    Applied Microeconomics{" "}
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This course covers basic concepts in price theory and its
                      applications.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac3-8"></InputAcChild>
                  <LabelAcChild for="ac3-8">
                    ASEAN Business and Economy
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>This lecture aims to:</p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac3-9"></InputAcChild>
                  <LabelAcChild for="ac3-9">
                    Development Economics{" "}
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This course is a subject study of the Chinese economy. The
                      purpose of this lecture is to foster the ability of
                      analyzing the Chinese economy through studying the theory
                      of economic development and case studies of China's
                      economic development.China became the world's second
                      largest economy beyond Japan in 2010, largest export
                      country in 2013 and will surpass the United States be No.1
                      in 2018 by PPP according to a prediction of OECD.
                      Currently China is transforming itself from a "factory of
                      the world" into a main "market of the world". What are the
                      secrets of China high growth? What are the problems facing
                      to China now? Can China continue its high growth? How
                      should the world deals with a rising China? This lecture
                      will provide you some optional answers to the above
                      questions.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac3-10"></InputAcChild>
                  <LabelAcChild for="ac3-10">
                    Graduation Thesis Research on Economics I
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      In this seminar senior students will pursue their own
                      research for the graduation thesis. The course consists
                      of:{" "}
                      <ol>
                        <li>Survey of a research field</li>
                        <li>Developing a good structure for research</li>
                        <li>Developing a methodology</li>
                        <li>Analyses of particular factors</li>
                        <li>A conclusion</li>
                        <li>Presentations</li>
                        <li>A graduation thesis</li>
                      </ol>
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac3-11"></InputAcChild>
                  <LabelAcChild for="ac3-11">
                    Graduation Thesis Reserch on Economics II
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      In this Seminar senior students will pursue their own
                      research for the graduation thesis. They have to have{" "}
                      <ol>
                        <li>Survey of the research field</li>
                        <li>a good structure for a research</li>
                        <li>an academic method</li>
                        <li>analyses of the factors</li>
                        <li>a conclusion</li>
                        <li>presentations</li>
                        <li>a graduation thesis.</li>
                      </ol>
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac3-12"></InputAcChild>
                  <LabelAcChild for="ac3-12">
                    Introductory Accounting I
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      Accounting is called "language of business", as they are
                      used to communicate among interested parties of the
                      business. Students will be learning very basics of how to
                      write (make entries) and read (financial statement
                      analysis) that "language".
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac3-13"></InputAcChild>
                  <LabelAcChild for="ac3-13">
                    Introductory Economic History I
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      In this course, basic analytical ability is developed as
                      we compare the historical development of business in Great
                      Britain, the United States, and Japan (and, to a lesser
                      extent, in Germany and China) from pre-industrial times to
                      the present, with an emphasis on the twentieth century. We
                      examine the development of government-business relations
                      and the changing relationships between business and
                      society in each nation. The course also includes
                      supplementary information on issues of special interest
                      and on significant people in business history.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac3-14"></InputAcChild>
                  <LabelAcChild for="ac3-14">
                    Introductory Macroeconomics I
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This course is designed to help students to understand the
                      behavior of individual economic units. It focuses on the
                      intuitive understanding of theories and their application
                      to business decision making and policy analysis. Topics
                      examined during the course include the analysis of demand,
                      cost, and market efficiency; the design of pricing
                      strategies; investment and production decisions; as well
                      as public policy analysis. Upon successful completion of
                      the course, the students should be able to improve their
                      basic analytical ability in the following senses:{" "}
                      <ol>
                        <li>
                          understand basic principles of microeconomics,
                          including those related to the strategic interactions
                          of firms
                        </li>
                        <li>
                          understand public policy and appreciate how a modern
                          economy functions. The prerequisite for this course is
                          the successful completion of Economics A.
                        </li>
                      </ol>
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac3-15"></InputAcChild>
                  <LabelAcChild for="ac3-15">
                    Introductory Macroeconomics II(E)
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This course is designed to introduce students to the
                      workings of the macroeconomic environment. It focuses on
                      the intuitive understanding of theories and their
                      application to various macroeconomic issues. Topics
                      examined during the course include the theory of economic
                      growth and the determination of exchange rates. Upon
                      successful completion of this course, the students should
                      be able to improve their basic analytical ability in the
                      following sense:{" "}
                      <ol>
                        <li>
                          Understand basic principles of macroeconomics,
                          including those related to economic growth and
                          exchange rates
                        </li>
                        <li>
                          Analyze macroeconomic issues of significance, and
                          their current and future impacts. The prerequisite for
                          this course is the successful completion of
                          Introductory Macroeconomics I.
                        </li>
                      </ol>
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac3-16"></InputAcChild>
                  <LabelAcChild for="ac3-16">
                    Introductory Management I
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      Through an exploration of fundamental management concepts
                      and skills, this course promotes critical thinking and the
                      ability to make sound business decisions using managerial
                      theory. During the Fall semester we will examine various
                      approaches to management, ethical issues, sustainability
                      and innovation, cultural diversity, decision-making,
                      planning, and strategic management.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac3-17"></InputAcChild>
                  <LabelAcChild for="ac3-17">
                    Introductory Management II{" "}
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This course explores fundamental management concepts and
                      skills. This semester we will examine such issues as
                      organization design and culture, human resource
                      management, leadership, motivation, teamwork, effective
                      communication, control, and operations management.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac3-18"></InputAcChild>
                  <LabelAcChild for="ac3-18">
                    Introductory Practical Management II
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This course will help students develop basic analytical
                      ability by exploring the underlying principles and goals
                      of marketing and the key issues involved in the
                      development of a balanced and integrated approach to the
                      marketing of products and services. Topics include
                      Consumer Behavior; Market Segmenting, Targeting, and
                      Positioning; Public Relations; Selling; and Customer
                      Satisfaction.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac3-19"></InputAcChild>
                  <LabelAcChild for="ac3-19">
                    Introductory Review on Economics{" "}
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      Students will have a chance to see and understand a
                      variety of economic research fields which are presented by
                      different professors. Through the omnibus style of
                      lectures students should find a topic or a direction which
                      they would like to research in the future, especially for
                      their graduation thesis.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac3-20"></InputAcChild>
                  <LabelAcChild for="ac3-20">
                    Introductory Review on Management{" "}
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      Students will have the chance to see and understand a
                      variety of business administration research fields which
                      are presented by different professors. Through the omnibus
                      style of lectures students should find out a topic or a
                      direction which they would like to pursue in the future,
                      especially as for their graduation thesis.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac3-21"></InputAcChild>
                  <LabelAcChild for="ac3-21">
                    Introductory Seminar I
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      The purpose of this seminar is to promote discussion of
                      current business issues and to encourage a free flow of
                      thought and dialogue. The seminar also provides an outlet
                      for discussion of a broad range of students' academic
                      experiences at Nagoya University.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac3-22"></InputAcChild>
                  <LabelAcChild for="ac3-22">
                    Introductory Seminar II
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This lecture aims to foster basic analytical ability
                      through discussion of topics of mutual interest to
                      encourage a free flow of thought and dialogue. The seminar
                      also provides an outlet for discussion of a broad range of
                      students' academic and daily experiences at Nagoya
                      University.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac3-23"></InputAcChild>
                  <LabelAcChild for="ac3-23">
                    Introductory Seminar III
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      The purpose of this seminar is to promote discussion of
                      current business issues and to encourage a free flow of
                      thought and dialogue. The seminar also provides an outlet
                      for discussion of a broad range of students' academic
                      experiences at Nagoya University.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac3-24"></InputAcChild>
                  <LabelAcChild for="ac3-24">
                    Introductory Seminar IV
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This lecture aims to foster basic analytical ability
                      through discussion of topics of mutual interest to
                      encourage a free flow of thought and dialogue. The seminar
                      also provides an outlet for discussion of a broad range of
                      students' academic and daily experiences at Nagoya
                      University.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac3-25"></InputAcChild>
                  <LabelAcChild for="ac3-25">
                    Profitability Analysis
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
                      principles for comparison, the concept of sunk cost, use
                      of efficiency indices, evaluation of investment proposals,
                      the influence of price increases, and risk analysis
                      including sensitivity analysis and break-even analysis.{" "}
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac3-26"></InputAcChild>
                  <LabelAcChild for="ac3-26">
                    Seminar on Economics I
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      In this seminar students will be educated in the way of
                      global human resources, who can think dynamically, discuss
                      actively, cooperate with diverse team members and be
                      tolerant of different opinions.{" "}
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac3-27"></InputAcChild>
                  <LabelAcChild for="ac3-27">
                    Seminar on Economics II
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      In this seminar students will be educated as global human
                      resource, who can think dynamically, discuss actively,
                      cooperate with diverse team members and be tolerant of
                      different opinions.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac3-28"></InputAcChild>
                  <LabelAcChild for="ac3-28">
                    Specialized Advanced Lecture (Introduction to Japanese
                    Business){" "}
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This class looks at how Japanese businesses have evolved
                      in the past and where they will go in the future. Case
                      studies are used. Active participation of the students is
                      required. We will organize group study and group
                      presentation at the end of the term. More detailed
                      syllabus will be distributed during Introduction. This
                      lecture aims to foster the basic analytical ability
                      through private and group presentation.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac3-29"></InputAcChild>
                  <LabelAcChild for="ac3-29">
                    Special Studies(ASEAN Business and Management)
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This course covers Japanese organizational change,
                      followed by their reforms in other countries like in
                      ASEAN. The structure of this course is lectures, student
                      presentation and discussion session. It aims to;{" "}
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac3-30"></InputAcChild>
                  <LabelAcChild for="ac3-30">
                    Specialized Advanced Lecture (Economic Theory II){" "}
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This lecture reviews the nature of the Neo-classical
                      system under perfect competition:{" "}
                      <ol>
                        <li>The partial equilibrium analysis</li>
                        <li>
                          The general equilibrium analysis without explicitly
                          defined households to enhance students' basic
                          analytical ability in economics
                        </li>
                      </ol>
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac3-31"></InputAcChild>
                  <LabelAcChild for="ac3-31">
                    Specialized Advanced Lecture (Human Resource Management I)
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This class aims to increase students understanding and
                      awareness of HR management especially people developing
                      leadership. We will also look at cross cultural
                      management, organizational behaviors and human factors
                      affect those aspects. Case studies are used. Guest speaker
                      will be invited. More detailed syllabus will be
                      distributed during Introduction. Active participation of
                      the students is required. We will encourage students to
                      engage in personal project and write a report at the end
                      of the term. This lecture aims to foster the voluntary
                      exploration ability of the students.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac3-32"></InputAcChild>
                  <LabelAcChild for="ac3-32">
                    Specialized Advanced Lecture (Income Theory II){" "}
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      An economy consists of households, firms and government.
                      The market is a manmade device to connect them to each
                      other. Income theory has been serving as a tool to analyze
                      the determination of national income, economic growth and
                      the reasons for its fluctuation. This course is intending
                      not only to promote understanding the core of income
                      theory but to enhance a sense of analytical ability and
                      practical applications of income theory toward the real
                      world.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac3-33"></InputAcChild>
                  <LabelAcChild for="ac3-33">
                    Specialized Advanced Lecture (Industrial Organization A){" "}
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      The aim of this course is to provide students with how to
                      conduct research in Industrial Organization. In
                      particular, it deals with firms' behavior (on pricing and
                      other related activities) under oligopolistic competition.
                      The emphasis will be placed on how to throw a good
                      research question, and how to combine knowledge on
                      industry, data, economic theory, and econometrics.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac3-34"></InputAcChild>
                  <LabelAcChild for="ac3-34">
                    Specialized Advanced Lecture (International Accounting A)
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      The lecture is intended to provide an opportunity for
                      students to learn and understand international aspects of
                      accounting.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac3-35"></InputAcChild>
                  <LabelAcChild for="ac3-35">
                    Specialized Advanced Lecture (Introduction to Empirical
                    Research II){" "}
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      The course is designed to provide the necessary research
                      tools to analyze real-life problems in which a data set is
                      collected as a cross section. Through a combination of
                      theory and data, we will learn the restrictive assumptions
                      that support the consistent estimation in the simple
                      regression model, and how to proceed when these
                      assumptions do not hold in our dataset.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac3-36"></InputAcChild>
                  <LabelAcChild for="ac3-36">
                    Specialized Advanced lecture (Introduction to Empirical
                    Research I)
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This course covers the basics of empirical research. After
                      completing the course, it is expected that students will
                      have a) basic skills of empirical research, and b)
                      experience in designing a research proposal and
                      undertaking a small research project in the field. As this
                      course is to be provided in an interactive way, students
                      are required to participate actively in class.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac3-37"></InputAcChild>
                  <LabelAcChild for="ac3-37">
                    Specialized Advanced Lecture (Introduction to Global
                    Management){" "}
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This workshop examines the current global economy and
                      global management of various issues, such as corporate
                      management, global human resources management and global
                      trade and environmental issues. By inviting guest speakers
                      from several global companies, we will review the hands-on
                      activities of those companies in the global economy. By
                      reviewing Japanese economic history we will try to
                      understand the essential conditions for economic
                      development and globalization. This class aims to foster
                      voluntary exploration ability through discussion and
                      individual / group project presentation.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac3-38"></InputAcChild>
                  <LabelAcChild for="ac3-38">
                    Specialized Advanced Lecture (Japanese Human Resources
                    Management)
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This class looks at how Japanese companies are managed
                      from human resources aspects. We will introduce Japanese
                      business ethics and several successful businessmen. We
                      also look at Leadership manifested in Japanese companies.
                      Case studies are used. More detailed syllabus will be
                      distributed during Introduction. Active participation of
                      the students is required. We will organize group
                      discussion, group study and group presentation at the end
                      of the term. This lecture aims to foster the voluntary
                      exploration ability through group discussion and
                      presentation.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac3-39"></InputAcChild>
                  <LabelAcChild for="ac3-39">
                    Specialized Advanced Lecture (Law and Economics){" "}
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This course is organized by faculty of Economics jointly
                      with faculty of Law to promote theoretical and practical
                      understandings of legal regulations imposed on economic
                      activities. This course is intending to enhance the
                      ability to apply economic theory toward understanding
                      practical effects of legislation.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac3-40"></InputAcChild>
                  <LabelAcChild for="ac3-40">
                    Specialized Advanced Lecture(Advanced Income Theory I){" "}
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This course is designed to build your research ability by
                      providing particularly important methodological skills
                      that are often used in modern macroeconomic research. In
                      particular, we shall focus on{" "}
                      <ol>
                        <li>
                          difference equations for describing variables that
                          evolve over time, and
                        </li>
                        <li>
                          dynamic optimization for describing the optimal
                          allocation of resources over time.
                        </li>
                      </ol>
                    </p>
                  </DivAcChildContent>
                </DivAcParentContent>
                <InputAcParent type="checkbox" id="ac4"></InputAcParent>
                <LabelAcParent for="ac4">
                  Informatics and Sciences
                </LabelAcParent>
                <DivAcParentContent>
                  <InputAcChild type="checkbox" id="ac4-0"></InputAcChild>
                  <LabelAcChild for="ac4-0">
                    Exercise in Mathematical Informatics{" "}
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      With a focus on calculus and linear algebra, lectures and
                      exercises are conducted in order to equip students with
                      the fundamental mathematical skills and theoretical
                      thinking capabilities necessary to pursue studies of
                      subjects in the Mathematical Sciences and Informatics as
                      well as the School of Informatics and Sciences, which
                      require mathematical thinking abilities. Specifically,
                      work in linear algebra will revolve around matrix algebra,
                      linear systems of equations, linear dependence and
                      independence, linear spaces, linear mappings matrix
                      representation, and eigenvalue problems, and work in the
                      calculus field will include number sequences, continuous
                      functions, differentiation, integration, simple partial
                      differential equations, and multivariable integration.
                      Simple explanations of the abovementioned topics will be
                      provided during the first half of each class session, and
                      printouts containing practice problems will be distributed
                      and worked on individually by students during the second
                      half and submitted in report form during the next class
                      session.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac4-1"></InputAcChild>
                  <LabelAcChild for="ac4-1">
                    Informatics and Sciences Seminar in English 1
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This course utilizes movies, a type of media that enables
                      the most realistic English-language experiences possible
                      from visual and auditory standpoints. In addition to
                      thinking about themes in the movies and learning about the
                      cultures and customs of English-speaking countries,
                      repeated viewings provide training to help students learn
                      daily phrases and practice their listening skills.
                      Students also read portions of the original written works
                      and compare phrasing to that encountered in the movie
                      versions. In these ways, students are provided with
                      movie-based English-language learning that is both
                      enjoyable and effective.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac4-2"></InputAcChild>
                  <LabelAcChild for="ac4-2">
                    Informatics and Sciences Seminar in English 2
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      Students listen to folk songs, rock music and other music
                      in English to learn English-language pronunciation,
                      accentuation, pitch, and rhythm. Rather than focusing on
                      silent reading, this course emphasizes reading out loud to
                      teach natural, living English. Furthermore, students
                      analyze themes, individual forms of expression, and other
                      such aspects of these songs while thinking about the
                      historical backgrounds and changes in society described by
                      the music.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac4-3"></InputAcChild>
                  <LabelAcChild for="ac4-3">
                    Informatics and Sciences Seminar in English 3
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      Rapid improvements are being made in English-language
                      usage environments as our society becomes increasingly
                      information-oriented, and the utilization of websites to
                      improve English sentence-writing and communication
                      abilities is no longer a thing of mere speculation. This
                      course teaches the basics of relevant etiquette as well as
                      methods students can use to increase their abilities even
                      further as they engage in these new forms of learning.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac4-4"></InputAcChild>
                  <LabelAcChild for="ac4-4">
                    International Environment, Politics and Diplomacy
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This class examines how the United States of America was
                      able to secure its current global political and economic
                      leadership role in international society. Class sessions
                      involve examination of and explanations about the
                      historical developments of American diplomacy within the
                      wider realm of international government, of which an
                      understanding is necessary when pursuing studies in
                      contemporary American diplomacy.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac4-5"></InputAcChild>
                  <LabelAcChild for="ac4-5">
                    Logic (Theory of Computability)
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      Introduction to the theory of computability: We will study
                      questions like "what is computation?", "how do we define
                      compuatability", and "are there any noncompuatable
                      functions?". This serves as training in "logical
                      thinking".
                    </p>
                  </DivAcChildContent>
                </DivAcParentContent>
                <InputAcParent type="checkbox" id="ac5"></InputAcParent>
                <LabelAcParent for="ac5">Science</LabelAcParent>
                <DivAcParentContent>
                  <InputAcChild type="checkbox" id="ac5-0"></InputAcChild>
                  <LabelAcChild for="ac5-0">
                    Advanced Bioscience Laboratory I
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This course consists of laboratory modules that accompany
                      with specialized research seminars. Each module aims to
                      provide students with the fundamental knowledge and the
                      latest findings in a particular research area of
                      biological sciences and to help them to acquire basic and
                      advanced experimental skills and techniques used in the
                      specialized research field.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac5-1"></InputAcChild>
                  <LabelAcChild for="ac5-1">
                    Advanced Bioscience Laboratory II
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This course consists of laboratory modules that accompany
                      with specialized research seminars. Each module aims to
                      provide students with the fundamental knowledge and the
                      latest findings in a particular research area of
                      biological sciences and to help them to acquire basic and
                      advanced experimental skills and techniques used in the
                      specialized research field.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac5-2"></InputAcChild>
                  <LabelAcChild for="ac5-2">
                    Advanced Bioscience Laboratory III
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This course consists of laboratory modules that accompany
                      with specialized research seminars. Each module aims to
                      provide students with the fundamental knowledge and the
                      latest findings in a particular research area of
                      biological sciences and to help them to acquire basic and
                      advanced experimental skills and techniques used in the
                      specialized research field.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac5-3"></InputAcChild>
                  <LabelAcChild for="ac5-3">
                    Advanced Bioscience Laboratory IV
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This course consists of laboratory modules that accompany
                      with specialized research seminars. Each module aims to
                      provide students with the fundamental knowledge and the
                      latest findings in a particular research area of
                      biological sciences and to help them to acquire basic and
                      advanced experimental skills and techniques used in the
                      specialized research field.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac5-4"></InputAcChild>
                  <LabelAcChild for="ac5-4">
                    Advanced Bioscience Laboratory V
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This course consists of laboratory modules that accompany
                      with specialized research seminars. Each module aims to
                      provide students with the fundamental knowledge and the
                      latest findings in a particular research area of
                      biological sciences and to help them acquire basic and
                      advanced experimental skills and techniques used in the
                      specialized research field.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac5-5"></InputAcChild>
                  <LabelAcChild for="ac5-5">Agricultural Science</LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      We are beset by an array of global concerns such as the
                      depletion of food and energy resources, poverty and health
                      problems, and the destruction of the natural- and
                      living-environments. This course, by taking recent
                      developments in the field of life sciences, aims to
                      propose possible solutions to the above, through the
                      analysis of biological production, symbiosis, and frontier
                      technology in the field of bioscience.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac5-6"></InputAcChild>
                  <LabelAcChild for="ac5-6">Analytical Chemistry</LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      The purpose of this course is to teach students the
                      fundamentals of analytical chemistry, in preparation for
                      further studies. The course focuses mainly on classical,
                      but still widely used, wet chemical methods, combined with
                      an overview of the instrumental techniques used in
                      contemporary chemical analysis.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac5-7"></InputAcChild>
                  <LabelAcChild for="ac5-7">
                    Analytical Mechanics I
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This is the first of two Year II courses in analytical
                      mechanics. Its purposes are to gain a deeper
                      understanding, aided by basic vector calculus, of
                      Newtonian mechanics treated in Year I, and to introduce
                      the Lagrangian and Hamiltonian formulations of mechanics.
                      These formulations are then used in the solution of the
                      two-body central force problems. Comparisons will be made
                      between the approaches.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac5-8"></InputAcChild>
                  <LabelAcChild for="ac5-8">
                    Analytical Mechanics II
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This course consists of Part I and Part II. Part I treats
                      three further topics in mechanics: non-inertial
                      frames(particularly the use of the rotating frame to
                      analyze mechanics problems, such as the Foucault
                      pendulum), rigid bodies with a focus on spinning tops, and
                      collision theory leading to the Rutherford scattering
                      formula that supported his atomic model. In Part II, the
                      last one-third of the course, special relativity is
                      introduced.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac5-9"></InputAcChild>
                  <LabelAcChild for="ac5-9">Astrophysics</LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This course aims to understand the hierarchy and evolution
                      of the universe based on classical mechanics,
                      thermodynamics, statistical physics, electromagnetism,
                      atomic physics, nuclear physics, relativity, and quantum
                      mechanics.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac5-10"></InputAcChild>
                  <LabelAcChild for="ac5-10">Biochemistry I</LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This course provides students with a comprehensive
                      introduction to the chemical evolution of biomolecules and
                      their contributions to life. Topics discussed include the
                      origin of life; chemical and physical properties of water;
                      chemical, structural, and functional properties of
                      nucleotides, nucleic acids, amino acids, and proteins.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac5-11"></InputAcChild>
                  <LabelAcChild for="ac5-11">Biochemistry II</LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This course introduces students to the basic framework of
                      the chemical reactions of life. Topics covered include the
                      chemical and structural properties of carbohydrates and
                      lipids; membrane structure, assembly, and transport;
                      reaction kinetics and regulation of enzymes; hormones and
                      signal transduction pathways.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac5-12"></InputAcChild>
                  <LabelAcChild for="ac5-12">Biochemistry III</LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This course focused on the metabolisms of biomolecules
                      (Part IV, METABOLISM in the textbook), including
                      carbohydrates, lipids, amino acids/proteins, and nucleic
                      acids. The students learn the concept of free energy,
                      mechanism of ATP production, catabolism and anabolism of
                      biomolecules.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac5-13"></InputAcChild>
                  <LabelAcChild for="ac5-13">Biochemistry IV</LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This course is aimed at expanding students' knowledge in
                      the basics of gene expression and replication from
                      biochemical aspects, including metabolism, structure and
                      molecular function of DNA, RNA and related proteins.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac5-14"></InputAcChild>
                  <LabelAcChild for="ac5-14">Bioorganic Chemistry</LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      To understand what organic compounds are, including
                      biomolecules (primary metabolites) and natural products
                      (secondary metabolites), what are they composed of, and
                      how they react to produce another organic compound.
                      Biologically active small molecules, most of which are
                      organic compounds, are also introduced. Such knowledge is
                      the basis for applied chemistry and industry, for example,
                      in developing pharmaceuticals and pesticides.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac5-15"></InputAcChild>
                  <LabelAcChild for="ac5-15">Biophysics</LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      To understand the basics of biophysics, in which
                      biological phenomena are described in terms of physics
                      language.The course will cover the structure of
                      biomolecules (proteins, nucleic acids, membranes) before
                      introducing biophysical techniques (experimental and
                      computational) to characterize function/dynamics/folding
                      of these biomolecules.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac5-16"></InputAcChild>
                  <LabelAcChild for="ac5-16">
                    Bioscience Laboratory
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      The work of the course is done via a series of laboratory
                      exercises. The aims of this course are:{" "}
                      <ol>
                        <li>To provide factual and conceptual knowledge</li>
                        <li>
                          To develop experimental skills of students for
                          biological studies
                        </li>
                        <li>
                          To afford experience in obtaining and interpreting
                          biological hypotheses
                        </li>
                        <li>
                          To give an integrated overview of modern biology
                        </li>
                        <li>To develop thinking and writing skills.</li>
                      </ol>
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac5-17"></InputAcChild>
                  <LabelAcChild for="ac5-17">Cell Biology I</LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This course is expected to refresh and deepen students'
                      knowledge in basic cell organization, and is the beginning
                      of a series of courses on Cell Biology that will stretch
                      over a two-year period. The first part, Cell Biology 1,
                      concentrates on cell membrane structure and function as
                      well as basic genetic mechanisms. Students are expected to
                      become adept at using appropriate scientific terminology,
                      explain the basic cell biology concepts and be able to
                      analytically manipulate the information presented to solve
                      scientific problems.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac5-18"></InputAcChild>
                  <LabelAcChild for="ac5-18">Cell Biology II</LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This course will provide the essential concepts on how
                      plant and animal cells generate energy in order to carry
                      out biological processes and sustain life. Furthermore,
                      the mechanisms of intracellular transport and how cells
                      respond to the environment will be discussed in detail.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac5-19"></InputAcChild>
                  <LabelAcChild for="ac5-19">Cell Biology III</LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This course covers basic topics in cell biology. Students
                      who successfully complete this course will understand
                      fundamental biological phenomena at the molecular and
                      cellular levels that include the cytoskeletal systems,
                      mitosis and meiosis, and intercellular communications in
                      multicellular organisms. They will develop insights into
                      the complexities of cell structure and function, the
                      underlying molecular events, the dynamic properties of
                      living cells, and how these contribute to the generation
                      and functioning of the whole organism.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac5-20"></InputAcChild>
                  <LabelAcChild for="ac5-20">Cell Biology IV</LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This course covers advanced topics in molecular cell
                      biology, including application and methods. Students will
                      learn how research on molecular cell biology is achieved
                      with advanced technology in the particular areas of cancer
                      cells, membrane traffic, ion transport, biomedicines, live
                      cell imaging, etc.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac5-21"></InputAcChild>
                  <LabelAcChild for="ac5-21">Chemical Physics</LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      The purpose of this course is to learn the physical basis
                      of chemical phenomena such as phase and chemical
                      equilibrium, and chemical kinetics. Advanced topics will
                      be shown depending on the progress.{" "}
                      <ol>
                        <li>Review of basic thermodynamics</li>
                        <li>Thermodynamics of multi-component systems</li>
                        <li>Chemical equilibrium</li>
                        <li>Phase equilibrium</li>
                        <li>Chemical kinetics</li>
                        <li>Advanced topics</li>
                      </ol>
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac5-22"></InputAcChild>
                  <LabelAcChild for="ac5-22">Chemistry Laboratory</LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      The purpose of this course is to learn how to efficiently
                      perform experiments about biochemistry, bioinorganic
                      chemistry, physical chemistry, analytical chemistry,
                      inorganic chemistry, and organic chemistry in a detailed
                      manner including careful note-taking of the procedures,
                      findings, and questions that may arise from the
                      experiments.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac5-23"></InputAcChild>
                  <LabelAcChild for="ac5-23">
                    Chemistry of Inorganic Materials I
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      The purpose of this course is to understand the basic
                      concepts in processing and characterization of inorganic
                      materials through crystal structures, amorphous
                      structures, lattice defects and chemical reactions
                      relating to the stabilities-phase relations-synthesis of
                      inorganic solids.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac5-24"></InputAcChild>
                  <LabelAcChild for="ac5-24">
                    Chemistry of Inorganic Materials II
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      The purpose of this course is to understand the chemical
                      and physical properties of various inorganic materials,
                      their functions, and their applications.{" "}
                      <ol>
                        <li>Crystal structures of inorganic solids</li>
                        <li>Bonding in inorganic solids and properties</li>
                        <li>Defects and non-stoichiometry</li>
                        <li>
                          Electrical properties of solids and their applications
                        </li>
                        <li>
                          Magnetic properties of solids and their applications
                        </li>
                        <li>
                          Optical properties of solids and their applications
                        </li>
                        <li>
                          Thermal properties and mechanical properties of
                          materials
                        </li>
                        <li>Structural materials and composite materials</li>
                        <li>Inorganic materials in biology and medicine</li>
                        <li>
                          Functional materials and their properties control
                        </li>
                        <li>Material engineering for environmental issues</li>
                        <li>Nanoscience (nanomaterials)</li>
                      </ol>
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac5-25"></InputAcChild>
                  <LabelAcChild for="ac5-25">Chemistry Seminar I</LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This course caters to students in the Chemistry major to
                      help them understand and learn the basic knowledge of
                      organic chemistry, biochemistry, inorganic/analytical
                      chemistry and physical chemistry.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac5-26"></InputAcChild>
                  <LabelAcChild for="ac5-26">Chemistry Seminar II</LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This course caters to students in the Chemistry major to
                      help them understand and learn the basic knowledge of
                      organic chemistry, biochemistry, inorganic/analytical
                      chemistry and physical chemistry.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac5-27"></InputAcChild>
                  <LabelAcChild for="ac5-27">
                    Computational Chemistry
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      "How can computers help with Chemistry?" The purpose of
                      this course is to introduce computer science from a
                      chemist's perspective. The course begins with an
                      introduction to the basic use of computers for data search
                      and molecular structure and spectroscopic visualization.
                      It then introduces the programming language FORTRAN 90 on
                      a Macintosh computer as a way to solve simple scientific
                      problems in an efficient way.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac5-28"></InputAcChild>
                  <LabelAcChild for="ac5-28">Computer Software I</LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      The purpose of this course is to provide basic computer
                      literacy skills and basic computer programming techniques
                      for solving various problems in the C language through
                      exercises.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac5-29"></InputAcChild>
                  <LabelAcChild for="ac5-29">Computer Software II</LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      Building on the knowledge gained in Computer Software I,
                      students will acquire advanced programming skills through
                      C-programming exercises. Advanced programming includes
                      functions, arrays, string operations, structures, I/O,
                      pointers, complex data structures, and large-scale
                      programming. In the latter part of the course, students
                      will acquire the skills to create practical large-scale
                      programs utilizing several advanced programming tools.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac5-30"></InputAcChild>
                  <LabelAcChild for="ac5-30">
                    Condensed Matter Physics I
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      The goal of this course is to learn about the fundamental
                      theories related to the behavior of electrons and atoms in
                      solids and about the mechanism of some of the most
                      important properties solids exhibit, including electrical,
                      thermal, mechanical and magnetic properties.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac5-31"></InputAcChild>
                  <LabelAcChild for="ac5-31">
                    Condensed Matter Physics II
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      The goal of this course is to learn about the fundamental
                      theories related to the behavior of electrons and atoms in
                      solids and about the mechanism of some of the most
                      important properties solids exhibits, including
                      electrical, thermal, and mechanical properties.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac5-32"></InputAcChild>
                  <LabelAcChild for="ac5-32">
                    Condensed Matter Physics III
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      The purpose of this course is to show the students
                      cutting-edge research in condensed-matter physics and to
                      motivate them to study this rich and fertile research
                      area. This course also aims at reviewing fundamental
                      physics such as electromagnetism, statistical physics, and
                      quantum mechanics through various aspects of advanced
                      materials. Each lecture is covered by a different
                      professor, and the students can grasp various research
                      frontiers throughout the course.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac5-33"></InputAcChild>
                  <LabelAcChild for="ac5-33">
                    Current Organic and Polymer Chemistry
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      The purpose of this course is to present an overview of
                      cutting-edge organic chemistry, and learn important
                      principles and facets of modern chemistry. The course
                      includes sophisticated catalysts and reagents
                      (organic-based and metal-based) for making useful
                      compounds, designer functional organic molecules with
                      various optoelectronic properties, and synthesis of
                      natural products and biologically active complex
                      molecules.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac5-34"></InputAcChild>
                  <LabelAcChild for="ac5-34">
                    Earth and Planetary Sciences
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      In this course students will learn about the
                      characteristics of the planets and other components of our
                      solar system (orbital parameters, atmospheric conditions,
                      internal structure and composition, geomorphology,
                      geological activity). We will use the knowledge of our own
                      planet Earth as a reference to understand processes
                      occurring elsewhere. During the past fifty years, various
                      spacecrafts and exploration vehicles have been used to
                      considerably expand our knowledge of the solar system and
                      send back to Earth ever more detailed pictures of distant
                      worlds. The course will review the different means of
                      space exploration and use abundant data acquired by past
                      and ongoing missions to illustrate the characteristics of
                      the planets. A recurrent topic throughout the course will
                      be the fascinating question of the existence of
                      extraterrestrial life and its detection. We will also
                      discuss the future of space exploration.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac5-35"></InputAcChild>
                  <LabelAcChild for="ac5-35">
                    Electricity and Magnetism
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This course is a solid introduction to electrostatics and
                      magnetostatics. Maxwell's Equations are derived. The
                      course also introduces students to fundamental
                      mathematical methods required to solve problems in
                      physics, engineering and applied mathematics.
                    </p>
                    ,{" "}
                    <p>
                      This course has two pedagogical aims: 1. to convey
                      physical principles 2. to improve students' technical
                      ability i.e. ability to express physical intuition in
                      mathematical terms and ability to solve problems.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac5-36"></InputAcChild>
                  <LabelAcChild for="ac5-36">
                    Electromagnetic Materials
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      Building on Quantum Mechanics 2, students will learn
                      quantum mechanics at an advanced undergraduate level. The
                      course will build physical intuition of Hilbert space and
                      Nature on the quantum scale while improving students'
                      ability to express physical intuition in mathematical
                      terms and to solve problems. Students will be adequately
                      prepared with regards to their knowledge of quantum
                      mechanics to undertake further studies in S-lab, E-lab,
                      V-lab, R-lab, TB-lab and other labs in both the Department
                      of Physics and Department of Applied Physics at Nagoya
                      University. Students from other disciplines such as
                      Chemistry can also benefit from the deep treatment of
                      quantum phenomena.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac5-37"></InputAcChild>
                  <LabelAcChild for="ac5-37">
                    Environmental Earth Sciences
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      Never before have had humans such a profound impact on the
                      Earth. The world population exceeds 7 billion and is
                      growing steadily. Industrial and technological needs for
                      energy and mineral resources are increasing every year. In
                      this course, we will see how humanity is changing the
                      environment. In particular we will explore climate change
                      in the geological past and the relationships between human
                      activities and climate today. The students will also learn
                      about the nature and usefulness of geological resources
                      and the environmental threats posed by petroleum and
                      mineral industries. Finally, we will reflect on the
                      opportunities and challenges for a sustainable use of
                      geological resources.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac5-38"></InputAcChild>
                  <LabelAcChild for="ac5-38">
                    Fluid Mechanics and Tutorial
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      The purpose of this course is to understand the
                      fundamental characteristics of fluid motions applied to
                      many areas of fluid mechanics and learn the physical laws
                      governing them. Students will:{" "}
                      <ol>
                        <li>
                          Understand the properties, basic principles, and
                          concepts of fluids.
                        </li>
                        <li>
                          Learn about the basic equations derived from above,
                          i.e. continuity equation, motion equation, and energy
                          equation, and be able to use them in calculations.
                        </li>
                        <li>
                          Comprehend the aspects and properties of fluids
                          conceptually utilizing the engineering observations of
                          practical examples.
                        </li>
                      </ol>
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac5-39"></InputAcChild>
                  <LabelAcChild for="ac5-39">
                    Fundamental Physics Tutorial Ia
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This is a companion course to Fundamental Physics I, a
                      course in basic, calculus-based physics, and offers
                      practical exercises for mastering the concepts introduced
                      in the lecture courses. Students taking the lecture
                      courses should also take this tutorial class.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac5-40"></InputAcChild>
                  <LabelAcChild for="ac5-40">
                    Fundamental Physics Tutorial Ib
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This is a companion course to Fundamental Physics II, and
                      offers practical exercises for mastering the concepts
                      introduced in the lecture courses. Students taking the
                      lecture courses should also take this tutorial class.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac5-41"></InputAcChild>
                  <LabelAcChild for="ac5-41">
                    Fundamental Physics Tutorial IIa
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      The aims of this course are to deepen students'
                      understanding of basic Physics of electricity and
                      magnetism and to cultivate their ability to apply Physics
                      knowledge.{" "}
                      <ol>
                        <li>Electric Charge and Electric Fields</li>
                        <li>Gauss' Law</li>
                        <li>Electric Potential</li>
                        <li>Capacitance, Current, Resistance and Circuits</li>
                        <li>Magnetic Fields</li>
                        <li>Induction and Inductance</li>
                      </ol>
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac5-42"></InputAcChild>
                  <LabelAcChild for="ac5-42">
                    Fundamental Physics Tutorial IIb
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      The aims of this course are to deepen students'
                      understanding of basic Physics of waves and optics, and to
                      cultivate their ability to apply Physics knowledge.{" "}
                      <ol>
                        <li>Oscillations</li>
                        <li>Introduction to Maxwell's Equations</li>
                        <li>Waves</li>
                        <li>Electromagnetic Waves</li>
                        <li>Images</li>
                        <li>Interference &amp; Diffraction</li>
                      </ol>
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac5-43"></InputAcChild>
                  <LabelAcChild for="ac5-43">Genetics I</LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This course will refresh and deepen the basic knowledge of
                      genetics, and is the beginning of a series of courses on
                      Genetics that will stretch over a two-year period.
                      Students will learn fundamental processes of how genetic
                      information can be inherited rigidly and flexibly from
                      generation to generation. Students are expected to become
                      adept at using appropriate scientific terminology, explain
                      the basic genetics concepts and be able to analytically
                      manipulate this information.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac5-44"></InputAcChild>
                  <LabelAcChild for="ac5-44">Genetics II</LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This course aims to introduce students to fundamental
                      molecular mechanisms underlying expression of the genome.
                      The entire course will discuss the molecular and
                      regulatory mechanisms of transcription, RNA processing,
                      translation in both bacterial and eukaryotic cells, and
                      the principle and universality of the genetic code.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac5-45"></InputAcChild>
                  <LabelAcChild for="ac5-45">Genetics III</LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This course introduces the principles of molecular
                      genetics. Topics: Regulation of gene expression, genomics,
                      systems biology, and methodology. Lectures will be given
                      by 4 faculty members from the Division of Biological
                      Science.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac5-46"></InputAcChild>
                  <LabelAcChild for="ac5-46">Graduation Research</LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      Students belong to each laboratory and do studies to
                      conduct experiments for graduation.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac5-47"></InputAcChild>
                  <LabelAcChild for="ac5-47">
                    Graduation Research in Bioscience
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This research-based course aims to allow undergraduate
                      students to be involved in cutting-edge creative research
                      in biological sciences. All students will devote their
                      final year entirely to executing an original and
                      independent research project in a research laboratory of
                      the Department of Biological Sciences, writing a thesis on
                      their results, and presenting it at the graduation
                      research symposium. The course also provides students with
                      a unique opportunity to understand both practical and
                      ethical features of research laboratories.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac5-48"></InputAcChild>
                  <LabelAcChild for="ac5-48">
                    Graduation Research-Experiments
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      Every student in this course belongs to one of the
                      experimental-physics laboratories in the Department of
                      Physics (Elementary Particles,Astrophysics,Condensed
                      Matter Physics,Biophysics) and conducts an experiment
                      provided by the laboratory for one year.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac5-49"></InputAcChild>
                  <LabelAcChild for="ac5-49">
                    Graduation Research-Theoretical studies
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      Every student in this course belongs to one of the
                      theoretical-physics laboratories
                      (Particles,Astrophysics,Condensed Matter
                      Physics,Biophysics). They study subjects in the laboratory
                      year-round.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac5-50"></InputAcChild>
                  <LabelAcChild for="ac5-50">
                    Inorganic Chemistry I
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      The purpose of the course is to present the fundamental
                      concepts and chemical principles of inorganic chemistry.
                      This course is the first part of a three-semester sequence
                      in inorganic chemistry, and deals with the basic
                      principles including electronic structures, orbital,
                      chemical bonds, and acids/bases.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac5-51"></InputAcChild>
                  <LabelAcChild for="ac5-51">
                    Inorganic Chemistry II
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      The purpose of the course is to present the fundamental
                      concepts and chemical principles of inorganic chemistry.
                      This course is the second part of a three-semester
                      sequence in inorganic chemistry, and deals with the
                      chemistry of main group elements.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac5-52"></InputAcChild>
                  <LabelAcChild for="ac5-52">
                    Inorganic Chemistry III
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      The purpose of the course is to present the fundamental
                      concepts and the chemical principles of inorganic
                      chemistry. This course is the third part of a
                      three-semester sequence in inorganic chemistry, and deals
                      with the chemistry of transition elements as well as
                      related subjects.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac5-53"></InputAcChild>
                  <LabelAcChild for="ac5-53">
                    Mathematical Physics I
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This is a companion course to Mathematical Physics II.
                      This course introduces first order and second order
                      ordinary differential equations and their solution
                      methods. Students master analytical techniques for
                      problems that arise in Physics, Engineering and Chemistry.
                      Questions of uniqueness of solutions and convergence are
                      also discussed. Students are also introduced to Fourier
                      series, the Fourier transform, Laplace transform, and the
                      Dirac delta function. Students will find this mathematical
                      methods course helpful in other units such as Quantum
                      Mechanics, Analytical Mechanics, Electricity and
                      Magnetism, as well as in Automotive Engineering and other
                      engineering courses. This course has two aims:{" "}
                      <ol>
                        <li>to convey mathematical principles</li>
                        <li>
                          to improve students' technical ability i.e., ability
                          to express intuition in mathematical terms and ability
                          to solve problems.
                        </li>
                      </ol>
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac5-54"></InputAcChild>
                  <LabelAcChild for="ac5-54">
                    Mathematical Physics II
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      The purpose of the course is to acquire fundamental
                      knowledge in vector analysis and partial differential
                      equations and enable students to apply it to solve actual
                      engineering issues through intensive exercises.{" "}
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac5-55"></InputAcChild>
                  <LabelAcChild for="ac5-55">
                    Mathematical Physics Tutorial I
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      Students taking Mathematical Physics I should also take
                      this tutorial class. This course introduces first order
                      and second order ordinary differential equations and their
                      solution methods. Students master exact and approximate
                      analytical techniques for initial value problems that
                      arise in physics, engineering and chemistry. Questions of
                      existence, uniqueness and convergence are also discussed.
                      Fourier series follow naturally from the 2nd order theory
                      and these are investigated, too.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac5-56"></InputAcChild>
                  <LabelAcChild for="ac5-56">
                    Mathematical Physics Tutorial II
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      Building on the mathematics and physics knowledge gained
                      in Fundamental Major Subjects, this course introduces
                      students to vector analysis and partial differential
                      equations, expecting their applications to advanced
                      engineering, such as those related to mechanics and
                      electromagnetics, and those to materials and heat transfer
                      phenomena. The purpose of the course is to acquire
                      fundamental knowledge in vector analysis and partial
                      differential equations and enable students to apply it to
                      solve actual engineering issues through intensive
                      exercises.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac5-57"></InputAcChild>
                  <LabelAcChild for="ac5-57">
                    Mathematics Tutorial Ia
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      The aim of this course is to deepen students'
                      understanding of calculus and to cultivate the ability to
                      apply mathematical knowledge. The course is mainly
                      intended for students taking Calculus I.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac5-58"></InputAcChild>
                  <LabelAcChild for="ac5-58">
                    Mathematics Tutorial Ib
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      The aim of this course is to deepen students'
                      understanding of Linear algebra and to cultivate the
                      ability to apply mathematical knowledge. The course is
                      mainly intended for students taking Linear Algebra I.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac5-59"></InputAcChild>
                  <LabelAcChild for="ac5-59">
                    Mathematics Tutorial IIa
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      The aim of this course is to deepen the understanding of
                      calculus and to cultivate the ability to apply
                      mathematical knowledge. The course is mainly intended for
                      students taking Calculus II.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac5-60"></InputAcChild>
                  <LabelAcChild for="ac5-60">
                    Mathematics Tutorial IIb
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      The aim of this course is to provide essential
                      mathematical knowledge necessary to further study
                      mathematics and other sciences at the university level.
                      The course is intended for students taking Linear Algebra
                      II.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac5-61"></InputAcChild>
                  <LabelAcChild for="ac5-61">
                    Mechanics of Continuous Media
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      The purpose of this course is to gain an understanding of
                      the basic idea underlying the macroscopic view of the
                      mechanics of continuous media, particularly fluid
                      mechanics. Emphasis is placed on the conservation laws of
                      mass and momentum, and on how to use these in practice.
                      Course objectives include the followings:{" "}
                      <ol>
                        <li>
                          understanding basic concepts underlying the mechanics
                          of continuous media
                        </li>
                        <li>the acquisition of calculus skills</li>
                        <li>understanding the idea of the macroscopic view.</li>
                      </ol>
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac5-62"></InputAcChild>
                  <LabelAcChild for="ac5-62">Microbiology</LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This course aims to help students to understand diversity
                      of the microbial world in view of phylogeny, habitats, and
                      metabolism. Starting with basic knowledge on Microbiology
                      including molecular biological and genetic aspects, the
                      main focus will be put on metabolic diversity, which is
                      followed by brief introduction to Applied Microbiology.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac5-63"></InputAcChild>
                  <LabelAcChild for="ac5-63">Optics</LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      To understand the properties of light and various
                      interactions between light and matters, and acquire basic
                      knowledge about optical devices to control the light and
                      basic skills for optics. Outcomes:{" "}
                      <ol>
                        <li>
                          The ability to explain the reflection, refraction and
                          propagation of light on basis of the knowledge of
                          electromagnetic waves in matters and polarization of
                          light.
                        </li>
                        <li>
                          The ability to explain the interaction between light
                          and matters using a classical model of atoms.{" "}
                        </li>
                        <li>
                          The ability to explain the light emission and the
                          principle of lasers.
                        </li>
                      </ol>
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac5-64"></InputAcChild>
                  <LabelAcChild for="ac5-64">Organic Chemistry I</LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      The main purpose of this course is to acquire a logical
                      framework for understanding fundamental organic chemistry.
                      This framework emphasizes how the structures of organic
                      molecules are related to the molecular functions in
                      chemical reactions. On the basis of the knowledge, we
                      learn how to solve practical problems in organic
                      chemistry.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac5-65"></InputAcChild>
                  <LabelAcChild for="ac5-65">Organic Chemistry II</LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      The main purpose of this course is to acquire a logical
                      framework for understanding fundamental organic chemistry.
                      Many chemical reactions of organic compounds begin with
                      nucleophile-electrophile interactions. This framework
                      provides an influence for chemical reactions of the
                      organic molecules having π-bonds. On the basis of the
                      knowledge, we consecutively learn how to solve practical
                      problems in organic chemistry.{" "}
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac5-66"></InputAcChild>
                  <LabelAcChild for="ac5-66">
                    Organic Chemistry III
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      The main purpose of this course is to acquire a logical
                      framework for understanding fundamental organic chemistry.
                      This framework provides an influence for the reactions of
                      the organic compounds having important functional groups,
                      such as hydroxyl, carbonyl, and amino groups and the
                      reactions of their derivatives. On the basis of the
                      knowledge, we consecutively learn how to solve practical
                      problems in organic chemistry.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac5-67"></InputAcChild>
                  <LabelAcChild for="ac5-67">Organic Chemistry IV</LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      The main purpose of this course is to acquire a logical
                      framework for understanding advanced organic chemistry.
                      The course begins with condensations of carbonyl and amine
                      coupounds and moves on to the reactions comprising
                      migration steps. Heterocyclic chemistry and organometallic
                      chemistry are rapidly-expanding fields, which we shall
                      study. Organometallic compounds that incorporate
                      carbon-metal bonds function as powerful necleophiles. Such
                      compounds have been widely used for effective synthetic
                      transformation. Replacement of the first metal can
                      activate or control the reactivity of chemical reactions.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac5-68"></InputAcChild>
                  <LabelAcChild for="ac5-68">Organic Chemistry V</LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      Main purpose of this course is to learn organic
                      spectroscopy for structure determination and property
                      analysis of organic compounds. The course begins with
                      theoretical aspects of spectral techniques (NMR, UV, IR,
                      Raman, Mass, and so on ), and later moves on to solving
                      structure from spectra-type problems. In addition, the
                      course also covers problem-solving with regard to organic
                      reactions in an effort to reinforce student's
                      understanding of the structure/function of organic
                      molecules.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac5-69"></InputAcChild>
                  <LabelAcChild for="ac5-69">Particle Physics</LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      The purpose of this course is for students to learn basic
                      concepts of particle physics through the introduction to
                      recent developments of research activities.(Hadron
                      physics,The standard model in particle physics,The origin
                      of mass: Electroweak symmetry breaking,Models of grand
                      unified theories,Superstring theory,Gravity,Motion of
                      Objects in Curved Spacetimes,Neutron physics,Tau Physics,B
                      physics,Neutrino physics,LHC physics,Dark matter)
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac5-70"></InputAcChild>
                  <LabelAcChild for="ac5-70">
                    Perspectives in Mathematical Science III{" "}
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This course is designed to be one of the English courses
                      the Graduate School of Mathematics provides for graduate
                      and undergraduate students not only from foreign countries
                      but also domestic students who wish to study abroad or to
                      communicate with foreign scientists in English. All course
                      activities including lectures, homework assignments,
                      questions and consultations are in English. The purpose is
                      to introduce and explain various concepts and methods in
                      mathematical sciences.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac5-71"></InputAcChild>
                  <LabelAcChild for="ac5-71">
                    Perspectives in Mathematical Science IV
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This course is designed to be one of the English courses
                      which the Graduate School of Mathematics is providing for
                      graduate and undergraduate students not only from foreign
                      countries but also domestic students who wish to study
                      abroad or to communicate with foreign scientists in
                      English. All course activities including lectures,
                      homework assignments, questions and consultations are in
                      English. The purpose of this course is to introduce and
                      explain the various methods in mathematical science. This
                      year, the course is provided by 3 instructors. Each
                      instructor covers different subjects from various aspects
                      of mathematics.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac5-72"></InputAcChild>
                  <LabelAcChild for="ac5-72">Physical Chemistry I</LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      The purpose of this course is to learn what physical
                      chemistry is all about and to grasp important principles
                      and facts about physical chemistry. The course begins with
                      perfect gas law, proceeds to thermodynamics, and ends with
                      applications of thermodynamics to simple mixtures.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac5-73"></InputAcChild>
                  <LabelAcChild for="ac5-73">
                    Physical Chemistry II
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      The purpose of this course is to learn what physical
                      chemistry is all about and to grasp important principles
                      and facts about physical chemistry. The focus is on
                      statistical thermodynamics and its applications. The
                      course ends with a study of kinetics and dynamics of
                      chemical reactions.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac5-74"></InputAcChild>
                  <LabelAcChild for="ac5-74">Physics Laboratory I</LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      In physics, a theoretical hypothesis is accepted only when
                      it is verified by experiments or observations.{" "}
                    </p>
                    ,{" "}
                    <p>
                      Students learn the importance of experimental physics by
                      manipulating equipment and measuring various signals with
                      high precision.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac5-75"></InputAcChild>
                  <LabelAcChild for="ac5-75">
                    Physics Laboratory II
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      In physics, a theoretical hypothesis is accepted only when
                      it is verified by experiments or observations.{" "}
                    </p>
                    ,{" "}
                    <p>
                      Students learn the importance of experimental physics by
                      manipulating equipment and measuring various signals with
                      high precision.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac5-76"></InputAcChild>
                  <LabelAcChild for="ac5-76">Physics Seminar I</LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      The purpose of this course is to cultivate discussion and
                      presentation skills through a seminar on some specific
                      subject in physics. To cultivate logical thinking in
                      physics students are required to read an assigned part of
                      a text and prepare for presentation on the contents in
                      advance. In the class, students explain their own
                      understanding of the assigned part to other students in
                      turn and discuss it with each other.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac5-77"></InputAcChild>
                  <LabelAcChild for="ac5-77">Physics Seminar II</LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      The purpose of this course is to cultivate discussion and
                      presentation skills through a seminar on some specific
                      subject in physics. To cultivate logical thinking in
                      physics students are required to read an assigned part of
                      a text and prepare for presentation on the contents in
                      advance. In the class, students explain their own
                      understanding of the assigned part to other students in
                      turn and discuss it with each other.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac5-78"></InputAcChild>
                  <LabelAcChild for="ac5-78">Physics Tutorial Ia</LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      The aim of this course is to:{" "}
                      <ol>
                        <li>
                          Support the lecture course of Analytical Mechanics I.
                        </li>
                        <li>
                          Gain a deeper understanding about Analytical Mechanics
                          I.
                        </li>
                        <li>
                          Cultivate the ability to analyze and solve problems
                          through solving problems assigned in the lecture.{" "}
                        </li>
                        <li>
                          Cultivate discussion skills so as to participate
                          effectively in tutorial discussions among peers and
                          instructor.
                        </li>
                      </ol>
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac5-79"></InputAcChild>
                  <LabelAcChild for="ac5-79">Physics Tutorial Ib</LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      The purpose of this course is to deepen students'
                      understanding of thermodynamics/statistical physics 1, and
                      cultivate their calculation skills by solving basic
                      problems. Students will solve basic problems under faculty
                      guidance.{" "}
                      <ol>
                        <li>Thermal Equilibrium and Temperature</li>
                        <li>
                          State Equations, Partial Differentials, Units and
                          Dimensions
                        </li>
                        <li>
                          The First Law of Thermodynamics (energy, isothermal
                          and adiabatic processes)
                        </li>
                        <li>The Second Law of Thermodynamics</li>
                        <li>Entropy</li>
                        <li>Thermodynamic Functions</li>
                        <li>Phase Equilibrium and Chemical Equilibrium</li>
                        <li>Kinetic Theory and Statistical Mech</li>
                      </ol>
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac5-80"></InputAcChild>
                  <LabelAcChild for="ac5-80">Physics Tutorial IIa</LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This is a companion course to Quantum Mechanics 1 and
                      Electricity and Magnetism and offers practical exercises
                      for mastering the concepts introduced in these lectures.
                      Tutorials will alternate between these two lecture courses
                      i.e. Quantum Mechanics 1
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac5-81"></InputAcChild>
                  <LabelAcChild for="ac5-81">Physics Tutorial IIb</LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      The aim of this course is to:{" "}
                      <ol>
                        <li>
                          Support the lecture course of Analytical Mechanics II.
                        </li>
                        <li>
                          Gain a deeper understanding about Analytical Mechanics
                          II.
                        </li>
                        <li>
                          Cultivate the ability to analyze and solve problems
                          through solving problems assigned in the lecture.{" "}
                        </li>
                        <li>
                          Cultivate discussion skills so as to participate
                          effectively in tutorial discussions among peers and
                          instructor.
                        </li>
                      </ol>
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac5-82"></InputAcChild>
                  <LabelAcChild for="ac5-82">Physics Tutorial III</LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This is a companion course to Quantum Mechanics II and
                      Statistical Physics II, and offers practical exercises for
                      mastering the concepts introduced in the lecture courses.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac5-83"></InputAcChild>
                  <LabelAcChild for="ac5-83">Physics Tutorial IV</LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      The purpose of this course is to cultivate students'
                      calculation skills and deepen their understanding of
                      statistical physics. Students learn to apply the
                      principles and methods taught in the lecture to analyze
                      and solve problems under the guidance of the instructor.
                      It is strongly recommended that students participate
                      actively in class discussions. They are required to hand
                      in regular weekly assignments.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac5-84"></InputAcChild>
                  <LabelAcChild for="ac5-84">
                    Physiology and Anatomy I
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This course is designed as a continuation of the Animal
                      anatomy and physiology module in Fundamentals of Biology
                      2. Students will deepen their knowledge of animal
                      physiology and understanding of the normal function of
                      tissues and organ systems. Students are expected to become
                      adept at using appropriate scientific terminology, explain
                      the basic physiology concepts and be able to analytically
                      manipulate the information presented to solve scientific
                      problems.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac5-85"></InputAcChild>
                  <LabelAcChild for="ac5-85">
                    Physiology and Anatomy II
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This course introduces the principles of nervous system
                      organization and function. Structures and mechanisms
                      underlying sensory perception and motor control are the
                      main focus of this course.{" "}
                      <ol>
                        <li>
                          Cellular anatomy and physiology: neurons, structure
                          and function
                        </li>
                        <li>Basic anatomy of the nervous system</li>
                        <li>Autonomic nervous system</li>
                        <li>
                          Sensory perception and integration 4.1 Visual system
                          4.2 Auditory and vestibular system 4.3 Somatosensory
                          system 4.4 Chemical senses
                        </li>
                        <li>
                          Motor control 5.1 Muscles, structure and function 5.2
                          Spinal reflexes (lower motor control) 5.3 Brain
                          control of movement (upper motor control, basal
                          ganglia and cerebellum)
                        </li>
                      </ol>
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac5-86"></InputAcChild>
                  <LabelAcChild for="ac5-86">
                    Physiology and Developmental Biology
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This course outlines the fundamentals of plant physiology,
                      beginning with a brief introduction of general concepts in
                      physiology to clarify the common or distinct aspects of
                      physiological strategies used by animals and plants.
                      Topics discussed in the plant physiology section include
                      physiological principles of plant structure, growth, and
                      development; transport and translocation of water in
                      plants; responses of plant cells to light and other
                      external signals; and strategies for CO2 fixation.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac5-87"></InputAcChild>
                  <LabelAcChild for="ac5-87">Plant Physiology</LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This course provides students with a comprehensive
                      understanding of concepts, principles, and strategies
                      concerning the basic mechanisms underlying plant growth,
                      development, and survival. Topics covered include mineral
                      nutrition, solute transport, photosynthesis, respiration,
                      metabolism, environmental and developmental signals, and
                      plant hormone action.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac5-88"></InputAcChild>
                  <LabelAcChild for="ac5-88">Polymer Chemistry</LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      The purpose of this course is to learn the basics of
                      polymer science. The course begins with basic polymer
                      concepts, then proceeds to polymerization and synthesis of
                      various structured polymers, and finishes with polymer
                      characterization and properties of polymers.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac5-89"></InputAcChild>
                  <LabelAcChild for="ac5-89">Quantum Chemistry I</LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      What is exactly so special about Quantum Mechanics? The
                      purpose of this course is to introduce this subject. It
                      begins with an introduction to elementary quantum
                      mechanics and builds up to conveying thorough a
                      theoretical understanding of atomic electronic structure.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac5-90"></InputAcChild>
                  <LabelAcChild for="ac5-90">Quantum Chemistry II</LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      We will employ the principles of quantum mechanics to
                      study chemical bonding and molecular structure. (
                      Many-Electron Atoms, Introduction to the Gaussian
                      software, Quantum States for Many-Electron Atoms and
                      Atomic Spectroscopy, The Chemical Bond in Diatomic
                      Molecules 2, Pre-exam Review, Molecular Structure and
                      Energy Levels for Polyatomic Molecules 1, Molecular
                      Structure and Energy Levels for Polyatomic Molecules 2,
                      Electronic Spectroscopy 1, Electronic Spectroscopy 2,
                      Molecular Symmetry 1,Molecular Symmetry 2)
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac5-91"></InputAcChild>
                  <LabelAcChild for="ac5-91">
                    Quantum Chemistry III
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This course give a comprehensive account of the
                      fundamental principles underlying different quantum
                      chemical methods, ranging from classical to the
                      sophisticated.{" "}
                      <ol>
                        <li>Force Field Methods</li>
                        <li>
                          Born Oppenheimer Approximation and Electronic
                          Structure Methods
                        </li>
                        <li>
                          Electron Correlation Methods: Configuration
                          Interaction, Perturbation and Coupled Cluster Theory
                        </li>
                        <li>
                          Electron Correlation Methods: Multi-reference Methods
                        </li>
                        <li>Basis Sets</li>
                        <li>Density Functional Theory</li>
                        <li>
                          Semiempirical Methods and Density-Functional
                          Tight-Binding
                        </li>
                        <li>Molecular Properties</li>
                        <li>
                          Transition State Theory and Direct Ab Initio Molecular
                          Dynamics
                        </li>
                      </ol>
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac5-92"></InputAcChild>
                  <LabelAcChild for="ac5-92">Quantum Mechanics I</LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This course begins with an examination of the experimental
                      basis of quantum physics (photoelectric effect, Compton
                      effect, Franck-Hertz experiment...). Its focus will be on
                      wave mechanics where the Schr?dinger's equation and its
                      solutions will be derived, first in one dimension for
                      various potential wells, and then in three dimensions
                      leading to a study of the hydrogen atom.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac5-93"></InputAcChild>
                  <LabelAcChild for="ac5-93">Quantum Mechanics II</LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      Building on Quantum Mechanics 1, students will learn
                      quantum mechanics at an advanced undergraduate level. The
                      course will build physical intuition of Hilbert space and
                      Nature on the quantum scale while improving students'
                      ability to express physical intuition in mathematical
                      terms and to solve problems.
                    </p>
                    ,{" "}
                    <p>
                      At the end of the full-year course, students will be
                      adequately prepared with regards to their knowledge of
                      quantum mechanics to undertake further studies in S-lab,
                      E-lab, H-lab, R-lab, TB-lab and other, experimental labs
                      in both the Department of Physics and Department of
                      Applied Physics at Nagoya University. Students from other
                      disciplines, such as Chemistry, can also benefit from the
                      deep treatment of quantum phenomena.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac5-94"></InputAcChild>
                  <LabelAcChild for="ac5-94">
                    Scientific Measurements
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      In general, science and measurement are closely correlated
                      and product technologies have been developed with
                      developing measurement technologies. The purpose of the
                      course is to develop an understanding of the fundamentals
                      of measurement systems, including sensor devices and
                      signal processing circuits.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac5-95"></InputAcChild>
                  <LabelAcChild for="ac5-95">
                    Statistical Physics I
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      The purpose of Statistical Physics I is to understand the
                      basic laws that govern macroscopic bodies consisting of an
                      enormous number of atoms and molecules. This first part of
                      the course covers universal phenomenological laws, called
                      thermodynamic laws, and their applications. The main focus
                      of this course is to understand the basic principles of
                      classical thermodynamics which are the basis for
                      macroscopic understanding of all the physical phenomena.
                      Applications in automotive engineering are also
                      introduced.{" "}
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac5-96"></InputAcChild>
                  <LabelAcChild for="ac5-96">
                    Statistical Physics II
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      After learning the mathematical structure of
                      thermodynamics and why thermodynamics works with many
                      examples of systems beyond the ideal gas, students are
                      introduced to the basic laws of statistical mechanics,
                      which, from the microscopic viewpoint, govern macroscopic
                      systems consisting of a very large number of particles.
                      Applications are considered in condensed matter physics,
                      solid state physics, cosmology, chemistry, materials
                      science and biology.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac5-97"></InputAcChild>
                  <LabelAcChild for="ac5-97">
                    Statistical Physics III
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      Students learn quantum statistics of ideal gases,
                      introductory statistical mechanics of systems of
                      interacting particles and introductory theory of phase
                      transitions and critical phenomena. Applications are
                      considered in condensed matter physics, solid state
                      physics, cosmology, chemistry, materials science and
                      biology.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac5-98"></InputAcChild>
                  <LabelAcChild for="ac5-98">Structural Chemistry</LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      The purpose of this course is to support basic
                      understanding of principles needed for spectroscopic
                      methods and structure determination and their applications
                      in organic and inorganic chemistry.
                    </p>
                  </DivAcChildContent>
                </DivAcParentContent>
                <InputAcParent type="checkbox" id="ac6"></InputAcParent>
                <LabelAcParent for="ac6">Medicine</LabelAcParent>
                <DivAcParentContent>
                  <InputAcChild type="checkbox" id="ac6-0"></InputAcChild>
                  <LabelAcChild for="ac6-0">Basic Seminar A</LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      The purpose of this seminar is to introduce research
                      articles from biomedical journals to the undergraduate MD
                      students at our faculty. The discussion and article
                      presentation will be made in English. The seminar is
                      simulation of the situation that can be seen at
                      international meetings. Also each student will have unique
                      opportunity to assess their own level of speaking and
                      understanding medical English.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac6-1"></InputAcChild>
                  <LabelAcChild for="ac6-1">Modern Biology</LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      The purpose of this course is to learn the philosophy,
                      principles, and techniques of modern biology. The course
                      is particularly designed for those who have not learned
                      biology previously or whose major is other than biology.
                      The topics are covered in a rather general, overview
                      manner, but a certain level of diligence in grasping
                      concepts and memorizing the terminology is expected.
                    </p>
                  </DivAcChildContent>
                </DivAcParentContent>
                <InputAcParent type="checkbox" id="ac7"></InputAcParent>
                <LabelAcParent for="ac7">Engineering</LabelAcParent>
                <DivAcParentContent>
                  <InputAcChild type="checkbox" id="ac7-0"></InputAcChild>
                  <LabelAcChild for="ac7-0">
                    Advanced Chemisty Tutorial A
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>Tutorials in each research group</p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac7-1"></InputAcChild>
                  <LabelAcChild for="ac7-1">
                    Advanced Chemisty Tutorial B
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>Tutorials in each research group</p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac7-2"></InputAcChild>
                  <LabelAcChild for="ac7-2">Analytical Chemistry</LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      The purpose of this course is to teach students the
                      fundamentals of analytical chemistry, in preparation for
                      further studies. The course focuses mainly on classical
                      but still widely used wet chemical methods, combined with
                      an overview of the instrumental techniques used in
                      contemporary chemical analysis.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac7-3"></InputAcChild>
                  <LabelAcChild for="ac7-3">Analytical Chemistry</LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This course provides a clear and thorough introduction to
                      the principles and practices underpinning modern
                      analytical chemistry. Through the course, students will
                      develop an understanding of the fundamentals of analytical
                      chemistry and various applications of cutting-edge
                      techniques.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac7-4"></InputAcChild>
                  <LabelAcChild for="ac7-4">
                    Analytical Chemistry Laboratory I
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      The purpose of this course is to master basic experimental
                      techniques for gravimetric and volumetric analysis through
                      laboratory practice, and to study basic chemical reactions
                      and equilibria.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac7-5"></InputAcChild>
                  <LabelAcChild for="ac7-5">
                    Analytical Dynamics and Tutorial
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      Theoretical formalism using Lagrangians and Hamiltonians
                      is very useful for studying the motion of dynamical
                      systems consisting of point particles and rigid bodies. In
                      this lecture, students will gain an understanding of
                      fundamental principles of theoretical formalism and learn
                      technical aspects through simple applications.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac7-6"></InputAcChild>
                  <LabelAcChild for="ac7-6">
                    Analytical Mechanics I
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This course will help students gain a deeper understanding
                      of Newtonian mechanics and introduce the most important
                      Lagrangian and Hamiltonian formulations. These
                      formulations are then used to solve two-body central force
                      problems.
                    </p>
                    ,{" "}
                    <p>
                      Comparisons will be made between the approaches. This
                      course is a pre-requisite for Analytical Mechanics II.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac7-7"></InputAcChild>
                  <LabelAcChild for="ac7-7">
                    Analytical Mechanics II
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This course introduces additional mechanics topics: the
                      use of non-inertial frames (such as an rotating frame) to
                      simplify the analysis of certain problems (such as the
                      Foucault pendulum), the motion of rigid bodies leading to
                      an analysis of the precision of a top, and collision
                      theory leading to the celebrated Rutherford scattering
                      formula that strongly supported his model of the atom. In
                      the latter one-third of the course, special relativity
                      will be introduced.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac7-8"></InputAcChild>
                  <LabelAcChild for="ac7-8">
                    Applied Physics Laboratory I{" "}
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      The course consists of a minimum set of basic physical
                      experiments that are deemed to require specialist
                      knowledge before other various areas of research are
                      pursued. By engaging in these experiments, students will
                      acquire not only basic experimental techniques, but also
                      the right attitudes toward the experimental research.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac7-9"></InputAcChild>
                  <LabelAcChild for="ac7-9">
                    Applied Physics Laboratory II
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This course introduces basic and essential experiments in
                      applied physics, which are related to each research
                      laboratory in the department. Students will acquire basic
                      experimental techniques and analytical methods for applied
                      physics.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac7-10"></InputAcChild>
                  <LabelAcChild for="ac7-10">
                    Applied Physics Laboratory III
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This course introduces basic and essential experiments in
                      applied physics, which are related to each research
                      laboratory in the department. Students will acquire basic
                      experimental techniques and analytical methods for applied
                      physics.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac7-11"></InputAcChild>
                  <LabelAcChild for="ac7-11">
                    Applied Physics Seminar
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      The purpose of this class is to deepen the understanding
                      of the role of fundamental physics in modern technology by
                      discussing various subjects in the field of applied
                      physics.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac7-12"></InputAcChild>
                  <LabelAcChild for="ac7-12">
                    Applied Physics Tutorial II
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      The aims of this course are to deepen students'
                      understanding of the basic physics of Thermodynamics and
                      Electromagnetism, and to cultivate their ability to apply
                      knowledge of Physics through the exercises on
                      Thermodynamics and Electromagnetism.
                    </p>
                    ,{" "}
                    <p>
                      Achievement Goals:{" "}
                      <ol>
                        <li>
                          To solve practical problems on thermodynamics and
                          electromagnetism
                        </li>
                        <li>
                          To explain the solution to other students and
                          instructors.
                        </li>
                      </ol>
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac7-13"></InputAcChild>
                  <LabelAcChild for="ac7-13">
                    Applied Physics Tutorial III
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      The purpose of these tutorials is to support the
                      Electricity and Magnetism lecture course. This course
                      offers a solid introduction to electrostatics and
                      magnetostatics. It also introduces fundamental
                      mathematical methods required to solve problems in
                      physics, engineering and applied mathematics.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac7-14"></InputAcChild>
                  <LabelAcChild for="ac7-14">
                    Applied Physics Tutorial IV
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      The purposes of this course are to deepen students'
                      understanding of basic physics of statistical physics and
                      quantum mechanics and to cultivate their ability to apply
                      knowledge of physics through the exercises on statistical
                      physics and quantum mechanics.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac7-15"></InputAcChild>
                  <LabelAcChild for="ac7-15">
                    Applied Physics Tutorial V
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      The purposes of this course are to deepen students'
                      understanding of basic physics of Electromagnetism and
                      Applied Mathematics, and to cultivate their ability to
                      apply knowledge of Physics through exercises on
                      Electromagnetism and Applied Mathematics.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac7-16"></InputAcChild>
                  <LabelAcChild for="ac7-16">Astrophysics</LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      To understand the hierarchy of the universe and the
                      evolution of the universe based on classical mechanics,
                      thermodynamics, statistical physics, electromagnetism,
                      atomic physics, nuclear physics, relativity, and quantum
                      mechanics.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac7-17"></InputAcChild>
                  <LabelAcChild for="ac7-17">
                    Automobile Chemical Systems I
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This course discusses the fundamentals of chemical systems
                      used in automobiles, such as fuels and combustion, energy
                      management, fuel cell systems, and handling of exhaust
                      gases.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac7-18"></InputAcChild>
                  <LabelAcChild for="ac7-18">
                    Automobile Chemical Systems II
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This course discusses current topics in chemical systems
                      used in the automobile, such as fuels and combustion,
                      energy management, the fuel cell system, and exhaust gas
                      handling.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac7-19"></InputAcChild>
                  <LabelAcChild for="ac7-19">
                    Automobile Engineering Laboratory I
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This course is aimed at helping students experience the
                      fundamental and important principles of automobiles, and
                      to observe and understand the expected physical phenomena
                      from them through various areas ranging from mechanical
                      and electrical to aerospace and information engineering.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac7-20"></InputAcChild>
                  <LabelAcChild for="ac7-20">
                    Automobile Engineering Laboratory II
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      The purpose of this course is to experience the
                      fundamental and important principles relating to the
                      automobile, and to observe and understand the expected
                      physical phenomena from them through various themes from
                      mechanical, electrical, aerospace, and information
                      engineering areas.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac7-21"></InputAcChild>
                  <LabelAcChild for="ac7-21">Biochemistry I</LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This course provides students with a comprehensive
                      introduction to the chemical evolution of biomolecules and
                      their contributions to life. Topics discussed include the
                      origins of life; chemical and physical properties of
                      water; chemical, structural, and functional properties of
                      nucleotides, nucleic acids, amino acids, and proteins.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac7-22"></InputAcChild>
                  <LabelAcChild for="ac7-22">Biochemistry II</LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This course introduces students to the basic framework of
                      the chemical reactions of life. Topics covered include the
                      chemical and structural properties of carbohydrates and
                      lipids; membrane structure, assembly, and transport;
                      reaction kinetics and regulation of enzymes; hormones and
                      signal transduction pathways.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac7-23"></InputAcChild>
                  <LabelAcChild for="ac7-23">Biochemistry IV</LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This course is aimed at expanding students' knowledge in
                      basics of the gene expression and replication from
                      biochemical aspects, including metabolism, structure and
                      molecular function of DNA, RNA and related proteins.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac7-24"></InputAcChild>
                  <LabelAcChild for="ac7-24">Biophysics</LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      To understand the basics of biophysics, in which
                      biological phenomena are described in terms of the
                      language of physics.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac7-25"></InputAcChild>
                  <LabelAcChild for="ac7-25">Cell Biology I</LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This course is expected to refresh and deepen students'
                      knowledge of basic cell organization, and is the beginning
                      of a series of courses on Cell Biology that will stretch
                      over a two-year period.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac7-26"></InputAcChild>
                  <LabelAcChild for="ac7-26">Cell Biology II</LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This course will provide the essential concepts on how
                      plant and animal cells generate energy in order to carry
                      out biological processes and sustain life. Furthermore,
                      the mechanisms of intracellular transport and how cells
                      respond to the environment will be discussed. This course
                      will also prepare the students for basic scientific
                      writing.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac7-27"></InputAcChild>
                  <LabelAcChild for="ac7-27">Cell Biology IV</LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This course covers advanced topics in molecular cell
                      biology, including application and methods. Students will
                      learn how research on molecular cell biology is achieved
                      with advanced technology in the particular areas of
                      post-transcriptional regulation, membrane traffic, ion
                      transport, biomedicines, live cell imaging, etc.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac7-28"></InputAcChild>
                  <LabelAcChild for="ac7-28">Chemical Physics</LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      To learn the physical basis of chemical phenomena such as
                      phase and chemical equilibrium, and chemical kinetics.
                      Advanced topics will be presented depending on progress.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac7-29"></InputAcChild>
                  <LabelAcChild for="ac7-29">
                    Chemistry of Inorganic Materials I
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      The purpose of this course is to help students understand
                      the basic concepts in processing and characterization of
                      inorganic materials through crystal structures, amorphous
                      structures, lattice defects and chemical reactions
                      relating to the stabilities-phase relations-synthesis of
                      inorganic solids.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac7-30"></InputAcChild>
                  <LabelAcChild for="ac7-30">
                    Chemistry of Inorganic Materials II
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      The purpose of this course is to understand the chemical
                      and physical properties of various inorganic materials,
                      their functions, and their applications.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac7-31"></InputAcChild>
                  <LabelAcChild for="ac7-31">
                    Chemistry/Biotechnology Tutorial I
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      The purpose of this course is to gain essential knowledge
                      in the fields of inorganic and physical chemistry through
                      lectures and exercises. Topics to be covered include
                      physical chemistry and inorganic chemistry. In the
                      two-semester sequence, students are expected to focus on
                      four separate topics.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac7-32"></InputAcChild>
                  <LabelAcChild for="ac7-32">
                    Computational Chemistry
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      How can computers help with chemistry? This course
                      introduces computer science from a chemist's perspective.
                      The course begins with an introduction to the basic use of
                      computers for data search, molecular structure and
                      spectroscopic visualization, and introduces FORTRAN 90 as
                      a way to efficiently solve simple scientific problems.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac7-33"></InputAcChild>
                  <LabelAcChild for="ac7-33">Computer Software I</LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      The purpose of this course is to provide students with
                      basic computer literacy skills and basic computer
                      programming techniques to enable them to solve various
                      problems in the C language through exercises.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac7-34"></InputAcChild>
                  <LabelAcChild for="ac7-34">Computer Software II</LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      Building on the knowledge gained in Computer Software 1,
                      students will acquire advanced programming skills through
                      C-programming exercises. Advanced programming topics will
                      include functions, arrays, string operations, structures,
                      I/O, pointers, complex data structures, and large-scale
                      programming. In the latter part of the course, students
                      will acquire the skills to create practical large-scale
                      programs utilizing several advanced programming tools.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac7-35"></InputAcChild>
                  <LabelAcChild for="ac7-35">
                    Condensed Matter Physics I
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      The goal of this course is to enable students to learn
                      about the fundamental theories related to the behavior of
                      electrons and atoms in solids and about the mechanism of
                      some of the most important properties solids exhibits,
                      including electrical, thermal, mechanical and magnetic
                      properties.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac7-36"></InputAcChild>
                  <LabelAcChild for="ac7-36">
                    Condensed Matter Physics II
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      The goal of this course is to learn about the fundamental
                      theories related to the behavior of electrons and atoms in
                      solids and about the mechanism of some of the most
                      important properties solids exhibits, including
                      electrical, thermal, and mechanical properties.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac7-37"></InputAcChild>
                  <LabelAcChild for="ac7-37">
                    Condensed Matter Physics III
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      The purpose of this course is to learn the fundamentals
                      and various applications of condensed matter physics,
                      including electric, magnetic, thermal, and mechanical
                      properties, their cross-correlations, phase transitions,
                      pattern formations, and so on.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac7-38"></InputAcChild>
                  <LabelAcChild for="ac7-38">
                    Control Engineering and Tutorial
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      In this course, students will study control system design
                      using transfer function representation and frequency
                      response methods. Students will also be introduced to
                      state-space representation and solve problems related to
                      the course topics under the guidance of the faculty. By
                      the end of the course, students should be familiar with
                      the design and analysis of single-input/single-output
                      (SISO) &amp; multi-input/multi-output (MIMO) closed-loop
                      control systems.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac7-39"></InputAcChild>
                  <LabelAcChild for="ac7-39">
                    Current Organic and Polymer Chemistry
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      The purpose of this course is to present an overview of
                      cutting-edge organic chemistry, and learn important
                      principles and facets of modern chemistry. The course
                      includes sophisticated catalysts and reagents
                      (organic-based and metal-based) for making useful
                      compounds, designer functional organic molecules with
                      various optoelectronic properties, and synthesis of
                      natural products and biologically active complex
                      molecules.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac7-40"></InputAcChild>
                  <LabelAcChild for="ac7-40">Design Practice I</LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      Mechanical drawing is a fundamental subject, which
                      connects mechanical design and manufacturing in production
                      technology education. This course provides the basics of
                      two-dimensional mechanical drawings, and students will
                      learn how to create a drawing using CAD (Computer-aided
                      Design) software through several projects. They will also
                      study three-dimensional geometry creation (CAD) and
                      computer-aided manufacturing (CAM). Cutter location (CL)
                      data for machining operations are created by utilizing CAM
                      software, and mechanical structures are fabricated in
                      practice by using a vertical machining center and NC
                      programs.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac7-41"></InputAcChild>
                  <LabelAcChild for="ac7-41">Design Practice II</LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      Robot manipulators are widely used in automobile
                      production lines.
                    </p>
                    ,{" "}
                    <p>
                      In order to improve production, we have to know 'what is
                      making' as well as 'what is made'.
                    </p>
                    ,{" "}
                    <p>
                      This course introduces fundamental knowledge for designing
                      a robot manipulator: link mechanics, drive mechanics, and
                      ways both are integrated.
                    </p>
                    ,{" "}
                    <p>
                      Finally, students will be able to design a four-degree of
                      freedom robot-manipulator based on desirable
                      characteristics, specification, etc.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac7-42"></InputAcChild>
                  <LabelAcChild for="ac7-42">Design Practice III</LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This course focuses on design practice through diesel
                      engines. Students will determine the dimensions of a small
                      diesel engine for common purposes.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac7-43"></InputAcChild>
                  <LabelAcChild for="ac7-43">
                    Earth and Planetary Science
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      Never before have humans had such a profound impact on the
                      Earth. The global population is greater than 7 billion and
                      is growing steadily. Industrial and technological needs
                      for energy and mineral resources are increasing every
                      year. In this course, we will see how humanity is changing
                      the environment. In particular we will explore climate
                      change in the geological past and the relationships
                      between human activities and climate today. Students will
                      also learn about nature and the usefulness of geological
                      resources and environmental threats posed by the petroleum
                      and mineral industries. Finally, we will reflect on the
                      opportunities and challenges for sustainable use of
                      geological resources.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac7-44"></InputAcChild>
                  <LabelAcChild for="ac7-44">
                    Earth Environmental Science
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      Never before have humans had such a profound impact on the
                      Earth. The world population exceeds 7 billion and is
                      growing steadily. Industrial and technological needs for
                      energy and mineral resources are increasing every year. In
                      this course, we will see how humanity is changing the
                      environment. In particular we will explore climate change
                      in the geological past and the relationships between human
                      activities and climate today. The students will also learn
                      about the nature and usefulness of geological resources
                      and the environmental threats posed by the petroleum and
                      mineral industries. Finally, we will reflect on the
                      opportunities and challenges for a sustainable use of
                      geological resources.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac7-45"></InputAcChild>
                  <LabelAcChild for="ac7-45">
                    Electrical Circuits Engineering
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      The purpose of this course is to help students develop an
                      understanding of basic electrical-circuit theory and
                      responses of electrical circuits. Upon completion of the
                      course, students will be able to{" "}
                      <ol>
                        <li>
                          describe responses of electrical circuits with circuit
                          equations,
                        </li>
                        <li>
                          explain steady-state and transient phenomena in
                          electrical circuits, and
                        </li>
                        <li>
                          understand various phenomena by utilizing equivalent
                          circuit analysis.
                        </li>
                      </ol>
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac7-46"></InputAcChild>
                  <LabelAcChild for="ac7-46">
                    Electricity and Magnetism
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This course offers a solid introduction to electrostatics
                      and magnetostatics. It also introduces fundamental
                      mathematical methods required to solve problems in
                      physics, engineering and applied mathematics.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac7-47"></InputAcChild>
                  <LabelAcChild for="ac7-47">
                    Electromagnetic Materials
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This course develops consequences of Maxwell's Equations.
                      It also introduces fundamental mathematical methods
                      required to solve problems in physics, engineering and
                      applied mathematics.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac7-48"></InputAcChild>
                  <LabelAcChild for="ac7-48">Electronic Circuits</LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      The purpose of this course is to enable students to study
                      basic analog transistor circuits, and to master the design
                      of amplifiers and other analog electronic circuits.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac7-49"></InputAcChild>
                  <LabelAcChild for="ac7-49">
                    Electronic Devices in Automobiles
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      In this course students study electronic devices,
                      equipment, and systems in automobiles. By the end of the
                      course, students should be familiar with the electrical
                      systems used for power distribution, sensing, control
                      processing, and actuation of automobile systems.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac7-50"></InputAcChild>
                  <LabelAcChild for="ac7-50">
                    Environment and Recycling
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      The purpose of this course is to introduce the
                      fundamentals of materials fabrication and reaction on
                      surface or interface. Upon completion of the course,
                      students will{" "}
                      <ol>
                        <li>understand catalysis</li>
                        <li>
                          understand nanoparticles . understand surface and
                          interface for catalytic reactions
                        </li>
                      </ol>
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac7-51"></InputAcChild>
                  <LabelAcChild for="ac7-51">Fluid Mechanics</LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      The purpose of this course is to help students understand
                      the fundamental characteristics of fluid motions applied
                      to many areas of fluid mechanics and learn the physical
                      laws governing them. Students will:{" "}
                      <ol>
                        <li>
                          Gain an understanding of the properties, basic
                          principles, and concepts of fluids
                        </li>
                        <li>
                          Learn about the basic equations derived from the
                          above, i.e. continuity equations, motion equations,
                          and energy equations, and be able to use them in
                          calculations, and
                        </li>
                        <li>
                          Come to comprehend the aspects and properties of
                          fluids conceptually by utilizing engineering
                          observations as practical examples.
                        </li>
                      </ol>
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac7-52"></InputAcChild>
                  <LabelAcChild for="ac7-52">
                    Fluid Mechanics and Tutorial
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      The purpose of this course is to help students understand
                      the fundamental characteristics of fluid motions applied
                      to many areas of fluid mechanics and learn the physical
                      laws governing them. Students will:{" "}
                      <ol>
                        <li>
                          Gain an understanding of the properties, basic
                          principles, and concepts of fluids
                        </li>
                        <li>
                          Learn about the basic equations derived from the
                          above, i.e. continuity equations, motion equations,
                          and energy equations, and be able to use them in
                          calculations, and
                        </li>
                        <li>
                          Come to comprehend the aspects and properties of
                          fluids conceptually by utilizing engineering
                          observations as practical examples.
                        </li>
                      </ol>
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac7-53"></InputAcChild>
                  <LabelAcChild for="ac7-53">Fluid Mechanics II</LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      The purpose of this course is to help students understand
                      the fundamental characteristics of fluid motions applied
                      to many areas of fluid mechanics and learn the physical
                      laws governing them.
                    </p>
                    ,{" "}
                    <p>
                      Students will:{" "}
                      <ol>
                        <li>
                          Gain an understanding of the properties, basic
                          principles, and concepts of fluids
                        </li>
                        <li>
                          Learn about the basic equations derived from the
                          above, i.e. continuity equations, motion equations,
                          and energy equations, and be able to use them in
                          calculations, and
                        </li>
                        <li>
                          Come to comprehend the aspects and properties of
                          fluids conceptually by utilizing engineering
                          observations as practical examples.
                        </li>
                      </ol>
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac7-54"></InputAcChild>
                  <LabelAcChild for="ac7-54">
                    Fundamental Physics Tutorial I
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This is a companion course to Fundamental Physics I and
                      Fundamental Physics II, and offers practical exercises to
                      help students master the concepts introduced in the
                      lecture courses. Students taking the lecture courses
                      should also take this tutorial class.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac7-55"></InputAcChild>
                  <LabelAcChild for="ac7-55">
                    Fundamental Physics Tutorial IIa
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      The aims of this course are to deepen students'
                      understanding of the basic physics of electricity and
                      magnetism and to cultivate their ability to apply their
                      knowledge of physics.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac7-56"></InputAcChild>
                  <LabelAcChild for="ac7-56">
                    Fundamental Physics Tutorial IIb
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      The aims of this course are to deepen students'
                      understanding of the basic physics of electricity,
                      magnetism, waves and optics, and to cultivate their
                      ability to apply their knowledge of physics.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac7-57"></InputAcChild>
                  <LabelAcChild for="ac7-57">
                    Fundamentals of Biology II
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This course focuses on animal anatomy and physiology, with
                      emphasis on humans, and on how animals' organs have
                      changed as they have evolved. A short introduction is
                      given on plant morphology and physiology, as well as on
                      basic concepts of ecology.
                    </p>
                    ,{" "}
                    <p>
                      There is no prerequisite knowledge for this course, so
                      even those who did not take Fundamentals of Biology 1, or
                      who did not study Biology in high school, are welcome to
                      join and learn how human body works.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac7-58"></InputAcChild>
                  <LabelAcChild for="ac7-58">
                    Heat Transfer Engineering
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      In this course, students will learn fundamental theory on
                      conductive, convective and radiative heat transfers, and
                      their applications such as heat exchangers. Course
                      objectives include:{" "}
                      <ol>
                        <li>
                          Developing an understanding of steady and unsteady
                          conductive heat transfer by Fourier's law
                        </li>
                        <li>
                          Explaining the principle of forced and natural
                          convection
                        </li>
                        <li>
                          Explaining the phenomena of surface radiative heat
                          transfer by understanding the fundamentals of
                          radiation laws
                        </li>
                        <li>Learning the design of heat exchangers.</li>
                      </ol>
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac7-59"></InputAcChild>
                  <LabelAcChild for="ac7-59">
                    Inorganic Chemistry I
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      The purpose of this course is to present the fundamental
                      concepts and chemical principles of inorganic chemistry.
                      This course is the first part of a three-semester sequence
                      in inorganic chemistry, and deals with the basic
                      principles including electronic structures, orbital,
                      chemical bonds, and acids/bases.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac7-60"></InputAcChild>
                  <LabelAcChild for="ac7-60">
                    Inorganic Chemistry II
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      The purpose of this course is to present the fundamental
                      concepts and chemical principles of inorganic chemistry.
                      This course is the second part of a three-semester
                      sequence in inorganic chemistry, and deals with the
                      chemistry of main group elements.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac7-61"></InputAcChild>
                  <LabelAcChild for="ac7-61">
                    Inorganic Chemistry III
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      The purpose of the course is to present the fundamental
                      concepts and the chemical principles of inorganic
                      chemistry. This course is the third part of a
                      three-semester sequence in inorganic chemistry, and deals
                      with the chemistry of transition elements as well as
                      related subjects.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac7-62"></InputAcChild>
                  <LabelAcChild for="ac7-62">
                    Intelligent Transportation Systems
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      The purpose of this course is to review state of the art
                      Intelligent Transport Systems (ITS) and to learn the
                      fundamentals of traffic flow theory, traffic accident
                      analysis and traffic and transportation management using
                      ITS technologies.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac7-63"></InputAcChild>
                  <LabelAcChild for="ac7-63">
                    Introduction to Applied Physics, Materials and Energy
                    Engineering
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      Fundamentals in applied physics, material science, and
                      quantum energy are introduced. Magnetism and
                      superconductivity, and recent topics of quantum computers
                      are discussed. Materials sciences that can resolve many
                      problems in design of physical properties, and in refining
                      and formation processing of materials, are discussed.
                      Recent developments in materials science are introduced.
                      Introduction to nuclear fusion and quantum energy
                      utilization are also discussed.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac7-64"></InputAcChild>
                  <LabelAcChild for="ac7-64">
                    Introduction to Automotive Engineering
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      The purpose of this course is to help students develop an
                      understanding of the basic structure and physics of
                      vehicles through practicing car assembly and disassembly.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac7-65"></InputAcChild>
                  <LabelAcChild for="ac7-65">
                    Introduction to Chemical and Biological Industries
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      The purpose of this course is to present a broad overview
                      of trends in chemical and biological industries in Japan.
                      Lectures will be presented in English, and are open to
                      both Japanese and international students.{" "}
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac7-66"></InputAcChild>
                  <LabelAcChild for="ac7-66">
                    Introduction to Civil Engineering and Architecture
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      To learn the contributions of Civil Engineering and
                      Architecture that have been used to develop the
                      environment that makes up our society.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac7-67"></InputAcChild>
                  <LabelAcChild for="ac7-67">
                    Introduction to Production Engineering
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      Lecturers from leading Japanese industries provide
                      information about the current status of production
                      engineering in Japan. It is expected that students will
                      develop the ability to understand English lectures.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac7-68"></InputAcChild>
                  <LabelAcChild for="ac7-68">
                    Kinematics of Machines
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      In this course, students will learn to analyze basic
                      mechanisms commonly found in automobiles, aircraft, and
                      fabrication devices. Students will also be encouraged to
                      apply these basic mechanisms to enhance their
                      understanding of the mechanical world around them. By the
                      end of the course, students will be able to analyze the
                      position, velocity, and acceleration of the elements of
                      single and multiple degree-of-freedom linkages and
                      understand and analyze the different methods of motion
                      transmission.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac7-69"></InputAcChild>
                  <LabelAcChild for="ac7-69">Material Processing</LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      The purpose of this lecture is to help students develop an
                      understanding of materials processing technologies in
                      relation to material science.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac7-70"></InputAcChild>
                  <LabelAcChild for="ac7-70">
                    Mathematical Physics I
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This course is a companion course to Mathematical Physics
                      II. This course introduces first order and second order
                      ordinary differential equations and their solution
                      methods. Students master exact and approximate analytical
                      techniques for initial value problems that arise in
                      physics, engineering and chemistry. Questions of
                      existence, uniqueness and convergence are also discussed.
                      Fourier series and the Fourier transform follow naturally
                      from the 2nd order theory, and these are also
                      investigated. Students will find this mathematical methods
                      course helpful for other units such as Quantum Mechanics,
                      Analytical Mechanics and Electricity and Magnetism.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac7-71"></InputAcChild>
                  <LabelAcChild for="ac7-71">
                    Mathematical Physics Tutorial I
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      Students taking Mathematical Physics I should also take
                      this tutorial class. This course introduces first order
                      and second order ordinary differential equations and their
                      solution methods. Students master exact and approximate
                      analytical techniques for initial value problems that
                      arise in physics, engineering and chemistry. Questions of
                      existence, uniqueness and convergence are also discussed.
                      Fourier series follow naturally from the 2nd order theory
                      and these are also investigated.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac7-72"></InputAcChild>
                  <LabelAcChild for="ac7-72">
                    Mathematics I and Tutorial
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This tutorial supports students in the course Analytical
                      Mechanics I. Students will work with the tutor to analyze
                      and solve those problems assigned in the lecture.
                      Throughout the tutorial we will also work on improving
                      participants' discussion skills.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac7-73"></InputAcChild>
                  <LabelAcChild for="ac7-73">
                    Mathematics I and Tutorial
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This course introduces first order and second order
                      ordinary differential equations and their solution
                      methods. Students master exact and approximate analytical
                      techniques for initial value problems that arise in
                      physics, engineering and chemistry. Questions of
                      existence, uniqueness and convergence are also discussed.
                      Fourier series follow naturally from the 2nd order theory
                      and these are also investigated.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac7-74"></InputAcChild>
                  <LabelAcChild for="ac7-74">
                    Mathematics II and Tutorial
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      The purpose of this course is to deepen students'
                      understanding of thermodynamics, and cultivate their
                      calculation skills by solving basic problems.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac7-75"></InputAcChild>
                  <LabelAcChild for="ac7-75">
                    Mathematics II and Tutorial
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      Building on the mathematics and physics knowledge gained
                      in Fundamental Major Subjects, this course introduces
                      students to vector analysis and partial differential
                      equations, and introduces ways they are applied to
                      advanced engineering, such as those related to mechanics
                      and electromagnetics, as well as to materials and heat
                      transfer phenomena . The purpose of this course is to help
                      students acquire fundamental knowledge in vector analysis
                      and partial differential equations, and to enable students
                      to apply this to solve actual engineering issues through
                      intensive exercises.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac7-76"></InputAcChild>
                  <LabelAcChild for="ac7-76">
                    Mathematics Tutorial I
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      The aim of this course is to deepen students'
                      understanding of mathematics (calculus and linear algebra)
                      and to cultivate their ability to apply mathematical
                      knowledge. This course connects high school mathematics
                      and university mathematics.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac7-77"></InputAcChild>
                  <LabelAcChild for="ac7-77">
                    Mathematics Tutorial II
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      The aim of this course is to deepen students'
                      understanding of mathematics (calculus and linear algebra)
                      and to cultivate their ability to apply mathematical
                      knowledge.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac7-78"></InputAcChild>
                  <LabelAcChild for="ac7-78">
                    Mechanics of Continuous Media
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      The purpose of this course is to help students gain an
                      understanding of the basic idea underlying the macroscopic
                      view of the mechanics of continuum, particularly fluid
                      mechanics. Emphasis is placed on the conservation laws of
                      mass and momentum, and on how to use these in practice.
                      Course objectives include:{" "}
                      <ol>
                        <li>
                          understanding basic concepts underlying the mechanics
                          of continuum,
                        </li>
                        <li>the acquisition of calculus skills, and</li>
                        <li>understanding the idea of the macroscopic view.</li>
                      </ol>
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac7-79"></InputAcChild>
                  <LabelAcChild for="ac7-79">
                    Mechanics of Materials and Tutorial
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      In this course, students will study the fundamentals of
                      stress, strain, and how materials become deformed.
                      Students will also solve problems related to the course
                      topics under the guidance of the faculty. By the end of
                      the course, students will:
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac7-80"></InputAcChild>
                  <LabelAcChild for="ac7-80">
                    Metallic and Ceramic Materials
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      The purpose of this course is to enable students to learn
                      various properties of metallic and ceramic materials.
                    </p>
                    ,{" "}
                    <p>
                      Students will acquire general and fundamental knowledge of
                      metals, alloys and ceramics, including crystal structures,
                      physical properties and material processing techniques.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac7-81"></InputAcChild>
                  <LabelAcChild for="ac7-81">Numerical Analysis</LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      The purpose of this course is to help students acquire the
                      basics of numerical analysis through multibody dynamics
                      simulations and finite element methods. Through this
                      course, students will develop an understanding of{" "}
                      <ol>
                        <li>
                          the principles of multibody dynamics and finite
                          element methods and their solution methods using
                          computers
                        </li>
                        <li>
                          computation algorithms of multibody dynamics
                          simulation and the finite element method (students
                          will also solve some simple practical examples).
                        </li>
                      </ol>
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac7-82"></InputAcChild>
                  <LabelAcChild for="ac7-82">Optics</LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      The purpose of this class is to understand the properties
                      of light and various interactions between light and
                      matters, and acquire basic knowledge about optical devices
                      to control the light and basic skills for optics.
                    </p>
                    ,{" "}
                    <p>
                      Outcomes:{" "}
                      <ol>
                        <li>
                          The ability to explain the reflection, refraction and
                          propagation of light on basis of the knowledge of
                          electromagnetic waves in matters and polarization of
                          light.
                        </li>
                        <li>
                          The ability to explain the interaction between light
                          and matters using a classical model of atoms.{" "}
                        </li>
                        <li>
                          The ability to explain the light emission and the
                          principle of lasers.
                        </li>
                      </ol>
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac7-83"></InputAcChild>
                  <LabelAcChild for="ac7-83">Organic Chemistry I</LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      The main purpose of this course is to help students
                      acquire a logical framework for understanding.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac7-84"></InputAcChild>
                  <LabelAcChild for="ac7-84">Organic Chemistry II</LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      The main purpose of this course is to help students
                      acquire a logical framework for understanding fundamental
                      organic chemistry. This framework provides the influence
                      for each type of organic chemical reactions and the
                      corresponding mechanisms. On the basis of this
                      understanding, we consecutively learn how to solve a range
                      of practical problems in organic chemistry.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac7-85"></InputAcChild>
                  <LabelAcChild for="ac7-85">
                    Organic Chemistry III
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      The main purpose of this course is to help students
                      acquire a logical framework for understanding fundamental
                      organic chemistry. This framework provides the influence
                      for each type of organic chemical reactions and the
                      corresponding mechanisms. On the basis of the
                      understanding, we consecutively learn how to solve a range
                      of practical problems in organic chemistry.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac7-86"></InputAcChild>
                  <LabelAcChild for="ac7-86">Organic Chemistry IV</LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      The main purpose of this course is to acquire a logical
                      framework for understanding fundamental organic chemistry.
                      Since organometallic compounds incorporating carbon-metal
                      bonds function as powerful nucleophiles, such compounds
                      have been widely used to effective synthetic
                      transformation. Replacement of the first metal by new can
                      activate or control the reactivity of the chemical
                      reactions. This framework emphasizes organic chemistry
                      involving metals.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac7-87"></InputAcChild>
                  <LabelAcChild for="ac7-87">
                    Organic Chemistry Laboratory I
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      The purpose of the course is to allow students to
                      experience basic handling, detection, isolation, and
                      characterization methods of the organic compounds reviewed
                      in the Organic Chemistry course, through practical
                      experiments.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac7-88"></InputAcChild>
                  <LabelAcChild for="ac7-88">Organic Chemistry V</LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      The main purpose of this course is to help students
                      acquire a logical framework to understand the processes to
                      determine organic molecular structures and their definite
                      properties. The course begins with theoretical aspects of
                      spectral techniques such as NMR, UV, IR, and Mass, and
                      later moves on to solving the 'structure from
                      spectra'-type problems. It maintains problem-solutions
                      regarded to organic reactions to emphasize students'
                      understanding on the structures and functions of organic
                      molecules.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac7-89"></InputAcChild>
                  <LabelAcChild for="ac7-89">Organic Materials</LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      The purpose of the course is to understand the chemical
                      structures and properties of organic materials, as well as
                      its automotive applications.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac7-90"></InputAcChild>
                  <LabelAcChild for="ac7-90">
                    Outline of Engineering III
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This course introduces the history, current state and
                      future prospects of R&amp;D (research and development) in
                      various areas of engineering in Japan. This class consists
                      of omnibus-style lectures, all provided in English.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac7-91"></InputAcChild>
                  <LabelAcChild for="ac7-91">Physical Chemistry I</LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      The purpose of this course is to enable students to learn
                      what physical chemistry is all about and to grasp
                      important principles and facts about physical chemistry.
                      The course begins with perfect gas law, proceeds to
                      thermodynamics, and finishes with applications of
                      thermodynamics to simple mixtures.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac7-92"></InputAcChild>
                  <LabelAcChild for="ac7-92">
                    Physical Chemistry II
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      The purpose of this course is to enable students to learn
                      what physical chemistry is all about and to grasp
                      important principles and facts about the subject. The
                      focus is on statistical thermodynamics and its
                      applications. The course finishes with a study of kinetics
                      and dynamics of chemical reactions.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac7-93"></InputAcChild>
                  <LabelAcChild for="ac7-93">
                    Physical Chemistry Laboratory
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      The purpose of this course is twofold. One is to
                      familiarize students with using various techniques
                      employed in physical chemistry, while the other is to
                      deepen their understanding of thermodynamics, chemical
                      equilibria, reaction kinetics, and electrochemistry. The
                      laboratory work is carried out in collaboration with
                      Japanese students.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac7-94"></InputAcChild>
                  <LabelAcChild for="ac7-94">Polymer Chemistry</LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      The purpose of this course is to enable students to learn
                      the basics of polymer science. The course begins with
                      basic polymer concepts, then proceeds to polymerization
                      and synthesis of various structured polymers, and finishes
                      with polymer characterization and properties of polymers.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac7-95"></InputAcChild>
                  <LabelAcChild for="ac7-95">Power Electronics</LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      Power electronics is one of the key technologies for
                      eco-generation, eco-friendly cars, shinkansen (bullet
                      trains), linear motor cars, robot actuation, etc. This
                      lecture is aimed at helping students gain an understanding
                      of the basics of power electronics used by automotive
                      engineers.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac7-96"></InputAcChild>
                  <LabelAcChild for="ac7-96">Quantum Chemistry I</LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      What exactly is so special about Quantum Mechanics? This
                      course introduces quantum mechanics. It begins with an
                      introduction to elementary quantum mechanics and then
                      helps students acquire a theoretical understanding of
                      atomic electronic structure.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac7-97"></InputAcChild>
                  <LabelAcChild for="ac7-97">Quantum Chemistry II</LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      We will employ the principles of quantum mechanics to
                      study chemical bonding and molecular structure.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac7-98"></InputAcChild>
                  <LabelAcChild for="ac7-98">
                    Quantum Chemistry III
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This course give a comprehensive account of the
                      fundamental principles underlying different quantum
                      chemical methods, ranging from the classical to the
                      sophisticated.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac7-99"></InputAcChild>
                  <LabelAcChild for="ac7-99">Quantum Mechanics II</LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      Building on the foundations developed in the first course,
                      this course introduces further concepts and methods in
                      quantum mechanics in order to help students learn the
                      detailed structure of an atom and its interaction with the
                      electromagnetic field.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac7-100"></InputAcChild>
                  <LabelAcChild for="ac7-100">
                    Scientific Measurements
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      In general, science and measuring are closely correlated
                      and product technologies have been developed by developing
                      measurement technologies.
                    </p>
                    ,{" "}
                    <p>
                      The purpose of this course is to help students develop an
                      understanding of the fundamentals of measuring systems,
                      including sensor devices and signal processing circuits.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac7-101"></InputAcChild>
                  <LabelAcChild for="ac7-101">Solid Mechanics</LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      The purpose of this course is to enable students to learn
                      two- and three-dimensional theories of elasticity. The
                      goals are to enable students{" "}
                      <ol>
                        <li>
                          to understand and explain equations of equilibrium,
                          relationship between displacements and strains,
                          compatibility of strain components, Hooke's Law,
                          boundary conditions for three-dimensional elastic
                          bodies,
                        </li>
                        <li>
                          to understand and use a method to solve
                          two-dimensional problems by using Airy stress
                          function, and{" "}
                        </li>
                        <li>to understand and use energy theorems.</li>
                      </ol>
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac7-102"></InputAcChild>
                  <LabelAcChild for="ac7-102">
                    Statistical Physics I
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      The purpose of Statistical Physics I-III is to help
                      students gain an understanding of the basic laws that
                      govern macroscopic bodies consisting of an enormous number
                      of atoms and molecules. This first part of the course
                      covers universal phenomenological laws, called
                      thermodynamic laws, and their applications.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac7-103"></InputAcChild>
                  <LabelAcChild for="ac7-103">
                    Statistical Physics II
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      Students will understand the basic laws that govern
                      macroscopic bodies consisting of an enormous number of
                      atoms and molecules. Applications are considered in
                      physics, chemistry, materials science and biology.{" "}
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac7-104"></InputAcChild>
                  <LabelAcChild for="ac7-104">
                    Statistical Physics III
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      Students learn quantum statistics of ideal gases, the
                      statistical mechanics of systems of interacting particles
                      and introductory theory of phase transitions and critical
                      phenomena. Applications are considered in condensed matter
                      physics, solid state physics, cosmology, chemistry,
                      materials science and biology.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac7-105"></InputAcChild>
                  <LabelAcChild for="ac7-105">Technical English 1</LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      Technical English 1 taught in the first semester and
                      Technical English 2 taught in the second semester will
                      have the same style and purpose, but Technical English 2
                      will generally be freer. For Technical English 1, we will
                      practice discussing scientific and technical matters, as
                      well as presenting the results verbally and in writing. We
                      will also practice word power (vocabulary, and ways of
                      saying things).
                    </p>
                    ,{" "}
                    <p>
                      The course should help students do the following things in
                      English:
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac7-106"></InputAcChild>
                  <LabelAcChild for="ac7-106">Technical English 2</LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This class continues Technical English 1 from the first
                      semester, however, greater importance is placed on
                      presentation. Here, presentation, means explaining a
                      technical problem, a set of data etc. to other people. It
                      may be either orally or in writing.We will practice both,
                      but the writing practice will usually used as preparation
                      for the oral.
                    </p>
                    ,{" "}
                    <p>
                      We will also continue the kind of discussion and
                      vocabulary practice activities that we started in
                      Technical English 1. The course should help students do
                      the following things in English:
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac7-107"></InputAcChild>
                  <LabelAcChild for="ac7-107">
                    Thermodynamics and Tutorial
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This subject introduces thermodynamics and its
                      applications in automotive engineering. The main focus of
                      this course is to help students understand the basic
                      principles of classical thermodynamics that are the basis
                      for macroscopic understanding of all the physical
                      phenomena.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac7-108"></InputAcChild>
                  <LabelAcChild for="ac7-108">
                    Tours in Industrial Plants A
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      The purpose of this course is to review how previously
                      reviewed automotive engineering theory is supplied
                      practically, and cover the state of research and
                      production at various companies.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac7-109"></InputAcChild>
                  <LabelAcChild for="ac7-109">
                    Tours in Industrial Plants B
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      The purpose of this course is to review how previously
                      reviewed automotive engineering theory is applied
                      practically, and cover the state of research and
                      production at various companies.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac7-110"></InputAcChild>
                  <LabelAcChild for="ac7-110">
                    Training in Industrial Plants
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      The purpose of the course is to gain further knowledge on
                      automotive engineering through training in industrial
                      plants.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac7-111"></InputAcChild>
                  <LabelAcChild for="ac7-111">
                    Urban Environment and Transportation System
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This presents the role of car traffic in urban structures,
                      the environment and quality of life, as well as its impact
                      on these.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac7-112"></InputAcChild>
                  <LabelAcChild for="ac7-112">Vehicle Design</LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      The purpose of this course is to learn how to design cars
                      in the development process.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac7-113"></InputAcChild>
                  <LabelAcChild for="ac7-113">
                    Vehicle Dynamics and Control
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      In this course students will study fundamental surface
                      vehicle dynamics and control. The course also covers
                      classical topics and progress in recent topics of vehicle
                      control such as tire dynamics, steering dynamics and
                      control, adaptive cruise control, and electric stability
                      control. By the end of the course, students should
                      understand how to model the manoeuvring of surface
                      vehicles and how to design control systems to augment
                      these manoeuvring characteristics.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac7-114"></InputAcChild>
                  <LabelAcChild for="ac7-114">
                    Vehicle Engines and New Propulsion Systems
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      In this course, students will learn about the combustion
                      engine and advanced propulsion systems. Course objectives
                      include{" "}
                      <ol>
                        <li>
                          developing an understanding of the design and
                          mechanics of the combustion engine (Otto-cycle engine
                          and Diesel engine)
                        </li>
                        <li>
                          reviewing revolutionary vehicles with new propulsion
                          system (electric vehicles, hybrids and fuel cell
                          vehicles).
                        </li>
                      </ol>
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac7-115"></InputAcChild>
                  <LabelAcChild for="ac7-115">Vehicle Safety</LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      Safety is a key issue in vehicle development. This course
                      examines both active safety (prevention of accidents) and
                      passive safety (injury mitigation). Through the course,
                      students will develop an understanding of vehicle safety
                      development and engineering based on mechanical and human
                      factors.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac7-116"></InputAcChild>
                  <LabelAcChild for="ac7-116">Vehicle Structures</LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      In this course, students will learn about vehicle
                      structures. The purpose of the course is to help students
                      develop an understanding of the structure and mechanism of
                      vehicle bodies, chassis, and power trains.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac7-117"></InputAcChild>
                  <LabelAcChild for="ac7-117">
                    Vibration Engineering and Tutorial
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This course introduces the fundamentals of analyzing
                      vibrating systems that is necessary in dynamic design and
                      elastic analysis of machinery. Students will also solve
                      problems related to the course topics under the guidance
                      of the faculty. By the end of the course, students should
                      be familiar with the analysis of single and multiple
                      degree-of-freedom systems.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac7-118"></InputAcChild>
                  <LabelAcChild for="ac7-118">
                    View of Advanced Electrical, Electronic and Information
                    Engineering
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This course discusses the fundamentals of, and current
                      topics in each field of the advanced electrical,
                      electronic and information engineering, with an overview
                      of the status of their researches and developments in
                      Japan. Topics to be introduced are those related with
                      energy, material and device, information and
                      communication, multimedia and so on. To familiarize
                      students with the subject matter, trips to related
                      manufacturing companies are planned.
                    </p>
                  </DivAcChildContent>
                </DivAcParentContent>
                <InputAcParent type="checkbox" id="ac8"></InputAcParent>
                <LabelAcParent for="ac8">Agricultural Sciences</LabelAcParent>
                <DivAcParentContent>
                  <InputAcChild type="checkbox" id="ac8-0"></InputAcChild>
                  <LabelAcChild for="ac8-0">
                    Academic Presentation Skills
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This course will be conducted in English. The class format
                      will be workshop style wherein students will be able to
                      execute and immediately apply techniques during practice
                      sessions.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac8-1"></InputAcChild>
                  <LabelAcChild for="ac8-1">Agricultural Science</LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      We are beset by an array of global concerns such as the
                      depletion of food and energy resources, poverty and health
                      problems, and the destruction of the natural- and
                      living-environments. This course, by taking as its base
                      recent developments in the field of life sciences, aims to
                      propose possible solutions to the above, through the
                      analysis of biological production, symbiosis, and frontier
                      technology in the field of bioscience.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac8-2"></InputAcChild>
                  <LabelAcChild for="ac8-2">Agricultural Science</LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      We are beset by an array of global concerns such as the
                      depletion of food and energy resources, poverty and health
                      problems, and the destruction of the natural- and
                      living-environments. This course, by taking as its base
                      recent developments in the field of life sciences, aims to
                      propose possible solutions to the above, through the
                      analysis of biological production, symbiosis, and frontier
                      technology in the field of bioscience.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac8-3"></InputAcChild>
                  <LabelAcChild for="ac8-3">Analytical Chemistry</LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      The purpose of this course is to teach students the
                      fundamentals of analytical chemistry, in preparation of
                      further studies. The course focuses mainly on classical
                      but still widely used wet chemical methods, combined with
                      an overview of the instrumental techniques used in
                      contemporary chemical analysis.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac8-4"></InputAcChild>
                  <LabelAcChild for="ac8-4">
                    Analytical Mechanics I
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This is the first of two Year II courses in analytical
                      mechanics. Its purposes are to gain a deeper
                      understanding, aided by basic vector calculus, of
                      Newtonian mechanics treated in Year I, and to introduce
                      the Lagrangian and Hamiltonian formulations of mechanics.
                      These formulations are then used in the solution of the
                      two-body central force problems. Comparisons will be made
                      between the approaches.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac8-5"></InputAcChild>
                  <LabelAcChild for="ac8-5">Animal physiology</LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This course introduces the principles of nervous system
                      function and brain physiology. Mechanisms underlying
                      sensory perception and motor control are the main focus of
                      this course.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac8-6"></InputAcChild>
                  <LabelAcChild for="ac8-6">Biochemistry I</LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This course provides students with a comprehensive
                      introduction to the chemical evolution of biomolecules and
                      their contributions to life. Topics discussed include the
                      origin of life; chemical and physical properties of water;
                      chemical, structural, and functional properties of
                      nucleotides, nucleic acids, amino acids, and proteins.{" "}
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac8-7"></InputAcChild>
                  <LabelAcChild for="ac8-7">Biochemistry II</LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This course introduces students to the basic framework of
                      the chemical reactions of life. Topics covered include the
                      chemical and structural properties of carbohydrates and
                      lipids; membrane structure, assembly, and transport;
                      reaction kinetics and regulation of enzymes; hormones and
                      signal transduction pathways.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac8-8"></InputAcChild>
                  <LabelAcChild for="ac8-8">Biochemistry III</LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This course focused on the metabolisms of biomolecules
                      (Part IV, METABOLISM in the textbook), including
                      carbohydrates, lipids, amino acids/proteins, and nucleic
                      acids. The students learn the concept of free energy,
                      mechanism of ATP production, catabolism and anabolism of
                      biomolecules.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac8-9"></InputAcChild>
                  <LabelAcChild for="ac8-9">Biochemistry IV</LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This course is aimed at expanding students' knowledge in
                      basics of the gene expression and replication from
                      biochemical aspects, including metabolism, structure and
                      molecular function of DNA, RNA and related proteins.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac8-10"></InputAcChild>
                  <LabelAcChild for="ac8-10">Bioorganic Chemistry</LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      To understand what the organic compounds are, including
                      biomolecules (primary metabolites) and natural products
                      (secondary metabolites), what they are composed of, and
                      how they react to produce another organic compound.
                      Biologically active small molecules, most of which are
                      organic compounds, are also introduced. Such knowledge is
                      basis for applied chemistry and industry, for example, in
                      developing pharmaceuticals and pesticides.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac8-11"></InputAcChild>
                  <LabelAcChild for="ac8-11">Biophysics</LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      To understand the basics of biophysics, in which
                      biological phenomena are described in terms of the
                      language of physics.The course will cover structure of
                      biomolecules (proteins, nucleic acids, membranes) before
                      introducing biophysical techniques (experimental and
                      computational) to characterize function/dynamics/folding
                      of these biomolecules.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac8-12"></InputAcChild>
                  <LabelAcChild for="ac8-12">Cell Biology IV</LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This course covers advanced topics in molecular cell
                      biology, including application and methods. Students will
                      learn how research on molecular cell biology is achieved
                      with advanced technology in the particular areas of cancer
                      cells, membrane traffic, ion transport, biomedicines, live
                      cell imaging, etc.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac8-13"></InputAcChild>
                  <LabelAcChild for="ac8-13">Cell Biology I</LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This course is expected to refresh and deepen students'
                      knowledge in basic cell organisation, and is the beginning
                      of a series of courses on Cell Biology that will stretch
                      over a two-year period. This first part, Cell Biology I,
                      focuses on cell membrane as well as basic genetic
                      mechanisms.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac8-14"></InputAcChild>
                  <LabelAcChild for="ac8-14">Cell Biology II</LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This course will provide the essential concepts on how
                      plant and animal cells generate energy in order to carry
                      out biological processes and sustain life. Furthermore,
                      the mechanisms of intracellular transport and how cells
                      respond to the environment will be discussed in detail.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac8-15"></InputAcChild>
                  <LabelAcChild for="ac8-15">Cell Biology III</LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This course covers basic topics in cell biology. Students
                      who successfully complete this course will understand
                      fundamental biological phenomena at the molecular and
                      cellular levels that include the cytoskeletal systems,
                      mitosis and meiosis, and intercellular communications in
                      multicellular organisms. They will develop insights into
                      the complexities of cell structure and function, the
                      underlying molecular events, the dynamic properties of
                      living cells, and how these contribute to the generation
                      and functioning of the whole organism.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac8-16"></InputAcChild>
                  <LabelAcChild for="ac8-16">Chemical Physics</LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      The purpose of this course is to teach the physical basis
                      of chemical phenomena such as phase and chemical
                      equilibrium, and chemical kinetics. Advanced topics will
                      be shown depending on the progress.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac8-17"></InputAcChild>
                  <LabelAcChild for="ac8-17">
                    Computationl Chemistry
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      "How can computers help with Chemistry?" The purpose of
                      this course is to introduce computer science from a
                      chemist's perspective. The course begins with an
                      introduction to the basic use of computers for data search
                      and molecular structure and spectroscopic visualization.
                      It then introduces the programming language FORTRAN 90 on
                      a Macintosh computer as a way to solve simple scientific
                      problems in an efficient way.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac8-18"></InputAcChild>
                  <LabelAcChild for="ac8-18">
                    Current Organic and Polymer Chemistry
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      The purpose of this course is to present an overview of
                      cutting-edge organic chemistry, and learn important
                      principles and facets of modern chemistry. The course
                      includes sophisticated catalysts and reagents
                      (organic-based and metal-based) for making useful
                      compounds, designer functional organic molecules with
                      various optoelectronic properties, and synthesis of
                      natural products and biologically active complex
                      molecules.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac8-19"></InputAcChild>
                  <LabelAcChild for="ac8-19">
                    Earth and Planetary Sciences
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      In this course students will learn about the
                      characteristics of the planets and other components of our
                      solar system (orbital parameters, atmospheric conditions,
                      internal structure and composition, geomorphology,
                      geological activity). We will use the knowledge of our own
                      planet Earth as a reference to understand processes
                      occurring elsewhere.
                    </p>
                    ,{" "}
                    <p>
                      During the past fifty years, various spacecrafts and
                      exploration vehicles have been used to considerably expand
                      our knowledge of the solar system and send back to Earth
                      ever more detailed pictures of distant worlds.
                    </p>
                    ,{" "}
                    <p>
                      The course will review the different means of space
                      exploration and use abundant data acquired by past and
                      ongoing missions to illustrate the characteristics of the
                      planets. A recurrent topic throughout the course will be
                      the fascinating question of the existence of
                      extraterrestrial life and its detection. We will also
                      discuss the future of space exploration.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac8-20"></InputAcChild>
                  <LabelAcChild for="ac8-20">
                    Electricity and Magnetism
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This course is a solid introduction to electrostatics and
                      magnetostatics. Maxwell's Equations are derived. The
                      course introduces students to fundamental mathematical
                      methods required to solve problems in physics, engineering
                      and applied mathematics. This course has dual pedagogical
                      aims:{" "}
                      <ol>
                        <li>to convey physical principles</li>
                        <li>
                          to improve students' technical ability - i.e. ability
                          to express physical intuition in mathematical terms
                          and ability to solve problems.
                        </li>
                      </ol>
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac8-21"></InputAcChild>
                  <LabelAcChild for="ac8-21">
                    Environmental Earth Sciences
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      Never before have humans had such a profound impact on the
                      Earth. The world population exceeds 7 billion and is
                      growing steadily. Industrial and technological needs for
                      energy and mineral resources are increasing every year. In
                      this course, we will see how humanity is changing the
                      environment. In particular we will explore climate change
                      in the geological past and the relationships between human
                      activities and climate today. The students will also learn
                      about the nature and usefulness of ecological resources
                      and the environmental threats posed by petroleum and
                      mineral industries. Finally, we will reflect on the
                      opportunities and challenges for a sustainable use of
                      geological resources.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac8-22"></InputAcChild>
                  <LabelAcChild for="ac8-22">
                    Fundamental Physics Tutorial Ia
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This is a companion course to Fundamental Physics I, a
                      course in basic, calculus-based physics, and offers
                      practical exercises for mastering the concepts introduced
                      in the lecture courses. Students taking the lecture
                      courses should also take this tutorial class.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac8-23"></InputAcChild>
                  <LabelAcChild for="ac8-23">
                    Fundamental Physics Tutorial Ib
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This is a companion course to Fundamental Physics II, and
                      offers practical exercises for mastering the concepts
                      introduced in the lecture courses. Students taking the
                      lecture courses should also take this tutorial class.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac8-24"></InputAcChild>
                  <LabelAcChild for="ac8-24">
                    Fundamental Physics Tutorial IIa
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      The aims of this course are to deepen students'
                      understanding of basic Physics of electricity and
                      magnetism and to cultivate their ability to apply Physics
                      knowledge.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac8-25"></InputAcChild>
                  <LabelAcChild for="ac8-25">
                    Fundamental Physics Tutorial IIb
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      The aims of this course are to deepen students'
                      understanding of basic Physics of waves and optics, and to
                      cultivate their ability to apply Physics knowledge.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac8-26"></InputAcChild>
                  <LabelAcChild for="ac8-26">Genetics I</LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This course will refresh and deepen basic knowledge of
                      genetics, and is the beginning of a series of courses on
                      Genetics that will stretch over two-year period. Students
                      will learn fundamental processes of how genetic
                      information can be inherited rigidly and flexibly from
                      generation to generation. Students are expected to become
                      adept at using appropriate scientific terminology, explain
                      the basic genetics concepts and be able to analytically
                      manipulate this information.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac8-27"></InputAcChild>
                  <LabelAcChild for="ac8-27">Genetics II</LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This course aims to introduce students to fundamental
                      molecular mechanisms underlying expression of the genome.
                      The entire course will discuss the molecular and
                      regulatory mechanisms of transcription, RNA processing,
                      translation in both bacterial and eukaryotic cells, and
                      the principle and universality of the genetic code.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac8-28"></InputAcChild>
                  <LabelAcChild for="ac8-28">Genetics III</LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This course introduces the principles of molecular
                      genetics.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac8-29"></InputAcChild>
                  <LabelAcChild for="ac8-29">
                    Inorganic Chemistry I
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      The purpose of the course is to present the fundamental
                      concepts and chemical principles of inorganic chemistry.
                      This course is the first part of a three-semester sequence
                      in inorganic chemistry, and deals with the basic
                      principles including electronic structures, orbital,
                      chemical bonds, and acids/bases.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac8-30"></InputAcChild>
                  <LabelAcChild for="ac8-30">
                    Mathematical Physics I
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This course is a companion course to Mathematical Physics
                      II. This course introduces first order and second order
                      ordinary differential equations and their solution
                      methods. Students master analytical techniques for
                      problems that arise in physics, engineering and chemistry.
                      Questions of uniqueness of solutions and convergence are
                      also discussed. Students are also introduced to Fourier
                      series, the Fourier transform, convolution, Laplace
                      transform, and the Dirac delta function.
                    </p>
                    ,{" "}
                    <p>
                      This course has dual pedagogical aims:{" "}
                      <ol>
                        <li>to convey mathematical principles</li>
                        <li>
                          to improve students' technical ability - i.e. ability
                          to express intuition in mathematical terms and ability
                          to solve problems.
                        </li>
                      </ol>
                    </p>
                    ,{" "}
                    <p>
                      Students will find this mathematical methods course
                      helpful in other units such as Quantum Mechanics,
                      Analytical Mechanics, Electricity and Magnetism, as well
                      as in Automotive Engineering and other engineering
                      courses.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac8-31"></InputAcChild>
                  <LabelAcChild for="ac8-31">
                    Mathematical Physics Tutorial I
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      Students taking Mathematical Physics I should also take
                      this tutorial class.
                    </p>
                    ,{" "}
                    <p>
                      This course introduces first order and second order
                      ordinary differential equations and their solution
                      methods. Students master exact and approximate analytical
                      techniques for initial value problems that arise in
                      physics, engineering and chemistry. Questions of
                      existence, uniqueness and convergence are also discussed.
                      Fourier series follow naturally from the 2nd order theory
                      and these are investigated, too.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac8-32"></InputAcChild>
                  <LabelAcChild for="ac8-32">
                    Mathematics Tutorial Ia
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      The aim of this course is to deepen the understanding of
                      calculus and to cultivate the ability to apply
                      mathematical knowledge. The course is mainly intended for
                      students taking Calculus I.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac8-33"></InputAcChild>
                  <LabelAcChild for="ac8-33">
                    Mathematics Tutorial Ib
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      The aim of this course is to provide essential
                      mathematical knowledge necessary to further study
                      mathematics and other sciences at university level. The
                      course is intended for students taking Linear algebra I.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac8-34"></InputAcChild>
                  <LabelAcChild for="ac8-34">
                    Mathematics Tutorial IIa
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      The aim of this course is to deepen the understanding of
                      calculus and to cultivate the ability to apply
                      mathematical knowledge. The course is mainly intended for
                      students taking Calculus II.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac8-35"></InputAcChild>
                  <LabelAcChild for="ac8-35">
                    Mathematics Tutorial IIb
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      The aim of this course is to provide essential
                      mathematical knowledge necessary to further study
                      mathematics and other sciences at university level. The
                      course is intended for students taking Linear algebra II.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac8-36"></InputAcChild>
                  <LabelAcChild for="ac8-36">Microbiology</LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This course aims to help students to understand diversity
                      of the microbial world in view of phylogeny, habitats, and
                      metabolism. Starting with basic knowledge on Microbiology
                      including molecular biological and genetic aspects, the
                      main focus will be put on metabolic diversity, which is
                      followed by brief introduction to Applied Microbiology.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac8-37"></InputAcChild>
                  <LabelAcChild for="ac8-37">Organic Chemistry I</LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      Main purpose of this course is to acquire a logical
                      framework for understanding fundamental organic chemistry.
                      This framework emphasizes how the structure of organic
                      molecule is related to the molecular function in chemical
                      reaction. On the basis of the knowledge, we consecutively
                      learn how to solve practical problems in organic
                      chemistry.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac8-38"></InputAcChild>
                  <LabelAcChild for="ac8-38">Organic Chemistry II</LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      Main purpose of this course is to acquire a logical
                      framework for understanding fundamental organic chemistry.
                      Many chemical reactions of organic compounds begin with
                      nucleophile-electrophile interactions. This framework
                      provides an influence for chemical reactions of the
                      organic molecules having π-bonds. On the basis of the
                      knowledge, we consecutively learn how to solve practical
                      problems in organic chemistry.{" "}
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac8-39"></InputAcChild>
                  <LabelAcChild for="ac8-39">Physical Chemistry I</LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      The purpose of this course is to learn what physical
                      chemistry is all about and to grasp important principles
                      and facts about physical chemistry.
                    </p>
                    ,{" "}
                    <p>
                      The course begins with perfect gas law, proceeds to
                      thermodynamics, and finishes with applications of
                      thermodynamics to simple mixtures.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac8-40"></InputAcChild>
                  <LabelAcChild for="ac8-40">Physiology I</LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This course outlines the fundamentals of plant physiology,
                      beginning with a brief introduction of general concepts in
                      physiology to clarify the common or distinct aspects of
                      physiological strategies used by animals and plants.
                      Topics discussed in the plant physiology section include
                      physiological principles of plant structure, growth, and
                      development; transport and translocation of water in
                      plants; responses of plant cells to light and other
                      external signals; and strategies for CO<sub>2</sub>{" "}
                      fixation.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac8-41"></InputAcChild>
                  <LabelAcChild for="ac8-41">Physiology II</LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This course is designed as a continuation of the Animal
                      anatomy and physiology module in Fundamentals of Biology
                      2. Students will deepen their knowledge of animal
                      physiology and understanding of the normal function of
                      organs and organ systems.
                    </p>
                    ,{" "}
                    <p>
                      Students will familiarise themselves with the appropriate
                      scientific terminology and the basic physiology concepts.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac8-42"></InputAcChild>
                  <LabelAcChild for="ac8-42">Plant Physiology</LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This course provides students with a comprehensive
                      understanding of concepts, principles, and strategies
                      concerning the basic mechanisms underlying plant growth,
                      development, and survival. Topics covered include mineral
                      nutrition, solute transport, photosynthesis, respiration,
                      metabolism, environmental and developmental signals, and
                      plant hormone action.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac8-43"></InputAcChild>
                  <LabelAcChild for="ac8-43">Quantum Mechanics I</LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      "What exactly is so special about Quantum Mechanics?" The
                      purpose of this course is to introduce quantum mechanics.
                      It begins with an introduction to elementary quantum
                      mechanics and builds up to convey thorough theoretical
                      understanding of atomic electronic structure.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac8-44"></InputAcChild>
                  <LabelAcChild for="ac8-44">
                    Statistical Physics I
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      The purpose of Statistical Physics I is to understand the
                      basic laws that govern macroscopic bodies consisting of an
                      enormous number of atoms and molecules. This first part of
                      the course covers universal phenomenological laws, called
                      thermodynamic laws, and their applications.
                    </p>
                    ,{" "}
                    <p>
                      The main focus of this course is to understand the basic
                      principles of classical thermodynamics which are the basis
                      for macroscopic understanding of all the physical
                      phenomena. The applications in automotive engineering are
                      also introduced.
                    </p>
                  </DivAcChildContent>
                </DivAcParentContent>
                <InputAcParent type="checkbox" id="ac9"></InputAcParent>
                <LabelAcParent for="ac9">
                  International Education & Exchange Center
                </LabelAcParent>
                <DivAcParentContent>
                  <InputAcChild type="checkbox" id="ac9-0"></InputAcChild>
                  <LabelAcChild for="ac9-0">
                    Contemporary Japanese Society
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This course, taking the form of lectures and discussion
                      classes, aims to introduce students to the main features
                      of contemporary Japanese society. Areas of focus include
                      aspects of Japanese law, economy, education, modernisation
                      and the environment.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac9-1"></InputAcChild>
                  <LabelAcChild for="ac9-1">
                    Disney as Cultural Teacher{" "}
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This is a media-literacy course on "reading Disney": how
                      to understand the social, cultural, and gender messages
                      encoded in Disney features, from the earliest animations
                      to full-length "live action" movies, as well as the Disney
                      Worldview, Disneyfication, and whether Disney is "good"
                      for children.
                    </p>
                    ,{" "}
                    <p>
                      From the beginning, Walt Disney sought to present
                      "American" values and viewpoints, as well as ones deemed
                      universal, through his productions. The nature of this
                      Americanism has changed over the years as American society
                      has changed, and this is reflected in the images. But core
                      patterns have remained. Through lecture and video viewing,
                      we will look at{" "}
                      <ol>
                        <li>
                          the social and psychological meaning of Mickey Mouse
                          and other characters
                        </li>
                        <li>
                          the process of Disneyfication (changing sources to fit
                          the Disney Formula)
                        </li>
                        <li>the evolving stereotypes in Disney</li>
                        <li>
                          the effects on children of the stereotypes and
                          commercialism
                        </li>
                        <li>the Disney Worldview</li>
                        <li>Disney's ideas of history and of nature</li>
                        <li>Disney and feminism</li>
                        <li>how Disney has adapted to different countries.</li>
                      </ol>
                    </p>
                    ,{" "}
                    <p>
                      Materials for viewing and analysis include early Mickey
                      Mouse cartoons, Silly Symphonies, Aladdin, The Little
                      Mermaid, Pocahontas, Bambi, Disney True Live Adventures,
                      Cinderella, and Pretty Woman.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac9-2"></InputAcChild>
                  <LabelAcChild for="ac9-2">
                    Immigration in Japan: Law, Policy, and Society
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This course aims to analyse the legal and social status of
                      foreigners in Japan, focusing on the immigration law
                      framework, immigration policy, the rights and protections
                      afforded under domestic laws, and prospective developments
                      vis-à-vis their admission and residence. Time will also be
                      devoted to discussing Japanese perceptions of foreigners,
                      international marriage and families, as well as the
                      showing of videos.
                    </p>
                    ,{" "}
                    <p>
                      Students are encouraged to draw comparisons with the
                      situation in their home countries and, possibly, to
                      examine the protection afforded to foreigners under
                      international law.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac9-3"></InputAcChild>
                  <LabelAcChild for="ac9-3">
                    Introduction to Intercultural Competence
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This course attempts to introduce the fundamental concepts
                      and models related to 'Intercultural Competence (IC)', to
                      make students conscious of their own IC, and to provide
                      the tools to develop it. Students are expected to work in
                      groups and have discussions in the class. In the first
                      part of the course, students will get familiar with the
                      fundamental terms, concepts and models of IC. In the
                      second part, the main focus will be in learning how IC can
                      be developed and assessed. At the end of the course,
                      students will give final presentations based on the topics
                      provided.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac9-4"></InputAcChild>
                  <LabelAcChild for="ac9-4">
                    Teaching Practice in the Japanese Community
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This course involves teaching English to, and developing a
                      rapport with approximately twenty elementary school-aged
                      children (aged six to twelve) at Nagoya University's
                      childcare centre, "Poppins-After-School". Students will be
                      required to devise an English-language curriculum (which
                      may include the teaching of basic theme-oriented
                      vocabulary using visual aids; playing educational games
                      and simple sports, etc.), and then, in accordance with the
                      curriculum, teach the pupils rudimentary-level English.
                      Those students, who at the end of the semester submit a
                      report describing their teaching practice experience, will
                      receive 2 credits.
                    </p>
                    ,{" "}
                    <p>
                      A brief orientation will be held for participants at 16:30
                      on Wednesday, April 23, and a site-visit to
                      Poppins-After-School will be arranged before the teaching
                      sessions commence.
                    </p>
                  </DivAcChildContent>
                </DivAcParentContent>
                <InputAcParent type="checkbox" id="ac10"></InputAcParent>
                <LabelAcParent for="ac10">
                  Institute of Liberal Arts and Sciences
                </LabelAcParent>
                <DivAcParentContent>
                  <InputAcChild type="checkbox" id="ac10-0"></InputAcChild>
                  <LabelAcChild for="ac10-0">Academic Writing </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      The purpose of this class is to introduce students to the
                      art of academic writing. Students will learn about
                      choosing appropriate research topics, developing their
                      argument, structuring sentences, paragraphs, and essays,
                      engaging in proper notation, and capturing reader
                      interest. The primary aim of the course is to equip
                      students with the writing skills to advance through their
                      undergraduate education.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac10-1"></InputAcChild>
                  <LabelAcChild for="ac10-1">Basic Mathematics</LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      The main aims of this course are to review high school
                      mathematics and to deepen knowledge and understanding of
                      basic calculus and linear algebra in order to get the
                      necessary proficiency to apply mathematics to economics
                      and social sciences. We will focus on applied examples
                      rather than theoretical foundations of mathematics.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac10-2"></InputAcChild>
                  <LabelAcChild for="ac10-2">Biotechnology</LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      The purpose of this course is:{" "}
                      <ol>
                        <li>
                          To provide basic knowledge on biological processes
                          that will help students understand the science behind
                          the technologies
                        </li>
                        <li>
                          To present examples of actual technology used in the
                          industry
                        </li>
                        <li>
                          To discuss the benefits and drawbacks of Biotechnology
                          to humanity and the environment
                        </li>
                        <li>
                          To provide a venue for students to express their
                          opinions regarding the issues related to Biotechnology
                        </li>
                      </ol>
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac10-3"></InputAcChild>
                  <LabelAcChild for="ac10-3">Calculus I</LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      Analysis is the field of mathematics that describes and
                      analyzes quantitative change and the central method is
                      differential and integral calculus. These methods are
                      indispensable research techniques in the natural sciences,
                      and recently, have found increasing applications also in
                      the social sciences. The aim of the first half of this
                      one-year course is to furnish students with a solid
                      understanding of single variable calculus. Emphasis is
                      placed on the concept of limit along with the elementary
                      functions (logarithmic, exponential, and trigonometric
                      functions).
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac10-4"></InputAcChild>
                  <LabelAcChild for="ac10-4">Calculus II</LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      Analysis is the field of mathematics that describes and
                      analyzes quantitative changes, and the central methods are
                      is differential and integral calculus. These methods are
                      essential techniques in natural science, and have recently
                      found increasing applications also in social sciences. The
                      aim of the second half of this one-year course is to
                      provide a solid understanding of functions of several real
                      variables .{" "}
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac10-5"></InputAcChild>
                  <LabelAcChild for="ac10-5">
                    Comparative Studies of Cultures
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This course is designed to introduce students to basic
                      theories, methods, and applications of comparative
                      cultural studies. In particular, our focus in this course
                      will be on the historical development of Japanese culture
                      vis-à-vis the influences of China, Korea, India and the
                      West. Working within this comparative context, students
                      will be encouraged to think critically about the various
                      ways in which Japan has inflected the influences of
                      Buddhism, Confucianism, Chinese written language, and
                      technologies of cultural production as it has developed
                      its own distinctive cultural traditions. Through oral
                      discussion and written exercises, students will be given
                      opportunities to develop analytic reasoning,
                      communication, and basic academic writing skills. All
                      readings and viewings for this course will be in English
                      translation. No proficiency in Japanese or previous
                      background in the humanities is required.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac10-6"></InputAcChild>
                  <LabelAcChild for="ac10-6">Complex Analysis</LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      The aim of this course is to introduce basic techniques of
                      complex analysis. Indeed, the notion of a complex analytic
                      function of one variable is much more rigid than the
                      notion of a real differentiable function of one variable
                      and thus gives rise to a particularly rich theory. The
                      course gives an introduction to the basic elements of this
                      theory with an emphasis on complex line integrals.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac10-7"></InputAcChild>
                  <LabelAcChild for="ac10-7">
                    Culture and Representation
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This course is a survey of Japanese visual culture from
                      the Meiji Period (1868-1912) to the present. Through a
                      series of examinations into individual works of print
                      media, photography, film, and animation, students will be
                      introduced to conceptually or ideologically complex
                      problems of representation. The principal aim of this
                      course is to enable students to think and write critically
                      about the aesthetic, technical, commercial and ideological
                      concerns that subtend the production of visual culture.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac10-8"></InputAcChild>
                  <LabelAcChild for="ac10-8">
                    Culture and Representation
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This course will engage students in sustained analysis and
                      self-analysis of key ideas of cultural and social theories
                      by referring to wide spectrums of cultural objects and
                      practices, with particular interest in the visual
                      representation in film works. The survey also extends to
                      other representational genres such as painting,
                      photography and the virtual images and so forth.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac10-9"></InputAcChild>
                  <LabelAcChild for="ac10-9">Economics A</LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      The purpose of this course is to help students master the
                      basic concepts of economics. It starts with the twin
                      themes of economics, scarcity and efficiency, then
                      explores the field of microeconomics, the branch of
                      economics that is concerned with the behavior of
                      individual entities such as market, firms, and households.
                      Questions including how individual prices are set, how
                      much firms produce, how much households consume, as well
                      as the strengths and weaknesses of the market mechanisms
                      are examined in details. Upon successful completion of the
                      course, students should be able to understand the basic
                      concepts of economics, as well as to analyze daily
                      decisions faced by firms and households.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac10-10"></InputAcChild>
                  <LabelAcChild for="ac10-10">Economics B</LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      The purpose of this class is to help students learn the
                      fundamental lessons of economics and to show how such
                      lessons can be applied to the world in which we live. In
                      this class students learn principles of economics as
                      followed: The management of society's resources is
                      important because resources are scarce. Economics is the
                      study of how society manages its scarce resources.
                      Economists study how people make decisions: how much they
                      work, what they buy, how much they save, and how they
                      invest.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac10-11"></InputAcChild>
                  <LabelAcChild for="ac10-11">
                    Exercise and Sports I
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This class emphasizes the development of fundamental
                      Association Football (Soccer) skills, knowledge of game
                      rules and team tactics of play. The students are expected
                      to deepen their understanding of this game and also to
                      learn how to show good leadership to organize the team and
                      how to maintain their own well-being status throughout
                      this class.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac10-12"></InputAcChild>
                  <LabelAcChild for="ac10-12">
                    Exercise and Sports II
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This class emphasizes the development of fundamental
                      badminton skills, knowledge of game rules, and tactics of
                      play. The students are expected to deepen their
                      understanding of this game and also to learn how to
                      maintain their own well-being status throughout this
                      class.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac10-13"></InputAcChild>
                  <LabelAcChild for="ac10-13">
                    Exploration of Japan: From the Outside Looking Inside
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This course has three interrelated purposes. The first is
                      to help students learn some essential elements of Japanese
                      culture and society. In class, students will be given
                      opportunities to explore Japanese culture and
                      cross-cultural issues through group discussion,
                      presentation, and group project. The second is to help
                      students to examine both difficulties/challenges and
                      excitement/joy of intercultural communication by learning
                      key concepts of intercultural communication. The third is
                      to facilitate students' on-going intercultural
                      communication and group work by increasing awareness of
                      how their respective cultures, communication styles, and
                      working styles affect group process and development.
                      Lectures, discussions, simulation game, group interaction
                      and presentation will be designed to provide students with
                      insight and skills for building on their intercultural
                      competence.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac10-14"></InputAcChild>
                  <LabelAcChild for="ac10-14">
                    First Year Seminar A
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      The purpose of this course is to teach principles of good
                      science practice and to raise awareness of, and interest
                      in, current issues in our civilization. Students will
                      learn to search information, interpret it, and present it
                      in an open forum.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac10-15"></InputAcChild>
                  <LabelAcChild for="ac10-15">
                    First Year Seminar A
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      The purpose of this course is to teach principles of good
                      science practice and to raise awareness of, and interest
                      in, current issues in our civilization. Students will
                      learn to search information, interpret it, and present it
                      in an open forum.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac10-16"></InputAcChild>
                  <LabelAcChild for="ac10-16">
                    First Year Seminar A
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      The aims of this seminar are to understand scientific
                      methods and to develop public speech abilities. More
                      precisely, we will focus on the good use of mathematics in
                      science. From twice to four times in the semester, each
                      student will choose a text to study in a provided list and
                      prepare a short presentation about this text and its
                      interpretation.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac10-17"></InputAcChild>
                  <LabelAcChild for="ac10-17">
                    First Year Seminar A{" "}
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      The purpose of this course is to examine Japan since the
                      "bubble period" with materials from history, sociology,
                      anthropology, and the popular press.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac10-18"></InputAcChild>
                  <LabelAcChild for="ac10-18">
                    First Year Seminar A{" "}
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      The purpose of this course is to teach principles of good
                      science practice and to raise awareness of, and interest
                      in, current issues in our civilization. Students will
                      learn to search information, interpret it, and present it
                      in an open forum.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac10-19"></InputAcChild>
                  <LabelAcChild for="ac10-19">
                    First Year Seminar B
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      What is Nagoya famous for? Why is Nagoya important? Why is
                      Toyota located in Aichi Prefecture? To answer these
                      questions join this class! Students will gain information
                      literacy and research skills while learning about the
                      impact Nagoya and Aichi Prefectutre have had on Japanese
                      history, literature, and culture.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac10-20"></InputAcChild>
                  <LabelAcChild for="ac10-20">
                    First Year Seminar B
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This course aims to educate students in the social
                      sciences and humanities about current social, economic and
                      political issues facing Japan, as well as to foster
                      critical inquiry, analysis and debate. Rather than a
                      traditional lecture, this course will be a
                      student-centered, academic simulation of the Japanese
                      House of Representatives (lower house of the National
                      Diet), or Model Diet. Each student participant will be
                      expected to role-play as a legislator, according to an
                      assigned party affiliation and background profile. Student
                      responsibilities will include researching select domestic
                      or foreign relations issues, working in pairs to prepare
                      and present six brief position papers, engaging in debate
                      over proposed bills, voting on bills, and finally,
                      reporting to constituents.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac10-21"></InputAcChild>
                  <LabelAcChild for="ac10-21">
                    Fundamentals of Biology I
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      The aim of this course is to introduce the key concepts of
                      basic biology. In order to understand life, we have to
                      understand the molecular processes that occur in and
                      around cells, from energy procurement to reproduction and
                      gene expression. Through such processes, living things go
                      through evolution giving rise to biological diversity.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac10-22"></InputAcChild>
                  <LabelAcChild for="ac10-22">
                    Fundamentals of Biology II
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This course's main goal is to provide students with
                      working understanding on how human body functions and the
                      ability to use this knowledge in everyday health-related
                      situations. The course focuses on human anatomy and
                      physiology, but also on how organ systems' organization
                      has changed throughout animals' evolution.
                    </p>
                    ,{" "}
                    <p>
                      Short introduction is given on plant morphology and
                      physiology, as well as on basic concepts of ecology. These
                      sections will allow students to critically evaluate
                      agricultural and ecological issues. The course emphasizes
                      the conceptual understanding of the biological topics
                      discussed, rather than on memorization of terms and facts.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac10-23"></InputAcChild>
                  <LabelAcChild for="ac10-23">
                    Fundamentals of Chemistry I
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      The purpose of this course is to grasp what chemistry is
                      all about and is to learn important principles and facts
                      in chemistry. The course begins with atomic structure,
                      proceeds next to bonding and molecules, and moves then to
                      bulk physical properties of substances.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac10-24"></InputAcChild>
                  <LabelAcChild for="ac10-24">
                    Fundamentals of Chemistry II
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      The main purpose of this course is to grasp what chemistry
                      is all about and to learn important principles and factors
                      in subcategories of chemistry. The course begins with
                      chemical kinetics and equilibrium, proceeds to
                      thermodynamics and electronics, and finishes with chemical
                      properties.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac10-25"></InputAcChild>
                  <LabelAcChild for="ac10-25">
                    Fundamentals of Earth Science I
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      The study of planet Earth embraces a wide range of topics,
                      from the formation of rocks to the evolution of life. In
                      this course, we will talk about plate tectonics, the
                      fundamental theory underlying all geological processes
                      which have shaped the environment in which we live and
                      continue to modify the landscape, from the slow and
                      progressive uplift of mountain chains to violent
                      earthquakes and volcanic eruptions. The students will
                      learn how the Earth recycles matter and how minerals and
                      rocks form and are transformed. One chapter of the course
                      is dedicated to the issue of time, central in earth
                      science, and tackles the question of how the age of rocks
                      and geological events can be determined. We will then take
                      a step back and look at Earth's 4.5 billion year history
                      to see how the Earth's geography has changed and how life
                      has evolved. Besides providing a basic and up-to-date
                      knowledge of the essential concepts of earth science, the
                      aim of this course is to stimulate the students' interest
                      and curiosity for the study of planet Earth and provoke
                      questions, comments, and discussions about issues related
                      to earth science.{" "}
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac10-26"></InputAcChild>
                  <LabelAcChild for="ac10-26">
                    Fundamentals of Earth Science II
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      In the course "Fundamentals of Earth Science II" we
                      examine the interactions between humanity and the Earth
                      system. The Earth is a dynamic planet where the evolution
                      of the environment and that of life are closely related.
                      Human societies have been, and still are, profoundly
                      influenced by climate change and catastrophic geologic
                      events, such as volcanic eruptions and earthquakes. Entire
                      civilizations have been decimated by droughts, and major
                      cities have been destroyed by ground shaking, tsunamis or
                      pyroclastic flows. Today the growing human population and
                      its use of natural resources are affecting the environment
                      on a global scale to an extent never attained before.
                      Learning about the interactions between humanity and the
                      Earth system is needed to use Earth's limited natural
                      resources in a sustainable manner, minimize the risks of
                      natural hazards and envisage a reasonable future for us
                      all.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac10-27"></InputAcChild>
                  <LabelAcChild for="ac10-27">
                    Fundamentals of Physics I
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      Physics is at the foundation of science and engineering.
                      Fundamentals of Physics I is the first of a series of four
                      lecture courses that cover the basic classical physics. It
                      introduces the concepts and laws of classical mechanics.
                      The topics include kinematics, vectors, force and motion,
                      energy, work and momentum. Problem solving involving the
                      applications of the concepts and laws is discussed in the
                      lectures, but the companion Fundamental Physics Tutorial
                      Ia is designed to further develop students' problem
                      solving skills. Further topics in mechanics will be
                      covered in Fundamentals of Physics II.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac10-28"></InputAcChild>
                  <LabelAcChild for="ac10-28">
                    Fundamentals of Physics II
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      Physics is at the foundation of science and engineering.
                      This is the second of a series of four courses that cover
                      the fundamentals of physics. The first 2/3 of this course
                      covers further topics in mechanics: equilibrium and
                      elasticity, gravitation, fluids, oscillations and the
                      remaining 1/3 of the course introduces thermal physics.
                      Besides learning to solve problems within each topic,
                      students will also learn to solve problems that cut across
                      these topics.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac10-29"></InputAcChild>
                  <LabelAcChild for="ac10-29">
                    Fundamentals of Physics III
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This is the third of a series of four FP courses that
                      cover the fundamentals of physics. It introduces the basic
                      concepts and laws of electricity and magnetism, as well as
                      their applications to solving a range of problems.
                      Students will also be encouraged and guided to solve
                      problems using different methods.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac10-30"></InputAcChild>
                  <LabelAcChild for="ac10-30">
                    Fundamentals of Physics IV
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This is the last of a series of four courses that cover
                      the fundamentals of physics. It focuses on mechanical and
                      waves, the electromagnetic waves and optics. Both
                      conceptual understanding and problem solving will be
                      emphasized as in previous courses in the series.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac10-31"></InputAcChild>
                  <LabelAcChild for="ac10-31">
                    Health and Sports Science: Lecture
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      In recent years "health" is a primary concern, especially
                      among people middle-aged and over. This is because people
                      are afraid of being obese and developing other
                      lifestyle-related diseases, as a result of overeating and
                      sedentary lifestyles. Our health system is facing problems
                      such as the "shortage of medical resources" and "unequal
                      opportunities to receive medical treatment mainly due to
                      income difference" while the aging population is
                      increasing rapidly. Is it possible to maintain the
                      benefits of "advanced medicine" such as regenerative
                      medicine, organ transplantation, and gene therapy?
                      Furthermore, life span extension and advanced medicine
                      have caused new ethical problems. These issues need to be
                      discussed by everyone, including young university
                      students.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac10-32"></InputAcChild>
                  <LabelAcChild for="ac10-32">History</LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This course is a seminar in modern Japanese history, with
                      a focus on{" "}
                      <ol>
                        <li>
                          understanding the continuities and discontinuities
                          that have contributed to the formation of modern and
                          contemporary Japan through the exploration of discrete
                          issues including race, gender, culture, etc.{" "}
                        </li>
                        <li>
                          improving your critical thinking, reading, and
                          communication skills.
                        </li>
                      </ol>
                      <br />
                      There are two categories of goals: content and skills. By
                      the end of the term you will:{" "}
                      <ol>
                        <li>
                          rethink the contours of modern Japanese history,
                          culture, and nationality; challenge the mythology of a
                          historically monolithic Japan from the perspective of
                          history, and be able to apply that perspective and our
                          shared findings in other historical contexts
                        </li>
                        <li>
                          be a more efficient and critical reader of academic
                          English, and an improved communicator.
                        </li>
                      </ol>
                      <br />
                      Whether or not you are involved with Japan in the future,
                      these are skills and knowledge directly applicable to your
                      lives beyond university, both in and out of the workplace.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac10-33"></InputAcChild>
                  <LabelAcChild for="ac10-33">
                    Information Literacy
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      The aim of this course is to help students master, through
                      lectures and practical training, the fundamentals of
                      information literacy. This refers to the ability to use
                      information and communication technology such as computers
                      and online networks for the gathering, transmission,
                      organization and analysis of information. While the
                      internet allows us to gather and transmit information at
                      will, there are a few standard rules that need to be
                      followed. The objectives of the course is for students to
                      learn how to use computers and networks by fully
                      understanding these basic rules.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac10-34"></InputAcChild>
                  <LabelAcChild for="ac10-34">
                    International Politics
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This course offers a comprehensive introduction to the
                      study of International Relations (IR). The course will
                      commence with a review of the debate over the very
                      definition of the field of IR as an area of study in
                      Political Science. It then proceeds to cover such topics
                      as IR theory, international political economy,
                      international diplomacy and the making of state foreign
                      policy, Intergovernmental and Nongovernmental
                      Organizations (IGO's and NGO's), and global human rights.
                      Further, the course will examine the networks of
                      interstate relations - the Westphalia system, the UN model
                      and Cosmopolitan Democracy - that characterize modern
                      world history. It will conclude with discussion of the
                      implications of globalization for the future of
                      international security, interstate relations, and the
                      nation state itself.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac10-35"></InputAcChild>
                  <LabelAcChild for="ac10-35">
                    International Society of Globalization Age
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This course begins with an overview of the central
                      philosophical ideas that factor into the making of Liberal
                      Democracy. It then proceeds to examine the changes in
                      democracy that occurred across the history of Liberal
                      Democracy. The course discussion revolves around a set of
                      "models" of democracy that helps us come to grips with the
                      range of changes democracy has undergone along with the
                      limits democracy faces. A central point the course makes
                      is that Liberal Democracy is a feature of the modern era
                      and is to be differentiated from what had been referred to
                      as "democracy" in ancient history. The class concludes
                      with the question of whether it is possible to advance
                      beyond Liberal Democracy to a more progressive and
                      inclusive form of democracy?
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac10-36"></InputAcChild>
                  <LabelAcChild for="ac10-36">
                    Introduction to Career Development Theory - Career
                    Exploration in Japan -
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>Course description:</p>,{" "}
                    <p>
                      This course is designed to give students the opportunity
                      to explore, enhance, and broaden their work interests and
                      develop an understanding of their career and the working
                      world of Japan.
                    </p>
                    , <p>Course goal:</p>,{" "}
                    <p>
                      Through class works, lectures, and site-study sessions,
                      students are expected to learn about themselves, raise
                      awareness on importance of career planning, and gain
                      insights into and develop an understanding of their
                      career, work environment and culture in Japan.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac10-37"></InputAcChild>
                  <LabelAcChild for="ac10-37">
                    Introduction to Cultural Studies
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This course is designed to introduce students to basic
                      concepts in the study of culture. Our study will be guided
                      by two fundamental questions-namely, what is culture? And
                      secondly, how can the study of culture enhance our
                      understanding of human society, both present and past?
                      Working within this framework, students will be challenged
                      to think critically and analytically about issues in the
                      study of culture-and given our context, Japanese culture,
                      in particular. All readings and viewings for this course
                      will be in English translation. No proficiency in Japanese
                      or previous background in the humanities is required.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac10-38"></InputAcChild>
                  <LabelAcChild for="ac10-38">
                    Laboratory in Biology (A)
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      The aim of this course is to provide freshman/sophomore
                      level students with the conceptual framework, factual
                      knowledge, and analytical skills necessary to deal
                      critically with the rapidly changing science of biology
                      and to understand the applications of biology. The work of
                      the course is done via a series of laboratory exercises.
                      Students are required to attend all the classes. Students
                      shall inform their instructors of dates they will miss
                      class due to an excused absence prior to the date of that
                      anticipated absence. There are no exams, but students are
                      required to write laboratory reports.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac10-39"></InputAcChild>
                  <LabelAcChild for="ac10-39">
                    Laboratory in Biology (B)
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      Investigation and experimentation forms the foundation of
                      science knowledge and is one of the core skills needed for
                      scientific inquiry. This training course is designed to
                      help students become familiar with experimental and
                      explorative techniques for observation, description, and
                      analysis of plant, animal and microbiological activities
                      at the organismal, cellular, and molecular levels.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac10-40"></InputAcChild>
                  <LabelAcChild for="ac10-40">
                    Laboratory in Chemistry{" "}
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      The objective of this course is to learn how to
                      effectively perform experiments in a detailed oriented
                      manner including careful note taking of the procedures,
                      findings, and questions that may arise from the
                      experiments. The other objective is to clearly and
                      concisely convey to others the findings of the experiments
                      that support your conclusion.
                    </p>
                    ,{" "}
                    <p>
                      Motto: perform the experiments by yourself, visually
                      observe and record what happened in the experiments, and
                      report the results clearly.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac10-41"></InputAcChild>
                  <LabelAcChild for="ac10-41">
                    Laboratory in Physics
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      The goal of this course is to improve your understanding
                      of the theory behind physical values and phenomena on the
                      basis of measurements and observations, and to help you
                      master experimental techniques such as basics, methods,
                      and principles of measurement by using various types of
                      equipment. Concurrently, practice assignments related to
                      the experiments are given to facilitate understanding of
                      data analysis and writing of reports. There is a
                      historical, intellectual, social, and technical background
                      behind each subject covered in the experiments. The
                      experimental equipment and methodologies covered in this
                      course can be applied in the majority of fields related to
                      natural science. Hence, students interested in physics as
                      well as those majoring in other fields will discover the
                      applicability of the lessons learnt in their major through
                      laboratory experiments performed in this class. Students
                      are expected to learn from not only classroom lectures but
                      also hands-on physics laboratory experiments, which
                      constitute a fundamental academic skill required for
                      future studies in their specific fields.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac10-42"></InputAcChild>
                  <LabelAcChild for="ac10-42">Linear Algebra I</LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      Linearity now is the most basic concept for the handling
                      of quantities in current natural science. Indispensable in
                      quantum mechanics and relativity, its use has spread
                      across all branches of natural science and beyond. Linear
                      algebra, developed in the nineteenth century, is the
                      mathematical theory of linearity. The first half of this
                      one-year course focuses on the techniques for manipulating
                      systems of linear equations and their application to
                      analytic geometry (in two and three dimensions). Emphasis
                      is placed on the ability to solve systems of linear
                      equations including a thorough understanding of the
                      determinant of a matrix.{" "}
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac10-43"></InputAcChild>
                  <LabelAcChild for="ac10-43">Linear Algebra II</LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      Linearity now is one of the most basic concepts for the
                      handling of quantities in current natural sciences.
                      Indispensable in quantum mechanics and relativity, its use
                      has spread across all branches of natural sciences and
                      beyond. Linear algebra, developed in the nineteenth
                      century, is the mathematical theory of linearity. The
                      second half of this one-year course focuses on advanced
                      concepts of Linear algebra as orthogonality, determinants,
                      eigenvalues and eigenvectors .
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac10-44"></InputAcChild>
                  <LabelAcChild for="ac10-44">Literature</LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      The top challenge for medicine in the 21st century is the
                      prevention of life-style related diseases. Good habits
                      (lifestyle) from a young age are critical to having a long
                      healthy life. In an ageing society, prevention, not just
                      treatment, is critical for the continuation of the present
                      health care system.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac10-45"></InputAcChild>
                  <LabelAcChild for="ac10-45">Literature</LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      The purposes of this lecture are:{" "}
                      <ol>
                        <li>
                          to support the health care of each student by
                          addressing lifestyle-related issues such as nutrition,
                          exercise, alcohol and smoking, and
                        </li>
                        <li>
                          to help in learning essential medical issues such as
                          the prevention of infectious diseases, and
                        </li>
                        <li>
                          to enhance the ability to discuss issues such as
                          social security and bioethics.
                        </li>
                      </ol>
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac10-46"></InputAcChild>
                  <LabelAcChild for="ac10-46">Management</LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This course aims to develop a basic understanding of
                      business ethics and the ability to think critically about
                      the moral issues we confront in business and professional
                      life. The primary objectives of this course are:{" "}
                      <ol>
                        <li>
                          to examine the wide range of ethical challenges that
                          can arise in business (such as consumer protection,
                          drug testing, and discrimination);
                        </li>
                        <li>
                          to explore various moral beliefs and ethical arguments
                          relevant to business practices; and
                        </li>
                        <li>
                          to emphasize the need for compassion and fairness in
                          professional life.
                        </li>
                      </ol>
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac10-47"></InputAcChild>
                  <LabelAcChild for="ac10-47">
                    Market Economy and Society
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      The objective of this course is to provide students with a
                      broad understanding of how business can be a sustainable,
                      achieve financial success, and benefit many stakeholders
                      while exploiting none. The course considers green business
                      in terms of questions of justice, rights, democratic
                      decision-making, and the health of communities,
                      individuals, and ecosystems. Environmental issues to be
                      examined include energy, water, food production, waste,
                      pollution, climate change, and ecosystems.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac10-48"></InputAcChild>
                  <LabelAcChild for="ac10-48">
                    Mathematics Tutorial Ia
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      The aim of this course is to provide essential
                      mathematical knowledge necessary to further study
                      mathematics and other sciences at university level. After
                      completing the course the student should be familiar with
                      basic mathematical concepts. In particular, the student
                      should be able to draw graphs and solve simple equations.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac10-49"></InputAcChild>
                  <LabelAcChild for="ac10-49">
                    Mathematics Tutorial Ib
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      The aim of this course is to provide essential
                      mathematical knowledge necessary to further study
                      mathematics and other sciences at university level. After
                      completing the course the student should be familiar with
                      basic mathematical concepts. In particular, the student
                      should be able to draw graphs and solve simple equations.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac10-50"></InputAcChild>
                  <LabelAcChild for="ac10-50">
                    Mathematics Tutorial IIa
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      The aim of this course is to deepen understanding of
                      calculus and to cultivate the ability to apply
                      mathematical knowledge. The course is mainly intended for
                      students taking Calculus II.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac10-51"></InputAcChild>
                  <LabelAcChild for="ac10-51">
                    Mathematics Tutorial IIb
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      The aim of this course is to provide essential
                      mathematical knowledge necessary to further study
                      mathematics and other sciences at the university level.
                      The course is intended for students taking Linear Algebra
                      II.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac10-52"></InputAcChild>
                  <LabelAcChild for="ac10-52">Modern Biology</LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      The purpose of this course is to learn the philosophy,
                      principles, and techniques of modern biology. The course
                      is particularly designed for those who have not learned
                      biology previously or whose major is other than biology,
                      and who may think that they do not need to know any
                      biology at all. The topics are covered in a rather
                      general, overview manner, but certain level of diligence
                      in grasping concepts and memorizing the terminology is
                      expected.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac10-53"></InputAcChild>
                  <LabelAcChild for="ac10-53">
                    Past and Present of Democracy
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This course begins with an overview of the central
                      philosophical ideas that factor into the making of Liberal
                      Democracy. It then proceeds to examine the changes in
                      democracy that occurred across the history of Liberal
                      Democracy. The course discussion revolves around a set of
                      "models" of democracy that helps us come to grips with the
                      range of changes democracy has undergone along with the
                      limits democracy faces. A central point the course makes
                      is that Liberal Democracy is a feature of the modern era
                      and is to be differentiated from what had been referred to
                      as "democracy" in ancient history. The class concludes
                      with the question of whether it is possible to advance
                      beyond Liberal Democracy to a more progressive and
                      inclusive form of democracy?
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac10-54"></InputAcChild>
                  <LabelAcChild for="ac10-54">Political Science</LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This class introduces students to the study of political
                      science as an academic discipline. Its first aim is to
                      familiarize students with the subject matter of the main
                      areas of study in the political science field. The second
                      aim is to cultivate critical thinking among students about
                      the most fundamental and timeless questions that are asked
                      in politics and the study of political science. The third
                      aim of the course is to examine ways the main areas of
                      study in the political science field inform each other.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac10-55"></InputAcChild>
                  <LabelAcChild for="ac10-55">
                    Pre-college Mathematics
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      This course is a companion course to Calculus I. It aims
                      to help students with little or no precalculus knowledge
                      to master the basic calculus material in preparation for
                      the more advanced course of Calculus I. This is done by
                      reviewing high school mathematics.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac10-56"></InputAcChild>
                  <LabelAcChild for="ac10-56">
                    Preparedness for Imminent Natural Disasters
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      The objective of this course is twofold. First, to provide
                      students with a clear understanding of disaster
                      preparedness, and second, focusing on earthquake hazards,
                      foster creative problem solving skills through real world
                      case studies and hands-on multidisciplinary projects.
                    </p>
                  </DivAcChildContent>
                  <InputAcChild type="checkbox" id="ac10-57"></InputAcChild>
                  <LabelAcChild for="ac10-57">
                    Science of Materials
                  </LabelAcChild>
                  <DivAcChildContent>
                    <p>
                      To learn about the fundamental and technological aspects
                      of various materials, including metals, semiconductors,
                      polymers, composites, dielectrics, and magnets. The course
                      begins with an introduction of the atomic and crystal
                      structures of materials. The tools used to describe
                      crystal structures will be presented. These topics
                      constitute the first fundamental step towards the
                      understanding of materials properties. The relationships
                      that exist between the structural elements of materials
                      (microscopic properties) and their properties and
                      performance (macroscopic properties) will be emphasized
                      throughout the lectures. The materials mechanical,
                      electrical, thermal and magnetic properties will be
                      discussed both fundamentally and technologically.
                    </p>
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
                    backgroundColor: `#FF6860`,
                  }}
                  to="../grad"
                >
                  <img
                    className="is-paddingless is-marginless"
                    src={withPrefix("/img/catalog/u_grad/c_type_chg.png")}
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
  border-color: #16a6b6 !important;
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
  border-color: #16a6b6 !important;
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

export default EnCatalogUGradIndexPage;
