import { ReportRequest } from './Report'

export interface ReportService {
  generateSongReport(
    report: ReportRequest
  ): Promise<{ success: string | null; error: string | null }>
}
