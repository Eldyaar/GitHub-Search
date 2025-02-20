import { PayloadAction, createSlice } from "@reduxjs/toolkit"

const LC_FAV_KEY = 'rfk'

interface GithubState {
   favorites: string[]
}

const initialState: GithubState = {
   favorites: JSON.parse(localStorage.getItem(LC_FAV_KEY) ?? '[]')
}

export const githubSlice = createSlice({
   name: 'github',
   initialState,
   reducers: {
      addFavorite(state, action: PayloadAction<string>) {
         state.favorites.push(action.payload)
         localStorage.setItem(LC_FAV_KEY, JSON.stringify(state.favorites))
      },
      removeFavorite(state, action: PayloadAction<string>) {
         state.favorites = state.favorites.filter(f => f !== action.payload)
         localStorage.setItem(LC_FAV_KEY, JSON.stringify(state.favorites))
      },
   }
})

export const githubActions = githubSlice.actions
export const githubReducer = githubSlice.reducer