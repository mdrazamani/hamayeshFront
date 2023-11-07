import React, { Component } from "react";
import { withTranslation } from "react-i18next";

class TimerSlider extends Component {
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
            <div
                className="hero-featured-countdown"
                id="timer_h2"
                style={{ direction: "ltr" }}
            >
                <div className="hero-countdown-box">
                    <h3 id="days_h2">{timeLeft.days}</h3>
                    <p>{t("Days")}</p>
                </div>
                <div className="hero-countdown-box">
                    <h3 id="hours_h2">{timeLeft.hours}</h3>
                    <p>{t("Hour")}</p>
                </div>
                <div className="hero-countdown-box">
                    <h3 id="minutes_h2">{timeLeft.minutes}</h3>
                    <p>{t("Minute")}</p>
                </div>
                <div className="hero-countdown-box">
                    <h3 id="seconds_h2">{timeLeft.seconds}</h3>
                    <p>{t("Second")}</p>
                </div>
            </div>
        );
    }
}

export default withTranslation()(TimerSlider);
