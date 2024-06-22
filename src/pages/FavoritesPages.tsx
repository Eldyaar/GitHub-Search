import { useAppSelector } from "../hooks/redux"


const FavoritesPages = () => {
   const { favorites } = useAppSelector(state => state.github)

   if (favorites.length === 0) return <p className="text-red-400 text-center font-medium mt-10">No items.</p>

   return (
      <div className="container mx-auto flex justify-center pt-10 h-screen w-screen text-gray-400">
         <ul className="list-none flex flex-col items-center gap-y-6">
            {favorites.map(f => (
               <li key={f}>
                  <a href={f} className="border py-2 px-4 rounded-md hover:shadow-md" target="_blank">{f}</a>
               </li>
            ))}
         </ul>
      </div>
   )
}

export default FavoritesPages