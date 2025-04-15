import { NgFor } from '@angular/common';
import { Component, ViewEncapsulation, effect, inject } from '@angular/core';
import { MetaService } from '@core/services/meta.service';
import { TraktTvService } from '@core/services/trakt-tv.service';
import profileData from '@data/profile.data';

@Component({
  selector: 'about',
  template: `
  <section class="flex flex-col max-w-screen-lg justify-between mx-auto gap-16 dark:text-gray-200 overflow-y-hidden">
  <div class="flex flex-col gap-5">
      <h1 class="text-2xl font-semibold dark:text-white">About Me</h1>
      <p class="justify-start">I'm Aldo Sebastian, a software
        engineer with over
        three years of
        experience. I specialize in backend development, passionate in building robust, large-scale software solutions.</p>
      <p *ngFor="let a of aboutDetails"><b class="dark:text-white text-black">{{a.title}}</b><br />{{a.desc}}
      </p>
  </div>

<div class="flex flex-col gap-5">
<h1 class="text-2xl font-semibold dark:text-white">Contact Information:</h1>
  @for(c of contactInfo; track $index){
    <p>
      <b class="dark:text-white text-black ">{{c.title}}:</b><br />
      <a [href]="c.link" class="hover:underline" target="_blank">{{c.desc}}</a>
    </p>
  }
</div>
</section>
`,
  encapsulation: ViewEncapsulation.None,
  imports: [NgFor],
  standalone: true
})
export class AboutPage {
  metaService = inject(MetaService)
  traktTvService = inject(TraktTvService)
  constructor() {
    this.metaService.setMetaTags(
      `About - ${profileData.name}`,
      'Dive into a curated space to learn more about the person behind the name',
      ['bio', 'biography', 'information', 'about', 'contact', 'detail']
    )
  }
  public aboutDetails = [
      {
        "title": "What I Do",
        "desc": `I am enthusiastic in C# and Python software development, working on diverse projects such as  
        desktop applications, web-backend services, and scalable, robust deployment thereof.
        I strive to write clean, maintainable code and follow software architecture best practices.  
        My focus is on creating efficient, scalable solutions that align with user needs and industry standards.`
      },
      {
        "title": "Always Learning",
        "desc": `I'm passionate about continuous learning, always experimenting with new techniques,  
        frameworks, and best practices. Whether it's improving my coding skills or exploring  
        emerging technologies, I enjoy staying ahead and growing as a developer.`
      },
      {
        "title": "Off-Duty Fun",
        "desc": `When I'm not coding, I love diving into tech blogs and readi on software engineering best practices. 
         also enjoy gaming, particularly first-person adventure games, as well as playing to music, and weightlifting. Spending time with family  
        and friends is also just as important to me.`
      },
      {
        "title": "My Journey",
        "desc": `I didn't start out as a developer; I was a mechanical engineering graduate. I was exposed to coding and software engineering during the pandemic,
        and I was hooked. I love the challenge of solving complex problems and the satisfaction of seeing a project come to life. I therefore started my journey as a 
        QA and with the wonderful and supportive people I come across in my career, I was able to transition to become a software developer. It's still an ongoing journey,
        and I'm excited to see where it takes me.`
      }
  ];
  public contactInfo = [
    {
      title: 'Address',
      desc: `Den Haag, Zuid Holland, Netherlands`,
      link: 'https://maps.app.goo.gl/dT2aE2RxeQTEA7ne7'
    },
    {
      title: 'Email',
      desc: 'aldo_hasibuan@yahoo.com',
      link: 'mailto:aldo_hasibuan@yahoo.com'
    }
  ]
}
