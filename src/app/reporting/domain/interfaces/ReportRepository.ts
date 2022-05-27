import { Report, ReportRequest } from './Report'

export interface ReportRepository {
  addNewSongReport(report: ReportRequest): Promise<Report>
}
