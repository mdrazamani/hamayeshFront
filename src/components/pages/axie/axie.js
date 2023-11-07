import React, { Component } from "react";
import { withTranslation } from "react-i18next";
import TreeView from "@mui/lab/TreeView";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import TreeItem from "@mui/lab/TreeItem";

import { Tree } from "react-arborist";

import InfoIcon from "@mui/icons-material/Info";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { styled } from "@mui/system";

import DataContext from "../../../context/DataContext";
import Error from "../../common/Error";
import Loading from "../../common/Loading";
import { makeRoute } from "../../../utils/apiRoutes";
import { Link } from "react-router-dom";
import CustomizedTreeView from "../../common/DataTree ";

class AxisTree extends Component {
    constructor(props) {
        super(props);
        this.state = {
            openNodes: {},
        };
    }

    static contextType = DataContext; // Using the contextType to access the DataContext
    componentDidMount() {
        this.context.fetchData(makeRoute("axies", null, "ordered"), "axis");
        this.context.fetchData(makeRoute("axies"), "axisDataCount");
    }

    transformDataFunction = (data) => {
        return data?.map((item) => {
            let newItem = {
                id: item._id,
                name: item.title,
                parent: item?.parent,
                level: item?.level,
            };
            if (item.children) {
                newItem.children = this.transformDataFunction(item.children);
            }
            return newItem;
        });
    };

    Node = ({ node, style, dragHandle }) => {
        const childrenCount = node?.data?.children?.length;
        const hasChildren = node?.data?.children?.length > 0;
        const additionalProps = hasChildren;
        const hasParent = Boolean(node?.data?.parent);
        const level = node?.data?.level ? node?.data?.level : 0;

        const marginRight = 4 * level;

        // const combinedStyle = {
        //     ...style,
        //     marginRight: hasChildren ? "" : "4%",
        //     cursor: hasChildren ? "pointer" : "",
        //     padding: "10px ", // increased padding for a more spacious look
        //     fontSize: "18px", // slightly larger font size
        //     fontWeight: "bold",
        //     borderRadius: "5px", // rounded edges
        //     boxShadow: "1px 2px 3px rgba(0, 0, 0, 0.08)",
        //     transition: "background-color 0.2s", // smooth transition for hover effects
        //     backgroundColor: hasChildren ? "#f5f5f5" : "#fff", // different background for nodes with children
        //     ":hover": {
        //         backgroundColor: "#000", // change background on hover
        //     },
        // };

        // const isRootWithChildren = hasChildren && node?.data?.parent;

        // const combinedStyle = {
        //     ...style,
        //     marginRight: isRootWithChildren ? "4%" : hasChildren ? "" : "4%",
        //     cursor: hasChildren ? "pointer" : "",
        //     padding: "10px ", // increased padding for a more spacious look
        //     fontSize: "18px", // slightly larger font size
        //     fontWeight: "bold",
        //     borderRadius: "5px", // rounded edges
        //     boxShadow: "1px 2px 3px rgba(0, 0, 0, 0.08)",
        //     transition: "background-color 0.2s", // smooth transition for hover effects
        //     backgroundColor: hasChildren ? "#f5f5f5" : "#fff", // different background for nodes with children
        //     ":hover": {
        //         backgroundColor: "#000", // change background on hover
        //     },
        // };

        const combinedStyle = {
            ...style,
            marginRight: hasParent ? `${marginRight}%` : "0",
            cursor: hasChildren ? "pointer" : "",
            padding: "10px ", // increased padding for a more spacious look
            fontSize: "18px", // slightly larger font size
            fontWeight: "bold",
            borderRadius: "5px", // rounded edges
            boxShadow: "1px 2px 3px rgba(0, 0, 0, 0.08)",
            transition: "background-color 0.2s", // smooth transition for hover effects
            backgroundColor: hasChildren ? "#f5f5f5" : "#fff", // different background for nodes with children
            ":hover": {
                backgroundColor: "#000", // change background on hover
            },
        };

        return (
            <div
                style={combinedStyle}
                {...additionalProps}
                ref={dragHandle}
                onClick={() => node.toggle()}
            >
                {node?.data?.name}
                <span>
                    {" "}
                    {/* space between name and icon */}
                    {hasChildren
                        ? this.state.openNodes[node?.data?.id]
                            ? "🗂️"
                            : "🗂️"
                        : "🏷️"}
                </span>
                {hasChildren ? (
                    <div
                        style={{
                            display: "inline-block",
                            float: "left",
                            padding: "5px 10px",
                            borderRadius: "12px",
                            backgroundColor: "#e0e0e0",
                            color: "#333",
                            fontSize: "15px",
                            fontWeight: "bold",
                            boxShadow: "1px 1px 3px rgba(0, 0, 0, 0.1)",
                            margin: "0 10px 0 0", // Add some margin to separate it from other elements
                        }}
                    >
                        {childrenCount}
                    </div>
                ) : (
                    ""
                )}
            </div>
        );
    };

    render() {
        const { t } = this.props;
        const { data } = this.context;
        const axis = data["axis"] || [];
        const axisCount =
            data["axisDataCount"]?.data?.payload?.pagination?.total || [];
        const hamayeshDetail = this.context.data["hamayeshDetail"];

        const treeWidth =
            window.innerWidth > 1200 ? 1000 : window.innerWidth * 0.8;
        const treeHeight = window.innerHeight * (axisCount * 0.08);

        console.log("asasa: ", this.transformDataFunction(axis?.data));

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
                                        <h1>{t("conference_axes")}</h1>
                                    </div>
                                    <h2 className="page-title">
                                        {t("conference_axes")}
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
                                        <li>{t("conference_axes")}</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div
                    style={{
                        margin: "150px auto 20px auto", // This centers the div horizontally
                        textAlign: "right",
                        fontFamily: "Arial, sans-serif",
                        overflow: "visible",
                        display: "flex", // Flex container
                        alignItems: "center", // Center vertically
                        justifyContent: "center", // Center horizontally
                        height: "100vh", // Full screen height
                        fontFamily: "mikhak",
                    }}
                >
                    <Tree
                        initialData={this.transformDataFunction(axis?.data)}
                        openByDefault={true}
                        width={treeWidth}
                        height={treeHeight}
                        indent={24}
                        rowHeight={54}
                        overscanCount={1}
                        paddingTop={30}
                        paddingBottom={20}
                        padding={25}
                        style={{ overflow: "visible", margin: "0 auto" }}
                    >
                        {this.Node}
                    </Tree>
                </div>
            </>
        );
    }
}

export default withTranslation()(AxisTree);
