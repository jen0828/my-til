import { getPopularContents } from "@/service/contents";
import ContentsGrid from "./ContentsGrid";

export default async function PopularContents() {
  const contents = await getPopularContents();
  return (
    <section>
      <h2 className='text-2xl font-bold my-2'>Popular Contents </h2>
      <ContentsGrid contents={contents} />
    </section>
  );
}
