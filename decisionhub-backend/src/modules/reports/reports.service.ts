import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class ReportsService {
  constructor(private prisma: PrismaService) {}

  async list() {
    return this.prisma.report.findMany({
      orderBy: { createdAt: 'desc' },
    });
  }
}
