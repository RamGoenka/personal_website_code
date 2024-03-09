import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FiArrowUpCircle } from 'react-icons/fi';

const ScrollButton = styled.div`
  position: fixed; 
  width: 100%;
  left: 90%; 
  bottom: 40px; 
  height: 20px;
  font-size: 3rem; 
  z-index: 1;
  cursor: pointer;
  color: white;
`;

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <ScrollButton>
      {isVisible && (
        <div onClick={scrollToTop}>
          <FiArrowUpCircle /> Top
        </div>
      )}
    </ScrollButton>
  );
};

export default ScrollToTop;
