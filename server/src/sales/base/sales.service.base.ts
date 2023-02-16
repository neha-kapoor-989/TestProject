import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Sales } from "@prisma/client";

export class SalesServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async create<T extends Prisma.SalesCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.SalesCreateArgs>
  ): Promise<Sales> {
    return this.prisma.sales.create<T>(args);
  }

  async findMany<T extends Prisma.SalesFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.SalesFindManyArgs>
  ): Promise<Sales[]> {
    return this.prisma.sales.findMany(args);
  }
}