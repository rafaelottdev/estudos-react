import style from "./Settings.module.css"

import { FaGear } from "react-icons/fa6"

const Settings = () => {
    return (
        <li className={style.gear_icon_container}>
            <FaGear />
        </li>
    )
}

export default Settings
