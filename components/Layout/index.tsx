import Footer from './Footer';
import Header from './Header';

type Props = {
  children: React.ReactNode;
  // eslint-disable-next-line react/no-unused-prop-types
  pageTitle?: string;
};

const Layout: React.FC<Props> = ({ children }: Props) => (
  <div className="flex flex-col items-stretch h-screen">
    <Header />
    <main className="flex-1">{children}</main>
    <Footer />
  </div>
);

export default Layout;
