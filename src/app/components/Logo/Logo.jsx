const Logo = ({width, height, color ,classname}) => {
    return (
      <svg
      className={classname}
        width={width}
        height={height}
        viewBox="0 0 64 64"
        fill={color}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M38.359 0V17.3943C38.1826 17.3403 38.0062 17.2821 37.8318 17.2218H37.8174L37.3333 17.039L37.3026 17.0265C37.1549 16.9704 37.0072 16.9122 36.8615 16.8519L36.7159 16.7917C36.56 16.7252 36.4041 16.6587 36.2503 16.5839C36.0964 16.5091 35.9795 16.4592 35.84 16.3927C35.6349 16.2909 35.4174 16.1849 35.2103 16.0686C35.0749 15.9979 34.9395 15.9231 34.8 15.8462C34.6605 15.7694 34.5436 15.6987 34.4185 15.6218C34.2933 15.5449 34.2297 15.5075 34.1354 15.4473C33.9179 15.3122 33.7046 15.1709 33.4933 15.0317C33.4072 14.9749 33.321 14.9146 33.2349 14.8509C33.0297 14.7034 32.8246 14.5496 32.6195 14.3917C32.5354 14.3273 32.4533 14.2608 32.3713 14.1839C32.1662 14.0197 31.961 13.8494 31.7662 13.6706C31.6821 13.5979 31.6 13.5231 31.5179 13.4483L31.4482 13.3818C31.2779 13.226 31.1138 13.066 30.9518 12.9018L30.7467 12.694C30.5559 12.4862 30.3672 12.2909 30.1846 12.0831C30.1285 12.0208 30.0752 11.9584 30.0246 11.8961C29.9446 11.8068 29.8687 11.7153 29.7949 11.6239L29.7456 11.5657C29.6533 11.4535 29.5631 11.3392 29.4728 11.2229L29.3641 11.0795C29.2718 10.961 29.1836 10.8405 29.0974 10.72C29.09 10.7127 29.0838 10.7043 29.079 10.6951C28.9709 10.5482 28.8663 10.3986 28.7651 10.2462C28.6605 10.0925 28.56 9.9387 28.4615 9.78078C28.3815 9.6561 28.3036 9.52935 28.2277 9.4026C28.219 9.39018 28.2114 9.37696 28.2051 9.36312L28.119 9.21766C28.0431 9.08675 27.9672 8.95584 27.8954 8.82286C27.8236 8.68987 27.7333 8.52364 27.6554 8.37403C27.6431 8.34909 27.6287 8.32416 27.6185 8.29922C27.5385 8.14338 27.4605 7.98545 27.3867 7.82753C27.3128 7.66961 27.2287 7.48883 27.1549 7.31636C27.081 7.1439 27.0092 6.97558 26.9497 6.80312C26.8841 6.63481 26.8185 6.46649 26.7569 6.2961L26.7446 6.26078C26.681 6.09039 26.6215 5.91792 26.5662 5.74545C26.5108 5.57299 26.4492 5.38597 26.3959 5.20312C25.8966 3.51499 25.6423 1.76227 25.641 0L0 0V64H25.641V46.6057C25.8174 46.6597 25.9938 46.7179 26.1682 46.7782H26.1826C26.3467 46.8343 26.5087 46.8945 26.6708 46.9548L26.7015 46.9673C26.8492 47.0234 26.9969 47.0816 27.1426 47.1418L27.2882 47.2021C27.4441 47.2686 27.6 47.3371 27.7538 47.4099C27.9077 47.4826 28.0246 47.5345 28.1641 47.601C28.3692 47.7049 28.5867 47.8088 28.7938 47.9252C28.9292 47.9958 29.0646 48.0707 29.2041 48.1475L29.5856 48.3719L29.8687 48.5465C30.0862 48.6836 30.2995 48.8249 30.5108 48.9725C30.5969 49.0293 30.6831 49.0895 30.7692 49.1532H30.7795C30.9846 49.3008 31.1897 49.4504 31.3826 49.6042L31.6308 49.8119C31.8359 49.9782 32.041 50.1486 32.2359 50.3252L32.4841 50.5475L32.5538 50.614C32.722 50.7699 32.8882 50.9299 33.0503 51.094C33.12 51.1626 33.1877 51.2332 33.2554 51.3018C33.4462 51.5096 33.6349 51.7049 33.8174 51.9127L33.9795 52.0997C34.0574 52.1891 34.1333 52.2805 34.2072 52.3719L34.2564 52.4301C34.3487 52.5423 34.439 52.6566 34.5292 52.773L34.638 52.9164C34.7303 53.0348 34.8185 53.1553 34.9046 53.2758C34.912 53.2831 34.9183 53.2915 34.9231 53.3008C35.0311 53.449 35.1357 53.5986 35.2369 53.7496C35.3415 53.9034 35.4421 54.0571 35.5405 54.2151C35.6205 54.3397 35.6985 54.4665 35.7744 54.5933C35.7831 54.6057 35.7906 54.6189 35.7969 54.6327L35.8831 54.7782C35.959 54.9091 36.0349 55.04 36.1067 55.173C36.1785 55.306 36.2687 55.4701 36.3467 55.6218C36.359 55.6468 36.3733 55.6717 36.3836 55.6966C36.4636 55.8525 36.5415 56.0104 36.6154 56.1683C36.6892 56.3262 36.7733 56.507 36.8472 56.6795C36.921 56.8519 36.9949 57.0203 37.0523 57.1927C37.12 57.361 37.1836 57.5294 37.2451 57.6997C37.2507 57.7109 37.2549 57.7228 37.2574 57.7351C37.321 57.9055 37.3805 58.0779 37.4359 58.2504C37.4913 58.4229 37.5528 58.6099 37.6062 58.7927C38.1052 60.4823 38.3588 62.2364 38.359 64H64V0H38.359ZM58.8718 58.8052H42.9108C42.1292 55.3343 40.572 52.0913 38.359 49.3257C38.2277 49.1616 38.0944 48.9974 37.9487 48.8374C37.8031 48.6774 37.6759 48.5153 37.5385 48.3595C37.2718 48.0603 36.9969 47.7652 36.7179 47.4805C36.5867 47.3475 36.4554 47.2166 36.32 47.0878L36.2708 47.0379C36.1559 46.9278 36.039 46.8197 35.9221 46.7117L35.8113 46.6099C35.7272 46.533 35.641 46.4561 35.5549 46.3834C35.3333 46.1756 35.1056 45.9906 34.8759 45.8036C34.7631 45.7122 34.6503 45.6208 34.5354 45.5314L34.3713 45.4026C34.2769 45.3299 34.1826 45.2571 34.0882 45.1948C33.9938 45.1325 33.9446 45.0847 33.8708 45.0327C33.7969 44.9808 33.6656 44.8831 33.561 44.8104L33.3764 44.6795C33.2472 44.5901 33.1159 44.5029 32.9846 44.4156L32.88 44.347C32.7672 44.2722 32.6544 44.1995 32.5395 44.1392L32.2851 43.9813C32.1251 43.8836 31.9651 43.7881 31.8031 43.6945L31.3928 43.4681L31.2574 43.3932C31.118 43.3184 30.9785 43.2436 30.8369 43.173L30.759 43.1314C30.3487 42.9195 29.9282 42.72 29.4974 42.533L29.2492 42.427L29.0974 42.3647L28.8021 42.2442C28.1908 42.0017 27.5679 41.7856 26.9333 41.5958C26.8349 41.5647 26.7282 41.5356 26.6338 41.5086C26.3036 41.413 25.9672 41.3257 25.6308 41.2468L25.321 41.1761L25.0092 41.1096C24.599 41.0237 24.1785 40.9489 23.7477 40.8852C23.5672 40.8589 23.3846 40.8339 23.2 40.8104C22.6421 40.7439 22.08 40.694 21.5097 40.667H21.28C21.0215 40.6566 20.7631 40.6525 20.5026 40.6504H10.2564V45.8452H20.5128V58.8052H5.12821V5.19481H21.0892C21.8708 8.66571 23.428 11.9087 25.641 14.6743C25.7723 14.8384 25.9056 15.0026 26.0513 15.1626C26.1969 15.3226 26.3241 15.4847 26.4615 15.6405C26.7282 15.9418 27.001 16.2348 27.2821 16.5195C27.4133 16.6525 27.5446 16.7834 27.68 16.9122L27.7292 16.9621C27.8441 17.0722 27.961 17.1803 28.0779 17.2883L28.1887 17.3901C28.2728 17.467 28.359 17.5439 28.4451 17.6166C28.6667 17.8244 28.8923 18.0093 29.1241 18.1964C29.2369 18.2878 29.3497 18.3792 29.4646 18.4686C29.5179 18.5143 29.5733 18.5579 29.6287 18.5974C29.7231 18.6701 29.8174 18.7429 29.9118 18.8052C30.0062 18.8675 30.0554 18.9153 30.1292 18.9673C30.2031 19.0192 30.3344 19.1169 30.439 19.1896L30.6236 19.3205C30.7528 19.4099 30.8841 19.4971 31.0154 19.5844L31.12 19.653C31.2328 19.7278 31.3456 19.8005 31.4605 19.8608L31.7149 20.0187C31.8728 20.1164 32.0349 20.2119 32.1969 20.3055L32.6072 20.5319L32.7426 20.6068C32.882 20.6816 33.0215 20.7564 33.1631 20.827C33.6021 21.0556 34.0492 21.2675 34.5026 21.467L34.7508 21.573L34.9026 21.6353L35.1979 21.7558C35.8092 21.9983 36.4321 22.2144 37.0667 22.4042C37.1651 22.4353 37.2718 22.4644 37.3662 22.4914C37.6957 22.587 38.0301 22.6743 38.3692 22.7532L38.679 22.8239L38.9908 22.8904C39.401 22.9777 39.8215 23.0525 40.2523 23.1148C40.4328 23.1425 40.6154 23.1674 40.8 23.1896C41.3566 23.2589 41.92 23.3067 42.4903 23.333H42.72C42.9785 23.333 43.2369 23.3475 43.4974 23.3496H53.7538V18.1548H43.4872V5.19481H58.8718V58.8052Z"
          fill={color}
        />
      </svg>
    );
}

export default Logo