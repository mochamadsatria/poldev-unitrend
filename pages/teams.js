import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/future/image';
import TeamData from '../assets/statics/Teams.json';

export default function about() {
  return (
    <>
      <Head>
        <title>Our Teams | UniTrend by PolDev UGM</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="min-h-screen bg-white">
        <div className="flex-1 max-w-7xl mx-auto p-10">
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
            <ul className="list-none grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              {TeamData.map((member, index) => {
                return (
                  <>
                    <li className="flex flex-col items-center p-2">
                      <Image
                        src={member.image}
                        width={250}
                        height={250}
                        className="h-[250px] w-[250px] object-cover object-top"
                        alt={member.name}
                      />
                      <div className="py-4">
                        <h2 className="font-medium text-lg">
                          {member.name}
                        </h2>
                        <p className="text-gray-700 text-base italic">
                          {member.role}
                        </p>
                        <p className="text-gray-500 text-sm">
                          {member.description}
                        </p>
                      </div>
                    </li>
                  </>
                );
              })}
            </ul>
          </section>
        </div>
      </div>
    </>
  );
}
