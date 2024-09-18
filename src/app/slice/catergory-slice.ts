import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import dataService from "../services/data-service"



export const displayCategoriesList = createAsyncThunk(
    'category/display-category-list',
    
    async(thunkAPI:any) =>{
        try{

            const response:any = await dataService.getCategoryList()
            return response.data
        }
        catch(err:any){
            const msg = (
                err.response && err.data.msg 
                && err.response.data.msg
            ) || err.message ||
            err.toString()
            //return thunkAPI.rejectWithValue()
        }
    }
)

let initialState = {
    category:[]
}
const categorySlide = createSlice({
    name: 'category',
    initialState, 
    reducers:{
        displayCategoriesSlice:(state:any, action:any)=>{
            return Object.assign({}, state, {
                catergories: state.category.concat(action.payload)
            })
        }
    
    },
})

const {reducer} = categorySlide
export default reducer