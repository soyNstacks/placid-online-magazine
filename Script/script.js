//scroll to top button ----------------------------------------
var scrollButton = document.getElementById("topPagebtn");

//button when user scrolls down 20px from the top of the document 
window.onscroll = function() 
{
    pageScroll()
};

function pageScroll() 
{
    
    if (document.documentElement.scrollTop > 25 || document.body.scrollTop > 25) 
        {
            scrollButton.style.display = "block";
        } 
    
    else 
        {
            scrollButton.style.display = "none";
        }
    
}

// back to the top when user clicks on the button ---------------
function topOfPage() 
{   
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}


// font size adjuster ------------------------------------------
function sizeAdjuster(x) 
{
    document.getElementsByTagName("body")[0].className = x;

};

// coursera lecture
//adjust size of AAA elements ----------------------------------
document.getElementById("smallA").onclick = function() {    sizeAdjuster("small")   };
document.getElementById("mediumA").onclick = function() {   sizeAdjuster("medium") };
document.getElementById("largeA").onclick = function() {    sizeAdjuster("large")   };


// menu icon for navigation -------------------------------------
//https://www.w3schools.com/howto/howto_css_menu_icon.asp : closing the menu with 'X' 
function hamburgToggle() {
    
    var x = document.getElementById("menuIcon")
    x.classList.toggle("transformation");
                
};


// https://www.w3resource.com/ : conditional statement was adopted and changed so as to conform to webpage elements, with different variables used in addition to newly implemented functions like "checkFields()" etc
// subscription form  -------------------------------------------
function check_formData()
{
    var errorMessage = checkFields();

    if (errorMessage.length > 0)
        {
            alert(errorMessage); //print error message in alert box
        }
    
    else
        {
            var input_firstName = document.getElementById ("firstName");
            var title = retrieve_radioValue();

            var subscriptionSubmitted  = "";
            subscriptionSubmitted += "Thank you for subscribing! We have received your submission of particulars. ";
            subscriptionSubmitted += "A confirmation email will be sent to you within the next three business days.";

            alert(subscriptionSubmitted); //print successful submission in alert box
          
            //return to index.html after alert click 
            window.location.replace("/index.html");

      }
};

function retrieve_radioValue()
{
    var radioArray = document.getElementsByClassName ("title");
    var selectedTitle = "";
    
    for (var i=0; i < radioArray.length; i++)
        {
            if(radioArray[i].checked == true)
                {
                    selectedTitle = radioArray[i].value;
                }
        } 

  return(selectedTitle);
    
};

function checkFields()
{
    var input_email = document.getElementById ("email"); 
    var input_firstName = document.getElementById ("firstName");
    var input_lastName = document.getElementById ("lastName");
    var errorMessage = "";
  
    if (input_firstName.value.trim().length <= 0) //when first name input field is unfilled
        {
            errorMessage += "\n First Name Invalid! \n";
            input_firstName.style.background = " #ff4d4d";
        }
    
    else
        {
            input_firstName.style.background = "white";
        }

    
    if (input_lastName.value.trim().length <= 0) //when last name input field is unfilled
        {
            errorMessage += "\n Last Name Invalid! \n";
            input_lastName.style.background = "#ff4d4d";
        }
    
    else
        {
            input_lastName.style.background = "white";
        }
        
    var emailStringval = input_email.value.trim();

    if (emailStringval.length <= 0 || !emailValidation(emailStringval)) //when last name input field is unfilled
        {
            errorMessage += "\n Email Invalid! \n";
            input_email.style.background = "#ff4d4d";
        }
    
    else
        {
          input_email.style.background = "white";
            
        }
    
    errorMessage += check_EmailfreqBoxes(); 
    errorMessage += check_interestBoxes();

    return(errorMessage);
};

// https://www.w3resource.com/javascript/form/email-validation.php
function emailValidation(value) 
{
    var validFormat = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    //check if email format is valid 
    
    if (validFormat.test(value))
        {
            return(true);
        }
    
    else
        {
            return (false);
        }
    
};

function check_interestBoxes ()
{
    var checkboxArray = document.getElementsByClassName ("sub-topic");
    var checkBoxHeaderElement = document.getElementById ("checkBoxHeader");

    var boxSelected = false;

    for (var i=0; i < checkboxArray.length; i++)
        {
            if(checkboxArray[i].checked == true)
                {
                    boxSelected = true;
                }
        }

    var error_text = "";

    if(boxSelected == false) //if checkbox is not selected
        {
            checkBoxHeaderElement.style.backgroundColor = "#ff4d4d";
            error_text += "\n Please select at least 1 option in interested topics \n";
        }
    
    else
        {
            checkBoxHeaderElement.style.backgroundColor = "white";
        }

  return(error_text); 

}

function check_EmailfreqBoxes ()
{
    var emailFreqBoxes = document.getElementById ("frequency-period");
    var boxHeaderElement = document.getElementById ("comboBoxHeader");

    var error_text = "";

    if(emailFreqBoxes.value.length <= 0) //if box is not selected
        {
            boxHeaderElement.style.backgroundColor = "#ff4d4d";
            error_text += "\n Please select an option for email updates \n";
        }
    
    else
        {
            boxHeaderElement.style.backgroundColor = "white";

        }
    return(error_text);
    
}