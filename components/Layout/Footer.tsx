import Link from 'next/link';

const Footer: React.FC = () => (
  <footer className="flex items-center justify-between px-8 py-3">
    <div>Logo</div>
    <nav className="flex items-center space-x-2">
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
  </footer>
);

export default Footer;
