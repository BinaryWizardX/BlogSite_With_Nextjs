import fs from "fs"
import path from "path"
import { cwd } from "process"
import matter from 'gray-matter'
import { remark } from "remark"
import html from 'remark-html'

const PostsDirectory = path.join(cwd(),'blogposts');


export function getSortedPostsData(){

    const fileNames = fs.readdirSync(PostsDirectory);
    const allPostData =  fileNames.map((fileName)=>{
                const id = fileName.replace(/\.md$/,'')
                const fullFilePath = path.join(PostsDirectory,fileName)
                const fileContent = fs.readFileSync(fullFilePath,'utf8')
                const matterResults = matter(fileContent);

                const BlogPost : BlogPost = {
                    id,
                    title: matterResults.data.title,
                    date : matterResults.data.date
                }
                return BlogPost;
            })
    return allPostData.sort((a,b):number=> a.date<b.date ? 1 : -1)


}

export async function getPostData(id : string){

    const filePath = path.join(PostsDirectory,`${id}.md`)
    const fileContent = fs.readFileSync(filePath,{encoding : "utf8"});

    const matterResults = matter(fileContent);

    const FormattedCotent = await remark().use(html).process(matterResults.content);

    const contentHtml = FormattedCotent.toString();
    


    const blogPostWithHtml : BlogPost & {contentHtml :string} = {
        id,
        title : matterResults.data.title,
        date : matterResults.data.date,
        contentHtml,

        

    }
    return blogPostWithHtml;

}