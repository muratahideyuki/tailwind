import { notFound } from "next/navigation";
import { getNewsDetail } from "@/app/_libs/microcms";
import Article from "@/app/_components/Article";
import ButtonLink from "@/app/_components/ButtonLink";

export const revalidate = 0;

type Props = {
  params: {
    slug: string;
  };
};
export default async function Page({ params }: Props) {
  const data = await getNewsDetail(params.slug).catch(notFound);
  return (
    <>
      <Article data={data} />
      <div>
        <ButtonLink href="/news">ニュース一覧へ</ButtonLink>
      </div>
    </>
  );
}
