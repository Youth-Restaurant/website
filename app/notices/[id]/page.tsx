import { notFound } from "next/navigation";
import BackButton from "@/components/BackButton";

interface Notice {
  id: number;
  title: string;
  date: string;
  content: string;
}

export default async function NoticeDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/notices`);
  if (!res.ok) {
    console.error("Failed to fetch notices:", res.status, res.statusText);
    return notFound();
  }

  const notices: Notice[] = await res.json();
  const noticeId = parseInt(params.id, 10);
  if (isNaN(noticeId)) {
    console.error("Invalid notice ID:", params.id);
    return notFound();
  }

  const notice = notices.find((n) => n.id === noticeId);

  if (!notice) {
    return notFound();
  }

  return (
    <main className="min-h-screen p-5">
      <h1 className="text-2xl font-bold mb-5">{notice.title}</h1>
      <p className="text-gray-700 mb-2">{notice.date}</p>
      <div className="mt-4 mb-10">{notice.content}</div>
      <BackButton href="/notices" label="공지사항 목록으로 돌아가기" />
    </main>
  );
}
