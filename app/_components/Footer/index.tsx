import Link from "next/link";

export default function Footer() {
  return (
    <div className="container mx-auto px-3">
      <footer>
        <nav>
          <ul>
            <li>
              <Link href="/news">ニュース</Link>
            </li>
          </ul>
        </nav>
        <p>(c)RANA PAINT</p>
      </footer>
    </div>
  );
}
