'use client';
import { Content } from '@/service/contents';
import { useState } from 'react';
import ContentsGrid from './ContentsGrid';
import Categories from './Categories';

type Props = {
  contents: Content[];
  categories: string[];
};
const ALL_CONTENTS = 'All Contents';

export default function FilterableContents({ contents, categories }: Props) {
  const [selected, setSelected] = useState(ALL_CONTENTS);
  const filtered =
    selected === ALL_CONTENTS
      ? contents
      : contents.filter((content) => content.category === selected);

  return (
    <section className="flex m-4">
      <ContentsGrid contents={filtered} />
      <Categories
        categories={[ALL_CONTENTS, ...categories]}
        selected={selected}
        onClick={setSelected}
      />
    </section>
  );
}
