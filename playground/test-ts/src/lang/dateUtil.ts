import moment from 'moment';
const timeZoneOffset = 8 * 60;

// 时区列表,标记了各个时区的偏差: https://www.ibm.com/support/knowledgecenter/zh/SSCRSX_2.2.3/doc/psapsys_restapi/time_zone_list.html
export default {
    "zh": {
        ymd_hms: (timestamp: number) => moment(timestamp).utcOffset(timeZoneOffset).format('YYYY-MM-DD HH:mm:ss'),
        ymd_hm: (timestamp: number) => moment(timestamp).utcOffset(timeZoneOffset).format('YYYY-MM-DD HH:mm'),
        ymd_h: (timestamp: number) => moment(timestamp).utcOffset(timeZoneOffset).format('YYYY-MM-DD HH'),
        ymd: (timestamp: number) => moment(timestamp).utcOffset(timeZoneOffset).format('YYYY-MM-DD'),
        ym: (timestamp: number) => moment(timestamp).utcOffset(timeZoneOffset).format('YYYY-MM'),
        md: (timestamp: number) => moment(timestamp).utcOffset(timeZoneOffset).format('MM-DD'),
    },

    "en": {
        ymd_hms: (timestamp: number) => moment(timestamp).utcOffset(timeZoneOffset).format('YYYY-MM-DD HH:mm:ss'),
        ymd_hm: (timestamp: number) => moment(timestamp).utcOffset(timeZoneOffset).format('YYYY-MM-DD HH:mm'),
        ymd_h: (timestamp: number) => moment(timestamp).utcOffset(timeZoneOffset).format('YYYY-MM-DD HH'),
        ymd: (timestamp: number) => moment(timestamp).utcOffset(timeZoneOffset).format('YYYY-MM-DD'),
        ym: (timestamp: number) => moment(timestamp).utcOffset(timeZoneOffset).format('YYYY-MM'),
        md: (timestamp: number) => moment(timestamp).utcOffset(timeZoneOffset).format('MM-DD'),
    },
}
