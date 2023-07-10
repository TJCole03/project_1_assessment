const plusButton = document.querySelector('#plus')
const minusButton = document.querySelector('#minus')
const topNum = document.querySelector('#topNum')
const inputNum = document.querySelector('#inputNum')

plusButton.addEventListener('click', function () {
    increment(); 
    console.log('clicked plus');
})

minusButton.addEventListener('click', function () {
    decrement(); 
    console.log('clicked minus');
})



function increment(topNum, inputNum) {
    
        return topNum + inputNum
}

function decrement(topNum, inputNum) {
    return topNum - inputNum
}