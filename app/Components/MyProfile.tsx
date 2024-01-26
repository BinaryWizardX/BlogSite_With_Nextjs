import React from 'react'
import Image from 'next/image'

type Props = {}

export default function MyProfile({}: Props) {
  return (
    <section className='max-w-2xl mx-auto p-4 flex justify-center'>
       <Image
       className='border-4 rounded-full dark:border-slate-400'
       src='/images/MyPhoto.jpg'
       height={200}
       width={200}
       alt='My Profile Photo'
       priority = {true}
       />

    </section>
  )
}