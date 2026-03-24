export type SpecialtyPalette = "rose" | "sage" | "warm" | "brown";

export type SpecialtyItem = {
  title: string;
  /** Texto educativo breve (YMYL): informativo, sem promessa de resultado. */
  description: string;
  /** Arquivo opcional: public/images/specialties/{slug}.jpg */
  slug: string;
  palette: SpecialtyPalette;
};

export type SpecialtyGroup = {
  title: string;
  intro: string;
  items: SpecialtyItem[];
};

export const specialtyGroups: SpecialtyGroup[] = [
  {
    title: "Doenças autoimunes sistêmicas",
    intro:
      "Condições em que o sistema imune ataca o próprio organismo de forma generalizada. O acompanhamento reumatológico integra história clínica, exames e vigilância de órgãos-alvo.",
    items: [
      {
        title: "Lúpus eritematoso sistêmico (LES)",
        slug: "les",
        palette: "rose",
        description:
          "Doença autoimune que pode envolver pele, articulações, rins e outros órgãos. Na consulta, discutem-se sinais de atividade da doença, proteção de órgãos e plano terapêutico alinhado às diretrizes atuais.",
      },
      {
        title: "Doença de Sjögren",
        slug: "sjogren",
        palette: "sage",
        description:
          "Frequentemente associa-se a secura ocular e bucal por inflamação das glândulas produtoras de saliva e lágrimas. A avaliação também observa fadiga, dor articular e manifestações sistêmicas quando presentes.",
      },
      {
        title: "Esclerose sistêmica",
        slug: "esclerose-sistemica",
        palette: "brown",
        description:
          "Caracterizada por alterações na pele e, em alguns casos, envolvimento vascular e de órgãos internos. O manejo prioriza controle de fenômeno de Raynaud, monitorização de fibrose pulmonar e suporte multiprofissional quando indicado.",
      },
      {
        title: "Miosites",
        slug: "miosites",
        palette: "warm",
        description:
          "Grupo de doenças com inflamação muscular que pode causar fraqueza progressiva. O diagnóstico combina exame físico, enzimas musculares e, quando necessário, estudos complementares para definir o subtipo e orientar tratamento.",
      },
    ],
  },
  {
    title: "Artrites inflamatórias",
    intro:
      "Processos em que a inflamação é motor da dor e do dano articular. O objetivo é reduzir atividade da doença, preservar função e prevenir complicações a longo prazo.",
    items: [
      {
        title: "Artrite reumatoide",
        slug: "artrite-reumatoide",
        palette: "rose",
        description:
          "Doença crônica que costuma acometer mãos, punhos e pés de forma simétrica. A estratégia inclui controle inflamatório precoce, avaliação de risco cardiovascular e acompanhamento da resposta ao tratamento ao longo do tempo.",
      },
      {
        title: "Espondiloartrites",
        slug: "espondiloartrites",
        palette: "sage",
        description:
          "Inclui condições como espondilite anquilosante e artrites associadas a psoríase ou enteropatias. Dor inflamatória em coluna, rigidez matinal e acometimento de enteses são pistas importantes na avaliação.",
      },
      {
        title: "Gota",
        slug: "gota",
        palette: "warm",
        description:
          "Artrite por depósito de cristais de ácido úrico, com episódios agudos muito dolorosos. Além do manejo da crise, discutem-se hábitos, comorbidades e prevenção de novos surtos com abordagem individualizada.",
      },
    ],
  },
  {
    title: "Doenças osteometabólicas",
    intro:
      "Alterações ósseas e degenerativas articulares que impactam mobilidade e risco de fratura. O cuidado combina prevenção, exercício adequado e tratamento medicamentoso quando indicado.",
    items: [
      {
        title: "Osteoporose",
        slug: "osteoporose",
        palette: "sage",
        description:
          "Redução da massa óssea com maior susceptibilidade a fraturas, especialmente em coluna e quadril. A consulta avalia fatores de risco, densitometria quando pertinente e medidas para proteção óssea ao longo da vida.",
      },
      {
        title: "Artrose",
        slug: "artrose",
        palette: "brown",
        description:
          "Desgaste progressivo da cartilagem articular, comum em joelhos e quadris. O plano costuma incluir educação sobre peso, atividade física guiada, controle da dor e, em casos selecionados, opções intra-articulares ou cirúrgicas encaminhadas.",
      },
    ],
  },
  {
    title: "Dor crônica e partes moles",
    intro:
          "Quadros em que dor persistente e afecções de tendões ou bursas exigem escuta cuidadosa e estratégias que vão além do medicamento isolado.",
    items: [
      {
        title: "Fibromialgia",
        slug: "fibromialgia",
        palette: "rose",
        description:
          "Síndrome de dor generalizada frequentemente associada a sono não reparador e fadiga. A abordagem moderna prioriza rotina de sono, atividade gradual, manejo do estresse e decisões compartilhadas sobre terapias farmacológicas e não farmacológicas.",
      },
      {
        title: "Tendinites e bursites",
        slug: "tendinites-bursites",
        palette: "sage",
        description:
          "Inflamação de tendões ou da bolsa sinovial ao redor de articulações, muitas vezes ligada a sobrecarga ou postura. O diagnóstico diferencial com outras causas de dor é essencial para orientar repouso relativo, fisioterapia e recuperação segura.",
      },
    ],
  },
];
