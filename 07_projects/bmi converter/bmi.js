const form=document.querySelector("form");

form.addEventListener('submit',function (e){
    e.preventDefault();
    const height=parseInt(document.querySelector("#height").value)
    const weight=parseInt(document.querySelector("#weight").value)
    const results=document.querySelector('#results')
})

if (height==="" ||height < 0 ||isNaN(height)) {
    results.innerHTML=`Please give a valid height ${height}`
}else
if (weight==="" ||weight < 0 ||isNaN(weight)) {
    results.innerHTML=`Please give a valid height ${weight}`
}
// }
// console.log("BMI Converter")
// const height=document.querySelector("#height").innerText
// console.log("Height",height);
// const weight=document.querySelector("#weight").innerText
// console.log("Weight",weight);

const calculate=()=>{
    const bmi=Math.ceil((weight) / (height*height));
    console.log
    console.log("BMI is ",bmi)

}