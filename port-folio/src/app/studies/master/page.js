export default function StudiesMaster() {
    return(
        <div className="grid grid-cols-2 gap-8 justify-items-center  m-10">
            <h2 className=" col-span-2 text-5xl justify-self-center mt-10" >Master of Science</h2>
            <h3 className=" col-span-2 text-2xl justify-self-center mb-10">software Architecte and Application Developer</h3>
            <div>
                <p>During 2 years have been doing my apprenticeship for <a href="https://etna.io/formation/master-of-science-1-2-developpeur-dapplication-et-architecte-logiciel/" target="_blank" className="hover:underline hover:decoration-emerald-900 hover:decoration-4">Master of Science on software architecte, Application Developer</a>. I learnt about different tehcnologies as Nodejs, Express.js, Sequelize, Docker, Reactjs.</p>
            </div>
            <div>
                <h3 className="text-2xl mb-10">Projects</h3>
                <ul className="list-disc">
                    <li className="mb-5">création d'un serveur http en C</li>
                    <li className="mb-5">création d'une application desktop .net, C# </li>
                    <li className="mb-5">création d'une application en java + servlet</li>
                    <li className="mb-5">connaissance en nodejs, express, sequelize, docker, reactjs</li>
                    <li className="mb-5">sécurité de l'information (test de faille de sécurité sur un site web)</li>
                    <li className="mb-5">réation d'une application spring boot, reactjs</li>
                </ul>
            </div>

        </div>
    )
};