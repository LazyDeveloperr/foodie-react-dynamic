import { Card } from '@mui/material'
import React from 'react'
import data from '../data/products.json'
import Menu from './Menu'

const Main = (props) => {
   
const addItems = (data,count) => {
  props.addItems(data,count)
}
  return (
    <div className='grid grid-cols-4 gap-3 mt-0 pb-36 pr-2 overflow-auto '>
      {
        data.map((data, index) => {
          return (
            <Card
            key={index} > 
              <Menu 
               data={data}
              addItems={(data,count)=>addItems(data,count)}
              
               name={data.name}
               img={data.img} 
               price={data.price}
                />
            </Card>
          )
        })
      }

    </div>
  )
}

export default Main