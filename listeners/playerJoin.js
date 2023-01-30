export default (io, socket) => {
    console.log(`User id: ${socket.id} join!!!`);

    //test
    socket.emit("welcome", "Hello Client");
};