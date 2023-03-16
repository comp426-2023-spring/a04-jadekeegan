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

app.get('/app/^\/(rps|rpsls)\/', (req, res) => {
	res.status(200)
	res.send("200 OK")
}

