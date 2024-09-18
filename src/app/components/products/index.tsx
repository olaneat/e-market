import React, {useEffect, useState} from "react";
import { UseDispatch, useDispatch } from "react-redux";
import { ProductDTO } from "../../dto/product-dto";
import { DisplayProdctList } from "../../slice/product.slice";


const ProductListIndex = () =>{

    useEffect(()=>{
        getProductLIst()
    }, [])

    let dispatch = useDispatch()
    const [products, setProductList] = useState<ProductDTO[]>([])


    function getProductLIst(){
        console.log('hehehaas')
        dispatch(DisplayProdctList('args') as any)
        .unwrap()
        .then((res:ProductDTO)=>{console.log(res)})
    }

    return(
        <div></div>
    )
}


export default ProductListIndex