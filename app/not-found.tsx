import Image from "next/image";

export default function NotFound() {
  return (
    <div className="container mx-auto px-3">
      <main>
        <h3 className="text-9xl blur-md mb-4">NOT FOUND</h3>

        <section className="relative flex flex-1 shrink-0 items-center justify-center overflow-hidden py-10 md:py-60 xl:py-80 mb-10 z-1 min-h-[200px] md:min-h-[500px]">
          <Image
            src="/aa.jpg"
            alt="RANA PAINT"
            fill
            style={{ objectFit: "cover" }}
            className="rounded-2xl"
          />
        </section>

        <p className=" h-[200px]">sorry .... not found</p>
      </main>
    </div>
  );
}
