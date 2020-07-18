let name = [];
let comment = [];

function onSubmitPesan(event) {
    event.preventDefault();

    let nama = document.getElementById('nama').value;
    let pesan = document.getElementById('pesan').value;

    
        name.unshift(nama);
        comment.unshift(pesan);

        let data = '';
        //let dataComment = '';

        for (let i = 0 ; i < name.length ; i++) {
            data += '<b style="color: #00CED1;">' + name[i] + '</b><br>' ;
            data += '<b>Comment : </b><br>' + comment[i] + '<br><hr>';
        }

         document.getElementById("tampil").innerHTML = data;

        
    }