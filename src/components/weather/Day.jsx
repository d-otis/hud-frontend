import React from 'react';

const Day = ({ day }) => {

  const { dt } = day

  return(
    <h2>A Day: { dt }</h2>
  )
}

export default Day