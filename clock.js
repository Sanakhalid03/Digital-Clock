function displayTime(){
     let date=new Date();
     let hrs=date.getHours()
     let min=date.getMinutes()
     let sec=date.getSeconds()
let session=document.getElementById("session")
     const days=[
          "Sunday",
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
     ]
     const currentday=days[date.getDay()]

     if(hrs >= 12){
       session.innerHTML="PM"
     }else{
           session.innerHTML="AM"
     }
     if(hrs>12){
          hrs=hrs-12
     }
     if(hrs<10){
          hrs= "0"+ hrs
     }
     if(min<10){
          min= "0"+ min
     }
     if(sec<10){
          sec= "0"+ sec
     }
     document.getElementById("day").innerHTML =currentday
     document.getElementById("hours").innerHTML = hrs
     document.getElementById("min").innerHTML = min
     document.getElementById("sec").innerHTML = sec

}
setInterval(()=>{
displayTime()

},1000)



  


