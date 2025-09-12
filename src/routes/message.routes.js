const express = require('express')
const generateResponse = require('../service/ai.service')

const router = express.Router()

router.get('/response', async (req, res)=>{
    const prompt = req.body.prompt

    const response = await generateResponse(prompt)
    res.status(200).json({
        aiResponse : response
    })
})



module.exports = router;