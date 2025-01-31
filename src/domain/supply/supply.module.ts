import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SupplyController } from './supply.controller';
import { SupplyService } from './supply.service';
// import { AuthProfile } from '../user.profile';
import { Supply } from 'src/domain/supply/entities/supply.entity';
import { TypeOrmConfigModule } from 'src/bootstrap/typeorm-config/typeorm-config.module';
import { SupplyRepository } from './repositories/supply.repository';
import { SupplyDetails } from './entities/supply-details.entity';
import { SupplyDetailsRepository } from './repositories/supply-details.repository';
import { DataSource } from 'typeorm';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Supply,
      SupplyDetails,
      SupplyRepository,
      SupplyDetailsRepository,
    ]),
    TypeOrmConfigModule,
  ],
  controllers: [SupplyController],
  exports: [SupplyService],
  providers: [
    SupplyService,
    {
      provide: SupplyRepository,
      useFactory: (dataSource: DataSource) => new SupplyRepository(dataSource),
      inject: [DataSource],
    },
    {
      provide: SupplyDetailsRepository,
      useFactory: (dataSource: DataSource) =>
        new SupplyDetailsRepository(dataSource),
      inject: [DataSource],
    },
    //  AuthProfile
  ],
})
export class SupplyModule {}
