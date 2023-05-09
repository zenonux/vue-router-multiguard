import type {
  Router,
  RouteLocationNormalized,
  NavigationGuardNext,
} from "vue-router";
interface CustonGuard {
  (
    router: Router,
    to: RouteLocationNormalized,
    from: RouteLocationNormalized,
    next: NavigationGuardNext
  ): NavigationGuardNext | Promise<NavigationGuardNext>;
}

export default function Multiguard(
  router: Router,
  guards: Array<CustonGuard>
): CustonGuard;
