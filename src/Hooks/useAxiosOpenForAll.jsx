import axios from "axios"

const axiosOpenForAll = axios.create({
     baseURL : 'http://localhost:3000'
})
const useAxiosOpenForAll = () => {
  return axiosOpenForAll;
}

export default useAxiosOpenForAll