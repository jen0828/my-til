import Image from 'next/image';
import profileImage from '../../public/images/profile.jpeg';
import Link from 'next/link';

export default function Profile() {
  return (
    <section className="text-center">
      <Image
        className="rounded-full mx-auto"
        src={profileImage}
        alt="Avatar of the author"
        width={250}
        height={250}
        priority
      />
      <h2 className="text-3xl font-bold mt-2">{"👋 Hi there, I'm Jenny"}</h2>
      <h3 className="text-xl font-semibold">Software Engineer</h3>
      <p> Welcome to my TIL!</p>
      <Link href="/contact">
        <button className="bg-yellow-500 font-bold rounded-xl py-1 px-4 mt-2">
          Contact Me
        </button>
      </Link>
    </section>
  );
}
