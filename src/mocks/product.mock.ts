import {ProductModel} from '@/types/models/products.model'
import {faker} from '@faker-js/faker'

export const mockProduct = (): ProductModel => {
  return {
    id: faker.number.int(),
    name: faker.word.words(5),
    pictureUrl: faker.image.url(),
    rating: faker.number.float(),
    oldPrice: faker.number.float(),
    price: faker.number.float(),
  }
}
