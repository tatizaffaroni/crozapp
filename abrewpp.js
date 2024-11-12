document.getElementById("btnwpp").onclick = function () {
    const screenshotTarget = document.getElementById('fotop');
    const urlParamsCell = new URLSearchParams(window.location.search);
    const nrocelular = urlParamsCell.get('nrocelular');
    const enlacewpp = "https://wa.me/" + nrocelular + "?text=Aquí te envío el presupuesto solicitado";

    html2canvas(screenshotTarget).then((canvas) => {
        // Convertimos el canvas en una imagen en formato Blob
        canvas.toBlob((blob) => {
            // Usamos la API del portapapeles para copiar la imagen al portapapeles
            navigator.clipboard.write([
                new ClipboardItem({
                    "image/png": blob // Especificamos el tipo de la imagen
                })
            ]).then(() => {
                console.log('¡Imagen copiada al portapapeles!');
            }).catch((error) => {
                console.error('Error al copiar al portapapeles: ', error);
            });
        }, 'image/png');
    });
    var anchor = document.createElement('a');
    anchor.setAttribute("href", enlacewpp);
    anchor.click();
    anchor.remove();
};
