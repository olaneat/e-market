import axios from "axios";
import env from "../enviroments/env";
import {CategoryDTO} from './../app/dto/category-dto'

const displayCatgeories  =()=> {
    
   function getCategoryList(){
    const url = `${env.baseUrl}/products/list-category` 
    return axios.get<CategoryDTO>(url)
   }
}

const DataService = {
   displayCatgeories
}


export default DataService