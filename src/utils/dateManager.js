// dateManager.js
import moment from "moment";
import "moment/locale/fa";
import mj from "moment-jalaali";

export function showDate(date, showTime = false) {
    let newDate;
    const timeFormat = showTime ? " HH:mm:ss" : "";

    if (process.env.REACT_APP_DEFAULT_LANGUAGE === "fa") {
        mj.loadPersian();
        newDate = mj(date)
            .locale("fa")
            .format("jD jMMMM jYYYY" + timeFormat);
    } else {
        newDate = moment(date)
            .locale("en")
            .format("D MMMM YYYY" + timeFormat);
    }

    return newDate;
}
