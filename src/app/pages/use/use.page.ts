import { Component, inject } from '@angular/core';
import { MetaService } from '@core/services/meta.service';
import profileData from '@data/profile.data';
import { github } from '@icon/brand.icon';
import { Devicon } from '@shared/components/devicon/devicon';
import { Logo } from '@shared/components/logo/logo';

@Component({
  selector: 'use-page',
  standalone: true,
  imports: [Devicon, Logo],
  template: `<div>
  <h1 class="text-brand-primary mb-3 mt-2 text-center text-3xl font-semibold tracking-tight lg:text-4xl lg:leading-snug dark:text-white">Info</h1>
  <div class="flex flex-col gap-7">
    <h2 class="text-xl font-bold dark:text-white">Tech Stack:</h2>
    <p class="dark:text-white text-black">
      This website is created with Angular and Tailwind CSS. It's hosted on Github Pages. Check out the source code on
      <a class="underline" href="https://github.com/makeevolution/aldosebastian" target="_blank"
        >GitHub</a
      >!
    </p>
    <ul class="flex flex-row py-5 gap-5">
      <li class="pr-5">
        <devicon name="Angular" cssClass="w-12 h-12"/>
      </li>
      <li class="pr-5">
        <devicon name="Tailwind CSS" cssClass="w-12 h-12"/>
      </li>
    </ul>
    <h2 class="text-xl font-bold dark:text-white">Language Logos:</h2>
    <p class="dark:text-white text-black">I used <a class="underline" target="_blank" href="https://devicon.dev/">devicon.dev</a>, adding my own animations and color changes when hovered using Angular signals

    <h2 class="text-xl font-bold dark:text-white">Website Logo:</h2>
    <p class="text-black dark:text-white">
    The logo is the first letter of my name, with some styling to make it simple.
    </p>
    <div
      class="grid grid-cols-1 sm:grid-cols-2 items-center place-items-center"
    >
      <div
        class="flex flex-col items-center justify-center p-6 w-full border border-gray-500 text-center bg-white dark:bg-transparent"
      >
        <logo class="dark:text-white text-black"/>
      </div>
      <div
        class="flex flex-col items-center justify-center p-6 w-full border dark:border-white border-black text-center bg-gray-900 dark:bg-white"
      >
        <logo class="dark:text-black text-white"/>
      </div>
    </div>
    <h2 class="text-xl font-bold dark:text-white">Intro Image:</h2>
    <p class="text-black dark:text-white">I utilized <a class="underline" target="_blank" href="https://storyset.com/illustration/code-typing/bro">storyset.com</a>, adding customized animations using SVG to make the page lively</p>
  </div>
  </div>`,
})
export class UsePage {
  metaService = inject(MetaService)
  constructor(){
    this.metaService.setMetaTags(
      `Uses - ${profileData.name}`,
      'My Personal Projects!',
      [
        'aldo sebastian',
        'aldo sebastian',
        'aldosebastian',
        'backend software developer',
        'The Netherlands',
        'bio',
        'developer',
        'portfolio',
        'development',
        '.NET',
        'Python',
        'DevOps',
      ]
    );
  }
  public github = github;
}
