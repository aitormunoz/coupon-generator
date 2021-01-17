import { BaseAlgorithm } from './base';

export class NumberSequence extends BaseAlgorithm {

  previousCode = '0';

  generate(): string {
    const parsedPreviousCode = parseInt(this.previousCode);
    const newCode = super.applyLength((parsedPreviousCode + 1).toString());

    this.previousCode = newCode;

    return newCode;
  }
}
