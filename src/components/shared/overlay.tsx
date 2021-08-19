import React from 'react'
import styled from 'styled-components'

const OverlayComponent = styled.div`
  position: absolute;
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(10px);
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
`

type OverlayComponentProps = {
  children: React.ReactNode
}

const Overlay: React.FC<OverlayComponentProps> = ({ children }: OverlayComponentProps) => <OverlayComponent>{children}</OverlayComponent>

export default Overlay
