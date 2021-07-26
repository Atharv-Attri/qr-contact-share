import Image from "next/image"
import Link from 'next/link'
export default function Footer() {
  return (
    <footer>
      <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <span className="ml-3 text-xl">NAME</span>
        <p className="flex text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
          (Poorly) Programmed by:
          <Link href="http://twitter.com/AtharvAttri"r el="noopener noreferrer"
            target="_blank">
          <a
            className="text-gray-600 ml-1"
          >
            @AtharvAttri
          </a>
          </Link>
        </p>
        <span className="flex sm:ml-auto sm:mt-0 px ">
          <span className="px-2">Powered by </span>
          <a href="https://now.sh" target="_blank" rel="noopener noreferrer">
            <span>
              <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                width={72}
                height={16}
              />
            </span>
          </a>
          <span className="px-2">
            {"   "}and{"   "}
          </span>
          <a href="https://deta.sh" target="_blank" rel="noopener noreferrer">
            <span>
              <Image
                src="https://uploads-ssl.webflow.com/5eb96efa78dc680fc15be3be/5ebd24f6cbf6e9ebd674656e_Logo.svg"
                alt="Deta Logo"
                width={75}
                height={21.72}
              />
            </span>
          </a>
        </span>
      </div>
    </footer>
  );
}
