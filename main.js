let arr = [];

// document.addEventListener("DOMContentLoaded", function (event) {
//         // disable the lower part of the form until we have user input for all values
//     document.getElementById("experience").disabled = true;
   
// })


function formSubmitEvent() {
    let name = document.getElementById("custname").value;
    // let address = document.getElementById("street").value;
    let city = document.getElementById("city").value;
    // let state = document.getElementById("state").value;
    // let zip = document.getElementById("zip").value;
    let paymentPref = document.getElementById("paymentpreferance").value;
  

    // we could do much better validation, but that's not the point of this example!
    if (name.length > 2 && city.length > 2) {        
        let concated = name + " " + city + " " + paymentPref;
        arr.push(concated);
        CustomerInfo();
    }
    else {
        alert("please fill in all fields");
    }
}

function CustomerInfo() {
    let myUl = document.getElementById("myUl");
    myUl.innerHTML = "";

    for(let i=0;i<arr.length;i++)
    {  
        let myli = document.createElement("li");
        myli.appendChild(document.createTextNode(arr[i]));
        myUl.appendChild(myli);
    }
 
}
