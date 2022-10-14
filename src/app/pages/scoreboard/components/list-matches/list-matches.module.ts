import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditMatchComponent } from './edit-match/edit-match.component';
import { RemoveMatchComponent } from './remove-match/remove-match.component';
import { ListMatchesComponent } from './list-matches.component';
import { PipesModule } from 'src/app/shared/pipes/pipes.module';

@NgModule({
  declarations: [
    EditMatchComponent,
    RemoveMatchComponent,
    ListMatchesComponent,
  ],
  exports: [ListMatchesComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, PipesModule],
})
export class ListMatchesModule {}
