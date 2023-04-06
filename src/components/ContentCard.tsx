import { Content } from '@/service/contents';
import Link from 'next/link';
import Image from 'next/image';

type Props = { content: Content };
export default function ContentCard({
  content: { title, description, date, category, path },
}: Props) {
  return (
    <Link href={`/posts/${path}`}>
      <Image
        src={`/images/contents/${path}.jpg`}
        alt={title}
        width={300}
        height={200}
      />
      <div>
        <time>{date.toString()}</time>
        <h3>{title}</h3>
        <p>{description}</p>
        <span>{category}</span>
      </div>
    </Link>
  );
}
