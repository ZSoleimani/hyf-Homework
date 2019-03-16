function getEventWeekday(eventDay){
   let weekDays=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
   let today = new Date().getDay(); // getting the number of today 
   var EventDay=(today + eventDay)%7; // Mat calculation
   return weekDays [EventDay];
}
console.log(getEventWeekday(8));
