function validate() {

    var first = document.forms["myform"]["yourname"].value;
    var email = document.forms["myform"]["email"].value;
    var phone = document.forms["myform"]["phone"].value;
    var whatsapp = document.forms["myform"]["whatsapp"].value;
    var date = document.forms["myform"]["date"].value;
    // var education = document.forms["myform"]["education"].value;
    var education = document.getElementById("education");
    var department = document.getElementById("department");

    if (first == "")
    {
        alert("Enter your Name");
        return false;
    }

    if (!isNaN(first)) {
        alert("Name should be in characters Only");
        return false;
    }

        // email validation

        var at = email.indexOf("@");
        var dot = email.lastIndexOf(".");
        if (at < 1 || dot < at + 2 || dot + 2 >= email.lenght) {
            alert("Not a valid Email");
            return false;
        }






    //phone no. validation

    if (phone == "")
    {
        alert("Enter phone number");
        return false;
    }

    if (isNaN(phone)) {
        alert("Phone number should be in digit.");
        return false;
    }

    if (phone.length != 10) {
        alert("Must be 10 digit number");
        return false;
    }
    //Whatsappphone no. validation

    if (whatsapp == "")
    {
        alert("Enter WhatsApp number");
        return false;
    }

    if (isNaN(whatsapp)) {
        alert("phone no.should be in digit.");
        return false;
    }

    if (whatsapp.length != 10) {
        alert("must be 10 digit no.");
        return false;
    }

        // DOB validation

        if (date == "")
        {
            alert("Enter Date of Birth");
            return false;
        }

}