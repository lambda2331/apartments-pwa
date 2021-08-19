import * as React from 'react'
import styled from 'styled-components'
import { ApartmentEntity } from '../../types/enum'

export interface EntityLinkProps {
  entity: string,
  url: string
}

const Link = styled.a`
  font-size: 19px;
  font-weight: bold;

  :hover {
    text-decoration: none;
  }
`

type EntityOptions = {
  color: string,
  label: string
}

type EntityMapping = {
  [k: string]: EntityOptions
}

const entityOptionsMapping: EntityMapping = {
  [ApartmentEntity.Kufar]: {
    color: '#008B06',
    label: 'K'
  },
  [ApartmentEntity.Irr]: {
    color: '#8b0000',
    label: 'Irr'
  }
}

const EntityLink: React.FC<EntityLinkProps> = ({ entity, url }) => {
  const options: EntityOptions = entityOptionsMapping[entity]

  return (
    <Link style={{ color: options.color }} href={url} target="_blank">
      {options.label}
    </Link>
  )
}

export default EntityLink
