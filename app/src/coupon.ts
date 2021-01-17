import { BaseAlgorithm } from './algorithms/base';

export class Coupon {

  constructor(
    private algorithm: BaseAlgorithm
  ) {
  }

  create(): string {
    return this.algorithm.generate();
  }

  createMany(quantity: number): string[] {
    return [...Array(quantity).keys()].map(_ => this.algorithm.generate());
  }


}
