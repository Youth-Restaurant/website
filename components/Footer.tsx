export default function Footer() {
  return (
    <footer className='pb-32 pt-4 bg-neutral-100'>
      <div className='px-3'>
        <h1 className='font-bold'>사업자 정보</h1>
        <p className='text-sm pb-3'>
          {process.env.NEXT_PUBLIC_BUSINESS_NAME} | 대표자 :{' '}
          {process.env.NEXT_PUBLIC_OWNER} | 주소 :{' '}
          {process.env.NEXT_PUBLIC_ADDRESS} | 전화 :{' '}
          {process.env.NEXT_PUBLIC_PHONE} | 사업자등록번호 :{' '}
          {process.env.NEXT_PUBLIC_BUSINESS_NUMBER}
        </p>
        <p className='text-sm'>
          ©2024 {process.env.NEXT_PUBLIC_BUSINESS_NAME} All rights reserved
        </p>
      </div>
    </footer>
  );
}
