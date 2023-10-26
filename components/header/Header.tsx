import Image from 'next/image';
import LogoIcon from '@/public/assets/logo.svg';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white">
      <div className="container mx-auto py-4">
        <Link href="/" className="inline-block">
          <Image src={LogoIcon} alt="MYAUTO" priority />
        </Link>
      </div>
    </header>
  );
}
