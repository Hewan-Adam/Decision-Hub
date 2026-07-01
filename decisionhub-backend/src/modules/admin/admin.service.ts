import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class AdminService {
  constructor(private prisma: PrismaService) {}

  async getOverview() {
    const [users, decisions, votes, categories] = await Promise.all([
      this.prisma.user.count(),
      this.prisma.decision.count(),
      this.prisma.vote.count(),
      this.prisma.category.count(),
    ]);

    return { users, decisions, votes, categories };
  }
}
