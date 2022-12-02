const fetch = require('node-fetch-commonjs');
const ethereumModel = require('../models/fetchPriceModel')

// Fetch Ethereum Data
const fetchEthereumData = async()=>{

    const normalTransactionURL = 'https://api.coingecko.com/api/v3/simple/price?ids=ethereum&amp;vs_currencies=inr'

    const response = await fetch(normalTransactionURL, {method:'GET', headers:{"Content-Type":"application/json"}} )
    const data = await response.text()

    const dataJSON = await JSON.parse(data)

    await insertData(dataJSON?.ethereum?.inr).catch((err)=>{
        throw new Error(err)
    })
}

// Insert into the collection
const insertData = async(data)=>{

    var newDate = new Date()

    const ethereumData = {
        price:data,
        time: newDate
    }

    const ethereumDoc = new ethereumModel(ethereumData)

    const res = await new Promise((resolve, reject)=>{
        ethereumDoc.save((err, doc)=>{
            if(err){
                reject('Could not save into Database successfully')
            }
            else{
                resolve('Saved into Database Succesfully')
            }
        })
    })
    return res
}

// Main Controller
setInterval(()=>{
    fetchEthereumData()
}, 1000 * 60 * 10)