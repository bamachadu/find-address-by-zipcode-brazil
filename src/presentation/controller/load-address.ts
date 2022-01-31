import { LoadAddressService } from "@data/service/load-address";

export class LoadAddressPresentation {
  constructor(
    private service: LoadAddressService
  ) { }

  async load(req: any) {
    return this.service.load(+req.params.zipCode)
  }
}