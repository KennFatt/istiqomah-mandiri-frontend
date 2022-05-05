import { Hero, InfaqFinder, LandingPageLayout } from "features/landing-page";

import type { NextPageWithLayout } from "utils/common-types";

const Home: NextPageWithLayout = () => {
  return (
    <>
      <Hero />
      <InfaqFinder />
    </>
  );
};

Home.getLayout = (page) => <LandingPageLayout>{page}</LandingPageLayout>;

export default Home;
