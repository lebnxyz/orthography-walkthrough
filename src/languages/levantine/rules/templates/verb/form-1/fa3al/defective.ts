import ruleset from './base';
import {letters} from '/languages/levantine/alphabets/underlying';
import {separateContext} from '/lib/rules';

export default ruleset(
  {
    spec: ({verb}) => verb((features, traits) => traits.defective),
  },
  {
    ending: {
      ay: ({features: {root}}) => {
        const [$F, $3] = root.map(r => separateContext(r, `affected`));
        return [
          $F,
          letters.plain.vowel.a,
          $3,
          letters.plain.vowel.a,
          letters.plain.consonant.y,
        ];
      },
      y: ({features: {root}}) => {
        const [$F, $3] = root.map(r => separateContext(r, `affected`));
        return [
          $F,
          letters.plain.vowel.a,
          $3,
          letters.plain.consonant.y,
        ];
      },
      aa: ({features: {root}}) => {
        const [$F, $3] = root.map(r => separateContext(r, `affected`));
        return [
          $F,
          letters.plain.vowel.a,
          $3,
          letters.plain.vowel.aa,
        ];
      },
      none: ({features: {root}}) => {
        const [$F, $3] = root.map(r => separateContext(r, `affected`));
        return [
          $F,
          letters.plain.vowel.a,
          $3,
        ];
      },
    },
  },
  {
    beforeVowel: () => ({
      target: {
        env: ({before}, {vowel}) => before(vowel()),
      },
    }),
    beforeConsonant: () => ({
      target: {
        env: ({before}, {consonant}) => before(consonant()),
      },
    }),
  }
);
