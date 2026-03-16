import './About.css';

export default function About() {
  const competencyPillars = [
    {
      title: 'Backend e Arquitetura',
      description:
        'Desenvolvimento com Java, Spring Boot e Nest.js, modelagem de dominios e APIs REST versionadas. Experiencia com TypeScript no backend, integracoes com bancos SQL/NoSQL, incluindo Redis para cache, e aplicacao de principios SOLID em arquiteturas com Multi-tenancy para servicos resilientes, testaveis e preparados para escalar.'
    },
    {
      title: 'Cloud e Operacao',
      description:
        'Atuacao com fundamentos em AWS/GCP, ambientes Linux, conteinerizacao com Docker e orquestracao com Kubernetes. Implementacao de pipelines de CI/CD com GitHub Actions e observabilidade com Grafana para diagnostico rapido, deploy seguro e melhoria continua.'
    },
    {
      title: 'Front-end e Produto',
      description:
        'Construcao de interfaces com React, Vue e TypeScript, priorizando experiencia do usuario, acessibilidade e performance. Organizacao de componentes reutilizaveis, estado previsivel e comunicacao eficiente com APIs REST para acelerar evolucao de funcionalidades de produto.'
    }
  ];

  const highlights = [
    'Experiencia profissional em ambiente real com stack full cycle.',
    'Transicao de suporte tecnico para engenharia com forte visao de negocio, operacao e solida base em Linux.',
    'Atuacao pratica com Docker, Kubernetes, GitHub Actions, Redis, Grafana e fundamentos de Multi-tenancy para elevar confiabilidade e observabilidade da plataforma.'
  ];

  return (
    <div className="about-container">
      <h1 className="about-title">Resumo profissional</h1>

      <p className="about-text about-lead">
        Sou <strong>Gustavo Ribeiro</strong>, engenheiro de software com atuacao em produtos web,
        desenvolvimento full stack e evolucao de arquitetura. Combino Java, TypeScript, Nest.js e
        praticas de operacao moderna para gerar resultado tecnico com impacto no negocio: codigo limpo,
        entregas previsiveis e evolucao continua da plataforma.
      </p>

      <div className="about-grid">
        {competencyPillars.map((pillar) => (
          <article key={pillar.title} className="about-card">
            <h2>{pillar.title}</h2>
            <p>{pillar.description}</p>
          </article>
        ))}
      </div>

      <h2 className="about-subtitle">Destaques para recrutamento</h2>
      <ul className="about-list">
        {highlights.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
