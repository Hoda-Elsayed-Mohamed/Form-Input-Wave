let emailLabel = document.getElementById('email');
let passwordLabel = document.getElementById('password');
// const labels = document.querySelectorAll('label')

emailLabel.innerHTML = emailLabel.textContent.replace(/\S/g, "<span>$&</span>")
passwordLabel.innerHTML = passwordLabel.textContent.replace(/\S/g, "<span>$&</span>")

const spans = document.querySelectorAll('span');

for(let i = 0; i< spans.length; i++){

 spans[i].style.transitionDelay = (i* 0.05) + 's';
 
}

    
    if(emailLabel.value|| passwordLabel.value){
    emailLabel.style.transform ='translateY(-100px)'
    passwordLabel.style.transform ='translateY(-100px)'
    }
