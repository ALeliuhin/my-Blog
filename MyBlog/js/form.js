function validateForm() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    let correct = 1;
    
    if (name == "" || email == "" || message =="") {
        alert("Please check the inputs");
        correct = 0;
        return false;
    }

    if (correct == 1){
        alert("SUCCESS!!!");
    } 


    // let emailPattern = ... ;
    
    // if (!emailPattern.test(email)) {
    // alert("...");
    // correct = 0 ;
    // return false;
    // }
    // ...
    // if(correct == 1 ){
    // alert("Success!");
    // }
    // return true;
}