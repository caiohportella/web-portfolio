import '../styles/components/experience.sass'

const experiences = [
    {
        id: "sintel",
        name: "Sintel Automotive S.A",
        role: "Estagiário Analista de EDI",
        date: "Janeiro 2023 - Novembro 2023",
        duty: "Como função principal, realizava a análise, parametrização e teste de rotas de EDI, bem como prestação de suporte e atendimento técnico aos clientes. Além disso, também realizar a gestão de NF-es."
    }
]

const Experience = () => {
  return (
    <section id='experience-info'>
        <div className='experience-card'>
            <h3>Experiência</h3>
            <div className='experience-info'>
                {experiences.map((experience) => (
                    <div className='experience' id={experience.id} key={experience.id}>
                        <h4>{experience.role}</h4>
                        <p id='company'>{experience.name}</p>
                        <span>{experience.date}</span>
                        <p>{experience.duty}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default Experience