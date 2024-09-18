import { GeneralUtil } from "../utils/general-utils";

export class CategoryDTO{
   public  name:string | undefined;
    public slug:string | undefined;
    public id:string | undefined;

    public mapCategoryies(data:any){
        if(GeneralUtil.isValidJSON(data)){
            this.id = data?.id;
            this.slug = data?.slug;
            this.name = data?.name
        }
    }

}