import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import Link from "next/link";

// 음식 메뉴 데이터 배열
const foodMenu = [
  {
    id: "basic-lunchbox",
    name: "기본 도시락 세트",
    price: "10,000원",
    description: "신선한 재료로 만든 기본 도시락 세트입니다.",
  },
  {
    id: "homemade-meal",
    name: "집밥",
    price: "10,000원",
    description: "가정식 느낌을 살린 정성 가득한 집밥 메뉴입니다.",
  },
  {
    id: "premium-lunchbox",
    name: "프리미엄 도시락 세트",
    price: "15,000원",
    description: "다양한 요리와 고급 재료로 구성된 도시락 세트입니다.",
  },
  {
    id: "boiled-pork",
    name: "보쌈 세트",
    price: "15,000원",
    description: "부드럽고 맛있는 보쌈과 함께하는 세트입니다.",
  },
  {
    id: "king-meal",
    name: "왕의 식사",
    price: "20,000원",
    description: "왕의 식사로 불리는 이 메뉴는 맞춤형 제공이 가능합니다.",
  },
  {
    id: "ox-bone-soup",
    name: "설렁탕 세트",
    price: "20,000원",
    description: "진한 국물의 설렁탕과 반찬으로 구성된 식사입니다.",
  },
  {
    id: "muwang-meal",
    name: "무왕의 식사",
    price: "50,000원",
    description: "프리미엄 요리로 구성된 특별한 식사 메뉴입니다.",
  },
];

export default function Food() {
  return (
    <main className="min-h-screen p-5">
      <h1 className="text-2xl font-bold mb-5">음식 메뉴</h1>
      <Accordion type="single" collapsible>
        {foodMenu.map((item) => (
          <AccordionItem key={item.id} value={item.id}>
            <AccordionTrigger>{item.name}</AccordionTrigger>
            <AccordionContent>
              <p>가격: {item.price}</p>
              <p>{item.description}</p>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
      <div className="mt-10">
        <Link href="/">홈으로 돌아가기</Link>
      </div>
    </main>
  );
}
