import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { ProjectSchema } from '@data/schema/project.schema';

@Component({
  selector: 'app-single-project',
  imports: [
    MatCardModule,
    CommonModule
  ],
  standalone: true,
  templateUrl: './single-project.component.html',
  styleUrl: './single-project.component.scss'
})
export class SingleProject {
  @Input() projectSchema: ProjectSchema | undefined;
}
