let x = document.querySelector('.x');
let o = document.querySelector('.o');
let boxes = document.querySelectorAll('.box');
let buttons = document.querySelectorAll('#buttons-container button');
let messageContainer = document.querySelector('#message');
let messageText = document.querySelector('#message  p');
let secondPlayer;

let player1 = 0;
let player2 = 0;


for(let i = 0; i < boxes.length; i++) {

    boxes[i].addEventListener('click', function() {

        let elemento =  verificaPlayer(player1, player2);


        if(this.childNodes.length === 0) {
            let cloneElemento = elemento.cloneNode(true);

            this.appendChild(cloneElemento);

            if(player1 === player2) {
                player1++;
            } else {
                player2++;
            }
        }

    });

}

function verificaPlayer(player1, player2) {

    if(player1 === player2) {

        elemento = x;

    } else {

        elemento = o;
    }

    return elemento;
};