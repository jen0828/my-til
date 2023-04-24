import { getRecentContents } from "@/service/contents";
import ContentsGrid from "./ContentsGrid";

export default async function RecentContents() {
  const contents = await getRecentContents();
  return (
    <section className='mx-4'>
      <h2 className='text-xl font-bold my-4 sm:text-2xl'>Recently Published </h2>
      <ContentsGrid contents={contents} />
    </section>
  );
}
