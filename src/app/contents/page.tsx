import FilterableContents from "@/components/FilterableContents";
import { getAllContents } from "@/service/contents";

export default async function ContentsPage() {
  const contents = await getAllContents()
  const categories = [...new Set(contents.map((content) => content.category))];

  return <FilterableContents contents={contents} categories={categories} />;
}
