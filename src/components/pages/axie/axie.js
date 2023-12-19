import React, { Component } from "react";
import { withTranslation } from "react-i18next";
import { Tree } from "react-arborist";
import DataContext from "../../../context/DataContext";
import { makeRoute } from "../../../utils/apiRoutes";
import BreadcrumbComponent from "../../common/breadcrumb.js";
import HelmetComponent from "../../common/helmet.js";

class AxisTree extends Component {
    constructor(props) {
        super(props);
        this.state = {
            openNodes: {},
            language:
                localStorage.getItem("language") ||
                process.env.REACT_APP_DEFAULT_LANGUAGE,
            number: 0,
        };
    }

    static contextType = DataContext; // Using the contextType to access the DataContext
    componentDidMount() {
        window.addEventListener("languageChanged", this.handleLanguageChange);
        this.context.fetchData(makeRoute("axies", null, "ordered"), "axis");
        this.context.fetchData(makeRoute("axies"), "axisDataCount");
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.language !== this.state.language) {
            this.context.fetchData(makeRoute("axies", null, "ordered"), "axis");
            this.context.fetchData(makeRoute("axies"), "axisDataCount");
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
        const { language } = this.state;
        const childrenCount = node?.data?.children?.length;
        const hasChildren = node?.data?.children?.length > 0;
        const additionalProps = hasChildren;
        const hasParent = Boolean(node?.data?.parent);
        const level = node?.data?.level ? node?.data?.level : 0;

        const marginRight = 4 * level;

        const combinedStyle = {
            ...style,
            marginRight:
                language === "fa" && hasParent ? `${marginRight}%` : "0",
            marginLeft:
                language === "en" && hasParent ? `${marginRight}%` : "0",
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
                {language === "fa" ? node?.data?.name : ""}
                <span>
                    {" "}
                    {/* space between name and icon */}
                    {hasChildren
                        ? this.state.openNodes[node?.data?.id]
                            ? "🗂️"
                            : "🗂️"
                        : "🏷️"}
                </span>
                {language === "en" ? node?.data?.name : ""}
                {hasChildren ? (
                    <div
                        style={{
                            display: "inline-block",
                            float:
                                language === "fa"
                                    ? "left"
                                    : "right" /*****************/,
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
        const { language } = this.state;
        this.state.number += 1;

        const { t } = this.props;
        const { data } = this.context;

        if (!data["axis"]) return null;
        if (!data["axisDataCount"]) return null;

        const axis = data["axis"] || [];
        const axisCount =
            data["axisDataCount"]?.data?.payload?.pagination?.total || [];
        const hamayeshDetail = this.context.data["hamayeshDetail"];

        const treeWidth =
            window.innerWidth > 1200 ? 1000 : window.innerWidth * 0.8;
        const treeHeight = window.innerHeight * (axisCount * 0.08);

        return (
            <>
                <HelmetComponent
                    title="conference_axes"
                    description="conference_axes_meta_desc"
                    imageUrl={
                        process.env.REACT_APP_SERVER_IP +
                        hamayeshDetail?.data?.headerImage
                    }
                />
                <BreadcrumbComponent
                    translate="conference_axes"
                    headerImageUrl={hamayeshDetail?.data?.headerImage}
                />
                <div key={language + this.state.number}>
                    <div
                        style={{
                            margin: "150px auto 20px auto", // This centers the div horizontally
                            textAlign:
                                language === "fa"
                                    ? "right"
                                    : "left" /*****************/,
                            fontFamily: "Arial, sans-serif",
                            overflow: "auto",
                            display: "flex", // Flex container
                            alignItems: "center", // Center vertically
                            justifyContent: "center", // Center horizontally
                            // height: "100vh", // Full screen height
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
                            style={{
                                overflow: "auto",
                                margin: "0 auto",
                            }}
                        >
                            {this.Node}
                        </Tree>
                    </div>
                </div>
            </>
        );
    }
}

export default withTranslation()(AxisTree);
