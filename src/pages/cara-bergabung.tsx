import { LandingPageLayout } from "features/landing-page";
import type { NextPageWithLayout } from "utils/common-types";

const CaraBergabungPage: NextPageWithLayout = () => null;

CaraBergabungPage.getLayout = (page) => (
  <LandingPageLayout>{page}</LandingPageLayout>
);

export default CaraBergabungPage;
