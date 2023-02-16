import { Test } from '@nestjs/testing';
import {
  INestApplication,
  HttpStatus,
  ExecutionContext,
  CallHandler,
} from "@nestjs/common";
import request from "supertest";
import { SalesController } from './sales.controller';
import { SalesService } from './sales.service';

const CREATE_INPUT = {
  createdAt: new Date(),
  id: "exampleId",
  "customerId" : "cle72pwrb0000t26krbwq4aoc",
  "orderId" : "cle72tjwa0002t26k0krbu55r2",
  updatedAt: new Date(),
};

const CREATE_RESULT = {
  createdAt: new Date(),
  id: "exampleId",
  "customerId" : "cle72pwrb0000t26krbwq4aoc",
  "orderId" : "cle72tjwa0002t26k0krbu55r2",
  updatedAt: new Date(),
};

const service = {
  create() {
    return CREATE_RESULT;
  },
};

describe('SalesController', () => {
  let app: INestApplication;
  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: SalesService,
          useValue: service,
        },
      ],
      controllers: [SalesController],
    })
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  test("POST /sales", async () => {
    await request(app.getHttpServer())
      .post("/sales")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });
});
