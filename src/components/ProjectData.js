export const projectList = [
  {
    projectId: 'project-1',
    projectName: 'Responsive Portfolio Website',
    projectCoverImage: '/images/project-images/project-1-cover.png',
    projectShowcase: '/images/project-images/project-1-showcase.gif',
    projectLink: '',
    projectRepo: 'http://github.com',
    projectDescription: `I always wanted a portfolio website since I started learning coding. Did some attempt before with plain javascript but the process is nowhere near smooth. React.js is here to the rescue. Resuable function components and delegation by passing props greatly simplified and streamlined the workflow.\n
I was shooting for a notebook vibe so thousands of cell components are employed to mimic the notebook grid. It might not be the most efficient way but hey, it works like a charm. With the help of React hooks, the grid can also respond to screen size change (similar to CSS mediaquery but with JS) and perform some really cool animations at events.\n
Things can be improved: 1) React re-rendering upon state change is expensive in my case so I still relied on some document query, a truly-React way may be more appreciable. 2) probably need to add a backend when I get many projects in store. 3) nudging vanilla CSS is exhausting, time to learn some friendly CSS library.`
  }
];