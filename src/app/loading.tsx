import { FC, memo } from "react";
import React from "react";

const Loading: FC = () => {
  return (
    <div className={"w-full h-screen flex justify-center items-center mx-auto"}>
      <svg
        className={"scale-30 md:scale-20 lg:scale-20 w-full h-full"}
        fill="none"
        overflow="hidden"
        viewBox="0 0 512 512"
        xmlns="http://www.w3.org/2000/svg"
      >
        <use
          href="#cube"
          opacity="0.3"
          strokeWidth="1"
          style={{
            scale: "1",
          }}
          x="128"
          y="320"
        >
          <animate
            attributeName="stroke"
            dur="6s"
            repeatCount="indefinite"
            values="#FF9AA2;#FFB7B2;#FFDAC1;#E2F0CB;#B5EAD7;#C7CEEA;#FF9AA2"
          />
        </use>

        <use
          href="#cube"
          strokeWidth="2"
          style={{
            scale: "1",
          }}
          x="128"
          y="128"
        >
          <animate
            attributeName="stroke"
            dur="6s"
            repeatCount="indefinite"
            values="#FF9AA2;#FFB7B2;#FFDAC1;#E2F0CB;#B5EAD7;#C7CEEA;#FF9AA2"
          />
        </use>

        <defs>
          <g id="cube">
            <use
              fill="url(#stars)"
              href="#cube_outline"
              strokeLinejoin="round"
              strokeWidth="16"
            />
            <use href="#cube_base" strokeWidth=".5" />
            <use
              href="#cube_outline"
              stroke="#141417"
              strokeLinejoin="round"
              strokeWidth="6"
            />
          </g>

          <g id="cube_outline">
            <path>
              <animate
                attributeName="d"
                calcMode="spline"
                dur="1.5s"
                keySplines="0.8 0.2 0.6 0.9;
						0.8 0.2 0.6 0.9;
						0.8 0.2 0.6 0.9"
                keyTimes="0;0.5;0.5;1"
                repeatCount="indefinite"
                values="M10 64 L128 0 L246 64 L246 192 L128 256 L10 192Z;
					M40 20 L216 20 L216 108 L216 236 L40 236 L40 172Z;
					M216 20 L40 20 L40 108 L40 236 L216 236 L216 172Z;
					M246 64 L128 0 L10 64 L10 192 L128 256 L246 192Z"
              />
            </path>
          </g>

          <g id="cube_base">
            <path fill="#fff1">
              <animate
                attributeName="d"
                calcMode="spline"
                dur="1.5s"
                keySplines="0.8 0.2 0.6 0.9;
						0.8 0.2 0.6 0.9"
                keyTimes="0;0.5;1"
                repeatCount="indefinite"
                values="M10 64 L128 0 L246 64 L128 128Z;
					M40 20 L216 20 L216 108 L40 108Z;
					M128 0 L246 64 L128 128 L10 64Z"
              />
            </path>
            <path>
              <animate
                attributeName="d"
                calcMode="spline"
                dur="1.5s"
                keySplines="0.8 0.2 0.6 0.9;
						0.8 0.2 0.6 0.9;
						0.8 0.2 0.6 0.9"
                keyTimes="0;0.5;0.5;1"
                repeatCount="indefinite"
                values="M10 64 L128 128 L128 256 L10 192Z;
					M40 20 L40 108 L40 236 L40 172Z;
					M216 20 L216 108 L216 236 L216 172Z;
					M246 64 L128 128 L128 256 L246 192Z"
              />
              <animate
                attributeName="fill"
                dur="1.5s"
                keyTimes="0;0.5;0.5;1"
                repeatCount="indefinite"
                values="#fff0;#fff0;#fff2;#fff2"
              />
            </path>
            <path fill="#407080">
              <animate
                attributeName="d"
                calcMode="spline"
                dur="1.5s"
                keySplines="0.8 0.2 0.6 0.9;
						0.8 0.2 0.6 0.9"
                keyTimes="0;0.5;1"
                repeatCount="indefinite"
                values="M246 64 L128 128 L128 256 L246 192Z;
					M216 108 L40 108 L40 236 L216 236Z;
					M128 128 L10 64 L10 192 L128 256Z"
              />
              <animate
                attributeName="fill"
                dur="1.5s"
                keyTimes="0;0.5;1"
                repeatCount="indefinite"
                values="#fff2;#fff1;#fff0"
              />
            </path>
          </g>
          <linearGradient gradientTransform="rotate(90)" id="fade">
            <stop offset="0" stopColor="#14141700" />
            <stop offset="0.25" stopColor="#141417ff" />
          </linearGradient>
          <linearGradient gradientTransform="rotate(90)" id="sky">
            <stop offset="0.5" stopColor="#141417" />
            <stop offset="1" stopColor="#40354a" />
          </linearGradient>

          <pattern
            height="50%"
            id="stars"
            patternContentUnits="userSpaceOnUse"
            patternUnits="userSpaceOnUse"
            width="50%"
            x="0"
            y="0"
          >
            <rect fill="url(#sky)" height="256" width="256" />
            <use fill="white" href="#star01" x="24" y="32" />
            <use
              fill="#ad9dcb"
              href="#star01"
              transform="rotate(90 80 112)"
              x="64"
              y="96"
            />
            <use fill="#ad9dcb" href="#star01" x="224" y="102" />
            <use
              fill="#E0E8EA"
              href="#star01"
              transform="rotate(90 80 112)"
              x="192"
              y="112"
            />
            <use fill="#ad9dcb" href="#star02" x="16" y="64" />
            <use fill="#E0E8EA" href="#star03" x="96" y="16" />
            <use fill="white" href="#star04" x="64" y="64" />
            <use fill="#ad9dcb" href="#star04" x="8" y="16" />
            <use fill="#E0E8EA" href="#star04" x="110" y="96" />
            <use fill="#ad9dcb" href="#star02" x="160" y="24" />
            <use fill="#E0E8EA" href="#star03" x="196" y="60" />
            <use fill="white" href="#star04" x="64" y="212" />
            <use fill="#ad9dcb" href="#star04" x="218" y="216" />
            <use fill="#E0E8EA" href="#star03" x="228" y="220" />
            <use fill="#ad9dcb" href="#star02" x="140" y="128" />
            <use fill="#E0E8EA" href="#star03" x="24" y="140" />
            <use fill="white" href="#star04" x="95" y="160" />
            <use fill="#ad9dcb" href="#star04" x="180" y="128" />
            <use fill="#E0E8EA" href="#star03" x="200" y="136" />
            <use href="#star10" stroke="#E0E8EA" x="120" y="120" />
            <use href="#star11" stroke="#ad9dcb" x="48" y="64" />
          </pattern>
          <path id="star01" transform="scale(0.5)">
            <animate
              attributeName="d"
              calcMode="spline"
              dur="3s"
              keySplines="0.8 0.2 0.6 0.9; 0.8 0.2 0.6 0.9"
              keyTimes="0;0.5;1"
              repeatCount="indefinite"
              values="M16 0 Q16 16 24 16 Q16 16 16 32 Q16 16 8 16 Q16 16 16 0Z;
					M16 8 Q16 16 32 16 Q16 16 16 24 Q16 16 0 16 Q16 16 16 8Z;
					M16 0 Q16 16 24 16 Q16 16 16 32 Q16 16 8 16 Q16 16 16 0Z"
            />
          </path>
          <circle id="star02">
            <animate
              attributeName="r"
              calcMode="spline"
              dur="3s"
              keySplines="0.8 0.2 0.6 0.9; 0.8 0.2 0.6 0.9"
              keyTimes="0;0.5;1"
              repeatCount="indefinite"
              values="0;2;0"
            />
          </circle>
          <circle id="star03">
            <animate
              attributeName="r"
              calcMode="spline"
              dur="6s"
              keySplines="0.8 0.2 0.6 0.9; 0.8 0.2 0.6 0.9"
              keyTimes="0;0.5;1"
              repeatCount="indefinite"
              values="3;1;3"
            />
          </circle>
          <circle id="star04" r="1" />

          <path id="star10" strokeWidth="2">
            <animate
              attributeName="d"
              dur="5s"
              keySplines="0 0.4 1 0.2; 0 0.4 1 0.2; 0 0.4 1 0.2"
              keyTimes="0;0.90;0.97;1"
              repeatCount="indefinite"
              values="M64 0 L64 0Z; M64 0 L64 0Z; M48 12 L0 48Z; M0 48 L0 48Z"
            />
            <animate
              attributeName="opacity"
              dur="5s"
              keyTimes="0;0.90;0.97;1"
              repeatCount="indefinite"
              values="1; 1; 0.6; 0"
            />
          </path>
          <path id="star11" strokeWidth="3">
            <animate
              attributeName="d"
              begin="3s"
              dur="6s"
              keySplines="0 0.4 1 0.2; 0 0.4 1 0.2; 0 0.4 1 0.2"
              keyTimes="0;0.90;0.95;1"
              repeatCount="indefinite"
              values="M64 0 L64 0Z; M64 0 L64 0Z; M48 12 L0 48Z; M0 48 L0 48Z"
            />
            <animate
              attributeName="opacity"
              begin="3s"
              dur="6s"
              keyTimes="0;0.90;0.95;1"
              repeatCount="indefinite"
              values="1; 1; 0.6; 0"
            />
          </path>
        </defs>
      </svg>
    </div>
  );
};

export default memo(Loading);
