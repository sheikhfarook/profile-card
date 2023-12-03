import backgroundprofile from "../assets/images/bg-pattern-card.svg";
import profile from "../assets/images/image-victor.jpg";

const ProfileCards = () => {
  return (
    <div className="w-[480px] font-kumbh m-auto rounded-3xl mt-[15rem] bg-white text-center ">
      <div>
        <img className="w-full  rounded-t-3xl" src={backgroundprofile} alt="" />
        <img
          className="w-[9rem] rounded-full m-auto relative bottom-14 border-4 border-white"
          src={profile}
          alt=""
        />
        <h1 className="mt-[-17px]  text-2xl text-[#2D3248] ">
          Victor Crest<span className="text-[#969696] font-[300]"> 26</span>
        </h1>
        <p className="mb-9 text-[#969696] text-[16px] font-[400] mt-2">
          London
        </p>
        <hr />
        <div className="flex justify-evenly mt-5">
          <div className="mb-6">
            <div className="text-2xl"> 80K</div>
            <div className="text-[#969696] text-[16px] font-[400]">
              Followers
            </div>
          </div>
          <div>
            <div className="text-2xl">803K</div>
            <div className="text-[#969696] text-[16px] font-[400]">Likes</div>
          </div>
          <div>
            <div className="text-2xl">1.4K</div>
            <div className="text-[#969696] text-[16px] font-[400]">Photos</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCards;
