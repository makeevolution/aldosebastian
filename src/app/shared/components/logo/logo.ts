import { Component, ViewEncapsulation } from '@angular/core';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'logo',
  imports: [RouterLink],
  encapsulation: ViewEncapsulation.None,
  standalone: true,
  template: `
  <a routerLink="/" aria-label="Brand">
  <svg class="hover:text-primary" width="50" height="50" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
  <!-- Main Calligraphic "A" Stroke -->
  <path d="M20 80 Q40 10, 50 30 T80 80" 
        stroke="currentColor" stroke-width="4" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
  <!-- Elegant Swash -->
  <path d="M15 65 Q50 100, 85 65" 
        stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-dasharray="4 4"/>
</svg>
  </a>
`
})
export class Logo { }
