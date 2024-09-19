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
                SURF ART
              </span>
            </h3>
            <h3 className="text-9xl blur-md mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r to-indigo-600 from-violet-400">
                OIL PAINT
              </span>
            </h3>

            <SwiperComponent />

            <section>
              <div className="py-6 sm:py-8 lg:py-12">
                <div className="mx-auto max-w-screen-xl px-4 md:px-8">
                  <div className="grid gap-1 md:grid-cols-2 lg:gap-12">
                    <div>
                      <div className="overflow-hidden rounded-lg md:h-auto">
                        <Image
                          src="/kabe.jpg"
                          alt="surfart"
                          className="rounded-2xl"
                          width={800}
                          height={600}
                        />
                      </div>
                    </div>

                    <div className="flex justify-center items-center md:pt-0 pt-4">
                      <h4 className="text-center text-sm sm:text-lg">
                        油絵のサーフアートを描いています
                        <br />
                        サーファーが想いを馳せる波を描いていきたいです
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-5">
              <NewsList news={data.contents} />
              <div>
                <ButtonLink href="/works">もっとみる</ButtonLink>
              </div>
            </section>

            <section>
              <p className="text-center mb-11 mt-11">
                このサイトはNEXT.JS+ヘッドレスCMS+TAILWINDで制作しました
                <br />
                WORDPRESSで制作したサイトは
                <a
                  href="https://ranapaint.rana-factory.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-700"
                >
                  こちら
                </a>
              </p>
            </section>

            <ScrollToTop />
          </main>
        </div>
      </div>
    </>
  );
}
