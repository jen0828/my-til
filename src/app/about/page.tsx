import Profile from '@/components/Profile';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Me',
  description: "Jenny's tech skills and portfolio"
}

const TITLE_CLASS = 'text-2xl font-bold text-gray-800 my-2';
export default function AboutPage() {
  return (
    <>
      <Profile />
      <section className="bg-gray-100 shadow-lg p-8 m-8 text-center">
        <h2 className={TITLE_CLASS}>About Me</h2>
        <p>
          I am a passionate software engineer who values continuous learning.{' '}
          <br />
        </p>
        <h2 className={TITLE_CLASS}>Skills</h2>
        <p>
          <span className="font-bold"> Languages:</span> JavaScript, TypeScript,
          Ruby
          <br />
          <span className="font-bold"> Technologies:</span> React, React Native,
          Next.js, Rails, PostgreSQL, SQL, HTML, CSS <br />
          <span className="font-bold"> Testing Frameworks:</span> Jest & React
          testing library, Cypress, Rspec, Capybara
        </p>
        <h2 className={TITLE_CLASS}>Portfolio</h2>
        <Link href="https://portfolio-jmoon.netlify.app/">
          <button className="bg-yellow-500 font-bold rounded-xl py-1 px-4 mt-2">
            See my portfolio projects
          </button>
        </Link>
      </section>
    </>
  );
}
