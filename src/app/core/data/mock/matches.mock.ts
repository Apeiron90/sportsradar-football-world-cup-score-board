import { Match } from '../models/match.model';

export const matches: Match[] = [
  {
    teams: { home: 'Mexico', away: 'Canada' },
    score: { home: 0, away: 5 },
  },
  {
    teams: { home: 'Spain', away: 'Brazil' },
    score: { home: 10, away: 2 },
  },
  {
    teams: { home: 'Germany', away: 'France' },
    score: { home: 2, away: 2 },
  },
  {
    teams: { home: 'Uruguay', away: 'Italy' },
    score: { home: 6, away: 6 },
  },
  {
    teams: { home: 'Argentina', away: 'Australia' },
    score: { home: 3, away: 1 },
  },
];
