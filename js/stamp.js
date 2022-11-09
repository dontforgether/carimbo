$("#theFinalStampHead").hide();

var infoConcTextDiv = $("#infoConcTextDiv");

var stampHead = $("#stampHead");
var stampAlarme = $("#stampAlarme");
var stampFabricante = $("#stampFabricante");
var stampTecnologias = $("#stampTecnologias");
var stampHost = $("#stampHost");
var stampMainContent = $("#stampMainContent");
var stampMetro = $("#stampMetro");
var stampInfoRota = $("#stampInfoRota");
var stampInfoConc = $("#stampInfoConc");
var stampAntecessor = $("#stampAntecessor");
var stampInfoTP = $("#stampInfoTP");
var stampTipoSite = $("#stampTipoSite");
var stampFoot = $("#stampFoot");
var cleanSpaces = $("#cleanSpaces");
var lastAnalise;

function data(dataBase = Date.now()) {
    let now = new Date(dataBase);
    let ano = now.getFullYear();
    let mes = ((now.getMonth() + 1) + "").length == 1 ? "0" + (now.getMonth() + 1) : (now.getMonth() + 1);
    let dia = (now.getDate() + "").length == 1 ? "0" + now.getDate() : now.getDate();
    let hora = now.getHours() == "0" ? "00" : (now.getHours() + "").length == 1 ? "0" + now.getHours() : now.getHours();
    let minuto = now.getMinutes() == "0" ? "00" : (now.getMinutes() + "").length == 1 ? "0" + now.getMinutes() : now.getMinutes();
    return ano + "/" + mes + "/" + dia + " " + hora + ":" +  minuto;
}

function updateStampHead() {
    stampHead.find(".innerTextarea").text("*P1 " + data() + "@!@ACIONADO CAMPO"); // Parte principal da automação.
        
}

function updateStampAlarme() {
    stampAlarme.find(".innerTextarea").text(InputAlarme); // Função responsável pela entrada do alarme.

}

function updateStampFabricante() {
    stampFabricante.find(".innerTextarea").text($("input[name=temHuawei]:checked").val() == "naoTemHuawei" ? "Fabricante: Huawei (x) Ericsson ( )" : "Fabricante: Huawei ( ) Ericsson (x)"); // Função responsável por apresentar o tipo de tecnologia de acordo com a seleção.

}

function updateStampTecnologias() {
    stampTecnologias.find(".innerTextarea").text(stampTipoTecnologias); // Função responsável por apresentar as tecnologias.

}


function updateStampMetro() {
    stampMetro.find(".innerTextarea").text($("input[name=temMetroLocal]:checked").val() == "naoMetroLocal" ? "Caixa Metro: Remoto (x) Local ( )" : "Caixa Metro: Remoto ( ) Local (x)"); // Função responsável por apresentar a posição da caixa metro.

}


function updateStampHost() {
  stampHost.find(".innerTextarea").text(stampMetroHost);

}

function updateInfoRota(isIsolado) {
    if ($("input[name=infoRota]:checked").val() == "nPrecisa") {
        stampInfoRota.hide()
    } else {
        stampInfoRota.find(".innerTextarea").text(isIsolado ? infoRotaMetro : infoRota)
        stampInfoRota.show(); 
        
    }
}

function updateInfoConc() {
    if ($("input[name=infoConc]:checked").val() == "nPrecisa") {
        infoConcTextDiv.hide();
        stampInfoConc.hide();
    } else {
        infoConcTextDiv.show();
        stampInfoConc.show();
    }
}

function updateInfoConcText(tipo) {
    switch(tipo) {
        case "padrao":
            stampInfoConc.find(".innerTextarea").text(infoConcessionaria)
            break;
        case "altaDemanda":
            stampInfoConc.find(".innerTextarea").text("OBS: Não foi possível abrir chamado com a concessionária devido a alta demanda de chamados.")
            break;
        case "semUcMedidor": 
            stampInfoConc.find(".innerTextarea").text("OBS: Não foi possível abrir chamado com a concessionária devido a falta de dados no Science.")
            break;
        case "outro":
            stampInfoConc.find(".innerTextarea").text("OBS: Não foi possível abrir chamado com a concessionária com os dados disponíveis.")
            break;
    }
}


