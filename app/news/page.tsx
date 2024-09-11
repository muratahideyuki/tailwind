import { getNewsList } from "@/app/_libs/microcms";
import NewsList from "../_components/NewsList";
import Pagination from "@/app/_components/Pagination";
import { NEWS_LIST_LIMIT } from "@/app/_constants";

export default async function Page() {
  const { contents: news, totalCount } = await getNewsList({
    limit: NEWS_LIST_LIMIT,
  });
  return (
    <>
      <h3 className="text-9xl blur-md mb-6">GALLERY</h3>

      <NewsList news={news} />
      <Pagination totalCount={totalCount} />
    </>
  );
}
