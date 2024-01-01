import React from 'react'
import Navbar from '../components/Navbar'
import { motion } from 'framer-motion'
import AddIcon from '@mui/icons-material/Add';
import { useSelector } from 'react-redux';
import EditIcon from '@mui/icons-material/Edit';

const ProfilePage = () => {
  const user =useSelector(state=>state.data.user.user)
  return (
    <div className=' font-br-hendrix w-full relative h-screen'>
      <Navbar/>
      <div className='md:grid md:grid-cols-4 flex flex-col w-full h-screen'>
        <motion.div initial={{y:-200}} animate={{y:0}} exit={{y:-200}} className="flex flex-col items-center justify-center px-6 pt-20 pb-4 md:pt-28 space-y-4 col-span-1 bg-[#EDF5F3] w-full h-full">
          <div className=' relative h-1/2 aspect-square rounded-full bg-gray-400 '>
            <div className=' right-1 top-1 absolute bg-secondary-purple h-16 aspect-square rounded-full flex items-center justify-center'>
              <AddIcon style={{fontSize:48,color:'#ffffff'}}/>
            </div>
          </div>
          <h2 className=' font-semibold text-xl md:text-2xl'>{user.fullname}</h2>
          
        </motion.div>
        
        <motion.div initial={{y:200}} animate={{y:0}} exit={{y:200}} className='col-span-3 px-8 md:pl-24 pt-8 md:pt-24 w-full h-screen items-start justify-center flex flex-col'>
            <h1 className=' font-medium text-xl md:text-2xl mb-8'>
              Account Settings
            </h1>
            <div className=' flex flex-col w-full items-start space-y-2 mb-4'>
              <p>Fullname</p>
              <div className=' w-[90%] md:w-[60%] rounded-full flex items-center justify-between bg-main-gray space-x-4 px-4 md:px-6'>
                <input required  name='fullname' value={user.fullname} disabled={true} placeholder='Fullname' type="text" className='  py-3 md:py-4 font-medium bg-transparent outline-none flex-1' />
              </div>
            </div>
            <div className=' flex flex-col w-full items-start space-y-2 mb-4'>
              <p>email</p>
              <div className=' w-[90%] md:w-[60%] rounded-full flex items-center justify-between bg-main-gray space-x-4 px-4 md:px-6'>
                <input required  name='email' value={user.email} disabled={true} placeholder='email' type="text" className='  py-3 md:py-4 font-medium bg-transparent outline-none flex-1' />
              </div>
            </div>
            <div className=' flex flex-col w-full items-start space-y-2 mb-4'>
              <p>Fullname</p>
              <div className=' w-[90%] md:w-[60%] rounded-full flex items-center justify-between bg-main-gray space-x-4 px-4 md:px-6'>
                <input required  name='password' value={'abcdefghijk'} disabled={true} placeholder='Password' type="password" className='  py-3 md:py-4 font-medium bg-transparent outline-none flex-1' />
                <button>
                  <EditIcon/>
                </button>
              </div>
            </div>
            
            
        </motion.div>

      </div>
    </div>
  )
}

export default ProfilePage