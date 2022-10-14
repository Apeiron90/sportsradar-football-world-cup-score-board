import { Injectable } from '@angular/core';
import { Match } from '../models/match.model';
import { BehaviorSubject } from 'rxjs';
import { MatchTuple } from '../models/match-tuple.model';
import { matches } from '../mock/matches.mock';

@Injectable()
export class MatchService {
  private matches: BehaviorSubject<Match[]> = new BehaviorSubject(matches);

  constructor() {}

  public get getMatches(): BehaviorSubject<Match[]> {
    return this.matches;
  }

  public addMatch(teams: MatchTuple<string>): void {
    this.matches.next([
      ...this.matches.getValue(),
      { teams, score: { home: 0, away: 0 } },
    ]);
  }

  public updateMatch(index: number, score: MatchTuple<number>): void {
    this.matches.next([
      ...this.matches
        .getValue()
        .map(
          (match, i) =>
            (match = i === index ? { ...match, score: score } : match)
        ),
    ]);
  }

  public removeMatch(index: number): void {
    this.matches.next([
      ...this.matches.getValue().filter((_, i) => i != index),
    ]);
  }
}
