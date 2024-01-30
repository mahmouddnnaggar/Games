import { UI } from "./gameUI.module.js";

export class gameAPI {
  constructor(nameGame = "mmorpg") {
    this.nameGame = nameGame;
    let links = document.querySelectorAll(".navbar ul li a");
    links.forEach((link) => {
      link.addEventListener("click", async (event) => {
        // Show loading indicator
        document.querySelector(".loading").classList.replace("d-none", "d-flex");
        // Fetch games for the selected category
        await this.getGames(event.target.dataset.category);
        // Hide loading indicator after fetching is complete
        document.querySelector(".loading").classList.replace("d-flex", "d-none");
        // Update the active link
        document.querySelector(".active")?.classList.remove("active");
        link.classList.add("active");
      });
    });
  }

  options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "728d3c8058msh92db760a01d4830p126468jsn96e65539a592",
      "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
    },
  };

  async getGames(game) {
    try {
      let data = await fetch(
        `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${game || this.nameGame}`,
        this.options
      );
      let res = await data.json();
      let ui = new UI();
      ui.displayGame(res);
      ui.detailsEvent();
    } catch (error) {
      console.error("Error fetching games:", error);
    }
  }
}
