"use client"; // クライアントコンポーネントとして宣言

import Image from "next/image";
import NewsList from "@/app/_components/NewsList";
import ButtonLink from "@/app/_components/ButtonLink";
import { News } from "@/app/_libs/microcms";
import Menu from "@/app/_components/Menu";

const data: { contents: News[] } = {
  contents: [
    {
      id: "1",
      title: "渋谷にオフィスを移転しました",
      category: {
        name: "更新情報",
      },
      publishedAt: "2023/05/19",
      createdAt: "2023/05/19",
    },
    {
      id: "2",
      title: "当社CEOが業界リーダーTOP30に選出されました",
      category: {
        name: "更新情報",
      },
      publishedAt: "2023/05/19",
      createdAt: "2023/05/19",
    },
    {
      id: "3",
      title: "テストの記事です",
      category: {
        name: "更新情報",
      },
      publishedAt: "2023/04/19",
      createdAt: "2023/04/19",
    },
  ],
};

const sliceData = data.contents.slice(0, 2);

export default function Home() {
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
              <NewsList news={sliceData} />
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
