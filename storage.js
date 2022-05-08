$(document).ready(function(){
  
  //Storage for Novels
  const novels = [
    {
      title:"The Devil Does Not Need to Be Defeated",
      image:"https://novelstoragehome.files.wordpress.com/2022/05/the-devil-does-not-need-to-be-defeated.jpg",
      sourceLink:"the-devil-does-not-need-to-be-defeated.html"
    },
    {
      title:"The Devil Does Not Need to Be Defeated",
      image:"https://novelstoragehome.files.wordpress.com/2022/05/the-devil-does-not-need-to-be-defeated.jpg",
      sourceLink:""
    },
    {
      title:"The Devil Does Not Need to Be Defeated",
      image:"https://novelstoragehome.files.wordpress.com/2022/05/the-devil-does-not-need-to-be-defeated.jpg",
      sourceLink:""
    },
    {
      title:"The Devil Does Not Need to Be Defeated",
      image:"https://novelstoragehome.files.wordpress.com/2022/05/the-devil-does-not-need-to-be-defeated.jpg",
      sourceLink:""
    },
    {
      title:"The Devil Does Not Need to Be Defeated",
      image:"https://novelstoragehome.files.wordpress.com/2022/05/the-devil-does-not-need-to-be-defeated.jpg",
      sourceLink:""
    },
    {
      title:"The Devil Does Not Need to Be Defeated",
      image:"https://novelstoragehome.files.wordpress.com/2022/05/the-devil-does-not-need-to-be-defeated.jpg",
      sourceLink:""
    },
    {
      title:"The Devil Does Not Need to Be Defeated",
      image:"https://novelstoragehome.files.wordpress.com/2022/05/the-devil-does-not-need-to-be-defeated.jpg",
      sourceLink:""
    },
    {
      title:"In the After School Library A Refined Lady’s Romantic Comedy Cant Be Compromised",
      image:"images/In-the-After-School-Library-A-Refined-Ladys-Romantic-Comedy-Cant-Be-Compromised.jpg",
      sourceLink:""
    }
  ];
  
  //Put items on the list
  var ul = $(".add"); //ul2 = $("#list");

  for(var x in novels){
    var li = document.createElement("li");
    var a = document.createElement("a");
    var img = document.createElement("img");
    var span = document.createElement("span");
    
    //Put attributes
    a.setAttribute("href","");
    img.setAttribute("src","");
    
    //Place list values
    img.src = novels[x].image;
    a.href = novels[x].sourceLink;
    a.innerHTML = novels[x].title;
    
    //Place list on container
    span.append(a);
    li.append(img);
    li.append(span);
    ul.append(li);
  }
 
});