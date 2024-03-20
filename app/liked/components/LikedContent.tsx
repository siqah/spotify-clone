"use client"
import { Song } from "@/types";
import { useUser } from "@/hooks/useUser";
import { useRouter } from "next/router";
import { useEffect } from "react";

interface LikedContentProps {
    songs: Song[];
}

const LikedContent:React.FC<LikedContentProps> = (
    {
     songs   
    }
) => {
    const router = useRouter();
    const {isLoading, user} = useUser();

    useEffect(()=>{
        if(!isLoading && !user){
            router.replace('/')
    },[isLoading, user, router])
    return ( 
    <div>Liked</div> 
    );
}
 
export default LikedContent;