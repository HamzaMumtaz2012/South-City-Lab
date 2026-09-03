import React from 'react'

const ServiceCard = (props) => {
  return (
    <div className='flex flex-col items-center'>
      <img className='h-30' src="/flask.png" alt="" />
      <p className='text-2xl text-red-600 font-sans font-medium text-center'>{props.text}</p>
    </div>
  )
}

export default ServiceCard