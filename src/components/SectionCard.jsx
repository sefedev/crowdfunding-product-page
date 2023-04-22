import React from 'react'

const SectionCard = (props) => {
  return (
    <section className={`relative flex flex-col items-center w-1/2 p-4  px-12 sm:px-6 pt-12 mb-6 rounded-lg shadow-md sm:w-full bg-White border-DarkGray ${props.className}`}>
        {props.children}
    </section>
  )
}

export default SectionCard