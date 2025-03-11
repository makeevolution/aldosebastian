import { ChangeDetectionStrategy, Component, ViewEncapsulation, inject } from '@angular/core';
import { MetaService } from '@core/services/meta.service';
import profileData from '@data/profile.data';
import { ExpertiseArea } from '@pages/home/components/expertise-area/expertise-area';
import { Intro } from '@pages/home/components/intro/intro';
import { LanguageTools } from '@pages/home/components/language-tools/language-tools';
import { DevOps } from '@pages/home/components/devops/devops'
import { Databases } from '@pages/home/components/databases/databases';
import { Loader } from '@shared/components/loader/loader';
@Component({
  selector: 'home-page',
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ExpertiseArea, Intro, LanguageTools, DevOps, Loader, Databases],
  template: `
    @defer(on immediate){
      <intro/>
      <expertise-area/>
      <language-tools/>
      <databases/>
      <devops/>
    }@placeholder {
      <loader/>
    }
  `
})
export class HomePage {
  metaService = inject(MetaService);
  constructor() {
    this.metaService.setMetaTags(
      `Home - ${profileData.name}`,
      'Dive into my portfolio, a passionate software engineer based in the Philippines. Explore the intricacies of my journey, from personal details to exciting projects. Join me on this virtual exploration of technology, creativity, and more.',
      [
        'marc kevin flores',
        'marc kevin',
        'marckevinflores',
        'software engineer',
        'philippines',
        'bio',
        'developer',
        'portfolio',
        'development',
        'android',
        'web',
        'ios',
      ]
    );
  }
}
