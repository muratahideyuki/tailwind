import { NEWS_LIST_LIMIT } from "@/app/_constants";
import Link from "next/link";

type Props = {
  totalCount: number;
  current?: number;
  basePath?: string;
};

export default function Pagination({
  totalCount,
  current = 1,
  basePath = "/news",
}: Props) {
  const pages = Array.from(
    { length: Math.ceil(totalCount / NEWS_LIST_LIMIT) },
    (_, i) => i + 1
  );

  return (
    <nav className="flex justify-center mt-4">
      <ul className="flex space-x-2">
        {pages.map((p) => (
          <li key={p}>
            {current !== p ? (
              <Link
                href={`${basePath}/p/${p}`}
                className="px-3 py-1 border border-gray-300 rounded hover:bg-gray-200"
              >
                {p}
              </Link>
            ) : (
              <span className="px-3 py-1 border border-gray-300 rounded bg-gray-300 text-gray-600">
                {p}
              </span>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
