'use client';

import Image from 'next/image';
import styles from './page.module.scss';
import { easeInOut, motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function Home() {
  const svgDiv = useRef();
  const { scrollYProgress } = useScroll({
    target: svgDiv,
    offset: ['start end', 'end end'],
  });
  const length = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const length2 = useTransform(scrollYProgress, [0.25, 1.25], [0, 1]);
  const length3 = useTransform(scrollYProgress, [0.5, 1.5], [0, 1]);
  const length4 = useTransform(scrollYProgress, [0.5, 1], [0, 1]);
  /*   const svgVariants = {
    hidden: { rotate: -180 },
    visible: {
      rotate: 0,
      transition: { duration: 1 },
    },
  }; */

  /*   const pathVariants = {
    pathLength: 1,
    hidden: { pathLength: 0 },
    visible: {
      transition: {
        duration: 2,
        ease: 'easeInOut',
      },
    }, 
  }; */

  return (
    <main className={styles.main}>
      <div className={styles.heroContainer}>
        <div className={styles.mainHero}>
          <h1 className={styles.mainTitle}>The AI for creating your legacy</h1>
          <p className={styles.mainDescription}>
            Holocruxe is meant for those who dare, <br /> for those who live,
            and for those who share. <br /> Get ready to leave your mark in the
            world forever. <br />
            Get ready to leave your legacy.
          </p>
          <button className={styles.mainBtn}>Sign Up</button>
        </div>
        <h1 className={styles.hero}>
          {/* <div>YOUR</div> */}
          <div>YOUR LIFE</div>
          <div>YOUR STORY</div>
          <div>YOUR LEGACY</div>
        </h1>
        <h1 className={styles.hero2}>
          {/* <div>YOUR</div> */}
          <div>YOUR LIFE</div>
          <div>YOUR STORY</div>
          <div>YOUR LEGACY</div>
        </h1>
      </div>
      {/*         <div className={styles.svgContainer}>
          <motion.svg
            // width="986"
            height="100"
            viewBox="0 0 986 938"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <motion.path
              d="M697.441 131.86C774.292 176.558 834.239 245.374 867.98 327.627C901.72 409.88 907.367 500.971 884.043 586.761C860.719 672.551 809.73 748.244 738.988 802.092C668.246 855.94 581.708 884.931 492.805 884.567C403.901 884.202 317.604 854.502 247.306 800.077C177.008 745.651 126.641 669.543 104.021 583.564C81.4016 497.585 87.7946 406.544 122.208 324.571C156.622 242.597 217.131 174.275 294.345 130.207"
              stroke="#F7F9F9"
              strokeWidth="75"
              strokeLinecap="round"
              pathLength={length}
            />
            <motion.circle cx="493" cy="109" r="48" fill="#59C1BD" />
          </motion.svg>
        </div> */}

      <div className={styles.svgScroll} ref={svgDiv}>
        <motion.svg
          // width="135"
          // height="788"
          viewBox="0 0 135 788"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={styles.svgIndex}
        >
          <motion.path
            d="M93.0018 11.5331C99.7235 15.4427 104.967 21.4617 107.918 28.656C110.869 35.8502 111.363 43.8174 109.323 51.3211C107.283 58.8247 102.823 65.4452 96.6357 70.155C90.4482 74.8648 82.8792 77.4005 75.1033 77.3686M75.1033 77.3686C67.3273 77.3368 59.7793 74.7391 53.6307 69.9787C47.4821 65.2183 43.0767 58.5616 41.0983 51.0414C39.1199 43.5213 39.6791 35.5584 42.689 28.3886C45.699 21.2188 50.9915 15.243 57.745 11.3886M75.1033 77.3686L75.1033 243.5"
            stroke="url(#paint0_linear_14_44)"
            strokeWidth="10"
            strokeLinecap="round"
            pathLength={length}
          />
          <circle cx="75.1204" cy="9.53368" r="4.19832" fill="#59C1BD" />
          <motion.path
            d="M92.2327 245.533C98.9545 249.443 104.198 255.462 107.149 262.656C110.1 269.85 110.594 277.817 108.554 285.321C106.514 292.825 102.054 299.445 95.8666 304.155C89.6792 308.865 82.1102 311.4 74.3342 311.369M74.3342 311.369C66.5583 311.337 59.0103 308.739 52.8617 303.979C46.7131 299.218 42.3077 292.562 40.3293 285.041C38.3508 277.521 38.91 269.558 41.92 262.389C44.93 255.219 50.2224 249.243 56.976 245.389M74.3342 311.369L74.3342 477.5"
            stroke="url(#paint1_linear_14_44)"
            strokeWidth="10"
            strokeLinecap="round"
            pathLength={length2}
          />
          <circle cx="74.3514" cy="243.534" r="4.19832" fill="#59C1BD" />
          <motion.path
            d="M92.2327 479.533C98.9545 483.443 104.198 489.462 107.149 496.656C110.1 503.85 110.594 511.817 108.554 519.321C106.514 526.825 102.054 533.445 95.8666 538.155C89.6792 542.865 82.1102 545.4 74.3342 545.369M74.3342 545.369C66.5583 545.337 59.0103 542.739 52.8617 537.979C46.7131 533.218 42.3077 526.562 40.3293 519.041C38.3508 511.521 38.91 503.558 41.92 496.389C44.93 489.219 50.2224 483.243 56.976 479.389M74.3342 545.369L74.3342 711.5"
            stroke="url(#paint2_linear_14_44)"
            strokeWidth="10"
            strokeLinecap="round"
            pathLength={length3}
          />
          <circle cx="74.3514" cy="477.534" r="4.19832" fill="#59C1BD" />
          <motion.path
            d="M93.0017 713.533C99.7234 717.443 104.967 723.462 107.918 730.656C110.869 737.85 111.363 745.817 109.323 753.321C107.283 760.825 102.823 767.445 96.6356 772.155C90.4481 776.865 82.8791 779.4 75.1032 779.369C67.3272 779.337 59.7792 776.739 53.6306 771.979C47.482 767.218 43.0766 760.562 41.0982 753.041C39.1198 745.521 39.679 737.558 42.6889 730.389C45.6989 723.219 50.9914 717.243 57.7449 713.389"
            stroke="#F7F9F9"
            strokeWidth="10"
            strokeLinecap="round"
            pathLength={length4}
          />
          <circle cx="75.1202" cy="711.534" r="4.19832" fill="#59C1BD" />
          <defs>
            <linearGradient
              id="paint0_linear_14_44"
              x1="75"
              y1="243"
              x2="75"
              y2="143.5"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#59C1BD" />
              <stop offset="1" stopColor="#F7F9F9" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_14_44"
              x1="74.231"
              y1="477"
              x2="74.231"
              y2="377.5"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#59C1BD" />
              <stop offset="1" stopColor="#F7F9F9" />
            </linearGradient>
            <linearGradient
              id="paint2_linear_14_44"
              x1="74.231"
              y1="711"
              x2="74.231"
              y2="611.5"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#59C1BD" />
              <stop offset="1" stopColor="#F7F9F9" />
            </linearGradient>
          </defs>
        </motion.svg>

        <section className={styles.steps}>
          <h3>Live</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
            optio deserunt dolore quas fugiat. Saepe, rem harum. Quas veritatis
            et nihil quo dicta quam, ullam cum nemo animi impedit repellat.
          </p>
        </section>
        <section className={styles.steps}>
          <h3>Experience</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
            optio deserunt dolore quas fugiat. Saepe, rem harum. Quas veritatis
            et nihil quo dicta quam, ullam cum nemo animi impedit repellat.
          </p>
        </section>
        <section className={styles.steps}>
          <h3>Sign Up</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
            optio deserunt dolore quas fugiat. Saepe, rem harum. Quas veritatis
            et nihil quo dicta quam, ullam cum nemo animi impedit repellat.
          </p>
        </section>
        <section className={styles.steps}>
          <h3>Your legacy</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
            optio deserunt dolore quas fugiat. Saepe, rem harum. Quas veritatis
            et nihil quo dicta quam, ullam cum nemo animi impedit repellat.
          </p>
        </section>
      </div>
    </main>
  );
}
