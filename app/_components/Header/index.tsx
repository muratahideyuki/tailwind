import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <div>
      <h3>headlogo</h3>
      <nav>
        <ul>
          <li>
            <Link href="/gallery">ぎゃら</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
