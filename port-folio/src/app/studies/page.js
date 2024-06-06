import Card from "../(components)/card";
import Image from "next/image";
import Link from "next/link";

export default function Studies() {
    return (
        <div className="grid grid-cols-2 gap-8 justify-items-center mb-10">
          <h2 className=" col-span-2 text-5xl justify-self-center mt-10 mb-10">Studies</h2>
          {/* <Card src="/trailhead-logo.png" alt="trailhead-logo" width="150" height="50" cssClass="bg-white justify-self-center my-10 p-5 border-4 border-black" titleName="Trailhead" cardText="Double star ranger in Salesforce" /> */}
          <div className="max-w-sm rounded overflow-hidden shadow-lg  grid grid-cols-1 bg-white">
            <div className="flex justify-around">
              <Image
                      src="/trailhead-logo.png"
                      alt="trailhead-logo"
                      width={150}
                      height={50}
                      className="g-white justify-self-center my-10 p-5 border-2 border-black"
                      priority
                    />
              <Image
                      src="/double-star-ranger.png"
                      alt="double-star-ranger"
                      width={150}
                      height={50}
                      className="g-white justify-self-center my-10 p-5 border-2 border-black"
                      priority
                    />
            </div>

            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">Trailhead</div>
                <p className="text-gray-700 text-base">
                Double star ranger in Salesforce Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                </p>
            </div>
            <Link href="/" class="w-32 inline-flex items-center ml-5 mb-5 px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            More details
                <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
            </Link>
        </div>
          <Card src="/logo-etna.png" alt="logo-etna" width="200" height="50" cssClass="bg-white justify-self-center my-10 p-5 border-2 border-black" titleName="ETNA" cardText="Master degree in 2 years with apprenticeship" hrefLink="/studies/master"/>
          <Card src="/logo-etna.png" alt="logo-etna" width="200" height="50" cssClass="bg-white justify-self-center my-10 p-5 border-2 border-black" titleName="ETNA" cardText="Licence degree in 1 year with apprenticeship" hrefLink="/"/>
        </div>
    )};