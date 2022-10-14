import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Match } from 'src/app/core/data/models/match.model';
import { MatchService } from 'src/app/core/data/services/match.service';

@Component({
  selector: 'app-list-matches',
  templateUrl: './list-matches.component.html',
  styleUrls: ['./list-matches.component.scss'],
})
export class ListMatchesComponent {
  public matches$: BehaviorSubject<Match[]> = this.matchService.getMatches;

  constructor(private matchService: MatchService) {}
}
