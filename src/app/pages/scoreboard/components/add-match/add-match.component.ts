import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatchService } from 'src/app/core/data/services/match.service';

@Component({
  selector: 'app-add-match',
  templateUrl: './add-match.component.html',
  styleUrls: ['./add-match.component.scss'],
})
export class AddMatchComponent {
  public homeTeamFormControl: FormControl = new FormControl('', [
    Validators.required,
  ]);
  public awayTeamFormControl: FormControl = new FormControl('', [
    Validators.required,
  ]);

  constructor(private matchService: MatchService) {}

  public addMatch(): void {
    if (this.homeTeamFormControl.valid && this.awayTeamFormControl.valid) {
      this.matchService.addMatch({
        home: this.homeTeamFormControl.value,
        away: this.awayTeamFormControl.value,
      });
      this.homeTeamFormControl.reset();
      this.awayTeamFormControl.reset();
    }
  }
}
