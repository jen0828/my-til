import Image from 'next/image';
import profileImage from '../../public/images/profile.jpeg';
import Link from 'next/link';

export default function Profile() {
  return (
    <section>
      <Image
        src={profileImage}
        alt="Avatar of the author"
        width={250}
        height={250}
      />
      <h2>{"👋 Hi there, I'm Jenny"}</h2>
      <h3> Software Enginner</h3>
      <p> Welcome to my TIL!</p>
      <Link href="/contact">
        <button>Contact Me</button>
      </Link>
    </section>
  );
}
