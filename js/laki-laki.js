window.onload = () => {
    let button = document.querySelector("#btn");
 
    button.addEventListener("click", calculateBMI);
};

function calculateBMI() {
    
    let weight = parseInt(document
        .querySelector("#weight").value);

    let height = parseInt(document
            .querySelector("#height").value);
    
    let result = document.querySelector("#result");


    if (height === "" || isNaN(height)) 
        result.innerHTML = "isi kolom di atas!";
 
    else if (weight === "" || isNaN(weight)) 
        result.innerHTML = "isi kolom di atas!";
 

    else {
 
        let bmi = (weight / ((height * height) 
                            / 10000)).toFixed(2);
 
        if (bmi < 18.6) result.innerHTML =
            `Berat Badan Dibawah Rata-rata : <span>${bmi}</span>`;
 
        else if (bmi >= 18.6 && bmi < 24.9) 
            result.innerHTML = 
                `Berat Badan Ideal : <span>${bmi}</span>`;
 
        else result.innerHTML =
            `Berat Badan berlebih (obesitas) : <span>${bmi}</span>`;
    }
}