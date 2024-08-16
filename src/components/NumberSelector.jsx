// import React, { Component } from 'react';
import { Box } from '@mui/material';
// import { useState } from 'react';
import PropTypes from 'prop-types';

// import './NumberSelector.css'
// import React from 'react'
const NumberSelector = ({setError,error,selectedNumber,setSelectedNumber,}) => {
    const arrNumber= [1,2,3,4,5,6]
    const numberSelectorHandler = (value) => {
        setSelectedNumber(value)
        setError("")
    }
    
    // console.log(selectedNumber)
    
  return (
    <div>
        <p className='text-red-700 ms-36 my-2'>{error}</p>
    <div className="flex gap-4 font-medium">
        {
            arrNumber.map((value,i)=>(
                <Box
                key={i} onClick={()=>numberSelectorHandler(value)} className={` cursor-pointer border-[1px] p-4 px-6 border-black ${value===selectedNumber ? 'bg-black text-white':'bg-white text-black'}`}>{value}</Box>
            ))
        }
    </div>
    <p className='float-right my-4 font-medium text-lg'>Select Number</p>
    </div>
    
   
  )
}
NumberSelector.propTypes = {
    error: PropTypes.number,
    selectedNumber: PropTypes.number,
    setSelectedNumber: PropTypes.func.isRequired,
    setError: PropTypes.func.isRequired,
  };

export default NumberSelector
