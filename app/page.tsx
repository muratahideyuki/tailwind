import Image from "next/image";
import { getNewsList } from "@/app/_libs/microcms";
import { TOP_NEWS_LIMIT } from "@/app/_constants";
import NewsList from "@/app/_components/NewsList";
import ButtonLink from "@/app/_components/ButtonLink";
import ScrollToTop from "@/app/_components/ScrollToTop";

export const revalidate = 60;

export default async function Home() {
  const data = await getNewsList({
    limit: TOP_NEWS_LIMIT,
  });

  return (
    <>
      <div>
        <div className="container mx-auto px-3">
          <main>
            <h3 className="text-9xl blur-md">SURF ART</h3>
            <h3 className="text-9xl blur-md mb-4">OIL PAINT</h3>
            <section className=" min-h-96 relative flex flex-1 shrink-0 items-center justify-center overflow-hidden  py-36 md:py-60 xl:py-80 mb-5 z-1">
              <Image
                src="/aa.jpg"
                alt="RANA PAINT"
                fill
                style={{ objectFit: "cover" }}
                className="rounded-2xl"
              />
            </section>

            <section className="mb-5">
              <NewsList news={data.contents} />
              <div>
                <ButtonLink href="/news">もっとみる</ButtonLink>
              </div>
            </section>
            <ScrollToTop />
          </main>
        </div>
      </div>
    </>
  );
}
