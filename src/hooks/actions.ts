import { useDispatch } from "react-redux"
import { bindActionCreators } from "@reduxjs/toolkit"
import { githubActions } from "../store/github/github.slice"


const action = {
   ...githubActions
}

export const useActions = () => {
   const dispatch = useDispatch()

   return bindActionCreators(action, dispatch)
}