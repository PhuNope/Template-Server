import mongoose from "mongoose";

const connect = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/chat_socketio", {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        console.log("Connect successfully!!!");
    } catch (error) {
        console.log("Connect failure!!!");
    }
};

export default connect;
