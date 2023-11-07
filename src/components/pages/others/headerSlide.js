import { Link } from "@material-ui/core";

export const headerSlide = (data, tTitle, t) => (
    <div
        className="breadcrumb-area"
        style={{
            backgroundImage: `linear-gradient(rgba(45, 55, 60, 0.7) 100%, rgba(45, 55, 60, 0.7) 100%), url('${
                process.env.REACT_APP_SERVER_IP + data?.headerImage
            }')`,
        }}
    >
        <div className="container">
            <div className="row align-items-end">
                <div className="col-lg-12">
                    <div className="breadcrumb-content">
                        <div className="page-outlined-text">
                            <h1>{t(tTitle)}</h1>
                        </div>
                        <h2 className="page-title">{t(tTitle)}</h2>
                        <ul className="page-switcher">
                            <li>
                                <Link
                                    onClick={this.scrollTop}
                                    to={`${process.env.PUBLIC_URL}/`}
                                >
                                    Home <i className="bi bi-caret-left" />
                                </Link>
                            </li>
                            <li>{t(tTitle)}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
);
