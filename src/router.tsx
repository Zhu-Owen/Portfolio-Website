import { QueryClient } from "@tanstack/react-query";
import { createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

export const getRouter = () => {
  const queryClient = new QueryClient();

  const router = createRouter({
    routeTree,
    context: { queryClient },
    // This single-page portfolio uses native in-page anchors. Keep router
    // scroll restoration off so hydration cannot fight user scrolling.
    scrollRestoration: () => false,
    defaultHashScrollIntoView: false,
    defaultPreloadStaleTime: 0,
  });

  return router;
};
