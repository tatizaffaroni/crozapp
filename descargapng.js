document.getElementById("dl-png").onclick = function () {
    const screenshotTarget = document.getElementById('fotop');

    html2canvas(screenshotTarget).then((canvas) => {
        const base64image = canvas.toDataURL("image/png");
        var anchor = document.createElement('a');
        anchor.setAttribute("href", base64image);
        anchor.setAttribute("download", "CROZ-Presupuesto");
        anchor.click();
        anchor.remove();
    });
};
