import Image from 'next/image';

export default function Header() {
  return (
    <header className='bg-white'>
      <div className='p-2 border-b-[1px] flex items-center'>
        <Image src='/images/logo.png' alt='logo' width={100} height={100} />
        <h1 className='font-bold whitespace-nowrap'>
          {process.env.NEXT_PUBLIC_BUSINESS_NAME}
        </h1>
      </div>
    </header>
  );
}
