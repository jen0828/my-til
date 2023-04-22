import { getPopularContents } from "@/service/contents";
import ContentsGrid from "./ContentsGrid";

export default async function PopularContents() {
  const contents = await getPopularContents();
  return (
    <section className='mx-4'>
      <h2 className='text-xl font-bold my-4 sm:text-2xl text:sm'>Popular Contents </h2>
      <ContentsGrid contents={contents} />
    </section>
  );
}
