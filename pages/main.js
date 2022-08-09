import Image from 'next/image';
import arrowUp from '../public/arrow-up.svg';
import arrowDown from '../public/arrow-down.svg';
import styles from '../styles/Main.module.css';

function Main() {
  return (
    <div className="bg-[#222222] p-10">
      <h2 className="text-white">Click a sector to see more detail</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        <div className={styles.sectorBox1}>
          <p className="text-center">Travel</p>
          <div className={styles.sectorBox2}>
            <Image src={arrowUp} alt="Arrow Up" width="35px" height="35px" />
            <span className="text-[#07818F] text-[3rem]">186%</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
