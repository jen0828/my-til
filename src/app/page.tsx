
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <h1 className="bg-gray-500 text-3xl font-bold underline">
    Hello world!
  </h1>
  )
}
