function showPage(pageId) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.remove('active'));
    document.getElementById(pageId).classList.add('active');
}

function showSubCategory(mainCategory, subCategoryId) {
    const subcategories = document.querySelectorAll(`#${mainCategory} .subcategory`);
    subcategories.forEach(sub => sub.style.display = 'none');
    document.getElementById(subCategoryId).style.display = 'block';
}