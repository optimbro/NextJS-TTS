/* eslint-disable react/jsx-props-no-spreading */
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }: AppProps) => (
  <ThemeProvider enableSystem attribute="class">
    <Component {...pageProps} />
  </ThemeProvider>
);

export default MyApp;
