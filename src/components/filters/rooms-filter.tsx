import React, { useState } from 'react'
import styled from 'styled-components'
import Checkbox from '../shared/checkbox'

export interface RoomsFilterProps {
  handleRoomsFilter: (rooms: string[]) => void
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;

  > * {
    &:not(:last-child) {
      margin-right: 10px;
    }
  }
`

const RoomsFilter: React.FC<RoomsFilterProps> = ({ handleRoomsFilter }) => {
  const [rooms, setRooms] = useState<string[]>([])
  const availableRooms = ['1', '2', '3']

  const handleRoomsUpdate = (checked: boolean, room: string) => {
    let updatedRooms = []

    if (checked) {
      updatedRooms = [...rooms, room]
    } else {
      updatedRooms = rooms.filter((item) => item !== room)
    }

    handleRoomsFilter(updatedRooms)
    setRooms(updatedRooms)
  }

  const isRoomsChecked = (room: string) => rooms.some((item) => item === room)

  return (
    <Wrapper>
      <span>Квартиры: </span>
      {availableRooms.map((item) => <Checkbox key={item} label={item} handleClick={(flag) => handleRoomsUpdate(flag, item)} checked={isRoomsChecked(item)} />)}
    </Wrapper>
  )
}

export default RoomsFilter
