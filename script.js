// const rangeInput = document.querySelectorAll(".range-input input");
// console.log(rangeInput);
// const priceInput = document.querySelectorAll(".price-input input");
// console.log(priceInput);
// const range = document.querySelector(".slider .progress");
// console.log(range)
// let priceGap = 100;
// console.log(priceGap)

// priceInput.forEach(input =>{
//     input.addEventListener("input", e =>{
//         let minPrice = parseInt(priceInput[0].value);
//         let maxPrice = parseInt(priceInput[1].value);
        
//         if((maxPrice - minPrice >= priceGap) && maxPrice <= rangeInput[1].max){
//             if(e.target.className === "input-min"){
//                 rangeInput[0].value = minPrice;
//                 range.style.left = ((minPrice / rangeInput[0].max) * 100) + "%";
//             }else{
//                 rangeInput[1].value = maxPrice;
//                 range.style.right = 100 - (maxPrice / rangeInput[1].max) * 100 + "%";
//             }
//         }
//     });
// });

// rangeInput.forEach(input =>{
//     input.addEventListener("input", e =>{
//         let minVal = parseInt(rangeInput[0].value),
//         maxVal = parseInt(rangeInput[1].value);

//         if((maxVal - minVal) < priceGap){
//             if(e.target.className === "range-min"){
//                 rangeInput[0].value = maxVal - priceGap
//             }else{
//                 rangeInput[1].value = minVal + priceGap;
//             }
//         }else{
//             priceInput[0].value = minVal;
//             priceInput[1].value = maxVal;
//             range.style.left = ((minVal / rangeInput[0].max) * 100) + "%";
//             range.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
//         }
//     });
// });

const rangeInput = document.querySelectorAll(".range-input input");
// console.log(rangeInput);
const priceInput = document.querySelectorAll(".price-input input");
// console.log(priceInput);
const range = document.querySelector(".slider .progress");
// console.log(range)
let priceGap = 100;
// console.log(priceGap)

priceInput.forEach(input =>{
    input.addEventListener("input", e =>{
        let minPrice = parseInt(priceInput[0].value);
        console.log(minPrice);
        let maxPrice = parseInt(priceInput[1].value);
        console.log(maxPrice);
        if((maxPrice - minPrice >= priceGap) && maxPrice <= rangeInput[1].max){
            if(e.target.className === "input-min"){
                rangeInput[0].value = minPrice;
                range.style.left = ((minPrice / rangeInput[0].max) * 100) + "%";
            } else{
                rangeInput[1].value = maxPrice;
                range.style.right = 100- (maxPrice / rangeInput[1].max) * 100 + "%";
            }
        }
    });
});

rangeInput.forEach(input =>{
    input.addEventListener("input", e =>{
        let minVal = parseInt(rangeInput[0].value);
        console.log(minVal)
        let maxVal = parseInt(rangeInput[1].value);
        console.log(maxVal)
        if((maxVal - minVal) < priceGap){
            if(e.target.className === "range-min"){
                rangeInput[0].value = maxVal - priceGap
            }else{
                rangeInput[1].value = minVal + priceGap;
            }
        }else{
            priceInput[0].value = minVal;
            priceInput[1].value = maxVal;
            range.style.left = ((minVal / rangeInput[0].max) * 100) + "%";
            range.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
        }
    });
});
