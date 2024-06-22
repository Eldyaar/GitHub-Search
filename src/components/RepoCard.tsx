import { useState } from 'react'
import { Card, Button } from 'antd'
import { IRepo } from "../models/models"
import { useActions } from '../hooks/actions'
import { useAppSelector } from '../hooks/redux'

import 'antd/dist/reset.css'
import 'tailwindcss/tailwind.css'; 



const RepoCard = ({ repo }: { repo: IRepo }) => {
   const { addFavorite, removeFavorite } = useActions()
   const { favorites } = useAppSelector(state => state.github)

   const [isFav, setIsFav] = useState(favorites.includes(repo.html_url))

   const addToFavorite = (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault()
      addFavorite(repo.html_url)
      setIsFav(true)
   }

   const removeFromFavorite = (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault()
      removeFavorite(repo.html_url)
      setIsFav(false)
   }

   return (
      <a href={repo.html_url} target='_blank'>
         <Card className='mb-2 hover:shadow-md hover:cursor-pointer' title={repo.full_name}>
            <p className='text-sm'>
               Fork: <span className='font-bold mr-2'>{repo.forks}</span>
               Watchers: <span className='font-bold'>{repo.watchers}</span>
            </p>
            <p className='text-sm font-thin mb-2'>{repo?.description}</p>

            {!isFav && <Button onClick={addToFavorite} className='mr-2'>
               Add
            </Button>}

            {isFav &&
               <Button
                  onClick={removeFromFavorite}
                  className='border-gray-500 text-gray-500 hover:border-red-500 hover:text-red-500 mr-2'
               >Remove</Button>}
         </Card>
      </a>
   )
}

export default RepoCard