function updateAntecessor() {
  stampAntecessor.find(".innerTextarea").text($("input[name=ERBoperacional]:checked").val() == "ERBoperacional" ? "Site Antecessor: Operacional (x) Indisponível ( )" : "Site Antecessor: Operacional ( ) Indisponível (x)");  
}


function updateInfoTP() {
    stampInfoTP.find(".innerTextarea").text($("input[name=temTp]:checked").val() == "naoTemTP" ? "TP: Sim ( ) Não (x)" : "TP: Sim (x) Não ( )");  // Campo que retorna se existe TP.
}

function updateTipoSite() {
    stampTipoSite.find(".innerTextarea").text("Site: " + $("input[name=tipoSite]:checked").val()); // Campo que retorna o tipo do site.
}

function updateStampFoot() {
    stampFoot.find(".innerTextarea").text($("#colaborador").val() + " CO-RAN Icomon\n" +
    "###Informe e-escalation###\n" +
    "#prisma-wfm");
}

function loop() {
    updateStampHead();
    setTimeout(function() {(loop())}, 1000);
}

function attCarimbo() {
    updateStampHead();
    updateStampAlarme(); // Função da entrada do alarme.
    updateStampFabricante(); // Função que retorna a fabricante do equipamento.
    updateStampTecnologias(); // Função que retorna as tecnologias presentes.
    updateStampHost();
    updateStampMetro();
    updateInfoRota();
    updateInfoConc();
    updateInfoConcText("padrao");
    updateAntecessor();
    updateInfoTP();
    updateTipoSite();
    updateStampFoot();
    
}

attCarimbo();
setTimeout(function() { loop() }, 1000);

function ericssonAnalysis() {
    removeAllRows();
    //createRow("GSM Ericsson").find("select[name=erbStatus]").val("Indisponível");  // Adiciona linhas da tecnologia analisada.
    forceUpdateRows();
}

function huaweiAnalysis() {
    removeAllRows();
    //createRow("WCDMA: Huawei").find("select[name=erbStatus]").val("Indisponível"); // Adiciona linhas da tecnologia analisada.
    forceUpdateRows();
}

$(".btnAnalise").click( function() {
    let btn = $(this);

    if(lastAnalise == "p1MetroIsolado" || btn.attr("id") != "p1MetroIsolado") updateInfoRota(false);
    if(btn.attr("id") == "p1MetroIsolado") updateInfoRota(true);
    
    if (btn.attr("id") == "p1Ericsson" || btn.attr("id") == "p1Huawei") { if (lastAnalise != null) $("html, body").animate( { scrollTop: $("#fastAnalysisDiv").offset().top }, "slow" ); }
    else $("html, body").animate( { scrollTop: $("#theStamp").offset().top }, "slow" );
    
    lastAnalise = btn.attr("id");

    notErbAnalysis = ["p1MetroQuedaP2P", "p1MetroQuedaInfo1S", "p1MetroTemperatura", "p1Solicitacao", "p1TX", "p1SDH"] // Adicionado p1Solicitacao.

    $("#stampTecnologias").hide();
    $("#stampAntecessor").hide(); // Oculta os campos indesejados do carimbo da METRO e TX.
    $("#stampFabricante").hide();
    $("#stampAlarme").hide();
    $("#stampMetro").hide();
    $("#stampHost").hide();
    


    if (notErbAnalysis.includes(lastAnalise)) { 
        $('input[name="infoRota"]')[0].checked = true;
        $('input[name="infoRota"]').change()
        $('input[name="infoConc"]')[0].checked = true;
        $('input[name="infoConc"]').change();
        disableFastAnalysis();
    } else {
        disableFastAnalysis(false);
    }

    if (lastAnalise == "p1Ericsson" || lastAnalise == "p1Huawei") stampMainContent.hide()
    else stampMainContent.show();

    switch (lastAnalise) {
        case "p1Ericsson": 
            ericssonAnalysis();
            break;
        case "p1Huawei": 
            huaweiAnalysis();
            break;
        case "p1MetroIsolado":
            stampMainContent.find(".innerTextarea").text(carimboMetroIsolado);
            break;
        case "p1MetroQuedaP2P": 
            stampMainContent.find(".innerTextarea").text(carimboMetroP2P);
            break;
        case "p1MetroQuedaInfo1S": 
            stampMainContent.find(".innerTextarea").text(carimboMetroInfo1S);
            break;
        case "p1MetroTemperatura": 
            stampMainContent.find(".innerTextarea").text(carimboMetroTemperatura);
            break;
        case "p1TX": 
            stampMainContent.find(".innerTextarea").text(carimboTX);
            break;
        case "p1SDH": 
            stampMainContent.find(".innerTextarea").text(carimboSDH);
            break;
        case "p1Solicitacao": 
            stampMainContent.find(".innerTextarea").text(carimboSolicitacao);
            cleanSpaces.prop("checked", false);
            break;
    }

 

});

