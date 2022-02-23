# ecommercebackend
for starting the server run 
# npm i 
# npm run start
# and then navigate to http://localhost:8080/graphiql

# then run query
{
  Seller(id:"abcd"){
    sellerName,
    sellerId,
    products {
      name
    }
  }
}
