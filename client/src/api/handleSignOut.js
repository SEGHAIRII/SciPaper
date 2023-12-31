import { logoutUser } from "../redux/features/userSlice"

const handleSignOut=async(e,dispatch)=>{
    e.preventDefault()
    setTimeout(()=>{
        dispatch(logoutUser())
    },1000)
}
export default handleSignOut