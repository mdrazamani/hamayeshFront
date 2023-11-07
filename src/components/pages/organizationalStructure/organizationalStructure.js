import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withTranslation } from "react-i18next";
import TreeView from "@mui/lab/TreeView";
import TreeItem from "@mui/lab/TreeItem";
import { styled } from "@mui/system";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { makeRoute } from "../../../utils/apiRoutes";
import DataContext from "../../../context/DataContext";
import "../../../assets/css/mainStyle.css";

import Tree from "react-d3-tree";

import ReactFamilyTree from "react-family-tree";
import GoJsDiagram from "../../common/GoJsDiagram";
import FamilyTree from "@balkangraph/familytree.js";
import FamilyTreeComponent from "./FamilyTreeComponent";

class OrganizerStructure extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nodes: [
                { id: "1", name: "John" },
                { id: "2", parentId: "1", name: "Smith" },
                { id: "3", parentId: "1", name: "Jane" },
            ],
            rootId: 1,
        };
    }

    static contextType = DataContext;

    componentDidMount() {
        this.context.fetchData(makeRoute("secretariats"), "secretariatsData");
    }

    dataCreator(data) {
        let result = [];

        let i = 1;

        data.forEach((sag) => {
            let bossId = i;
            let boss = {
                id: bossId,
                name: sag.boss.firstName + " " + sag.boss.lastName,
                fName: sag.title,
                // img: sag.boss.profileImage,
                img: process.env.REACT_APP_SERVER_IP + sag.boss.profileImage,
            };
            result.push(boss);
            i++;
            // Convert users data

            sag.users.forEach((user) => {
                let userTransformed = {
                    id: i,
                    mid: bossId,
                    name: user.firstName + " " + user.lastName,
                    fName: user.role,
                    // img: user.profileImage,
                    img: process.env.REACT_APP_SERVER_IP + user.profileImage,
                };
                i++;
                result.push(userTransformed);
            });
        });
        // Extract boss details and push to the result

        return result;
    }

    render() {
        const { t } = this.props;
        const { data } = this.context;

        if (!data["secretariatsData"]) return null;

        const secretariats = data["secretariatsData"] || [];
        const hamayeshDetail = this.context.data["hamayeshDetail"];

        console.log("asasaas: ", this.dataCreator(secretariats?.data?.data));

        return (
            <>
                <div
                    className="breadcrumb-area"
                    style={{
                        backgroundImage: `linear-gradient(rgba(45, 55, 60, 0.7) 100%, rgba(45, 55, 60, 0.7) 100%), url('${
                            process.env.REACT_APP_SERVER_IP +
                            hamayeshDetail?.data?.headerImage
                        }')`,
                    }}
                >
                    <div className="container">
                        <div className="row align-items-end">
                            <div className="col-lg-12">
                                <div className="breadcrumb-content">
                                    <div className="page-outlined-text">
                                        <h1>{t("organiation_stucture")}</h1>
                                    </div>
                                    <h2 className="page-title">
                                        {t("organiation_stucture")}
                                    </h2>
                                    <ul className="page-switcher">
                                        <li>
                                            <Link
                                                onClick={this.scrollTop}
                                                to={`${process.env.PUBLIC_URL}/`}
                                            >
                                                Home{" "}
                                                <i className="bi bi-caret-left" />
                                            </Link>
                                        </li>
                                        <li>{t("organiation_stucture")}</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <FamilyTreeComponent
                        treeData={this.dataCreator(secretariats?.data?.data)}
                        // treeData={[
                        //     {
                        //         id: 1,
                        //         name: "محمدرضا زمانی",
                        //         fName: "دبیرخانه علمی",
                        //         img: "https://cdn.balkan.app/shared/m60/1.jpg",
                        //     },
                        //     {
                        //         id: 2,
                        //         mid: 1,
                        //         name: "محمدرضا زمانی",
                        //         fName: "admin",
                        //         img: "https://cdn.balkan.app/shared/m60/1.jpg",
                        //     },
                        //     {
                        //         id: 3,
                        //         mid: 1,
                        //         name: "محسن رضوانی",
                        //         fName: "user",
                        //         img: "https://cdn.balkan.app/shared/m60/1.jpg",
                        //     },
                        //     {
                        //         id: 4,
                        //         name: "محسن رضوانی",
                        //         fName: "دبیرخانه اجرایی",
                        //         img: "https://cdn.balkan.app/shared/m60/1.jpg",
                        //     },
                        //     {
                        //         id: 5,
                        //         mid: 4,
                        //         name: "محمدرضا زمانی",
                        //         fName: "admin",
                        //         img: "https://cdn.balkan.app/shared/m60/1.jpg",
                        //     },
                        //     {
                        //         id: 6,
                        //         mid: 4,
                        //         name: "محسن رضوانی",
                        //         fName: "user",
                        //         img: "https://cdn.balkan.app/shared/m60/1.jpg",
                        //     },
                        //     {
                        //         id: 7,
                        //         name: "محسن رضوانی",
                        //         fName: "دبیرخانه سیاستگذاری",
                        //         img: "https://cdn.balkan.app/shared/m60/1.jpg",
                        //     },
                        //     {
                        //         id: 8,
                        //         mid: 7,
                        //         name: "محمدرضا زمانی",
                        //         fName: "admin",
                        //         img: "https://cdn.balkan.app/shared/m60/1.jpg",
                        //     },
                        //     {
                        //         id: 9,
                        //         mid: 7,
                        //         name: "محسن رضوانی",
                        //         fName: "user",
                        //         img: "https://cdn.balkan.app/shared/m60/1.jpg",
                        //     },
                        //     {
                        //         id: 10,
                        //         mid: 7,
                        //         name: "محمدرضا زمانی",
                        //         fName: "admin",
                        //         img: "https://cdn.balkan.app/shared/m60/1.jpg",
                        //     },
                        //     {
                        //         id: 11,
                        //         mid: 7,
                        //         name: "محسن رضوانی",
                        //         fName: "user",
                        //         img: "https://cdn.balkan.app/shared/m60/1.jpg",
                        //     },
                        // ]}
                    />
                </div>
            </>
        );
    }
}

export default withTranslation()(OrganizerStructure);
