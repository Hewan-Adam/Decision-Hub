import { Module } from '@nestjs/common';
import { AuthModule } from './modules/auth/auth.module';
import { UsersModule } from './modules/users/users.module';
import { DecisionsModule } from './modules/decisions/decisions.module';
import { CategoriesModule } from './modules/categories/categories.module';
import { CommentsModule } from './modules/comments/comments.module';
import { VotesModule } from './modules/votes/votes.module';
import { NotificationsModule } from './modules/notifications/notifications.module';
import { ReportsModule } from './modules/reports/reports.module';
import { AdminModule } from './modules/admin/admin.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [
    PrismaModule,
    AuthModule,
    UsersModule,
    DecisionsModule,
    CategoriesModule,
    CommentsModule,
    VotesModule,
    NotificationsModule,
    ReportsModule,
    AdminModule,
  ],
})
export class AppModule {}
