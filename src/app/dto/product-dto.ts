import { GeneralUtil } from "../utils/general-utils";


export class ProductDTO{
    public id:string| undefined;
    public  name: string | undefined;
    public description:string | undefined;
    public manunfactuer: string | undefined;
    public category: string | undefined;
    public avaialble : boolean| undefined;
    public colour :string | undefined ;
    public weight:string | undefined;
    public price :string | undefined;
    public slug :string | undefined;
    public img :string | undefined;
    public stock :string | undefined;
    public model :string | undefined;
    public brand :string | undefined;
    public stroage :string | undefined;
    public wlan :string | undefined;
    public rear_camera :string | undefined;
    public front_camera :string | undefined;
    public connectivity :string | undefined;
    public storage :string | undefined;
    public display :string | undefined;
    public processor :string | undefined;
    public size :string | undefined;
    public memory :string | undefined;
    public sku :string | undefined;
    public line :string | undefined;
    public platform :string | undefined;
    public battery :string | undefined;
    public sim :string | undefined;
    public bluetooth :string | undefined;

    public mapProduct(data:any){
        if(GeneralUtil.isValidJSON(data)){
            this.avaialble = data?.avaialble
            this.battery = data.battery
            this.bluetooth = data?.bluetooth
            this.brand = data?.brand
            this.category = data?.category
            this.colour = data?.colour
            this.connectivity = data?.connectivity
            this.description = data?.description
            this.display = data?.display
            this.front_camera = data?.front_camera
            this.id = data?.id
            this.img = data?.img
            this.line = data?.line
            this.manunfactuer = data?.manunfactuer
            this.memory = data?.memory
            this.model = data?.model
            this.name = data?.name
            this.platform = data?.platform
            this.price = data?.price
            this.processor = data?.processor
            this.rear_camera = data?.rear_camera
            this.sim = data?.sim
            this.size = data?.size
            this.sku = data?.sku
            this.slug = data?.slug
            this.stock = data?.stock
            this.storage = data?.storage
            this.weight = data?.weight
            this.wlan = data?.wlan
        }
    }
}   