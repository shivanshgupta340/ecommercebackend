require('dotenv').config();
const mongo = require('mongoose');

const connectDB = require("./db");

const seller = require("../models/product");
connectDB();

const importData = async () => {
    try {
        await seller.deleteMany({});
        await seller.insertMany({
            sellerName : "amax",
            sellerId : "abcd",
            products : [
                {   
                    name: "earphone",
                    productId: "aa",
                    price: 520,
                },
                {   
                    name: "Laptop",
                    productId: "ab",
                    price: 100,
                },
                {   
                    name: "phone",
                    productId: "ac",
                    price: 100,
                }
            ]
        }
    );
  
      console.log("Data Import Success");
  
      process.exit();
    } catch (error) {
      console.error("Error with data import", error);
      process.exit(1);
    }
};

importData();