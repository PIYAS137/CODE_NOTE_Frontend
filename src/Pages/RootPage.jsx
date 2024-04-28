import {Outlet} from 'react-router-dom'


const RootPage = () => {
  return (
    <div className=' h-screen dark:bg-black bg-[#fff9e6]'>
        <Outlet/>
    </div>
  )
}

export default RootPage