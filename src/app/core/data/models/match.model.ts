import { MatchTuple } from './match-tuple.model';

export type Match = {
  teams: MatchTuple<string>;
  score: MatchTuple<number>;
};
