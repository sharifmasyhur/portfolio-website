# Signature asset notes

- `signature-original.gif` — untouched, exactly as provided (600x300, 73 frames,
  80ms/frame, ~5.84s, white background). Kept purely for reference. Not
  referenced by the app.
- `signature-intro.gif` — the file actually used by the loading sequence:
  - **Timing**: re-encoded to 20ms/frame (GIF stores delay in 10ms units, so
    this is an exact value with no rounding). Two consecutive frames near the
    end were already pixel-duplicates in the source (a natural "hold" after
    the pen lifts) and got merged into one longer-duration frame by the
    encoder — a file-size optimization, not a content change. Total
    playback: **~1.46s** (down from 5.84s). Verified frame-by-frame identical
    to the original at every point in time.
  - **Background**: mathematically recomposited from white onto the site's
    ivory token (`#FAF8F4`). The source is pure black ink (0,0,0) on pure
    white (255,255,255) with 32 anti-aliased gray levels between them, so
    each pixel's original alpha was recovered from its grayscale value and
    re-blended onto ivory instead of white: `new_pixel = ivory * (gray/255)`.
    This avoids the white halo/fringe that a naive "replace white with ivory"
    threshold swap would leave on anti-aliased stroke edges. Verified: every
    frame's corner pixels are exactly `(250,248,244)`, ink stays pure black
    everywhere ink exists, and a visual contact sheet at actual on-page
    display size (320px wide) confirmed no fringing and no change to stroke
    shape/weight/proportions across the full animation.
  - File size: ~15.6KB (vs. ~143KB original) — smaller despite no visual
    loss in the strokes, because removing an unneeded full-frame-redraw flag
    let the GIF encoder delta-compress the mostly-static background.
- `signature-static.png` — the final frame, ivory-composited, as a static
  fallback for `prefers-reduced-motion` (shown briefly with only a fade,
  no drawing animation).
