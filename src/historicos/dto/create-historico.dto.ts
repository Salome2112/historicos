import { ApiProperty } from "@nestjs/swagger";

export class CreateHistoricoDto {
    @ApiProperty()
    name: string;
    @ApiProperty()
    description?:string;
    @ApiProperty()
    year: number;
    
}
