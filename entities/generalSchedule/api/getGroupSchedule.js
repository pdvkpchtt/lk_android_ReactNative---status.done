import apiClient from '../../../shared/apiClient'
import getCurrentWeekNumber from '../../../shared/utils/getCurrentWeekNumber'
import getNow from '../../schedule/api/getNow'

export default async function getGroupSchedule(settings, weekNumber) {
  if (!weekNumber) {
    weekNumber = await getNow()
  }

  if (weekNumber < 0) {
    weekNumber = 1
  }

  const data = await apiClient.post(
    '',
    `modul=get_rasp_student&param={"gruppa":"${settings['GRUPPA']}", "id_filial":${settings['FILIAL']}, "beginweek":${weekNumber}, "endweek":${weekNumber}}`,
    {
      params: {
        obj: 'rasp_out',
      },
    }
  )

  const currentWeek = { weekNumber: weekNumber, week: data.data }
  return currentWeek
}
