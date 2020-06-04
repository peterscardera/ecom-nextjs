const Mutation = {
    createItem(parents, args, ctx, info){

        const item = ctx.db.mutation.createItem({
            data: {
                ...args
            }
        }, info)
        return item
    }
//   createDog(parents, args, ctx, info) {
//     //create a dog here
//     global.dogs = global.dogs || [];
//     const newDog = { name: args.name };
//     global.dogs.push(newDog);
//     return newDog;
//   },
};

module.exports = Mutation;
