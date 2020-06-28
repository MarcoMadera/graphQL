const tvShows = [
  {
    _id: 1,
    title: "PERRY MASON",
    genre: "Drama",
    network: "HBO",
    creators: ["Rolin Jones", "Ron Fitzgerald"],
    producers: [
      "Amanda Burrell",
      "Robert Downey Jr.",
      "Susan Downey",
      "Ron Fitzgerald",
      "Rolin Jones",
      "Tim Van Patten",
    ],
    seasons: 1,
  },
  {
    _id: 2,
    title: "DARK",
    genre: "Drama",
    network: "Netflix",
    creators: ["Baran bo Odar", "Jantje Friese"],
    producers: [
      "Baran bo Odar",
      "Jantje Friese",
      "Quirin Berg",
      "Max Wiedemann",
      "Justyna Müsch",
    ],
    seasons: 3,
  },
  {
    _id: 3,
    title: "SEARCH PARTY",
    genre: "Comedy",
    network: "TBS",
    creators: ["Sarah-Violet Bliss", "Charles Rogers", "Michael Showalter"],
    producers: [
      "Michael",
      "Showalter",
      "Charles 'Buddy' Rogers",
      "Sarah-Violet Bliss",
      "Tony Hernandez",
      "Lilly Burns",
    ],
    seasons: 3,
  },
];

module.exports = {
  getTvShows: () => {
    return tvShows;
  },
};
