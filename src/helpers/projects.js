//image links

export const projects = [
  {
    name: "Monday Item Visualizer View App",
    links: {
      install: "https://auth.monday.com/oauth2/authorize?client_id=c402136ecfc3e375135e5002cb9ebaa0&response_type=install",
      openSource: "https://github.com/PepperAddict/Item-Visualizer",
      demoVideo: "https://youtu.be/579VsWvkZRk"
    },
    tags: ["ReactJS", "HTML", "CSS", "Adobe Photoshop", "Inkscape", "Adobe XD", "Monday API", "Git", "NodeJS", "Puppeteer", "Canvas", "JavaScript", "ES6"],
    description: [
      "A Monday View App to help explain your ticket better with three methods such as editing a screen shot, record a video, and more",
      "I developed this as a full stack developer using ReactJS as the front end and NodeJS as the backend for Monday Communication."
    ],
    images: [
      {
        link: require('../img/vi1.png'),
        alt: "Show the Website section with options for full page and different viewports."
      },
      {
        link: require('../img/vi2.png'),
        alt: "After entering a URL for Show The Website will take you to the summary."
      },
      {
        link: require('../img/vi3.png'),
        alt: "Show the Idea with screen capture."
      },
      {
        link: require('../img/vi4.png'),
        alt: "Show the Video with a screen record"
      },
      {
        link: require('../img/vi5.png'),
        alt: "The homepage with videos on how to use the app"
      }
    ],
    videos: [
      {
        link: "https://www.youtube.com/watch?v=AGqnjZ_9UCA",
        alt: "Video tutorial on how to use Show the Video"
      },
      {
        link: "https://www.youtube.com/watch?v=iK_jXmQq0is",
        alt: "video tutorial on how to use Show the Idea"
      },
      {
        link: "https://www.youtube.com/watch?v=fGsY3KLNeZM",
        alt: "Video tutorial on how to use Show the Website"
      }
    ]
  },
  {
    name: "Monday Current Time Dashboard App",
    links: {
      install:
        "https://auth.monday.com/oauth2/authorize?client_id=3e39c0dff002278732034237f5771455&response_type=install",
      openSource: "https://github.com/PepperAddict/monday-widget-current-time",
      demoVideo: "https://www.youtube.com/watch?v=2AD97Lp041c",
    },
    tags: ["ReactJS", "HTML", "CSS", "Monday API", "Git", "Adobe Photoshop", "Adobe XD"],
    description: [
      `Current Time for Monday shows everybody's time in their timezone.`,
      `This app was made with <a href="https://www.npmjs.com/package/monday-sdk-js" target="_blank" rel="nofollow noopener noreferrer">Monday's SDK API</a> and ReactJS`,
    ],
    images: [
      {
        link: require("../img/ct2.png"),
        alt: "Monday App in Dashboard Expanded View",
      },
      {
        link: require("../img/ct3.png"),
        alt: "Screenshot of Monday App Filtered User View",
      },
      {
        link: require("../img/ct4.png"),
        alt: "Screenshot of Monday App Smaller Resolution View",
      },
    ],
  },
  {
    name: "Atlassian Jira Current Time App",
    links: {
      openSource:
        "https://github.com/PepperAddict/atlassian-forge-current-time",
      demoVideo: "https://www.youtube.com/watch?v=i6Xb543cX_0",
    },
    tags: ["Atlassian Forge API", "CSS", "Git", "Forge CLI"],
    description: [
      ` Current Time for Atlassian is for the issue sidebar to see the current time of the assigneee and the reporter. This app will 
                help save the user time and see the current time right away rather than googling 'What time is it in X'`,
      ,
      `This app won the top 100 Atlassian Forge App`,
      `This app was created using Atlassian's new <a href="https://www.atlassian.com/forge" target="_blank" rel="nofollow noopener noreferrer">Forge API</a>`,
    ],
    images: [
      {
        link: require("../img/ct1.jpg"),
        alt: "Screenshot of Jira Issue Sidebar",
      },
      {
        link: require("../img/ct5.jpg"),
        alt: "Shows Current Time as the winner as the top 100 Forge App",
      },
    ],
  },

  {
    name: "Mockup Integration",
    links: {
      openSource:
        "https://github.com/PepperAddict/atlassian-connect-mockup-integration",
      demoVideo: "https://www.youtube.com/watch?v=Nt8UjXpXSSc",
    },
    tags: ["ReactJS", "Git", "CSS", "Inkscape", "Atlassian Connect API", "Figma API"],
    description: [
      `Mockup Integration is an Atlassian Jira app for attaching your mockups/prototypes from various services or you can upload a file and attach that to the issue ticket`,
      `Built with ReactJS and CSS`,
    ],
    images: [
      {
        link: require("../img/mu1.jpg"),
        alt:
          "Mockup Integrations with preview on the left and summary on the right plus the ability to write a comment",
      },
      {
        link: require("../img/mu2.jpg"),
        alt:
          "Summary section of Mockup Integration as well as changing the mockup link",
      },
      {
        link: require("../img/mu3.jpg"),
        alt:
          "change the owner of the prototype by assigning the correct Jira user",
      },
      {
        link: require("../img/mu4.jpg"),
        alt:
          "The upload feature in Mockup Integration as well as showing the loading",
      },
    ],
  },
  {
    name: "Talking Cloud",
    links: {
      website: "https://www.talkingcloud.io",
      openSource: "https://github.com/PepperAddict/English_Depict",
      demoVideo: "https://www.youtube.com/watch?v=a6DHEyp79bE",
      design:
        "https://xd.adobe.com/view/049b8746-593f-4944-4e76-b47e92c7a8d7-72aa/",
    },
    tags: [
      "HTML",
      "SSH",
      "CypressJS",
      "ReactJS",
      "ES6",
      "CSS",
      "API",
      "Stylus",
      "Webpack",
      "GraphQL",
      "Apollo",
      "PostgreSQL",
      "AWS EC2",
      "NodeJS",
      "AWS S3",
      "JWT",
      "WebGL",
      "Docker",
      "Amazon Alexa",
      "Amazon API",
    ],
    description: [
      "An open source project dedicated for grade school students to practice their English skills with small tasks.",
      "Amazon Alexa skill to complete tasks assigned to the specific student or practice with grade level tasks",
    ],
    images: [
      {
        link: require("../img/tc1.png"),
        alt: "screenshot of talking cloud's intro page",
      },
      {
        link: require("../img/tc1m.png"),
        alt: "screenshot of talking cloud's intro page in mobile",
      },
      {
        link: require("../img/tc2.png"),
        alt:
          "screenshot of talking cloud's vocabulary section for the dashboard",
      },
      {
        link: require("../img/tc3.png"),
        alt: "screenshot of talking cloud's login for desktop",
      },
      {
        link: require("../img/tc3m.png"),
        alt: "screenshot of talking cloud's login for mobile",
      },
    ],
  },
  {
    name: "Visual Flow Lightroom Presets",
    links: {
      website: "https://www.vfpresets.com",
    },
    tags: [
      "JavaScript",
      "JQuery",
      "PHP",
      "HTML",
      "Wordpress",
      "CSS",
      "Gutenberg",
    ],
    description: [
      "Developed from scratch following a design mock despite environment limitations.",
      "Regarded speed and responsiveness to be priority.",
    ],
    images: [
      {
        link: require("../img/vfp1.png"),
        alt: "screenshot of VFPreset's hero section that has a slideshow",
      },
      {
        link: require("../img/vfp2.png"),
        alt: "screenshot of VFPreset's section with video popup",
      },
      {
        link: require("../img/vfp3.png"),
        alt: "screenshot of VFPreset's Jquery 20/20 plugin with gallery",
      },
      {
        link: require("../img/vfp4.png"),
        alt: "screenshot of VFPreset's section with subtle design",
      },
      {
        link: require("../img/vfp5.png"),
        alt: "screenshot of VFPreset's pricing section",
      },
    ],
  },

  {
    name: "SLRLounge",
    links: {
      website: "https://www.slrlounge.com",
    },
    tags: [
      "PHP",
      "Sass",
      "JavaScript",
      "JQuery",
      "Wordpress",
      "HTML",
      "CSS",
      "Grunt",
      "Selenium",
      "JenkinsCI",
      "Git",
      "Atlassian Jira",
      "Slack",
      "Google Adsense",
      "MySQL",
      "VPN",
      "SSH",
      "Ontraport"
    ],
    description: [
      "Maintained and improved existing theme and plugins.",
      "Created new Wordpress plugins to help the team",
      "Helped with transitioning away from the old SLRLounge to the new SEO friendly theme.",
    ],
    images: [
      {
        link: require("../img/slr1.jpg"),
        alt: "screenshot of old slrlounge homepage",
      },
      {
        link: require("../img/slr2.png"),
        alt: "screenshot of new slrlounge homepage",
      },
      {
        link: require("../img/slr3.png"),
        alt: "screenshot of two plugins",
      },
      {
        link: require("../img/slr4.png"),
        alt: "screenshot of glossary page",
      },
      {
        link: require("../img/slr5.png"),
        alt: "screenshot of glossary2",
      },
    ],
  },
  {
    name: "SLRLounge Workshops",
    links: {
      website: "https://www.slrloungeworkshops.com",
    },

    tags: ["HTML", "CSS", "AWS S3", "Shopify Liquid"],
    description: [
      "Developed from scratch following a design mock despite environment limitations.",
    ],
    images: [
      {
        link: require("../img/wo1.png"),
        alt:
          "screenshot of SLRLoungeWorkshop's hero section with video background",
      },
      {
        link: require("../img/wo2.png"),
        alt:
          "screenshot of SLRLoungeWorkshop's information section for their workshops",
      },
      {
        link: require("../img/wo3.png"),
        alt: "screenshot of SLRLoungeWorkshop's testimonial section",
      },
      {
        link: require("../img/wo4.png"),
        alt: "screenshot of SLRLoungeWorkshop's section with image captions",
      },
      {
        link: require("../img/wo5.png"),
        alt: "screenshot of SLRLoungeWorkshop's pricing section",
      },
    ],
  },

  {
    name: "Social Pirates",
    links: {
      openSource: "https://gitlab.com/tacticalengine/socialpirates",
    },
    tags: [
      "ReactJS",
      "FeathersJs",
      "NodeJS",
      "Handlebars",
      "Webpack",
      "CypressJS",
      "ESLint",
      "Heroku",
      "JWT",
      "GraphQL",
      "Apollo",
      "Sequelize",
      "PostgreSQL",
      "Mocha",
      "Stripe API",
      "Twitter API",
      "Hasura",
    ],
    description: [
      "A project for posting to different social media accounts from one single source",
      "I worked closely with another developer as a react/node full stack developer",
    ],
    images: [
      {
        link: require("../img/sp1.png"),
        alt: "screenshot of the login page",
      },
      {
        link: require("../img/sp2.png"),
        alt: "screenshot of loading",
      },
    ],
  },
  {
    name: "Ragin Mages",
    links: {
      openSource: "https://github.com/PepperAddict/ragin-mages",
    },
    tags: [
      "Phaser 3",
      "Service Worker",
      "HTML",
      "CSS",
      "JavaScript",
      "ES6",
      "Gulp",
      "Texture Packer",
      "Blender",
      "PWA"
    ],
    description: [
      "An open source offline single player and online multiplayer JavaScript Phaser 3 fighting game with different types of characters",
      "I worked with a team as the character builder and JavaScript developer using Phaser 3's API",
    ],
    images: [
      {
        link: require("../img/ra1.png"),
        alt: "screenshot of the splash screen",
      },
      {
        link: require("../img/ra2.png"),
        alt: "Offline capability using service worker",
      },
      {
        link: require("../img/ra3.png"),
        alt:
          "Screenshot of character selection before entering multiplayer/singleplayer",
      },
      {
        link: require("../img/ra4.png"),
        alt: "Screenshot of changing name",
      },
      {
        link: require("../img/ra5.png"),
        alt: "Actual playing mode in single player",
      },
    ],
  },
  {
      name: "Books Project CS50",
      links: {
          openSource: "https://github.com/PepperAddict/python-web"
      },
      description: ["A project to practice Flask, Jinja2 and SQLAlchemy by creating an API"],
      tags: ["Python", "Flask", "SQLAlchemy", "HTML", "Jinja2", "SQL", "PostgreSQL", "Heroku", "API"],
      images: [
          { link: require("../img/py1.png"),
           alt:"Login and Registration system as well as data pull with filtering. "},
           {
               link: require("../img/py2.png"),
                alt:"Info pull with a commenting system"
           },
           {
            link: require("../img/py3.png"),
             alt:"API creation"
           }
      ]
  },
  {
      name: "Restaurant App Offline Project",
      links: {
          openSource: "https://github.com/PepperAddict/restaurant"
      },
      tags: ["JavaScript", "PWA", "ES6", "Gulp", "Service Worker", "IndexedDB API", "HTML", "CSS", "Google Maps API"],
      description: ["A project for pulling up local restaurants to practice using PWA tools such as Service Worker and Promised IndexedDB"],
      images: [
          {
            link: require("../img/rr1.png"),
             alt:"Google Maps API and filtering by selection"
            
          },
          {
              link: require("../img/rr2.png"),
               alt:"Data display and commenting system using IndexedDB when offline"
          }
      ]
  },

  {
      name: "Mappa",
      links: {
          openSource: "https://github.com/PepperAddict/gwg-women-techmakers"
      },
      tags: ["JavaScript", "PWA", "ES6", "IndexedDB", "Inkscape", "Service Worker", "Google Maps API", "Weather API", "ReactJS", "CSS"],
      description: ["An open source group project that gives local data of your location while offline"],
      images: [
          {
            link: require("../img/map1.png"),
            alt:"screenshot of the intro page asking for location permission for google's api"
          }
      ]
  }
];
