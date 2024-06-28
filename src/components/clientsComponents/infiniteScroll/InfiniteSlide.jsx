import React, { useEffect, useState } from "react";
import {
  ClientLogo,
  Container,
  ContainerWrapper,
  ScrollContainer1,
  ScrollContainer2,
} from "./style";
import WB from "../../../assets/images/clientLogos/client-01.png";
import Netflix from "../../../assets/images/clientLogos/client-02.png";
import Aviacom from "../../../assets/images/clientLogos/client-03.png";
import Neon from "../../../assets/images/clientLogos/client-04.png";
import AppleTV from "../../../assets/images/clientLogos/client-05.png";
import A24 from "../../../assets/images/clientLogos/client-06.png";
import Universal from "../../../assets/images/clientLogos/client-07.png";
import Sony from "../../../assets/images/clientLogos/client-08.png";
import PrimeVideo from "../../../assets/images/clientLogos/client-09.png";
import HBO from "../../../assets/images/clientLogos/client-10.png";
import Hulu from "../../../assets/images/clientLogos/client-11.png";
import Ubisoft from "../../../assets/images/clientLogos/client-12.png";

const InfiniteSlide = () => {
  const [largeScreen, setLargeScreen] = useState(window.innerWidth >= 770);

  useEffect(() => {
    const handleResize = () => {
      const isLarge = window.innerWidth >= 770;
      setLargeScreen(isLarge);
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initial check

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const logos1 = [
    WB,
    Netflix,
    Aviacom,
    Neon,
    AppleTV,
    A24,
    WB,
    Netflix,
    Aviacom,
    Neon,
    AppleTV,
    A24,
    WB,
    Netflix,
    Aviacom,
    Neon,
    AppleTV,
    A24,
    WB,
    Netflix,
    Aviacom,
    Neon,
    AppleTV,
    A24,
  ];

  const logos2 = [
    Universal,
    Sony,
    PrimeVideo,
    HBO,
    Hulu,
    Ubisoft,
    Universal,
    Sony,
    PrimeVideo,
    HBO,
    Hulu,
    Ubisoft,
    Universal,
    Sony,
    PrimeVideo,
    HBO,
    Hulu,
    Ubisoft,
    Universal,
    Sony,
    PrimeVideo,
    HBO,
    Hulu,
    Ubisoft,
  ];

  const logosSmallScreen1 = [WB, Universal, Aviacom, PrimeVideo, AppleTV, HBO];
  const logosSmallScreen2 = [Netflix, Neon, Sony, A24, Hulu, Ubisoft];

  return (
    <ContainerWrapper>
      <Container>
        <ScrollContainer1>
          {(largeScreen ? logos1 : logosSmallScreen1).map((logo, index) => (
            <ClientLogo src={logo} key={index} />
          ))}
        </ScrollContainer1>
      </Container>
      <Container>
        <ScrollContainer2>
          {(largeScreen ? logos2 : logosSmallScreen2).map((logo, index) => (
            <ClientLogo src={logo} key={index} />
          ))}
        </ScrollContainer2>
      </Container>
    </ContainerWrapper>
  );
};

export default InfiniteSlide;
