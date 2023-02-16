import { Controller, Post, Body, Get, Req } from '@nestjs/common';
import { SalesService } from "./sales.service";
import { SalesInput } from "./base/salesInput";
import { Request } from "express";

@Controller('sales')
export class SalesController {
    constructor(private readonly service: SalesService) {}

    /* Create new post, without Authentication for now */
    @Post()
    async create(@Body() data: SalesInput): Promise<any> {
        return await this.service.create({
            data: {
              ...data,
            },
        });
    }

    /* List all sales */
    @Get()
    async findMany(@Req() request: Request): Promise<any> {
        return this.service.findMany({
          select: {
            createdAt: true,
            id: true,
            customer: {
                select: {
                  id: true,
                  firstName: true,
                  email: true,
                },
            }
          },
        });
    }
}
