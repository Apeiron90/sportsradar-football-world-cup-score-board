import { Component, Input, OnInit } from '@angular/core';
import { Match } from 'src/app/core/data/models/match.model';
import { MatchService } from 'src/app/core/data/services/match.service';

@Component({
  selector: 'app-remove-match',
  template: `
    <button
      class="remove-match-component"
      type="button"
      (click)="this.removeMatch()"
    >
      X
    </button>
  `,
  styleUrls: ['./remove-match.component.scss'],
})
export class RemoveMatchComponent {
  @Input()
  match: Match = { teams: { home: '', away: '' }, score: { home: 0, away: 0 } };

  constructor(private matchService: MatchService) {}

  public removeMatch(): void {
    this.matchService.removeMatch(
      this.matchService.getMatches.getValue().findIndex((m) => m === this.match)
    );
  }
}
