import React from 'react'
type btnName = {
    name: string
}

export const Button = (props: btnName) => {
  return (
    <main className=' text-center px-4 py-3 bg-black w-full'>
        <h1 className='text-white font-bold'>{props.name}</h1>
    </main>
  )
}
