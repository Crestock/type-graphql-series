import { MiddlewareFn } from "type-graphql";

import { MyContext } from "../../types/MyContext";

export const getAuthID: MiddlewareFn<MyContext> = async ({ context }, next) => {
  if (!context.req.session!.userId) {
    throw new Error("not authenticated");
  } else {
    return context.req.session!.userId;
  }
};
