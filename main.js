let submitBtn = document.querySelector("#submit"),
  myInput = document.querySelector("#api"),
  showData = document.querySelector(".show-data");

submitBtn.addEventListener("click", () => {
  fetchData();
});

function fetchData() {
  if (myInput.value === "")
    showData.innerHTML = "<span> Please Write Something First </span>";
  else {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        showData.innerHTML = "";

        data.forEach((data) => {
          let div = document.createElement("div");
          let dataUserId = document.createTextNode(
            `User Id : ${data.userId} ,`
          );
          let dataId = document.createTextNode(`Propre Id : ${data.id} ,`);
          let dataTitle = document.createTextNode(`Quote : ${data.title} `);

          div.className = "mydiv";
          if (myInput.value === "id") {
            div.appendChild(dataUserId);
            showData.appendChild(div);
          } else if (myInput.value === "quotes") {
            div.appendChild(dataTitle);
            showData.appendChild(div);
          } else if (myInput.value === "User id") {
            div.appendChild(dataId);
            showData.appendChild(div);
          }else {
            showData.innerHTML = "<span> No Results </span>"
          }
          
        });
      });
  }
}
