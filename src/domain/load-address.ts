export interface LoadAddressUseCase {
  load(zipCode: number): Promise<LoadAddressUseCase.Results>
}

export namespace LoadAddressUseCase {
  export type Results = {
    addressType: {
      description: string
      id: number
    }
    city: {
      description: string
      id: number
    }
    country: {
      description: string
      id: number
    }
    federationUnity: {
      description: string
      acronym: string
    }
    neighborhood: string
    publicPlace: string
  }
}