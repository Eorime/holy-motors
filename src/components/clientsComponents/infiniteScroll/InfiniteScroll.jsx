import React from "react";
import {
  ClientLogo,
  Container,
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

const InfiniteScroll = () => {
  return (
    <Container>
      <ScrollContainer1>
        <ClientLogo src={WB} />
        <ClientLogo src={Netflix} />
        <ClientLogo src={Aviacom} />
        <ClientLogo src={Neon} />
        <ClientLogo src={AppleTV} />
        <ClientLogo src={A24} />
      </ScrollContainer1>
      <ScrollContainer2>
        <ClientLogo src={Universal} />
        <ClientLogo src={Sony} />
        <ClientLogo src={PrimeVideo} />
        <ClientLogo src={HBO} />
        <ClientLogo src={Hulu} />
        <ClientLogo src={Ubisoft} />
      </ScrollContainer2>
    </Container>
  );
};

export default InfiniteScroll;
