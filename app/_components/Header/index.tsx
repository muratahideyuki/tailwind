import Image from "next/image";
import Link from "next/link";
import Menu from "../Menu";

export default function Header() {
  return (
    <div className="container mx-auto px-3">
      <header className="flex justify-between items-center py-3 relative z-60">
        <div className="flex items-center space-x-4">
          <h1 className="text-2xl blur-sm">RANA PAINT</h1>
          <h2 className="text-2xl">RANA PAINT</h2>
        </div>
        <Menu />
      </header>
    </div>
  );
}
