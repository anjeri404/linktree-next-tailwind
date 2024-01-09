import type { NextPage } from "next";
import Image from "next/image";
import data from "../data.json";
import {
  TiSocialTwitterCircular,
  TiSocialFacebookCircular,
  TiSocialInstagramCircular,
  TiSocialInstagram,
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
      className="flex items-center p-1 w-[500px] rounded-md bg-white hover:scale-105 transition-all border border-gray-300 mb-3"
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
      <h1 className="font-semibold text-xl  mt-5">{data.name}</h1>
      <h6 className="font-semibold text-sm italic mt-2 mb-8">{data.profile}</h6>
      {data.links.map((link) => (
        <LinkCard key={link.href} {...link} />
      ))}
      <div>
        <div className="flex items-center gap-1">
          <a>
            <TiSocialFacebookCircular size={40} />
          </a>
          <a>
            <TiSocialInstagramCircular size={40} />
          </a>
          <a>
            <TiSocialTwitterCircular size={40} />
          </a>
        </div>
        {/* {data.socials.map((link) => {
          if (link.href.includes("Facebook")) {
            return <TiSocialFacebookCircular />;
          }
          if (link.href.includes("Instagram")) {
            return <TiSocialInstagram />;
          }
          if (link.href.includes("Linktree")) {
            return <TiSocialTwitterCircular />;
          }
        })} */}
      </div>
    </div>
  );
};

export default Home;
