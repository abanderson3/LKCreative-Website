import Image from "next/image";

const HeroAnimation = () => {

  return (
    <>
      <Image
        className="border-4 border-white rounded-full shadow-2xl"
        src="./LKCA_logo.svg"
        alt="LKCA_logo"
        width="300"
        height="300"
        priority={true}
      />



      {/* Inner Ring */}
      <div className="hw-inner flex justify-between items-center absolute border border-gray-800 rounded-full animate-spin-slow anim-8s">
        <div className="rounded-full shadow-lg transform -translate-x-5">
          <Image
            className="h-10 w-10 rounded-full animate-rotate-img anim-8s"
            src="./facebook_icon.svg"
            alt="facebook_icon"
            width="42"
            height="42"
          />
        </div>
        <div className="rounded-full shadow-lg transform translate-x-5 ">
          <Image
            className="h-10 w-10 rounded-full animate-rotate-img anim-8s"
            src="./instagram_icon.svg"
            alt="instagram_icon"
            width="42"
            height="42"
          />
        </div>
      </div>

      {/* Outer Ring */}
      <div className="hw-outer flex justify-between items-center absolute border border-gray-800 rounded-full animate-spin-slow">

        <div className="flex justify-between items-center h-full w-full">
          <div className="rounded-full shadow-lg transform translate-x-9 translate-y-40">
            <Image
              className="h-10 w-10 rounded-full animate-rotate-img"
              src="./linkedin_icon.svg"
              alt="linkedin_icon"
              width="42"
              height="42"
            />
          </div>
          <div className="rounded-full transform -translate-x-9 -translate-y-40">
            <Image
              className="h-10 w-10 rounded-full animate-rotate-img"
              src="./youtube_icon.svg"
              alt="youtube_icon"
              width="42"
              height="42"
            />
          </div>
        </div>

        <div className="absolute flex justify-between items-center h-full w-full">
          <div className="rounded-full  transform translate-x-9 -translate-y-40">
            <Image
              className="h-10 w-10 rounded-full animate-rotate-img"
              src="./tiktok_icon.svg"
              alt="tiktok_icon"
              width="42"
              height="42"
            />
          </div>
          <div className="rounded-full shadow-lg transform -translate-x-9 translate-y-40">
            <Image
              className="h-10 w-10 rounded-full animate-rotate-img"
              src="./x_social_icon.svg"
              alt="x_social_icon"
              width="42"
              height="42"
            />
          </div>
        </div>

      </div>
    </>
  )
}

export default HeroAnimation