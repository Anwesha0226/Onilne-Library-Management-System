function Reg()
{
    var firstname = document.getElementById("fname").value;
    var lastname = document.getElementById("lname").value;
    var userid = document.getElementById("uid").value;
    var password = document.getElementById("pass").value;
    var gender = document.getElementById("gen").value;
    var address = document.getElementById("adds").value;
    var phno = document.getElementById("phn").value;
    var email = document.getElementById("mail").value;

    var letters = /^[A-Za-z]+$/;

    if(firstname==""||lastname==""||userid==""||password==""||gender==""||address==""||phno=="")
        {
            alert("First name, Last Name, Userid, Password, Gender, Address and Contact Number is must required.");
            return false;
        }
    else if(!letters.test(firstname))
        {
            alert("Please enter your name properly.");
            return false;
        }
    else if(!letters.test(lastname))
        {
            alert("Please enter your name properly.");
            return false;
        }
    else if(userid.length<5||userid.length>12)
        {
            alert("User id must be of length 5 to 12");
            return false;
        }
    else if(password.length<7||password.length>12)
        {
            alert("Password must be of length 7 to 12");
            return false;
        }
    else if(gender == "")
        {
            alert("Must select gender");
            return false;
        }
    else if(isNaN(phno))
        {
            alert("Contact number must be numeric only.");
            return false;
        }
    else if(phno.length!=10)
        {
            alert("Contact number should be 10 digits");
            return false;
        }
    else if(!email.includes('@'))
        {
            alert("Enter valid email id.");
            return false;
        }
    else
    {
        true;
    }
}
