import React, { useState } from 'react'
import logo from '/logo.svg'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import LogoAnimation from '../components/LogoAnimation'
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useDispatch, useSelector } from 'react-redux';
import handleSignOut from '../api/handleSignOut'
import SearchIcon from '@mui/icons-material/Search';

const SearchPage = () => {
  const [search,setSearch]=useState('')
  const colorsWhite=['#ffffff','#ffffff','#BDBDBD','#ffffff','#ffffff']
  const user =useSelector(state=>state.data.user.user)
  const dispatch=useDispatch()
  return (
    <div className=' font-br-hendrix h-screen w-full bg-gradient-to-tr from-[#F1BBBB] to-[#F1D6BB] flex items-center justify-center'>
        <motion.div transition={{duration:0.5}} initial={{scale:0.5}} animate={{scale:1}} className='relative h-[90%] md:h-[85%] w-[90%] bg-gradient-to-tr from-light-purple via-main-purple to-secondary-purple flex flex-col items-center justify-between'>
          <img src={logo} alt="" className=' absolute inset-0 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[80%] opacity-30  ' />
          <nav className='w-full z-10 flex md:flex-row flex-col-reverse justify-between items-center p-4'>
            <div className='flex md:scale-100 scale-150 items-center md:mt-0 mt-12'>
              <LogoAnimation colors={colorsWhite}/>
              <p className={`text-white font-bold text-lg md:text-2xl duration-1000`}>SciPaper</p>
            </div>
            <div className='flex items-center space-x-4 mt-4 md:mt-0 md:mr-4'>
              <Link>
              <motion.div initial={{color:'#ffffff'}} whileHover={{scale: 1.2,color:'#F1BBBB'}} whileTap={{ scale: 0.9 }}>
                <FavoriteIcon style={{fontSize:32}}/>
              </motion.div>
              </Link>
              <Link>
                <motion.h4 className='hover:text-main-pink underline text-white font-semibold duration-300'>{user.fullname}</motion.h4>
              </Link>
              <Link onClick={(e)=>handleSignOut(e,dispatch)} className={`bg-transparent text-white font-semibold outline outline-2 hover:outline-main-pink hover:text-main-pink outline-white px-4 py-2 rounded-full duration-300`}>
                <p >
                  Logout
                </p>
              </Link>
            </div>
          </nav>
          <div className='md:w-[70%] w-[85%] md:space-x-8 z-10 flex-1 flex md:flex-row flex-col items-center justify-center space-y-4 md:space-y-0 md:justify-between'>
            <div className=' md:flex-1 w-full md:w-auto bg-white rounded-full flex items-center justify-between space-x-4 px-4 md:px-8'>
                <input required name='search' value={search} onChange={(e)=>setSearch(e.target.value)} placeholder='Search' type="text" className=' text-lg py-3 md:py-4 font-medium bg-transparent outline-none flex-1' />
                <SearchIcon style={{color:'#352F44',fontSize:30}}/>
            </div>
            <motion.button initial={{scale:1}} whileHover={{scale:1.01}} whileTap={{scale:0.95}} className=' bg-white font-bold text-sm md:text-base rounded-full py-3 md:py-4 text-dark-purple hover:text-light-purple hover:bg-main-pink uppercase px-8 flex items-center justify-center duration-300'>
              <p>Look up</p>
            </motion.button>
          </div>
        </motion.div>
    </div>
  )
}

export default SearchPage