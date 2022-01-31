import { LoadAddressService } from "@data/service/load-address"

let sut: LoadAddressService

describe('LoadAddressService', () => {
  test('load by zipCode successful all fields', async () => {
    const repository = new class {
      load() {
        return Promise.resolve({
          addressType: {
            description: 'Rua',
            id: 1
          },
          city: {
            description: 'Belo Horizonte',
            id: 1
          },
          country: {
            description: 'Brasil',
            id: 1
          },
          federationUnity: {
            description: 'Minas Gerais',
            acronym: 'MG'
          },
          neighborhood: 'Itapoã',
          publicPlace: 'Afonso Pena'
        })
      }
    }

    sut = new LoadAddressService(
      repository
    )

    const zipCode: number = 31567870

    const result = await sut.load(zipCode)

    expect(result.addressType.id).toEqual(1)

  })
})