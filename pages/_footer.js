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
            <svg className="pt-1"role="img" aria-label="Vercel Inc." height="17" viewBox="0 0 283 64" fill="var(--geist-foreground)"><path d="M37 0l37 64H0L37 0zM159.6 34c0-10.3-7.6-17.5-18.5-17.5s-18.5 7.2-18.5 17.5c0 10.1 8.2 17.5 19.5 17.5 6.2 0 11.8-2.3 15.4-6.5l-6.8-3.9c-2.1 2.1-5.2 3.4-8.6 3.4-5 0-9.3-2.7-10.8-6.8l-.3-.7h28.3c.2-1 .3-2 .3-3zm-28.7-3l.2-.6c1.3-4.3 5.1-6.9 9.9-6.9 4.9 0 8.6 2.6 9.9 6.9l.2.6h-20.2zM267.3 34c0-10.3-7.6-17.5-18.5-17.5s-18.5 7.2-18.5 17.5c0 10.1 8.2 17.5 19.5 17.5 6.2 0 11.8-2.3 15.4-6.5l-6.8-3.9c-2.1 2.1-5.2 3.4-8.6 3.4-5 0-9.3-2.7-10.8-6.8l-.3-.7H267c.2-1 .3-2 .3-3zm-28.7-3l.2-.6c1.3-4.3 5.1-6.9 9.9-6.9 4.9 0 8.6 2.6 9.9 6.9l.2.6h-20.2zM219.3 28.3l6.8-3.9c-3.2-5-8.9-7.8-15.8-7.8-10.9 0-18.5 7.2-18.5 17.5s7.6 17.5 18.5 17.5c6.9 0 12.6-2.8 15.8-7.8l-6.8-3.9c-1.8 3-5 4.7-9 4.7-6.3 0-10.5-4.2-10.5-10.5s4.2-10.5 10.5-10.5c3.9 0 7.2 1.7 9 4.7zM282.3 5.6h-8v45h8v-45zM128.5 5.6h-9.2L101.7 36 84.1 5.6h-9.3L101.7 52l26.8-46.4zM185.1 25.8c.9 0 1.8.1 2.7.3v-8.5c-6.8.2-13.2 4-13.2 8.7v-8.7h-8v33h8V36.3c0-6.2 4.3-10.5 10.5-10.5z"></path></svg>
              
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
