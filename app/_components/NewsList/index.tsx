import Image from "next/image";
import Category from "../Category";
import Data from "../Data";
import { News } from "@/app/_libs/microcms";

type Props = {
  news: News[];
};

export default function NewsList({ news }: Props) {
  if (news.length === 0) {
    return <p>記事がない</p>;
  }
  return (
    <ul>
      {news.map((article) => (
        <li key={article.id}>
          <div>
            <Image src="/aa.jpg" alt="no" width={200} height={100} />
            <dl>
              <dt>{article.title}</dt>
              <dd>
                <Category category={article.category} />
                <Data data={article.publishedAt ?? article.createdAt} />
              </dd>
            </dl>
          </div>
        </li>
      ))}
    </ul>
  );
}
