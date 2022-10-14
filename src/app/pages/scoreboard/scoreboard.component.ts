import { Component, OnInit } from '@angular/core';
import { MatchService } from 'src/app/core/data/services/match.service';

@Component({
  templateUrl: './scoreboard.component.html',
  styleUrls: ['./scoreboard.component.scss'],
  providers: [MatchService],
})
export class ScoreboardComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
