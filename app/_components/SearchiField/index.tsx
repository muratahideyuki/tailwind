"use client";

import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense } from "react";

function SearchFieldComponent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const q = e.currentTarget.elements.namedItem("q");
    if (q instanceof HTMLInputElement) {
      const params = new URLSearchParams();
      params.set("q", q.value.trim());
      router.push(`/works/search?${params.toString()}`);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center space-x-2">
      <label className="flex items-center space-x-2">
        <Image
          src="/search.svg"
          alt="検索"
          width={16}
          height={16}
          loading="eager"
        />
        <input
          type="text"
          name="q"
          defaultValue={searchParams.get("q") ?? undefined}
          placeholder="キーワードを入力"
          className="border border-gray-300 rounded-md px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </label>
      <button
        type="submit"
        className="bg-blue-500 text-white rounded-md px-3 py-1 text-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        検索
      </button>
    </form>
  );
}

export default function SearchField() {
  return (
    <Suspense>
      <SearchFieldComponent />
    </Suspense>
  );
}
