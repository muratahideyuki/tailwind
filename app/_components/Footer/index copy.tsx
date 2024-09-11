import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer py-8 text-sm text-gray-500 bg-emerald-100">
      <div className="container mx-auto px-4 md:flex md:justify-between">
        <Link href="/" className="mb-4">
          <p>RANA PAINT</p>
        </Link>
        <ul className=" flex flex-wrap mb-8 space-x-4">
          <li>
            <Link href="/gallery" className="text-gray-400 hover:text-black">
              <p>Gallery</p>
            </Link>
          </li>
          <li>
            <Link href="/contact" className="text-gray-400 hover:text-black">
              <p>Contact</p>
            </Link>
          </li>
        </ul>
      </div>
      <hr className="my-4 border-t border-gray-500" />
      <p className="text-center text-sm text-gray-500">
        © RANA PAINT All Rights Reserved.
      </p>
    </footer>
  );
}
