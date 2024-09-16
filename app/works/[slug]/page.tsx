import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getNewsDetail } from "@/app/_libs/microcms";
import Article from "@/app/_components/Article";
import ButtonLink from "@/app/_components/ButtonLink";

type Props = {
  params: {
    slug: string;
  };
  searchParams: {
    dk?: string;
  };
};

export async function generateMetadata({
  params,
  searchParams,
}: Props): Promise<Metadata> {
  const data = await getNewsDetail(params.slug, {
    draftKey: searchParams.dk,
  });
  return {
    title: data.title,
    description: data.description,
    openGraph: {
      title: data.title,
      description: data.description,
      images: [data.thumbnail?.url ?? ""],
    },
  };
}

export default async function Page({ params, searchParams }: Props) {
  const data = await getNewsDetail(params.slug, {
    draftKey: searchParams.dk,
  }).catch(notFound);
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
