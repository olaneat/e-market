import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import dataService from "../services/data-service"


const initialState = {}
export const DisplayProdctList = createAsyncThunk(
    'product/list',
    async(ThunkAPI:any)=>{
        try{
            const response = await dataService.getProuductList()
            return response.data
        }
        catch(err:any){
            const msg = (
                err.response && err.data.msg 
                && err.response.data.msg
            ) || err.message ||
            err.toString()
        }
    }
)

const ProductSlice = createSlice({
    name:'create-products',
    initialState,
    reducers: {
        DisplayProdctList: (state:any, action:any)=>{
            return Object.assign({}, state, {
                products: state.products.concat(action.payload)
            })          
        }
    }

})

const {reducer} =  ProductSlice
export default reducer