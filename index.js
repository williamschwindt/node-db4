const express = require('express');

const server = express();
const port = process.env.PORT || 7000;

server.use(express.json());

server.use((err, req, res, next) => {
    console.log(err);
    res.status(500).json({
        message: 'something went wrong'
    })
})

server.listen(port, () => {
    console.log(`server running at http://localhost:${port}`)
})