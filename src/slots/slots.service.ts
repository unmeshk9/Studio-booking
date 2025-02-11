import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateSlotDto } from './dto/create-slot.dto';
import { SlotStatus } from '@prisma/client';

@Injectable()
export class SlotsService {
  constructor(private prisma: PrismaService) {}

  async createSlot(createSlotDto: CreateSlotDto, userId: string) {
    return this.prisma.slot.create({
      data: {
        ...createSlotDto,
        createdById: userId,
      },
    });
  }

  async getAvailableSlots(studioId: string) {
    return this.prisma.slot.findMany({
      where: {
        createdById: studioId,
        status: SlotStatus.AVAILABLE,
      },
      include: {
        createdBy: {
          select: {
            name: true,
            studioName: true,
            location: true,
          },
        },
      },
    });
  }

  async requestSlot(slotId: string, userId: string) {
    const slot = await this.prisma.slot.findUnique({
      where: { id: slotId },
    });

    if (!slot || slot.status !== SlotStatus.AVAILABLE) {
      throw new NotFoundException('Slot not available');
    }

    return this.prisma.slot.update({
      where: { id: slotId },
      data: {
        status: SlotStatus.REQUESTED,
        bookedById: userId,
      },
    });
  }
} 