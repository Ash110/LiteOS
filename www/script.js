$(document).ready(function(){ 
    setInterval(function(){
        var date = new Date();
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        hours = hours < 10 ? '0'+hours : hours;
        minutes = minutes < 10 ? '0'+minutes : minutes;
        $(".time-hours").text(hours);
        $(".time-minutes").text(minutes);
        $(".time-ampm").text(ampm);
        var day = date.getDay();
        var dayText = "Sunday";
        if(day === 0){
            dayText="Sunday";
        }else if(day===1){
            dayText="Monday";
        }else if(day===2){
            dayText="Tuesday";
        }else if(day===3){
            dayText="Wednseday";
        }else if(day===4){
            dayText="Thursday";
        }else if(day===5){
            dayText="Friday";
        }else if(day===6){
            dayText="Saturday";
        }
        $(".time-day").text(dayText);
    },5000);
});
