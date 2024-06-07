export default function StudiesLicence() {
    return(
        <div className="grid grid-cols-2 gap-8 justify-items-center  m-10">
            <h2 className=" col-span-2 text-5xl justify-self-center mt-10" >Bachelor</h2>
            <h3 className=" col-span-2 text-2xl justify-self-center mb-10">CONCEPTEUR PROJETS SI</h3>
            <div>
                <p>During 1 year have been doing my apprenticeship for <a href="https://etna.io/formation/cycle-bachelor3/" target="_blank" className="hover:underline hover:decoration-emerald-900 hover:decoration-4">Master of Science on software architecte, Application Developer</a>. I have been working multiple projects in different informatic languages as C, react.js and node.js</p>
            </div>
            <div>
                <h3 className="text-2xl mb-10">Projects</h3>
                <ul className="list-disc">
                    <li className="mb-5">connaissance en nodejs, express, sequelize, docker, reactjs.</li>
                    <li className="mb-5">Scréation d'une application desktop .net, C# </li>
                    <li className="mb-5">connaissance du C++</li>
                    <li className="mb-5">création d'une application web  .net, C#</li>
                </ul>
            </div>

        </div>
    )
};