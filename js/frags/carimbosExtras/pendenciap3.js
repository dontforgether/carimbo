$("#pendenciaStampHead").hide();

$("#btnSuporteRF").click(function () {
    $("#popPendStamp").hide()
    $("#pendenciaStampHead").dialog({
        title: "Carimbo de Suporte RF:",
        modal: true,
        draggable: false,
        resizable: false,
        heigth: 'auto',
        width: 'auto',
        buttons: {
            "genPendStamp": { 
                text: "Gerar e Copiar Carimbo de SUPORTE", 
                id: "genPendStamp", 
                click: function () {
                    $("#popPendStamp").show();
                    let finalPendStamp = mountPendStamp3();
                    $("#pendenciaStamp").text(finalPendStamp);
                    navigator.clipboard.writeText(finalPendStamp);
                }
            }
        }
    });
});

function mountPendStamp3() {
    return "*P1 " + data() + "@!@ACOMPANHAMENTO SUPORTE RF\n" +
    "Análise: " + $("#obsPendencia").text().trim() + "\n" +
    $("#colaborador").val() + " CO-RAN Icomon\n" +
    "###Informe e-escalation###prisma";
}  