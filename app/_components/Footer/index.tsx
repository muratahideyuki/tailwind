import Link from "next/link";
import { FaInstagram } from "react-icons/fa"; // Instagramアイコンをインポート

export default function Footer() {
  return (
    <footer className="footer py-8 text-sm text-gray-500 bg-emerald-100">
      <div className="container mx-auto px-4">
        <div className="p-4">
          <Link href="/" className="text-black">
            RANA PAINT
          </Link>
          <ul className="mb-5 mt-5">
            <li>
              <Link href="/gallery" className="text-black  hover:text-gray-400">
                Gallery
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-black  hover:text-gray-400">
                Contact
              </Link>
            </li>
          </ul>
          <div className="flex items-center space-x-2">
            <Link
              href="https://instagram.com"
              aria-label="Instagram"
              className="text-black hover:text-gray-700"
            >
              <FaInstagram size={24} /> {/* アイコンをクリック可能に */}
            </Link>
            <span className="text-black">Follow me</span>{" "}
            {/* アイコンとテキストを分ける */}
          </div>
        </div>
      </div>

      <hr className="my-4 border-t border-gray-500" />
      <p className="text-center text-sm text-gray-500">
        © RANA PAINT All Rights Reserved.
      </p>
    </footer>
  );
}
