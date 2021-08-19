import React, { useState } from 'react'
import styled from 'styled-components'
import Button from 'react-bootstrap/Button'
import { ApartmentEntity } from '../../types/enum'
import EntityFilter from './entiti-filter'
import RoomsFilter from './rooms-filter'

export interface ApartmentsFiltersProps {
  handleFilters: (filters: Filters) => void
}

const Wrapper = styled.div`
  display: flex;
  margin-top: 20px;
  justify-content: center;

  > * {
    &:not(:last-child) {
      margin-right: 30px;
    }
  }
`

const StyledButton = styled(Button)`
  background-color: #59714A;
  border-color: #59714A;
`

type Filters = {
  entity: ApartmentEntity,
  rooms: string[]
}

const ApartmentsFilters: React.FC<ApartmentsFiltersProps> = ({ handleFilters }) => {
  const [filters, setFilters] = useState<Filters>({
    entity: ApartmentEntity.All,
    rooms: []
  })

  const handleFiltersUpdate = (newFilter: Partial<Filters>) => {
    const updatedFilters = {
      ...filters,
      ...newFilter
    }
    setFilters(updatedFilters)
  }

  return (
    <Wrapper>
      <EntityFilter handleEntityFilter={(entity) => handleFiltersUpdate({ entity })} />
      <RoomsFilter handleRoomsFilter={(rooms) => handleFiltersUpdate({ rooms })} />
      <StyledButton onClick={() => handleFilters(filters)}>Применить фильтры</StyledButton>
    </Wrapper>
  )
}

export default ApartmentsFilters
