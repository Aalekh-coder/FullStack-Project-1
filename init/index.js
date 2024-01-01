const mongoose = require("mongoose");
const initData = require("./data");
const Listing = require("../models/listing");


main().catch(err => console.log(err));
async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/wanderlust');
}

const intiDB = async () => {
  await Listing.deleteMany({});
  initData.data = initData.data.map((obj)=> ({...obj, owner: "658918731fc21132234892c4"}))
    await Listing.insertMany(initData.data);
    console.log("Data was initial");

}

intiDB();