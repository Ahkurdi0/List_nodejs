const express = require('express');
const bodyParser = require('body-parser');
const date = require(__dirname + "/date.js");
const app = express();
const port = 3000;
const items = ["food", 'car', "mobile"];
const workList = [];


app.use(express.static("public"));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({
    extended: true
}));




const day = date.getDate();
app.get('/', (req, res) => {



    res.render("list", {
        listTitle: day,
        myItem: items
    });

})


app.post("/", function (req, res) {

    if (req.body.list === "work") {
        let work = req.body.item;
        workList.push(work);
        res.redirect("/work");
    } else {
        let item = req.body.item;
        items.push(item);
        res.redirect("/");
    }


})

app.get('/work', (req, res) => {

    res.render("list", {
        listTitle: "work list",
        myItem: workList
    });
})


app.post("/work", function (req, res) {

    let work = req.body.item;
    workList.push(work);
    res.redirect("/");
})

app.get('/about', (req, res) => {

    res.render("about");
})




app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
}) 
