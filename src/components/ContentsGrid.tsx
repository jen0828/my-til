import { Content } from '@/service/contents';
import ContentCard from './ContentCard';

type Props = { contents: Content[] };
export default function ContentsGrid({ contents }: Props) {
  return (
    <ul className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {contents.map((content) => (
        <li key={content.path}>
          <ContentCard content={content} />
        </li>
      ))}
    </ul>
  );
}
