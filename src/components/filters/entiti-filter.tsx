import React, { ChangeEvent } from 'react'
import FormControl from 'react-bootstrap/FormControl'
import styled from 'styled-components'
import { ApartmentEntity } from '../../types/enum'

export interface EntityFilterProps {
  handleEntityFilter: (entity: ApartmentEntity) => void
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

interface CustomElement extends HTMLSelectElement {
  value: ApartmentEntity
}

const EntityFilter: React.FC<EntityFilterProps> = ({ handleEntityFilter }) => {
  const availableEntities = {
    [ApartmentEntity.All]: 'Все доступные',
    [ApartmentEntity.Kufar]: 'Куфар',
    [ApartmentEntity.Irr]: 'Из рук в руки'
  }

  const handleFormControlChange = (event: ChangeEvent<CustomElement>) => {
    const entity = event.target.value

    handleEntityFilter(entity)
  }

  return (
    <Wrapper>
      <span>Ресурс: </span>
      <FormControl as="select" size="sm" custom onChange={handleFormControlChange}>
        { Object.entries(availableEntities).map(([value, text]) => <option key={value} value={value}>{text}</option>)}
      </FormControl>
    </Wrapper>
  )
}

export default EntityFilter
