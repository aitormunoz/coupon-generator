import { BaseAlgorithm } from './base';

export class Timestamp extends BaseAlgorithm {

  generate(): string {
    return super.applyLength(new Date().getTime().toString());
  }

}
