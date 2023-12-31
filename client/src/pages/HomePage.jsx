import React, { useEffect, useState } from 'react'
import { motion,AnimatePresence } from 'framer-motion'
import LogoAnimation from '../components/LogoAnimation'
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import bg1 from '../assets/bg-1.png'
import bg2 from '../assets/bg-2.png'
import {Link} from 'react-router-dom'
import handleSignIn from '../api/handleSignIn';
import { useDispatch } from 'react-redux';
import handleSignUp from '../api/handleSignUp';

const HomePage = () => {
    const [isLogin,setIsLogin]=useState(true)
    const [isLoading,setIsLoading]=useState(false)
    const colorsMain=['#352F44','#352F44','#B9B4C7','#5C5470','#352F44']
    const colorsWhite=['#ffffff','#ffffff','#BDBDBD','#ffffff','#ffffff']
    const [currentText, setCurrentText] = useState('Sign up and discover a great amount of new opportunities!');
    const [currentTitle,setCurrentTitle]=useState('New Here?')
    const [currentButton,setCurrentButton]=useState('Sign Up')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [fullname,setFullname]=useState('')
    const [checked,setChecked]=useState(false)
    const dispatch=useDispatch()

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
            <p className={`${isLogin?'text-dark-blue':'text-white'} font-bold text-lg md:text-2xl duration-1000`}>SciPaper</p>
        </div>
        <motion.form onSubmit={(e)=>isLogin?handleSignIn(dispatch,e,email,password,setIsLoading):handleSignUp(dispatch,e,email,password,fullname,setIsLoading)} layout transition={{duration:1}} className=' flex-1 flex flex-col items-center justify-between'>
            
            <div className={` ${!isLogin?'hidden md:flex h-[15%]':'flex h-[20%]'} `}></div>
            <h1 className={`font-black text-dark-purple text-4xl md:text-6xl text-center ${!isLogin&&'mt-8 md:mt-0'}`}>{isLogin?'Login to Your Account':'Create Account'} </h1>
            <p className=' text-[#414141] opacity-50 text-lg md:text-xl'>{isLogin?'Login to use our service':'Fill the information please'}</p>
            {
                !isLogin&&
                <div className=' w-[80%] md:w-[70%] py-3 md:py-4 bg-main-gray rounded-full flex items-center justify-between space-x-4 px-4'>
                <PersonOutlinedIcon style={{color:'#352F44',fontSize:30}}/>
                <input required name='fullname' value={fullname} onChange={(e)=>setFullname(e.target.value)} placeholder='Full Name' type="text" className=' text-lg font-medium bg-transparent outline-none flex-1' />
            </div>}
            <div className='  w-[80%] md:w-[70%] py-3 md:py-4 bg-main-gray rounded-full flex items-center justify-between space-x-4 px-4'>
                <MailOutlineOutlinedIcon style={{color:'#352F44',fontSize:30}}/>
                <input required name='email' value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Email' type="email" className=' text-lg font-medium bg-transparent outline-none flex-1' />

            </div>
            <div className='  w-[80%] md:w-[70%] py-3 md:py-4 bg-main-gray rounded-full flex items-center justify-between space-x-4 px-4'>
                <LockOutlinedIcon style={{color:'#352F44',fontSize:30}}/>
                <input required name='password' value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='Password' type="password" className=' text-lg font-medium bg-transparent outline-none flex-1' />
            </div>
            <div className='flex mt-2 w-[80%] md:w-[70%] justify-start font-semibold md:text-lg text-dark-purple'>
                {
                    isLogin?
                    <Link className=' '>
                        Forgot your password?
                    </Link>:
                    <div className='flex space-x-4'>
                        <input required checked={checked} onChange={()=>setChecked(prev=>!prev)} id='check' type="checkbox" className=' scale-150 accent-dark-purple ' />
                        <label htmlFor="check">I have read the Term & Conditions</label>
                    </div>
                }
            </div>
            <button  type='submit' className={`flex px-2 items-center ${isLoading?'justify-between':'justify-center'} w-1/2 md:w-[33%] mb-2 h-12 md:h-16 bg-dark-purple rounded-full text-white font-bold md:text-xl`}>
                {
                    isLoading&&
                    <span className=' loader h-8 w-8 opacity-0'></span>
                }                <p>{isLogin?'Sign in':'Sign up'}</p>
                {
                    isLoading&&
                    <span className=' loader h-8 w-8'></span>
                }
            </button>
            <div className='flex justify-center items-center mb-4 space-x-4 text-[#696969] text-sm'>
                <p>Copyright@SciPaper</p>
                <p>All rights reserved</p>
            </div>
        </motion.form>
        <motion.div layout transition={{duration:1}} className={`relative md:w-[40%] md:h-auto h-[40%] bg-gradient-to-tr from-light-purple via-main-purple to-secondary-purple flex flex-col ${!isLogin?'md:justify-center md:pb-0 justify-end pb-10':'justify-center'}  items-center`}>
            <motion.img draggable={false} initial="start" animate="end" variants={keyframes} transition={transition} src={isLogin?bg2:bg1} className='absolute h-full' alt="" />
            <div className='z-10 flex flex-col items-center w-full space-y-6'>
                <AnimatePresence exitBeforeEnter={false} mode="wait">
                    {
                        <motion.div key={currentTitle} initial="initial" animate="animate" exit="exit" variants={textVariants} transition={textTransition}  className={`font-black text-white text-3xl md:text-5xl`}>
                            <h2>
                                {currentTitle}
                            </h2>
                            
                        </motion.div>
                    }
                </AnimatePresence>
                <AnimatePresence exitBeforeEnter={false} mode="wait">
                    {
                        <motion.div key={currentText} initial="initial" animate="animate" exit="exit" variants={textVariants} transition={textTransition}  className=' text-white text-lg md:text-2xl px-[10%] h-20 text-center'>
                            <p>
                                {currentText}
                            </p>
                            
                        </motion.div>
                    }
                </AnimatePresence>
                <button onClick={(e)=>handleToggle(e)} className=' relative w-1/2 outline outline-2 outline-white text-white py-3 font-bold md:text-xl rounded-full flex justify-center items-center active:outline-white active:text-white hover:outline-main-pink hover:text-main-pink duration-300' >
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