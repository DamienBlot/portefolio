import Image from "next/image";

export default function Home() {
  return (
    <main className="grid grid-cols-2 gap-4">
      <div>
      <Image
              src="/profil_image.jpg"
              alt="profile_image"
              width={100}
              height={24}
              priority
            />
      </div>
    <div>
    <Image
              src="/double-star-ranger.png"
              alt="double-star-ranger"
              width={100}
              height={24}
              priority
            />
    </div>
    <div>
    <h1>Damien Blot</h1>
    <div className="flex flex-row justify-center">
    <h2>Porfolio</h2>
      <p>créé en 
        <Image
                src="/next.svg"
                alt="next_logo"
                width={100}
                height={24}
                priority
              />
      </p>
    </div>
    </div>
    <div>
    <ul className="list-disc">
      <li>Trailhead Account</li> 
      {/* <a href="https://www.salesforce.com/trailblazer/profile" target="_blank"> </a>*/}
      <li>Linkedin Account</li>
    </ul> 
    </div>
    <div><p>I am a Salesforce full stack developer with a IT diploma as software engineerer and developer.</p></div>
    </main>
  );
}
