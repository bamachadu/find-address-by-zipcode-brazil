import { LoadAddressUseCase } from "@domain/load-address";

export interface LoadAddressContract {
  load(zipCode: number): Promise<LoadAddressUseCase.Results>
}

export namespace LoadAddressContract {
  export type Results = LoadAddressUseCase.Results

}