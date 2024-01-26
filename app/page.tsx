import Image from 'next/image'
import { Inter } from 'next/font/google'
import Posts from './Components/Posts'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className='max-w-2xl mx-auto flex justify-center flex-col text-black'>
       <p className='mx-auto dark:text-white text-2xl text-black'>
        Hellow and Welcome 👋 <span>I&apos;m <span className='font-bold'>Harshana</span></span>
       </p>
       <Posts/>
     
    </main>
  )
}
