import { Module } from '@nestjs/common';
import { EthereumFeeController } from './ethereum-fee.controller';
import { EthereumFeeService } from './ethereum-fee.service';

@Module({
    imports: [], // Import HttpModule to enable HTTP requests
    controllers: [EthereumFeeController],
    providers: [EthereumFeeService],
})
export class EthereumFeeModule {}
