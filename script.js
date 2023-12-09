const btns1 = document.querySelectorAll('.btn1');
const btns2 = document.querySelectorAll('.btn2');
const form = document.querySelector('#myForm');

form.addEventListener('submit', function(event) {
  event.preventDefault();
 
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  //var message = document.getElementById('message').value;
 
  alert('Сообщение отправлено!');
  form.reset();

  form.classList.remove('on');
  form.classList.add('disabled');
});


btns1.forEach(btn => {
  btn.addEventListener('click', () => {
    if (form.classList.contains('disabled')) {
      form.classList.remove('disabled');
      form.classList.add('on');  
    }  
  })
})

btns2.forEach(btn => {
  btn.addEventListener('click', () => {
    if (form.classList.contains('disabled')) {
      form.classList.remove('disabled');
      form.classList.add('on');  
    }  
  })
})

