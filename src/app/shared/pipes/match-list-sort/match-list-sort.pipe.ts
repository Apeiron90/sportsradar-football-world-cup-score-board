import { Pipe, PipeTransform } from '@angular/core';
import { Match } from 'src/app/core/data/models/match.model';

@Pipe({ name: 'matchListSort' })
export class MatchListSortPipe implements PipeTransform {
  transform(records: Match[] | null): Match[] {
    let sortedRecords: Match[] = [];

    if (records && records.length > 0) {
      sortedRecords = [...records];
      sortedRecords.sort((m1, m2) => {
        const m1Score = m1.score.home + m1.score.away;
        const m2Score = m2.score.home + m2.score.away;
        const m1Index = records.indexOf(m1);
        const m2Index = records.indexOf(m2);

        return m1Score === m2Score
          ? m1Index < m2Index
            ? 1
            : -1
          : m1Score < m2Score
          ? 1
          : -1;
      });
    }

    return sortedRecords;
  }
}
