import style from "./SettingsItem.module.css"

import { FaGear } from "react-icons/fa6"

const SettingsItem = () => {
    return (
        <li className={style.gear_icon_container}>
            <FaGear />
        </li>
    )
}

export default SettingsItem
