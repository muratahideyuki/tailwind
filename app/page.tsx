"use client"; // クライアントコンポーネントとして宣言

import { useState, useRef, useEffect } from "react";
import Image from "next/image";

type News = {
  id: string;
  title: string;
  category: {
    name: string;
  };
  publishedAt: string;
  createdAt: string;
};

const data: { contents: News[] } = {
  contents: [
    {
      id: "1",
      title: "渋谷にオフィスを移転しました",
      category: {
        name: "更新情報",
      },
      publishedAt: "2023/05/19",
      createdAt: "2023/05/19",
    },
    {
      id: "2",
      title: "当社CEOが業界リーダーTOP30に選出されました",
      category: {
        name: "更新情報",
      },
      publishedAt: "2023/05/19",
      createdAt: "2023/05/19",
    },
    {
      id: "3",
      title: "テストの記事です",
      category: {
        name: "更新情報",
      },
      publishedAt: "2023/04/19",
      createdAt: "2023/04/19",
    },
  ],
};

const sliceData = data.contents.slice(0, 2);

export default function App() {
  const [openMenu, setOpenMenu] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleMenuOpen = () => {
    setOpenMenu(!openMenu);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      menuRef.current &&
      !menuRef.current.contains(event.target as Node) &&
      buttonRef.current &&
      !buttonRef.current.contains(event.target as Node)
    ) {
      setOpenMenu(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className="App">
        <div className="container mx-auto px-3">
          <header className="flex justify-between items-center py-3 relative z-20">
            <div className="flex items-center space-x-4">
              <h1 className="text-2xl blur-sm">RANA PAINT</h1>
              <h2 className="text-2xl">RANA PAINT</h2>
            </div>
            {/* humbergerbutton */}
            <button
              onClick={handleMenuOpen}
              type="button"
              className="z-30 space-y-2 relative"
              ref={buttonRef}
            >
              <div
                className={
                  openMenu
                    ? "w-8 h-0.5 bg-gray-600 translate-y-2.5 rotate-45 transition duration-500 ease-in-out"
                    : "w-8 h-0.5 bg-gray-600 transition duration-500 ease-in-out"
                }
              />
              <div
                className={
                  openMenu
                    ? "opacity-0 transition duration-500 ease-in-out"
                    : "w-8 h-0.5 bg-gray-600 transition duration-500 ease-in-out"
                }
              />
              <div
                className={
                  openMenu
                    ? "w-8 h-0.5 bg-gray-600 -rotate-45 transition duration-500 ease-in-out"
                    : "w-8 h-0.5 bg-gray-600 transition duration-500 ease-in-out"
                }
              />
            </button>

            {/* nav */}
            <nav
              ref={menuRef}
              className={
                openMenu
                  ? "text-left fixed bg-slate-50 right-0 top-0 w-8/12 h-screen flex flex-col justify-start pt-8 px-3 ease-linear duration-300 z-20"
                  : "fixed right-[-100%] ease-linear duration-300"
              }
            >
              <ul className="mt-6">//省略</ul>
            </nav>
          </header>

          {/* ここ以下はメインビジュアル用のコード */}
          <main>
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

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <div className="bg-gray-200 p-4">1つ目のカラム</div>
              <div className="bg-gray-200 p-4">2つ目のカラム</div>
              <div className="bg-gray-200 p-4">3つa目のカラム</div>
            </div>

            <section className="mb-5">
              <ul>
                {sliceData.map((article) => (
                  <li key={article.id} className="mb-4">
                    <dl>
                      <dt className="font-bold">{article.title}</dt>
                      <dd>
                        {article.category.name}
                        {article.publishedAt}
                      </dd>
                    </dl>
                  </li>
                ))}
              </ul>
            </section>
          </main>
        </div>
      </div>
    </>
  );
}
