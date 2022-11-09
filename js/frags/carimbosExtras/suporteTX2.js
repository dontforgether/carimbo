$("#suporteTXStampHead").hide();

$("#btnSuporteTXN2").click(function () {
    
    $("#suporteTXStamp").text("Clique no botão para gerar e copiar o carimbo.");
    $("#suporteTXStampHead").dialog({
        title: "Carimbo de TRIAGEM N2.",
        modal: true,
        draggable: false,
        resizable: false,
        heigth: 'auto',
        width: 'auto',
        
        buttons: {
            "genAnlsTXStamp": { 
                text: "Gerar e copiar carimbo de TRIAGEM N2.", 
                id: "genAnlsTXStamp",

                click: function(){
                
                    $("#stampAlarme").hide();
                    $("#stampFabricante").hide();
                    $("#stampTecnologias").hide();
                    $("#stampHost").hide();
                    $("#stampMetro").hide();
                    $("#stampInfoRota").hide();
                    $("#stampAntecessor").hide();
                    $("#stampTipoSite").show();

                    let finalAnlsTXStamp = mountSupTXStamp2();
                    $("#suporteTXStamp").text(finalAnlsTXStamp);
                   

                    navigator.clipboard.writeText(finalAnlsTXStamp);

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



function mountSupTXStamp2() {
    return  "*P1 " + data() + "@!@TRIAGEM_N2\n" +
    mountAnalisys() + "\n" +
    $("#colaborador").val() + " CO-RAN Icomon\n" +
    "###Informe e-escalation###\n" +
    "#prisma-wfm";
    
}   