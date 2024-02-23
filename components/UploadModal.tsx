"use client"
import uniqid from "uniqid";
import { FieldValues,useForm,SubmitHandler} from "react-hook-form";
import Modal from "./Modal";
import useUploadModal from "@/hooks/useUploadModal"
import Input from "./Input";
import Button from "./Button";
import { useState } from "react"; 
import toast from "react-hot-toast";
import {useUser} from "@/hooks/userUser"


const  UploadModal = () =>{
    const [isLoading, setIsLoading] = useState(false);
    const uploadModal = useUploadModal();
    const {user} = useUser();


    const {
      register,
      handleSubmit,
      reset
    } = useForm<FieldValues>({
      defaultValues:{
        auth:'',
        title:'',
        song:null,
        image: null
        },
    })

    const onChange = (open: boolean) => {
        if(!open){
            reset();
            uploadModal.onClose();
        }
    }

    const onSubmit : SubmitHandler<FieldValues> = async (value) => {
      try{
        setIsLoading(true) 
        
        const imageFile = value.image?.[0];
        const songFile = value.song?.[0];

        if(!imageFile || !songFile || user){
          toast.error("Missing fields")
          return
        }
          


      } catch (error) {
        toast.error("Something went wrong")
      }
      finally {
        setIsLoading(false);
      }

    }
  return (
    
    <Modal
    title="Add a Song"
    description="Upload an mp3 file"
    isOpen = {uploadModal.isOpen}
    onChange={onChange}
    >
       <form 
        onSubmit={handleSubmit(onSubmit)} 
        className="flex flex-col gap-y-4 "
       >
       <Input 
       id="title"
       disabled={isLoading}
       {...register('title', {required: true})}
       placeholder="Song title"
       />

       <Input 
       id="author"
       disabled={isLoading}
       {...register('author', {required: true})}
       placeholder="Song author"
       />

       <div>
          <div  className="pb-1">
            Select a song file
          </div>
          <Input 
          id="song"
          type="file"
          disabled={isLoading}
          accept=".mp3"
          {...register('song', {required: true})}
          />
       </div>

       <div>
          <div  className="pb-1">
            Select an image 
          </div>
          <Input 
          id="image"
          type="file"
          disabled={isLoading}
          accept="image/*"
          {...register('image', {required: true})}
          />
       </div>
       <Button  disabled={isLoading} type="submit">
         create
       </Button>

       </form>
    </Modal>
  )
}

export default UploadModal