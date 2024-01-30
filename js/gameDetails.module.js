import { UI } from "./gameUI.module.js";

export class detailsAPI {
  options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "728d3c8058msh92db760a01d4830p126468jsn96e65539a592",
      "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
    },
  };

  async getGameDetails(id) {
    try {
      document.querySelector(".loading").classList.replace("d-none", "d-flex");
      let data = await fetch(
        `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`,
        this.options
      );
      console.log("data");
      document.querySelector(".loading").classList.replace("d-flex", "d-none");
      let res = await data.json();
      let ui = new UI();
      ui.displayGamaDetails(res);
      document.querySelector(".displayDetails").classList.replace("d-none", "d-flex");
      ui.closs();
    } catch (error) {
      console.error(error);
    }
  }
}
