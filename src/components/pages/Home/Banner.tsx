import Image from 'next/image';
import './vars.css';
import './style.css';
import group0 from '@/assets/banner/group0.svg';
import group1 from '@/assets/banner/group1.svg';
import group2 from '@/assets/banner/group2.svg';
import group3 from '@/assets/banner/group3.svg';
import group4 from '@/assets/banner/group4.svg';
import group5 from '@/assets/banner/group5.svg';
import group6 from '@/assets/banner/group6.svg';
import group7 from '@/assets/banner/group7.svg';
import play0 from '@/assets/banner/play0.svg';
import image190 from '@/assets/banner/slide2.png';
import arrow0 from '@/assets/banner/arrow0.svg';
import iconRight1 from '@/assets/banner/iconly-light-outline-arrow-right-20.svg';
import iconRight2 from '@/assets/banner/iconly-light-outline-arrow-right-21.svg';
import image0 from '@/assets/banner/image0.svg';

const Banner = () => {
  return (
    <>
      <div className="hero">
        <div className="hero-container">
          <div className="gradient"></div>
          <Image
            className="bottom-overlay"
            src={image0}
            alt="bottom overlay"
            width={500}
            height={300}
          />
          <div className="bg-logo-container">
            <div className="bg-logo-layer-1">
              <div className="layer-1">
                <Image
                  className="group"
                  src={group0}
                  alt="Group 0"
                  width={200}
                  height={200}
                />
                <Image
                  className="group2"
                  src={group1}
                  alt="Group 1"
                  width={200}
                  height={200}
                />
              </div>
            </div>
            <div className="bg-logo-layer-2">
              <div className="layer-2">
                <Image
                  className="group3"
                  src={group2}
                  alt="Group 2"
                  width={200}
                  height={200}
                />
                <Image
                  className="group4"
                  src={group3}
                  alt="Group 3"
                  width={200}
                  height={200}
                />
              </div>
            </div>
          </div>
          <div className="title-container">
            <div className="title-slogan">
              আপনি খুঁজছেন যে কোনো গৃহ সজ্জা উপাদান এখানে উপলব্ধ
            </div>
            <div className="title">
              আপনার বাড়ির সাজসজ্জার জন্য উৎকৃষ্ট পণ্য
            </div>
            <div className="button">
              <div className="button2">
                <div className="div3">অর্ডার করুন</div>
              </div>
              <div className="button3">
                <div className="icon">
                  <div className="ellipse-1"></div>
                  <Image
                    className="play"
                    src={play0}
                    alt="Play"
                    width={30}
                    height={30}
                  />
                </div>
                <div className="div4">ভিডিও দেখুন</div>
              </div>
            </div>
          </div>
          <div className="group-1321314307">
            <div className="ellipse-4"></div>
            <div className="group-5">
              <div className="group-6">
                <div className="ellipse-5"></div>
                <div className="group-1000006198">
                  <Image
                    className="image-19 opacity-85"
                    src={image190}
                    alt="Image 190"
                    width={1000}
                    height={1000}
                  />
                </div>
              </div>
              <div className="frame-1261155596">
                <div className="frame-10">
                  <div className="div5">আধুনিক শৈলী</div>
                </div>
              </div>
              <div className="frame-1261155597">
                <div className="frame-10">
                  <div className="div5">পরিষ্কার শৈলী</div>
                </div>
              </div>
              <div className="frame-1261155598">
                <div className="frame-10">
                  <div className="div5">অনন্য শৈলী</div>
                </div>
              </div>
            </div>
          </div>
          <div className="group-13213143592">
            <div className="group-13213143562">
              <div className="layer-13">
                <Image
                  className="group5"
                  src={group4}
                  alt="Group 4"
                  width={200}
                  height={200}
                />
                <Image
                  className="group6"
                  src={group5}
                  alt="Group 5"
                  width={200}
                  height={200}
                />
              </div>
            </div>
          </div>
          <Image
            className="group7"
            src={group6}
            alt="Group 6"
            width={200}
            height={200}
          />
          <Image
            className="group8"
            src={group7}
            alt="Group 7"
            width={200}
            height={200}
          />
        </div>
        <div className="shoe-name">
          <div className="group-13">
            <div className="nike-air-max-iii">
              <div className="div6">পেপারকাট লাইট বক্স</div>
            </div>
          </div>
          <Image
            className="iconly-light-outline-arrow-right-2"
            src={iconRight1}
            alt="Arrow Right 1"
            width={30}
            height={30}
          />
          <Image
            className="iconly-light-outline-arrow-right-22"
            src={iconRight2}
            alt="Arrow Right 22"
            width={30}
            height={30}
          />
        </div>
        <div className="scroll">
          <Image
            className="arrow"
            src={arrow0}
            alt="Arrow"
            width={30}
            height={30}
          />
          <div className="scroll2">Scroll</div>
        </div>
      </div>
    </>
  );
};

export default Banner;
