import { Module, OnModuleInit } from '@nestjs/common';
import { DrizzleModule } from '@sixaphone/nestjs-drizzle';

@Module({
    imports: [
        DrizzleModule.forRoot({
            type: 'postgres',
            url: process.env.DATABASE_URL || 'postgres://user:password@localhost:5432/mydatabase',
            schema: 'public',
        }),
    ],
})
export class DatabaseModule implements OnModuleInit {
    onModuleInit() {

    }
}
