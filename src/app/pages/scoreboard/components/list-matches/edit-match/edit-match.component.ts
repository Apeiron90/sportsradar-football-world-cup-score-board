import { Component, Input } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatchService } from 'src/app/core/data/services/match.service';

@Component({
  selector: 'app-edit-match',
  templateUrl: './edit-match.component.html',
  styleUrls: ['./edit-match.component.scss'],
})
export class EditMatchComponent {
  @Input()
  public index: number = -1;

  public homeScoreFormControl: FormControl = new FormControl('', [
    Validators.required,
  ]);
  public awayScoreFormControl: FormControl = new FormControl('', [
    Validators.required,
  ]);

  constructor(private matchService: MatchService) {}

  public updateMatch(): void {
    if (this.homeScoreFormControl.valid && this.awayScoreFormControl.valid) {
      this.matchService.updateMatch(this.index, {
        home: this.homeScoreFormControl.value,
        away: this.awayScoreFormControl.value,
      });

      this.homeScoreFormControl.reset();
      this.awayScoreFormControl.reset();
    }
  }
}
