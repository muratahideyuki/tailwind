import Image from "next/image";

type Props = {
  title: string;
  sub: string;
};

export default function Hero({ title, sub }: Props) {
  return (
    <section className="min-h-96 relative flex flex-1 shrink-0 items-center justify-center overflow-hidden rounded-lg py-36 md:py-60 xl:py-80 mb-5">
      {/* image - start */}
      <Image
        src="/aa.jpg"
        alt="RANA PAINT"
        fill
        style={{ objectFit: "cover" }}
        className="rounded-3xl"
      />
      {/* image - end */}
    </section>
  );
}
