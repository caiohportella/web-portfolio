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
        icon: <DiMysql />,
    },
    {
        id: "react",
        name: "React",
        icon: <DiReact />,
    },
    {
        id: "js",
        name: "JavaScript",
        icon: <DiJsBadge />,
    },
    {
        id: "dart",
        name: "Dart",
        icon: <DiDart />,
    },
    {
        id: "git",
        name: "Git",
        icon: <DiGit />,
    },
    {
        id: "go",
        name: "Go",
        icon: <DiGo />,
    },
    {
        id: "java",
        name: "Java",
        icon: <DiJava />,
    },
    {
        id: "firebase",
        name: "Firebase",
        icon: <DiFirebase />,
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
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, aperiam ipsa? Error nam voluptate, beatae ipsam dignissimos suscipit quod ea sunt nisi reprehenderit, nulla minus voluptas inventore reiciendis tempora minima!
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