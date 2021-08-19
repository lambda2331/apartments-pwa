import * as React from 'react'
import styled from 'styled-components'
import { Apartment } from '../../types/common'
import ApartmentCard from './apartment-card'

export interface ApartmentsListProps {
  apartments: Apartment[]
}

const Wrapper = styled.div`
  margin: 20px 20px 10px 20px;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;

  > * {
    margin-bottom: 20px;
    &:not(:last-child) {
      margin-right: 20px;
    }

    @media only screen and (max-width: 650px) {
      margin-left: 20px;
    }
  }
`

const ApartmentsList: React.FC<ApartmentsListProps> = ({ apartments }) => (
  <Wrapper>
    {
      apartments.map((apartment) => <ApartmentCard apartment={apartment} key={apartment.url} />)
    }
  </Wrapper>
)

export default ApartmentsList
