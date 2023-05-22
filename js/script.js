function hitungKeliling() {
    var number = document.getElementById('sisi-keliling').value;
    var x = document.getElementById("result-keliling");
    if (number <= 0 || "") {
        document.getElementById('sisi-keliling').style.backgroundColor = 'pink';
        x.style.display = x.style.display != "none" ? "none" : "none"
        alert("Nilai kurang dari 0 atau belum tersisi")
    } else {
        var output_keliling = 4 * number
        document.getElementById('sisi-keliling').style.backgroundColor = 'white';
        x.style.display = x.style.display != "block" ? "block" : "block"
        x.textContent = "Keliling Persegi = " + 4 + " x " + number + " = " + output_keliling + " cm"
    }
}

function hitungLuas() {
    var number = document.getElementById('sisi-luas').value;
    var x = document.getElementById("result-luas");
    if (number <= 0 || "") {
        document.getElementById('sisi-luas').style.backgroundColor = 'pink';
        x.style.display = x.style.display != "none" ? "none" : "none"
        alert("Nilai kurang dari 0 atau belum tersisi")
    } else {
        var output_luas = number * number
        document.getElementById('sisi-luas').style.backgroundColor = 'white';
        x.style.display = x.style.display != "block" ? "block" : "block"
        x.textContent = "Luas Persegi = " + number + " x " + number + " = " + output_luas + " cm"
    }

}


function resetKeliling() {
    var x = document.getElementById("result-keliling");
    x.style.display = x.style.display != "none" ? "none" : "none"
    document.getElementById('sisi-keliling').style.backgroundColor = 'white';
    document.getElementById('sisi-keliling').value = ''
}
function resetLuas() {
    var x = document.getElementById("result-luas");
    x.style.display = x.style.display != "none" ? "none" : "none"
    document.getElementById('sisi-luas').style.backgroundColor = 'white';
    document.getElementById('sisi-luas').value = ''
}