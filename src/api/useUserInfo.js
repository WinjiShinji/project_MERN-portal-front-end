import SiteContext from "../context/SiteContext"
import { axiosPrivate as axios } from "../utility/axiosConfig"
import { useContext, useEffect } from "react"


const useUserInfo = () => {
  const { dispatch } = useContext(SiteContext)

  useEffect(() => {
    const controller = new AbortController()
    const signal = controller.signal

    const getUserInfo = async () => {
      try {
        const res = await axios
          .get('/account', { signal })
          .then(function (res) {
            return res
          })
          .catch(function (err) {
            console.error(err)
            return controller.abort()
          })
        dispatch({ type: 'userInfo', payload: res.data.data})
      } catch (err) {
        console.error(err)
      }
    }
    getUserInfo()
  },[dispatch])
  
}

export default useUserInfo