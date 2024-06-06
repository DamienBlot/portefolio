export default function StudiesMaster() {
    return(
        <div className="grid grid-cols-2 gap-8 justify-items-center  m-10">
            <h2 className=" col-span-2 text-5xl justify-self-center mt-10" >Master of Science</h2>
            <h3 className=" col-span-2 text-2xl justify-self-center mb-10">software Architecte and Application Developer</h3>
            <div>
                <p>During 2 years have been doing my apprenticeship for <a href="https://etna.io/formation/master-of-science-1-2-developpeur-dapplication-et-architecte-logiciel/" target="_blank">Master of Science on software architecte, Application Developer</a>. I have been working multiple projects in different informatic languages as C, react.js and node.js</p>
            </div>
            <div>
                <h3 className="text-2xl mb-10">Projects</h3>
                <ul className="list-disc">
                    <li className="mb-5">Integration between Salesforce ad external Services(ERP, international services,...)</li>
                    <li className="mb-5">Salesforce custom application</li>
                    <li className="mb-5">administratif duties</li>
                    <li className="mb-5">report</li>
                    <li className="mb-5">Maintien and fix potentiel issues in Salesforce</li>
                    <li className="mb-5">CI/CD</li>
                    <li className="mb-5">DEVOPS Center</li>
                </ul>
            </div>

        </div>
    )
};