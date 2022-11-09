// CRIAR VISUAL PARA INFOS CONCESSIONÁRIA

const infoConcessionaria =
`Concessionária: CEEE
Atendente: URA
Protocolo: 99999999
Previsão: Sem previsão.`;

const infoRota =
`Rota: ABC-DEF / GHI-JKL`;

const infoRotaMetro =
`Alarme: ELEMENTO ISOLADO
IP/Host: XXX.XXX.XXX.XXX - X-XX-XX-XXX-XXX-XXX-XX
Fabricante: Coriant ( )  Alcatel ( )  ZTE ( )   Huawei ( )   Cisco ( )
Status caixa: Ativo (x)  Desativado ( )  Á Ativar ( )  Planejado ( )
Tecnologias: WCDMA (x) GSM (x) LTE (x) NR ( ) MBTS ( )
Rota: Cacti ( )   SMTX ( )
Obs rota: X-XX-XX-XXX-XXX-XXX-XX ― X-XX-XX-XXX-XXX-XXX-XX
Caixa antecessora: Acessível ( )  Indisponível ( )`;

const carimboMetroP2P =
`Alarme: INTERFACE DOWN
NODE: X-XX-XX-XXX-XXX-XXX-XX - HUAWEI - IP: XXX.XXX.XXX.XXX
INT: GE0/6/0 - INTERFACE DOWN.
DESC: MBH_ULK_10G_M-BR-XX-XXX-XXX-GWD-01_GE0/6/0_FIBRA
OBS: LINK com LOS na ponta remota.
Ponta A: X-XX-XX-XXX-XXX-XXX-XX   TX: -0.00dBm    RX: -40.00dBm
Ponta B: X-XX-XX-XXX-XXX-XXX-XX   TX: -0.00dBm    RX: -40.00dBm
Caixa Ponta A: Ativo (x)  Desativado ( )  Á Ativar ( )  Planejado ( )
Caixa Ponta B: Ativo (x)  Desativado ( )  Á Ativar ( )  Planejado ( )
Status Link:   Ativo (x)  Desativado ( )  Á Ativar ( )  Planejado ( )`;

const carimboMetroInfo1S =
`Alarme: ELEMENTO ISOLADO
IP/Host: XXX.XXX.XXX.XXX - X-XX-XX-XXX-XXX-XXX-XX
Fabricante: Coriant ( )  Alcatel ( )  ZTE ( )   Huawei ( )   Cisco ( )
Status caixa: Ativo (x)  Desativado ( )  Á Ativar ( )  Planejado ( )
Tecnologias: WCDMA (x) GSM (x) LTE (x) NR ( ) MBTS ( )
Obs: Serviços indisponíveis, sem alarmes.
Rota: Cacti ( )   SMTX (x)
Obs rota: X-XX-XX-XXX-XXX-XXX-XX ― X-XX-XX-XXX-XXX-XXX-XX
Caixa antecessora: Acessível (x)  Indisponível ( )`;

const carimboMetroTemperatura =
`Alarme: TEMPERATURA ALTA
IP/Host: XXX.XXX.XX.XX - X-XX-XX-XXX-XXX-XXX-XX
Fabricante: Coriant ( )  Alcatel ( )  ZTE ( )   Huawei ( )   Cisco ( )
Status caixa: Ativo (x)  Desativado ( )  Á Ativar ( )  Planejado ( )
Obs: Verificar slots 6/7 alarmando temperatura alta.
Caixa antecessora: Acessível (x)  Indisponível ( )`;

const carimboTX =
`Análise: Verificado.
Rádio: MGITMS2E/01
Alarme: TEMPERATURA ALTA.`;

const carimboSDH = 
`Análise: Link STM-4 interrompido entre SRHM16 x PMJ via DWDM.
Necessário técnico verificar fabricante, modelo, e posições do DWDM.

"PMJTOH35/02-SRHGOM16/7_4S_1_W"
Type: STM-4
Operational State: Enabled
A Point: PMJTOH35/02 - STM-4 - Slot 7 porta 1 - MS_SIA
Z Point: SRHM16/07_GO_Goiania_Serrinha.SRHM16/07 - Card 1-32 STM-4 PORT 1 - MS_RDI`

const carimboSolicitacao =
`Site: ABC é o ponto comum entre EFG, HIJ e XYZ.

Site: ABC 
WCDMA: Operacional, sem alarmes.
LTE: Operacional, sem alarmes.
GSM: Operacional, sem alarmes.
Rota: ABC-DEF / GHI-JKL     
Caixa Metro: Remota ( ) Local ( )
Host: X-XX-XX-XXX-XXX-XXX-XX
TP: Sim ( ) Não ( )

Site: ABC 
WCDMA: Operacional, sem alarmes.
LTE: Operacional, sem alarmes.
GSM: Operacional, sem alarmes.
Rota: ABC-DEF / GHI-JKL     
Caixa Metro: Remota ( ) Local ( )
Host: X-XX-XX-XXX-XXX-XXX-XX
TP: Sim ( ) Não ( )

Site: ABC 
WCDMA: Operacional, sem alarmes.
LTE: Operacional, sem alarmes.
GSM: Operacional, sem alarmes.
Rota: ABC-DEF / GHI-JKL     
Caixa Metro: Remota ( ) Local ( )
Host: X-XX-XX-XXX-XXX-XXX-XX`;

const carimboClear = `@!@ATENDIMENTO_CLEAR - Verificado na aba de alarmes que ainda não consta CLEAR de normalização impedindo o fechamento do TA, sendo solicitado CLEAR manual.
###Informe e-escalation###`

const InputAlarme = `Alarme: `; // Está agregado a função de entrada do alarme.

const stampTipoTecnologias = `Tecnologias: WCDMA (x) GSM ( ) LTE (x) NR ( ) MBTS ( )`; // Está agregando a função das tecnologias.

const stampMetroHost = `Host: X-XX-XX-XXX-XXX-XXX-XX`;




