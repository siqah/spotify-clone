import { UserDEtails } from "@/types";
import { User } from "@supabase/auth-helpers-nextjs";
import { createContext } from "react";
import { Subscription } from "@supabase/gotrue-js";

type UserContextType = {
    accessToken: string | null;
    user: User | null;
    userDetails: UserDEtails | null;
    isLoading: boolean;
    subscription: Subscription | null;
};

export const UserContext = createContext <UserContextType | undefined>(
    undefined
)

export interface Props {
    [propName: string]: any;
}

