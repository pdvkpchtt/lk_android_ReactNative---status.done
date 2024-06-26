import moment from 'moment/moment'
import 'moment/locale/ru'
import 'react-native-get-random-values'
import { v4 as uuidv4 } from 'uuid'
import getStartDay from '../../../shared/utils/getStartDay'
import { useUserStore } from '../../user'
import { useNotesStore } from '../../notes'

moment.locale('ru')
moment.weekdays(true)

export const weekValidator = (week, weekNumber) => {
  const preparedDays = []
  const notes = useNotesStore.getState().notes

  const group = useUserStore.getState().getStudyGroup()
  const days = []
  let dayStart = getStartDay()
  dayStart.add(weekNumber - 1, 'weeks')

  for (let i = 0; i < 7; i++) {
    days[i] = {}
    days[i].date = dayStart.format('dddd, D MMMM')
    days[i].lessons = []
    days[i].weekNumber = weekNumber
    days[i].fullDate = dayStart.format('DD.MM.YYYY')
    dayStart.add(1, 'days')
  }

  for (let i of week) {
    days[parseInt(i.dayweekid) - 1].lessons.push(i)
  }

  for (let day of days) {
    if (day.lessons.length) {
      const lessons = []
      const filteredLessonsForGroup = day.lessons.filter((item) => item.gruppa === group)
      if (filteredLessonsForGroup.length === 0) {
        day.lessons = []
        continue
      }
      const filteredDayLessons = filteredLessonsForGroup.sort((a, b) => b.paraclockid - a.paraclockid)
      const lastLessonNumber = filteredDayLessons[0].paraclockid

      for (let i = 1; i <= lastLessonNumber; i++) {
        const filteredLessons = filteredLessonsForGroup.filter((lesson) => lesson.paraclockid === i)
        if (filteredLessons.length) {
          lessons.push({
            lessons: filteredLessons,
            key: uuidv4(),
          })
        }
      }
      day.lessons = lessons
    }
  }

  for (let day of days) {
    if (day.lessons.length > 1) {
      for (let i = 1; i < day.lessons.length; i++) {
        day.lessons[i].lessons.forEach((lesson) => (lesson.prevTime = day.lessons[i - 1].lessons[0].end_time))
      }
    }
  }

  days.map((day) => {
    preparedDays.push({
      shownDate: String(day.date),
      fullDate: day.fullDate,
      weekNumber: day.weekNumber,
      key: uuidv4(),
    })
    const dayNotes = notes.filter((item) => item.group === group && item.date === day.fullDate)
    preparedDays.push(...dayNotes)
    let lessons = [{ key: uuidv4(), lessons: [] }]
    if (day.lessons.length) {
      lessons = day.lessons
    }
    preparedDays.push(...lessons)
  })

  return preparedDays
}
