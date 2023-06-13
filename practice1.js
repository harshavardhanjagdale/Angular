//  
// //  input[5,5,5]   ans- True
// //  input
// var temp:number=0;
// function Checkinput(x:number[]){
//   temp=x[0];
//   for(var i=1;i<x.length;i++){
//     if (temp!=x[i]){
//         return false
//     }
// }
// return true
// }
// console.log(Checkinput([5,5,6,5,5,5,5,5,5,5]))
// // function palindrome(str:string){
//      var temp1:string="";
//     //  var temp1:string="";
//     var str:string="dad"
//     for(var i=str.length-1;i=>0;i--){
//         temp1=temp1+str[i];
//     }
//     console.log(temp1)
// //     if (temp=temp1){
// //         return true
// //     }
//     else{
//         return false
//     }
// }
// console.log(palindrome("dadgfg"))
// function palindrome(str:string){
//        var j=str.length-1
//     for(var i=0;i<j;i++){
//         if(str.charAt(i)!==str.charAt(j)){
//             return false
//         }
//         j--
//     }
//     return true
// }
// palindrome("level")
// function palindrome(str:string){
// var temp:number
// var j=str.length-1;
//     for(var i=0;i<=str.length;i++){
//         if(str.charAt(i)!==str.charAt(j)){
//             return false
//         }
//         j--
//     }
//     return true
// }
// console.log(palindrome("level"))
// var p=function Checkarr(arrvv:number[]){
//     var z=arrvv[0]
//     for(var i=0;i<=arrvv.length-1;i++){
//         if(arrvv[i]!==z){
//             return false
//         }
//     }
//     return true
// }
// // console.log(p([5,5,4,5,5,5,5]))
// function asending(arr:number[]){
//     var temp:number;
//     for(var i=0;i<arr.length;i++){
//         for(var j=i+1;j<arr.length;j++){
//             if(arr[i]>arr[j]){
//                 temp=arr[j];
//                 arr[j]=arr[i];
//                 arr[i]=temp;
//             }
//         }
//     }
// }
// // console.log(asending([1,4,67,3,4,8,9]))
// var arr=[10,12,34,54];
// function Removearr(){
//     var posion=1
//     for(let i=posion;i<arr.length-1;i++){
//         arr[i]=arr[i+1]
//     }
//      arr.length=arr.length-1;
//      return arr;
// }
// console.log(Removearr())
// var str:number[]=[4,3,7,8,43]
// str.forEach((val,index)=>{
//     console.log(val+2)
// })
// str.filter((val,index)=>{
//     console.log(val>5+index);
// })
// //   . Fixed to
// var x:number=12.44555;
// console.log(x.toFixed(2))
// // Parsing into number
// var str:string="fgfgf"
// var z=Number(str)
// // console.log(typeof z)
// var Arr:number[]=[1,2,3,4,5,6,7]
// // 1-Push Method 
// Arr.push(9);
// console.log(Arr)  //
// //Pop method
// Arr.pop();
// console.log(Arr)
// //unshift method
// Arr.unshift(0)   ; 
// console.log(Arr)
// //Index of
// console.log(Arr.indexOf(2));  //o/p 1
// //shift 
// Arr.shift()
// console.log(Arr)
// Slice method
// var Arr:number[]=[11,45,76,89,34,34,56,76]
// console.log(Arr.indexOf(34));
// console.log(Arr.slice(0))
// console.log(Arr.slice(2,5))
// console.log(Arr.slice(1,6))
// console.log(Arr.slice(1))
// console.log(Arr.slice(7))
// //Splice
// var Arr:number[]=[11,45,76,89,34,34,56,76]
// // Arr.splice(2,1,30)
// // // console.log(Arr);
// Arr.splice(3,3,66,666,6666)
// console.log(Arr);
// Arr.splice(5)
// console.log(Arr);
// console.log(Arr.slice(2))
// var Arr:number[]=[11,45,76,89,34,34,56,76]
// Arr.forEach((val,index)=>{
//     console.log(val*2);
// })
// // console.log(Arr)
// let obj="harsh"
// let arr=Array.from(obj)
// console.log(arr)
/*
var BikeDetails = [
    {bike_name:"Shine",bike_price:20000,bike_mileage:"50 Km"},
    {bike_name:"Unicorn",bike_price:60000,bike_mileage:"60 Km"},
    {bike_name:"Pulsar",bike_price:70000,bike_mileage:"55 Km"},
    {bike_name:"Apache",bike_price:80000,bike_mileage:"45 Km"},
   ];
   
   interface Bike{
    bike_name:string,
    bike_price:number,
    bike_mileage:string}

    var BikeDetailsNewArr:Bike[]=[];

    BikeDetails.forEach((value:Bike,index)=>{
        BikeDetailsNewArr.push(value);

    })
    console.log(BikeDetailsNewArr);

    var filterarray=BikeDetailsNewArr.filter((value:Bike,index)=>{
        if( parseInt(value.bike_mileage)>=55){
            return true

        }
        else{
            return false
        }
    })
    console.log(filterarray)
    */
