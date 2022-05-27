import { Report, ReportRequest } from 'app/reporting/domain/interfaces'
import { validateReportLocation } from 'app/reporting/domain/services'

export const generateSongReport =
  (addNewSongReport: (newSongReport: ReportRequest) => Promise<Report>) =>
  async (songReport: ReportRequest) => {
    if (!validateReportLocation(songReport.location))
      return {
        success: null,
        error: 'Location must be between -180 and 180 and -90 an/docs/rules/indentd 90'
      }

    const report = await addNewSongReport(songReport)

    if (report) return { success: 'Report added successfully', error: null }
    return { success: null, error: 'Error adding report' }
  }
