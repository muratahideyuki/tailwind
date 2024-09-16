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
            <section className="relative flex flex-1 shrink-0 items-center justify-center overflow-hidden py-10 md:py-60 xl:py-80 mb-10 z-1 min-h-[200px] md:min-h-[500px]">
              <Image
                src="/orange_big.jpg"
                alt="RANA PAINT"
                fill
                style={{ objectFit: "cover" }}
                className="rounded-2xl"
              />
            </section>

            <section>
              <div className="bg-white py-6 sm:py-8 lg:py-12">
                <div className="mx-auto max-w-screen-xl px-4 md:px-8">
                  <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
                    <div>
                      <div className="h-64 overflow-hidden rounded-lg bg-gray-100 md:h-auto">
                        <Image
                          src="/kabe.jpg"
                          alt="surfart"
                          className="rounded-2xl"
                          width={800}
                          height={600}
                        />
                      </div>
                    </div>

                    <div className="flex justify-center items-center md:pt-0">
                      <h4 className="text-center text-lg sm:text-lg">
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
            <ScrollToTop />
          </main>
        </div>
      </div>
    </>
  );
}
