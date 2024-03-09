import React, { useState, useRef, useEffect } from 'react';

import { CarouselButton, CarouselButtonDot, CarouselButtons, CarouselContainer, CarouselItem, CarouselItemImg, CarouselItemText, CarouselItemTitle, CarouselMobileScrollNode } from './TimeLineStyles';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { TimeLineData } from '../../constants/constants';
import { DiCode } from 'react-icons/di';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TimeLineStyles';

const TOTAL_CAROUSEL_COUNT = TimeLineData.length;

const Timeline = () => {

  return (
    <Section nopadding id="Expereince">
      <SectionTitle> <DiCode size="4rem"/> Experience</SectionTitle>
      <SectionText>
      ➡️ <b>[Undergraduate Research Assistant @ Illinois Risk Lab]</b> ⬅️<br />
      🔹 Collaborated with Dr. Runhuan Feng and Dr. Peixin Liu to investigate and study the evolution, history, and current state of Decentralized Autonomous Organizations (DAOs)<br />
      🔹 Co-authored a report on the historical evolution and current state of DAOs, synthesizing research findings and case studies to provide insightful perspectives on their development and future potential<br />

      <br />
      <br />
      ➡️ <b>[Undergraduate Research Assistant @ Smith Lab: UIUC]</b> ⬅️<br />
      🔹 Collaborated with Dr. Rebecca Lee Smith on a Center for Disease Control (CDC)-funded project to transform existing traditional R-scripts into dynamic RShiny applications, enhancing vector control studies<br />
      🔹 Revamped the data upload system in the application, enabling seamless dataset uploads, reducing data entry time by an estimated 70% and facilitating instant visualization through descriptive plots<br />
      🔹 Debugged the RShiny application, enabling it to handle 15% more specimens for extensive study<br/>

      <br />
      <br />
      ➡️ <b>[Software Engineering Intern @ Country Financial]</b> ⬅️<br />
      🔹 Transitioned code for insurance processes and calculations from SAS to Python using Pandas, achieving a 12% improvement in code performance and speed. Implemented unit tests using PyTest for validation<br />
      🔹 Deployed Azure Spring Applications using Microsoft Bicep, accelerating the implementation process. Composed comprehensive documentation to guide future use of Bicep in company software deployments<br />
      🔹 Deployed an insurance-focused generative AI model, training it on relevant insurance concepts and company data<br/>

      <br />
      <br />
      ➡️ <b>[Software Engineering Intern @ NCSA]</b> ⬅️<br />
      🔹 Collaborated with the National Center for Atmospheric Research on Dr. Nicole Riemer’s Atmospheric Chemistry Simulations web interface<br/>
      🔹 Developed time-series models for tracking aerosol particle concentrations using Python, D3.js and NetCDF files<br/>
      🔹 Enhanced website support for larger files and optimized frontend-to-backend efficiency for more accurate and refined model outputs<br/>
      <br />
      <br />
      ➡️ <b>[Undergraduate Teaching Assistant @ STAT 107]</b> ⬅️<br />
      🔹 Facilitated and led weekly Python lab sections. Helped students understand lab prompts and solve programming problems. Troubleshot technical issues relating to Git, Visual Studio Code, and Python.<br />
      🔹 Held weekly office hours for over 550+ students to help them understand data science, programming, and statistics concepts, solve homework problems, and lab assignments, and provide exam reviews.<br />
      🔹 Managed and guided students with course assignments, coding projects, labs and exams on the online course forum.<br />
      <br />
      <br />
      ➡️ <b>[Undergraduate Teaching Assistant @ CS 124]</b> ⬅️ <br />
      🔹 Assisted and guided 950+ students to understand and learn the basics of computer science and the Java programming language<br />
      🔹 Actively held office hours and monitored the course forum in order to facilitate and support student learning and solving homework problems, Machine Projects (MPs), debugging code, and understanding concepts. 
        <br />
        <br />
        ➡️ <b>[Project Researcher - NASA L'SPACE Mission Concept Academy]</b> ⬅️ <br />
        🔹 Researched algorithms and computing methods to record and transmit seismic data between the Earth from a rover prototype, developed throughout the academy.<br />
        🔹 Conducted trade studies for battery systems to select the optimal power input unit within budget constraints.<br />
        🔹 Compiled and presented a research document to industry experts and academy leads.
      </SectionText>
    </Section>
  );
};

export default Timeline;