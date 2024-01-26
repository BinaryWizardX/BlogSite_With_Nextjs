import React from 'react'
import Link from 'next/link'
import getFormattedDate from '@/lib/getFormattedDate'


type Props = {
    post : BlogPost
    
}

export default function ListItems({post}: Props) {

    const{id ,title,date } = post
    const formattedDate = getFormattedDate(date)
  return (
    <li className='my-5'>
        <Link className='underline' href={`/posts/${id}`}>
            {title}
        </Link>
        <p className='text-sm'>{formattedDate}</p>
        
    </li>
  )
}