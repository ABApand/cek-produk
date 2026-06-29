function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var data = JSON.parse(e.postData.contents);
  
  // Menambahkan baris: IP, Latitude, Longitude, Waktu
  sheet.appendRow([
    data.ip, 
    data.lat, 
    data.lng, 
    new Date()
  ]);
  
  return ContentService.createTextOutput("Sukses");
}