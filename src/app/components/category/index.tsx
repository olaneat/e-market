import React, {useEffect, useState} from "react"
import { useDispatch } from "react-redux"
import { displayCategoriesList } from "../../slice/catergory-slice";
import { CategoryDTO } from "../../dto/category-dto";
import './category-list.scss'

const CategoryListIndex = () =>{
  useEffect(()=>{
    getCategories()
  },[])
    
  const dispatch = useDispatch()
  const [categories, setCategories] =  useState<CategoryDTO[]>([])
    
    0
  function getCategories(){
    dispatch(displayCategoriesList('arg') as any)
      .unwrap()
      .then((res:CategoryDTO[])=>{
        let dataArr:any = []
        if(res.length>0){
          let data:CategoryDTO[] = res.slice(0, 8)
            data.forEach((x:CategoryDTO)=>{
              dataArr.push(x)
            })
        }
        setCategories(dataArr)
       })
    }

    return (
        <div >
           {categories.map((x:CategoryDTO)=>{
            return<div className="category-list" key={x.id}>
             <div className="txt"> {x.name}</div>   
            </div>
            })}
           <div>
            
            </div> 
        </div>
    )
}

export default CategoryListIndex