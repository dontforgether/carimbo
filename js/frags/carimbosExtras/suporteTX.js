$("#suporteTXStampHead").hide();


$("#btnSuporteTX").click(function () {
    
    $("#suporteTXStamp").text("Clique no botão para gerar e copiar o carimbo.");
    $("#suporteTXStampHead").dialog({
        title: "Carimbo de Suporte TX.",
        modal: true,
        draggable: false,
        resizable: false,
        heigth: 'auto',
        width: 'auto',
        
        buttons: {
            "genAnlsTXStamp": { 
                text: "Gerar e copiar carimbo para Suporte TX.", 
                id: "genAnlsTXStamp",

                click: function(){
                
                    $("#stampAlarme").hide();
                    $("#stampFabricante").hide();
                    $("#stampTecnologias").hide();
                    $("#stampHost").hide();
                    $("#stampMetro").hide();
                    $("#stampInfoRota").hide();
                    $("#stampAntecessor").hide();
                    $("#stampTipoSite").hide();

                    let finalAnlsTXStamp = mountSupTXStamp();
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



function mountSupTXStamp() {
    return  "*P1 " + data() + "@!@Suporte TX RDI/NONE\n" +
    mountAnalisys() + "\n" +
    "Passagem: Operacional, sem alarmes de infraestrutura.\n" +
    "Sendo verificado pela equipe N2.";
    
}   