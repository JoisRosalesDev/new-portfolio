import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

let isRegistered = false;

export function registerGSAP(): boolean {
  if (typeof window === 'undefined') return false;
  if (!isRegistered) {
    gsap.registerPlugin(ScrollTrigger);
    isRegistered = true;
  }
  return true;
}

export function prefersReducedMotion(): boolean {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

export interface GSAPContextOptions {
  scope?: Element | string | null;
  onInit: (ctx: gsap.Context) => void;
}

/**
 * Creates a scoped GSAP animation context with reduced-motion awareness
 * and clean lifecycle teardown.
 */
export function createSafeAnimationContext(
  setupFn: (ctx: gsap.Context) => void,
  scope?: Element | null
): { revert: () => void } {
  if (!registerGSAP()) {
    return { revert: () => {} };
  }

  if (prefersReducedMotion()) {
    // If reduced motion is active, ensure elements are visible without tweening
    if (scope) {
      gsap.set(scope.querySelectorAll('[data-reveal]'), {
        opacity: 1,
        y: 0,
        x: 0,
        scale: 1,
        clearProps: 'all',
      });
    }
    return { revert: () => {} };
  }

  const ctx = gsap.context(() => {
    setupFn(ctx);
  }, scope || undefined);

  return {
    revert: () => {
      ctx.revert();
    },
  };
}

export { gsap, ScrollTrigger };
