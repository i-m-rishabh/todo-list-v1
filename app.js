const express =  require("express")
const bodyParser = require("body-parser")
const { urlencoded } = require("body-parser")
const date = require(__dirname + "/date.js")

const app = express()
app.use(bodyParser.urlencoded({extended:true}))
app.set("view engine", "ejs")
app.use(express.static("public"))

let items = ["buy food", "cook food", "eat food"];
let works = [];
app.get('/', function(req, res){
    let today = date.getDate();
    // console.log(today);
    res.render("lists", {listTitle: today, newItems: items});
    // res.send()

})
app.get('/works', function(req, res){
    res.render("lists", {
        listTitle: "work list",
        newItems: works
    });
})


app.post('/', function(req, res){
    let item = req.body.newItem;
    if(req.body.list === "work"){
        works.push(item)
        res.redirect('/works')
    }else{
        items.push(item)
        res.redirect('/')
    }

    // console.log(item);
    // res.send("item added");
})

app.listen(process.env.PORT || 3000, function(){
    console.log("server started at port 3000");
})