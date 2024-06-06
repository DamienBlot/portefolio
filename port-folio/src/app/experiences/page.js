import Card from "../(components)/card";

export default function Experiences() {
    return (
        <div className="grid grid-cols-2 gap-8 justify-items-center  mb-10">
          <h2 className=" col-span-2 text-5xl justify-self-center mt-10 mb-10">Professionnal Experiences</h2>
          <Card src="/logo-ionis-education-group.png" alt="logo-ionis-education-group" width="200" height="50" cssClass="bg-black justify-self-center my-10 p-5" titleName="Ionis Education Group" cardText="2 years as Salesforce Lead Developer practicing Salesforce related tasks in a double Salesforce organisation environment." hrefLink="/experiences/leadDeveloper" />
          <Card src="/logo-ionis-education-group.png" alt="logo-ionis-education-group" width="200" height="50" cssClass="bg-black justify-self-center my-10 p-5" titleName="Ionis Education Group" cardText="3 years as Full Stack Salesforce Developer learning Salesforce and doing my apprenticeship for my developer master." hrefLink="/experiences/fullStackDeveloper"  />
        </div>
    )};