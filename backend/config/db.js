const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        const conn = await mongoose.connect("mongodb+srv://manogna1234:PvRuXli5glzNX6yi@manognacluster.k9wmn.mongodb.net/mernapp?retryWrites=true&w=majority")
        console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline)
        }
         catch (error) {
        console.log(error);
        process.exit(1)

    }
}

module.exports = connectDB;