import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import { AnimatePresence, motion } from 'framer-motion'
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useParams } from 'react-router-dom';
import getArticleById from '../api/getArticleById';
import setFavourite from '../api/setFavourite';
import TagRoundedIcon from '@mui/icons-material/TagRounded';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import BusinessRoundedIcon from '@mui/icons-material/BusinessRounded';
import CalendarMonthRoundedIcon from '@mui/icons-material/CalendarMonthRounded';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
const ArticlePage = () => {

  const {id}=useParams()
  console.log(id)
  const [article,setArticle]=useState(null)
  const [isFavourite,setIsFavourite]=useState(false)
  useEffect(()=>{
    getArticleById(id,setArticle,setIsFavourite)
  },[])
  
  const handlePrevious=(e)=>{
    e.preventDefault()
    window.history.back()
  }

  




  return (
    <div className=' font-br-hendrix relative h-screen w-full flex flex-col items-center'>
      <Navbar/>
      <div className='h-28'></div>
      <AnimatePresence mode='wait'>
      <motion.div initial={{y:400}} animate={{y:0}} exit={{y:400}} className=' font-br-hendrix w-[90%] bg-gradient-to-br from-main-gray to-white rounded-t-lg flex-1 flex flex-col items-center'>
        <div className=' px-4 w-full py-2 flex justify-between items-center rounded-t-lg bg-secondary-purple'>
          <button onClick={handlePrevious} className=' space-x-2 flex text-white'>
            <ArrowBackRoundedIcon/>
            <p className=' text-sm md:text-base'>Previous</p>
          </button>
          {
          article?
          <button onClick={(e)=>setFavourite(e,setIsFavourite)} className=' space-x-2 flex text-white'>
            {
              !isFavourite?
              <FavoriteIcon/>:
              <FavoriteBorderIcon/>

            }
            <p className=' text-sm md:text-base'>{
            isFavourite?'Add to favourites':'Remove from favourites'
            }</p>
          </button>:
          <div></div>
          }
        </div>
        <div className=' w-full flex items-center justify-center py-2'>
          {article?
          <div className=' text-xl md:text-2xl font-semibold text-center'>
            {article.title}
          </div>:
          <div className='h-8 w-[80%] rounded-xl bg-gray-200 animate-pulse'></div>
          }
          
        </div>
        <div className=' h-[2px] rounded-full w-[90%] bg-secondary-purple '></div>
        <div className=' w-full flex items-center justify-center py-2'>
          {article?
          <div className=' w-full px-4 md:px-20 py-2 '>
              <div className='flex md:text-base text-sm items-end'>
              <TagRoundedIcon/>
              <p className=' font-semibold mx-1'>Keywords:</p>
              <div className=' overflow-hidden whitespace-nowrap text-ellipsis'>
                {
                  article.keywords?.map((k,index)=>(
                    `${k}${index===article.keywords.length-1?'':', '}` 
                  ))
                }
              </div>
            </div>
            <div className='flex md:text-base text-sm items-end'>
              <PersonRoundedIcon/>
              <p className=' font-semibold mx-1'>Authors:</p>
              <div className='overflow-hidden whitespace-nowrap'> 
                {
                  article.authors.map((k,index)=>(
                    `${k}${index===article.authors.length-1?'':', '}` 
                  ))
                }
              </div>
            </div>
            <div className='flex md:text-base text-sm items-end'>
              <BusinessRoundedIcon/>
              <p className=' font-semibold mx-1'>Institutions:</p>
              <div className='overflow-hidden  whitespace-nowrap'>
                {
                  article.institutions.map((k,index)=>(
                    `${k}${index===article.institutions.length-1?'':', '}` 
                  ))
                }
              </div>
            </div>
            <div className='flex md:text-base text-sm items-end'>
              <CalendarMonthRoundedIcon/>
              <p className=' font-semibold mx-1'>Date:</p>
              <div className='overflow-hidden  whitespace-nowrap'>
                {article.date}
              </div>
            </div>
          </div>:
          <div className='w-full px-4 md:px-20 py-2 flex flex-col space-y-2 '>
            <div className='h-4 w-[60%] rounded-xl bg-gray-200 animate-pulse'></div>
            <div className='h-4 w-[60%] rounded-xl bg-gray-200 animate-pulse'></div>
            <div className='h-4 w-[60%] rounded-xl bg-gray-200 animate-pulse'></div>
            <div className='h-4 w-[60%] rounded-xl bg-gray-200 animate-pulse'></div>
          </div>
          }
          
        </div>
        <div className=' h-[2px] rounded-full w-[90%] bg-secondary-purple '></div>
        {
          article?
          <div className=' w-full px-4 md:px-20 py-4 '>
            <h3 className=' font-bold text-xl md:text-2xl'>Abstract :</h3>
            <p>
              {article.abstract}
            </p>
          </div>:
          <div className='w-full px-4 md:px-20 py-4 flex flex-col space-y-2 '>
            <div className='h-8 w-[60%] rounded-xl bg-gray-200 animate-pulse'></div>
            <div className='h-4 w-[90%] rounded-xl bg-gray-200 animate-pulse'></div>
            <div className='h-4 w-[90%] rounded-xl bg-gray-200 animate-pulse'></div>
            <div className='h-4 w-[60%] rounded-xl bg-gray-200 animate-pulse'></div>
          </div>
        }
        <div className=' h-[2px] rounded-full w-[90%] bg-secondary-purple '></div>
        {
          article?
          <div className='flex md:flex-row flex-col md:space-y-0 space-y-4 items-center justify-around w-[90%] md:w-[70%] py-4'>
            <button className='md:w-[30%] w-[70%] py-2  bg-secondary-purple text-white rounded-full'>
              Download txt format
            </button>
            <button className='md:w-[30%] w-[70%] py-2 bg-secondary-purple text-white rounded-full'>
              Download pdf format
            </button>
          </div>
          :
          <div className='flex items-center justify-around w-[90%] md:w-[70%] py-4'>
            <button className='w-[30%] h-8  py-2 bg-gray-200 animate-pulse rounded-full'>
            </button>
            <button className='w-[30%] h-8 py-2 bg-gray-200 animate-pulse rounded-full'>
            </button>
          </div>
        }


      </motion.div>
      </AnimatePresence>
    </div>
  )
}

export default ArticlePage