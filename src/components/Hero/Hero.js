import React from 'react';

import { Section, SectionSubText, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
    <SectionTitle main center>
    👋 Hello! <br />
      My name is Ram Goenka.
      </SectionTitle>
      <SectionText>
      😊 A little bit about me... <br /> 
        I am an Undergradute Student @ UIUC, majoring in Mathematics and minoring in Computer Science and Statistics. <br />
        <br />
      👀 I am interested in... <br />
        - Full-stack web developement <br />
        - Data Science and Analytics <br />
        - Machine Learning <br />
        - Software developement <br />
        - Learning random facts! 
      </SectionText>
      <Button onClick = {() => window.location = 'https://drive.google.com/file/d/1h1mF8WMrkvpQBSKr6GmUs8Nc-so3DT9R/view'}>Resume</Button>
    </LeftSection>
  </Section>
);

export default Hero;