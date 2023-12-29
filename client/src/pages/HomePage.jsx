import React, { useEffect, useState } from 'react'
import { motion,AnimatePresence } from 'framer-motion'
import LogoAnimation from '../components/LogoAnimation'
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import bg1 from '../assets/bg-1.png'
import bg2 from '../assets/bg-2.png'
import {Link} from 'react-router-dom'

const HomePage = () => {
    const [isLogin,setIsLogin]=useState(true)
    const colorsMain=['#352F44','#352F44','#B9B4C7','#5C5470','#352F44']
    const colorsWhite=['#ffffff','#ffffff','#BDBDBD','#ffffff','#ffffff']
    const [currentText, setCurrentText] = useState('Sign up and discover a great amount of new opportunities!');
    const [currentTitle,setCurrentTitle]=useState('New Here?')
    const [currentButton,setCurrentButton]=useState('Sign Up')

    const textVariants = {
        initial: { opacity: 0, y: -20 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: 20 },
      };
    
      const textTransition = {
        duration: 0.5,
      };

      const keyframes = {
        start: {
          opacity: 0.4,
          x: 0,
          scale: 0.9,
        },
        end: {
          opacity: 1,
          x: 0,
          scale: 1,
        },
      };
    
      const transition = {
        duration: 3,
        ease: 'easeInOut',
        repeat:Infinity,
        repeatType: 'reverse', // Reverse the animation on each repeat
      };
    


      useEffect(()=>{
        setCurrentText(isLogin?'Sign up and discover a great amount of new opportunities!':'To keep connected with us please login with you personal info')
        setCurrentTitle(isLogin?'New Here?':'Welcome back!')
        setCurrentButton(!isLogin?'Sign In':'Sign Up')
  
      },[isLogin])
      const handleToggle=(e)=>{
            e.preventDefault()
            setIsLogin(prev=>!prev)
        }
            

      




    return (
    <div className={`relative font-br-hendrix h-screen w-full flex ${isLogin?'md:flex-row flex-col':'md:flex-row-reverse flex-col-reverse'}`}>
        <div className=' absolute z-10 left-2 top-4 flex items-center'>
            {
                isLogin?
                <LogoAnimation colors={colorsMain}/>:
                <LogoAnimation colors={colorsWhite}/>
            }
            <p className={`${isLogin?'text-dark-blue':'text-white'} font-bold text-2xl duration-1000`}>SciPaper</p>
        </div>
        <motion.div layout transition={{duration:1}} className=' flex-1 flex flex-col items-center justify-between'>
            
            <div className={` ${!isLogin?'hidden md:flex h-[15%]':'flex h-[20%]'} `}></div>
            <h1 className={`font-black text-dark-purple text-5xl md:text-6xl text-center ${!isLogin&&'mt-8 md:mt-0'}`}>{isLogin?'Login to Your Account':'Create Account'} </h1>
            <p className=' text-[#414141] opacity-50 text-xl'>Login to use our service</p>
            {
                !isLogin&&
                <div className=' w-[70%] h-[10%] bg-main-gray rounded-full flex items-center justify-between space-x-4 px-4'>
                <PersonOutlinedIcon style={{color:'#352F44',fontSize:30}}/>
                <input placeholder='Full Name' type="text" className=' text-lg font-medium bg-transparent outline-none flex-1' />
            </div>}
            <div className=' w-[70%] h-[10%] bg-main-gray rounded-full flex items-center justify-between space-x-4 px-4'>
                <MailOutlineOutlinedIcon style={{color:'#352F44',fontSize:30}}/>
                <input placeholder='Email' type="email" className=' text-lg font-medium bg-transparent outline-none flex-1' />

            </div>
            <div className=' w-[70%] h-[10%] bg-main-gray rounded-full flex items-center justify-between space-x-4 px-4'>
                <LockOutlinedIcon style={{color:'#352F44',fontSize:30}}/>
                <input placeholder='Password' type="password" className=' text-lg font-medium bg-transparent outline-none flex-1' />
            </div>
            <div className='flex mt-2 w-[70%] justify-start font-semibold md:text-lg text-dark-purple'>
                {
                    isLogin?
                    <Link className=' '>
                        Forgot your password?
                    </Link>:
                    <div className='flex space-x-4'>
                        <input id='check' type="checkbox" className=' scale-150 accent-dark-purple ' />
                        <label htmlFor="check">I have read the Term & Conditions</label>
                    </div>
                }
            </div>
            <button className='w-[33%] mb-2 h-16 bg-dark-purple rounded-full text-white font-bold text-xl'>
                <p>{isLogin?'Sign in':'Sign up'}</p>
            </button>
            <div className='flex justify-center items-center mb-4 space-x-4 text-[#696969] text-sm'>
                <p>Copyright@SciPaper</p>
                <p>All rights reserved</p>
            </div>


        </motion.div>
        <motion.div layout transition={{duration:1}} className={`relative md:w-[40%] md:h-auto h-[40%] bg-gradient-to-tr from-light-purple via-main-purple to-secondary-purple flex flex-col ${!isLogin?'md:justify-center md:pb-0 justify-end pb-10':'justify-center'}  items-center`}>
            <motion.img draggable={false} initial="start" animate="end" variants={keyframes} transition={transition} src={isLogin?bg2:bg1} className='absolute h-full' alt="" />
            <div className='z-10 flex flex-col items-center w-full space-y-6'>
                <AnimatePresence exitBeforeEnter={false} mode="wait">
                    {
                        <motion.div key={currentTitle} initial="initial" animate="animate" exit="exit" variants={textVariants} transition={textTransition}  className={`font-black text-white text-4xl md:text-5xl`}>
                            <h2>
                                {currentTitle}
                            </h2>
                            
                        </motion.div>
                    }
                </AnimatePresence>
                <AnimatePresence exitBeforeEnter={false} mode="wait">
                    {
                        <motion.div key={currentText} initial="initial" animate="animate" exit="exit" variants={textVariants} transition={textTransition}  className=' text-white text-2xl px-[10%] h-20 text-center'>
                            <p>
                                {currentText}
                            </p>
                            
                        </motion.div>
                    }
                </AnimatePresence>
                <button onClick={(e)=>handleToggle(e)} className=' w-1/2 outline outline-2 outline-white text-white py-3 font-bold text-xl rounded-full flex justify-center items-center active:outline-white active:text-white hover:outline-main-pink hover:text-main-pink duration-300' >
                    <AnimatePresence exitBeforeEnter={false} mode="wait">
                        {
                            <motion.div key={currentButton} initial="initial" animate="animate" exit="exit" variants={textVariants} transition={textTransition} >
                                <p>
                                    {currentButton}
                                </p>
                                
                            </motion.div>
                        }
                    </AnimatePresence>
                </button>
            </div>
        </motion.div>

    </div>
  )
}

export default HomePage