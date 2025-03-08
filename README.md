# [aldosebastian.com](https://aldosebastian.com)


<picture>
  <source media="(prefers-color-scheme: dark)" srcset="./preview-dark.png">
  <source media="(prefers-color-scheme: light)" srcset="./preview.png">
  <img alt="Website preview" src="./preview.png">
</picture>

## Stack
- **Framework**: [Angular](https://angular.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Deployment**: [Github Pages](https://pages.github.com/)

## Running Locally

This application requires Node.js v18.13+.

```bash
npm install -g @angular/cli
git clone https://github.com/marckevinflores/kevinflor.es.git
cd kevinflor.es
npm install
```

Before starting the application, you need to rename the files inside the `src/environments` directory. Remove the `.bak` file extension from `environment.ts.bak` and `environment.development.ts.bak`. Then run:
```bash
 npm start
```

Wait to compile and go to http://localhost:4200 after compile finish
