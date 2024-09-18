export class GeneralUtil{
  constructor(){}
  static isValidJSON(json: unknown): boolean {
    if (json === null || json === "" || json === undefined) {
      return false;
    }
    
    const str = JSON.stringify(json);
    
    try {
      JSON.parse(str);
    } catch (e) {
      return false;
    }
    
    return true;
  }  
}