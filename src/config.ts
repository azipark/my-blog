import type { GithubConfig, Link, PostConfig, Project, ProjectConfig, Site, SkillsShowcaseConfig, SocialLink, TagsConfig, ExperienceConfig, Experience, Award } from '~/types'

export const SITE: Site = {
  title: 'Litos',
  description: 'Litos is a blog theme built with Astro.js and Dnzzk2.',
  website: 'https://litos.vercel.app/',
  base: '/',
  author: 'Dnzzk2',
  ogImage: '/og-image.jpg',
}

export const HEADER_LINKS: Link[] = [
  {
    name: 'Projects',
    url: '/projects',
  },
  {
    name: 'Experience',
    url: '/experience',
  },
  {
    name: 'Posts',
    url: '/posts',
  },
]

export const FOOTER_LINKS: Link[] = [
  {
    name: 'Readme',
    url: '/',
  },
  {
    name: 'Posts',
    url: '/posts',
  },
  {
    name: 'Projects',
    url: '/projects',
  },
  {
    name: 'Tags',
    url: '/tags',
  },
]

// get icon https://icon-sets.iconify.design/
export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: 'github',
    url: 'https://github.com/yourname',
    icon: 'icon-[ri--github-fill]',
  },
  {
    name: 'twitter',
    url: 'https://x.com/yourname',
    icon: 'icon-[ri--twitter-x-fill]',
  },
  {
    name: 'bilibili',
    url: 'https://space.bilibili.com/yourSpaceId',
    icon: 'icon-[ri--bilibili-fill]',
  },
]

/**
 * SkillsShowcase 配置接口 / SkillsShowcase configuration type
 * @property {boolean} SKILLS_ENABLED  - 是否启用SkillsShowcase功能 / Whether to enable SkillsShowcase features
 * @property {Object} SKILLS_DATA - 技能展示数据 / Skills showcase data
 * @property {string} SKILLS_DATA.direction - 技能展示方向 / Skills showcase direction
 * @property {Object} SKILLS_DATA.skills - 技能展示数据 / Skills showcase data
 * @property {string} SKILLS_DATA.skills.icon - 技能图标 / Skills icon
 * @property {string} SKILLS_DATA.skills.name - 技能名称 / Skills name
 * get icon https://icon-sets.iconify.design/
 */
export const SKILLSSHOWCASE_CONFIG: SkillsShowcaseConfig = {
  SKILLS_ENABLED: true,
  SKILLS_DATA: [
    {
      direction: 'left',
      skills: [
        {
          name: 'JavaScript',
          icon: 'icon-[mdi--language-javascript]',
        },
        {
          name: 'CSS',
          icon: 'icon-[mdi--language-css3]',
        },
        {
          name: 'HTML',
          icon: 'icon-[mdi--language-html5]',
        },
        {
          name: 'React',
          icon: 'icon-[mdi--react]',
        },
        {
          name: 'Vue.js',
          icon: 'icon-[mdi--vuejs]', // 단색/라인, Material Design Icons
        },
        {
          name: 'Tailwind CSS',
          icon: 'icon-[mdi--tailwind]',
        },
        {
          name: 'SCSS',
          icon: 'icon-[mdi--language-css3]', // 라인/단색, 스타일 계열
        },
        {
          name: 'Bootstrap',
          icon: 'icon-[mdi--bootstrap]',
        },
        {
          name: 'WebSquare',
          icon: 'icon-[mdi--web]',
        },
      ],
    },
    {
      direction: 'right',
      skills: [
        {
          name: 'Git',
          icon: 'icon-[mdi--git]',
        },
        {
          name: 'SVN',
          icon: 'icon-[simple-icons--subversion]',
        },
        {
          name: 'Figma',
          icon: 'icon-[lineicons--figma]',
        },
        {
          name: 'Zeplin',
          icon: 'icon-[mdi--palette-outline]', // 라인, Material Design Icons
        },
        {
          name: 'Sketch',
          icon: 'icon-[lineicons--sketch]',
        },
        {
          name: 'Adobe XD',
          icon: 'icon-[simple-icons--adobexd]', // simple-icons 사용
        },
        {
          name: 'Adobe Photoshop',
          icon: 'icon-[simple-icons--adobephotoshop]', // simple-icons 사용
        },
        {
          name: 'Cursor AI',
          icon: 'icon-[mdi--robot]', // 공식 아이콘 없음, 대체 아이콘 사용
        },
      ],
    },
  ],
}

