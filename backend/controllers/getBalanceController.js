// Imports
const ethereumModel = require('../models/fetchPriceModel')
const transactionModel = require('../models/normalTransactionModel')

// Fetch the latest Ethereum Price from the Database
const fetchRecentEthereumPrice = async()=>{
    const res = await new Promise((resolve, reject)=>{
        ethereumModel.find({}).sort({time:-1}).limit(1).exec((err, doc)=>{
            if(err){
                reject(err)
            }
            else{
                resolve(doc[0].price)
            }
        })
    })
    return res
}

// Fetch the latest transaction history and calculate balance
const fetchTransactionData = async(address)=>{
    const res = await new Promise((resolve, reject)=>{
        transactionModel.find({address:address}).sort({created:-1}).limit(1).exec((err, doc)=>{
            if(err){
                reject(err)
            }
            else{
                var userBalance = 0

                doc[0].transactions.map((data)=>{
                    if(data.from === address){
                        userBalance -= parseInt(data.value)
                    }
                    else{
                        userBalance += parseInt(data.value)
                    }
                })
                resolve(userBalance)
                
            }
        })
    })
    return res
}

// Main Controller
const fetchController = async(req, res)=>{
    const address = req.query.address;

    const userBalance = await fetchTransactionData(address)
    const ethereumPrice = await fetchRecentEthereumPrice()

    res.send({userBalance:userBalance, ethereumPrice:ethereumPrice})

}

module.exports = {
    fetchController
}