import { Timestamp } from './algorithms/timestamp';
import { NumberSequence } from './algorithms/number-sequence';
import { Uuid } from './algorithms/uuid';

const algorithmList: {
  [key: string]: any;
} = {
  'timestamp': Timestamp,
  'number-sequence': NumberSequence,
  'uuid': Uuid
}

export type Algorithms = Timestamp | NumberSequence;

export class Io {

  static loadAlgorithm(algorithm: string): Algorithms {
    const loadedAlgorithm = algorithmList[algorithm];

    if (!loadedAlgorithm) {
      throw 'Unknown algorithm';
    }

    return new loadedAlgorithm();
  }

}
