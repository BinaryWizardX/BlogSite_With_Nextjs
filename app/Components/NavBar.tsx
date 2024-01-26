import React from 'react'
import Link from 'next/link'
import { FaBeer,FaGithub,FaTwitter } from "react-icons/fa";
import { FiYoutube } from "react-icons/fi";
import { FaSquareFacebook } from "react-icons/fa6";

type Props = {}

export default function NavBar({}: Props) {
  return (
    <nav className='bg-slate-500 sticky top-0'>
        <section className=' sm:flex sm:flex-row sm:justify-between max-w-2xl  bg-slate-500 mx-auto p-4 text-white flex flex-col justify-center items-center gap-2'>
            <h1 className='text-2xl'>Harshana Prabhath</h1>

            <div className='flex gap-5 text-2xl sm:text-3xl'>
            <Link href='https://www.youtube.com/channel/UC8KzgKtq03A7_in9Jw3GPzg'target='_blank'>
                <FiYoutube/>
            </Link>

            <Link href='https://web.facebook.com/harshana.psemasinghe/'target='_blank'>
                <FaSquareFacebook/>

            </Link>

            <Link href='https://github.com/BinaryWizardX'target='_blank'>
                <FaGithub/>

            </Link>


            <Link href='https://twitter.com/HarshanaSe86762'target='_blank'>
                 <FaTwitter />

            </Link>
        </div>
        </section>
        


    </nav>
  )
}