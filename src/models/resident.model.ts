'use strict'

// Base Model
import { Model } from 'objection';

export default class Resident extends Model {

  id: number
  nomor: string
  nama: string
  tempat_lahir: string
  tanggal_lahir: string
  agama: string
  alamat: string
  jenis_kelamin: string
  status_perkawinan: string
  pendidikan_terakhir: string
  created_at: any
  updated_at: any

  static tableName = 'identitas_penduduk';

  async $beforeInsert() {
    this.created_at = new Date();
  }

  async $beforeUpdate() {
    this.updated_at = new Date();
  }

  static jsonSchema = {
    type: 'object',
    required: ['nomor','nama'],

    properties: {
      id: { type: 'integer' },
      nomor: { type: 'string', minLength: 1, maxLength: 16 },
      nama: { type: 'string', minLength: 1, maxLength: 255 },
      tempat_lahir: { type: 'string', minLength: 1, maxLength: 255 },
      tanggal_lahir: { type: 'string', minLength: 1, maxLength: 255 },
      agama: { type: 'string', minLength: 1, maxLength: 255 },
      alamat: { type: 'string', minLength: 1, maxLength: 255 }, 
      jenis_kelamin: { type: 'string', minLength: 1, maxLength: 255 }, 
      status_perkawinan: { type: 'string', minLength: 1, maxLength: 255 }, 
      pendidikan_terakhir: { type: 'string', minLength: 1, maxLength: 255 },
      updated_at: { type: 'string', format: 'date-time', nullable: true },
      created_at: { type: 'string', format: 'date-time', nullable: false }
    }
  }
}