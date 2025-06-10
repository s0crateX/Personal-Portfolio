export const siteConfig: {
  baseUrl: string;
  domain: string;
  author: string;
  author_surname: string;
  titlePrefix: string;
  profile_image: string;
  form_id: string;
  country: string;
  social: {
    kofi: string;
    email: string;
    twitter: string;
    github: string;
    linkedin: string;
    medium: string;
    discord: string;
    blog: string;
    daily_dev: {
      username: string;
      card: string;
    };
  };
  other: {
    github_snake: string;
  };
  chatbot: {
    rateLimit: number;
  };
  contact: {
    debug: boolean;
    rateLimit: number;
  };
  metadata: {
    description: string;
    keywords: string;
    type: string;
  };
} = {
  baseUrl: 'http://localhost:3000', // Change this to your production URL
  domain: 'localhost:3000',// Change this to your production URL
  author: 'Ryan Dave Chiva',
  author_surname: 'Chiva',
  titlePrefix: 'Ryan Dave Chiva',
  country: 'Phillipines',
  profile_image:
    'https://avatars.githubusercontent.com/u/122379125?s=400&u=fb90c09163121cdcd614d9b9a7a3cc313e3ecfd2&v=4',
  form_id: 'https://formspree.io/f/xdkzepva',
  social: {
    kofi: 'https://ko-fi.com/socratex',
    email: 'activeoverflow@proton.me',
    twitter: '@Davexzzzzz',
    github: 's0crateX',
    linkedin: 'https://www.linkedin.com/in/s0cratex/',
    medium: 'https://medium.com/@s0crateX',
    blog: 'https://s0cratex.hashnode.dev',
    discord: 'https://discord.gg/FEb5zKTg',
    daily_dev: {
      username: 's0cratex',
      card: 'https://api.daily.dev/devcards/v2/U4DlP5iOulIGofHxk22WL.png?type=wide&r=vde'
    }
  },
  metadata: {
    description: `Hi! I'm Ryan Dave Chiva, a Full Stack developer and a Cyber Security Enthusiast passionate about building apps, exploring AI and ML, and collaborating on exciting projects. Let's connect!`,
    keywords:
      'Ryan Dave Chiva, Full Stack Developer, Ryan Dave Chiva portfolio, Ryan Dave Chiva GitHub, Web Development, Mobile Applications, , Artificial Intelligence, Programming Languages,',
    type: 'website'
  },
  chatbot: {
    rateLimit: 10
  },
  contact: {
    debug: true,
    rateLimit: 10
  },
  other: {
    github_snake:
      'https://raw.githubusercontent.com/s0crateX/s0crateX/output/github-snake.svg'
  }
};
