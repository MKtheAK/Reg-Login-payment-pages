const firebaseConfig = {
    apiKey: "AIzaSyC2Ol9YvS-wsWOnXptJx-H5_swDbhcWYp8",
    authDomain: "intern-e829c.firebaseapp.com",
    projectId: "intern-e829c",
    storageBucket: "intern-e829c.appspot.com",
    messagingSenderId: "499284209843",
    appId: "1:499284209843:web:8aec9cd499bb95bfc000c6"
  };

firebase.initializeApp(firebaseConfig);

var InternDB = firebase.database().ref("Intern");

document.getElementById("Intern").addEventListener("submit",submitForm);

function submitForm(e){
    e.preventDefault();

    var username = getElementVal('username');
    var password = getElementVal('password');

    console.log(username, password);
}

const getElementVal = (id) => {
    return document.getElementById(id).value;
}

function validation(){
    var a = document.register.newpassword.value;
    var text = document.register.fullname.value;
    if(text==null || text==''){
        alert("please enter name");
        return false;
    }
    else if(a.length<6){
        alert("password must be 6 digits or greater than 6 digits");
        return false;
    }
}