import { Content } from '@/service/contents';

type Props = { contents: Content[] };
export default function ContentsGrid({ contents }: Props) {
  return (
    <ul>
      {contents.map((content) => (
        <li key={content.path}>{content.title}</li>
      ))}
    </ul>
  );
}
