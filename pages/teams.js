import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/future/image';
import TeamData from '../assets/data/Teams.json';

export default function about() {
  return (
    <>
      <Head>
        <title>Our Teams | UniTrend by PolDev UGM</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="min-h-screen bg-white">
        <div className="flex-1 max-w-5xl mx-auto p-10">
          <section className="my-16">
            <Link href="/">
              <p className="text-black text-[1.0rem] hover:cursor-pointer">
                &#60; Back
              </p>
            </Link>
          </section>
          <section className="text-justify flex flex-col">
            <h1 className="text-black text-[3em] md:text-[4em] font-bold">
              Our Teams
            </h1>
            <div className="flex justify-center xsm:justify-between flex-wrap">
              {TeamData.map((member, index) => {
                return (
                  <>
                    <div className="max-w-[250px] overflow-hidden my-5">
                      <div className="flex justify-center">
                        <Image
                          src={member.image}
                          width={250}
                          height={250}
                          className="h-[250px] w-[250px] object-cover object-top"
                          alt={member.name}
                        />
                      </div>
                      <div className="py-4">
                        <h2 className="font-medium text-lg mb-1">
                          {member.name}
                        </h2>
                        <p className="text-gray-700 text-base italic">
                          {member.role}
                        </p>
                        <p className="text-gray-500 text-sm">
                          {member.description}
                        </p>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
