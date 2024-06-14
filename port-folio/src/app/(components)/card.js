import Image from "next/image";
import Link from "next/link";

export default function card({src, alt, width, height, cssClass, titleName, cardText, hrefLink}) {
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg  grid grid-cols-1 bg-white">
            <Image
                    src={src}
                    alt={alt}
                    width={width}
                    height={height}
                    className={cssClass}
                    priority
                  />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{titleName}</div>
                <p className="text-gray-700 text-base">
                {cardText}
                </p>
            </div>
            <Link href={hrefLink} className="w-32 inline-flex items-center ml-5 mb-5 px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            More details
                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
            </Link>
        </div>
    )
}