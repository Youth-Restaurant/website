import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col justify-center items-center">
      <Image
        src="/images/logo.png"
        alt="404 Not Found"
        width={400}
        height={400}
      />
      <p className="text-lg font-semibold mt-5">찾을 수 없는 페이지입니다.</p>
      <Link
        href="/"
        className="bg-blue-500 text-white font-bold p-3 rounded inline-flex items-center mt-5"
      >
        <ArrowLeft className="h-5 w-5 mr-2" />
        홈으로 돌아가기
      </Link>
    </main>
  );
}
