var no='';
const formElement = document.querySelector('form#std_form')
var newone = '';
console.log(newone);

const getFormJSON = (form) => {
    const data = new FormData(form);
    return Array.from(data.keys()).reduce((result, key) => {
      result[key] = data.get(key);
      return result;
    }, {});
  };

  const handler = (event) => {
    event.preventDefault();
    const valid = formElement.reportValidity();
    if (valid) {
      const result = getFormJSON(formElement);
      console.log(result);
      no=genrate_enroll();
      downloadObj(result,no);
    }
  }

  function genrate_enroll()
  {
      var text=" ";
      var alph= "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
      var num='0123456789';
      for (var i = 0; i < 3; i++)
    text += alph.charAt(Math.floor(Math.random() *alph.length));

    for (var i = 0; i < 3; i++)
    text += num.charAt(Math.floor(Math.random() * num.length));
    newone = text;
    return text

  }
  formElement.addEventListener("submit", handler);

    function downloadObj(exportObj, exportName){
    var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(exportObj));
    var downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute("href",     dataStr);
    downloadAnchorNode.setAttribute("download", exportName + ".json");
    document.body.appendChild(downloadAnchorNode); // required for firefox
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
}

function get_details(){


$.getJSON( "/home/vaibhav/Downloads/"+document.getElementById('search_data').value+".json", function( data ) {
  document.getElementById('container').hidden=false
  document.getElementById('fname').value=data['fname'];
  document.getElementById('lname').value=data['lname'];
  document.getElementById('gender').value=data['gender'];
  document.getElementById('age').value=data['age'];
  document.getElementById('current').value=data['address'];
  document.getElementById('city').value=data['city']
  document.getElementById('city1').value=data['city1'];;
  document.getElementById('state').value=data['state'];
  document.getElementById('pin').value=data['pin'];
  document.getElementById('pin1').value=data['pin1'];
  document.getElementById('parent').value=data['parent'];
  document.getElementById('permanent').value=data['par_address'];
  document.getElementById('phone').value=data['phone'];
  document.getElementById('email').value=data['email'];
  document.getElementById('std').value=data['std'];
  document.getElementById('math').value=data['math'];
  document.getElementById('science').value=data['science'];
  document.getElementById('ss').value=data['ss'];
  document.getElementById('english').value=data['english'];
  });
}



  function addressFunction(){
      if (document.getElementById("Yes").checked){
          document.getElementById("permanent").value = document.getElementById("current").value;
          document.getElementById("city1").value = document.getElementById("city").value;
          document.getElementById("state1").value = document.getElementById("state").value;
          document.getElementById("pin1").value = document.getElementById("pin").value;
      }
  }

  form.addEventListener('submit', function (e) {
      // prevent the form from submitting
      e.preventDefault();

  });











  // validation

  (function () {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }

        form.classList.add('was-validated')
      }, false)
    })
})()
