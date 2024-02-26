'use client'
import { useRouter } from 'next/navigation'



const page = () => {
    const router = useRouter()
    const handleClick = () =>{
        console.log('handle click');
        router.push('/');
    }
  return (
    <div>
      <h1>order is place </h1>
      <button onClick={handleClick}>back to home</button>
    </div>
  )
}

export default page
