import {templates, underlying} from '/languages/levantine/alphabets';
import {rulePack} from '/lib/rules';

export default rulePack(
  templates,
  underlying,
  [],
  {
    spec: ({verb}) => verb({
      door: `f3vl`,
      tam: {match: `any`, value: [`imperative`, `indicative`, `subjunctive`]},
      root: {length: 3},
    }),
    env: {},
  }
);
