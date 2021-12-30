//  class Account {
//         constructor (name,accno,balance){
//             this.name = name;
//             this.accno = accno;
//             this.balance = balance;
//         }
//             getbalance(){
//                 return `the balance is: ₹${this.balance}`;
            
//     }
//     withdraw(amount){
//         if (this.balance >= amount) {
//             this.balance = this.balance - amount;
//             return this.getbalance();
//         } else {
//             return `insufficient balance. ${this.getbalance()}`;
//                 }
//     }
//  }  
//     const vijay = new Account ("vijay", 150, 100000);
//     const kumar = new Account ("kumar", 151 , 200000);
//     const ganesh = new Account ("ganesh", 153 , 80000);
    
//      console.log(vijay.withdraw(30000));
//      console.log(kumar.withdraw(20000));
//      console.log(ganesh.withdraw(10000));
 // ---------------------------------------task-01-------------------------------------------------//
//  class Account {
//         constructor (name,accno,balance){
//             this.name = name;
//             this.accno = accno;
//             this.balance = balance;
//         }
//             getbalance(){
//                 return `the balance is: ₹${this.balance}`;
            
//     }
//     deposite(amount){
//             this.balance = this.balance + amount;
//             return this.getbalance();
        
//     }
//  }  
//     const vijay = new Account ("vijay", 150, 100000);
//     const vani = new Account ("vani", 151 , 200000);
//     const ganesh = new Account ("ganesh", 153 , 80000);
    
//      console.log(vijay.deposite(30000));
//      console.log(vani.deposite(20000));
//      console.log(ganesh.deposite(10000));
//----------------------------------------task-02-------------------------------------------------------------------------//
//  const getcountries = () =>{
//      console.log(" Getting countries spanish language......");
//      const xhr = new XMLHttpRequest();
//      xhr.open("GET","http://restcountries.com/v3.1/all");
//      xhr.send();
//      xhr.responseType = "json";
//      xhr.onload =() =>{
//          const countries = xhr.response;
//          console.log("Full data",countries);
//          const countriesNames = countries.map((country)=>country.name.common);
//          console.log(countriesNames);
//          const spanishcn = countries.filter((country)=>country.language.spanish);
//          console.log(spanishcn);
//          const populationhigh = countries.filter((country)=> country.population>10000000);
//          console.log(populationhigh);
//      };
//     };
//     getcountries();
//----------------------------------------------------------------------------------------------------------------------------------//