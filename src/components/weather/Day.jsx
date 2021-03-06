import React from 'react';

const Day = ({ dayData }) => {

  const { dt } = dayData

  const day = dayMap[new Date(dt * 1000).getDay()]

  return(
    <h2>A Day: { dt }</h2>
  )
}

export default Day