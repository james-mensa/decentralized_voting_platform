import Link from 'next/link';
import { ToggleTheme } from '@/theme/toggleTheme';
import { AppDrawer } from './AppMenu';
import { H1 } from '../model/labels-model';

const Header = () => {
  return (
    <header className="flex h-24 w-full items-center justify-between" >
      <div className="flex-[60%]">
        <Link href="/">
          <p className="text-base font-bold md:text-xl">Trust Ballot</p>
          <p className="text-xs text-gray-500">Let your vote count</p>
        </Link>
      </div>

      <div className="ml-auto flex flex-[40%] items-center justify-end gap-2 text-right">
        <ToggleTheme />
        <AppDrawer />
      </div>
    </header>
  );
};

export default Header;
