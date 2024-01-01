import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { AnimatePresence, motion } from 'framer-motion';
import TuneRoundedIcon from '@mui/icons-material/TuneRounded';
import SearchIcon from '@mui/icons-material/Search';
import TagRoundedIcon from '@mui/icons-material/TagRounded';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import BusinessRoundedIcon from '@mui/icons-material/BusinessRounded';
import CalendarMonthRoundedIcon from '@mui/icons-material/CalendarMonthRounded';
import { Link } from 'react-router-dom';
import getArticles from '../api/getArticles';
import KeyboardArrowUpRoundedIcon from '@mui/icons-material/KeyboardArrowUpRounded';






const ResultsPage = () => {
  const location = useLocation();
  const [articles,setArticles]=useState(null)
  const [showFilter,setShowFilter]=useState(true)
  const queryParams = new URLSearchParams(location.search);
  const param1 = queryParams.get('keywords');
  const [search,setSearch]=useState(param1)
  const [startDate,setStartDate]=useState('2024-01-01')
  const [endDate,setEndDate]=useState('2024-01-01')
  
  useEffect(()=>{
    const getArticlesEffect=async()=>{
      const a = await getArticles()
      setArticles(a)
    }
    getArticlesEffect()
  },
  [])
  console.log(articles)

  const SkeletonCard=()=>{
    return(
      <motion.div initial={{borderRadius:40}} animate={{borderRadius:0}} transition={{duration:1}} className=' items-end md:pl-8 pl-4 pr-2 py-3 font-br-hendrix space-y-2 animate-pulse flex flex-col w-full bg-gradient-to-r from-main-gray to-white'>
        <div className='h-12 w-full rounded-xl bg-gray-200 pb-4 animate-pulse'></div>
        <div className='h-4 w-[60%] rounded-xl bg-gray-200 animate-pulse'></div>
        <div className='h-4 w-[60%] rounded-xl bg-gray-200 animate-pulse'></div>
        <div className='h-4 w-[60%] rounded-xl bg-gray-200 animate-pulse'></div>
        <div className='h-4 w-[60%] rounded-xl bg-gray-200 animate-pulse'></div>
       
      </motion.div>
    )
  }

  const ArticleCard=({id,title,keywords,authors,institutions,date})=>{
    return(
      <motion.div initial={{borderRadius:40}} animate={{borderRadius:0}} transition={{duration:1}} className=' items-end md:pl-8 pl-4 pr-2 py-3 font-br-hendrix flex flex-col w-full bg-gradient-to-r from-main-gray to-white'>
        <h2 className=' mb-4 font-medium text-left text-lg md:text-2xl hover:underline'>
          <Link to={`/article/${id}`}>
            {title}
          </Link>
        </h2>
        <div className='flex flex-row-reverse md:text-base text-sm items-end space-x-2'>
          <TagRoundedIcon/>
          <div className=' opacity-70 whitespace-nowrap text-ellipsis'>
            {
              keywords?.map((k,index)=>(
                `${k}${index==keywords.length-1?'':', '}` 
              ))
            }
          </div>
        </div>
        <div className='flex flex-row-reverse md:text-base text-sm items-end space-x-2'>
          <PersonRoundedIcon/>
          <div className=' opacity-70 whitespace-nowrap'> 
            {
              authors.map((k,index)=>(
                `${k}${index==authors.length-1?'':', '}` 
              ))
            }
          </div>
        </div>
        <div className='flex flex-row-reverse md:text-base text-sm items-end space-x-2'>
          <BusinessRoundedIcon/>
          <div className=' opacity-70 whitespace-nowrap'>
            {
              institutions.map((k,index)=>(
                `${k}${index==institutions.length-1?'':', '}` 
              ))
            }
          </div>
        </div>
        <div className='flex flex-row-reverse md:text-base text-sm items-end space-x-2'>
          <CalendarMonthRoundedIcon/>
          <div className=' opacity-70 whitespace-nowrap'>
            {date}
          </div>
        </div>
      </motion.div>
    )
  }


  console.log(startDate)

  const RadioInput = ({ label, name, value, checked, onChange }) => {
    return (
      <div className="flex items-center mb-2 font-br-hendrix font-semibold">
        <input
          type="radio"
          id={value}
          name={name}
          value={value}
          checked={checked}
          onChange={onChange}
          className="mr-2 accent-dark-purple scale-150"
        />
        <label htmlFor={value}>{label}</label>
      </div>
    );
  };
  const [selectedOption, setSelectedOption] = useState('Keywords');

  const handleInputChange = (e) => {
    setSelectedOption(e.target.value);
  };

  return (
    <div className=' font-br-hendrix w-full relative h-screen'>
      <Navbar />
      <div className='md:grid md:grid-cols-4 flex flex-col w-full h-screen'>
        
        <motion.div initial={{y:-200}} animate={{y:0}} exit={{y:-200}} className="flex flex-col items-center px-6 pt-20 pb-4 md:pt-28 space-y-4 col-span-1 bg-gradient-to-br from-main-gray to-white w-full h-full">
          <div className='flex w-full items-end space-x-3 justify-start text font-bold text-2xl'>
            <div className=''>
              <TuneRoundedIcon style={{fontSize:36}}/>
            </div>
            <p>Filter & Sort</p>
            <div className='flex-1 flex justify-end'>
              <button onClick={()=>setShowFilter(prev=>!prev)} className={` ${showFilter?'':'rotate-180'} duration-500`}>
                <KeyboardArrowUpRoundedIcon style={{fontSize:32}}/>
              </button>
            </div>
          </div>
          <AnimatePresence mode='wait'>
          {
          showFilter&&
          <motion.div initial={{y:-200}} animate={{y:0}} exit={{y:-500}} className='w-full flex flex-col items-center space-y-4'>

            <motion.div className='flex flex-col w-full items-start'>
              <p className=' font-semibold text-secondary-purple mb-2'>Show articles according to</p>
              <div className=' flex items-start flex-col w-full'>
                  <RadioInput
                  label="Keywords"
                  name="options"
                  value="Keywords"
                  checked={selectedOption === 'Keywords'}
                  onChange={handleInputChange}
                />
                <RadioInput
                  label="Authors"
                  name="options"
                  value="Authors"
                  checked={selectedOption === 'Authors'}
                  onChange={handleInputChange}
                />
                <RadioInput
                  label="Institutions"
                  name="options"
                  value="Institutions"
                  checked={selectedOption === 'Institutions'}
                  onChange={handleInputChange}
                />
              </div>
            </motion.div>
            <div className='flex flex-col w-full items-start'>
              <p className=' font-semibold text-secondary-purple mb-2'>Publishing Date (DD/MM/YYYY)</p>
              <div className='flex items-start flex-col w-full'>
                <p className='font-semibold ml-4 text-secondary-purple'>From</p>
                <div className=' font-medium flex items-center justify-center w-[85%] px-2 py-2 mb-2 outline-dark-purple outline-2 outline rounded-full'>
                  <input type="date" placeholder='test' name="startDate" id="startDate" value={startDate} onChange={e=>setStartDate(e.target.value)} className=' w-full text-dark-purple bg-transparent font-medium outline-none' />
                </div>
                <p className='font-semibold ml-4 text-secondary-purple'>To</p>
                <div className=' font-medium flex items-center justify-center w-[85%] px-2 py-2 outline-dark-purple outline-2 outline rounded-full'>
                  <input type="date"  placeholder='test' name="endDate" id="endDate" value={endDate} onChange={e=>setEndDate(e.target.value)} min={startDate} className=' w-full text-dark-purple bg-transparent font-medium outline-none' />
                </div>
              </div>
            </div>
            <button className=' w-[50%] py-3 bg-secondary-purple rounded-full font-bold text-white flex items-center justify-center'>
              <p>Filter</p>
            </button>
          </motion.div>
          } 
          </AnimatePresence>
        </motion.div>
        
        <motion.div className='col-span-3 px-2 md:pl-8 pt-8 md:pt-24 w-full h-screen flex flex-col'>
          <div className=' w-[90%] md:w-[60%] rounded-full flex items-center justify-between bg-main-gray space-x-4 px-4 md:px-8'>
            <input required  name='search' value={search} onChange={(e)=>setSearch(e.target.value)} placeholder='Search' type="text" className=' md:text-lg text-base py-3 md:py-4 font-medium bg-transparent outline-none flex-1' />
            <SearchIcon style={{color:'#352F44',fontSize:30}}/>
          </div>
          <div>

          </div>
          <div className='list flex flex-col space-y-6 px-2 pb-2 mt-2 flex-1 overflow-y-scroll'>
            {articles?
              articles.map((article)=>(
                <ArticleCard key={article.id} id={article.id} keywords={article.keywords} title={article.title} authors={article.authors} institutions={article.institutions} date={article.date}/>
              )):
              [1,2,3,4,5].map(()=>(
                <SkeletonCard/>
              ))
            }
          </div>
        </motion.div>

      </div>

    </div>
  )
}

export default ResultsPage