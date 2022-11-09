$("#pendenciaStampHead").hide();

$("#btnPendenciaP2").click(function () {
    $("#popPendStamp").hide()
    $("#pendenciaStampHead").dialog({
        title: "Carimbo de Triagem:",
        modal: true,
        draggable: false,
        resizable: false,
        heigth: 'auto',
        width: 'auto',
        buttons: {
            "genPendStamp": { 
                text: "Gerar e Copiar Carimbo de TRIAGEM", 
                id: "genPendStamp", 
                click: function () {
                    $("#popPendStamp").show();
                    let finalPendStamp = mountPendStamp2();
                    $("#pendenciaStamp").text(finalPendStamp);
                    navigator.clipboard.writeText(finalPendStamp);
                }
            }
        }
    });
});

function mountPendStamp2() {
    return "*P1 " + data() + "@!@TRIAGEM_N2\n" +
    "Análise: " + $("#obsPendencia").text().trim() + "\n";
    
}  