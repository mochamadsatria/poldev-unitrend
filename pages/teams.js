import Link from 'next/link';
import Image from 'next/future/image';
import NurRimaImg from '../public/Nur Rima Russelina.jpeg';
import SailaturRizqiImg from '../public/Sailatur Rizqi As Suhudiyah, S.IP_ Junior Researcher.jpg';
import TeamCard from '../components/TeamCard';

export default function about() {
  return (
    <>
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
            <div className="flex justify-between flex-wrap">
              <div className="max-w-[250px] overflow-hidden my-5">
                <div className="flex justify-center">
                  <Image
                    src={NurRimaImg}
                    className="h-[250px] w-[250px] object-cover"
                    alt="Nur Rima Russelina"
                  />
                </div>
                <div className="py-4">
                  <div className="font-medium text-lg mb-1">
                    Nur Rima Rosselina
                  </div>
                  <p className="text-gray-700 text-base italic">CEO</p>
                </div>
              </div>
              <div className="max-w-[250px] overflow-hidden my-5">
                <div className="flex justify-center">
                  <Image
                    src={NurRimaImg}
                    className="h-[250px] w-[250px] object-cover"
                    alt="Nur Rima Russelina"
                  />
                </div>
                <div className="py-4">
                  <div className="font-medium text-lg mb-1">
                    Nur Rima Rosselina
                  </div>
                  <p className="text-gray-700 text-base italic">CEO</p>
                </div>
              </div>
              <div className="max-w-[250px] overflow-hidden my-5">
                <div className="flex justify-center">
                  <Image
                    src={NurRimaImg}
                    className="h-[250px] w-[250px] object-cover"
                    alt="Nur Rima Russelina"
                  />
                </div>
                <div className="py-4">
                  <div className="font-medium text-lg mb-1">
                    Nur Rima Rosselina
                  </div>
                  <p className="text-gray-700 text-base italic">CEO</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
