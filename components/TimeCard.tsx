import { TailwindBgColor } from "@/types/color";

type TimeCardProps = {
  title: string;
  time: string;
  bgColor: TailwindBgColor;
};
export default function TimeCard({ title, time, bgColor }: TimeCardProps) {
  return (
    <div className="flex rounded-sm shadow flex-1">
      <div className="bg-white px-3 py-5">{title}</div>
      <div
        className={`${bgColor} text-white flex-1 font-semibold flex items-center p-5`}
      >
        {time}
      </div>
    </div>
  );
}
