import moment from 'moment/moment'
import 'moment/locale/ru'
import 'react-native-get-random-values'
import { v4 as uuidv4 } from 'uuid'
import getStartDay from '../../../shared/utils/getStartDay'

moment.locale('ru')
moment.weekdays(true)

export const groupScheduleWeekValidator = (week, weekNumber, notes) => {
  const preparedDays = []
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
    const lesson = {}
    lesson.key = uuidv4()
    switch (i['NVIDZANAT']) {
      case 'лекция':
        lesson.type = 'лекция'
        break
      case 'практическое занятие':
        lesson.type = 'практика'
        break
      case 'лаб.работа':
        lesson.type = 'лабораторная'
        break
      case 'экзамен':
        lesson.type = 'экзамен'
        break
      case 'зачет':
        lesson.type = 'зачет'
        break
      default:
        lesson.type = 'прочее'
    }
    if (i['NVIDZANAT'].includes('консультация') || i['NVIDZANAT'].includes('конс')) {
      lesson.type = 'консультация'
    }

    lesson.start_time = i['START_TIME'].slice(0, -3)
    lesson.end_time = i['END_TIME'].slice(0, -3)
    lesson.auditorium = i['AUD'] === '-' ? null : i['AUD']
    lesson.teacher_name = i['TEACHER_NAME'] === '  ' ? null : i['TEACHER_NAME']
    lesson.discipline_name = i['NDISC']
    lesson.podgruppa = i['PODGRUPPA']
    lesson.link = null
    lesson.paraclockid = i['PARA']
    lesson.ddate = days[parseInt(i['DAYWEEK']) - 1].fullDate
    days[parseInt(i['DAYWEEK']) - 1].lessons.push(lesson)
  }

  for (let day of days) {
    if (day.lessons.length) {
      const lessons = []
      const filteredDayLessons = day.lessons.sort((a, b) => b.paraclockid - a.paraclockid)
      const lastLessonNumber = filteredDayLessons[0].paraclockid

      for (let i = 1; i <= lastLessonNumber; i++) {
        const filteredLessons = day.lessons.filter((lesson) => lesson.paraclockid === i)
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
    let lessons = [{ key: uuidv4(), lessons: [] }]
    if (day.lessons.length) {
      lessons = day.lessons
    }
    preparedDays.push(...lessons)
  })

  return preparedDays
}
