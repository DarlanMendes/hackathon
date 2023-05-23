
import { Inter } from 'next/font/google'
import SignUp from './signup'
import Header from '@/components/Header'
import User from './user'
import Overview from '@/components/Overview'
import HomePage from './homepage'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <HomePage/>
    </main>
  )
}
