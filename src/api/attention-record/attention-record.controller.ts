import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  NotFoundException,
  Param,
  Post,
  Put,
  Res,
} from '@nestjs/common';
import { AttentionRecordService } from './attention-record.service';
import { CreateAttentionRecordDTO } from './dto/attention-record.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Attention-records')
@Controller('api/attention-record')
export class AttentionRecordController {
  constructor(private attentionRecordService: AttentionRecordService) {}

  @Post()
  async createAttentionRecord(
    @Res() res,
    @Body() createAttentionRecordDTO: CreateAttentionRecordDTO,
  ) {
    const attentionRecord =
      await this.attentionRecordService.createAttentionRecord(
        createAttentionRecordDTO,
      );
    return res.status(HttpStatus.OK).json({
      message: 'AttentionRecord Successfully Created',
      attentionRecord,
    });
  }

  @Get()
  async getAttentionRecords(@Res() res) {
    const attentionRecord =
      await this.attentionRecordService.getAttentionRecords();
    return res.status(HttpStatus.OK).json(attentionRecord);
  }

  @Get('/:id')
  async getAttentionRecord(@Res() res, @Param('id') id) {
    const attentionRecord =
      await this.attentionRecordService.getAttentionRecord(id);
    if (!attentionRecord)
      throw new NotFoundException('AttentionRecord does not exist!');
    return res.status(HttpStatus.OK).json(attentionRecord);
  }

  @Delete('/:id')
  async deleteAttentionRecord(@Res() res, @Param('id') id) {
    const attentionRecord =
      await this.attentionRecordService.deleteAttentionRecord(id);
    if (!attentionRecord)
      throw new NotFoundException('AttentionRecord does not exist!');
    return res.status(HttpStatus.OK).json({
      message: 'AttentionRecord Deleted Successfully',
      attentionRecord,
    });
  }

  @Put('/:id')
  async updateAttentionRecord(
    @Res() res,
    @Body() createAttentionRecordDTO: CreateAttentionRecordDTO,
    @Param('id') id,
  ) {
    const attentionRecord =
      await this.attentionRecordService.updateAttentionRecord(
        id,
        createAttentionRecordDTO,
      );
    if (!attentionRecord)
      throw new NotFoundException('Product does not exist!');
    return res.status(HttpStatus.OK).json({
      message: 'AttentionRecord Updated Successfully',
      attentionRecord,
    });
  }
}
