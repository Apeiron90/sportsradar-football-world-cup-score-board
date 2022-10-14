import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddMatchComponent } from './add-match/add-match.component';
import { ListMatchesModule } from './list-matches/list-matches.module';

@NgModule({
  declarations: [AddMatchComponent],
  exports: [AddMatchComponent, ListMatchesModule],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, ListMatchesModule],
})
export class ComponentsModule {}
