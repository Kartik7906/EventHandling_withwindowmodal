const model = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');

const close_modelbtn = document.querySelector('.close-modal');
const showmodel = document.querySelectorAll('.show-modal');
console.log(showmodel);

const closekrdomodelko =  function(){
    model.classList.add('hidden');
    overlay.classList.add('hidden');
}

for(let i=0; i< showmodel.length; i++){
    showmodel[i].addEventListener('click', function() {
        console.log('You have click the button');
        model.classList.remove('hidden');
        overlay.classList.remove('hidden');
    });

    close_modelbtn.addEventListener('click', closekrdomodelko);

    overlay.addEventListener('click', function(){
        model.classList.add('hidden');
        overlay.classList.add('hidden');
    });

    document.addEventListener('keydown', function(e){
        console.log(e.key);

        if(e.key === 'Escape'){
            if(!model.classList.contains('hidden')){
                closekrdomodelko();
            }
        }
    })
}

