// Imports
const dotenv = require('dotenv');
const fetch = require('node-fetch-commonjs');

const transactionModel = require('../models/normalTransactionModel')

dotenv.config()

// Function to get the data from the api
const fetchNormalData = async(address)=>{

    const normalTransactionURL = 'https://api.etherscan.io/api'+
                            '?module=account'+
                            '&action=txlist'+
                            `&address=${address}`+
                            '&startblock=0'+
                            '&endblock=99999999'+
                            '&page=1'+
                            '&offset=10'+
                            '&sort=asc'+
                            `&apikey=${process.env.API_KEY}`


    const response = await fetch(normalTransactionURL, {method:'GET', headers:{"Content-Type":"application/json"}} )
    const data = await response.text()

    const dataJSON = JSON.parse(data)

    if(dataJSON.status === '0'){
        throw new Error('Could not save into database successfully')
    }
    else{
        await insertData(address, dataJSON.result).catch((err)=>{
            throw new Error(err)
        })
    }
}

const insertData = async(address, data)=>{
    const transactionData = {
        address:address,
        transactions:data
    }
    const transaction = new transactionModel(transactionData)

    const res = await new Promise((resolve, reject)=>{
        transaction.save((err, doc)=>{
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

const insertController = async(req, res)=>{
    const address = req.query.address;
    await fetchNormalData(address).then((response)=>{
        res.send({saved:'success'})
    }).catch((err)=>{
        res.send({saved:'failed'})
    })
}

module.exports = {
    insertController
}