import { Coupon } from './coupon';
import { Io } from './io';
import { environment } from 'environment';


async function main(): Promise<void> {

  const loadedAlgorithm = Io.loadAlgorithm(environment.coupons.algorithm);

  const couponModel = new Coupon(
    loadedAlgorithm
  )
  console.log(couponModel.createMany(environment.coupons.quantity));

}

main();


