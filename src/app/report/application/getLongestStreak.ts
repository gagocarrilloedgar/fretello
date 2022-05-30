import { Report } from 'app/report/domain/interfaces'

export const getLongestStreak =
  (findSongReportByQuery: (userId: string) => Promise<Report[]>) =>
  async (
    songId: string,
    userId: string
  ): Promise<{ success: number | null; error: null | string }> => {
    const reports = await findSongReportByQuery(userId)
    if (!reports) return { success: null, error: 'No reports found' }

    const orderedReports = [...reports].sort((a: Report, b: Report): any => {
      return a.createdAt.getTime() - b.createdAt.getTime()
    })

    let streak = 0
    let count = 0

    orderedReports.forEach((report: Report) => {
      if (report.songId === songId) return count++
      if (report.songId !== songId && count > streak) return (streak = count)
      count = 1
    })

    return { success: streak, error: null }
  }
