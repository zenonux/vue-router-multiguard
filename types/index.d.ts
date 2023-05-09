import type {
  Router,
  RouteLocationNormalized,
  NavigationGuard,
  NavigationGuardNext,
} from "vue-router";
interface CustomNavigationGuard {
  (
    router: Router,
    to: RouteLocationNormalized,
    from: RouteLocationNormalized,
    next: NavigationGuardNext
  ): void | NavigationGuardNext | Promise<NavigationGuardNext>;
}

export default function Multiguard(
  router: Router,
  guards: Array<CustomNavigationGuard>
): NavigationGuard;
