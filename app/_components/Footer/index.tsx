import Link from "next/link";
import { FaInstagram } from "react-icons/fa";

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
              <Link href="/" className="text-black  hover:text-gray-400">
                Home
              </Link>
            </li>
            <li>
              <Link href="/works" className="text-black  hover:text-gray-400">
                Works
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
              href="https://www.instagram.com/ranapaint/"
              aria-label="Instagram"
              className="text-black hover:text-gray-400"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram size={24} />
            </Link>
            <span className="text-black">Follow me</span>{" "}
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
