import Image from "next/image";
import Category from "../Category";
import Date from "../Date";
import { News } from "@/app/_libs/microcms";
import Link from "next/link";

type Props = {
  news: News[];
};

export default function NewsList({ news }: Props) {
  if (news.length === 0) {
    return <p>記事がない</p>;
  }
  return (
    <ul className="grid grid-cols-1 gap-5 md:grid-cols-3">
      {news.map((article) => (
        <li key={article.id} className="">
          <Link href={`/news/${article.id}`}>
            {article.thumbnail ? (
              <Image
                src={article.thumbnail.url}
                alt=""
                width={article.thumbnail.width}
                height={article.thumbnail.height}
              />
            ) : (
              <Image
                src="/no-image.jpg"
                alt="no"
                width={400}
                height={300}
                className="w-full h-auto"
              />
            )}
            <dl>
              <dt>{article.title}</dt>
              <dd>
                <Category category={article.category} />
                <Date date={article.publishedAt ?? article.createdAt} />
              </dd>
            </dl>
          </Link>
        </li>
      ))}
    </ul>
  );
}
