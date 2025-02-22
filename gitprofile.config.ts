// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'ebenagati', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/Data-Analysis-Portfolio/',
  projects: {
    github: {
      display: false, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['ebenagati/Portfolio'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'Wrapped in Mystery: Why Drake Always Makes the Cut',
          description:
            'Aim
To investigate whether 2-0 is a dangerous scoreline and to understand whether there is really an advantage playing at home.

Description
This project explores two popular football beliefs: the 'dangerous' nature of a 2-0 scoreline and the concept of home-field advantage. Using data from the last 10 seasons within the Premier League, I aim to uncover the accuracy of these assumptions through data analysis. The analysis of the 2-0 scoreline is primarily completed within Python while the analysis of home field advantage is completed within Power BI.

Technology Stack
Python, Pandas, Numpy, Matplotlib, Excel, Power BI

Key Insights
The data shows that when a team is winning 2-0 at halftime they are overwhelmingly likely to win the game - 93.4% and 89.18% respectively for Home and Away teams.
This indicates that 2-0 is not a dangerous scoreline as leading teams are very likely to finish the game with a win.

Based on the following metrics: Win Rate, % of total goals scored at Home vs Away, Home Expected Goals vs Away Expected Goals, Home Shots vs Away Shots & Home Shots on Target vs Away Shots on Target.
A team statistically performs better at home
            ',
          imageUrl:
            'https://newsroom.spotify.com/media-kit/logo-and-brand-assets/',
          link: 'https://github.com/ebenagati/Portfolio/blob/main/Wrapped%20in%20Mystery%3A%20Why%20Drake%20Always%20Makes%20the%20Cut/README.md',
        },
        {
          title: 'Beyond the Myths: A Data-Driven Analysis of Common Myths in Football',
          description:
            'Project focusing on investigating whether a 2-0 scoreline is truly dangerous and analysed the impact of home-field advantage using 10 seasons of Premier League data.',
          imageUrl:
            'https://upload.wikimedia.org/wikipedia/commons/2/26/Spotify_logo_with_text.svg',
          link: 'https://github.com/ebenagati/Portfolio/blob/main/Beyond%20The%20Myths/Beyond%20the%20Myths.ipynb',
        },
      ],
    },
  },
  seo: {
    title: 'Portfolio of Eben Agati',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: 'ebenagati',
    x: '',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: '',
    phone: '',
    email: 'ebenagati@yahoo.co.uk',
  },
  resume: {
    fileUrl:
      '', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'SQL',
    'Python',
    'Excel',
    'Power BI',
    'Stata',
    'Jira',
    'Confluence'
  ],
  experiences: [
    {
      company: 'Giacom',
      position: 'Business Analyst',
      from: 'April 2024',
      to: 'Present',
      companyLink: 'https://giacom.com/',
    },
    {
      company: 'Equus Software',
      position: 'Business Analyst',
      from: 'July 2021',
      to: 'April 2024',
      companyLink: 'https://www.equusoft.com/',
    },
        {
      company: 'PwC',
      position: 'External Auditor',
      from: 'September 2019',
      to: 'January 2021',
      companyLink: 'https://www.equusoft.com/',
    },
  ],
  certifications: [
  
  ],
  educations: [
    {
      institution: 'ICAS',
      degree: 'Professional Qualification',
      from: '2019',
      to: '2021',
    },
    {
      institution: 'University of Nottingham',
      degree: 'BSc Econmomics',
      from: '2016',
      to: '2019',
    },
  ],
  publications: [

],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: '', // medium | dev
    username: '', // to hide blog section, keep it empty
    limit: 0, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'Dim',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
