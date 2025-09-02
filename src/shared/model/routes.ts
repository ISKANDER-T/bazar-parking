import "react-router-dom";

export const ROUTES = {
  HOME: "/",
  LOGIN: "/login",
} as const;

export type PathParams = {
  // [ROUTES.PERSONS]: {
  //   departmentId: string;
  // };
  // [ROUTES.PERSON]: {
  //   personId: string;
  // };
};

declare module "react-router-dom" {
  interface Register {
    params: PathParams;
  }
}
