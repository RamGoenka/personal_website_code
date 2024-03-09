import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillLinkedin, AiFillMediumSquare } from 'react-icons/ai';
import { DiCode } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{display: "flex", alightItems: "center", color: "white", marginBottom: "90;"}}>
          <DiCode size="2.5rem"/> <Span>Ram Goenka</Span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#Expereince">
          <NavLink>Experience</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>Technologies</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#blog">
          <NavLink>Blog</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href="https://github.com/RamGoenka">
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/ram-goenka/">
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
