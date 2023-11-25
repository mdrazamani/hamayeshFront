import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withTranslation } from "react-i18next";

import { makeRoute } from "../../../utils/apiRoutes";
import DataContext from "../../../context/DataContext";
import "../../../assets/css/mainStyle.css";

import FamilyTreeComponent from "./FamilyTreeComponent";

import BreadcrumbComponent from "../../common/breadcrumb.js";
import HelmetComponent from "../../common/helmet.js";

class OrganizerStructure extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rootId: 1,
            language:
                localStorage.getItem("language") ||
                process.env.REACT_APP_DEFAULT_LANGUAGE,
            number: 0,
        };
    }

    static contextType = DataContext;

    componentDidMount() {
        window.addEventListener("languageChanged", this.handleLanguageChange);
        this.context.fetchData(makeRoute("secretariats"), "secretariatsData");
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.language !== this.state.language) {
            this.context.fetchData(
                makeRoute("secretariats"),
                "secretariatsData"
            );
        }
    }

    componentWillUnmount() {
        window.removeEventListener(
            "languageChanged",
            this.handleLanguageChange
        );
    }

    handleLanguageChange = (event) => {
        if (event.detail !== this.state.language) {
            this.setState({ language: event.detail });
        }
    };

    bossOne(data) {
        const conferenceIndex = data.findIndex(
            (item) => item.type === "conferance"
        );

        if (conferenceIndex > 0) {
            const conferenceItem = data.splice(conferenceIndex, 1)[0];
            data.unshift(conferenceItem);
        }

        return data;
    }

    dataCreator(data) {
        data = this.bossOne(data);

        let result = [];
        let bossIdCounter = 1;

        data.forEach((sag) => {
            let boss = {
                id: bossIdCounter,
            };

            // اگر نوع 'conferance' نیست، mid را به boss اضافه کنید
            if (bossIdCounter != 1) boss.mid = 1;

            boss.name = sag.boss.firstName + " " + sag.boss.lastName;
            boss.fName = sag.title;
            boss.img = process.env.REACT_APP_SERVER_IP + sag.boss.profileImage;

            result.push(boss);
            bossIdCounter++;

            // تبدیل داده‌های کاربران
            sag.users.forEach((user) => {
                let userTransformed = {
                    id: bossIdCounter,
                    mid: boss.id, // به جای bossId از boss.id استفاده کنید
                    name: user.firstName + " " + user.lastName,
                    fName: user.role,
                    img: process.env.REACT_APP_SERVER_IP + user.profileImage,
                };
                bossIdCounter++;
                result.push(userTransformed);
            });
        });

        return result;
    }

    render() {
        const { language } = this.state;
        this.state.number += 1;
        const { t } = this.props;
        const { data } = this.context;

        if (!data["secretariatsData"]) return null;

        const secretariats = data["secretariatsData"] || [];
        const hamayeshDetail = this.context.data["hamayeshDetail"];

        console.log(
            "this.dataCreator(secretariats?.data?.data): ",
            this.dataCreator(secretariats?.data?.data)
        );

        return (
            <>
                <HelmetComponent
                    title="organiation_stucture"
                    description="organiation_stucture_meta_desc"
                    imageUrl={
                        process.env.REACT_APP_SERVER_IP +
                        hamayeshDetail?.data?.headerImage
                    }
                />
                <BreadcrumbComponent
                    translate="organiation_stucture"
                    headerImageUrl={hamayeshDetail?.data?.headerImage}
                />

                <div key={language + this.state.number}>
                    <FamilyTreeComponent
                        // treeData={this.dataCreator(secretariats?.data?.data)}
                        treeData={[
                            {
                                id: 1,
                                name: "علی رضوی",
                                fName: "ریاست",
                                img: "http://127.0.0.1:8000/public/uploads/personal/prsonal1.jpg",
                            },
                            {
                                id: 2,
                                mid: 1,
                                name: "محمد صادقی",
                                fName: "دبیرخانه اجرایی",
                                img: "http://127.0.0.1:8000/public/uploads/personal/prsonal2.jpg",
                            },
                            {
                                id: 3,
                                mid: 2,
                                name: "علی رضوی",
                                fName: "admin",
                                img: "http://127.0.0.1:8000/public/uploads/personal/prsonal1.jpg",
                            },
                            {
                                id: 4,
                                mid: 2,
                                name: "محمد صادقی",
                                fName: "admin",
                                img: "http://127.0.0.1:8000/public/uploads/personal/prsonal2.jpg",
                            },
                            {
                                id: 5,
                                mid: 1,
                                name: "محمد صادقی",
                                fName: "دبیرخانه سیاستگذاری",
                                img: "http://127.0.0.1:8000/public/uploads/personal/prsonal2.jpg",
                            },
                            {
                                id: 6,
                                mid: 5,
                                name: "علی رضوی",
                                fName: "admin",
                                img: "http://127.0.0.1:8000/public/uploads/personal/prsonal1.jpg",
                            },
                            {
                                id: 7,
                                mid: 5,
                                name: "محمد صادقی",
                                fName: "admin",
                                img: "http://127.0.0.1:8000/public/uploads/personal/prsonal2.jpg",
                            },
                            {
                                id: 8,
                                mid: 1,
                                name: "علی رضوی",
                                fName: "دبیرخانه علمی",
                                img: "http://127.0.0.1:8000/public/uploads/personal/prsonal1.jpg",
                            },
                            {
                                id: 9,
                                mid: 8,
                                name: "علی رضوی",
                                fName: "admin",
                                img: "http://127.0.0.1:8000/public/uploads/personal/prsonal1.jpg",
                            },
                            {
                                id: 10,
                                mid: 8,
                                name: "محمد صادقی",
                                fName: "admin",
                                img: "http://127.0.0.1:8000/public/uploads/personal/prsonal2.jpg",
                            },
                        ]}
                    />
                </div>
            </>
        );
    }
}

export default withTranslation()(OrganizerStructure);
