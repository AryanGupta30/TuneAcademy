import '../styles/globals.css'; // Import global CSS
import type { AppProps } from 'next/app'; // Import type definitions

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />; // Render the current page with its initial props
}

export default MyApp;