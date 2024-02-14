/* eslint-disable react/prop-types */
import { useEffect } from "react";
import "./Splash.scss";
import gsap from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { useNavigate } from "react-router-dom";

const Svg1 = ({ className }) => (
  <svg
    className={className}
    width="100px"
    height="100px"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M5.79 1.574h3.866c.14 0 .252.11.252.246v5.186a.25.25 0 01-.252.246H6.344c-.975 0-1.766.77-1.766 1.72v1.162a.25.25 0 01-.253.243H1.867a.25.25 0 01-.253-.246V6.177a.25.25 0 01.252-.246H7.98c.418 0 .757-.33.757-.737a.747.747 0 00-.757-.738H5.537V1.82a.25.25 0 01.253-.246zm5.632 2.592V1.82c0-.95-.79-1.72-1.766-1.72H5.79c-.976 0-1.767.77-1.767 1.72v2.636H1.867C.89 4.456.1 5.226.1 6.176v3.955c0 .95.79 1.72 1.766 1.72h2.46c.085 0 .17-.006.252-.017v2.346c0 .95.79 1.72 1.766 1.72h3.866c.976 0 1.767-.77 1.767-1.72v-2.636h2.156c.976 0 1.767-.77 1.767-1.72V5.868c0-.95-.79-1.72-1.767-1.72h-2.458c-.086 0-.17.005-.253.017zm-5.33 5.974V8.994a.25.25 0 01.252-.246h3.312c.976 0 1.766-.77 1.766-1.72V5.866a.25.25 0 01.253-.243h2.458c.14 0 .253.11.253.246v3.954a.25.25 0 01-.252.246H8.02a.747.747 0 00-.757.737c0 .408.339.738.757.738h2.442v2.636a.25.25 0 01-.253.246H6.344a.25.25 0 01-.252-.246v-4.04z"
      fill="#27374D"
    />
  </svg>
);

const Svg2 = ({ className }) => (
  <svg
    className={className}
    width="100px"
    height="100px"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M5.46619 2.00322C5.46619 1.44916 5.91535 1 6.46941 1H9.47907C10.0331 1 10.4823 1.44915 10.4823 2.00322V5.01288C10.4823 5.09948 10.4713 5.18352 10.4507 5.26368C10.4713 5.34385 10.4823 5.42789 10.4823 5.51449V8.02254H11.7363V6.0161C11.7363 5.60055 12.0732 5.26368 12.4887 5.26368C12.9043 5.26368 13.2411 5.60055 13.2411 6.0161V8.02254H15.2476C15.6631 8.02254 16 8.35941 16 8.77495C16 9.1905 15.6631 9.52737 15.2476 9.52737H13.2113C13.0634 11.3518 12.3727 12.8078 11.2779 13.8375C10.045 14.9972 8.37374 15.5467 6.59481 15.5467C4.97058 15.5467 3.43674 15.0891 2.24224 14.1255C1.03896 13.1549 0.236443 11.7155 0.0125343 9.86728C-0.115917 8.80699 0.763545 8.02254 1.70412 8.02254H1.95492V5.51449C1.95492 4.96043 2.40408 4.51127 2.95814 4.51127H5.46619V2.00322ZM5.46619 6.0161H3.45975V8.02254H5.46619V6.0161ZM1.70412 9.52737C1.63196 9.52737 1.57447 9.55683 1.54064 9.59191C1.51066 9.62299 1.50235 9.65252 1.50644 9.68629C1.68777 11.1831 2.31696 12.2524 3.18705 12.9543C4.06593 13.6632 5.24713 14.0419 6.59481 14.0419C8.071 14.0419 9.34667 13.5882 10.2469 12.7414C11.0115 12.0222 11.5598 10.9686 11.7007 9.52737H1.70412ZM6.97102 8.02254H8.97746V6.0161H6.97102V8.02254ZM6.97102 4.51127H8.97746V2.50483H6.97102V4.51127Z"
      fill="#27374D"
    />
  </svg>
);

