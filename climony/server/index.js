const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

const topics = [
  {
    id: "mobility",
    name: "Alltagsmobilität",
  },
  {
    id: "lifestyle",
    name: "Lifestyle",
  },
  {
    id: "living",
    name: "Wohnen",
  },
  {
    id: "travel",
    name: "Reisen",
  },
];

const articles = [
  {
    id: "1",
    title: "CO2-Impact vom Heizen",
    shortDescription: "Beschreibungstext über diesen Artikel",
    readingTime: 3,
    image: null,
  },
  {
    id: "2",
    title: "Energieverbrauch im Haushalt",
    shortDescription:
      "Beschreibungstext über diesen Artikel Beschreibungstext über",
    readingTime: 6,
    image: null,
  },
  {
    id: "3",
    title: "Möglichkeiten zur Reduktion",
    shortDescription: "Beschreibungstext über diesen Artikel",
    readingTime: 4,
    image: null,
  },
  {
    id: "4",
    title: "Möglichkeiten der Förderung",
    shortDescription:
      "Beschreibungstext über diesen Artikel Beschreibungstext über",
    readingTime: 8,
    image: null,
  },
];

// ROUTE: /topics
app.get("/topics", function (_, res) {
  res.json(topics);
});

// ROUTE: /topics/$category
["mobility", "lifestyle", "living", "travel"].forEach((category) => {
  app.get(`/topics/${category}`, function (_, res) {
    res.json({
      id: category,
      category: topics.find((topic) => topic.id === category).name,
      title: `Lerne über ${category}`,
      description: `Wie wirkt sich eigentlich ${category} auf deine Emissionen aus?`,
      articles,
    });
  });
});

// ROUTE: /topics/$category/$id
["mobility", "lifestyle", "living", "travel"].forEach((category) => {
  articles.forEach((article) => {
    app.get(`/topics/${category}/${article.id}`, function (_, res) {
      res.json({
        id: article.id,
        publishedAt: 1681379009,
        description: `Hier lernst du das Wichtigste rund um ${category}: Die wichtigsten Facts vom Umweltbundesamt auf 5 Slides für dich zusammengefasst.`,
      });
    });
  });
});

// Setting the server to listen at port 3001
app.listen(3001, function () {
  console.log("Server is running at port 3001");
});
