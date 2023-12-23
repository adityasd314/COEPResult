// ---- ---- Const ---- ---- //
let inputBox = document.querySelector('.input-box'),
    searchIcon = document.querySelector('.search'),
    closeIcon = document.querySelector('.close-icon');

// ---- ---- Open Input ---- ---- //

const findResult = (text) => {

    try {
        const { details, score, subjectWise } = getByMIS(text)
        result.innerHTML= "";
        const header = createElement('h4', {});
        header.innerHTML =details
        result.append(header);
        result.append(arrayToTable(Object.entries(score), { tableProps:{border:""}, tdProps:{}, trProps:{} }));
        result.append(arrayToTable(Object.entries(subjectWise), { tableProps:{border:""}, tdProps:{}, trProps:{} }));

        // result.innerHTML = `<pre>` + JSON.stringify({ details, score, subjectWise }, null, 2) + `</pre>`;
    } catch (e) {
        result.innerHTML = `<pre>${e}\nNo Result Found</pre>`;
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
