export default function StudiesTrailhead() {
    return(
        <div className="grid grid-cols-2 gap-8 justify-items-center  m-10">
            <h2 className=" col-span-2 text-5xl justify-self-center mt-10" >Trailhead</h2>
            <h3 className=" col-span-2 text-2xl justify-self-center mb-10">Double Star Ranger</h3>
            <div>
                <p>I have been improving doing badge and super badge about developer topic in Trailhead</p>
            </div>
            <div>
                <h3 className="text-2xl mb-10">Badges About :</h3>
                <ul className="list-disc">
                    <li className="mb-5">Apex</li>
                    <li className="mb-5">Lightning</li>
                    <li className="mb-5">Security</li>
                    <li className="mb-5">Administrative tasks</li>
                </ul>
            </div>

        </div>
    )
};