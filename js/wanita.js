window.onload = () => {
    let button = document.querySelector("#btn");
 
    button.addEventListener("click", calculateBMI);
};

function resetButton(){
    document.getElementsByClassName("input-section").reset();
}

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
 
        if (bmi < 18.5) result.innerHTML =
            `<div>${bmi}</div> Berat Badan Dibawah Rata-rata.<br><br>
            <div>Tingkatkan konsumsi protein untuk mencapai berat badan ideal.</div>
            perlu makan makanan bergizi dan tingkatkan frekuensi makan agar mencapai ideal.
            <div>Tingkatkan aktivitas dan berolahraga secara teratur, dan lakukan pola hidup sehat</div>`;
 
        else if (bmi >= 18.5 && bmi < 24.9) 
            result.innerHTML = 
                ` <div>${bmi}</div> Berat Badan Ideal.<br><br>
                <div>Pertahankan pola makan saat ini agar tetap dalam kondisi optimal</div>.
                Untuk mempertahankan BMI normal, lakukan aktifitas fisik 3 kali dalam seminggu

`;
        
        else if (bmi >= 25.0 && bmi < 29.9) 
            result.innerHTML = 
                `<div>${bmi}</div>Berat Badan berlebih<br><br>.
                <div>Jaga pola makan dan kurangi makanan tinggi gula dan lemak agar mencapai berat ideal.</div>
                Tingkatkan aktivitas dan berolahraga secara teratur.
                <div>Lakukan pola hidup sehat (tidak merokok, tidak minum beralkohol)</div>`;
               
 
        else result.innerHTML =
            `<div>${bmi}</div> Berbahaya Anda Obesitas <br> <br>
            <div> anda lebih baik merubah pola hidup dan makan</div>`;
    }   
}