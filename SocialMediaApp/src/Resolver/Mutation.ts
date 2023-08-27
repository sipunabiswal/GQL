import { Posts, Prisma } from "@prisma/client"
import {Context} from "../index"

interface PostCreateArgs {
    post:{
    title: string
    content: string
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
    postsCreate: async (_:any ,{post}: PostCreateArgs,{prisma}:Context ): Promise<PostPayloadType> => {
        const {title,content} = post
        if(!title || !content){
            return {
                userErrors : [
                    {
                        field: "title and contents",
                        message: "title and contents are required."
                    }
                ],
                posts: {} as Posts
            }
        }

        return {
            userErrors : [{
                field: "success",
                message: "success"
            }],
            posts: await prisma.posts.create({
                data:{
                    title,
                    content,
                    authorId: 1
                }
            })
        }
        
    }, // end postsCreate
}  