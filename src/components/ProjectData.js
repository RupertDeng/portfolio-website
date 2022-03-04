export const projectList = [
  {
    projectId: 'project-1',
    projectName: 'Responsive Portfolio Website',
    projectCoverImage: '/images/project-images/project-1-cover.jfif',
    projectShowcase: '/images/project-images/project-1-showcase.gif',
    projectLink: '',
    projectRepo: 'https://github.com/RupertDeng/portfolio-website',
    projectDescription: `I always wanted a portfolio website since I started learning coding. Did some attempt before with plain javascript but the process is nowhere near smooth. React.js is here to the rescue. Resuable function components and delegation by passing props greatly simplified and streamlined the workflow.\n
I was shooting for a notebook vibe so thousands of cell components are employed to mimic the notebook grid. It might not be the most efficient way but hey, it works like a charm. With the help of React hooks, the grid can also respond to screen size change (similar to CSS mediaquery but with JS) and perform some really cool animations at events.`
  },
  {
    projectId: 'project-2',
    projectName: 'Hands-free Cursor',
    projectCoverImage: '/images/project-images/project-2-cover.jpg',
    projectShowcase: '/images/project-images/project-2-showcase.gif',
    projectLink: '',
    projectRepo: 'https://github.com/RupertDeng/handsfree-cursor',
    projectDescription: `The idea actually came out when I was coding my first project. There were many times that I need to pause and search online for some info. So my hands were on and off the keyboard frequently till it gets annoying. I wish something else could help move mouse cursor while keeping my hands always ready to type. The initial thought was to track eyeball movement, but it turns out that the implmementation might not be reliable since eyeball movement is rather tiny. \n
I ended up with tracking face movement. As a concept, the app uses OpenCV and trained dlib ML model to detect key face landmark points, and drives mouse cursor via pyautogui library in a parallel process. I also added speed control, and mouse-click function, by mouth opening/closing. As you can see from the demo, it definitely works albeit some practice might be needed to tame it :-)`
  },
  {
    projectId: 'project-3',
    projectName: 'Youtube Air-gesture',
    projectCoverImage: '/images/project-images/project-3-cover.jpg',
    projectShowcase: '/images/project-images/project-3-showcase.gif',
    projectLink: '',
    projectRepo: 'https://github.com/RupertDeng/youtube-airgesture',
    projectDescription: `This is another camera-based gadget. As the name implies, the app simply uses hand gestures to control browser youtube video playback. Hey, you'd admit that there were occasions your hands are too clumsy or messy to touch mouse/keyboard, where this gadget can be useful. \n
This time, I used the trained ML model from Mediapipe instead to get more robust landmark detection, and custom-made the hand gesture identification class. pyautogui library then activates key-press on browser based on the gesture identified to control youtube video, such as pause/resume, turn on/off caption, full screen, seek forward/backward, speed up/down.`
  },
  {
    projectId: 'project-4',
    projectName: 'Odd-Number Web App',
    projectCoverImage: '/images/project-images/project-4-cover.jpg',
    projectShowcase: '/images/project-images/project-4-showcase.gif',
    projectLink: 'https://odd-number.netlify.app/',
    projectRepo: 'https://github.com/RupertDeng/odd-number.frontend',
    projectDescription: `I guess everyone gets random unknown phone calls. And I seldom found useful information online when that happens to me. So why not build a website where the good people on the internet can share info to help each other? It is also a perfect project to learn all the key essentials in Full Stack Web App development. \n
Here user can search for any phone number, and one who knows some info on the number can post messages to alert others. The messages can be up-voted or down-voted just like any internet posts. As you can see in the end of the demo above, I also implemented a simple ip-address rate-limiter so the system won't get abused too much. \n
Technical side, user-input data are stored in MongoDB Atlas, with phone number as primary key. Frontend of the app is created with React.js, and styled in Bootstrap which gives me much better experience than vanilla CSS. Backend server is enabled by Flask in a RESTful implmentation. Both frontend and backend are auto-deployed from Github repo, onto Netlify and Heroku platforms respectively.`
  }
];