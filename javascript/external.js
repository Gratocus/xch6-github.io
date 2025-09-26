//user_name = window.prompt("Please enter your name", "Type your name here");
//document.getElementById('username').innerHTML = user_name;
var webmaps = [
  ["Nullschool", "https://earth.nullschool.net/#current/wind/surface/level/orthographic",
  "The user interface is very intuitive. I can easily locate looking around the globe and hovering over buttons tells me what they do. I would not change anything, because the application works well and provides accurate information for anybody to use. "],
  ["PewResearch", "https://www.pewresearch.org/religious-landscape-study/",
   "The user interface is intuitive. I can easily find and select areas that I want to find data about. I wouldn’t change anything because the map is very well made and is interactive to the user’s mouse. I would consider showing the data in map form; however this may not be seen as necessary to the creators"],
];

function welcome()
{
  let a = "Please enter your name.";
  let b = "Type your name here.";
  // A prompt box is used to prompt users to input a value before entering a page.
  user_name = window.prompt(a, b);
  message = "<h1>Hello, welcome to my webpage, " + user_name + "!</h1>"
  return message
}
document.write(welcome());

function webmap_table()
{
  document.write("<table width=100%>");
  for (var row=0; row < webmaps.length; row++)
  {
    document.write("<tr>");
    for (var column=0; column < webmaps[0].length; column++)
    {
      document.write("<td>" + webmaps[row][column] + "</td>");
    }
    document.write("</tr>");
  }
  document.write("</table>");
  return "";
}
