import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import data from "../data.json";
import {
  TiSocialTwitterCircular,
  TiSocialFacebookCircular,
  TiSocialInstagramCircular,
} from "react-icons/ti";

function LinkCard({
  href,
  title,
  image,
}: {
  href: string;
  title: string;
  image?: string;
}) {
  return (
    <a
      href={href}
      className="flex items-center p-1 w-full rounded-md bg-white hover:scale-105 transition-all border border-gray-300 mb-3"
    >
      <div className="flex text-center w-full ">
        {image && (
          <Image
            className="rounded-sm "
            alt={title}
            src={image}
            width={40}
            height={40}
          />
        )}

        <h2 className="flex items-center justify-center font-semibold w-full text-center">
          {title}
        </h2>
      </div>
    </a>
  );
}
const Home: NextPage = () => {
  return (
    <div className="flex flex-col items-center justify-center mx-auto w-full mt-16 px-8">
      <Image
        className="rounded-full"
        alt={data.name}
        src={data.avatar}
        width={150}
        height={150}
      />
      <h1 className="font-semibold text-xl mt-4 mb-8">{data.name}</h1>
      {data.links.map((link) => (
        <LinkCard key={link.href} {...link} />
      ))}
      <div>
        <div className="flex items-center gap-1">
          <TiSocialFacebookCircular size={40} />
          <TiSocialInstagramCircular size={40} />
          <TiSocialTwitterCircular size={40}/>
        </div>
        {/* {data.socials.map((link) => {
          if (link.href.includes("Facebook")) {
            return <TiSocialFacebookCircular />;
          }
          if (link.href.includes("Instagram")) {
            return <TiSocialInstagram />;
          }
          if (link.href.includes("Twitter")) {
            return <TiSocialTwitterCircular />;
          }
        })} */}
      </div>
    </div>
  );
};

export default Home;
