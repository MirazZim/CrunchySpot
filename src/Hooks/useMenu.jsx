// import { useEffect, useState } from "react";

import { useQuery } from "@tanstack/react-query";
import useAxiosOpenForAll from "./useAxiosOpenForAll";

const useMenu = () => {

    const axiosOpenForAll = useAxiosOpenForAll(); // ✅ Keep only this, remove useAxiosSecure
    // const [menu, setMenu] = useState([]);
    // const [loading, setLoading] = useState(true);   
    // useEffect(() => {
    //     fetch("https://crunchy-spot-server.vercel.app/menu")
    //         .then((res) => res.json())
    //         .then((data) => {
    //             setMenu(data);
    //             setLoading(false);
    //         });
    // }, []);


   const { data: menu = [], isLoading: loading, refetch } = useQuery({
     queryKey: ['menu'],
     queryFn: async () => {
       const res = await axiosOpenForAll.get('/menu');
       return res.data;
     }
   })

    return [menu, loading, refetch];
    }

export default useMenu;     