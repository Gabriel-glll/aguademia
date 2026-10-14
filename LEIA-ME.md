# Aguademia — site

Site de página única (HTML/CSS/JS puro, sem build) com agendamento de **aula experimental** online.
Mesmo modelo do site da Barbearia La Famiglia (ver repo LAFAMIGLIA): o passo a passo de Firebase e CallMeBot do LEIA-ME de lá vale igual aqui.

Tudo que precisa ser ajustado fica em **`config.js`**: WhatsApp, telefone, modalidades, horários, espaços (Piscina / Estúdio), chaves.

## Como funciona
- O aluno escolhe a modalidade → dia → horário. Cada modalidade pertence a um espaço (piscina ou estúdio); um horário reservado fica ocupado só naquele espaço.
- Horários de 60 em 60 min, janela de 4 semanas (abre uma semana nova toda segunda).
- Sem Firebase configurado roda em modo demonstração (salva só no navegador).
- Área da academia: link no rodapé ou `#admin`.

## A conferir com a academia
- WhatsApp oficial (hoje está o fixo (19) 3832-8388).
- Horário de funcionamento real.
- Fotos em melhor resolução (as atuais vieram do Instagram, 640px).
