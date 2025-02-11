import { Controller, Get, Post, Body, Param, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { SlotsService } from './slots.service';
import { CreateSlotDto } from './dto/create-slot.dto';
import { User } from '../decorators/user.decorator';

@Controller('slots')
@UseGuards(JwtAuthGuard)
export class SlotsController {
  constructor(private slotsService: SlotsService) {}

  @Post()
  createSlot(@Body() createSlotDto: CreateSlotDto, @User() user) {
    return this.slotsService.createSlot(createSlotDto, user.id);
  }

  @Get('studio/:studioId')
  getAvailableSlots(@Param('studioId') studioId: string) {
    return this.slotsService.getAvailableSlots(studioId);
  }

  @Post(':slotId/request')
  requestSlot(@Param('slotId') slotId: string, @User() user) {
    return this.slotsService.requestSlot(slotId, user.id);
  }
} 