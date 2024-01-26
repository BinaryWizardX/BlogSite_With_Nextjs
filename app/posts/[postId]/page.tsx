import React from 'react'
import { getPostData, getSortedPostsData } from '@/lib/posts'
import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import { Html } from 'next/document'
import { FaSlash } from 'react-icons/fa'
import Link from 'next/link'
import getFormattedDate from '@/lib/getFormattedDate'


type Props = {
    params : {
        postId : string
    }
}

export async function generateMetadata({params}:Props):Promise<Metadata>{

    const posts = getSortedPostsData()
    const post = posts.find((post)=>post.id === params.postId)
    if(!post){
        return{
            title : "Not Found",
            description : "The requested page could not be found"
        }
    }
    return{
        title : post.title,
        
    }


}

export default async function post({ params }: { params: { postId: string } }) {
    const posts =   getSortedPostsData()
    
    
    const { postId } = params
    

    if (!posts.find(post => post.id === postId)) notFound()
    
    const {title,date,contentHtml} = await getPostData(postId)
    
    const pubDate = getFormattedDate(date)
   




    
    
  return (
    <main className=" text-white max-w-2xl px-6 prose prose-xl prose-slate dark:prose-invert mx-auto">
    <h1 className="text-3xl mt-4 mb-0">{title}</h1>
    <p className="mt-0">
        {pubDate}
    </p>
    <article>
        <section dangerouslySetInnerHTML={{ __html: contentHtml }} />
        <p>
            <Link href="/">← Back to home</Link>
        </p>
    </article>
</main>
  )
}
