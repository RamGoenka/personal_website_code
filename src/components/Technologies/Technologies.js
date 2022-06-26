import React from 'react';
import { DiCss3, DiCode, DiPython, DiJavascript, DiJava, DiReact } from 'react-icons/di';
import { SiAndroidstudio, SiNodeDotJs, SiLatex, SiDocker, SiGnubash, SiKotlin, SiWolframmathematica, SiVisualstudiocode, SiHtml5, SiTypescript } from "react-icons/si";
import { BiCodeBlock } from "react-icons/bi";
import { FaGithub } from "react-icons/fa";
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider />
    <SectionTitle main> <DiCode size="4rem" /> Technologies</SectionTitle>
    <SectionText>
      Here are some of the programming languages and tools I am familiar with! 
    </SectionText>
    <List>
      <ListItem>
        <ListContainer>
          <ListTitle>  Programming Languages  🖥 </ListTitle>
          <ListParagraph>
            Python , Java, C++, LaTeX, Typescript, <br />
            Kotlin, JavaScript, HTML, CSS, Mathematica
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <ListContainer>
          <ListTitle> Tools 🛠 </ListTitle>
          <ListParagraph>
            React , Node.Js, Bash, Git, <br />
            Pandas ,Matplotlib, Bash, Android Stuido, Scikit-Learn, Docker, Numpy, Visual Studio Code
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <ListContainer>
          <ListTitle>  </ListTitle>
          <ListParagraph> 
          <SiAndroidstudio size="3rem" /> <DiPython size="3rem" /> <DiJavascript size="3rem" /> <br />
          <DiJava size="3rem" /> <DiReact size="3rem" /> <SiLatex size="3rem" /> <br />  
          <SiDocker size="3rem" /> <FaGithub size="3rem" /> <SiNodeDotJs size="3rem" /> <br /> 
          <SiGnubash size="3rem" /> <SiWolframmathematica size="3rem" /> <DiCss3 size="3rem" /> <br />
          <SiKotlin size="3rem" /> <SiTypescript size="3rem" /> <SiHtml5 size="3rem" />
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
