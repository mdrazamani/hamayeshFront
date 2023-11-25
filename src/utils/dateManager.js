// dateManager.js
import moment from "moment";
import "moment/locale/fa";
import mj from "moment-jalaali";

export function showDate(date, showTime = false) {
    let newDate;
    const timeFormat = showTime ? " HH:mm:ss" : "";

    function determineLanguage() {
        const languageFromLocalStorage = localStorage.getItem("language");

        return (
            languageFromLocalStorage ||
            process.env.REACT_APP_DEFAULT_LANGUAGE ||
            "en"
        );
    }

    const lang = determineLanguage();
    let direction = "rtl";
    if (lang === "en") {
        direction = "ltr";
    } else {
        direction = "rtl";
    }

    if (lang === "fa") {
        mj.loadPersian();
        newDate = mj(date)
            .locale("fa")
            .format("jD jMMMM jYYYY" + timeFormat);
    } else {
        newDate = moment(date)
            .locale("en")
            .format("D MMMM YYYY" + timeFormat);
    }

    return (
        <div style={{ direction: direction, display: "inline-block" }}>
            {newDate}
        </div>
    );
}
