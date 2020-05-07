const users = require("./Users");
const CaptionsDeck = require('../models/quoteCards');

const DEAL_AMOUNT = 3;

let iCurrentCaption = 0;

const Players = [
];

const MyCards = [];

const PictureDeck = [
    'http://www.dumpaday.com/wp-content/uploads/2020/02/00-147-750x280.jpg',
    'http://www.dumpaday.com/wp-content/uploads/2020/02/00-146-750x280.jpg',
    'http://www.dumpaday.com/wp-content/uploads/2020/02/00-131-750x280.jpg'
];

let CurrentPicture = "";
let iCurrentPicture = 0;

function FlipPicture(){
    console.log(CurrentPicture)
    return module.exports.CurrentPicture = PictureDeck[iCurrentPicture++]
}

const CardsInPlay = [];

function SubmitCaption(caption, playerId){
    const player = Players[playerId];
    if(player.isDealer){
        throw Error('Dealer is not allowed to sumbit a caption')
    } 
    CardsInPlay.push({
        Text: caption,
        PlayerId: playerId,
        IsChosen: false
    })
}

function Join(userId){
    if(Players.some(x=> x.userId == userId)){
        // The player already joined the game in another browser or computer
        throw Error("You already joined this game in another browser or computer");
    }

    const user = users.Get(userId);
    Players.push( { Name: user.Name, Picture: user.Picture, Score: 0, isDealer: false, userId })
    console.log(Players)

    const myCards = CaptionsDeck.list.slice(iCurrentCaption, iCurrentCaption + DEAL_AMOUNT);
    iCurrentCaption += DEAL_AMOUNT;

    return { playerId: Players.length -1, myCards }
}

function GetPlayerId(userId){
    return Players.findIndex(x=> x.userId == userId);
}

module.exports = {
    Players, PictureDeck, CurrentPicture,
    CardsInPlay: CardsInPlay,
    SubmitCaption, Join, FlipPicture, GetPlayerId
}/* B"H
*/
const axios = require('axios').default;

const Users = [
    { Name: 'Bracha', Password: '5780', Email: 'chabad@newpaltz.edu', userId: 1},
    { Name: 'Bernie', Password: '2020', Email: 'bernie@newpaltz.edu', userId: 2 },    
];

function getOrCreate(response){
    console.log(response.data);
    let user = Users.find(x => x.Email == response.data.email);
    if(!user){
        const picture = response.data.picture.data ? // if it is facebook than the picture data is more complex and we need to account for that
                            response.data.picture.data.url : response.data.picture;
        Users.push({ 
            Name: response.data.name, 
            Password: null, 
            Email: response.data.email,
            Picture: picture,
            userId: Users.length });
        user = Users[Users.length - 1];
    }
    console.log(user)
    // no need to check password. We got the email address directly from an oauth provider
    return user;

}

module.exports = {
    async login(email, password) {
    
        let response;
        switch (email) {
            case "google":
                // You can also try https://people.googleapis.com/v1/people/me for more information
                response = await axios.get("https://www.googleapis.com/userinfo/v2/me", { headers: { Authorization: `Bearer ${password}` } })
                return getOrCreate(response);

            case "facebook":
                response = await axios.get(`https://graph.facebook.com/v3.0/me?fields=id,email,name,picture&access_token=${password}`);
                return getOrCreate(response);

            default:
        const user = Users.find(x => x.Email == email);
        if(!user) throw Error('User not found');
        if(user.Password != password) throw Error('Wrong Password');
    
        return user;
        }
   },
    Get(userId) {
        return Users[userId]
    }
}