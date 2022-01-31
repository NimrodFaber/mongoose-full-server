const mongoose = require("mongoose");
const express = require("express");
const app = express();
const port = 3333;
const Client = require("./models/client");
const Store = require("./models/store");
const Order = require("./models/order");
const { getallclients } = require("./controllers/clientcontroller");
/* const Client = require("./models/client"); */
/* const getallclients = require("./controllers/clientcontroller"); */
/* const { long } = require("./controllers/clientcontroller");
const { send } = require("express/lib/response");  */
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(express.json());

app.post("/insertallClient", function (req, res) {
  let client = new Client(req.body);
  client.save((err, client) => {
    console.log(client);
    console.log(err);
  });
  res.json(client);
});
app.post("/insertallstores", function (req, res) {
  let store = new Store(req.body);
  store.save((err, store) => {
    console.log(store);
    console.log(err);
    res.json(store);
  });
});
app.post("/insertallorders", function (req, res) {
  let order = new Order(req.body);
  order.save((err, order) => {
    console.log(order);
    console.log(err);
    res.json(order);
  });
});

app.get("/getallclient", function (req, res) {
  getallclients()
    .then((client) => {
      res.json(client);
    })
    .catch((err) => {
      console.log(err);
    });
});

app.get("/getallstores", function (req, res) {
  Store.find({})
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      console.log(err);
    });
});
app.get("/getallorders", function (req, res) {
  Order.find({})
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      console.log(err);
    });
});
app.get("/client", function (req, res) {
  Client.find({ _id: req.query })
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      console.log(err);
    });
});

app.get("/clientsByName", (req, res) => {
  let { name } = req.query;
  Client.find({ name })
    .then((data) => res.json(data))
    .catch((err) => console.log(err));
});

app.patch("/client/:id", function (req, res) {
  Client.findByIdAndUpdate({ _id: req.params.id }, { $set: req.body })
    .then(() => {
      res.send("sucsess");
    })
    .catch(() => {
      res.send("failed");
    });
});
app.get("/getAllStore/:id", (req, res) => {
  Store.find({ _id: req.params.id })
    .then((store) => res.json(store))
    .catch((err) => console.log(err));
});
app.get("/getAllStorebyname/:name", (req, res) => {
  Store.find({ name: req.params.name })
    .then((store) => res.json(store))
    .catch((err) => console.log(err));
});

app.patch("/store/:id", function (req, res) {
  Store.findByIdAndUpdate({ _id: req.params.id }, { $set: req.body })
    .then(() => {
      res.send("secsses");
    })
    .catch(() => {
      res.send("err");
    });
});
app.patch("/order/:id", function (req, res) {
  Order.findByIdAndUpdate({ _id: req.params.id }, { $set: req.body })
    .then(() => {
      res.send("secsses");
    })
    .catch(() => {
      res.send("err");
    });
});

mongoose
  .connect("mongodb://localhost:27017/ten-wallet")
  .then(() => {
    app.listen(port, () => {
      console.info(`listening on port ${port}`);
    });
  })
  .catch((e) => console.error(e));
