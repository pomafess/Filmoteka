const onPaginationBtnClick = (e) => {
    e.preventDefault(e);

    if (e.target.dataset.id !== 'pagination-item') {
        return;
    }
    // const inputField = document.querySelector('[name="query"]');
    // const query = inputField.value;
    const currentElement = document.querySelector('.pages-list-item.current-item');
    console.log(currentElement)
 
    if (currentElement) {
        currentElement.classList.remove('current-item')
    }
    const nextActiveElement = e.target;
    nextActiveElement.classList.add('current-item')
    if (e.target !== e.currentTarget) {
        const page = e.target.textContent;
        console.log(page)
        if (page === '...') {
            return;
        }
    }
}