import { AiFillGithub, AiFillLinkedin, AiFillIdcard } from 'react-icons/ai';

const LINKS = [
  { icon: <AiFillGithub />, url: '' },
  { icon: <AiFillLinkedin />, url: '' },
  { icon: <AiFillIdcard />, url: '' },
];

export default function ContactPage() {
  return (
    <section className="flex flex-col items-center my-10">
      <h2 className="text-3xl font-bold my-2">{" Let's Connect!"}</h2>
      <br></br>
      <ul className="flex gap-4 my-2">
        {LINKS.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noreferrer"
            className="text-5xl hover:text-yellow-400">
            {link.icon}
          </a>
        ))}
      </ul>
    </section>
  );
}
