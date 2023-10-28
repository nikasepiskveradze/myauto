import Image from 'next/image';
import LogoIcon from '@/public/assets/logo.svg';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white">
      <div className="sm:container sm:mx-auto py-4 mx-5">
        <Link href="/" className="inline-block">
          <Image src={LogoIcon} alt="MYAUTO" priority />
        </Link>
      </div>
    </header>
  );
}
