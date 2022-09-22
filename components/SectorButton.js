export default function SectorButton(props) {
  return (
    <>
      <div className="px-4 py-3 mx-2 my-2 bg-[#47B5FF] rounded-3xl cursor-pointer flex-initial text-[16px] font-semibold text-white">
        {props.name}
      </div>
    </>
  );
}
