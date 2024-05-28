    const { readData, writeData } = require ("../utils/data");
    const getAllGames = async (req, res,hext ) => { 
        const games = await readData("./data/games.json");
        if (!games) {
            res.status(400);
            res.send({
            status: "error",
            message: "Нет игр в базе данных. Добавьте игру.",
            });
            return;
        }
        req.games = games;
        next();
    };
    const checkIsTitleArray = async (req, res, hext ) => { 
        req.isNew = !Boolean(req.games.find(item => item.title === req.body.title));
        next();
    };
    const updatedGamesArray = (req, res, next ) => {
                // Если игра, которую хотим добавить, новая (её не было в списке)
                if (req.isNew) {
                    // Добавляем объект с данными о новой игре
                    const inArray = req.games.map(item => Number(item.id));
                    let maximalId;
                    if (inArray.length > 0) {
                      maximalId = Math.max(...inArray);
                    } else {
                      maximalId = 0;
                    }
                    req.updatedObject = {
                      id: maximalId + 1,
                      title: req.body.title,
                      image: req.body.image,
                      link: req.body.link,
                      description: req.body.description
                    };
                    // Добавляем данные о новой игре в список с другими играми
                    req.games = [...req.games, req.updatedObject];
                    next();
                    return;
                } else {
                    res.status(400);
                    res.send({ status: "error", message: "Игра с таким именем уже есть." });
                    return
                }
            
    };
    const findGameById = (req,res, next) => {  
        const id = Number(req.params.id);
        req.game = req.games.find((item) => item.id === id);
        next();
    };
    const deleteGame= (req,res, next) => {  
        const index = req.games.findIndex((item) => item.id === req.game.id);
        req.games.splice(index, 1);
        next();
    };
    const updatedGamesFile = async( req ,res, next ) => { 
        await writeData("./data/games.json", req.games);
        next();
    };



    module.exports = { 
        getAllGames,
        checkIsTitleArray,
        updatedGamesArray,
        updatedGamesFile,
        findGameById,
        deleteGame,
    }

