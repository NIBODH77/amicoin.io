
// HexagonalBackground.jsx
import React, { useEffect, useRef } from 'react';
import styled, { keyframes } from 'styled-components';

const zigzag = keyframes`
  0% {
    transform: translateY(0) translateX(0);
  }
  25% {
    transform: translateY(25px) translateX(25px);
  }
  50% {
    transform: translateY(0) translateX(50px);
  }
  75% {
    transform: translateY(25px) translateX(75px);
  }
  100% {
    transform: translateY(0) translateX(100px);
  }
`;

const HexGrid = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: -1;
  opacity: 0.1;
`;

const Hexagon = styled.div`
  position: absolute;
  width: 100px;
  height: 57.74px;
  background-color: #d4af37;
  margin: 28.87px 0;
  animation: ${zigzag} 15s infinite alternate ease-in-out;
  
  &:before,
  &:after {
    content: "";
    position: absolute;
    width: 0;
    border-left: 50px solid transparent;
    border-right: 50px solid transparent;
  }
  
  &:before {
    bottom: 100%;
    border-bottom: 28.87px solid #d4af37;
  }
  
  &:after {
    top: 100%;
    border-top: 28.87px solid #d4af37;
  }
`;

const HexagonalBackground = () => {
  const gridRef = useRef(null);

  useEffect(() => {
    const grid = gridRef.current;
    const createHexagons = () => {
      // Clear existing hexagons
      grid.innerHTML = '';
      
      // Calculate how many hexagons we need
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;
      const hexWidth = 100;
      const hexHeight = 86.6; // 100 * sin(60°)
      const cols = Math.ceil(viewportWidth / (hexWidth * 0.75)) + 1;
      const rows = Math.ceil(viewportHeight / hexHeight) + 1;
      
      // Create hexagons in a grid pattern
      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          const hex = document.createElement('div');
          hex.className = 'hexagon';
          
          // Offset every other row
          const x = col * hexWidth * 0.75;
          const y = row * hexHeight + (col % 2) * hexHeight / 2;
          
          // Randomize animation delay and direction
          const delay = Math.random() * 5;
          const duration = 10 + Math.random() * 10;
          const direction = Math.random() > 0.5 ? 'alternate' : 'alternate-reverse';
          
          hex.style.left = `${x}px`;
          hex.style.top = `${y}px`;
          hex.style.animationDelay = `${delay}s`;
          hex.style.animationDuration = `${duration}s`;
          hex.style.animationDirection = direction;
          
          // Create the hexagon shape with pseudo-elements
          const before = document.createElement('div');
          const after = document.createElement('div');
          
          Object.assign(hex.style, {
            position: 'absolute',
            width: '100px',
            height: '57.74px',
            backgroundColor: '#d4af37',
            margin: '28.87px 0',
          });
          
          Object.assign(before.style, {
            content: '""',
            position: 'absolute',
            width: '0',
            borderLeft: '50px solid transparent',
            borderRight: '50px solid transparent',
            bottom: '100%',
            borderBottom: '28.87px solid #d4af37',
          });
          
          Object.assign(after.style, {
            content: '""',
            position: 'absolute',
            width: '0',
            borderLeft: '50px solid transparent',
            borderRight: '50px solid transparent',
            top: '100%',
            borderTop: '28.87px solid #d4af37',
          });
          
          hex.appendChild(before);
          hex.appendChild(after);
          grid.appendChild(hex);
        }
      }
    };
    
    // Initial creation
    createHexagons();
    
    // Recreate on resize
    window.addEventListener('resize', createHexagons);
    
    return () => {
      window.removeEventListener('resize', createHexagons);
    };
  }, []);

  return <HexGrid ref={gridRef} />;
};

export default HexagonalBackground;