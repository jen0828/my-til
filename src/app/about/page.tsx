import Profile from '@/components/Profile';

const TITLE_CLASS = 'text-2xl font-bold text-gray-800 my-2';
export default function AboutPage() {
  return (
    <>
      <Profile />
      <section className="bg-gray-100 shadow-lg p-8 m-8 text-center">
        <h2 className={TITLE_CLASS}>About Me</h2>
        <p>
          I am a passionate Software Engineer who values writing quality, fully
          tested, extensible code. <br />
        </p>
        <h2 className={TITLE_CLASS}>Skills</h2>
        <p>
          Languages: JavaScript, TypeScript, Ruby
          <br />
          Technologies: React, React Native, Next.js, Rails, PostgreSQL, SQL,
          HTML, CSS <br />
          Testing Frameworks: Jest & React testing library, Cypress, Rspec,
          Capybara
        </p>
      </section>
    </>
  );
}
