const User = require("./models/Usermodel")


const resolvers = {
    Query: {

        getUser: async (_, { id }) => {
            return await User.findById(id);
        },


    },
}


module.exports = resolvers;