$('#p1Ericsson').click()

$("#stampInfoTP").show(); // Adicionar todos os ID que vão ficar visíveis no carimbo principal.
$("#stampAlarme").show();
$("#stampFabricante").show();
$("#stampTecnologias").show();
$("#stampHost").show();
$("#stampMetro").show();
$("#stampInfoRota").show();
$("#stampAntecessor").show();
$("#stampTipoSite").show();



$('input[name="infoRota"]').change( function () {
    if(lastAnalise == "p1MetroIsolado") updateInfoRota(true);
    else updateInfoRota();
});

$('input[name="infoConc"]').change( function () { updateInfoConc(); });

$('#infoConcText').change( function () { updateInfoConcText($(this).val()); });

$('input[name="temTp"]').change( function () { updateInfoTP(); });

$('input[name="tipoSite"]').change( function () { updateTipoSite(); });

$('input[name="temHuawei"]').change( function () { updateStampFabricante(); });

$('input[name="ERBoperacional"]').change( function () { updateAntecessor(); });

$('input[name="temMetroLocal"]').change( function () { updateStampMetro(); });


$(".textarea").on("paste", function (e) {
    e.preventDefault();
    document.execCommand("insertHTML", false, (e.originalEvent || e).clipboardData.getData('text/plain'));
});

function mountAnalisys(onlyAnalysis = true) {
    let analisys = "";
    let visibleParts = $("#trueStamp").find(".textarea:visible");
    visibleParts = visibleParts.not("#stampHead");
    visibleParts = visibleParts.not("#stampFoot");
    visibleParts = visibleParts.not(".textareaOculta");

    visibleParts.each(function () {
        if (this.id == "stampFast") $(this).find(".innerTextarea:visible").each( function() { analisys += this.outerText.replace("\n\n", "\n") + "\n" }) 
        else analisys += $(this).find(".innerTextarea")[0].outerText + "\n"; 
    });
    analisys = analisys.replace(new RegExp("\n$"), "");

    let allowLBreaks = (cleanSpaces.is(":checked"));
    if (!onlyAnalysis) analisys = ($("#stampHead").hasClass("textareaOculta") ? "" : $("#stampHead").find(".innerTextarea").text() + (!allowLBreaks ? "\n\n" : "\n")) + analisys + ($("#stampFoot").hasClass("textareaOculta") ? "" : (!allowLBreaks ? "\n\n" : "\n") + $("#stampFoot").find(".innerTextarea").text());
    if (allowLBreaks) while (new RegExp("\n\n", "gi").test(analisys)) { analisys = analisys.replace("\n\n", "\n"); }

    return analisys;
}

$("#btnStampGen").click( function () {
    let theFinalStamp = mountAnalisys(false);



    $("#theFinalStamp").text(theFinalStamp);
    $("#theFinalStampHead").dialog({
        title: "Carimbo copiado com sucesso!",
        modal: true,
        draggable: false,
        resizable: false,
        heigth: 'auto',
        width: 'auto'
    });
    
    navigator.clipboard.writeText(theFinalStamp); 
});

$(window).resize(function () {
    $(".ui-dialog").position({
        my: "center", at: "center", of: window
    });
})