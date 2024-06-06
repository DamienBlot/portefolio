import Image from "next/image";
import "./globals.css";

export default function Home() {
  return (
    <main className="grid grid-cols-2 gap-4 gap-y-5">
      <div className="justify-self-center mt-10">
        <Image
                src="/profil_image.jpg"
                alt="profile_image"
                width={200}
                height={50}
                priority
                className="rounded-full border-2 border-gray-300"
              />
      </div>
      <div className="row-span-2 flex flex-col my-10 justify-around">
        <h1 className="text-5xl">Damien Blot</h1>
        <div className="my-10">
          <ul className="list-disc">
            <li className="">
              <a href="https://www.salesforce.com/trailblazer/damienblot" target="_blank" className="flex mb-6 no-underline hover:underline hover:decoration-emerald-900 hover:decoration-4">
                <p className="mr-5">My Trailhead </p>
                <Image
                  src="/trailhead-logo.png"
                  alt="trailhead-logo"
                  width={25}
                  height={25}
                  priority
                />
              </a>
            </li> 
            <li>
              <a href="https://www.linkedin.com/in/damien-blot-05158496/" target="_blank" className="flex mb-6 no-underline hover:underline hover:decoration-emerald-900 hover:decoration-4">
                <p className="mr-5">My Linkedin</p>
              <Image
                    src="/linkedin-logo.png"
                    alt="inkedin-logo"
                    width={25}
                    height={25}
                    priority
                  />
              </a>
            </li>
            <li>
              <a href="https://github.com/DamienBlot"  target="_blank" className="flex mb-6 no-underline hover:underline hover:decoration-emerald-900 hover:decoration-4">
                <p className="mr-5">My Github</p>
                <Image
                    src="/GitHub-logo.png"
                    alt="github_logo"
                    width={25}
                    height={25}
                    priority
                  />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="col-span-2 mx-20">
        <p>I am a Lead Salesforce developer with a IT diploma as software engineerer and developer. It has been 5 years, I am navigate in Salesforce environment. I am passionated about new technologies and build innovated and challenging projects</p>
      </div>
      <div className="flex mt-32">
        <a href="https://github.com/DamienBlot/portfolio/tree/main/port-folio" target="_blank">Repository for the portfolio application in
          <Image
                      src="/next.svg"
                      alt="next_logo"
                      width={100}
                      height={24}
                      priority
                    />
          <Image
                    src="/GitHub-logo.png"
                    alt="github_logo"
                    width={25}
                    height={25}
                    priority
                  />
        </a>
      </div>
    </main>
  );
}
