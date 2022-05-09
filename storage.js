$(document).ready(function(){
  
  //Storage for Novels  
  const novels = [
    {
      title:"Gimai Seikatsu",
      image:"https://cdn.novelupdates.com/images/2021/01/Gimai-Seikatsu.jpg",
      sourceLink:"Gimai-Seikatsu.html"
    },
    {
      title:"Chitose-kun wa Ramune Bin no Naka",
      image:"https://cdn.novelupdates.com/images/2019/11/Chitose-kun-wa-Ramune-Bin-no-Naka.jpg",
      sourceLink:"Chitose-kun-wa-Ramune-Bin-no-Naka.html"
    },
    {
      title:"Takane No Hana",
      image:"https://cdn.novelupdates.com/images/2021/05/Takane-No-Hana-LN.jpg",
      sourceLink:"Takane-No-Hana.html"
    },
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
  var ul = $(".add");
  var ul2 = $("#add2");

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
    
    var li2 = document.createElement("li");
    var a2 = document.createElement("a");
    var img2 = document.createElement("img");
    var span2 = document.createElement("span");
    
    //Put attributes
    a2.setAttribute("href","");
    img2.setAttribute("src","");
    a2.innerHTML = novels[x].title;
    
    span2.append(a2);
    li2.append(span2);
    ul2.append(li2);
  }
 
});