import CarouselContents from '@/components/CarouselContents';
import RecentContents from '@/components/RecentContents';
import Profile from '@/components/Profile';

export default function HomePage() {
  return (
    <>
      <Profile />
      {/* @ts-expect-error Server Component */}
      <RecentContents />
      {/* @ts-expect-error Server Component */}
      <CarouselContents />
    </>
  );
}
