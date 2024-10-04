import Link from "next/link";

interface Notice {
  id: number;
  title: string;
  date: string;
  content: string;
}

export default async function NoticesPage() {
  let notices: Notice[] = [];

  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/notices`, {
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error("Failed to fetch notices");
    }
    notices = await res.json();
  } catch (error) {
    console.error("Error fetching notices:", error);
  }

  return (
    <main className="min-h-screen p-5">
      <h1 className="text-2xl font-bold mb-5">공지사항</h1>
      <ul className="divide-y divide-gray-300">
        {notices
          .sort((a, b) => b.id - a.id) // 내림차순 정렬
          .map((notice) => (
            <li key={notice.id} className="flex items-center py-4">
              <span className="w-12 text-center font-bold">{notice.id}.</span>
              <Link
                href={`/notices/${notice.id}`}
                className="flex-1 text-blue-600 underline"
              >
                {notice.title}
              </Link>
              <span className="w-32 text-right text-gray-500 tabular-nums">
                {notice.date}
              </span>
            </li>
          ))}
      </ul>
    </main>
  );
}
