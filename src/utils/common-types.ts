import type { NextPage } from "next";
import type { AppProps } from "next/app";
import type { ReactElement, ReactNode } from "react";

/**
 * Utility type to instantiate new React 18 Functional Component Props
 */
export interface BaseProps {
  children?: ReactNode;
}

/**
 * Custom type for pages that use additional Layout component.
 *
 * @see https://nextjs.org/docs/basic-features/layouts
 */
export type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

/**
 * Custom type to help Next's App component infer pages with additional Layout component.
 *
 * @see https://nextjs.org/docs/basic-features/layouts
 */
export type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};
