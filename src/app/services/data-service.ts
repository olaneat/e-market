import axios from "axios";
import env from "../../enviroments/env";

 
   function getCategoryList(){
    const url = `${env.baseUrl}/products/list-category` 
    return axios.get(url)
   }

   function getProuductList(){
      const url:string = `${env.baseUrl}/products/list`
      return axios.get(url)
   }


const DataService = {
   getCategoryList,
   getProuductList
}
export default DataService