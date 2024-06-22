import { useState, useEffect } from "react"

import { useSearchUsersQuery, useLazyGetUserReposQuery } from "../store/github/github.api"
import { useDebounce } from "../hooks/debounce"

import RepoCard from "../components/RepoCard"


const HomePage = () => {
   const [search, setSearch] = useState('')
   const [dropdown, setDropdown] = useState(false)
   const debounced = useDebounce(search, 300)
   const { isLoading, isError, data: users } = useSearchUsersQuery(debounced, {
      skip: debounced.length < 3,
      refetchOnFocus: true
   })
   const [fetchRepos, { isLoading: areReposLoadind, data: repos }] = useLazyGetUserReposQuery()


   useEffect(() => {
      setDropdown(debounced.length > 3 && users?.length! > 0)
   }, [debounced, users])

   const clickHandler = (username: string) => {
      fetchRepos(username)
      setDropdown(false)
   }


   return (
      <div className='container mx-auto flex flex-col items-center justify-start pt-10 h-screen w-screen text-black'>
         {isError && <p className="text-center text-red-600 mb-[30px]">Something went wrong...</p>}

         <div className="relative w-[560px]">
            <input
               type="text"
               className="border px-4 py-2 w-full h-[40px] mb-2 bg-white outline-none rounded-sm text-gray-600"
               placeholder="Search for GitHub username..."
               value={search}
               onChange={(e) => setSearch(e.target.value)}
            />
            {dropdown && <ul className="list-none absolute top-[40px] left-0 right-0 max-h-[200px] overflow-y-scroll shadow-md bg-white rounded-sm text-gray-6 00">
               {isLoading && <p className="text-center font-medium text-xl text-yellow-400">Loading...</p>}
               {users?.map(user => (
                  <li
                     key={user.id}
                     className="py-2 px-4 hover:bg-[#1677ff] hover:text-white transition-colors cursor-pointer"
                     onClick={() => clickHandler(user.login)}
                  >
                     {user.login}
                  </li>
               ))}
            </ul>}
            <div className="container">
               {areReposLoadind && <p className="text-center text-yellow-400">Repos are loading...</p>}
               { repos?.map(repo => <RepoCard key={repo.id} repo={repo} />)}
            </div>
         </div>
      </div>
   )
}

export default HomePage