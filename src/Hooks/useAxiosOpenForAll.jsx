import axios from "axios"

const axiosOpenForAll = axios.create({
     baseURL : 'https://crunchy-spot-server.vercel.app'
})
const useAxiosOpenForAll = () => {
  return axiosOpenForAll;
}

export default useAxiosOpenForAll