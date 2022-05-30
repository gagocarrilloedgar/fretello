import { Report, ReportRequest } from './Report'

export interface ReportRepository {
  addNewSongReport(report: ReportRequest): Promise<Report>
  findReportsBySongId(songId: string): Promise<Report[]>
}
