import Image from "next/image";

type Props = {
  data: string;
};

export default function Data({ data }: Props) {
  return <span>{data}</span>;
}
