var express = require('express')
var router = express.Router()
var fetch = require('node-fetch')

let arr=['1']
async function f() {
    try {
        let response = await fetch('https://ghibliapi.herokuapp.com/films?limit=3').then(response => response.json())
        const film = response[0];
        return film;
    } catch (e) {
        console.log(e)
    }
}
router.get('/', function(req, res, next) {
    f().then((film) => {
        const name = film['title'];
        const description = film['description'];
        res.render('fetch', {
            name: name
            , description: description
        });
    })
});




router.post('/',  (req, res)=> {
  console.log(req.body)
 arr.push(req.body.text);
})



module.exports = router