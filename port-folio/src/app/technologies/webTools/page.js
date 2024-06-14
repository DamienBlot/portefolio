export default function WebTools() {
    return(
        <div className="grid grid-cols-2 gap-8 justify-items-center  m-10">
            <h2 className=" col-span-2 text-5xl justify-self-center mt-10 mb-10" >Web tools</h2>
            <div>
                <p>Knowledge about technologies in web, to create and customize web pages. The important part of responsivity in web page and to keep in mind mobile first as google said in their core web vitals for SEO (Search Engine Optimization) </p>
            </div>
            <div>
                <h3 className="text-2xl mb-10">Knowledge</h3>
                <ul className="list-disc">
                    <li className="mb-5">html 5</li>
                    <li className="mb-5">CSS 3</li>
                    <li className="mb-5">tailwind CSS</li>
                </ul>
            </div>

        </div>
    )
};