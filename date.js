//jshint esversion:6
module.exports= getDate;

function getDate()
{
  let today=new Date();
    var day="" ;

    var options={
      weekday: "long",
      day: "numeric",
      month: "long"
    };

    day=today.toLocaleDateString("en-US",options)

      return day;
}
