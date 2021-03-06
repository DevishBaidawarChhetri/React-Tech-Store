import React from 'react';
import styled from 'styled-components';
import mainBackground from '../../images/mainBcg.jpeg';
export default function Hero ( { img, title, max, children } ) {
  return (
    <>
      <HeroWrapper max={ max } img={ img }>
        <div className="banner">
          <h1 className="title">{ title }</h1>
          { children }
        </div>
      </HeroWrapper>
    </>
  )
}

const HeroWrapper = styled.div`
  color: var(--mainWhite);
  min-height: ${ props => props.max ? "calc(100vh - 61px)" : "60vh" };
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(var(--primaryRGBA), var(--primaryRGBA)), url(${ props => props.img }) center/cover no-repeat;
  .title{
    font-size:3.5rem;
    text-transform: capitalize;
    text-shadow: 4px 4px 2px var(--primaryRGBA);
    letter-spacing: var(--mainSpacing);
  }
  @media only screen and (max-width: 768px){
    background-position:0 0;
  }
  @media only screen and (max-width: 480px){
    background-position:12% 0;
  }
`
Hero.defaultProps = {
  img: mainBackground
}