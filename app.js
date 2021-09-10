
const express=require("express");
const bodyParser=require("body-parser");
//const date=require(__dirname + "/date.js");
const app=express();
let items=["Assessment 1","Water","Apti Preparation"];
let workItems=[];
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/",function(req,res)
{

  // var currentDay=today.getDay()

// if(currentDay===6 || currentDay===0)
// {
//   day="weekend"
// }
// else{
//   day="Weekdays"
// }

// switch (currentDay) {
//   case 0:
//     day="Sunday";
//     break;
//     case 1:
//       day="Monday";
//       break;
//       case 2:
//         day="Tuesday";
//         break;
//         case 3:
//           day="Wednesday";
//           break;
//           case 4:
//             day="Thursday";
//             break;
//             case 5:
//               day="Friday";
//               break;
//               case 6:
//                 day="Saturday";
//                 break;
//   default:
//     console.log('Error');
// }

//Using Javascript

//let day= date()
let today=new Date();
  var day="" ;

  var options={
    weekday: "long",
    day: "numeric",
    month: "long"
  };

  day=today.toLocaleDateString("en-US",options)

res.render("list", {listTitle: day,newlistitem: items});
});



app.post("/",function(req,res)
{
  let item=req.body.newItem;

  if(req.body.list==="Work")
  {
      workItems.push(item);
      res.redirect("/work");
  }
else
{
  items.push(item);
    res.redirect("/");
}

})
app.get("/work", function(req,res)
{
  res.render("list",{listTitle: "Work list", newlistitem: workItems});
});

// app.post("/", function(req,res){
// let item= req.body.newItem;
// items.push(item)
//   //console.log(item);
//   res.redirect("/");
// })

app.listen(3000,function()
{
  console.log("App is running on port 3000");
})
