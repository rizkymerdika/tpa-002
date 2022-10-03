let bmiForm = document.getElementById('bmi-form')
let weight = document.getElementById('weight')
let height = document.getElementById('height')
let content = document.getElementById('content')
let p = document.createElement('p')
let bmiResult
let bmiCategories
content.append(p)

bmiForm.addEventListener("submit", (event) => {
    event.preventDefault()
    bmiResult = weight.value/(height.value/100)**2

    if(bmiResult < 18.5){
        bmiCategories = "Underweight"
    }else if(bmiResult >= 18.5 && bmiResult <= 24.9){
        bmiCategories = "Normal"
    }else if(bmiResult >= 25 && bmiResult <= 29.9){
        bmiCategories = "Overweight"
    }else{
        bmiCategories = "Obesity"
    }

    p.style.fontFamily = 'Roboto, sans-serif'
    p.style.color = '#ffff'
    p.innerHTML = `Your BMI is <b>${bmiResult.toFixed(1)}</b> which means You are <b>${bmiCategories}</b>`
})