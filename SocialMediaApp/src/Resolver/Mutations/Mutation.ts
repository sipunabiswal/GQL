import { Posts, Prisma } from "@prisma/client"
import {Context} from "../../index"

interface PostCreateArgs {
    posts:{
    title?: string
    content?: string
    }
} 

interface PostPayloadType {
    userErrors: 
        {
            field: string
            message: string
        }[]
    posts: Posts| Prisma.Prisma__PostsClient<Posts>| null
}

export const Mutation = {
    postsCreate: async (_:any ,{ posts }: PostCreateArgs,{ prisma }:Context ): Promise<PostPayloadType> => {
        const {title,content} = posts
        if(!title || !content){
            return {
                userErrors : [
                    {
                        field: "title and contents",
                        message: "title and contents are required."
                    }
                ],
                posts: null
            }
        }

        return {
            userErrors: [],
            posts: await prisma.posts.create({
                data:{
                    title,
                    content,
                    authorId: 1
                }
            })
        }        
    }, 
    postsUpdate: async(_:any, {postId, posts}:{postId: string, posts: PostCreateArgs["posts"]}, {prisma}:Context )=>{
        const{title, content} = posts
        if(!title || !content){
            return {
                userErrors : [
                    {
                        field: "title and contents",
                        message: "title and contents are required."
                    }
                ],
                posts: null
            }
        }
        

    },
    
}  