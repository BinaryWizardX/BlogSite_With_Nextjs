import React from 'react'
import { getSortedPostsData } from '@/lib/posts'
import Link from 'next/link';
import ListItems from './ListItems';

export default  function Posts() {

    const posts = getSortedPostsData();
   
  return (
    <section className='mt-8 p-4 dark:text-white text-xl text-slate-600'>
        <h2>My Blog Posts</h2>
        <ul className='mt-3'>
            {posts.map((post)=>(
                
                <ListItems key={post.id} post={post}/>
                
            ))}
        </ul>

    </section>
  )
}
