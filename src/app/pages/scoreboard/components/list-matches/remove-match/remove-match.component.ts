import { Component, Input, OnInit } from '@angular/core';
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
  index: number = -1;

  constructor(private matchService: MatchService) {}

  public removeMatch(): void {
    this.matchService.removeMatch(this.index);
  }
}
