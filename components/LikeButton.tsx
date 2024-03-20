"use client"
import useAuthModal from "@/hooks/useAuthModal";
import { useSessionContext, } from "@supabase/auth-helpers-react";

import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";

import { useUser } from "@/hooks/useUser";
import { AiFillHeart,AiOutlineHeart } from "react-icons/ai";
import { toast } from "react-hot-toast";



interface LikeButtonProps {
    songId: string;
}


const LikeButton:React.FC<LikeButtonProps> = ({
    songId
}) => {
    const router = useRouter();
    const {supabaseClient} = useSessionContext();

    const authMOdal = useAuthModal();
    const {user} = useUser();

    const [isLiked, setIsLiked] = useState(false);

    useEffect(() => {
    if(!user?.id){
        return;
    }

    const fetchData = async () => {
        const {data, error} = await supabaseClient
        .from('liked_songs')
        .select('id')
        .eq('song_id', songId)
        .eq('user_id', user.id)
        .single();
        if(!error && data){
            setIsLiked(true);
        }
    };
    fetchData();
    },[songId, supabaseClient ,user?.id])

    const Icon = isLiked ? AiFillHeart : AiOutlineHeart;

     const handleLike = async () => {
        if(!user){
        return authMOdal.onOpen();
        }

        if (isLiked) {
            const { error } = await supabaseClient
                .from('liked_songs')
                .delete()
                .eq('song_id', songId)
                .eq('user_id', user.id);

            if (error) {
                toast.error(error.message);
            } else {
                setIsLiked(false);
            }
        }else {
            const { error } = await supabaseClient
                .from('liked_songs')
                .insert({ 
                    song_id: songId, 
                    user_id: user.id });

            if (error) {
                toast.error(error.message);
            } else {
                setIsLiked(true);
                toast.success('Song liked');
            }
        }

        router.refresh();
     }
  return (
    <button 
    onClick={handleLike}
    className="
    hover:opacity-75
    transition
    "
    > 
        <Icon color={isLiked ? '#22c55e' : 'white'} size={25}/>
    </button>
  )
}

export default LikeButton