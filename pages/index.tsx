import type { NextPage } from 'next'
import Layout from '@/components/Layout';

const HomePage: NextPage = () => {
  return (
    <Layout>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </Layout>
  );
};

export default HomePage;
