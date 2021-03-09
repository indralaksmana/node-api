'use strict'

// Base Model
import { Model } from 'objection';

export default class User extends Model {

  id: number
  username: string
  password: string
  created_at: any
  updated_at: any

  static tableName = 'user';

  async $beforeInsert() {
    this.created_at = new Date();
  }

  async $beforeUpdate() {
    this.updated_at = new Date();
  }

  static jsonSchema = {
    type: 'object',
    required: ['username','password'],

    properties: {
      id: { type: 'integer' },
      username: { type: 'string', minLength: 1, maxLength: 255 },
      password: { type: 'string', minLength: 1, maxLength: 255 },
      updated_at: { type: 'string', format: 'date-time', nullable: true },
      created_at: { type: 'string', format: 'date-time', nullable: false }
    }
  }
}