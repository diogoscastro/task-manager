const mongoose = require("mongoose");
const connectToDatabase = async () => {
    try {
        await mongoose.connect(
            `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@taskmanagercluster.qoas7xc.mongodb.net/?retryWrites=true&w=majority&appName=TaskManagerCluster`
        );
        console.log("MongoDB conectado com sucesso!");
    } catch (error) {
        console.log("Erro ao conectar ao MongoDB.");
    }
};

module.exports = connectToDatabase;
