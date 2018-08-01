


function nombre() {
    let jugador = prompt("¿Cuál es tu nombre?", "Nombre");
    console.log(jugador);
    $('.nombreJugador').append('<div class="text-jugador">' + 'Hola ' + jugador + '</div>' + '<div class="text-jugador">' + 'Mucha suerte' + '</div>' );
}



//2. obtengo los numeros de forma aleatoria 
let imagenes=['adaLovelace.jpg', 'adaLovelace.jpg', 'adaLovelace.jpg', 'adaLovelace.jpg', 'chienS.png', 'chienS.png', 'chienS.png', 'chienS.png', 'graceHopper.jpg', 'graceHopper.jpg', 'graceHopper.jpg', 'graceHopper.jpg']

const desordenadas = imagenes.sort(function() {
    return Math.random() - 0.5});


let arrayImg=[];
let contador=0;
let arrayParejas=[];



     $('img').on('click', function(event) {
      let id = event.target.id;
      let clickImg = desordenadas[id];
      let index= $(this).index();//posición
      
       //a este id, agarra el atributo src y ponele el valor desordenadas[el id de lasimagenes clickeadas]
      let imgNuevas= $('#' + id).attr('src', clickImg);
      let imagenClick=$(this).attr('src');
      //console.log(123, imagenClick);
      let ada=$('img').attr('src');
      //console.log(ada);
      let objetoFotos={
        id:'',
        src:'',
        position:'',
        img: ''
      }


      objetoFotos.id=clickImg
      objetoFotos.src=imagenClick
      objetoFotos.position=index
      objetoFotos.img = $(this)


      //console.log($(this).attr('src'));//this traigo el objeto de eso que estoy haciendo
     arrayImg.push(objetoFotos);

     if(arrayImg.length < 1) {//el array tiene un solo elemento hace esto){
      arrayImg.push(objetoFotos);
     }

     //console.log(arrayImg[0].src);

     if (arrayImg.length > 1 && arrayImg.length ==2) {
       if (arrayImg[0].src == arrayImg[1].src){
        arrayImg = [];
        contador= contador + 1;
        arrayParejas.push(arrayImg);
        if(arrayParejas.length==6){
        	alert("¡Felicitaciones, ganaste!");

        }


      } else{
          //console.log('no son iguales')
          setTimeout(function(){
          (arrayImg[0].img.attr('src', 'ada.png'));
          (arrayImg[1].img.attr('src', 'ada.png'));
          arrayImg = [];
          contador= contador + 1;
          if (contador == 24){
            alert("Ups, intentalo de nuevo :(")

        }


}, 2000)


     }


    }
   })

console.log(arrayParejas);











