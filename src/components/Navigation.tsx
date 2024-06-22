import { Header } from 'antd/es/layout/layout'
import { NavLink, useNavigate } from 'react-router-dom'


const Navigation = () => {
   const navigate = useNavigate()

   return (
      <Header
         style={{ background: '#fff' }}
         className="h-[60px] border-b sticky top-0 p-0 flex z-10"
      >
         <div className="flex items-center justify-between container mx-auto">
            <h3
               onClick={() => navigate('/')}
               className='font-bold text-2xl cursor-pointer transition-colors duration-300 hover:text-[#1677ff]'
            >
               GitHub Search
            </h3>
            <span>
               <NavLink to='/' className='mr-3'>Home</NavLink>
               <NavLink to='/favourites'>Favourites</NavLink>
            </span>
         </div>
      </Header>
   )
}

export default Navigation
