import { Content } from '@/service/contents';
import ContentCard from './ContentCard';

type Props = { contents: Content[] };
export default function ContentsGrid({ contents }: Props) {
  return (
    <ul>
      {contents.map((content) => (
        <li key={content.path}><ContentCard content={content} /></li>
      ))}
    </ul>
  );
}
