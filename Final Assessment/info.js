function validation() {
    let email = document.getElementById("mail").value;
    let Age = document.getElementById("age").value;
   
    // First Name and Last Name 
    let f_name = document.getElementById("fname").value;
    let l_name = document.getElementById("lname").value;
    var isUppercase = /^[A-Z]/;
    var letters = /^[A-Za-z]+$/;

    // Password Validation
    let passwd = document.getElementById("pwd").value;
    let c_passwd = document.getElementById("cpwd").value;
    var passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;

    //Username Validation
    let u_name = document.getElementById("uname").value;
    var isAlphabet = /^[A-Za-z]/;


    if (f_name == "" || l_name == "" || passwd == "" || c_passwd == "" || u_name == "" || email == "" || Age == "")// No Space Validation
    {
        alert("No space values allowed!!!");
        alert("Try Again!!!\n");
        return false;
    }
    // First Name and Last Name 1st letter cap Validation
    else if (!isUppercase.test(f_name) || !isUppercase.test(l_name)) {
        alert("First Letter Must be UpperCase for First Name and Last Name !!!\n Try Again!!!");
        //alert("Try Again!!!\n");
        return false;
    }
    else if (!letters.test(f_name) || !letters.test(l_name)) {
        alert("Only Aplhabets for First Name and Last Name !!!\n Try Again!!!");
        //alert("Try Again!!!\n");
        return false;
    }
    
    
        //
        //Validating Password characters and Length
    //
    else if (passwd.length < 6 || u_name.length<6)// Password Length Validation
    {
        alert("Password and Username must be atleast 6 charcters\n");
        alert("Try Again!!!\n");
        return false;
    }
    else if (!passw.test(passwd) || !isUppercase.test(passwd)) {
         alert('Error!! Passwords must start with an Alphabet, and must contain at least 1 digit, and 1 uppercase characters.\n Try Again!!!');
       // alert("Try Again!!!\n");
        return false;
    }
    else if (passwd != c_passwd)//Password and confirm Password matching Validation
    {
         alert("Password and Confirm Password Values doesn't match!!!\n Try Again!!!");
        //alert("Try Again!!!\n");
        return false;
    }
    else if (!isAlphabet.test(u_name)) {
        alert("Error: Username must start with alphabets!\n Try Again!!!");

        return false;
    }
     
    else { return true; }
}