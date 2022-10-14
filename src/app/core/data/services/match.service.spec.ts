import { TestBed } from '@angular/core/testing';

import { MatchService } from './match.service';
import { BehaviorSubject } from 'rxjs';
import { Match } from '../models/match.model';
import { matches } from '../mock/matches.mock';
import { MatchTuple } from '../models/match-tuple.model';

describe('MatchService', () => {
  let service: MatchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MatchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return the matches', () => {
    const matches$: BehaviorSubject<Match[]> = service.getMatches;

    expect(matches$).not.toBeNull();
    expect(matches$.getValue()).toEqual(matches);
  });

  it('should add a new match', () => {
    const matches$: BehaviorSubject<Match[]> = service.getMatches;
    const newMatchTeams: MatchTuple<string> = { home: 'home', away: 'away' };
    const previousMatchesCount = matches$.getValue().length;

    service.addMatch(newMatchTeams);

    expect(matches$.getValue().length).toEqual(previousMatchesCount + 1);
    expect(
      matches$.getValue().find((match) => match.teams === newMatchTeams)
    ).not.toBeUndefined();
  });

  it('should update a given match score', () => {
    const matches$: BehaviorSubject<Match[]> = service.getMatches;
    const matchIndexToUpdate = 0;
    const updatedMatch = matches$.getValue()[matchIndexToUpdate];
    const previousMatchesCount = matches$.getValue().length;
    const newScore: MatchTuple<number> = {
      home: updatedMatch.score.home + 1,
      away: updatedMatch.score.away + 1,
    };

    service.updateMatch(matchIndexToUpdate, newScore);

    expect(matches$.getValue().length).toEqual(previousMatchesCount);
    expect(matches$.getValue()[matchIndexToUpdate].score).toEqual(newScore);
  });

  it('should remove a given match', () => {
    const matches$: BehaviorSubject<Match[]> = service.getMatches;
    const matchIndexToRemove = 0;
    const removedMatch = matches$.getValue()[matchIndexToRemove];
    const previousMatchesCount = matches$.getValue().length;

    service.removeMatch(matchIndexToRemove);

    expect(matches$.getValue().length).toEqual(previousMatchesCount - 1);
    expect(
      matches$.getValue().find((match) => match.teams === removedMatch.teams)
    ).toBeUndefined();
  });
});
