import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// import { EthereumFeeService } from './ethereum-fee/ethereum-fee.service';
// import { EthereumFeeController } from './ethereum-fee/ethereum-fee.controller';
import { EthereumFeeModule } from './ethereum-fee/ethereum-fee.module'; // Adjust the path accordingly

@Module({
  imports: [EthereumFeeModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
