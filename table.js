
const applyProps = (element, propArray) => {
    Object.entries(propArray).forEach(([key, value]) => {
        element.setAttribute(key, value);
    });
}
const createElement = (elementName, propArray)=>{
    const element = document.createElement(elementName);
    applyProps(element, propArray);
    return element;
}
const arrayToTable = (array, { tableProps, tdProps, trProps }) => {
    const Table = createElement("table", tableProps);
    array.forEach(rows => {
        const Tr = document.createElement("tr", trProps);
        rows.forEach((dataColumn) => {
            const Td = document.createElement("td", tdProps);
            Td.innerText = dataColumn;
            Tr.append(Td);
        })
        Table.append(Tr);

    });
    return Table;

}
