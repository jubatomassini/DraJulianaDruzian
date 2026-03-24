export type SpecialtyGroup = {
  title: string;
  intro: string;
  items: string[];
};

export const specialtyGroups: SpecialtyGroup[] = [
  {
    title: "Doenças autoimunes sistêmicas",
    intro:
      "Avaliação e acompanhamento de condições em que o sistema imune afeta órgãos e tecidos de forma sistêmica.",
    items: [
      "Lúpus eritematoso sistêmico (LES)",
      "Doença de Sjögren",
      "Esclerose sistêmica",
      "Miosites",
    ],
  },
  {
    title: "Artrites inflamatórias",
    intro:
      "Diagnóstico e manejo de processos inflamatórios articulares, com foco em controle da atividade da doença e qualidade de vida.",
    items: [
      "Artrite reumatoide",
      "Espondiloartrites",
      "Gota",
    ],
  },
  {
    title: "Doenças osteometabólicas",
    intro:
      "Prevenção e tratamento de alterações ósseas e articulares degenerativas, com abordagem individualizada.",
    items: ["Osteoporose", "Artrose"],
  },
  {
    title: "Dor crônica e partes moles",
    intro:
      "Cuidado integrado para dores persistentes e afecções de tendões e bursas, sempre com escuta ativa e plano terapêutico alinhado às evidências.",
    items: ["Fibromialgia", "Tendinites e bursites"],
  },
];
