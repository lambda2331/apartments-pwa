import React from 'react'
import styled from 'styled-components'

export interface CheckboxProps {
  handleClick: (flag: boolean) => void,
  label: string,
  checked: boolean
}

type CheckboxStyleProps = {
  checked: boolean
}

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #59714A;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    font-weight: bold;
    cursor: pointer;
    background-color: ${(props: CheckboxStyleProps) => (props.checked ? '#59714A' : '#FFFFFF')};
    color: ${(props: CheckboxStyleProps) => (props.checked ? '#FFFFFF' : '#59714A')};
`

const Checkbox: React.FC<CheckboxProps> = ({ handleClick, label, checked = false }) => {
  const handleCheckboxClick = () => {
    handleClick(!checked)
  }

  return (
    <Wrapper checked={checked} onClick={handleCheckboxClick}>
      { label }
    </Wrapper>
  )
}

export default Checkbox
