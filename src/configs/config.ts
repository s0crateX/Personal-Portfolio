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
    title: string;
    description: string;
    keywords: string;
    type: string;
    ogImage: string;
    twitterHandle: string;
    locale: string;
    alternateLocales: string[];
  };
  seo: {
    structuredData: {
      type: string;
      jobTitle: string;
      skills: string[];
      worksFor: string;
      location: string;
      sameAs: string[];
    };
  };
} = {
  baseUrl: process.env.NODE_ENV === 'production' ? 'https://your-domain.com' : 'http://localhost:3000',
  domain: process.env.NODE_ENV === 'production' ? 'your-domain.com' : 'localhost:3000',
  author: 'Ryan Dave Chiva',
  author_surname: 'Chiva',
  titlePrefix: 'Ryan Dave Chiva - Full Stack Developer & Cybersecurity Enthusiast',
  country: 'Philippines',
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
    title: 'Ryan Dave Chiva - Full Stack Developer & Cybersecurity Expert Portfolio',
    description: 'Experienced Full Stack Developer and Cybersecurity Enthusiast specializing in modern web technologies, AI/ML, and secure application development. Explore my projects, certifications, and technical expertise.',
    keywords: 'Ryan Dave Chiva, Full Stack Developer, Cybersecurity Expert, Web Development, React, Next.js, Node.js, TypeScript, JavaScript, Python, AI, Machine Learning, Portfolio, Software Engineer, Frontend Developer, Backend Developer, Security Analyst, CCNA, DevNet Associate, Philippines Developer',
    type: 'website',
    ogImage: 'https://avatars.githubusercontent.com/u/122379125?s=400&u=fb90c09163121cdcd614d9b9a7a3cc313e3ecfd2&v=4',
    twitterHandle: '@Davexzzzzz',
    locale: 'en_US',
    alternateLocales: ['en_GB', 'en_AU']
  },
  seo: {
    structuredData: {
      type: 'Person',
      jobTitle: 'Full Stack Developer & Cybersecurity Specialist',
      skills: [
        'JavaScript', 'TypeScript', 'React', 'Next.js', 'Node.js', 'Python',
        'Cybersecurity', 'Network Security', 'Web Development', 'AI/ML',
        'Cloud Computing', 'DevOps', 'Database Design', 'API Development'
      ],
      worksFor: 'Freelance Developer',
      location: 'Philippines',
      sameAs: [
        'https://github.com/s0crateX',
        'https://www.linkedin.com/in/s0cratex/',
        'https://medium.com/@s0crateX',
        'https://s0cratex.hashnode.dev',
        'https://ko-fi.com/socratex'
      ]
    }
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
