import React from 'react'
import styled from 'styled-components'
import LogoSpinner from './logo-spinner'
import Overlay from './overlay'

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Label = styled.h1`
    font-size: 4em;
    color: #2b7500;
    font-family: 'Saira', sans-serif;
`

const LogoOverlay: React.FC = () => (
  <Overlay>
    <Wrapper>
      <Label>Fresh Apartments</Label>
      <LogoSpinner />
    </Wrapper>
  </Overlay>
)

export default LogoOverlay
