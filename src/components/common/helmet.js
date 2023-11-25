import React, { Component } from "react";
import { Helmet } from "react-helmet";
import { withTranslation } from "react-i18next";

class HelmetComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            language:
                localStorage.getItem("language") ||
                process.env.REACT_APP_DEFAULT_LANGUAGE,
            number: 0,
        };
    }

    componentDidMount() {
        window.addEventListener("languageChanged", this.handleLanguageChange);
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

    render() {
        const { t } = this.props;
        const { language } = this.state;
        const { title, description, imageUrl } = this.props;

        return (
            <Helmet>
                <html lang={language} />
                <title>{t(title)}</title>
                <meta name="description" content={t(description)} />

                {/* Open Graph / Facebook */}
                <meta property="og:title" content={t(title)} />
                <meta property="og:description" content={t(description)} />
                <meta property="og:type" content="website" />
                <meta property="og:url" content={window.location.href} />
                <meta property="og:image" content={imageUrl} />

                {/* Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={t(title)} />
                <meta name="twitter:description" content={t(description)} />
                <meta name="twitter:image" content={imageUrl} />

                {/* سایر تگ‌های مهم SEO */}
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <meta name="robots" content="index, follow" />
                <meta name="author" content="نام نویسنده یا شرکت" />
                {/* می‌توانید سایر تگ‌های مورد نیاز خود را اضافه کنید */}
            </Helmet>
        );
    }
}

export default withTranslation()(HelmetComponent);
