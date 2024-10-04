import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white">
      <Link href="/" className="p-2 border-b-[1px] flex items-center gap-3">
        <Image src="/images/logo.png" alt="logo" width={60} height={60} />
        <h1 className="font-bold whitespace-nowrap">
          {process.env.NEXT_PUBLIC_BUSINESS_NAME}
        </h1>
      </Link>
    </header>
  );
}
