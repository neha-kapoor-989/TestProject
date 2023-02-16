import { InputType, Field } from "@nestjs/graphql";
import {
  IsString,
  IsOptional,
} from "class-validator";

@InputType()
class SalesInput {
  @IsString()
  @Field(() => String, {
    nullable: false,
  })
  orderId?: string;

  @IsString()
  @Field(() => String, {
    nullable: false,
  })
  customerId?: string;
}

export { SalesInput };
