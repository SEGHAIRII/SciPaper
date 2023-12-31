import { useDispatch } from "react-redux"
import { loginUser } from "../redux/features/userSlice"

const handleSignIn=async(dispatch,e,email,password,setIsLoading)=>{
    e.preventDefault()
    setIsLoading(true)
    setTimeout(()=>{
        setIsLoading(false)
        dispatch(loginUser(
            {
                email:email,
                fullname:'Amor Mohamed',
                favourites:[]
            }
        ))
    },2000)
}
export default handleSignIn