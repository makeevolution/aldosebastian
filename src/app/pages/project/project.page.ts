import { Component, ViewEncapsulation, inject } from '@angular/core';
import { ProjectService } from '@pages/project/project.service';
import { MetaService } from '@core/services/meta.service';
import profileData from '@data/profile.data';
import { PlatformTag } from '@shared/components/platform-tag/platform-tag';
import { Devicon } from '@shared/components/devicon/devicon';
import { ProjectLink } from '@pages/project/components/project-link'
import { FeatureProject } from '@pages/project/components/feature-project'
import { OtherProject } from '@pages/project/components/other-project'
import { SingleProject } from '@pages/project/components/single-project/single-project.component';
import { ProjectSchema } from '@data/schema/project.schema';
@Component({
  imports: [PlatformTag, Devicon, ProjectLink, FeatureProject, OtherProject, SingleProject],
  encapsulation: ViewEncapsulation.None,
  standalone: true,
  template: `
    <h1
      class="text-brand-primary mt-2 text-center text-3xl font-semibold tracking-tight lg:text-4xl lg:leading-snug dark:text-white">
      Projects
    </h1>
    <div style="display: flex; justify-content: space-around; flex-wrap: wrap; margin: 20px">
    <app-single-project [projectSchema]="projectSchema"></app-single-project>
    <app-single-project [projectSchema]="comingSoon"></app-single-project>
</div>
`
})
export class ProjectPage {
  projectService = inject(ProjectService);
  metaService = inject(MetaService);
  comingSoon: ProjectSchema = {
    title: 'Will deploy more projects, coming soon...',
    id: 0,
    subtitle: '',
    description: '',
    thumbnail: '',
    links: {
      website: '',
      playstore: '',
      appstore: '',
      github: ''
    },
    tools: [],
    featured: false,
    image: ''
  }
  projectSchema: ProjectSchema = {
    title: 'SmallBlog',
    subtitle: 'A small blogging platform',
    description: 'My first ever web app, built using Flask (Python), MySQL, and vanilla JavaScript for the frontend.' +
      ' \nIt is a simple blogging platform where users can create, read, update, and delete posts. ' +
      ' \nCurrently, it is hosted on AWS EC2 using ECS and Docker, backed by a AWS RDS MySQL database.',
    thumbnail: '',
    id: 0,
    image: 'https://aldosebastian.com/assets/images/projects/smallblog.png',
    links: {
      website: 'http://ec2-13-60-208-158.eu-north-1.compute.amazonaws.com/',
      playstore: '',
      appstore: '',
      github: ''
    },
    tools: [],
    featured: false,
  }
  constructor() {
  }
}
