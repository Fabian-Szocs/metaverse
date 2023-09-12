import styles from '../styles';

const StartSteps = ({ number, text }) => (
  <div className={`${styles.flexCenter} flex-row`}>
    <div className={`${styles.flexCenter} w-[75px] h-[70px] rounded-[24px] bg-[#323f5d]`}>
      <p className="text-white font-bold text-[20px]">0 {number} </p>
    </div>
    <p className=" flex-1 font-normal ml-[30px] text-[18px]  text-[#B0B0B0] leading-[32px]">
      {text}
    </p>
  </div>
);

export default StartSteps;
