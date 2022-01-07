let send = document.querySelector('#send');
let wind = document.querySelector('.container');

send.onclick = ()=> {
  var ask = window.confirm("Are you sure you send request");
  if (ask === true){
    window.location.href = 'رابط الصفحه';
  }else{
    window.location.href = 'رابط الصفحه';
  }
}