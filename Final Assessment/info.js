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
var count=0;
var flag=true;

    if (f_name == "" || l_name == "" || passwd == "" || c_passwd == "" || u_name == "" )// No Space Validation
    {
        //alert("No space values allowed!!!");
        document.querySelector('#errors').innerHTML = "<br># No space values allowed!!! ";
        count++;
        flag=false;
       // return false;
    }
    // First Name and Last Name 1st letter cap Validation
    if (!isUppercase.test(f_name) || !isUppercase.test(l_name)||!letters.test(f_name) || !letters.test(l_name)) {
        // document.querySelector.("First Letter Must be UpperCase for First Name and Last Name !!!\n Try Again!!!");
        document.querySelector('#errors').innerHTML += "<br><br># First Letter Must be UpperCase for First Name and Last Name !!! Alphabets Only!!! <br><br><br><br>";
        count++;
        flag=false;
        //return false;
    }
    
    //
    //Validating Password characters and Length
    //
    if (passwd.length < 6 || !passw.test(passwd) || !isUppercase.test(passwd))// Password Length Validation
    {
        document.querySelector('#errors').innerHTML += "<br><br><br># Password must be atleast 6 charcters and Passwords must start with an Alphabet, and must contain at least 1 digit, and 1 uppercase characters!!! <br>";
        count++;
        flag=false;
        
        //alert("Password must be atleast 6 charcters and Passwords must start with an Alphabet, and must contain at least 1 digit, and 1 uppercase characters!!!\n");
       // alert("Try Again!!!\n");
        //return false;
    }
    
    if (passwd != c_passwd)//Password and confirm Password matching Validation
    {
        document.querySelector('#errors').innerHTML += "# Password and Confirm Password Values doesn't match!!!";
        count++;
        flag=false;
    
        // alert("Password and Confirm Password Values doesn't match!!!\n Try Again!!!")
       // return false;
    }
    //
    //Username
    //
    if (u_name.length<6 || !isAlphabet.test(u_name)) {
        document.querySelector('#errors').innerHTML += "<br><br><br><br># Username must start with alphabets!!!";
        count++;
        flag=false;
        
        //alert("Error: Username must start with alphabets!\n Try Again!!!");
        //return false;
    }
     
    //else { return true; }
    if (flag == true) {
        alert("***Your Form Is successfully submitted.***\n Now you will be Redirected to another link!!!");
        return flag;
    }
}