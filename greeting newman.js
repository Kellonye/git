function nUserName() {


    let nUser = document.getElementById('fname').value;
    let nUlastname = document.getElementById('lname').value;
    let nUEmail = document.getElementById('emlname').value;
    let nUPNumber = document.getElementById('pnum').value;
    let nUPassWord = document.getElementById('nupword').value;
    let confPswd = document.getElementById('cpword').value;

   //var url= '/carider4.html?name=' + encodeURIComponent(FormData.user);

    if (!nUser || !nUlastname ||!nUEmail ||!nUPNumber ||!nUPassWord ||!confPswd) {alert('incomplete signup details!');}
    else if 
    (nUser.length < "3" || nUlastname.length < "3") {alert('Entered Name does not meet minimum requirements');}
    else if (nUPassWord.length < "6") {alert('entered password does not meet password requirement!')}
    else if (nUPassWord !== confPswd) {alert('entered passwords do not match!');}
    else if (nUPNumber.length < 11) {alert('enter phone number in valid local or international format!');}
    else {
        console.log(nUser);
    localStorage.setItem('login', nUser);
        return window.location.href='carider4.html';
    }
    
    }
