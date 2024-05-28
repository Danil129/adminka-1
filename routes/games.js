// routes/games.js
const gamesRouter = require("express").Router(); // Создали роутер

const {  sendAllGames, sendUpadatedGames, addGame} = require ("../controllers/games");
const { getAllGames ,
    checkIsTitleArray, 
    updatedGamesArray,
    updatedGamesFile,
    findGameById,
    deleteGame,
 } = require ("../middlewares/games");

gamesRouter.get("/games",getAllGames, sendAllGames)
gamesRouter.delete("/games/:id",getAllGames, findGameById, deleteGame, updatedGamesFile, sendUpadatedGames );
gamesRouter.post("/games", getAllGames, checkIsTitleArray, updatedGamesArray, updatedGamesFile, addGame)

module.exports = gamesRouter;