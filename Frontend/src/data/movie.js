const movies = [
  {
    id: 1,
    title: "Interstellar",
    genre: "Sci-Fi",
    director: "Christopher Nolan",
    year: "2014",
    duration: "169 min",
    language: "English",
    rating: "8.7",
    image: " https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
    backdrop:
      "https://image.tmdb.org/t/p/original/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg",
    description:
      "A team of explorers travels through a wormhole in space to find a new home for humanity.",
    reviews: [
      {
        id: 1,
        username: "Alex",
        rating: 5,
        comment: "A masterpiece. The visuals and music are incredible.",
      },
      {
        id: 2,
        username: "Emma",
        rating: 4,
        comment: "Amazing movie, but a little slow at times.",
      },
      {
        id: 3,
        username: "Emma",
        rating: 4,
        comment: "Amazing movie, but a little slow at times.",
      },
      {
        id: 4,
        username: "Emma",
        rating: 4,
        comment: "Amazing movie, but a little slow at times.",
      },
      {
        id: 5,
        username: "Emma",
        rating: 4,
        comment: "Amazing movie, but a little slow at times.",
      },
      {
        id: 6,
        username: "Emma",
        rating: 4,
        comment: "Amazing movie, but a little slow at times.",
      },
      {
        id: 7,
        username: "Emma",
        rating: 4,
        comment: "Amazing movie, but a little slow at times.",
      },
    ],
  },

  {
    id: 2,
    title: "Inception",
    genre: "Action, Sci-Fi",
    director: "Christopher Nolan",
    year: "2010",
    duration: "148 min",
    language: "English",
    rating: "8.8",
    image: "https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg",
    backdrop:
      "https://image.tmdb.org/t/p/original/s3TBrRGB1iav7gFOCNx3H31MoES.jpg",
    description:
      "A skilled thief enters people's dreams to steal secrets but is tasked with planting an idea into a target's subconscious.",
    reviews: [],
  },

  {
    id: 3,
    title: "The Dark Knight",
    genre: "Action, Crime, Drama",
    director: "Christopher Nolan",
    year: "2008",
    duration: "152 min",
    language: "English",
    rating: "9.0",
    image: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    backdrop:
      "https://image.tmdb.org/t/p/original/cfT29Im5VDvjE0RpyKOSdCKZal7.jpg",
    description:
      "Batman faces his greatest psychological and physical challenge yet as the Joker unleashes chaos upon Gotham City.",
    reviews: [],
  },

  {
    id: 4,
    title: "Avatar",
    genre: "Fantasy, Adventure, Sci-Fi",
    director: "James Cameron",
    year: "2009",
    duration: "162 min",
    language: "English",
    rating: "7.9",
    image: "https://image.tmdb.org/t/p/w500/jRXYjXNq0Cs2TcJjLkki24MLp7u.jpg",
    backdrop:
      "https://image.tmdb.org/t/p/original/vL5LR6WdxWPjLPFRLe133jXWsh5.jpg",
    description:
      "A paraplegic Marine is sent to Pandora, where he becomes torn between following orders and protecting the Na'vi people.",
    reviews: [],
  },

  {
    id: 5,
    title: "Avengers: Endgame",
    genre: "Action, Adventure, Sci-Fi",
    director: "Anthony Russo & Joe Russo",
    year: "2019",
    duration: "181 min",
    language: "English",
    rating: "8.4",
    image: "https://image.tmdb.org/t/p/w500/ulzhLuWrPK07P1YkdWQLZnQh1JL.jpg",
    backdrop:
      "https://image.tmdb.org/t/p/original/7RyHsO4yDXtBv1zUU3mTpHeQ0d5.jpg",
    description:
      "The surviving Avengers assemble once more to reverse the devastation caused by Thanos and restore balance to the universe.",
    reviews: [],
  },

  {
    id: 6,
    title: "The Matrix",
    genre: "Action, Sci-Fi",
    director: "Lana Wachowski & Lilly Wachowski",
    year: "1999",
    duration: "136 min",
    language: "English",
    rating: "8.7",
    image: "https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",
    backdrop:
      "https://image.tmdb.org/t/p/original/ncEsesgOJDNrTUED89hYbA117wo.jpg",
    description:
      "A computer hacker discovers the reality he lives in is a simulated world controlled by intelligent machines.",
    reviews: [],
  },

  {
    id: 7,
    title: "Joker",
    genre: "Crime, Drama, Thriller",
    director: "Todd Phillips",
    year: "2019",
    duration: "122 min",
    language: "English",
    rating: "8.3",
    image: "https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
    backdrop:
      "https://image.tmdb.org/t/p/original/n6bUvigpRFqSwmPp1m2YADdbRBc.jpg",
    description:
      "A failed stand-up comedian descends into madness, becoming Gotham City's infamous criminal mastermind, the Joker.",
    reviews: [],
  },

  {
    id: 9,
    title: "Titanic",
    genre: "Romance, Drama",
    director: "James Cameron",
    year: "1997",
    duration: "194 min",
    language: "English",
    rating: "7.9",
    image: "https://image.tmdb.org/t/p/w500/9xjZS2rlVxm8SFx8kPC3aIGCOYQ.jpg",
    backdrop:
      "https://image.tmdb.org/t/p/original/sCzcYW9h55WcesOqA12cgEr9Exw.jpg",
    description:
      "A young couple from different social classes fall in love aboard the ill-fated RMS Titanic during its maiden voyage.",
    reviews: [],
  },

  {
    id: 10,
    title: "Parasite",
    genre: "Thriller, Drama",
    director: "Bong Joon-ho",
    year: "2019",
    duration: "132 min",
    language: "Korean",
    rating: "8.5",
    image: "https://image.tmdb.org/t/p/w500/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg",
    backdrop:
      "https://image.tmdb.org/t/p/original/TU9NIjwzjoKPwQHoHshkFcQUCG.jpg",
    description:
      "A poor family gradually infiltrates the lives of a wealthy household, leading to unexpected and tragic consequences.",
    reviews: [],
  },

  {
    id: 11,
    title: "Spider-Man: No Way Home",
    genre: "Action, Adventure, Fantasy",
    director: "Jon Watts",
    year: "2021",
    duration: "148 min",
    language: "English",
    rating: "8.2",
    image: "https://image.tmdb.org/t/p/w500/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg",
    backdrop:
      "https://image.tmdb.org/t/p/original/iQFcwSGbZXMkeyKrxbPnwnRo5fl.jpg",
    description:
      "Peter Parker seeks Doctor Strange's help to restore his secret identity, but the spell opens the multiverse instead.",
    reviews: [],
  },

  {
    id: 12,
    title: "The Shawshank Redemption",
    genre: "Drama",
    director: "Frank Darabont",
    year: "1994",
    duration: "142 min",
    language: "English",
    rating: "9.3",
    image: "https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg",
    backdrop:
      "https://image.tmdb.org/t/p/original/zfbjgQE1uSd9wiPTX4VzsLi0rGG.jpg",
    description:
      "A banker sentenced to life imprisonment forms an enduring friendship while maintaining hope and planning for freedom.",
    reviews: [],
  },

  {
    id: 13,
    title: "Dune",
    genre: "Sci-Fi, Adventure",
    director: "Denis Villeneuve",
    year: "2021",
    duration: "155 min",
    language: "English",
    rating: "8.0",
    image: "https://image.tmdb.org/t/p/w500/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg",
    backdrop:
      "https://image.tmdb.org/t/p/original/jYEW5xZkZk2WTrdbMGAPFuBqbDc.jpg",
    description:
      "Paul Atreides journeys to the dangerous desert planet Arrakis, where destiny, politics, and survival intertwine.",
    reviews: [],
  },
];

export default movies;
