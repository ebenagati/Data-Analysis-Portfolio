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
            `Explored my Spotify listening habits to determine if Drake deserves a top 5 spot in my yearly Spotify Wrapped.



Test`,
          imageUrl:
            'https://upload.wikimedia.org/wikipedia/commons/e/ea/Spotify_logo_vertical_black.jpg',
          link: 'https://github.com/ebenagati/Portfolio/blob/main/Wrapped%20in%20Mystery%3A%20Why%20Drake%20Always%20Makes%20the%20Cut/README.md',
        },
        {
          title: 'Beyond the Myths: A Data-Driven Analysis of Common Myths in Football',
          description: 'Investigated the perceived danger of a 2-0 scoreline and examined the influence of home-field advantage using a decade of Premier League data.',
          imageUrl:
            'https://ichef.bbci.co.uk/ace/standard/976/cpsprodpb/19DF/production/_133032660_gettyimages-2078538583.jpg.webp',
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
    'Stata'
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
    
      'dim'
     
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
  footer: ``,

  enablePWA: true,
};

export default CONFIG;
