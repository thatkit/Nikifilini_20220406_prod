import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { RetailService } from './retail_api/retail.service'
import { GraphQLModule } from '@nestjs/graphql'
import { OrdersModule } from './orders/orders.module'
import { ReferenceModule } from './reference/reference.module'
import { ServeStaticModule } from '@nestjs/serve-static'
const { join } = require('path')

@Module({
  imports: [
    GraphQLModule.forRoot({
      typePaths: ['./**/*.graphql'],
      definitions: {
        path: join(process.cwd(), 'src/graphql.ts'),
      },
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', '..', 'build')
    }),
    OrdersModule,
    ReferenceModule,
  ],
  // controllers: [AppController],
  providers: [RetailService],
})
export class AppModule {}
