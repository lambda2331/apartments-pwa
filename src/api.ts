import {
  Apartment,
  ApartmentsList,
  LoadApartmentsRequestProps
} from './types/common'
import { ApartmentEntity } from './types/enum'

const entitiesMap = {
  [ApartmentEntity.All]: ['irr', 'kufar'],
  [ApartmentEntity.Irr]: ['irr'],
  [ApartmentEntity.Kufar]: ['kufar']
}

const http = async <T>(url: string, options: RequestInit = {}): Promise<T> => {
  const response = await fetch(url, options)

  return response.json()
}

export async function loadApartments(
  params: LoadApartmentsRequestProps
): Promise<Apartment[]> {
  const URL = 'https://apartments-api-node-js.herokuapp.com/'

  const promises = entitiesMap[params.entity].map((item) => http<ApartmentsList>(`${URL}${item}?city=grodno`))

  const results = await Promise.all(promises)

  const list = results.filter((item) => Array.isArray(item)).flat().sort((itemA, itemB) => {
    if (itemA.time < itemB.time) {
      return -1
    }
    if (itemA.time > itemB.time) {
      return 1
    }
    return 0
  })

  return Promise.resolve(list)
}
