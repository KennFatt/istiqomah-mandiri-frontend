import { LandingPageLayout } from "features/landing-page";
import type { NextPageWithLayout } from "utils/common-types";

const BeritaPage: NextPageWithLayout = () => null;

BeritaPage.getLayout = (page) => <LandingPageLayout>{page}</LandingPageLayout>;

export default BeritaPage;
