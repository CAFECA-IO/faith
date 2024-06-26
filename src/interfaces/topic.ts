import { TopicCategory } from '@/constants/topic';

export interface ITopic {
  id: string;
  title: string;
  imageId: string;
  creator: string;
  category: TopicCategory[];
  content: string;
}

export const dummyTopicData: ITopic[] = [
  {
    id: '1',
    title: 'WorldMap',
    imageId: '/icons/info.svg',
    creator: 'John Doe',
    category: [TopicCategory.FINANCIAL_INSIGHTS, TopicCategory.TRENDING],
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    id: '2',
    title: 'WorldMap',
    imageId: '/icons/info.svg',
    creator: 'John Doe',
    category: [TopicCategory.AI_FINANCE, TopicCategory.TRENDING],
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    id: '3',
    title: 'WorldMap',
    imageId: '/icons/info.svg',
    creator: 'John Doe',
    category: [TopicCategory.FINANCIAL_INSIGHTS, TopicCategory.TRENDING, TopicCategory.AI_FINANCE],
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    id: '4',
    title: 'WorldMap',
    imageId: '/icons/info.svg',
    creator: 'John Doe',
    category: [TopicCategory.FINANCIAL_INSIGHTS, TopicCategory.OTHER],
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    id: '5',
    title: 'WorldMap',
    imageId: '/icons/info.svg',
    creator: 'John Doe',
    category: [TopicCategory.FINANCIAL_INSIGHTS, TopicCategory.TRENDING],
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
];