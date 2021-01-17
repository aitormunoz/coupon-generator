import { BaseAlgorithm } from './base';
import { v4 as uuidv4 } from 'uuid';

export class Uuid extends BaseAlgorithm {

  generate(): string {
    return super.applyLength(uuidv4());
  }

}
