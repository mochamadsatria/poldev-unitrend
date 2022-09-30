import Image from 'next/image';

export default function TeamCard(props) {
  return (
    <>
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        {/* <div className="flex justify-center"> */}
        <img
          src={props.img}
          alt="Sunset in the mountains"
          className="h-[200px] w-[200px] object-cover"
        />
        {/* <Image
          src={props.img}
          className="h-[200px] w-[200px] object-cover"
          alt="Sunset in the mountains"
        /> */}
        {/* x</div> */}
        {/* <img class="w-full" src="/img/card-top.jpg" alt="Sunset in the mountains"> */}
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
          <p className="text-gray-700 text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus quia, nulla! Maiores et perferendis eaque,
            exercitationem praesentium nihil.
          </p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #photography
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #travel
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #winter
          </span>
        </div>
      </div>
    </>
  );
}
