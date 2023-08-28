import { Controller, Get } from '@nestjs/common';
import { EthereumFeeService } from './ethereum-fee.service';

@Controller('ethereum-fee')
export class EthereumFeeController {
    constructor(private readonly ethereumFeeService: EthereumFeeService) {}

    @Get('getFeeData') // Define the route for getFeeData
    async getFeeData() {
        return this.ethereumFeeService.getFeeData();
    }
}
