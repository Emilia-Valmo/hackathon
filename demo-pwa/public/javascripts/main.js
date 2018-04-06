$(".onClick").show(); {
//   $(".jumbotron").show();
// });

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("./service-worker.js").then(function() {
    console.log("Service Worker Registered");
  });
}

function see(id) {
  fetch(
    `https://raw.githubusercontent.com/akabab/superhero-api/0.2.0/api/id/${id}.json`
  )
    .then(response => response.json())
    .then(res => {
      console.log(res);
      document.getElementById("content").innerHTML = `
      <div class="row">
      <div class="col-lg-6 col-md-6 col-sm-6">
        <div class="card">
          <div class="card-content card-image">
            <img src="${res.images.md}">
          </div>
        <div class="col-lg-6 col-md-6 col-sm-6">
            <div class="row">      
              <span>${res.name}</span>
            </div>
        </div>
      </div>
    </div>
       
      `;
    });
  }
