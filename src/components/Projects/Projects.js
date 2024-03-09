import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { DiCode } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

const Projects = () => (
  <Section nopadding id="projects">
    <SectionDivider />
    <SectionTitle main> <DiCode size="4rem"/> Projects</SectionTitle>
    <SectionText> Here are some of the projects that I have built! To check out more projects and things I have worked on, visit my GitHub page (linked on the top right!). </SectionText>
    <GridContainer>
      {projects.map(({id, image, title, description, tags, source}) => (
        <BlogCard key = {id}>
          <Img src = {image} />
          <TitleContent>
            <HeaderThree title>{title}</HeaderThree>
            <Hr />
          </TitleContent>
          <CardInfo>{description}</CardInfo>
          <br />
          <div>
            <TitleContent>Tech</TitleContent>
            <TagList>
              {tags.map((tag, i) => (
                <Tag key={i}>{tag}</Tag>
              ))}
            </TagList>
          </div>
          <UtilityList>
            <ExternalLinks href={source}>GitHub Repo</ExternalLinks>
          </UtilityList>
        </BlogCard>
    ))}
    </GridContainer>
  </Section>
);

export default Projects;