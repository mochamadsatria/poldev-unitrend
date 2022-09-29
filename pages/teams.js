import Link from 'next/link';

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
              FAQ
            </h1>
            <p className="text-black text-[1.1rem] indent-16">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis
              lacus, turpis vitae lobortis. Justo, gravida vitae rutrum in
              elementum hendrerit. Etiam facilisis nisl purus mi felis turpis
              sed nec. Sit curabitur dui sed magna gravida venenatis, amet
              egestas viverra. Non vitae, eu ut lacus, aliquam. Enim imperdiet
              luctus arcu tempus fringilla et nulla eget enim. Elit ut massa
              pellentesque at. Felis amet, tincidunt varius eu. Scelerisque amet
              eu amet fames habitant leo interdum donec. Neque vulputate urna
              purus, volutpat amet enim viverra pharetra rhoncus. Dignissim id
              aenean aenean ut pulvinar aliquet laoreet justo volutpat. Sed
              vitae habitasse.
            </p>
          </section>
        </div>
      </div>
    </>
  );
}
