import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export interface Context {
  prisma: PrismaClient;
}

export const context: Context = {
  prisma: prisma,
};

// async function main() {
//   await prisma.continent.deleteMany();

//   const continent = await prisma.continent.create({
//     data: {
//       continentName: "RWANDA",
//     },
//   });

//   console.log(continent);
// }
// main()
//   .catch((e) => {
//     console.error(e.message);
//   })
//   .finally(async () => {
//     await prisma.$disconnect();
//   });
