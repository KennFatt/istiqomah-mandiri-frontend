import { LandingPageLayout } from "features/landing-page";
import type { NextPageWithLayout } from "utils/common-types";

const Home: NextPageWithLayout = () => null;

Home.getLayout = (page) => <LandingPageLayout>{page}</LandingPageLayout>;

export default Home;
