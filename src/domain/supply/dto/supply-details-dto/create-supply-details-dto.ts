import { IsDecimal, IsNotEmpty, IsString, Max, MaxLength, Min, MinLength } from "class-validator"

export class CreateSupplyDetailsDto{

  supply_id:number
    @IsNotEmpty()
    @MinLength(3, {
        message: 'Parameter is too short. Minimum length is 3 characters.',
      })
      @MaxLength(10, {
        message: 'Parameter is too long. Maximum length is 10 characters.',
      })
    @IsString()
    parameter:string

    @IsNotEmpty()
    @MinLength(3, {
        message: 'Unit is too short. Minimum length is 3 characters.',
      })
      @MaxLength(10, {
        message: 'Unit is too long. Maximum length is 10 characters.',
      })
    @IsString()
    unit:string

    @IsNotEmpty()
    @IsDecimal(
    { decimal_digits: '2' },
    { message: 'Value must be a valid decimal number.' },
  )
  @Min(0, { message: 'Value must be greater than or equal to 0.' })
  @Max(100, { message: 'Value must be greater than or equal to 100.' })
    value:number

}