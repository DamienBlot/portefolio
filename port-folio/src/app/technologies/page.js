import Card from "../(components)/card";

export default function Technologies() {
    return (
      <div className="grid grid-cols-2 gap-8 justify-items-center  mb-10">
      <h2 className=" col-span-2 text-5xl justify-self-center mt-10 mb-10">Technologies</h2>
      <Card src="/salesforce-logo.png" alt="salesforce-logo" width="200" height="50" cssClass="bg-white justify-self-center my-10 p-5" titleName="Salesforce" cardText="Knowledge about Salesforce technologies for developer : Apex, Lightning web component, Salesforce REST API" hrefLink="/technologies/salesforce" />
      <Card src="/html-css-logo.png" alt="html-css-logo" width="200" height="50" cssClass="bg-white justify-self-center my-10 p-5" titleName="Web tools" cardText="Knowledge about web technologies for developer : html5, css3" hrefLink="/" />
      <Card src="/javascript-logo.png" alt="javascript-logo" width="200" height="50" cssClass="bg-white justify-self-center my-10 p-5" titleName="Javascript" cardText="Knowledge about technologies in Javascript language for developer : Node.js, React.js, Next.js" hrefLink="/" />
      <Card src="/python-logo.png" alt="spython-logo" width="200" height="50" cssClass="bg-white justify-self-center my-10 p-5" titleName="Python" cardText="Knowledge about the informatic language Python for developer: flask application, pandas and numpy librairies" hrefLink="/" />
      <Card src="/gcp-logo.png" alt="gcp-logo" width="200" height="50" cssClass="bg-white justify-self-center my-10 p-5" titleName="Google Cloud Plateform" cardText="Knowledge about the Google Service As Plateform for Continious Integration and Deployment of Application" hrefLink="/"  />
    </div>
    )};