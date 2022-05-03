import { Hero, LandingPageLayout } from "features/landing-page";

import type { NextPageWithLayout } from "utils/common-types";

const Home: NextPageWithLayout = () => {
  return (
    <>
      <Hero />
    </>
  );
};

Home.getLayout = (page) => <LandingPageLayout>{page}</LandingPageLayout>;

export default Home;
