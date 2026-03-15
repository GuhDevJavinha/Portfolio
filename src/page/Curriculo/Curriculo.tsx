import './Curriculo.css'
import Work from '../../components/Work/Work'

const jobs = [
    {
        name: "Vitalis Invest",
        role: "Engenheiro de Software Junior",
        year: "2025 - Presente",
        description: "Desenvolvimento de aplicacoes web com TypeScript, Vue.js, Java, Kotlin e Python em fluxo agil.",
        secondDescriptionWork: "Implementacao de APIs REST, integracoes SQL/NoSQL e evolucao de servicos orientados a escalabilidade.",
        achievements: [
            'Atuacao direta no ciclo completo: analise, desenvolvimento, testes e entrega.',
            'Apoio em pipelines de CI/CD para reduzir friccao de deploy.',
            'Participacao em decisoes de arquitetura e padronizacao tecnica.'
        ]
    },
    {
        name: "JSV Telecom",
        role: "Suporte Técnico",
        year: "2024",
        description: "Observabilidade e monitoramento com Grafana e Zabbix, suporte tecnico e manutencao de infraestrutura de TI.",
        secondDescriptionWork: "Diagnostico e resolucao de incidentes com foco em continuidade dos servicos.",
        achievements: [
            'Base forte em troubleshooting e comunicacao com usuarios e operacao.',
            'Aprimoramento de visao sistemica para prevenir indisponibilidades.'
        ]
    }
]

const strengths = [
    'Arquitetura limpa e foco em qualidade de codigo',
    'Adaptacao rapida a novas stacks e contextos de negocio',
    'Colaboracao em times ageis e orientacao a entrega'
]

export default function Curriculo() {
    return (
        <div className='box-work'>
            <h2 className="work-title">Experiencia Profissional</h2>
            <p className='work-intro'>
                Historico focado em construcao de software com impacto real: da operacao e observabilidade
                ate o desenvolvimento de produtos modernos e escalaveis.
            </p>
            <div className='strengths-grid'>
                {strengths.map((strength) => (
                    <span key={strength}>{strength}</span>
                ))}
            </div>
            {jobs.map((job, index) => (
                <Work
                    key={index}
                    nameWork={job.name}
                    roleWork={job.role}
                    yearWork={job.year}
                    descriptionWork={job.description}
                    secondDescriptionWork={job.secondDescriptionWork}
                    achievements={job.achievements}
                />
            ))}
        </div>
    )
}
