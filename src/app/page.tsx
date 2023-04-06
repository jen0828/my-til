import PopularContents from '@/components/PopularContents';
import Profile from '@/components/Profile';

export default function HomePage() {
  return (
    <>
      <Profile />
      {/* @ts-expect-error Server Component */}
      <PopularContents />
    </>
  );
}
