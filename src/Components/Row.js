import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Movie from './Movie'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

const Row = ({title,fetchUrl, rowID}) => {
    const [movies,setMovies] = useState([])
    

    useEffect (()=>{
      axios.get(fetchUrl).then((response)=>{
        setMovies(response.data.results)
      })
    },[fetchUrl])
 
    const slideLeft=()=>{
        let slider = document.getElementById('slider' + rowID)
        slider.scrollTo({
            left: slider.scrollLeft - 500,
            behavior: 'smooth'
        });
    }
    const slideRight=()=>{
        let slider = document.getElementById('slider' + rowID)
        slider.scrollTo({
            left: slider.scrollLeft + 500,
            behavior: 'smooth'
        });
    }

  return (
    <>
      <h2 className='text-white font-bold md:text-xl p-4 ' >{title}</h2>
      <div className='relative flex items-center group '>
        < MdChevronLeft
        onClick={slideLeft}
         className='bg-white rounded-full left-0 absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block' size={40} />
        
        <div id={'slider' + rowID } className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smoth scrollbar-hide' >
            {movies.map((item,id)=>(
               <Movie key={id} item={item} /> 

            ))}
        </div>
        < MdChevronRight
        onClick={slideRight}
         className='bg-white rounded-full right-0 absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block' size={40} />
      </div>


    </>
  )
}

export default Row

