let kulaniciadi = prompt ("Adınız Nedir ?") 
let myName = document.querySelector("#myName") 
myName.innerHTML=kulaniciadi

function showTime ()
{   
    let anlık = new Date();  
    
    let saat = anlık.getHours(); 
    
    let dakika = anlık.getMinutes(); 
    
    let saniye = anlık.getSeconds(); 
    
    var d = new Date(); 
    
    var gunler= ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"];  
    
    let myClock = document.querySelector("#myClock") 
    
    myClock.innerHTML= saat + ":" + dakika +":" + saniye + " " + gunler[d.getDay()]; 
}
setInterval(showTime,100); 