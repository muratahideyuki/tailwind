import Image from "next/image";
import { getNewsList } from "@/app/_libs/microcms";
import { TOP_NEWS_LIMIT } from "@/app/_constants";
import NewsList from "@/app/_components/NewsList";
import ButtonLink from "@/app/_components/ButtonLink";
import ScrollToTop from "@/app/_components/ScrollToTop";
import SwiperComponent from "@/app/_components/SwiperComponent"; // Swiperのインポート
import Link from "next/link";

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
            <h3 className="text-9xl blur-md">
              <span className="text-transparent bg-clip-text bg-gradient-to-r to-blue-400 from-blue-900">
                SURF PHOTO
              </span>
            </h3>
            <h3 className="text-9xl blur-md mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r to-indigo-600 from-violet-400">
                D500
              </span>
            </h3>

            <SwiperComponent />

            <section className="mb-5 py-6 sm:py-8 lg:py-12">
              <NewsList news={data.contents} />
              <div>
                <ButtonLink href="/works">もっとみる</ButtonLink>
              </div>
            </section>

            <ScrollToTop />
          </main>
        </div>
      </div>
    </>
  );
}
