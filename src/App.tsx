import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { loadApartments } from './api'
import ApartmentsList from './components/apartments/apartments-list'
import Header from './components/header'
import LogoOverlay from './components/shared/logo-overlay'
import { ApartmentEntity } from './types/enum'
import { Apartment } from './types/common'
import ApartmentsFilters from './components/filters/apartments-filters'

const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin: 60px 20px 0 20px;
`

function App() {
  const [apartments, setApartments] = useState<Apartment[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const fetchApartmentsList = async (filters = { entity: ApartmentEntity.All, rooms: [], price: [] }) => {
    setIsLoading(true)
    const list = await loadApartments({ entity: filters.entity, rooms: filters.rooms, price: [] })
    setApartments(list)

    setIsLoading(false)
  }

  const handleUpdateFilters = (filters: any) => fetchApartmentsList(filters)

  useEffect(() => {
    fetchApartmentsList()
  }, [])

  return (
    <div>
      <Header />
      <Content>
        <ApartmentsFilters handleFilters={handleUpdateFilters} />
        <ApartmentsList apartments={apartments} />
      </Content>
      { isLoading && <LogoOverlay /> }
    </div>
  )
}

export default App
