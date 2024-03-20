'"use client'

import useAuthModal from "@/hooks/useAuthModal"
import { useUser } from "@/hooks/useUser"
import { AiOutlinePlus } from "react-icons/ai"
import { TbPlaylist } from "react-icons/tb"
import useUploadModal from "@/hooks/useUploadModal"
import MediaItem from "./MediaItem"

import { Song } from "@/types";

interface LibraryProps {
    songs : Song[]

}

const Library: React.FC<LibraryProps> = ({
    songs
  }) => {
    const authModal = useAuthModal()
    const {user} = useUser();
    const uploadModal = useUploadModal()
    const onClick = () => {

        if(!user) {
            return authModal.onOpen();
        }
      // TODO: CHECK FOR SUBSCRIPTION 
        return uploadModal.onOpen()
        
    }
    return (
        <div className="flex flex-col">
            <div className="flex items-center justify-between px-5 pt-4 ">
                <div 
                className="inline-flex items-center gap-x-2"
                >
                    <TbPlaylist className="text-neutral-400" size={26} />
                    <p
                    className="
                    text-neutral-400
                    font-medium
                    text-md
                    "
                    >
                        Your Library
                    </p>
                </div>

                <AiOutlinePlus 
                onClick={onClick}
                size={26}
                className="text-neutral-400 cursor-pointer hover:text-white transition"
                
                />

            </div>
            <div className="flex flex-col gap-y-2 mt-2 pt-3">
              {songs.map((item) => (
                <MediaItem 
                  onClick={ () => {}} 
                  key={item.id}
                  data={item}
                
                />
              ))}
            </div>
        </div>
    )
}

export default Library