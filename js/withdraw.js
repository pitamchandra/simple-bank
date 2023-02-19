// add click event handler to the withdraw button
document.getElementById('btn-withdraw').addEventListener('click', function(){
    // get new withdraw amount
    const newWithdrawAmount = getInputDataById('withdraw-field');
    if(isNaN(newWithdrawAmount) || newWithdrawAmount < 0){
        return alert('please enter a valid number...')
    }
    // get previous withdraw amount
    const previousWithdrawAmount = getElementValueById('withdraw-total');

    
    

    // calculate and set total balance
    const previousBalance = getElementValueById('balance-total');
    if(newWithdrawAmount > previousBalance){
        return alert('unexpected amount!!! please try to withdraw inside your balance')
    }
    // calculate and set total withdraw
    const totalWithdrawAmount = newWithdrawAmount + previousWithdrawAmount;
    setNewElementData('withdraw-total', totalWithdrawAmount);

    const currentBalance = previousBalance - newWithdrawAmount;
    setNewElementData('balance-total', currentBalance);
    
})