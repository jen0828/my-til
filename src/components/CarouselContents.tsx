import { getRestContents } from '@/service/contents';
import ContentCard from './ContentCard';
import MultiCarousel from './MultiCarousel';

export default async function CarouselContents() {
  const contents = await getRestContents();
  return (
    <section className="mx-4 my-6">
      <h2 className="text-xl font-bold my-2 sm:text-2xl">Popular Contents </h2>
      <MultiCarousel>
        {contents.map((content) => (
          <ContentCard key={content.path} content={content} />
        ))}
      </MultiCarousel>
    </section>
  );
}
