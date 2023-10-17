import Image from "next/image";

const HeroAnimation = () => {

  return (
    <>
      <Image
        className="border-4 border-white rounded-full shadow-xl"
        src="./LKCA_logo.svg"
        alt="LKCA_logo"
        width="350"
        height="350"
      />

      <div className="hw-inner flex justify-between items-center absolute border border-gray-800 rounded-full animate-spin-slow anim-8s">
        <div className="rounded-full shadow-lg transform -translate-x-5">
          <Image
            className="rounded-full animate-rotate-img anim-8s"
            src="./facebook_icon.svg"
            alt="facebook_icon"
            width="42"
            height="42"
          />
        </div>
        <div className="rounded-full shadow-lg transform translate-x-5 ">
          <Image
            className="rounded-full animate-rotate-img anim-8s"
            src="./instagram_icon.svg"
            alt="instagram_icon"
            width="42"
            height="42"
          />
        </div>

      </div>
    </>
  )
}

export default HeroAnimation