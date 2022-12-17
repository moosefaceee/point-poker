import { faker } from '@faker-js/faker'
import { Player } from 'types'

const players: Player[] = ['0', '1', '2', '3'].map((id) => ({
  id,
  name: faker.name.firstName() + ' ' + faker.name.lastName(),
}))

export { players }
