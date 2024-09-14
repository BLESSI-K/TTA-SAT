class bankAccount{
    constructor(accountHolder,accountBalance=0){
        this.accountHolder=accountHolder;
        this.accountBalance =accountBalance;
    }
    deposit(amount){
    if(amount>0){
        this.accountBalance += amount
     }
     else{
        console.log("invalide Amount")
      }
    } 
    
    withdrow (cash){
        if(cash>this.accountBalance)
        console.log ("there is no enough fund");
        else {
            this.accountBalance -= cash;
            console.log ('your Rmaining Balance is ${ this.accountBalance }');
        }
    }
   checkBalance() {
    console.log('your accountBalance is ${this.accountbalance}');
   }
}
const patelAccount=new bankAccount('patel')
const idrisAccount=new bankAccount('idris')

patelAccount.deposite(50000)
idrisAccount.deposite(2000000)
idrisAccount.checkBalance();
console.log (idrisAccount.accountHolder); 