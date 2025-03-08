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
        experience. I specialize in backend development, with</p>
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
        "desc": `I specialize in C# and Python development, working on diverse projects such as  
        desktop applications, backend services, and performance optimization.  
        I write clean, maintainable code and prioritize software architecture best practices.  
        My focus is on creating efficient, scalable solutions that align with user needs  
        and industry standards.`
      },
      {
        "title": "Always Learning",
        "desc": `I'm passionate about continuous learning, always seeking out new C# techniques,  
        frameworks, and best practices. Whether it's improving my coding skills or exploring  
        emerging technologies, I enjoy staying ahead and growing as a developer.`
      },
      {
        "title": "Off-Duty Fun",
        "desc": `When I'm not coding, I love diving into tech blogs, experimenting with new  
        programming concepts, and honing my skills. I also enjoy gaming, watching videos,  
        listening to music, and unwinding with walks outside. Spending time with family  
        and friends is just as important to me.`
      },
      {
        "title": "Why I Code",
        "desc": `Coding empowers me to bring ideas to life. It’s a creative process that allows me  
        to develop meaningful solutions while constantly challenging myself to grow.  
        I love solving problems, refining my skills, and making a real impact through technology.`
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
