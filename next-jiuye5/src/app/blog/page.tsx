import type { Metadata } from 'next';
import BlogList from '@/components/blogList';

export const metadata: Metadata = {
  title: 'Blog List',
  description: '...',
};

export default function Page() {
  return <BlogList />;
}
