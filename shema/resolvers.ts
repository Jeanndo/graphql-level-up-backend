import { context, Context } from "./../script";

export const resolvers = {
  Query: {
    users: async (_parent: any, _args: any, context: Context) => {
      const users = await context.prisma.user.findMany();
      return users;
    },

    user: async (_parent: any, _args: any) => {
      const id = _args.id;
      const user = await context.prisma.user.findUnique({
        where: {
          id,
        },
      });
      return user;
    },

    continents: async (_parent: any, _args: any) => {
      const continents = await context.prisma.continent.findMany();
      return continents;
    },
    continent: async (_parent: any, _args: any) => {
      const id = _args.id;

      const continent = await context.prisma.continent.findUnique({
        where: {
          id,
        },
        include: {
          country: true,
        },
      });

      return continent;
    },

    countries: async (_parent: any, _args: any) => {
      const countries = await context.prisma.country.findMany();
      return countries;
    },
    country: async (_parent: any, _args: any) => {
      const id = _args.id;
      const country = await context.prisma.country.findUnique({
        where: {
          id,
        },
      });

      return country;
    },
  },

  Mutation: {
    createUser: async (_parent: any, _args: any, context: Context) => {
      const newUser = await context.prisma.user.create({
        data: {
          name: _args.input.name,
          email: _args.input.email,
          role: _args.input.role,
        },
      });

      return newUser;
    },
    updateUser: async (_parent: any, _args: any, context: Context) => {
      const { id, name } = _args.input;

      const updatedUser = await context.prisma.user.update({
        where: {
          id: id,
        },
        data: {
          name: name,
        },
      });
      return updatedUser;
    },

    deleteUser: async (_parent: any, _args: any) => {
      const id = _args.id;
      await context.prisma.user.delete({
        where: {
          id,
        },
      });
      return null;
    },
    createContinent: async (_parent: any, _args: any, context: Context) => {
      const { continentName } = _args.input;
      const newContinent = await context.prisma.continent.create({
        data: {
          continentName,
        },
      });

      return newContinent;
    },
    updateContinent: async (_parent: any, _args: any, context: Context) => {
      const { id, continentName } = _args.input;

      const updatedContinent = await context.prisma.continent.update({
        where: {
          id: id,
        },
        data: {
          continentName,
        },
      });
      return updatedContinent;
    },
    deleteContinent: async (_parent: any, _args: any) => {
      const id = _args.id;
      await context.prisma.continent.delete({
        where: {
          id,
        },
      });
      return null;
    },
    createCountry: async (_parent: any, _args: any, context: Context) => {
      const { countryName, capitalCity, continent, continentId } = _args.input;

      const newCountry = await context.prisma.country.create({
        data: {
          countryName: countryName,
          capitalCity: capitalCity,
          continent: continent,
          continentId: continentId,
        },
      });
      return newCountry;
    },
    updateCountry: async (_parent: any, _args: any, context: Context) => {
      const { id, countryName, capitalCity } = _args.input;
      const updatedContry = await context.prisma.country.update({
        where: {
          id,
        },
        data: {
          countryName,
          capitalCity,
        },
      });
      return updatedContry;
    },
    deleteCountry: async (_parent: any, _args: any) => {
      const id = _args.id;
      await context.prisma.country.delete({
        where: {
          id,
        },
      });
      return null;
    },
  },

  // Continent: {
  //   country: async (_parent: any, _args: any, context: Context) => {
  //     return await context.prisma.country.findMany();
  //   },
  // },
};
