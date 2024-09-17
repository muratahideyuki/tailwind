import { getNewsList } from "@/app/_libs/microcms";
import NewsList from "../_components/NewsList";
import Pagination from "@/app/_components/Pagination";
import SearchField from "@/app/_components/SearchiField";
import { NEWS_LIST_LIMIT } from "@/app/_constants";
import ScrollToTop from "@/app/_components/ScrollToTop";

export default async function Page() {
  const { contents: news, totalCount } = await getNewsList({
    limit: NEWS_LIST_LIMIT,
  });
  return (
    <>
      <h3 className="text-8xl md:text-9xl blur-md mb-6 ">WORKS</h3>

      <div className="mb-5">
        <SearchField />
      </div>
      <NewsList news={news} />
      <Pagination totalCount={totalCount} />
      <ScrollToTop />
    </>
  );
}
