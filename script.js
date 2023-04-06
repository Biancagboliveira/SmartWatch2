function clock() {
    var img = document.getElementById("image")
    const areaDoRelogio = document.querySelector(".relogio");
    const horaAgora = new Date(); // informaçoes  referente a tempo//
    const horas = horaAgora.getHours(); //banco horas que esta no pacote//
    const minutos = horaAgora.getMinutes(); //banco de minutos que está no pacote//
    const segundos = horaAgora.getSeconds(); //banco de segundos que está no pacote//
    const formatoHoras = horas.toString().padStart(2, "0"); //transformou meu numero em string(cadeia de caracteres)// //star define o começo da string// //(2) define quantas caracteres vai ter ("0") como termina//
  
    const formatoMinutos = minutos.toString().padStart(2, "0");
    const formatoSegundos = segundos.toString().padStart(2, "0");

    areaDoRelogio.textContent = `${formatoHoras}: ${formatoMinutos}: ${formatoSegundos}`; //`${}` place Holders//

    //constante para colocar a nossa frase no html//
    const frase = document.querySelector('.frase')

    dia = new Array('Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'); //uma variavel onde guardamos uma informação que contem varias informaçoes ou dados//Array é um arranjo, ou estrutura de dados onde armazenamos uma coleção de elementos// 

    mes = new Array('Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro');

    hoje = new Date() //variaçoes relacionadas a tempo//

    frase.innerHTML = `${dia[hoje.getDay()]}, ${hoje.getDate().toString().padStart(2.0)} de ${mes[hoje.getMonth()]} de ${hoje.getFullYear()}`  //contagem sempre começa do zero////
    
    if(formatoHoras >= 0 && formatoHoras < 12){
        document.body.style.backgroundImage = "url(https://images.pexels.com/photos/1183434/pexels-photo-1183434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)"
    
        img.src = "https://w7.pngwing.com/pngs/614/838/png-transparent-cat-kitty-creative-cat-cat.png"


    }

    else if (formatoHoras >=12 && formatoHoras < 18){
        document.body.style.backgroundImage = "url(https://images.pexels.com/photos/1404819/pexels-photo-1404819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)"
        img.src = "https://img1.gratispng.com/20180313/zke/kisspng-cat-amazon-com-dog-pet-toy-cat-jumping-5aa788578b00c6.4695468815209288555694.jpg"

    }

    else{
        document.body.style.backgroundImage= "url(https://images.pexels.com/photos/96938/pexels-photo-96938.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)"
        img.src = "https://images.freeimages.com/images/large-previews/a31/bengal-cat-kitten-looking-up-1336927.jpg"
    }
    ;
    
    
    

    

    }

setInterval(clock, 1000)