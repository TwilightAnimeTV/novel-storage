$(document).ready(function(){
  const novel = [
  {
    title:"After My First Love Who is My Classmate Became My Family, My Childhood Friend Became Really Sweet to Me",sourceLink:"After-My-First-Love-Who-is-My-Classmate-Became-My-Family-My-Childhood-Friend-Became-Really-Sweet-to-Me.html"
  },
  {
    title:"Takane No Hana",sourceLink:"Takane-No-Hana-LN.html"
  },
  {
    title:"A Gal Who Looks Good in an Apron is Unfair!",sourceLink:"A-Gal-Who-Looks-Good-in-an-Apron-is-Unfair.html"
  },
  {
    title:"Gimai Seikatsu",sourceLink:"gimai-seikatsu-light-novel.html"
  },
  {
    title:"That Time I Got Reincarnated as a Slime",sourceLink:"that-time-i-got-reincarnated-as-a-slime.html"
  }
];

var ul = document.getElementById("list");
for(var x in novel){
  var li = document.createElement("li");
  li.classList.add("list-group-item");
  var a = document.createElement("a");
  a.setAttribute("href","");
  
  a.innerHTML = novel[x].title;
  a.href = novel[x].sourceLink;
  
  li.append(a);
  ul.append(li);
}

var ul = $("#list"); var arr = $.makeArray(ul.children("li")); arr.sort(function(a, b) { var textA = +$(a).text(); var textB = +$(b).text(); if (textA < textB) return -1; if (textA > textB) return 1; return 0; }); ul.empty(); $.each(arr, function() { ul.append(this); });

});
