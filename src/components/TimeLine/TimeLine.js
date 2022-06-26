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
      ➡️ Course Assistant @ CS 124 ⬅️ <br />
        Helped students in CS 124: Introduction to Computer Science I, build an in-depth understanding of the basics of CS. Helped students on the help-site and course forum with writing, understanding, debugging, and cleaning code. 
        <br />
        <br />
        ➡️ NASA L'SPACE MCA - Team Lead Matematician ⬅️ <br />
        Researched algorithms and computing methods to record and relay seismic data back and forth to the Earth
from a rover (prototype). <br /> Researched power input systems and conducted trade studies to pick the optimal battery configuration for the rover. 
      </SectionText>
    </Section>
  );
};

export default Timeline;
