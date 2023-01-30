import Player from "../models/Player.js";
import mongooseHelper from "../utils/mongoose.js";

const list = () => {
    Player.find({}, (err, players) => {
        if (!err) {
            players = mongooseHelper.mutipleMongooseToObject(players);
            console.log(players);
        }
    });
};

const listPlayers = () => {
    var playerlist = [];
    Player.find({}, (err, players) => {
        //playerlist = mongooseHelper.mutipleMongooseToObject(players);

        playerlist = [...mongooseHelper.mutipleMongooseToObject(players)];

        console.log(playerlist);
    });

    //console.log(playerlist);

    return playerlist;
};

const addPlayer = (player) => {
    const data = new Player(player);
    data.save();


    console.log("Added Player!!!");
};

const updatePlayer = (player) => {
    Player.updateOne({ name: player.name }, player, (err, res) => {
        console.log("Updated Player!!!");
    });

};

const deletePlayer = (name) => {
    Tank.deleteOne({ name: name }, (err) => {
        if (err) console.log("Error: ", err.message);
    });
};

export { list, listPlayers, addPlayer, updatePlayer, deletePlayer };