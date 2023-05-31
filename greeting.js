

//visitor


function userName() {


    let user = document.getElementById('uname').value;
    let pwd = document.getElementById('pword').value;

   //var url= '/carider4.html?name=' + encodeURIComponent(FormData.user);

    if (!user || !pwd) {alert('invalid username/password');}
    else if 
    (user.length < "3" || pwd.length < "6") {alert('invalid username/password');}
    else {
        console.log(user);
    localStorage.setItem('login', user);
        return window.location.href='carider4.html';
    }
    
    }


    
// ... append other form fields as parameters if needed

// Redirect to the other HTML file with the form data
//window.location.href = url