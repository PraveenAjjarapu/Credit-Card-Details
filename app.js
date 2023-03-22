const no = document.getElementById('no').value;
const month = document.querySelector('.month').value;
const year = document.querySelector('.year').value;


var num = document.forms['frm'].no.value;

const ent = document.querySelector('.notEnt')
const btn = document.getElementById('confirm');

btn.addEventListener('click', () => {
    
    if(document.forms['frm'].holder.value === "") {
        ent.classList.remove('hid');
    } else {
        ent.classList.add('hid');
    }


    if(document.forms['frm'].month.value <= 0 || document.forms['frm'].month.value > 12){
        alert('Month lies between 1-12')
    }else if(document.forms['frm'].year.value < 0 || document.forms['frm'].year.value > 99) {
        alert('Year lies between 0-99')
    }else if(document.forms['frm'].month.value === "" || document.forms['frm'].year.value === "") {
        document.getElementById('blank1').style.display = 'block';
    }else {
        document.getElementById('blank1').style.display = 'none';
    }


    if(document.forms['frm'].cvc.length != 3) {
        alert('Last 3 digits of your card')
    }else if(document.forms['frm'].cvc.value === "") {
        document.getElementById('blank2').style.display = 'block';
    } else {
        document.getElementById('blank2').style.display = 'none';
    }

    
    if(num.length != 16) {
        alert('Card number must be 16 digits');
    }else if(isNaN(num) || document.forms['frm'].no.value === "") {
        document.getElementById('no').style.display = 'block';
    } else {
        document.getElementById('no').style.display = 'none';
    }


    if(document.getElementById('no').style.display === 'none' && document.getElementById('blank2').style.display === 'none' && document.getElementById('blank1').style.display === 'none' && ent.classList.contains('hid')) {

        document.getElementById('forms').style.display = 'none';
        document.getElementById('verified').style.display = 'block';
        

        document.querySelector('.num').innerHTML = document.getElementById('no').value;
        document.getElementById('month').innerHTML = document.querySelector('.month').value;
        document.getElementById('year').innerHTML = document.querySelector('.year').value;
        document.getElementById('name').innerHTML = document.getElementById('holder').value;
    }
    
})


    // if(document.forms['frm'].first.value === "") {
    //     one.style.display = 'block';
    // }

