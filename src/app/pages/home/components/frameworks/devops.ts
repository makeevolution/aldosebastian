import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  inject,
} from '@angular/core';
import { Devicon } from '@shared/components/devicon/devicon';
import { DevOpsService } from './devops.service';
@Component({
  selector: 'devops',
  imports: [Devicon],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  template: `
  <section class="mt-10">
  <h1 class="text-2xl dark:text-white">DevOps</h1>
  <div class="flex flex-wrap h-1/2 py-6">
    @for (t of lts.devopsTools(); track t.name) {
      <a [href]="t.url" [attr.aria-label]="t.name" target="_blank">
        <devicon [name]="t.name" [key]="$index"  cssClass="w-10 m-3"/>
      </a>
    }
  </div>
</section>
`,
})
export class DevOps {
  lts = inject(DevOpsService)
}
