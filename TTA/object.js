const bankAccount={ 
    accountholder:"isma",
    accountBalance:0,
 
 deposit:function(amount){
 if(amount>0){
    this.accountBalance += amount
 }
 else{
    console.log("invalide Amount")
  }
 },
  checkBalance :function(){
   console.log('your accountBalance is ${this.accountbalance}');
  },
  withdrow  :function(cash){
        if(cash>this.accountBalance)
        console.log ("there is no enough fund");
        else {
            this.accountBalance -= cash;
            console.log ('your Rmaining Balance is ${ this.accountBalance }');
        }
    }

}
console.log(bankAccount.accountHolder);
 
bankAccount.deposit (100000)
bankAccount.checkBalance ();
bankAccount.withdrow (5000)