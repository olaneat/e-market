import React, { useEffect, useState } from "react";
import NavBar from "../../components/navbar/navbar";
import './index.scss'
import CategoryListIndex from "../../components/category";
import { UseDispatch, useDispatch } from "react-redux";
import { ProductDTO } from "../../dto/product-dto";
import { DisplayProdctList } from "../../slice/product.slice";
import env from "../../../enviroments/env";
const IndexPage = () =>{
  const imgArr:any[] =[
    {src:'../../../../public/imgs/Flyer-One.png'},
    {src: '../../../../public/imgs/Flyer-Three.png'},
    {src:'../../../../public/imgs/slider1.jpg'},
    {src: '../../../../public/imgs/Trial-One.png'}
  ]
  let deadLine:any = new Date("oct 1, 2024 23:59:59").getTime()
  let [timerDay, setTimerDay]= useState<number>(0);
  let [timerHour, setHour]= useState<number>();
  let [timerMins, setMins]= useState<number>();
  let [timerSec, setSecs]= useState<number>();
  let [productList, setProducts] = useState<ProductDTO[]>([])
  const [current, setCurrent] = useState(0)
  const length = imgArr.length    
  const dispatch = useDispatch()
  const nxtImage = () =>{
    setCurrent(current == length - 1 ? 0: current+1)
  }
  const prevImg = ()=>{
    setCurrent(current == 0 ? length -1  : current-1)
  }

    useEffect(()=>{
        setTimeout((nxtImage),6000);
        displayDeadline()
        getProductLIst()
      },[])    
    const [products, setProductList] = useState<ProductDTO[]>([])
    const [Hotproducts, setHotDealList] = useState<ProductDTO[]>([])
    const [electronicProducts, setElectronicProductList] = useState<ProductDTO[]>([])
    const [clothesProducts, setClothesProducts] = useState<ProductDTO[]>([])
    

    function getProductLIst(){
        dispatch(DisplayProdctList('args') as any)
        .unwrap()
        .then((res:ProductDTO[])=>{
          let electricalProducts:ProductDTO[] = []
          let productArr:ProductDTO[] = [];
          let clothesArr:ProductDTO[] = [];
          let genProduct:ProductDTO[] = []
          let arr:ProductDTO[] = []
        if(res.length>0){
          arr = res.slice(0, 5);
          let data:ProductDTO[] = res
            data.forEach((x)=>{
            productArr.push(x)
            
            if(x.category=='electronics'){
              electricalProducts.push(x)  
            
            }else if(x.category=='clothes'){
              clothesArr.push(x)
            }else{
              genProduct.push(x)
            }
          })
        }
        setElectronicProductList(electricalProducts)
        setHotDealList(arr)
        setClothesProducts(clothesArr.slice(0,8))
        setProductList(genProduct.slice(0,12))
        })
    }

    function displayDeadline(){
      let currentDate:any = new Date();
      let difference = deadLine - currentDate;
      setTimerDay(Math.floor(difference/(1000 * 60*60*24)));
      setHour(Math.floor((difference%(1000*60*60*24))/(1000*60*60)));
      setMins(Math.floor((difference%(1000*60*60))/(1000*60)));
      setSecs(Math.floor((difference%(1000*60))/1000));

    }
    return(
      <div>
        <NavBar/>
        <div className="body">
          <div className="header">
            <div className="lft"><CategoryListIndex/></div>
            <div className="rgt">       
              {imgArr.map((slide:any, index:any)=>{
                return (
                  <div className={index == current? 'slide active': 'slide'} key={index}>
                    {index == current && (
                      <img src={slide.src} className="img"/>
                    )}                   
                  </div>
                )
              })}
            </div>

          </div>
          <div className="main-deal">
            <div className="lft">
              <div className="upper">
                <div className="title">Deals and Offer</div>
              </div>
              <div className="timer">
                <div className="display-timer">
                  {timerDay}
                  <div>Day<span>{'s' ? timerDay<1: '' }</span></div>
                </div>
                <div className="display-timer">
                  {timerHour}
                  <div>Hour </div>
                </div>
                <div className="display-timer">
                  {timerMins}
                  <div>Mins</div>  
                </div>
                <div className="display-timer">
                  {timerSec}
                  <div>Secs</div>
                </div>

              </div>
            </div>
            <div className="right"> 
              {Hotproducts.map((x:ProductDTO)=>{
                return <div className="products" key={x.id}>
                  <img src={`${env.imgUrl}${x.img}`} alt="" />
                  {x.name}
                  <div className="discount">-5%</div>
                </div>
              })}
            </div>

          </div>

          <div className="electronics">
            <div className="title">Cusomer Electronic and Gadget</div>
            <div className="inner-div">
              {electronicProducts.map((p:ProductDTO)=>{
                
                return <div className="product" key={p.id}>
                  <div className="lft">
                    <div className="name">{p.name}</div>
                    <div className="price">N{p.price}</div>
                  </div>
                  <div className="right">
                    <img src={`${env.imgUrl}${p.img}`} alt="" />
                  </div>
                </div>
              })}

            </div>
          </div>
          <div className="clothes-product">
            <div className="title">Clothes & Fashion</div>
            <div className="inner-div">
              {
                clothesProducts.map((x:ProductDTO)=>{
                  return <div className="product">
                    <div className="lft">
                      <div className="name">{x.name}</div>
                      <div className="price">{x.price}</div>
                    </div>
                    <div className="right">
                      <img src={`${env.imgUrl}${x.img}`} alt="" />
                    </div>
                  </div>
                })
              }
            </div>
          </div>

          <div className="general-product">
              <div className="title">Recommended</div>
              <div className="general-list">
                {
                products.map((x:ProductDTO)=>{
                  return <div className="general">
                    <img src={`${env.imgUrl}${x.img}`} alt="" />
                  
                    <div className="lower">
                      <div className="epl">{x.name}</div>
                      <div className="price">N{x.price}</div>
                    </div>
                  </div>

                })
                }
              </div>
          </div>
        </div>
       </div>
    )
}

export default IndexPage