import Link from "next/link";
import Image from "next/image";
import type { News } from "@/app/_libs/microcms";
import Date from "../Date";
import Category from "../Category";
import ScrollToTop from "@/app/_components/ScrollToTop";

type Props = {
  data: News;
};

export default function Article({ data }: Props) {
  return (
    <main>
      <h1 className="text-xl">
        <span className="blur-sm mr-3">●</span>
        {data.title}
      </h1>
      {/*
      <p>{data.description}</p>
      */}
      <div className="mb-4">
        <span className="blur-sm mr-3">●</span>
        <Link href={`/works/category/${data.category.id}`}>
          <Category category={data.category} />
        </Link>
        <br />
        <span className="blur-sm mr-3">●</span>
        <Date date={data.publishedAt ?? data.createdAt} />
      </div>
      {data.thumbnail && (
        <Image
          src={data.thumbnail.url}
          alt=""
          width={data.thumbnail.width}
          height={data.thumbnail.height}
          className="mb-4"
        />
      )}
      <div
        dangerouslySetInnerHTML={{
          __html: data.content,
        }}
      />
      <ScrollToTop />
    </main>
  );
}
