import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render(): React.ReactElement {
    return (
      <Html lang="en">
        <Head>
          <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
        </Head>
        <body className="h-screen text-gray-700 bg-slate-200 dark:bg-gray-800 dark:text-gray-200">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
