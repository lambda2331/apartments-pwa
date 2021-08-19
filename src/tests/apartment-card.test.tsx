import * as React from 'react'
import { render } from '@testing-library/react'
import ApartmentCard from '../components/apartments/apartment-card'
import { Apartment } from '../types/common'

test('test apartment-card component', () => {
  const fakeApartment: Apartment = {
    images: [],
    price: ['200$'],
    street: 'Apartment street',
    text: 'Reant apartment',
    time: '16.12.2021 18:30',
    url: 'fake-url',
    website: 'kufar'
  }
  const { getByText } = render(<ApartmentCard apartment={fakeApartment} />)

  getByText(fakeApartment.time)
  getByText(fakeApartment.street)
  getByText(fakeApartment.text)
})
