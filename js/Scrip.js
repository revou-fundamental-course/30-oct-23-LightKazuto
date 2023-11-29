window.onload = () => {
    let button = document.querySelector("#btn");

    button.addEventListener("click", calculateBMI);
};

function clearInput(event) {
    var allInputs = document.querySelectorAll('input');
    allInputs.forEach(singleInput => singleInput.value = '');

    var hapus = document.querySelector('result');
    document.getElementById("result").innerHTML= "";

}

function calculateBMI() {

    let height = parseInt(document.querySelector("#height").value);

    let weight = parseInt(document.querySelector("#weight").value);

    let age = parseInt(document.querySelector("#age").value);

    let result = document.querySelector("#result");


    if (weight === "" || isNaN(weight))window.alert ("Provide a valid Weight!!!");

    else if (height === "" || isNaN(height))window.alert ("Provide a valid Height!!!");

    else if (age === "" || isNaN(age))window.alert ("Provide a valid Age!!!");

    else{

        let bmi = (weight / ((height * height) 
                            / 10000)).toFixed(2);

        if (bmi < 18.5)
            result.innerHTML =
                `<div>${bmi}</div><br> Berat Badan Dibawah Rata-rata.<br><br>
                <div>Tingkatkan konsumsi protein untuk mencapai berat badan ideal.</div>
                perlu makan makanan bergizi dan tingkatkan frekuensi makan agar mencapai ideal.
                <div>Tingkatkan aktivitas dan berolahraga secara teratur, dan lakukan pola hidup sehat</div>`;
 
        else if (bmi >= 18.5 && bmi < 24.9) 
            result.innerHTML = 
                ` <div>${bmi}</div><br> Berat Badan Ideal.<br><br>
                <div>Pertahankan pola makan saat ini agar tetap dalam kondisi optimal</div>.
                Untuk mempertahankan BMI normal, lakukan aktifitas fisik 3 kali dalam seminggu

`;
        
        else if (bmi >= 25.0 && bmi < 29.9) 
            result.innerHTML = 
                `<div>${bmi}</div><br> Berat Badan berlebih<br><br>.
                <div>Jaga pola makan dan kurangi makanan tinggi gula dan lemak agar mencapai berat ideal.</div>
                Tingkatkan aktivitas dan berolahraga secara teratur.
                <div>Lakukan pola hidup sehat (tidak merokok, tidak minum beralkohol)</div>`;
               
 
        else result.innerHTML =
            `<div>${bmi}</div><br> Berbahaya Anda Obesitas <br> <br>
            <div> anda lebih baik merubah pola hidup dan makan</div>`;
    }   

};