// var Bikedetails=[{name:"harsh", designation:"angular developerr", Age:20, skill:"html"},
// {name:"nik", designation:"Apllication engg", Age:24, skill:"sql"}];
// Bikedetails.push({name:"gani", designation:"javar developerr", Age:26, skill:"java"})
// Bikedetails.push({name:"paja", designation:"html css developerr", Age:28, skill:"html css"})
// console.log(Bikedetails)
// interface Bike
//     {name:string, designation:string, Age:number, skill:string}
// var filterarr=Bikedetails.filter((value:Bike,index)=>{
//     if (value.Age>24){
//         return true
//     }
//     else {false}
// })
// console.log(filterarr)
/*
    class person{
         firstname:string="";
         lastname:string="";
         age:number;
         ismarried:boolean;
        firstmethod(){
            this.firstname="harsh";
            this.lastname="jagdale";
            this.age=43;
            this.ismarried=false;
            // console.log(firstname)
        }

        Secondmethod(){
            console.log(this.firstname)

        }
    }
    var obj=new person;
    obj.firstmethod()
    obj.Secondmethod()*/
// class book{
//     bookname:string;
//     bookprice:number;
//     firstmethod(x:string,y:number){
//         this.bookname=x;
//         this.bookprice=y;
//     }
//     secondmethod(){
//         console.log(this.bookname,this.bookprice)
//     }
// }
// var obj=new book;
// obj.firstmethod("bible",50);
// // obj.secondmethod()
// class even{
//     firstmethod(x:number){
//         if(x%2==0){
//             console.log("even");
//         }
//         else {
//             console.log("odd");
//         }
//     }
// }
// var z=new even;
//     // z.firstmethod(10)
// class Parent{
//     productName:string;
//     productPrice:number;
//     country?:string;
//     constructor(product_name:string,product_price:number,Country?:string){
//      this.productName=product_name;
//      this.productPrice=product_price;
//      this.country=Country;
//     }
// }
// class child extends Parent{
//     constructor(product_name:string,product_price:number,Country?:string){
//         super(product_name,product_price,Country)
//         // this.productName=product_name;
//         // this.productPrice=product_price;                inheritance kelyavr fakt he nahi kel tr chalt mhnje 
//         // this.country=Country;                              declaration vachate
//     }
//     setmethod(){
//         if(this.country=="USA"){
//         console.log(`The product name is ${this.productName} the price is ${this.productPrice} Doller`)
//     }
//     else if(this.country=="India"){
//         console.log(`The product name is ${this.productName} the price is ${this.productPrice} Rupee`)
//     }
//     else{
//         console.log(`The product name is ${this.productName} the price is ${this.productPrice}`)
//     }
// }}
// var childobj=new child("mobile",700,"USA");
// childobj.setmethod()
// var childobj2=new child("laptop",700,"India");
// childobj2.setmethod()
var Number1 = [10, 29, 11, 43, 37];
var substract = Number1.reduce(function (acc, value) {
    return acc + value;
});
console.log(substract);
