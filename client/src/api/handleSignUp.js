import { useDispatch } from "react-redux"
import { loginUser } from "../redux/features/userSlice"

const handleSignUp=async(dispatch,e,email,password,fullname,setIsLoading)=>{
    e.preventDefault()
    setIsLoading(true)
    setTimeout(()=>{
        setIsLoading(false)
        dispatch(loginUser(
            {
                email:email,
                fullname:fullname,
                favourites:[]
            }
        ))
    },2000)
}
export default handleSignUp