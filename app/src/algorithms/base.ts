import { environment } from 'environment';

export abstract class BaseAlgorithm {

  private codeLength = environment.coupons.length;

  abstract generate(): string;

  // If we had more than one filter we would obtain by another more flexible method
  public applyLength(code: string): string {
    if (code.length > 5) {
      return code.slice(0, 5);
    } else if (code.length < 5) {
      return ('0'.repeat(this.codeLength) + code).slice(-(this.codeLength - 1));
    }

    return code;
  }
}
