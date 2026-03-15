import './About.css';

export default function About() {
  const competencyPillars = [
    {
      title: 'Backend e Arquitetura',
      description: 'Java, Spring, microsservicos, APIs REST e boas praticas de design para sistemas escalaveis.'
    },
    {
      title: 'Front-end e Produto',
      description: 'React, Vue e TypeScript para interfaces com foco em usabilidade, performance e manutenibilidade.'
    },
    {
      title: 'Cloud e Operacao',
      description: 'Base em AWS/GCP, observabilidade, CI/CD e mindset de melhoria continua para entrega confiavel.'
    }
  ];

  const highlights = [
    'Experiencia profissional em ambiente real com stack full cycle.',
    'Transicao de suporte tecnico para engenharia com forte visao de negocio e operacao.',
    'Aprendizado constante em Docker, Kubernetes, automacao de deploy e qualidade de software.'
  ];

  return (
    <div className="about-container">
      <h1 className="about-title">Resumo profissional</h1>

      <p className="about-text about-lead">
        Sou <strong>Gustavo Ribeiro</strong>, engenheiro de software com atuacao em produtos web,
        desenvolvimento full stack e evolucao de arquitetura. Meu foco e gerar resultado tecnico com
        impacto no negocio: codigo limpo, entregas previsiveis e evolucao continua da plataforma.
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
