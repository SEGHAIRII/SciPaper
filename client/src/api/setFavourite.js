const setFavourite=async(e,setIsFavourite)=>{
    e.preventDefault()
    setTimeout(()=>{
        setIsFavourite(prev=>!prev)
    },500)
}
export default setFavourite