import { PrismaClient } from "@prisma/client";

declare global {
  var prisma: PrismaClient | undefined;
}
// stop HMR instantiating multiple instances of prisma client
const prismadb = global.prisma || new PrismaClient();
if (process.env.NODE_ENV !== "production") global.prisma = prismadb;

export default prismadb;
