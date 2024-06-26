document.querySelector("button").addEventListener("click", result);

var container = document.createElement("div");
container.setAttribute("Class", "container");

var row = document.createElement("div");
row.setAttribute("Class", "row");

async function result() {
  try {
    row.innerHTML = "";
    var username = document.querySelector(".Search").value;
    var data = await fetch(`https://api.chess.com/pub/player/${username}`);
    var res = await data.json();
    console.log(res);

    var col = document.createElement("div");
    col.setAttribute("class", "answer");
    col.innerHTML = `<div class="card" style="width: 18rem;">
  <div class="card-body">
  <img src="${res.avatar}" class="card-img-top" alt="...">
    <h5 class="card-title">${res.username}</h5>
    <h5>Followers: <p class="card-text">${res.followers}</p></h5>
    <h5>League: <p class="card-text">${res.league}</p></h5>
   <h5>Location: <p class="card-text">${res.location}</p></h5> 
    <h5>For More Details: <a href="${res.url}" class="btn btn-secondary" target="_blank">Click</a></h5>
  </div>
</div>`;

    row.append(col);
    container.append(row);
    document.body.append(container);
  } catch (error) {
    console.log(error);
  }
}
