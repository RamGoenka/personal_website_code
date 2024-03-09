import React from 'react';

import { Section, SectionSubText, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
    <SectionTitle main center>
    👋 Hello! :) <br />
      My name is Ram Goenka.
      </SectionTitle>
      <SectionText>
      👨🏽‍💻 <b>A little bit about me</b><br /> 
        I am an Undergradute Student @ University of Illinois Urbana-Champaign, majoring in Mathematics and minoring in Computer Science and Statistics. I love coffee. I love sleeping.<br /> 
        <br />
      😌 <b>When I am not working...</b><br />
      I like to talk about and watch the Premier League, UEFA Champions League. I also like to talk about cats, food, KPOP, among many other things.<br />

      </SectionText>
      <Button href="https://drive.google.com/file/d/18zMtY3VaHvMSdGtf9O7x5rjow7IfLPPL/view?usp=sharing"></Button>
    </LeftSection>
  </Section>
);

export default Hero;