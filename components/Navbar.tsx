import { Bell, CookingPot, House, Map, MessageCircle } from 'lucide-react';
import Link from 'next/link';

export default function Navbar() {
  const icons = [
    { name: '소개', icon: <House />, link: '/intro' },
    { name: '음식', icon: <CookingPot />, link: '/food' },
    { name: '공지', icon: <Bell />, link: '/notice' },
    { name: 'FAQ', icon: <MessageCircle />, link: '/faq' },
    { name: '오시는 길', icon: <Map />, link: 'map' },
  ];

  return (
    <nav className='min-w-[320px] max-w-[600px] fixed bottom-0 border-t-[1px] bg-white border-t-slate-100 pt-3 w-full z-50'>
      <ul className='flex gap-2 justify-around text-xs w-full min-h-[52px]'>
        {icons.map((item) => (
          <li key={item.link}>
            <Link className='flex flex-col items-center' href={item.link}>
              <div className='flex justify-center'>{item.icon}</div>
              <span>{item.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
