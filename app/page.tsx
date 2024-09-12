import Image from "next/image";

export default function Home() {
  return (
    <>
        <footer className="absolute bottom-0">
          <ul className="flex gap-2">
            <li>소개</li>
            <li>예약</li>
            <li>공지</li>
            <li>오시는 길</li>
          </ul>
        </footer>
    </>
  );
}