const Svg3 = ({ className }) => (
  <svg
    className={className}
    width="100px"
    height="100px"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M0 1.75C0 0.783501 0.783502 0 1.75 0H14.25C15.2165 0 16 0.783502 16 1.75V3.75C16 4.16421 15.6642 4.5 15.25 4.5C14.8358 4.5 14.5 4.16421 14.5 3.75V1.75C14.5 1.61193 14.3881 1.5 14.25 1.5H1.75C1.61193 1.5 1.5 1.61193 1.5 1.75V14.25C1.5 14.3881 1.61193 14.5 1.75 14.5H15.25C15.6642 14.5 16 14.8358 16 15.25C16 15.6642 15.6642 16 15.25 16H1.75C0.783501 16 0 15.2165 0 14.25V1.75ZM8.25 5.75C8.66421 5.75 9 6.08579 9 6.5V10.5C9 11.5048 8.72399 12.2584 8.15514 12.7324C7.61223 13.1848 6.95384 13.25 6.5 13.25C6.08579 13.25 5.75 12.9142 5.75 12.5C5.75 12.0858 6.08579 11.75 6.5 11.75C6.84617 11.75 7.06277 11.6902 7.19486 11.5801C7.301 11.4916 7.5 11.2452 7.5 10.5V6.5C7.5 6.08579 7.83578 5.75 8.25 5.75ZM11.2757 6.58011C11.6944 6.08164 12.3507 5.75 13.25 5.75C14.0849 5.75 14.7148 6.03567 15.1394 6.48481C15.4239 6.78583 15.4105 7.26052 15.1095 7.54505C14.8085 7.82958 14.3338 7.81621 14.0493 7.51519C13.9394 7.39898 13.7204 7.25 13.25 7.25C12.7493 7.25 12.5306 7.41836 12.4243 7.54489C12.2934 7.70065 12.25 7.896 12.25 8C12.25 8.104 12.2934 8.29935 12.4243 8.45511C12.5306 8.58164 12.7493 8.75 13.25 8.75C13.3257 8.75 13.3988 8.76121 13.4676 8.78207C14.1307 8.87646 14.6319 9.17251 14.9743 9.58011C15.3684 10.0493 15.5 10.604 15.5 11C15.5 11.396 15.3684 11.9507 14.9743 12.4199C14.5556 12.9184 13.8993 13.25 13 13.25C12.1651 13.25 11.5352 12.9643 11.1106 12.5152C10.8261 12.2142 10.8395 11.7395 11.1405 11.4549C11.4415 11.1704 11.9162 11.1838 12.2007 11.4848C12.3106 11.601 12.5296 11.75 13 11.75C13.5007 11.75 13.7194 11.5816 13.8257 11.4551C13.9566 11.2993 14 11.104 14 11C14 10.896 13.9566 10.7007 13.8257 10.5449C13.7194 10.4184 13.5007 10.25 13 10.25C12.9243 10.25 12.8512 10.2388 12.7824 10.2179C12.1193 10.1235 11.6181 9.82749 11.2757 9.41989C10.8816 8.95065 10.75 8.396 10.75 8C10.75 7.604 10.8816 7.04935 11.2757 6.58011Z"
      fill="#27374D"
    />
  </svg>
);

