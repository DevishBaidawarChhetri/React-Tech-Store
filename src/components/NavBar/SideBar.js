import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { ProductConsumer } from '../Context/context';

export default function SideBar () {
  return (
    <>
      <ProductConsumer>
        {
          value => {
            const { links, sidebarOpen, handleSidebar } = value;
            return (
              <SideWrapper show={ sidebarOpen }>
                <ul>
                  {
                    links.map( ( link ) => {
                      return (
                        <li key={ link.id }>
                          <NavLink exact to={ link.path } className="sidebar-link" onClick={ handleSidebar } activeClassName="active">{ link.text }</NavLink>
                        </li>
                      );
                    } )
                  }
                </ul>
              </SideWrapper>
            );
          }
        }
      </ProductConsumer>
    </>
  )
}

// Styled Components
const SideWrapper = styled.nav`
  position: fixed;
  top: 61px;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: var(--mainGrey);
  z-index: 1;
  border-right: 3px solid var(--primaryColor);
  transition: var(--mainTransition);
  transform: ${ props => props.show ? 'translateX(0)' : 'translateX(-100%)' };
  ul{
    list-style-type: none;
    padding: 0 !important;
  }
  .sidebar-link{
    display: block;
    font-size: 1.2rem;
    text-transform: capitalize;
    color: var(--mainBlack);
    padding: 0.5rem 1.5rem;
    background: transparent;
    transition: var(--mainTransition);
  }
  .sidebar-link:hover{
    background: var(--primaryColor);
    color: var(--mainWhite);
    text-decoration: none;
    padding: 0.5rem 1.5rem 0.5rem 2.5rem;
  }
  @media(min-width: 576px){
    width: 15rem;
  }
`