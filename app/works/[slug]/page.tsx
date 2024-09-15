import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getNewsDetail } from "@/app/_libs/microcms";
import Article from "@/app/_components/Article";
import ButtonLink from "@/app/_components/ButtonLink";

type Props = {
  params: {
    slug: string;
  };
};

export default async function Page({ params }: Props) {
  const data = await getNewsDetail(params.slug).catch(notFound);
  return (
    <>
      <div className="mb-4">
        <Article data={data} />
      </div>
      <div className="mb-5">
        <ButtonLink href="/works">Works一覧</ButtonLink>
      </div>
    </>
  );
}
