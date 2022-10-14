import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScoreboardComponent } from './scoreboard.component';
import { ComponentsModule } from './components/components.module';

@NgModule({
  declarations: [ScoreboardComponent],
  imports: [CommonModule, ComponentsModule],
})
export class ScoreboardModule {}
