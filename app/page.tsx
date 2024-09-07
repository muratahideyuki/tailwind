//"use client"; // クライアントコンポーネントとして宣言

import Image from "next/image";
import { getNewsList } from "@/app/_libs/microcms";
import { TOP_NEWS_LIMIT } from "@/app/_components/_constants";
import NewsList from "@/app/_components/NewsList";
import ButtonLink from "@/app/_components/ButtonLink";

export default async function Home() {
  const data = await getNewsList({
    limit: TOP_NEWS_LIMIT,
  });

  return (
    <>
      <div>
        <div className="container mx-auto px-3">
          {/* ここ以下はメインビジュアル用のコード */}
          <main>
            <section className="min-h-96 relative flex flex-1 shrink-0 items-center justify-center overflow-hidden rounded-lg py-36 md:py-60 xl:py-80 mb-5 z-1">
              {/* image - start */}
              <Image
                src="/aa.jpg"
                alt="RANA PAINT"
                fill
                style={{ objectFit: "cover" }}
                className="rounded-3xl"
              />
              {/* image - end */}
            </section>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <div className="bg-gray-200 p-4">1つ目のカラム</div>
              <div className="bg-gray-200 p-4">2つ目のカラム</div>
              <div className="bg-gray-200 p-4">3つs目のカラム</div>
            </div>

            <section className="mb-5">
              <NewsList news={data.contents} />
              <div>
                <ButtonLink href="/news">もっとみる</ButtonLink>
              </div>
            </section>
          </main>
        </div>
      </div>
    </>
  );
}
