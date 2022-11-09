$("#analiseTXStampHead").hide();

$("#btnAnaliseTX").click(function () {
    $("#popAnlsTXStamp").hide()
    $("#analiseTXStampHead").css({ "min-width": "580px" });
    $("#analiseTXStampHead").dialog({
        title: "Carimbo para Análise TX:",
        modal: true,
        draggable: false,
        resizable: false,
        heigth: 'auto',
        width: 'auto',
        buttons: {
            "genAnlsTXStamp": { 
                text: "Gerar e copiar carimbo para Análise TX", 
                id: "genAnlsTXStamp", 
                click: function () {
                    $("#popAnlsTXStamp").show();
                    $("#stampHost").hide(); // Colocar essa função para esconder a linha.
                    $("#stampAlarme").hide();
                    $("#stampFabricante").hide();
                    $("#stampTecnologias").hide();
                    $("#stampHost").hide();
                    $("#stampMetro").hide();
                    $("#stampInfoRota").hide();
                    $("#stampAntecessor").hide();
                    $("#stampTipoSite").hide();
                    
                    let finalAnlsTXStamp = mountAnlsTXStamp();
                    $("#analiseTXStamp").text(finalAnlsTXStamp);
                    navigator.clipboard.writeText(finalAnlsTXStamp);

                    $("#stampHost").show(); // Colocar essa função para esconder a linha.
                    $("#stampAlarme").show();
                    $("#stampFabricante").show();
                    $("#stampTecnologias").show();
                    $("#stampHost").show();
                    $("#stampMetro").show();
                    $("#stampInfoRota").show();
                    $("#stampAntecessor").show();
                    $("#stampTipoSite").show();
                }
            }
        }
    });
});

function mountAnlsTXStamp() {
    return "*P1 " + data() + "  @!@Análise de TX " + $("#numAnaliseTX").val() + " da rede metro.\n" + // #numAnaliseTX é a variável que armazena a entrada.
    "Análise: Verificado. " + "\n" +
    mountAnalisys() + "\n" +
    $("#colaborador").val() + " CO-RAN Icomon\n" +
    "###Informe e-escalation###\n" + 
    "#prisma-wfm";
    
}   