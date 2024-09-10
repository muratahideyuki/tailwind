import Image from "next/image";
import Link from "next/link";
import Menu from "../Menu";

export default function Header() {
  return (
    <div className="container mx-auto px-3">
      <header className="flex justify-between items-center py-3 relative z-60">
        <div className="flex items-center space-x-4">
          <Link href="/">
            <h1 className="text-3xl blur-sm">RANA PAINT</h1>
          </Link>
        </div>
        <Menu />
      </header>
    </div>
  );
}
