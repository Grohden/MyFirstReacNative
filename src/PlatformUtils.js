import {Platform} from 'react-native';
import * as R from 'ramda';

const ifSystemElse = R.curryN(3,
  (actualOS, expectedOS, forExpectedOSValue) => ({
    elseUse: forOtherOSValue  => actualOS === expectedOS ? forExpectedOSValue : forOtherOSValue
  })
);

export const ifIOS = ifSystemElse(Platform.OS, 'ios');
export const ifAndroid = ifSystemElse(Platform.OS, 'android');
