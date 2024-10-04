import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

// 음식 메뉴 데이터 배열
const lunchboxMenu = [
  {
    id: "basic-lunchbox",
    name: "기본 도시락",
    price: "10,000원",
    description:
      "익산에서 가장 맛있는 품질 좋은 도시락. 나물 3가지, 김치, 밑반찬 3가지, 제육볶음, 국, 잡곡밥이 포함됩니다. 저렴하지만 건강한 식사를 하실 수 있습니다.",
    important: "10인 이상 주문 가능",
  },
  {
    id: "premium-lunchbox",
    name: "프리미엄 도시락",
    price: "15,000원~",
    description:
      "한국의 맛과 정성이 가득 담긴 프리미엄 도시락입니다. 10첩, 건강한 찬 구성과 함께 메인 요리 선택 가능 (소고기, 수육, 제육 등). 각종 행사 및 회의에 적합합니다.",
    important: "10인 이상 주문 가능",
  },
  {
    id: "buffet",
    name: "출장뷔페",
    price: "20,000원~",
    description:
      "모임과 행사에 맞춘 출장뷔페. 다양한 한식, 양식, 다과를 포함하며, 결혼 피로연, 동문회, 학회 등 각종 모임에 적합합니다.",
    important: "소규모 모임 최소 30만원 이상",
  },
];

const mealMenu = [
  {
    id: "homemade-meal",
    name: "집밥",
    price: "10,000원",
    description:
      "익산의 집밥 느낌을 살린 정성 가득한 밥상입니다. 10여 가지의 반찬과 나물, 고기, 생선, 김치 등이 포함되어 매일 다른 반찬이 제공됩니다.",
    important: "커피와 다과 추가요금 3,000원",
  },
  {
    id: "boiled-pork",
    name: "수육정식",
    price: "15,000원",
    description:
      "익산에서 가장 맛있는 수육 정식입니다. 수육 한상차림으로 풍성하고 우아한 식사를 즐길 수 있습니다.",
    important: "커피와 다과 추가요금 3,000원",
  },
  {
    id: "ox-tail-soup",
    name: "사골우거지탕",
    price: "15,000원",
    description:
      "한국의 맛과 정성이 가득 담긴 사골우거지탕. 국내산 재료로 조리되며, 따뜻하고 깊은 맛을 자랑합니다.",
    important: "커피와 다과 추가요금 3,000원",
  },
  {
    id: "king-meal",
    name: "왕의 밥상, 맞춤식사 가능",
    price: "50,000원",
    description:
      "구운 갈비, 수육, 생선 요리 등 다양한 요리로 구성된 왕의 밥상. 맞춤식사가 가능하며, 특별한 행사에 적합한 메뉴입니다.",
    important: "사전 예약 필수 4인 이상",
  },
  {
    id: "ox-bone-soup",
    name: "사골떡국정식",
    price: "20,000원",
    description:
      "사골 국물에 떡을 넣어 만든 전통적인 떡국 정식입니다. 수육, 마늘빵, 모듬 나물, 밑반찬, 김치, 다과 포함.",
    important: "사전 예약 필수 2인 이상",
  },
  {
    id: "seodong-meal",
    name: "서동밥상",
    price: "30,000원",
    description:
      "전통적인 요리들로 구성된 서동밥상. 수육, 잡채, 모듬 전, 샐러드, 모듬 나물, 생선 요리, 김치 등 다양한 메뉴로 제공됩니다.",
    important: "사전 예약 필수 4인 이상",
  },
  {
    id: "muwang-meal",
    name: "무왕밥상",
    price: "50,000원",
    description:
      "프리미엄 요리로 구성된 무왕밥상. 구운 갈비, 수육, 생선 요리, 샐러드 등 고급 요리들로 구성되며, 사전 예약이 필요합니다.",
    important: "사전 예약 필수 4인 이상",
  },
];

export default function Food() {
  return (
    <main className="min-h-screen p-5">
      <h1 className="text-2xl font-bold mb-5">음식 메뉴</h1>

      <h2 className="text-xl font-semibold mt-5 mb-3">도시락</h2>
      <Accordion type="single" collapsible>
        {lunchboxMenu.map((item) => (
          <AccordionItem key={item.id} value={item.id}>
            <AccordionTrigger>{item.name}</AccordionTrigger>
            <AccordionContent>
              <p>
                가격: <strong>{item.price}</strong>
              </p>
              <p>{item.description}</p>
              {item.important && (
                <p style={{ color: "red" }}>{item.important}</p>
              )}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <h2 className="text-xl font-semibold mt-5 mb-3">식사</h2>
      <Accordion type="single" collapsible>
        {mealMenu.map((item) => (
          <AccordionItem key={item.id} value={item.id}>
            <AccordionTrigger>{item.name}</AccordionTrigger>
            <AccordionContent>
              <p>
                가격: <strong>{item.price}</strong>
              </p>
              <p>{item.description}</p>
              {item.important && (
                <p style={{ color: "red" }}>{item.important}</p>
              )}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <div className="mt-10">
        <Link
          href="/"
          className="bg-blue-500 text-white font-bold p-3 rounded inline-flex items-center"
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          홈으로 돌아가기
        </Link>
      </div>
    </main>
  );
}
