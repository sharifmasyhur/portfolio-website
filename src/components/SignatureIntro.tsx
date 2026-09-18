import { useEffect, useRef, useState } from "react";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

const SESSION_KEY = "safin-intro-seen";

// These two numbers describe the actual asset (public/assets/signature/signature-intro.gif):
// 71 stored frames at 20ms, with the last two source frames merged into one
// longer hold -- total real playback is 1460ms. If that GIF is ever re-encoded
// at a different rate, this constant must be updated to match, since an <img>
// tag gives us no "animation ended" event to hook into.
const GIF_DURATION_MS = 1460;
const HOLD_MS = 300; // brief pause on the finished signature before transitioning out
const FADE_MS = 450; // crossfade into the homepage

type Phase = "playing" | "holding" | "exiting" | "done";

interface SignatureIntroProps {
  onComplete?: () => void;
}

export function SignatureIntro({ onComplete }: SignatureIntroProps) {
  const reducedMotion = usePrefersReducedMotion();

  // Decide once, synchronously, whether to show the intro at all -- avoids
  // a flash of the overlay on repeat visits within the same browser session.
  const [shouldRender] = useState(() => {
    if (typeof window === "undefined") return false;
    return sessionStorage.getItem(SESSION_KEY) !== "true";
  });

  const [phase, setPhase] = useState<Phase>(shouldRender ? "playing" : "done");

  // All pending timers live in one place so a manual skip can cancel every
  // scheduled transition, not just override the current phase -- otherwise
  // the natural (un-cancelled) timers would still fire later and could flip
  // the overlay back to visible after it was already skipped away.
  const timers = useRef<number[]>([]);
  const finished = useRef(false);

  const clearAllTimers = () => {
    timers.current.forEach((id) => window.clearTimeout(id));
    timers.current = [];
  };

  const finish = () => {
    if (finished.current) return;
    finished.current = true;
    clearAllTimers();
    setPhase("done");
    onComplete?.();
  };

  useEffect(() => {
    if (!shouldRender) return;
    sessionStorage.setItem(SESSION_KEY, "true");

    // Reduced motion: skip the drawing animation, show the static result
    // briefly, then fade -- still a short personal moment, no motion beyond opacity.
    const playMs = reducedMotion ? 500 : GIF_DURATION_MS;

    timers.current.push(
      window.setTimeout(() => setPhase("holding"), playMs),
      window.setTimeout(() => setPhase("exiting"), playMs + HOLD_MS),
      window.setTimeout(finish, playMs + HOLD_MS + FADE_MS)
    );

    return clearAllTimers;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [shouldRender, reducedMotion]);

  // Let the person skip early via click or any keypress. Bound at the window
  // level rather than on the overlay div itself, since a non-interactive
  // element only receives keydown when focused -- this way it works
  // regardless of where focus happens to be.
  useEffect(() => {
    if (phase !== "playing" && phase !== "holding") return;

    const skip = () => {
      clearAllTimers();
      setPhase("exiting");
      timers.current.push(window.setTimeout(finish, FADE_MS));
    };

    window.addEventListener("click", skip);
    window.addEventListener("keydown", skip);
    return () => {
      window.removeEventListener("click", skip);
      window.removeEventListener("keydown", skip);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phase]);

  if (phase === "done") return null;

  return (
    <div
      aria-hidden="true"
      className={`fixed inset-0 z-50 flex items-center justify-center bg-paper transition-opacity ease-editorial ${
        phase === "exiting" ? "opacity-0" : "opacity-100"
      }`}
      style={{ transitionDuration: `${FADE_MS}ms` }}
    >
      {reducedMotion ? (
        <img
          src="/assets/signature/signature-static.png"
          alt=""
          width={320}
          height={160}
          className="w-[220px] md:w-[320px] h-auto"
        />
      ) : (
        <img
          src="/assets/signature/signature-intro.gif"
          alt=""
          width={600}
          height={300}
          className="w-[220px] md:w-[320px] h-auto"
        />
      )}
    </div>
  );
}
