import React, { useState, useEffect } from "react";
import i18n from "i18next";
import "/node_modules/flag-icons/css/flag-icons.min.css";
import "./style.css";

const LanguageSelector = () => {
    const [language, setLanguage] = useState(
        localStorage.getItem("language") ||
            process.env.REACT_APP_DEFAULT_LANGUAGE
    );
    const [selectedIcon, setSelectedIcon] = useState("");

    const languages = [
        { code: "fa", name: "فارسی", icon: "fi fi-ir" },
        { code: "en", name: "English", icon: "fi fi-gb" },
    ];

    useEffect(() => {
        const savedLanguage =
            localStorage.getItem("language") ||
            process.env.REACT_APP_DEFAULT_LANGUAGE;
        setLanguage(savedLanguage);
        const newIcon = languages.find(
            (lang) => lang.code === savedLanguage
        ).icon;
        setSelectedIcon(newIcon);
    }, []);

    const selectLanguage = (langCode) => {
        setLanguage(langCode);
        const newIcon = languages.find((lang) => lang.code === langCode).icon;
        setSelectedIcon(newIcon);

        localStorage.setItem("language", langCode);
        i18n.changeLanguage(langCode); // تغییر زبان در i18next
        window.dispatchEvent(
            new CustomEvent("languageChanged", { detail: langCode })
        );
    };

    return (
        <nav
            className="main-nav"
            style={{ width: "100px", textAlign: "center" }}
        >
            <ul>
                <li
                    className="has-child-menu"
                    style={{ padding: "30px 20px", cursor: "pointer" }}
                >
                    <div>
                        <span
                            className={
                                selectedIcon ||
                                languages.find((lang) => lang.code === language)
                                    .icon
                            }
                            style={{ fontSize: "22px", borderRadius: "4px" }}
                        ></span>
                    </div>
                    <i className="fl flaticon-plus">+</i>
                    <ul
                        className="sub-menu"
                        style={{ textAlign: "left", marginTop: "32px" }}
                    >
                        {languages.map((lang) => (
                            <li
                                style={{ padding: "10px", cursor: "pointer" }}
                                className="language-li2"
                                key={lang.code}
                                onClick={() => selectLanguage(lang.code)}
                            >
                                <span
                                    className={lang.icon}
                                    style={{
                                        fontSize: "22px",
                                        borderRadius: "4px",
                                    }}
                                ></span>
                                <span style={{ marginLeft: "10px" }}>
                                    {lang.name}
                                </span>
                            </li>
                        ))}
                    </ul>
                </li>
            </ul>
        </nav>
    );
};

export default LanguageSelector;
