"use client";
import Modal from "./Modal";


import { useRouter } from "next/navigation";
import { useSessionContext, useSupabaseClient } from "@supabase/auth-helpers-react";
import {Auth} from "@supabase/auth-ui-react";

const AuthModal = () => {
    const SupabaseClient = useSupabaseClient();
    const router = useRouter(); 
    const {session} = useSessionContext(); 
     return(
       <Modal
        title="welcome back"
        description="Login to your account"
        isOpen
        onChange={() => {}}
       >
        <Auth
        supaaseClient={SupabaseClient}
         />

       </Modal>
    )
}

export default AuthModal;