"use client"

import useDebounce from "@/hooks/useDebounce";
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react";
import qs from "query-string";


const SearchInput = () => {
    const router = useRouter();
    const [value, setValue] = useState<string>("");

    const debouncedValue = useDebounce<string>(value, 500);

    useEffect(() => {
        if (debouncedValue !== "") {
            const query = {
                title: debouncedValue,
            };
            const url = qs.stringifyUrl({
                url: '/search',
                query: query
            });
            router.push(url);
        }
    }, [debouncedValue, router]);

    return (
        <div>SearchInput</div>
    );
};

export default SearchInput