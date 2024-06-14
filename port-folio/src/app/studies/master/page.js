export default function StudiesMaster() {
    return(
        <div className="grid grid-cols-2 gap-8 justify-items-center  m-10">
            <h2 className=" col-span-2 text-5xl justify-self-center mt-10" >Master of Science</h2>
            <h3 className=" col-span-2 text-2xl justify-self-center mb-10">software Architecte and Application Developer</h3>
            <div>
                <p>During 2 years have been doing my apprenticeship for <a href="https://etna.io/formation/master-of-science-1-2-developpeur-dapplication-et-architecte-logiciel/" target="_blank" className="hover:underline hover:decoration-emerald-900 hover:decoration-4">Master of Science on software architecte, Application Developer</a>. I learnt about different tehcnologies as Nodejs, Express.js, Sequelize, Docker, Reactjs.
                This master allows me to know about design pattern thaht you can use in everylanguage and to have a global point of view of project for this success. I learnt about using microservices architecture</p>
            </div>
            <div>
                <h3 className="text-2xl mb-10">Projects</h3>
                <ul className="list-disc">
                    <li className="mb-5">develop a http server in C language </li>
                    <li className="mb-5">Create desktop application in .net, C# </li>
                    <li className="mb-5">Develop an application in Java (backend) and servlet (frontend)</li>
                    <li className="mb-5">Knowledge about : Nodejs, Express.js, Sequelize, React.js</li>
                    <li className="mb-5">Use Docker to Containerize application </li>
                    <li className="mb-5">Develop spring boot API (backend) and React.js (frontend)</li>
                    <li className="mb-5">Informatic security, hacking website and test/find security breach</li>
                </ul>
            </div>

        </div>
    )
};