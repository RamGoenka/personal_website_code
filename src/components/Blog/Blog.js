import React from 'react';
import BlogPost from './BlogPost';
import { DiCss3, DiCode, DiPython, DiJavascript, DiJava, DiReact } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';


const Blog = () => {
  const posts = [
    {
      title: '📝 My First Post! - July 8, 2023',
      content: [
        'Hello and welcome to this first blog post!', 
        'I do not want to write much for this first blog post and just want to keep it slightly short and casual, perhaps just a life update. Since the summer started back in mid-may, I have mostly been chilling, other than the part where I got sick right after summer started :(. In late may my internship begun and it has been a pretty cool experience so far. Along with working my internship, I have also been trying to prepare for courses next year (junior year of college!) by mostly reading up on some introductory concepts of Real analysis.', 
        'All in all it has been a relaxing and somewhat busy summer thus far and hopefully the remaing days of summer go well and fine 😌. Anddddd.... that will be about where I stop for this first blog post, partly because I am not sure what else to put in this one 😅 and partly because I want to keep it short.',
        'Oh and here is a cool picture from my recent Chicago trip :D',
        <img src='./images/pic.png' />
      ],
    },
  ];

  return (
    <Section id="blog">
      <SectionTitle main> <DiCode size="4rem" /> Blog</SectionTitle>
      <SectionText>
        Welcome to my blog! This just a space for me to write about thoughts, ideas, things on my mind, or just some random topic.
      </SectionText>
      {posts.map((post, index) => (
        <BlogPost key={index} post={post} />
      ))}
    </Section>
  );
}

export default Blog;
