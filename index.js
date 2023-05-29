// target the value
const countValue=document.querySelector('#counter');
const increment=()=>{
    // get the value from ui
    let value=parseInt(countValue.innerText);
    // update the value
    value+=1;
    // set the value on ui
    countValue.innerText=value;
};

const decrement=()=>{
    // get the value from ui
    let value=parseInt(countValue.innerText);
     // update the value
    value-=1;
    // set the value on ui
    countValue.innerText=value;
};