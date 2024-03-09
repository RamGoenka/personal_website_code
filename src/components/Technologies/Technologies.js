import React from 'react';
import { DiCss3, DiCode, DiPython, DiJavascript, DiJava, DiReact } from 'react-icons/di';
import { SiAndroidstudio, SiNumpy, SiLatex, SiDocker, SiGnubash, SiKotlin, SiWolframmathematica, SiVisualstudiocode, SiHtml5, SiTypescript, SiGithub } from "react-icons/si";
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
            Python, Java, C, C++, LaTeX, TypeScript, <br />
            Kotlin, JavaScript, Mathematica, R, HTML, CSS, SQL
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <ListContainer>
          <ListTitle> Tools 🛠 </ListTitle>
          <ListParagraph>
            React, Flask, Node.Js, Bash, Git, <br />
            Pandas, Matplotlib, Bash, Android Studio, Scikit-Learn, Docker, NumPy, SciPy, Visual Studio Code, Catch2, Microsoft Azure
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <ListContainer>
          <ListTitle>  </ListTitle>
          <ListParagraph> 
          <SiAndroidstudio size="3rem" /> <DiPython size="3rem" /> <DiJavascript size="3rem" /> <br />
          <DiJava size="3rem" /> <DiReact size="3rem" /> <SiLatex size="3rem" /> <br /> 
          <SiGithub size="3rem" /> <SiDocker size="3rem" /> <SiNumpy size="3rem" /> <br />
          <SiGnubash size="3rem" /> <SiWolframmathematica size="3rem" /> <DiCss3 size="3rem" /> <br />
          <SiKotlin size="3rem" /> <SiTypescript size="3rem" /> <SiHtml5 size="3rem" />
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
