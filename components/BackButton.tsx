import Link from "next/link";
import { ArrowLeft } from "lucide-react";

interface BackButtonProps {
  href: string;
  label?: string;
}

export default function BackButton({
  href,
  label = "이전 페이지로 돌아가기",
}: BackButtonProps) {
  return (
    <Link
      href={href}
      className="bg-blue-500 text-white font-bold p-3 rounded inline-flex items-center"
    >
      <ArrowLeft className="h-5 w-5 mr-2" />
      {label}
    </Link>
  );
}
