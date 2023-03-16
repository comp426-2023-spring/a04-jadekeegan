#!/usr/bin/env node
import express from 'express';
import minimist from 'minimist';
import { rps, rpsls } from './lib/rpsls.js'

const app = express();

var args = minimist(process.argv.slice(2));
const PORT = args.port || 5000

app.use(express.json());
app.use(express.urlencoded({extended: true}))

app.get('/app', (req, res) => {
	res.status(200).send("200 OK");
})

app.get('/app/rps', (req, res) => {
	res.status(200).send(rps());
})

app.get('/app/rpsls', (req, res) => {
	res.status(200).send(rpsls());
})

app.post('/app/rps/play', (req, res) => {
	res.status(200).send(rps(req.body.shot));
})

app.post('/app/rpsls/play', (req, res) => {
	res.status(200).send(rpsls(req.body.shot));
})

app.post('/app/rps/play/:shot', (req, res) => {
	res.status(200).send(rps(req.params.shot));
})

app.post('/app/rps/play/:shot', (req, res) => {
	res.status(200).send(rpsls(req.params.shot));
})

app.get('*', (req, res) => {
	res.status(404).send('404 NOT FOUND');
})

app.listen(PORT, () => {
	console.log(`App listening on port ${PORT}`);
}
