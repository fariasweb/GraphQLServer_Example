const books = [
  {
    title: 'The Awakening',
    author: 'Kate Chopin',
  },
  {
    title: 'City of Glass',
    author: 'Paul Auster',
  },
];

const queries = {
  books: () => books,
};

const mutations = {
  /*createUser: (root, args) => {
    const newUser = {
      id: "54321",
      email: args.email,
      password: args.password,
      loggedIn: false,
      firstName: args.firstName,
      lastName: args.lastName,
    };
    
    return newUser;
  },*/
};

export const resolvers = { queries, mutations };