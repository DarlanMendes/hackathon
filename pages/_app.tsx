import '@/styles/globals.css'
import { SessionProvider } from "next-auth/react"
import type { AppProps } from 'next/app'
import { ThemeProvider } from '../context/theme';

export default function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return <SessionProvider session={session}>
    <ThemeProvider>
    <Component {...pageProps} />
    </ThemeProvider>
  </SessionProvider>

}
