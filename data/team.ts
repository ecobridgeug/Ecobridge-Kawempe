export type TeamMember = {
  slug: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  twitter?: string;
  linkedin?: string;
  email?: string;
};

export const team: TeamMember[] = [
  {
    slug: 'amara-nantongo',
    name: 'Amara Nantongo',
    role: 'Co-Founder & Executive Director',
    bio: 'Environmental scientist turned community organizer. Leads strategy and partnerships across Ecobridge.',
    image:
      'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=600&q=80',
    linkedin: '#',
    twitter: '#',
  },
  {
    slug: 'david-okello',
    name: 'David Okello',
    role: 'Co-Founder & Head of Programs',
    bio: 'Designs and runs our field programs. Eight years working with youth-led environmental groups in East Africa.',
    image:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
    linkedin: '#',
  },
  {
    slug: 'rebecca-aceng',
    name: 'Rebecca Aceng',
    role: 'Director of Research & Innovation',
    bio: 'ML engineer and geographer. Leads our Climate AI & Mapping work and open-data programs.',
    image:
      'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80',
    linkedin: '#',
    twitter: '#',
  },
  {
    slug: 'samuel-kato',
    name: 'Samuel Kato',
    role: 'Community Outreach Lead',
    bio: 'Runs our sanitation, health, and clean-up programs. Trusted across Kampala council wards.',
    image:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80',
    linkedin: '#',
  },
  {
    slug: 'grace-namuli',
    name: 'Grace Namuli',
    role: 'Youth Leadership Programs',
    bio: 'Designs and facilitates our six-month Leadership Academy. Former fellow herself.',
    image:
      'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80',
    linkedin: '#',
  },
  {
    slug: 'isaac-mugisha',
    name: 'Isaac Mugisha',
    role: 'Operations & Partnerships',
    bio: 'Keeps the wheels turning. Builds our partnerships with universities, councils, and funders.',
    image:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=600&q=80',
    linkedin: '#',
  },
];

export const boardAdvisors: TeamMember[] = [
  {
    slug: 'prof-mary-nakato',
    name: 'Prof. Mary Nakato',
    role: 'Board Chair · Makerere University',
    bio: 'Environmental policy researcher with 25 years of field experience across East Africa.',
    image:
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=80',
  },
  {
    slug: 'dr-james-walusimbi',
    name: 'Dr. James Walusimbi',
    role: 'Advisor · Climate Science',
    bio: 'Climate scientist focused on East African hydrology and adaptation strategies.',
    image:
      'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80',
  },
];
