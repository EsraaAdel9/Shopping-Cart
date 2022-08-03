export class item {
    id: number;
    name: string;
    price: number;
    url:string;
    description:string='';
    qty:number=1; 

    constructor(id=0, name='', description = '', price = 0, url = '',qty=1) {
    this.id = id
    this.name = name
    this.description = description
    this.price = price
    this.url = url
    this.qty=1
  }  
}
