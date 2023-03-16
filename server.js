#!/usr/bin/env node
import express from 'express';
import minimist from 'minimist';
import { rps, rpsls } from '../a03-jadekeegan/lib/rpsls.js'

const app = express();

var args = minimist(process.argv.slice(2));
const PORT = args.port || 5000

app.listen(PORT, (error) => {
	if(!error)
		console.log("Server is Successfully Running, and App is listening on port " + PORT)
	else
		console.log("Error occurred, server can't start", error)
});

app.get('/app/', (req, res) => {
	res.status(200).send("200 OK")
});

app.get('/app/rps/', (req, res) => {
	res.status(200).send(rps());
});

app.get('/app/rpsls/', (req, res) => {
	res.status(200).send(rpsls())
});

app.get('/app/rps/play', (req, res) => {
	res.status(200).send(rps(req.body))
});

app.get('/app/rpsls/play/', (req, res) => {
	res.status(200).send(rpsls(req.body))
});

app.get('/app/rps/play/(rock|paper|scissors)/', (req, res) => {
	res.status(200).send(rps(req.params[0]))
});

app.get('/app/rps/play/(rock|paper|scissors|lizard|spock)/', (req, res) => {
	res.status(200).send(rpsls(req.params[0]))
});

app.get('*', (req, res) => {
	res.status(404).send('404 NOT FOUND');
});
