export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  category: 'Research' | 'Field Notes' | 'Policy' | 'Stories';
  author: string;
  date: string;
  readTime: string;
  image: string;
};

export const posts: Post[] = [
  {
    slug: 'mapping-kampalas-heat-islands',
    title: "Mapping Kampala's heat islands — what 189 km² of data revealed",
    excerpt:
      'After 14 months of satellite analysis paired with ground-truth surveys, our team published the first city-scale heat-island map for Kampala. Here is what surprised us.',
    category: 'Research',
    author: 'Rebecca Aceng',
    date: '2025-03-18',
    readTime: '9 min',
    image:
      'https://images.unsplash.com/photo-1569163139394-de4798aa62b6?auto=format&fit=crop&w=1400&q=80',
  },
  {
    slug: 'plastic-cooperatives-bwaise',
    title: 'Fair wages, real circularity: lessons from Bwaise plastic cooperatives',
    excerpt:
      'Two years into the Kampala Waste Loop, the women-led sorting cooperatives in Bwaise are reshaping how we think about informal recycling work.',
    category: 'Field Notes',
    author: 'Samuel Kato',
    date: '2025-02-22',
    readTime: '7 min',
    image:
      'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=1400&q=80',
  },
  {
    slug: 'youth-climate-policy-uganda',
    title: 'A youth seat at the table: Uganda\'s climate policy in 2025',
    excerpt:
      'Three of our fellows briefed the parliamentary committee on climate adaptation last month. What we asked for, what we got, and what comes next.',
    category: 'Policy',
    author: 'Amara Nantongo',
    date: '2025-01-30',
    readTime: '6 min',
    image:
      'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&w=1400&q=80',
  },
  {
    slug: 'solar-school-mpigi',
    title: 'A school in Mpigi flipped a switch — and so did the village',
    excerpt:
      'When the lights stayed on past 7pm in St. Joseph\'s Primary, the ripple effects went far beyond homework.',
    category: 'Stories',
    author: 'Grace Namuli',
    date: '2024-12-12',
    readTime: '5 min',
    image:
      'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=1400&q=80',
  },
  {
    slug: 'open-climate-data-east-africa',
    title: 'Why East Africa needs open climate data — and how to build it',
    excerpt:
      'A reflection on our open-data philosophy and a call to action for the regional research community.',
    category: 'Research',
    author: 'Rebecca Aceng',
    date: '2024-11-04',
    readTime: '8 min',
    image:
      'https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&w=1400&q=80',
  },
  {
    slug: 'fellowship-cohort-2025',
    title: 'Meet the 2025 Youth Environmental Leadership cohort',
    excerpt:
      'Thirty new fellows from across Uganda. Their stories, their projects, and where you can support them.',
    category: 'Stories',
    author: 'Grace Namuli',
    date: '2024-10-15',
    readTime: '4 min',
    image:
      'https://images.unsplash.com/photo-1529390079861-591de354faf5?auto=format&fit=crop&w=1400&q=80',
  },
];
