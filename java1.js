// JavaScript source code
function checkform() {
    var f = document.getElementById('form');
    var cansubmit = true;

    for (var i = 0; i < f.length; i++) {
        if (f[i].value.length == 0) cansubmit = false;
    }

    if (cansubmit) {
        document.getElementById('submitbutton').disabled = false;
    }
}
function save() {
    var username = document.getElementById('u').value;
    

    localStorage.setItem('Username', username);
   
    onload();
}

function benvenuto() {
    var username = localStorage.getItem('Username');
    if (username == null) {
        alert('iscriviti alla news letter');

    }
    else {
        alert('Benvenuto' + ' ' + username);
    }
}
function check() {
    var username = localStorage.getItem('Username');
    
    if (username !== null) {
        let loginForm = document.getElementById('form'); 
        loginForm.style.display = "none";
        let loginButton = document.getElementById('submitbutton');
        loginButton.style.display = "none";
        let logoutButton = document.getElementById('unsbmitButton');
        logoutButton.style.display = "inline";
        
    }
}
function unsubscribe() {
    var logoutButton = document.getElementById('unsubmitButton');
    if (localStorage.getItem('Username') !== null ) {
        localStorage.clear();
    }
}
//non sono riuscita a creare a lunzione per far comparire il tasto " unsubscribe " una volta loggato l'utente
