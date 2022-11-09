$("#retencaoStampHead").hide();

$("#btnRetencaoP2").click(function () {
    $("#popRetStamp").hide()
    $("#retencaoStampHead").dialog({
        title: "Carimbo de Retenção:",
        modal: true,
        draggable: false,
        resizable: false,
        heigth: 'auto',
        width: 'auto',
        buttons: {
            "genRetStamp": { 
                text: "Gerar e copiar carimbo de Retenção", 
                id: "genRetStamp", 
                click: function () {
                    $("#popRetStamp").show();
                    let finalRetStamp = mountRetStamp2();
                    $("#retencaoStamp").text(finalRetStamp);
                    navigator.clipboard.writeText(finalRetStamp);
                    
                   

                }
            }
        }
    });
});

function mountRetStamp2() {
    return "*P1 " + data() + "@!@TRIAGEM_N2\n" +
    "TA raiz: " + $("#numRetencao").val() + "\n" +
    "OBS: " + $("#obsRetencao").text().trim() + "\n" +
    ($("#retPrecisaAnalise").is(":checked") ? mountAnalisys() + "\n" : "") +
    $("#colaborador").val() + " CO-RAN Icomon\n" +
    "###Informe e-escalation###";

} 