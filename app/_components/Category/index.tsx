import type { category } from "@/app/_libs/microcms";

type Props = {
  category: Category;
};
export default function Category({ category }: Props) {
  return <span>{category.name}</span>;
}
