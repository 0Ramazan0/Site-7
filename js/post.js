Array.from(document.querySelectorAll(".filter__li")).forEach((item) => {
    item.addEventListener('click', transOnBlog, { capture: true });

});

function transOnBlog() {
    document.location.href = 'blog.html';
}