import { NextResponse } from "next/server";

export async function GET() {
  const notices = [
    {
      id: 5,
      title: "서비스 점검 안내",
      date: "2024/10/04",
      content: "서비스 점검이 예정되어 있습니다.",
    },
    {
      id: 4,
      title: "신규 메뉴 출시",
      date: "2024/10/01",
      content: "신규 메뉴가 추가되었습니다.",
    },
    {
      id: 3,
      title: "추석 연휴 운영 안내",
      date: "2024/09/20",
      content: "추석 연휴 기간 동안의 운영 시간을 안내드립니다.",
    },
    {
      id: 2,
      title: "고객 감사 이벤트",
      date: "2024/09/10",
      content: "고객 감사 이벤트가 시작됩니다.",
    },
    {
      id: 1,
      title: "오픈 기념 할인",
      date: "2024/09/01",
      content: "오픈을 기념하여 특별 할인을 진행합니다.",
    },
  ];
  return NextResponse.json(notices);
}