const Svg4 = ({ className }) => (
  <svg
    className={className}
    width="100px"
    height="100px"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7.00017 5.5C5.61936 5.5 4.5 6.61936 4.5 8.00017C4.5 9.38097 5.61936 10.5003 7.00017 10.5003C7.71226 10.5003 8.3538 10.2036 8.81009 9.725C9.09591 9.4252 9.57065 9.41386 9.87045 9.69968C10.1703 9.9855 10.1816 10.4602 9.89577 10.76C9.16817 11.5232 8.13926 12.0003 7.00017 12.0003C4.79094 12.0003 3 10.2094 3 8.00017C3 5.79094 4.79094 4 7.00017 4C8.13445 4 9.15952 4.47309 9.88658 5.23069C10.1734 5.52954 10.1636 6.00432 9.86477 6.29112C9.56591 6.57793 9.09114 6.56817 8.80433 6.26931C8.3484 5.79424 7.70928 5.5 7.00017 5.5Z"
      fill="#27374D"
    />
    <path
      d="M6.58638 0.102166C6.8199 -0.0340553 7.10867 -0.0340553 7.34219 0.102166L12.0565 2.85217C12.4143 3.06088 12.5351 3.52011 12.3264 3.8779C12.1177 4.23569 11.6585 4.35654 11.3007 4.14783L6.96429 1.61828L1.5 4.80578V11.1942L6.96429 14.3817L11.3007 11.8522C11.6585 11.6435 12.1177 11.7643 12.3264 12.1221C12.5351 12.4799 12.4143 12.9391 12.0565 13.1478L7.34219 15.8978C7.10867 16.0341 6.8199 16.0341 6.58638 15.8978L0.372097 12.2728C0.141683 12.1384 0 11.8918 0 11.625V4.375C0 4.10825 0.141683 3.86157 0.372097 3.72717L6.58638 0.102166Z"
      fill="#27374D"
    />
    <path
      d="M12.1799 5.25C12.456 5.25 12.6799 5.47386 12.6799 5.75V10.25C12.6799 10.5261 12.456 10.75 12.1799 10.75C11.9038 10.75 11.6799 10.5261 11.6799 10.25V5.75C11.6799 5.47386 11.9038 5.25 12.1799 5.25Z"
      fill="#27374D"
    />
    <path
      d="M14.3201 5.25C14.5962 5.25 14.8201 5.47386 14.8201 5.75V10.25C14.8201 10.5261 14.5962 10.75 14.3201 10.75C14.044 10.75 13.8201 10.5261 13.8201 10.25V5.75C13.8201 5.47386 14.044 5.25 14.3201 5.25Z"
      fill="#27374D"
    />
    <path
      d="M10.5 6.92993C10.5 6.65379 10.7239 6.42993 11 6.42993H15.5C15.7761 6.42993 16 6.65379 16 6.92993C16 7.20607 15.7761 7.42993 15.5 7.42993H11C10.7239 7.42993 10.5 7.20607 10.5 6.92993Z"
      fill="#27374D"
    />
    <path
      d="M10.5 9.07007C10.5 8.79393 10.7239 8.57007 11 8.57007H15.5C15.7761 8.57007 16 8.79393 16 9.07007C16 9.34621 15.7761 9.57007 15.5 9.57007H11C10.7239 9.57007 10.5 9.34621 10.5 9.07007Z"
      fill="#27374D"
    />
  </svg>
);

const svgs = [Svg1, Svg2, Svg3, Svg4];

gsap.registerPlugin(MotionPathPlugin);

const Splash = () => {
  const navigate = useNavigate("");

  useEffect(() => {
    const splashScreen = document.querySelector(".splash-screen");
    const svgElements = document.querySelectorAll(".svg-class-name");
    const revealColor = "#A6E3E9";

    const tl = gsap.timeline({
      defaults: {
        ease: "power2.inOut",
      },
      onComplete: () => {
        gsap.to(splashScreen, {
          duration: 1,
          scaleX: 50,
          scaleY: 50,
          backgroundColor: revealColor,
          ease: "power2.inOut",
          onComplete: () => {
            navigate("/landing");
          },
        });
      },
    });

    const startPoint = { x: "50%", y: "50%" };

    svgElements.forEach((el, index) => {
      const duration = 0.7 + index * 0.1;
      const delay = index * 0.1;

      gsap.set(el, {
        xPercent: -50,
        yPercent: -50,
        x: startPoint.x,
        y: startPoint.y,
      });

      tl.fromTo(
        el,
        {
          scale: 0,
          opacity: 0,
        },
        {
          duration: duration,
          scale: 1.5,
          opacity: 1,
          rotation: 0,
          delay: delay,
          motionPath: {
            path: [
              { x: 100, y: 0 },
              { x: 0, y: 100 },
            ],
          },
        },
        "start"
      );
    });

    return () => {
      tl.kill();
    };
  }, []);

  const svgComponents = svgs.map((SvgComponent, index) => (
    <SvgComponent
      key={index}
      className="svg-class-name"
      style={{
        position: "absolute",
        transform: "translate(-50%, -50%)",
        left: "50%",
        top: "50%",
      }}
    />
  ));

  return (
    <div className="splash">
      <div className="splash-screen">{svgComponents}</div>
    </div>
  );
};

export default Splash;
