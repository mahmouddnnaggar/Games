import { gameAPI } from "./gameAPI.module.js";
import { detailsAPI } from "./gameDetails.module.js";

export class UI {
  displayGame(list) {
    let cartone = "";
    for (let i = 0; i < list.length; i++) {
      cartone += `
        <div class="col-lg-3 col-md-4">
          <div class="card p-2" data-id="${list[i].id}">
            <img src="${list[i].thumbnail}" class=" card-img-top" alt="">
            <div class="card-body pt-2">
              <div class="title d-flex justify-content-between align-items-center">
                <h3 class="card-title m-0">${list[i].title}</h3>
                <h5 class="free">Free</h5>
              </div>
              <p class="card-text text-center mt-3">${list[i].short_description}</p>
            </div>
            <div class="card-footer d-flex justify-content-between">
              <h5 class="m-0">${list[i].genre}</h5>
              <h5 class="m-0">${list[i].platform}</h5>
            </div>
          </div>
        </div>
      `;
    }
    document.querySelector("#displayGame").innerHTML = cartone;
  }

  detailsEvent() {
    let cards = document.querySelectorAll(".card");
    cards.forEach((card) => {
      card.addEventListener("click", (event) => {
        console.log(event.currentTarget.getAttribute("data-id"));
        let gameApi = new detailsAPI();
        gameApi.getGameDetails(event.currentTarget.getAttribute("data-id"));
      });
    });
  }

  displayGamaDetails(list) {
    let container = `
      <div class="col-md-5">
        <img src="${list.thumbnail}" class="w-100" alt="">
      </div>
      <div class="col-md-7 text-white">
        <h4 class="mb-3">Title: ${list.title}</h4>
        <h6 class="mb-3">Category: <span class="badge rounded-pill text-bg-primary">${list.genre}</span></h6>
        <h6 class="mb-3">Platform:  <span class="badge rounded-pill text-bg-primary">${list.platform}</span></h6>
        <h6 class="mb-3">Status:  <span class="badge rounded-pill text-bg-primary">${list.status}</span></h6>
        <h6 class="mb-3">${list.description}</h6>
        <a href="${list.freetogame_profile_url}" class="btn btn-outline-warning text-white">Show Game</a>
      </div>
    `;
    document.querySelector("#displayGameDetails").innerHTML = container;
  }

  closs() {
    let btn = document.querySelector("#btn");
    btn.addEventListener("click", () => {
      document.querySelector(".displayDetails").classList.replace("d-flex", "d-none");
    });
  }
}