/**
 * GitHub配置 / GitHub configuration
 *
 * @property {boolean} ENABLED - 是否启用GitHub功能 / Whether to enable GitHub features
 * @property {number} CACHE_DURATION - 缓存持续时间(秒) / Cache duration in seconds
 * @property {boolean} USE_MOCK_DATA_FOR_DEVELOPMENT - 开发时使用模拟数据 / Use mock data in development
 */

export const GITHUB_CONFIG: GithubConfig = {
  ENABLED: true,
  CACHE_DURATION: 60 * 60 * 1.5 + 60 * 5,
  USE_MOCK_DATA_FOR_DEVELOPMENT: true,
}

export const POSTS_CONFIG: PostConfig = {
  title: 'Posts',
  description: 'Posts by Dnzzk2',
  introduce: 'Here, I will share the usage instructions for this theme to help you quickly use it.',
  author: 'Dnzzk2',
  homePageConfig: {
    size: 5,
    type: 'compact',
  },
  postPageConfig: {
    size: 10,
    type: 'image',
  },
  tagsPageConfig: {
    size: 10,
    type: 'time-line',
  },
  defaultHeroImage: '/og-image.jpg',
  defaultHeroImageAspectRatio: '16/9',
  imageDarkenInDark: true,
  readMoreText: 'Read more',
  prevPageText: 'Previous',
  nextPageText: 'Next',
  tocText: 'Catalogue',
  backToPostsText: 'Back to Posts',
  nextPostText: 'Next Post',
  prevPostText: 'Previous Post',
}

export const TAGS_CONFIG: TagsConfig = {
  title: 'Tags',
  description: 'All tags of Posts',
  introduce: 'All the tags for posts are here, you can click to filter them.',
}

export const PROJECTS_CONFIG: ProjectConfig = {
  title: 'Projects',
  description: 'The examples of my projects.',
  introduce: 'The examples of my projects.',
}

export const EXPERIENCE_CONFIG: ExperienceConfig = {
  title: 'Experience',
  description: 'My professional journey and educational background',
  intro: 'Here is an overview of my career path, education, and the skills I have developed along the way.'
}

// get icon https://icon-sets.iconify.design/
export const ProjectList: Project[] = [
  {
    name: 'Litos',
    description: 'A Simple & Modern Blog Theme for Astro.',
    githubUrl: 'https://github.com/Dnzzk2/Litos',
    website: 'https://litos.vercel.app/',
    type: 'image',
    icon: '/projects/logo.png',
    star: 11,
    fork: 4,
  },
]

export const ExperienceList: Experience[] = [
  {
    title: 'Frontend Developer',
    organization: 'Tech Company',
    location: 'Seoul, Korea',
    startDate: '2023-01',
    endDate: 'Present',
    type: 'work',
    description: 'Developed and maintained modern web applications using React, TypeScript, and various frontend technologies. Collaborated with cross-functional teams to deliver high-quality user experiences.',
    skills: ['React', 'TypeScript', 'Tailwind CSS', 'Git', 'Figma'],
    logo: '/experience/company-logo.png'
  },
  {
    title: 'Junior Developer',
    organization: 'Startup Inc.',
    location: 'Seoul, Korea', 
    startDate: '2022-03',
    endDate: '2022-12',
    type: 'work',
    description: 'Built responsive web interfaces and contributed to the development of company products. Gained experience in agile development methodologies.',
    skills: ['JavaScript', 'Vue.js', 'CSS', 'HTML'],
    logo: '/experience/startup-logo.png'
  },
  {
    title: 'Computer Science',
    organization: 'University of Technology',
    location: 'Seoul, Korea',
    startDate: '2018-03',
    endDate: '2022-02',
    type: 'education',
    description: 'Bachelor of Science in Computer Science. Focused on software engineering, algorithms, and web development. Graduated with honors.',
    skills: ['Data Structures', 'Algorithms', 'Software Engineering', 'Database Design'],
    logo: '/experience/university-logo.png'
  }
]

export const AwardsList: Award[] = [
  {
    title: 'Best Frontend Developer Award',
    organization: 'Tech Conference 2023',
    date: '2023-11',
    description: 'Recognized for outstanding contribution to frontend development and innovative UI/UX solutions.',
    category: 'Development',
    image: '/awards/frontend-award.png'
  },
  {
    title: 'Excellence in Web Development',
    organization: 'University of Technology',
    date: '2022-02',
    description: 'Awarded for exceptional performance in web development coursework and final project.',
    category: 'Academic',
    image: '/awards/academic-award.png'
  },
  {
    title: 'Innovation Challenge Winner',
    organization: 'Startup Inc.',
    date: '2022-08',
    description: 'First place in company-wide innovation challenge for developing an efficient web application.',
    category: 'Innovation',
    image: '/awards/innovation-award.png'
  }
]
