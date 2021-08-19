import * as React from 'react'
import Card from 'react-bootstrap/Card'
import styled from 'styled-components'
import { Apartment } from '../../types/common'
import EntityLink from './entity-link'
import NoPhoto from '../../assets/images/no-photo.jpg'

export interface ApartmentCardProps {
  apartment: Apartment
}

const CardWrapper = styled(Card)`
  border-radius: 15px;
  overflow: hidden;
  font-family: 'Roboto', sans-serif;
`

const Subtitle = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 10px;
  margin-bottom: 5px;
`

const Price = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  & :first-child {
    font-weight: bold;
  }
`

const Title = styled.p`
  font-weight: bold;
  margin-bottom: 5px;
`

const Footer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  font-size: 10px;
  flex-grow: 1;


  & span {
    margin-right: 10px;
    margin-bottom: 6px;
  }
`

const CardBody = styled(Card.Body)`
  display: flex;
  flex-direction: column;
`

const ApartmentCard: React.FC<ApartmentCardProps> = ({ apartment }) => (
  <CardWrapper style={{ width: '18rem' }}>
    <Card.Img variant="top" src={apartment.images[0] ?? NoPhoto} height={200} />
    <CardBody>
      <Subtitle>
        <p>{apartment.time}</p>
        <Price>{apartment.price.map((item) => <span key={item}>{item}</span>)}</Price>
      </Subtitle>
      <Title>{apartment.text}</Title>
      <div>
        {apartment.street}
      </div>
      <Footer>
        <span>кликни сюда</span>
        <EntityLink entity={apartment.website} url={apartment.url} />
      </Footer>
    </CardBody>
  </CardWrapper>
)

export default ApartmentCard
