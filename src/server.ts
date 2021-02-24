import express from 'express';
import "reflect-metadata";

const app = express();


app.get('/', (request, response) => {
    return response.json({ message: "Hello World - NLW04" });
});

app.post('/', (request, response) => {
    return response.json({ message: "Os dados forma salvos com sucesso!" });
});

app.listen(3333, () => console.log('starting in a port 3333'));

