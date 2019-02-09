
// Initiate mysql and require npm modules
var mysql = require("mysql");
var inquirer = require("inquirer");
// Create connectin with SQL database
var connection = mysql.createConnection({
    host: "localhost",

    // assign port
    port: 3306,

    // assing username
    user: "root",

    // password
    password: "password",
    database: "bamazon"
});
// connect to the mysql server and sql database
connection.connect(function (err) {
    if (err) throw err;
    console.log("\nconnected as id " + connection.threadId);
    console.log("\n");
    // Once connection to the database is established queryProducts Function will initiate.
    queryProducts();
});

function queryProducts() {
    // For loop to go through the SQL database and create a table in Node.js commmand console of all the available items 
    connection.query("SELECT * FROM PRODUCTS", function (err, res) {
        if (err) throw err;
        var itemsIds = [];
        for (var i = 0; i < res.length; i++) {
            console.log("ItemID: " + res[i].Item_ID + " | " + "ProdcutName: " + res[i].Product_Name + " | " + "Quantity :" + res[i].Stock_Quantity + " | " + "Price :" + res[i].Price);
            console.log("-----------------------------------");
            itemsIds.push(res[i].Item_ID);
        }
        // after all the items have been queried initiate purchaseItems Function
        if (i = res.length - 1) {
            purchaseItems();
        }

        //     function purchaseItems() {
        function purchaseItems() {
            inquirer.prompt([{
                name: "itemID",
                type: "input",
                message: "Please Enter the Item ID of the Item you want to purchase",
                validate: function (idNumber) {
                    if (!isNaN(idNumber) && itemsIds.includes(parseInt(idNumber))) {
                        // console.log("\nPlease enter a number between 1 and " + res.length)
                        return true;
                    }
                    else {
                        return 'invalid';
                    };
                }
            },
            {
                name: "quantity",
                type: "input",
                message: "Please enter the quantity you would like to buy",
                validate: function (value) {
                    if (isNaN(value == true)) {
                        console.log("Please enter a number for quantity");
                        return false;

                    }
                    else {
                        return true;
                    };
                }
            }]).then(function (ans) {
                var id = ans.itemID - 1;
                var qty = parseInt(ans.quantity);
                var grandTotal = parseFloat(((res[id].Price) * qty).toFixed(2));

                // checking to see if the order quantity can be satisfied.
                if (res[id].Stock_Quantity >= qty) {
                    connection.query("UPDATE PRODUCTS SET ? WHERE ?", [
                        { Stock_Quantity: (res[id].Stock_Quantity - qty) },
                        { Item_ID: ans.itemID }
                    ], function (err, result) {
                        if (err) throw err;
                        console.log("Success! Your total is $" + grandTotal.toFixed(2));
                        purchaseMore();

                    });
                }

                else {
                    console.log("Sorry, there's only : " + res[id].Stock_Quantity + " available in  stock");
                }
            });

        };


    });
};

function purchaseMore() {
    inquirer
        .prompt({
            name: "moreItems",
            type: "rawlist",
            message: "Would you like to buy more Items?",
            choices: ["YES", "NO"]
        }).then(function (answer) {
            if (answer.moreItems.toUpperCase() === "YES") {
                queryProducts();
            }
            else {
                console.log("Thank you for shopping. Have a nice day");
                connection.destroy();
            }
        });
};



