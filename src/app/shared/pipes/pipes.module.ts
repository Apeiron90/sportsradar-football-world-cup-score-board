import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatchListSortPipe } from './match-list-sort/match-list-sort.pipe';

@NgModule({
  declarations: [MatchListSortPipe],
  exports: [MatchListSortPipe],
  imports: [CommonModule],
})
export class PipesModule {}
