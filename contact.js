
//Form Validation:
let sendButton = document.getElementById("sendd");
sendButton.addEventListener('click', validateForm);

function validateForm() {
  var fullNameInput = document.getElementById('Name');
  var emailInput = document.getElementById('Email');
  var subjectInput = document.getElementById('Subject');
  var messageInput = document.getElementById('Message');

  var Name = fullNameInput ? fullNameInput.value : "";
  var Email = emailInput ? emailInput.value : "";
  var Subject = subjectInput ? subjectInput.value : "";
  var message = messageInput ? messageInput.value : "";


  var NameValue = Name.trim();
  var EmailValue = Email.trim();
  var SubjectValue = Subject.trim();
  var messageValue = message.trim();

  if (NameValue === "") {
fullNameInput.style.border="thin solid red"
    // return false;
  } else {
    fullNameInput.style.border="none"
  }

 // Validate Email
var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if (EmailValue === "") {
    emailInput.style.border="thin solid red"

} else if(!emailRegex.test(EmailValue)) {
    emailInput.style.border="thin solid red"

}
else {
    emailInput.style.border="none"

}

let formelement = document.querySelector(".contact-form")
  // Validate Subject
  if (SubjectValue === "") {
    subjectInput.style.border="thin solid red"

    // return false;
  } else {
subjectInput.style.border="none"
  }

  // Validate Comment
  if (messageValue === "") {
    messageInput.style.border="thin solid red"

    // return false;
  } else {
    messageInput.style.border="none"

}

  if (NameValue !== "" && EmailValue !== "" && emailRegex.test(EmailValue) && SubjectValue !== "" && messageValue !== "") {
    const success = document.getElementById('success');

    var parmas = {
      from_name : NameValue,
      email: EmailValue,
      subject:SubjectValue,
      message:messageValue
       }
       emailjs.send('service_jbuvzog','template_vlnxzr7',parmas).then(function(ress){
        success.style.display="flex"
       })
     
   

   
 
    
  
  }
}

    
