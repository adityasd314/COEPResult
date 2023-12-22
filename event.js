// ---- ---- Const ---- ---- //
let inputBox = document.querySelector('.input-box'),
    searchIcon = document.querySelector('.search'),
    closeIcon = document.querySelector('.close-icon');

// ---- ---- Open Input ---- ---- //
searchIcon.addEventListener('click', () => {
    inputBox.classList.add('open');
});
// ---- ---- Close Input ---- ---- //
closeIcon.addEventListener('click', () => {
    inputBox.classList.remove('open');
});
const findResult = (text) => {

    try {
        console.log(text);
        const { details, score, subjectWise } = getByMIS(text)
        result.innerHTML = `<pre>` + JSON.stringify({ details, score, subjectWise }, null, 2) + `</pre>`;
    } catch (e) {
        result.innerHTML = `<pre>No Result Found</pre>`;
    }

}
search.onblur = function (e) {
    const text = e.target.value.trim();
    findResult(text)
}

search.oninput = function (e) {
    const text = e.target.value.trim();
    if (text.length == 9) {
        findResult(text)
    }

}