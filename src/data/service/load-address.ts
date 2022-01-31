import { LoadAddressContract } from "@data/contract/load-address";
import { LoadAddressUseCase } from "@domain/load-address";

export class LoadAddressService implements LoadAddressUseCase {
  constructor(
    private repository: LoadAddressContract
  ) { }
  public async load(zipCode: number): Promise<LoadAddressUseCase.Results> {

    return this.repository.load(zipCode)
  }
}