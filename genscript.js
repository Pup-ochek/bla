
document.querySelector("#button_gen").onclick = function(){     //Функция кнопки сгенерировать

    document.getElementById('canvas').innerHTML = '';   //создание пространства
    let info = document.getElementById('text').value;   //Значение textarea
    let name = document.getElementById('name').value;   //Значение input
    let num = document.getElementById('num').value;    //Значение input

    document.getElementById('canvas').append(QRCreator(`${name}- ${info} `,{modsize:2,margin:-1}).result);   //генерация qr-кода 
     
}

document.querySelector("#button_download").onclick = function(){    //функция кнопки скачать

    let info = document.getElementById('text').value;   //Значение textarea
    let name = document.getElementById('name').value;   //Значение input
    let num = document.getElementById('num').value;    //Значение input
    let i = 1;//счетчик
    


    //Цикл для скачки кодов
    while (num >= i){
        let code = prompt("Введите код объекта: ");
        let qrCode = QRCreator(`${name}-${i} - ${code} \n ${info} `,{modsize:-1,margin:1, mask:1,data: info});   // генерация кода
        qrCode.download( `${name} - ${i}`, "png" ); //скачка
        i = i+1;    //увеличение счетчика

    }
}








