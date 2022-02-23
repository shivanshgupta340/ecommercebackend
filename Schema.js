const graphql = require('graphql');

const seller = require('./models/product');

const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLBoolean,
    GraphQLSchema,
    GraphQLID,
    GraphQLFloat,
    GraphQLList,
    GraphQLNonNull
} = graphql;


const SellerType = new GraphQLObjectType({
    name: 'Seller',
    fields: () => ({
        sellerName: {
            type: GraphQLString
        },
        sellerId: {
            type: GraphQLString
        },
        products: {
            type: GraphQLList(ProductType),
        }
    })
});

const ProductType = new GraphQLObjectType({
    name: 'Product',
    fields: () => ({
        name: {
            type: GraphQLString
        },
        productId :{
            type: GraphQLString
        },
        price: {
            type: GraphQLFloat
        }
    })
});

const RootQuery = new GraphQLObjectType({
    name:'RootQueryType',
    fields:{
        Seller:{
            type: SellerType,
            args: {id: { type: GraphQLString } },
            async resolve(parent,args){
                return seller.findOne({sellerId:args.id});
            }
        }
    }
})

module.exports = new GraphQLSchema({
    query: RootQuery
});