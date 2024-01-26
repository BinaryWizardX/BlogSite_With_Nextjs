import Image from 'next/image'
import { Inter } from 'next/font/google'
import Posts from './Components/Posts'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className='max-w-2xl mx-auto flex justify-center flex-col '>
       <p className='mx-auto text-white text-2xl'>
        Hellow and Welcome 👋 <span>I'm <span className='font-bold'>Harshana</span></span>
       </p>
       <Posts/>
     
    </main>
  )
}
