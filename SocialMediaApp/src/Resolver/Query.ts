import { Context } from "..";

export const Query = {
    posts: (_: any,__:any,{prisma}:Context)=>{
        return  prisma.posts.findMany({
            orderBy:[
                {
                    createdAt: "desc"
                },
            ]
        });
    } 
};