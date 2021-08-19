import React from 'react'
import styled from 'styled-components'
import LogoImage from '../../assets/images/spinner.png'

const Logo = styled.div`
  background-image: url(${LogoImage});
  width: 10em;
  height: 10em;
  background-size: contain;
  animation-name: spinner;
  animation-duration: 1.5s;
  animation-iteration-count: infinite;

  @keyframes spinner {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
`

const LogoSpinner: React.FC = () => <Logo />

export default LogoSpinner
