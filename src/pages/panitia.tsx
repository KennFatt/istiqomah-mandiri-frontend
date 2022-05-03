import { LandingPageLayout } from "features/landing-page";
import type { NextPageWithLayout } from "utils/common-types";

const PanitiaPage: NextPageWithLayout = () => null;

PanitiaPage.getLayout = (page) => <LandingPageLayout>{page}</LandingPageLayout>;

export default PanitiaPage;
