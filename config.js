// =====================================================================
//  AGUADEMIA — CONFIGURAÇÃO
//  Tudo que a academia precisa ajustar fica aqui. Veja o LEIA-ME.md.
// =====================================================================

export const CONFIG = {
  // WhatsApp da academia (só números, com 55 + DDD). Usado nos botões de contato.
  // ⚠️ Conferir: hoje está o telefone fixo (19) 3832-8388; troque pelo WhatsApp oficial.
  whatsapp: "551938328388",
  telefone: "(19) 3832-8388",
  instagram: "https://www.instagram.com/aguademia/",
  endereco: "R. Maria Conceição da Rocha Ferraz, 204, Jd. Bom Retiro, Sumaré SP",

  // Espaços que recebem aula experimental. Cada modalidade acontece em um espaço.
  // whatsapp + callmebot: o responsável recebe cada agendamento no próprio WhatsApp (veja o LEIA-ME).
  // ntfy (opcional): tópico do app ntfy, pra receber também como notificação push.
  espacos: [
    { id: "piscina", nome: "Piscina", whatsapp: "", callmebot: "", ntfy: "" },
    { id: "estudio", nome: "Estúdio", whatsapp: "", callmebot: "", ntfy: "" },
  ],

  // Modalidades (cada aula experimental ocupa um horário).
  modalidades: [
    { id: "natacao-infantil", nome: "Natação Infantil", espaco: "piscina", tag: "Bebês e crianças", desc: "Adaptação, segurança na água e muita diversão." },
    { id: "natacao-adulto", nome: "Natação Adulto", espaco: "piscina", tag: "Do zero ao competitivo", desc: "Aprender a nadar, treinar técnica ou competir." },
    { id: "hidroginastica", nome: "Hidroginástica", espaco: "piscina", tag: "Todas as idades", desc: "Condicionamento sem impacto, com a turma mais animada." },
    { id: "hidroterapia", nome: "Hidroterapia", espaco: "piscina", tag: "Reabilitação", desc: "Recuperação e alívio de dores com o apoio da água." },
    { id: "pilates", nome: "Pilates", espaco: "estudio", tag: "Força e postura", desc: "Fortalecimento, alongamento e consciência corporal." },
    { id: "jump-step", nome: "Jump / Step", espaco: "estudio", tag: "Alta energia", desc: "Aula dinâmica pra suar, queimar calorias e se divertir." },
    { id: "personal", nome: "Personal", espaco: "estudio", tag: "Individual", desc: "Treino montado pra você, no seu ritmo e objetivo." },
  ],

  // Horário de funcionamento por dia da semana (0 = domingo ... 6 = sábado).
  // null = fechado. Os horários de aula são gerados de 60 em 60 minutos.
  // ⚠️ Conferir com a academia.
  intervaloMin: 60,
  funcionamento: {
    0: null,
    1: ["06:00", "21:00"],
    2: ["06:00", "21:00"],
    3: ["06:00", "21:00"],
    4: ["06:00", "21:00"],
    5: ["06:00", "21:00"],
    6: ["08:00", "12:00"],
  },

  // Janela de agendamento: semana atual + 3 semanas.
  // Toda segunda-feira uma semana nova é liberada automaticamente.
  semanasAFrente: 4,

  // ---------- FIREBASE (banco de dados dos agendamentos) ----------
  // Cole aqui o firebaseConfig do seu projeto. Enquanto apiKey estiver vazio,
  // o site roda em MODO DEMONSTRAÇÃO (salva só no navegador).
  firebase: {
    apiKey: "",
    authDomain: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: "",
  },
};
