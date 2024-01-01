import React, { useState } from 'react'
import logo from '/logo.svg'
import LogoAnimation from './LogoAnimation'
import { AnimatePresence, motion, useAnimate } from 'framer-motion'
import { Link } from 'react-router-dom'
import handleSignOut from '../api/handleSignOut'
import { useDispatch, useSelector } from 'react-redux'
import FavoriteIcon from '@mui/icons-material/Favorite';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';

const Navbar = ({search,setSearch}) => {
    const user =useSelector(state=>state.data.user.user)
    const colorsWhite=['#ffffff','#ffffff','#BDBDBD','#ffffff','#ffffff']
    const dispatch=useDispatch()
    const [showNavbar,setShowNavbar]=useState(false)
    


    const NavMenu=()=>{

      const listVariants = {
        hidden: { opacity: 0,scaleY:0 },
        visible: {
          scaleY:1,
          opacity: 1,
          x: 0,
          transition: {
            staggerChildren: 0.1,
          },
        },
        exit: { opacity: 0,scaleY:0  },
      };
      
      const listItemVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: -20 },
      };
      

      return(
        
            <motion.ul
              className=' font-br-hendrix font-semibold absolute right-0 top-16 bg-main-pink py-4 w-1/3 flex flex-col items-start justify-around rounded-2xl'
              variants={listVariants}
              initial="hidden"
              animate={showNavbar ? 'visible' : 'hidden'}
              exit="exit">
                <motion.li className=' border-b-2 border-dark-purple py-2 px-8 w-full active:bg-secondary-purple active:text-white' variants={listItemVariants}>Profile</motion.li>
                <motion.li className=' border-b-2 border-dark-purple py-2 px-8 w-full active:bg-secondary-purple active:text-white' variants={listItemVariants}>Favourites</motion.li>
                <motion.li className=' py-2 px-8 w-full active:bg-secondary-purple active:text-white' variants={listItemVariants}>Logout</motion.li>
            </motion.ul>
          
      )
    }

    

  return (
    <motion.nav transition={{duration:0.25}} initial={{y:-200}} animate={{y:0}} className='fixed z-20 bg-secondary-purple flex w-full justify-between items-center py-2 md:py-1'>
        <Link to='/' className='flex scale-75 items-center'>
          <LogoAnimation colors={colorsWhite}/>
          <p className={`text-white font-bold text-lg md:text-2xl duration-1000`}>SciPaper</p>
        </Link>
        <div className=' hidden md:flex items-center space-x-4 md:mt-0 md:mr-4'>
            <Link>
            <motion.div initial={{color:'#ffffff'}} whileHover={{scale: 1.2,color:'#F1BBBB'}} whileTap={{ scale: 0.9 }}>
            <FavoriteIcon style={{fontSize:32}}/>
            </motion.div>
            </Link>
            <Link>
              <motion.h4 className='hover:text-main-pink md:text-base underline text-white font-semibold duration-300'>{user.fullname}</motion.h4>
            </Link>
            <button onClick={(e)=>handleSignOut(e,dispatch)} className={`bg-transparent text-white font-semibold outline outline-2 hover:outline-main-pink hover:text-main-pink outline-white px-4 py-2 rounded-full duration-300`}>
              <p >
                Logout
              </p>
            </button>
        </div>
        <ul className=' flex flex-col md:hidden'>
          <motion.button onClick={(e)=>{
            e.preventDefault()
            setShowNavbar(prev=>!prev)
          }} initial={{color:'#ffffff'}} whileHover={{scale: 1.2,color:'#F1BBBB'}} whileTap={{ scale: 0.9 ,color:'#F1BBBB'}}>
            <MenuRoundedIcon style={{fontSize:36}} className='mr-4'/>
            </motion.button>
          <AnimatePresence mode='wait'>
            {
            showNavbar&&
            <NavMenu/>}
          </AnimatePresence>
        </ul>
        
    </motion.nav>
  )
}

export default Navbar