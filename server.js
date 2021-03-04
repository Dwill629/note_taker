const express = require('express')
const path = require('path');
const fs = require('fs')

const app = express()
const PORT = process.env.PORT || 3500
let dataB = require('./db/db.json')