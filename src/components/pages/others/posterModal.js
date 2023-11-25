import React from "react";
import { withTranslation } from "react-i18next";
import Modal from "react-modal";
import FetchDataService from "../../../utils/fetchDataFunc";
import DataContext from "../../../context/DataContext";

class PosterModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isModalOpen: false,
            modalImageSrc: "",
            modalImageAlt: "",
            hamayeshDetail: this.props.hamayeshDetail,
        };
    }
    static contextType = DataContext; // Using the contextType to access the DataContext
    fetchDataFunction = () => {
        // Options should be set according to the parameters your API needs
        const options = {
            dataName: "HamayeshData",
            api: {
                apiTitle: "hamayesh-detail",
                id: null, // If these values are unnecessary, you could remove them
                subTitle: null, // same as above
                options: null, // same as above
            },
        };

        // Here, we're passing the context's fetchData method to our service
        FetchDataService(this.context.fetchData, options);
    };

    componentDidMount() {
        // if (!this.state.hamayeshDetail?.data?.poster) this.fetchDataFunction();
        this.fetchDataFunction();

        Modal.setAppElement("#root");
    }

    openModal = (src, alt) => {
        this.setState({
            isModalOpen: true,
            modalImageSrc: src,
            modalImageAlt: alt,
        });
    };

    closeModal = () => {
        this.setState({ isModalOpen: false });
    };

    renderImagePreview(src, alt) {
        return (
            <div
                onClick={() => this.openModal(src, alt)}
                style={{ textAlign: "center", maxWidth: "100%" }}
            >
                <img
                    src={src}
                    alt={alt}
                    style={{
                        width: "300px",
                        height: "auto",
                        cursor: "zoom-in",
                        transition: "width 0.3s, height 0.3s",
                    }}
                />
            </div>
        );
    }

    render() {
        const { t } = this.props;
        const { data } = this.context;
        if (!data["HamayeshData"]) return null;
        this.state.hamayeshDetail = this.context.data["HamayeshData"] || [];

        const { isModalOpen, modalImageSrc, modalImageAlt } = this.state;

        return (
            <div
                className="container"
                style={{ textAlign: "center", marginTop: "150px" }}
            >
                <div className="section-head-style-two">
                    <h3>
                        <span>{t("Conference_poster")}</span>
                    </h3>
                </div>
                {this.renderImagePreview(
                    `${process.env.REACT_APP_SERVER_IP}${this.state.hamayeshDetail?.data?.poster}`,
                    this.state.hamayeshDetail?.data?.faTitle
                        ? this.state.hamayeshDetail?.data?.faTitle
                        : this.state.hamayeshDetail?.data?.enTitle
                )}

                <Modal
                    isOpen={isModalOpen}
                    onRequestClose={this.closeModal}
                    contentLabel="Image Modal"
                    style={customStyles}
                >
                    <div style={modalHeaderStyle}>
                        <button
                            onClick={this.closeModal}
                            style={closeButtonStyle}
                        >
                            ×
                        </button>
                    </div>
                    <div style={{ height: "50px" }}></div>
                    <img
                        src={modalImageSrc}
                        alt={modalImageAlt}
                        style={imageStyle}
                    />
                </Modal>
            </div>
        );
    }
}

const customStyles = {
    content: {
        // ... other styles ...
        overflowY: "scroll",
        marginTop: "50px",
        maxWidth: "50vw",
        margin: "auto",
        padding: "20px",
    },
    overlay: {
        backgroundColor: "rgba(0, 0, 0, 0.75)",
        zIndex: 1000,
    },
};

const modalHeaderStyle = {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: "10px",
};

const closeButtonStyle = {
    background: "transparent",
    border: "none",
    fontSize: "2em",
    cursor: "pointer",
    color: "#ce1446",
    // توجه: در اینجا marginRight استفاده شده است، اگر می‌خواهید دکمه در سمت چپ باشد، از marginLeft استفاده کنید.
    marginRight: "auto",
};

const imageStyle = {
    width: "100%",
    height: "auto",
    maxHeight: "140vh",
    display: "block",
    margin: "0 auto",
    padding: "20px",
};

export default withTranslation()(PosterModal);
