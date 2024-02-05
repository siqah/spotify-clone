"use client";

import { usePathname } from "next/navigation";
import { useMemo } from "react";
import { BiHome, BiSearch } from "react-icons/bi";
import Box from "./Box";
import SidebarItem from "./SidebarItem";
import Library from "./Library";

interface SidebarProps {
    children:React.ReactNode;
}



const Sidebar: React.FC<SidebarProps> = ({
    children
}) => {
    const pathname = usePathname();

    const routes =useMemo(() => [
        {  icon: BiHome,
           label: 'Home',
           active: pathname !== '/search',
           href: '/'
        },

        {   icon:BiSearch,
            label: 'Search',
            active: pathname === '/search',
            href: '/search'
        },
    ], [pathname]);
    return(
       <div className="flex h-full">
         <div className="
         hideen
         md:flex
         flex-col
         gap-y-2
         bg-black
         h-full
         w-[300px]
         p-2">
            <Box>
                <div className="
                flex
                flex-col
                gap-y
                px-5
                py-4
                 " >
                {routes.map((item) => (
                    <SidebarItem
                    key={item.label} 
                    {...item}
                    />
                ))}
                </div>
            </Box>

            <Box className="overflow-y-auto h-full">
                <Library/>
            </Box>
         </div>
           <main className="h-full flex-1 overflow-auto py-2">
                {children}
           </main>
       </div>
    );
}

export default Sidebar