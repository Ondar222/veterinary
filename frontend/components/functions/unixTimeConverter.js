export function unixTimeConverter(unix_time) {

  unix_time = new Date(unix_time).getTime()

  const localDate = new Date().getTime()
  const newsDate = new Date(unix_time)
  const difference = localDate - unix_time

  let minutes = newsDate.getMinutes()
  let month
  let day

  let ending
  let endings

  if (newsDate.getMonth() < 10) {
    month = '0' + newsDate.getMonth()
  }

  if (newsDate.getMinutes() < 10) {
    minutes = '0' + newsDate.getMinutes()
  }

  if (localDate - unix_time < 60000) {

    return 'менее минуты назад'
  }
  else if (difference / 3600000 < 1) {
    ending = Math.round(difference / 60000) % 10

    if (ending != 11 || ending != 12 || ending != 13 || ending != 14) {

      switch (ending) {

        case 1: endings = 'минуту назад'; break;
        case 2: endings = 'минуты назад'; break;
        case 3: endings = 'минуты назад'; break;
        case 4: endings = 'минуты назад'; break;

        default: endings = 'минут назад'
      }
    }
    else {
      ending = 'минут назад'
    }

    return Math.round(difference / 60000) + ' ' + endings
  }

  else if (difference / 3600000 > 1 && difference / 3600000 < 24) {
    ending = Math.round(difference / 3600000)
    if (ending == 11 && ending == 12 && ending == 13 && ending == 14) {
      ending = 'часов назад'
    }
    else {
      switch (ending % 10) {

        case 1: endings = 'час назад'; break;
        case 2: endings = 'часа назад'; break;
        case 3: endings = 'часа назад'; break;
        case 4: endings = 'часа назад'; break;

        default: endings = 'часов назад'
      }
    }

    return Math.round(difference / 3600000) + ' ' + endings
  }

  else if (difference / 3600000 > 24 && difference / 3600000 < 48) {
    return 'вчера в ' + newsDate.getHours() + ':' + minutes
  }

  else if (difference / 3600000 > 48 && difference / 3600000 < 72) {
    return 'позавчера в ' + newsDate.getHours() + ':' + minutes
  }

  else {
    return (newsDate.getDate() + '.' + month + '.' + newsDate.getFullYear() + ' в ' + String(Number(newsDate.getHours())) + ':' + minutes)
  }

}