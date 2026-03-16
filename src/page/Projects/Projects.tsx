import { motion } from 'framer-motion';
import './Projects.css';

type ProjectItem = {
  name: string;
  type: 'Profissional' | 'Pessoal';
  summary: string;
  impact: string;
  stack: string[];
  link: string;
};

const projects: ProjectItem[] = [
  {
    name: 'OmniCast',
    type: 'Pessoal',
    summary:
      'Hub de distribuicao para compartilhar midia em diversas redes sociais em um unico painel.',
    impact:
      'Reduz retrabalho de publicacao e padroniza a comunicacao entre canais.',
    stack: ['Automacao de Publicacao', 'Gestao de Midia', 'Painel Unificado'],
    link: 'https://omnicast-lp.vercel.app/'
  },
  {
    name: 'OmniSell',
    type: 'Pessoal',
    summary:
      'Plataforma para venda de produtos em multiplos marketplaces a partir de um unico lugar.',
    impact:
      'Concentra operacao comercial, simplifica catalogo e amplia alcance de venda.',
    stack: ['Marketplace Integration', 'Catalogo Unificado', 'Operacao Comercial'],
    link: ''
  },
  {
    name: 'Autonegocia',
    type: 'Profissional',
    summary:
      'Plataforma para solucao de dividas com IA generativa e integracao com ferramentas contratuais da ZapSign.',
    impact:
      'Permite cadastrar devedores, organizar cobrancas e acelerar negociacoes com trilhas digitais.',
    stack: ['IA Generativa', 'Fluxos de Cobranca', 'Integracao ZapSign'],
    link: 'https://www.autonegocia.com.br/'
  },
  {
    name: 'DI360',
    type: 'Profissional',
    summary: 'Sistema para diligencia completa de startups e empresas.',
    impact:
      'Centraliza informacoes criticas para analise tecnica, financeira e operacional de forma estruturada.',
    stack: ['Data Collection', 'Analise de Risco', 'Fluxo de Due Diligence'],
    link: 'https://di360.com.br/'
  },
  {
    name: 'VitalMark',
    type: 'Profissional',
    summary: 'Plataforma para registro de marca com fluxo digital orientado a agilidade e clareza.',
    impact:
      'Facilita o processo de formalizacao de marca, organizando etapas e melhorando a experiencia do cliente.',
    stack: ['Registro de Marca', 'Fluxo Digital', 'Experiencia do Cliente'],
    link: 'https://www.vitalmark.com.br/'
  }
];

export default function Projects() {
  return (
    <section className="projects-page">
      <div className="projects-ambient" />

      <div className="projects-shell">
        <motion.h1
          className="projects-title"
          initial={{ opacity: 0, y: -18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Projetos em destaque
        </motion.h1>

        <motion.p
          className="projects-lead"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.12, duration: 0.6 }}
        >
          Produtos que demonstram minha atuacao em engenharia, negocio e entrega de valor em contexto real.
        </motion.p>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.a
              key={project.name}
              className={`project-card ${project.link ? 'is-clickable' : 'is-disabled'}`}
              href={project.link || undefined}
              target={project.link ? '_blank' : undefined}
              rel={project.link ? 'noreferrer' : undefined}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.18 + index * 0.1, duration: 0.5 }}
            >
              <div className="project-header">
                <h2>{project.name}</h2>
                <span
                  className={`project-type ${
                    project.type === 'Pessoal' ? 'project-type-pessoal' : 'project-type-profissional'
                  }`}
                >
                  {project.type}
                </span>
              </div>

              <p>{project.summary}</p>
              <p>{project.impact}</p>

              <div className="project-tags">
                {project.stack.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>

              <span className="project-link-label">
                {project.link ? 'Abrir projeto' : 'Projeto em Desenvolvimento'}
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
