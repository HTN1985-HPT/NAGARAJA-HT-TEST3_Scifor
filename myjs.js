function myfun(){
    fetch('https://dummyjson.com/products/1')
    .then(res => res.json())
    .then(product=>{
    console.log(product);

    })
    .catch(error=>{
    console.error('error fatching product:',error);
    });
}