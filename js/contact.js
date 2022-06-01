function sendEmail(){
    window.location.href = "mailto:daniel.waldman@post.idc.ac.il";
   }

function validate() {
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const phone = document.getElementById('phone');
    const msg = document.getElementById('msg');
    if( name.value.length < 3 ) {
        alert( "Please provide your full name!" );
        return false;
    }
    let at = email.value.indexOf("@");
    let dot = email.value.lastIndexOf(".");

    if (at < 1 || ( dot - at < 2 )) {
        alert("Please enter correct email")
        return false;
    }
    if(phone.value.length !== 10) {
        alert( "Please provide a legitimate number!" );
        return false;
    }
    if( msg.value === "" ) {
        alert( "Please provide a Message!" );
        return false;
    }
    return true;
}

function saveFile(){
    if (validate() === false) {
        return
    }
    // Get the data from each element on the form.
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const phone = document.getElementById('phone');
    const msg = document.getElementById('msg');

    // This variable stores all the data.
    let data =
        '\r Name: ' + name.value + ' \r\n ' +
        'Email: ' + email.value + ' \r\n ' +
        'Phone: ' + phone.value + ' \r\n ' +
        'Message: ' + msg.value;

    // Convert the text to BLOB.
    const textToBLOB = new Blob([data], { type: 'text/plain' });
    const sFileName = 'formData.txt';	   // The file to save the data.

    let newLink = document.createElement("a");
    newLink.download = sFileName;

    if (window.webkitURL != null) {
        newLink.href = window.webkitURL.createObjectURL(textToBLOB);
    }
    else {
        newLink.href = window.URL.createObjectURL(textToBLOB);
        newLink.style.display = "none";
        document.body.appendChild(newLink);
    }

    newLink.click();
}