import { Transition } from '@headlessui/react';
import Link from 'next/link';
import { useState } from 'react';
import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher';
import { GrMenu } from 'react-icons/gr';
const Header: React.FC = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };
  const toggleClass = toggle ? ' flex ' : ' hidden ';
  return (
    <header className="bg-slate-100 dark:bg-slate-700 ">
      <div className="flex justify-between px-4 py-3">
        <div>Logo</div>
        {/* Desktop Menu */}
        <nav className="items-center hidden space-x-2 sm:flex">
          <ThemeSwitcher />
          <ul className="flex space-x-4">
            <li>
              <Link href="#">MENU 1</Link>
            </li>
            <li>
              <Link href="#">MENU 2</Link>
            </li>
            <li>
              <Link href="#">MENU 3</Link>
            </li>
          </ul>
        </nav>
        {/* Mobile Menu */}
        <div className="flex items-center space-x-2 sm:hidden trans">
          <ThemeSwitcher />
          <GrMenu type="button" onClick={handleToggle} className="h-6" />
        </div>
      </div>

      <Transition
        show={toggle}
        enter="transform transition duration-[400ms]"
        enterFrom="opacity-0 -translate-y-48"
        enterTo="opacity-100  translate-y-0"
      >
        <nav
          className={`${toggleClass} flex-col items-center py-4 bg-gray-300 sm:hidden`}
        >
          <ul className="flex flex-col space-y-1 ">
            <li>
              <Link href="#">MENU 1</Link>
            </li>
            <li>
              <Link href="#">MENU 2</Link>
            </li>
            <li>
              <Link href="#">MENU 3</Link>
            </li>
          </ul>
        </nav>
      </Transition>
    </header>
  );
};

export default Header;
