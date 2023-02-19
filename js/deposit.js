// add click event handler to the deposit button
document.getElementById('btn-deposit').addEventListener('click', function(){

    

    // get new deposit amount using function
    const newDepositValue = getInputDataById('deposit-field');

    // validation
    if(isNaN(newDepositValue) || newDepositValue < 0){
        return alert('please enter a valid number...')
    }

    // get previous deposit amount value using by function
    const previousDepositValue = getElementValueById('deposit-total'); 

    // calculate and set total deposit value using function
    const currentDepositValue = newDepositValue + previousDepositValue;
    setNewElementData('deposit-total', currentDepositValue);

    // calculate and set total deposit value using function
    const previousBalance = getElementValueById('balance-total');
    const totalBalance = previousBalance + newDepositValue;
    setNewElementData('balance-total', totalBalance)
})