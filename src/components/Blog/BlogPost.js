import React, { useState } from 'react';
import styled from 'styled-components';

const StyledParagraph = styled.p`
  margin-bottom: 15px;
`;

const Button = styled.button`
  background-color: #6f4e37; // Adjust the color as needed
  color: white;
  border: none;
  border-radius: 20px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  outline: none;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #56382e; // Adjust the hover color as needed
  }
`;

const BlogPost = ({ post }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div>
      <h2>{post.title}</h2>
      {isExpanded ? (
        post.content.map((element, index) =>
          typeof element === 'string' ? (
            <StyledParagraph key={index}>{element}</StyledParagraph>
          ) : (
            <div key={index}>{element}</div>
          )
        )
      ) : (
        <StyledParagraph>{post.content[0]}</StyledParagraph>
      )}
      <Button onClick={toggleExpanded}>
        {isExpanded ? 'Show Less' : 'Read More'}
      </Button>
    </div>
  );
};

export default BlogPost;
