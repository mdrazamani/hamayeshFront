import React, { Component } from "react";
import { withTranslation } from "react-i18next";

class Timer extends Component {
    constructor(props) {
        super(props);
        // Initialize your state with default values
        this.state = {
            timeLeft: {
                days: 0,
                hours: 0,
                minutes: 0,
                seconds: 0,
            },
            startDate: props.dates.start, // Make sure this prop is being passed correctly
        };
    }

    // A method to calculate the time left based on the startDate
    calculateTimeLeft = () => {
        const difference = +new Date(this.state.startDate) - +new Date(); // Calculate the time difference
        let timeLeft = {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0,
        };

        // console.log("Difference in milliseconds:", difference);

        if (difference > 0) {
            // Update timeLeft only if the event is in the future
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        } else {
            // If the event time has passed, you can clear the interval
            clearInterval(this.timerID);
        }

        return timeLeft;
    };

    componentDidMount() {
        // Set an interval to update the timer
        this.timerID = setInterval(() => {
            const newTimeLeft = this.calculateTimeLeft();
            // Update the state with the new time left
            this.setState((prevState) => ({
                ...prevState,
                timeLeft: newTimeLeft,
            }));
        }, 1000);
    }

    componentWillUnmount() {
        // Clean up the interval on component unmount
        clearInterval(this.timerID);
    }

    render() {
        const { t } = this.props;
        const { timeLeft } = this.state; // Destructure timeLeft from the state

        // Log for debugging
        // console.log("Current Time Left:", timeLeft);

        return (
            <div className="sb-next-event" style={{ direction: "ltr" }}>
                <h3>{t("Start_Event")}</h3>
                <div className="sb-next-event-wrap" id="timer">
                    {/* Render the time left dynamically */}
                    <div className="sb-single-count">
                        <h3 id="days">{timeLeft.days}</h3>
                        <p>{t("Days")}</p>
                    </div>
                    <div className="sb-single-count">
                        <h3 id="hours">{timeLeft.hours}</h3>
                        <p>{t("Hour")}</p>
                    </div>
                    <div className="sb-single-count">
                        <h3 id="minutes">{timeLeft.minutes}</h3>
                        <p>{t("Minute")}</p>
                    </div>
                    <div className="sb-single-count">
                        <h3 id="seconds">{timeLeft.seconds}</h3>
                        <p>{t("Second")}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default withTranslation()(Timer);
