import { getPopularContents } from "@/service/contents";
import ContentsGrid from "./ContentsGrid";

export default async function PopularContents() {
  const contents = await getPopularContents();
  return (
    <section>
      <h2>PopularContents </h2>
      <ContentsGrid contents={contents} />
    </section>
  );
}
