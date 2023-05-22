import ContactForm from '@/components/ContactForm';
import { SiCodewars, SiLinkedin, SiGithub } from 'react-icons/si';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Me',
  description: 'Send an email to Jenny',
};

const LINKS = [
  { icon: <SiGithub />, url: 'https://github.com/jen0828' },
  { icon: <SiLinkedin />, url: 'https://www.linkedin.com/in/jenny-moon-/' },
  { icon: <SiCodewars />, url: 'https://www.codewars.com/users/jen0828' },
];

export default function ContactPage() {
  return (
    <section className="flex flex-col items-center ">
      <h2 className="text-3xl font-bold my-2">{" Let's Connect!"}</h2>
      <br></br>
      <ul className="flex gap-6 my-2">
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
      <h2 className="text-3xl font-bold mt-8">Email me</h2>
      <ContactForm />
    </section>
  );
}
