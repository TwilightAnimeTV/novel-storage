
  let novel = [
  {
    title:"My Plain-looking Fiance is Secretly Sweet with Me",sourceLink:"my-plain-looking-fiance-is-secretly-sweet-with-me-light-novel.html"
  },
  {
    title:"The World of Otome Games is Tough For Mobs",sourceLink:"toughformobs.html"
  },
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
  
  li.appendChild(a);
  ul.appendChild(li);
}

