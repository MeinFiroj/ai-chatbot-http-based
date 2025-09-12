const express = require('express')
const generateResponse = require('../service/ai.service')

const router = express.Router()

router.post('/response', async (req, res)=>{
    const prompt = req.body.prompt

    console.log(prompt)

    const response = await generateResponse(prompt)
    res.status(200).json({
        aiResponse : response
    })
})



module.exports = router;