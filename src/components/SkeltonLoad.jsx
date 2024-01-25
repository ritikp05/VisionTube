import React from 'react'
import Skeleton from '@mui/material/Skeleton';
import Error from './Error';
const SkeltonLoad = ({error}) => {
 const array=new Array(30);
 array.fill(10);
 
 return (
<>
<section className="flex flex-row gap-10  w-full sm:mr-8 justify-center flex-wrap">
{
  error===""? array.map((data,index)=>{
return(
<div className="flex flex-col gap-1 w-72 mx-auto " key={index}>
<Skeleton variant='rectangular' className='w-72 h-56 mx-auto' height={195} animation="wave" color='red'/>
<Skeleton variant='rectangular'  animation="wave" height={35}/>
<Skeleton variant='text'  animation="wave" height={25}/>
    </div>
)
  })
  :<Error error={error}/>
}
    
  </section>
</>  )
}



export default SkeltonLoad