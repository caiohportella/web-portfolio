import '../styles/components/tecnologies.sass'

import {
    DiMysql,
    DiReact,
    DiJsBadge,
    DiDart,
    DiGit,
    DiGo,
    DiJava,
    DiFirebase,
} from "react-icons/di";

const tecnologies = [
    {
        id: "sql",
        name: "MySQL",
        icon: <DiMysql className="tecnology-icon" />,
        experience: "Utilizado majoritariamente em projetos acadêmicos, como o MyCash."
    },
    {
        id: "react",
        name: "React",
        icon: <DiReact className="tecnology-icon" />,
        experience: "Utilizado em projetos pessoais, como o meu portfólio e alta bagagem de cursos."
    },
    {
        id: "js",
        name: "JavaScript",
        icon: <DiJsBadge className="tecnology-icon" />,
        experience: "Utilizado em apoio ao desenvolvimento web, como HTML e ReactJS."
    },
    {
        id: "dart",
        name: "Dart",
        icon: <DiDart className="tecnology-icon" />,
        experience: "Utilizado em apoio ao Flutter, onde fiz vários aplicativos de estudo."
    },
    {
        id: "git",
        name: "Git",
        icon: <DiGit className="tecnology-icon" />,
        experience: "Utilizado rotineiramente, sendo essencial para um bom desenvolvimento de projetos."
    },
    {
        id: "go",
        name: "Go",
        icon: <DiGo className="tecnology-icon" />,
        experience: "Utilizado em uma POC do projeto de Message Oriented Middleware."
    },
    {
        id: "java",
        name: "Java",
        icon: <DiJava className="tecnology-icon" />,
        experience: "Utilizado amplamente durante a graduação, tendo apoiado vários projetos durante todo o curso."
    },
    {
        id: "firebase",
        name: "Firebase",
        icon: <DiFirebase className="tecnology-icon" />,
        experience: "Utilizado em apoio ao Flutter, no qual ainda busco me aprofundar."
    }
];

const Tecnologies = () => {
  return (
    <section className="tecnologies">
        <h2>Tecnologias</h2>
        <div className="tecnologies-grid">
            {tecnologies.map((tecnology) => (
                    <div className="tecnology-card" id={tecnology.id} key={tecnology.id}>
                        {tecnology.icon}
                        <div className='tecnology-info'>
                            <h3>{tecnology.name}</h3>
                            <p>
                                {tecnology.experience}
                            </p>
                        </div>
                    </div>
                )
            )}
        </div>
    </section>
  )
}

export default Tecnologies