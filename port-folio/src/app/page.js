import Image from "next/image";
import "./globals.css";
import Link from "next/link";

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
        <h2 className="text-2xl mt-5">Salesforce Lead Developer</h2>
        <div className="my-10">
          <ul className="list-disc">
            <li>
              <a href="https://www.salesforce.com/trailblazer/damienblot" target="_blank" className="flex mb-6 no-underline hover:underline hover:text-sky-500 hover:decoration-4">
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
              <a href="https://www.linkedin.com/in/damien-blot-05158496/" target="_blank" className="flex mb-6 no-underline hover:underline hover:text-sky-500 hover:decoration-4">
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
              <a href="https://github.com/DamienBlot"  target="_blank" className="flex mb-6 no-underline hover:underline hover:text-sky-500 hover:decoration-4">
                <p className="mr-5">My Github</p>
                <Image
                    src="/GitHub-logo.png"
                    alt="github_logo"
                    width={25}
                    height={25}
                    priority
                    className="bg-black"
                  />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="col-span-2 mx-20">
        <p>I am a Salesforce lead developer with an IT diploma as software engineerer and developer. It has been 5 years, I am navigate in Salesforce environment. I am passionated about new technologies and build innovated and challenging projects. This portfolio goes in details into important elements for my carreer : </p>
        <ol className="mt-5">
          <li><Link href="/experiences" className="hover:underline hover:text-sky-500 hover:decoration-4"><b>Experiences</b></Link>: About my professional experiences with details about my missions and tasks</li>
          <li><Link href="/studies" className="hover:underline hover:text-sky-500 hover:decoration-4"><b>Studies</b></Link>: About my IT studies with details about my knowledge and courses</li>
          <li><Link href="/technologies" className="hover:underline hover:text-sky-500 hover:decoration-4"><b>Technologies</b></Link>: About my knowledge in web and IT technologies with details about my understanding and skills</li>
          <li><Link href="/useCase" className="hover:underline hover:text-sky-500 hover:decoration-4"><b>Use case</b></Link>: About an use case to show a little about my pratical experience in Salesforce and web development</li>
        </ol>
      </div>
      <div className="flex mt-32">
        <a href="https://github.com/DamienBlot/portfolio/tree/main/port-folio" target="_blank">Repository for the portfolio application in
          <Image
              src="/next.svg"
              alt="next_logo"
              width={125}
              height={50}
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
