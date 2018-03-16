"use strict";

const Anime = require("./anime");

class AnimeController {
  constructor() {
    this.shows = new Map([
      [1, new Anime(1, "One Piece", "Oda Eiichiro", "Shounen")],
      [2, new Anime(2, "Magi - Labyrinth of Magic", "Ohtaka Shinobu", "Ecchi")],
      [3, new Anime(3, "Gantz", "Oku Hiroya", "Seinen")],
      [4, new Anime(4, "High School DxD", "Ishibumi Ichiei", "Harem")],
      [5, new Anime(5, "Knights of Sidonia", "Nihei Tsutomu", "Mecha")]
    ]);
  }

  getById(id) {
    return this.shows.get(id);
  }

  getAll() {
    return Array.from(this.shows.values());
  }
}

const animeController = new AnimeController();

module.exports = animeController;
