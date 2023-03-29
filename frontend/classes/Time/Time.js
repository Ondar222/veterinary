class Time {

    timeConvert(unixtime) {

        unixtime = new Date(unixtime).getTime()

        const localDate = new Date().getTime()
        const newsDate = new Date(unixtime)
        const difference = localDate - unixtime

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

        if (localDate - unixtime < 60000) {

            return 'менее минуты назад'
        } else if (difference / 3600000 < 1) {
            ending = Math.round(difference / 60000) % 10

            if (ending != 11 || ending != 12 || ending != 13 || ending != 14) {

                switch (ending) {

                    case 1:
                        endings = 'минуту назад';
                        break;
                    case 2:
                        endings = 'минуты назад';
                        break;
                    case 3:
                        endings = 'минуты назад';
                        break;
                    case 4:
                        endings = 'минуты назад';
                        break;

                    default:
                        endings = 'минут назад'
                }
            } else {
                ending = 'минут назад'
            }

            return Math.round(difference / 60000) + ' ' + endings
        } else if (difference / 3600000 > 1 && difference / 3600000 < 24) {
            ending = Math.round(difference / 3600000)
            if (ending == 11 && ending == 12 && ending == 13 && ending == 14) {
                ending = 'часов назад'
            } else {
                switch (ending % 10) {

                    case 1:
                        endings = 'час назад';
                        break;
                    case 2:
                        endings = 'часа назад';
                        break;
                    case 3:
                        endings = 'часа назад';
                        break;
                    case 4:
                        endings = 'часа назад';
                        break;

                    default:
                        endings = 'часов назад'
                }
            }

            return Math.round(difference / 3600000) + ' ' + endings
        } else if (difference / 3600000 > 24 && difference / 3600000 < 48) {
            return 'вчера в ' + newsDate.getHours() + ':' + minutes
        } else if (difference / 3600000 > 48 && difference / 3600000 < 72) {
            return 'позавчера в ' + newsDate.getHours() + ':' + minutes
        } else {
            return (newsDate.getDate() + '.' + month + '.' + newsDate.getFullYear() + ' в ' + newsDate.getHours() + ':' + minutes)
        }
    }

    signingDateConverter(unixtime) {
        if (unixtime != null) {
            unixtime = new Date(unixtime)

            const newsDate = new Date(unixtime)

            let month
            let day

            if (newsDate.getDate() < 10) {
                day = '0' + newsDate.getDate()
            }
            else {
                day = newsDate.getDate()
            }

            if (Number(newsDate.getMonth()+1) < 10) {
                month = '0' + newsDate.getMonth()
            }
            else {
                month = newsDate.getMonth() + 1
            }

            return (day + '.' + month + '.' + newsDate.getFullYear())

        } else {
            return "не указана"
        }
    }

}

export default new Time