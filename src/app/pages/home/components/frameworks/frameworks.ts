import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  inject,
} from '@angular/core';
import { Devicon } from '@shared/components/devicon/devicon';
import { FrameworksService } from './frameworks.service';
@Component({
  selector: 'frameworks',
  imports: [Devicon],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  template: `
  <section class="mt-10">
  <h1 class="text-2xl dark:text-white">Frameworks</h1>
  <div class="flex flex-wrap h-1/2 py-6">
    @for (t of lts.frameworksTools(); track t.name) {
      <a [href]="t.url" [attr.aria-label]="t.name" target="_blank">
        <devicon [name]="t.name" [key]="$index"  cssClass="w-10 m-3"/>
      </a>
    }
  </div>
</section>
`,
})
export class Frameworks {
  lts = inject(FrameworksService)
}
