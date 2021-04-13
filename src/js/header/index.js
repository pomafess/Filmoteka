import { headerMenuOnClick } from "./headerMenuOnClick";

export default function addHeaderEventListener(header, currentPath) {
    console.log(currentPath);
    const menuList = header.querySelector('.nav-list');
    console.log(menuList);
    const links = menuList.querySelectorAll("a");
    console.log(links);
    const activeElement = [].find.call(links, (elem)=> {
        const pathname = elem.href.split("/").pop();
        console.log(pathname);
        return (`/${pathname}` === currentPath )
    });
    console.log(activeElement)
    activeElement.classList.add("active");
    menuList.addEventListener('click', headerMenuOnClick);
}
