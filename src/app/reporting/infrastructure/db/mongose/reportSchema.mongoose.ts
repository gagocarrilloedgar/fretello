import { Document, Schema, model } from 'mongoose'

import { Report } from 'app/reporting/domain/interfaces'
import { validateReportLocation } from 'app/reporting/domain/services'

type ReportEntity = Document & Report

const ReportSchema = new Schema(
  {
    songId: {
      type: String,
      required: true,
      unique: true
    },
    location: {
      type: {
        longitude: Number,
        latitude: Number
      },
      required: true,
      validate: {
        validator: validateReportLocation,
        message: 'Location must be between -180 and 180 and -90 and 90',
        isAsync: false
      }
    }
  },
  {
    timestamps: true
  }
)

ReportSchema.set('toJSON', {
  transform: (_doc, ret) => {
    ret.id = ret._id
    delete ret._id
    delete ret.__v
  }
})

export const ReportMongoModel = () =>
  model<ReportEntity>('Report', ReportSchema)
