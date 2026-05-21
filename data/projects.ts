export type Project = {
  slug: string;
  title: string;
  category: 'Climate Action' | 'Waste Management' | 'Research & AI' | 'Community Health' | 'Renewable Energy' | 'Youth Leadership';
  summary: string;
  description: string;
  image: string;
  location: string;
  year: number;
  status: 'Active' | 'Completed' | 'Upcoming';
  impact: { label: string; value: string }[];
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: 'climate-awareness-campaigns',
    title: 'Climate & Environmental Awareness Campaigns',
    category: 'Climate Action',
    summary:
      'Grassroots campaigns in Kampala schools and markets translating climate science into local action.',
    description:
      'Through workshops, street art, and radio programming, we reframe climate change as a story Ugandans recognize: drought, floods, food, future. Trained youth ambassadors lead conversations in their own communities.',
    image:
      'https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?auto=format&fit=crop&w=1400&q=80',
    location: 'Kampala metro',
    year: 2024,
    status: 'Active',
    impact: [
      { label: 'Schools reached', value: '38' },
      { label: 'Youth ambassadors', value: '212' },
      { label: 'Community sessions', value: '146' },
    ],
    featured: true,
  },
  {
    slug: 'kampala-waste-loop',
    title: 'Kampala Waste Loop',
    category: 'Waste Management',
    summary:
      'A circular waste model collecting, sorting, and re-purposing plastic from informal settlements.',
    description:
      'In partnership with local councils, we run sorting hubs in Bwaise and Kawempe, turning collected plastic into building blocks, fence posts, and art. Workers — many of them women — earn fair wages and shareholding in the cooperative.',
    image:
      'https://images.unsplash.com/photo-1604187351574-c75ca79f5807?auto=format&fit=crop&w=1400&q=80',
    location: 'Bwaise & Kawempe',
    year: 2024,
    status: 'Active',
    impact: [
      { label: 'Tonnes diverted', value: '215' },
      { label: 'Cooperative members', value: '64' },
      { label: 'Sorting hubs', value: '4' },
    ],
    featured: true,
  },
  {
    slug: 'climate-ai-mapping',
    title: 'Climate AI & Mapping',
    category: 'Research & AI',
    summary:
      'Open-source ML tools that map urban heat islands, flood risk, and tree cover across Kampala.',
    description:
      'A small research team uses Sentinel-2 imagery and ground-truth surveys to build city-scale climate maps. Outputs feed into city planning conversations and a public dashboard — so the data lives where decisions get made.',
    image:
      'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1400&q=80',
    location: 'Kampala City',
    year: 2025,
    status: 'Active',
    impact: [
      { label: 'Square km mapped', value: '189' },
      { label: 'Open datasets', value: '7' },
      { label: 'Policy briefs', value: '3' },
    ],
    featured: true,
  },
  {
    slug: 'community-sanitation-health',
    title: 'Community Sanitation & Public Health',
    category: 'Community Health',
    summary:
      'Clean-up drives, hand-washing infrastructure, and health drives in densely-populated neighborhoods.',
    description:
      'Each quarter we mobilize hundreds of volunteers for sanitation drives, paired with longer-term work on hand-washing stations, menstrual hygiene access, and cholera-readiness training.',
    image:
      'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1400&q=80',
    location: 'Multiple wards',
    year: 2024,
    status: 'Active',
    impact: [
      { label: 'Volunteers mobilized', value: '1,840' },
      { label: 'Stations installed', value: '52' },
      { label: 'Households reached', value: '6,200' },
    ],
  },
  {
    slug: 'solar-schools',
    title: 'Solar Schools Initiative',
    category: 'Renewable Energy',
    summary:
      'Installing affordable solar lighting and small-scale solar in rural and peri-urban schools.',
    description:
      'We co-design installations with school communities so they can be maintained locally. Each install comes with a youth-led training so students leave understanding the system they study under.',
    image:
      'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1400&q=80',
    location: 'Wakiso & Mpigi',
    year: 2024,
    status: 'Active',
    impact: [
      { label: 'Schools electrified', value: '14' },
      { label: 'Students impacted', value: '4,800' },
      { label: 'kWh generated/yr', value: '38,400' },
    ],
  },
  {
    slug: 'youth-leadership-academy',
    title: 'Youth Environmental Leadership Academy',
    category: 'Youth Leadership',
    summary:
      'A six-month fellowship turning curious young Ugandans into community-grounded climate leaders.',
    description:
      'Cohorts of 30 fellows go through field placements, mentorship, and a capstone project they propose and run. Alumni now lead programs at municipal, university, and NGO partners.',
    image:
      'https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=1400&q=80',
    location: 'Kampala (hybrid)',
    year: 2023,
    status: 'Active',
    impact: [
      { label: 'Fellows graduated', value: '92' },
      { label: 'Capstone projects', value: '31' },
      { label: 'Alumni in leadership', value: '78%' },
    ],
  },
];

export const projectCategories = [
  'All',
  'Climate Action',
  'Waste Management',
  'Research & AI',
  'Community Health',
  'Renewable Energy',
  'Youth Leadership',
] as const;
