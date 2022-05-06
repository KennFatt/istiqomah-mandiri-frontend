import {
  Hero,
  InfaqFinder,
  LandingPageLayout,
  About,
  RecentNews,
} from "features/landing-page";

import type { NextPageWithLayout } from "utils/common-types";

const Home: NextPageWithLayout = () => {
  return (
    <>
      <Hero />
      <InfaqFinder />
      <About />
      <RecentNews />
    </>
  );
};

Home.getLayout = (page) => <LandingPageLayout>{page}</LandingPageLayout>;

export default Home;
