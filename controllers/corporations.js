
const Corporation = require('../models/corporation')
const corporationRouter = require('express').Router()

corporationRouter.get('/', async (req, res) => {
  try {
    const corporations = await Corporation
      .find({})
      //.populate('stocks', { price: 1, date: 1 }) //No user data asked yet

    const formatedCorporations = corporations.map(Corporation.format)
    res.status(201).json(formatedCorporations)    
  } catch (error) {
    response.status(401).json({ error })
  }
})



module.exports = corporationRouter