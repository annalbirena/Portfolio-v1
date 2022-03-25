import { useTranslation } from "react-i18next";

const Welcome = () => {
    const [t] = useTranslation("global");

    return (
        <div className="welcome">
            <div>
                <h1>{t("header.hello-word")}</h1>
                <p>Soy <span>Anna Albirena</span>, front-end software developer & DataBase Analyst.</p>
            </div>
            <button className="btn">CV</button>
        </div>
    )
}

export default Welcome;