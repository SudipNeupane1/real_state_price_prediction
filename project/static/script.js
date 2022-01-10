function getBathValue() {
    // Get no of bathrooms
    var uiBathrooms = document.getElementsByName("uiBathrooms");
    for (var i in uiBathrooms) {
      if (uiBathrooms[i].checked) {
        return parseInt(i) + 1;
      }
    }
    return -1; // Invalid Value
  }
  
  function getBHKValue() {
    // Get no of BHK's
    var uiBHK = document.getElementsByName("uiBHK");
    for (var i in uiBHK) {
      if (uiBHK[i].checked) {
        return parseInt(i) + 1;
      }
    }
    return -1; // Invalid Value
  }
  
  function onClickedEstimatePrice() {
    var sqft = document.getElementById("uiSqft");
    var bhk = getBHKValue();
    var bathrooms = getBathValue();
    var location = document.getElementById("uiLocations");
    var estPrice = document.getElementById("uiEstimatedPrice");
  
    var url = "http://127.0.0.1:5000/predict_home_price";
    //   var url = "/api/predict_home_price"; // only Deployment
  
    $.post(
      url,
      {
        total_sqft: parseFloat(sqft.value),
        bhk: bhk,
        bath: bathrooms,
        location: location.value,
      },
      function (data, status) {
        estPrice.innerHTML =
          "<h2>" + data.estimated_price.toString() + " Lakh</h2>";
      }
    );
  }
  
  function onPageLoad() {
    var url = "http://127.0.0.1:5000/get_location_names";
    //   var url = "/api/get_location_names"; // only Deployment
    $.get(url, function (data, status) {
      // function to render the location names
      if (data) {
        var locations = data.locations;
        var uiLocations = document.getElementById("uiLocations");
        $("#uiLocations").empty();
        for (var i in locations) {
          var opt = new Option(locations[i]); // Add location to drop drown list
          $("#uiLocations").append(opt);
        }
      }
    });
  }
  // document.getElementById('demo').innerHTML = "This was created with Javascript";
// function generatePDF(){
//     const element = document.getElementById('invoice');
//     var opt = {
//         margin :1,
//         filename:'myfile.pdf',
//         html2canvas:{scale:2},
//         jsPDF:{unit:'in',format:'letter',orientation:'portraint'}
//     }
//     html2pdf(element,opt)
    
// }
// var doc = new jsPDF();
// var specialElementHandlers = {
//     '#editor': function (element, renderer) {
//         return true;
//     }
// };

// //margins.left, // x coord   margins.top, { // y coord
// $('#generatePDF').click(function () {
//     doc.fromHTML($('uiEstimatedPrice').html(), 15, 15, {
//         'width': 700,
//         'elementHandlers': specialElementHandlers
//     });
//     doc.save('sample_file.pdf');
// });
// function generatePDF() {
//     var doc = new jsPDF();
//     doc.setTextColor(100);
//     doc.text(20,20,'this is gray');
//     doc.save('document.pdf')
//     }

function generatePDF(){
    var doc = new jsPDF();

    // var byid = document.getElementById('bathroom');
   
    
    var elementHTML =$('#uiEstimatedPrice').html();
    var specialElementHandlers={
        '#editor':function(element,renderer){
            return true;
        }
    };
    // doc.text(50,40,document.getElementsById('bathroom').value);
    //doc.fromHTML(50, 40, document.getElementsByClassName("switch-field").value);
    doc.fromHTML(elementHTML,15,15,{
        'width':170,
        'elementHandlers':specialElementHandlers
        
    });
    
    doc.save('sample-document.pdf');
}

window.onload = onPageLoad;
  