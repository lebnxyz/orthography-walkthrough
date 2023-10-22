import ruleset from '../base';
import {letters} from '/languages/levantine/alphabets/underlying';

export default ruleset(
  {
    spec: {features: {value: 5}},
    env: {},
  },
  {
    xams: [
      letters.plain.consonant.kh,
      letters.plain.vowel.a,
      letters.plain.consonant.m,
      letters.plain.consonant.s,
    ],
  }
);
