# KoinX

Internship Assignment For KoinX.

Tech Stack Used:

                 Mongo ATLAS for cloud data storage

                 Node JS / Express for application
                 
                 Azure for deployment
                 
             
___________________________________________________________________________________________________________________________

      Endpoint: 1. https://koinx.azurewebsites.net/normaltransaction?address=Your-Address-Here

      Working:      It fetches and stores the transactions in the database against the address.

      Example:      https://koinx.azurewebsites.net/normaltransaction?address=0xce94e5621a5f7068253c42558c147480f38b5e0d

      On Success:   {"saved":"success"}

      On Failure:   {"saved":"failed"}

___________________________________________________________________________________________________________________________

      Endpoint: 2. https://koinx.azurewebsites.net/getbalance?address=Your-Address-Here

      Working:      It fetches the transactions and Ethereum Price from the database against the address and calculates the balance.

      Example:      https://koinx.azurewebsites.net/getbalance?address=0xce94e5621a5f7068253c42558c147480f38b5e0d

      On Success:   {"userBalance":163895865906129440,"ethereumPrice":105090}


Structure of the Project: 
                      .
                      
                      ├── controllers
                      │   ├── getBalanceController.js         // To Fetch transactions and the latest Ethereum price from database and calculating the balance. 
                      │   └── normalTransactionController.js  // To Fetch the transactions and store them in database against the address.
                      ├── database.js                         // For instantiating the MONGO ATLAS
                      ├── main.js                             // Entry file for the application
                      ├── models
                      │   ├── fetchPriceModel.js              // Schema for storing the Ethereum price.
                      │   └── normalTransactionModel.js       // Schema for storing the normal transactions.
                      ├── package-lock.json
                      ├── package.json
                      ├── routes
                      │   ├── getBalanceRoute.js              // Router for the get request; to fetch the balance and ethereum price.
                      │   └── normalTransactionRoute.js       // Router for the get request; to store the transaction in database.
                      ├── utils
                      │   └── fetchEtereumPrice.js            // Utils file that fetches the Ethereum Price and stores in database at an interval of 10 minutes.
                      └── web.config                          // Config file for azure deployment.
 
 ___________________________________________________________________________________________________________________________
             
      Note: env file have not been uploaded, to test the project create your own .env with the structure:
      
      API_KEY 
      
      ATLAS_USERNAME 
      
      ATLAS_PASSWORD
      
      ATLAS_DBNAME 
