function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function appendItem(positionExport, dataExport) {
    $(positionExport).append(dataExport);
}