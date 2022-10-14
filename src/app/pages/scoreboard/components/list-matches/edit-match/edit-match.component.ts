import { Component, Input } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Match } from 'src/app/core/data/models/match.model';
import { MatchService } from 'src/app/core/data/services/match.service';

@Component({
  selector: 'app-edit-match',
  templateUrl: './edit-match.component.html',
  styleUrls: ['./edit-match.component.scss'],
})
export class EditMatchComponent {
  @Input()
  match: Match = { teams: { home: '', away: '' }, score: { home: 0, away: 0 } };

  public homeScoreFormControl: FormControl = new FormControl('', [
    Validators.required,
  ]);
  public awayScoreFormControl: FormControl = new FormControl('', [
    Validators.required,
  ]);

  constructor(private matchService: MatchService) {}

  public updateMatch(): void {
    if (this.homeScoreFormControl.valid && this.awayScoreFormControl.valid) {
      this.matchService.updateMatch(
        this.matchService.getMatches
          .getValue()
          .findIndex((m) => m === this.match),
        {
          home: this.homeScoreFormControl.value,
          away: this.awayScoreFormControl.value,
        }
      );

      this.homeScoreFormControl.reset();
      this.awayScoreFormControl.reset();
    }
  }
}
