import { headerMenuOnClick } from "./headerMenuOnClick";

export default function addHeaderEventListener(header) {
    const menuList = header.querySelector('.nav-list');

    menuList.addEventListener('click', headerMenuOnClick);
}
