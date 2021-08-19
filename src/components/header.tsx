import React from 'react'
import styled from 'styled-components'
import { ReactComponent as Logo } from '../assets/images/logo.svg'

const Wrapper = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  height: 60px;
  background-color: #59714A;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 20px;
  z-index: 100;

  & h4 {
    color: white;
    margin-bottom: 0;
    font-family: 'Saira', sans-serif;
  }

  & svg {
    width: 50px;
    height: 50px;
  }
`

const Header: React.FC = () => (
  <Wrapper>
    <h4>Fresh Appartments</h4>
    <Logo />
  </Wrapper>
)

export default Header
