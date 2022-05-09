$(document).ready(function(){
  
  //Storage for Novels  
  const novels = [
    {
      title:"Is It Too Much to Ask to Be Supported by a Spoiled Older Instructor?",
      image:"https://cdn.novelupdates.com/images/2020/10/Is-It-Too-Much-to-Be-Supported-by-a-Spoiled-Older-Instructor.jpg",
      sourceLink:"Is-It-Too-Much-to-Be-Supported-by-a-Spoiled-Older-Instructor.html"
    },
    {
      title:"A Gal Who Looks Good in an Apron is Unfair!",
      image:"https://cdn.novelupdates.com/images/2022/01/A-Gal-Who-Looks-Good-in-an-Apron-is-Unfair_1642143570.jpg",
      sourceLink:"A-Gal-Who-Looks-Good-in-an-Apron-is-Unfair.html"
    },
    {
      title:"The Devil Does Not Need to Be Defeated",
      image:"https://novelstoragehome.files.wordpress.com/2022/05/the-devil-does-not-need-to-be-defeated.jpg",
      sourceLink:"the-devil-does-not-need-to-be-defeated.html"
    },
    {
      title:"Maou Reijou no Kyouiku Gakari",
      image:"https://novelstoragehome.files.wordpress.com/2022/05/116131887_987968381637090_1786161356230904797_n.jpg",
      sourceLink:"maou-reijou-no-kyouiku-gakari.html"
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
