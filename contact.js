function cekData(event) {
    event.preventDefault();
    let nama = document.getElementById("nama");
    let mail = document.getElementById("mail");
    let nomer = document.getElementById("nomer");
    let subjek = document.getElementById("subjek");
    let pesan = document.getElementById("pesan");

    let getB = cekMail(mail.value);

    if(nama.value == ""){
        nama.setAttribute("class", "form-control is-invalid");
        nama.focus();
    }else if(mail.value == "" || getB === false){
        mail.setAttribute("class", "form-control is-invalid");
        mail.focus();
    }else if(nomer.value == ""){
        nomer.setAttribute("class", "form-control is-invalid");
        nomer.focus();
    }else if(subjek.value == ""){
        subjek.setAttribute("class", "form-control is-invalid");
        subjek.focus();
    }else if(pesan.value == ""){
        pesan.setAttribute("class", "form-control is-invalid");
        pesan.focus();
    }else{
        let data1 = document.getElementById("sucCont");
        data1.setAttribute("class", "alert alert-info")
        data1.innerHTML = "Thanks to <b>" + nama.value + "</b>, has given comments to us"; 
    }
}

function clearDefault(data){
    if(data.value != ""){
        data.setAttribute("class", "form-control is-valid");
    }
}

function cekMail(data){
    let regex = /@/
    let regex2 = /\./
    if(regex.test(data) === true && regex2.test(data) === true){
        return true;
    }else{
        return false;
    }

}

function clearMail(data){
    let a = data.value;
    let getB = cekMail(a);

    if(getB === true){
        data.setAttribute("class", "form-control is-valid");
    }else{
        data.setAttribute("class", "form-control is-invalid");
    }
}

let dataUtama = [
    ["Yudei Koto", "Lorem ipsum dolor sit amet, consectetur adipiscing elit."],
    ["Mikoto Ai", "Nam sit amet aliquam velit. Suspendisse potenti. Donec fringilla tincidunt iaculis."]
];

function tampilData(){

    let pages = document.getElementById("contentCom");
    pages.innerHTML = "";
    for (let i = 0; i < dataUtama.length; i++) {
        pages.innerHTML += "<tr><td><b>" + dataUtama[i][0] + "</b></td></tr>";
        pages.innerHTML += "<tr><td>" + dataUtama[i][1] + "</td></tr>";
    }
}

function comHere(event){
    event.preventDefault();

    let nama = document.getElementById("nama");
    let pesan = document.getElementById("pesan");

    if(nama.value == ""){
        nama.setAttribute("class", "form-control is-invalid");
        nama.focus();
    }else if(pesan.value == ""){
        nama.setAttribute("class", "form-control is-invalid");
        nama.focus();
    }else{
        let aDt = [nama.value, pesan.value];
        dataUtama.unshift(aDt);
        tampilData();
    }
}