import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className="w-full flex">
      <Head>
        <title>Agency-web</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="bg-opacity-40 bgwave">
        <div className="text-right  flex bg-opacity-40 mt-40">
          <div className="w-1/2 text-left mx-40 pt-24">
            <h1 className=" font-sans font-family:raleway font-bold text-5xl top-0 ">
              We build awsome websites that Fresh, New ideas&
              <span className="text-pink-500 text-opacity-100">
                {" "}
                Bold moves
              </span>
            </h1>
            <p className="font-family:poppins place-items-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut.Lorem ipsum dolor sit amet,
            </p>
            <img
              className="left-0 mx-40 mt-8 "
              src="https://demo.phlox.pro/agency-web/wp-content/uploads/sites/129/2019/10/Mask-Group-1.png"
            />
          </div>
          <div className="w-1/2   ">
            <img
              className="pb-20"
              src="https://demo.phlox.pro/agency-web/wp-content/uploads/sites/129/2019/10/Rounded-Rectangle-2-copy-13.png"
            />

            <img
              className="pb-20"
              src="https://demo.phlox.pro/agency-web/wp-content/uploads/sites/129/2019/10/Rounded-Rectangle-2-copy-6.png"
            />
          </div>
        </div>
        <div className="pr-28">
          <img src="https://demo.phlox.pro/agency-web/wp-content/uploads/sites/129/2019/10/works.svg" />
        </div>
      </div>
    </div>
  );
}
