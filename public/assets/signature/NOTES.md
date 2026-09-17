# Signature asset notes

- `signature-original.gif` — untouched, exactly as provided. Kept for reference /
  in case a different timing decision is wanted later. Not referenced by the app.
- `signature-intro.gif` — the file actually used by the loading sequence (wired up
  in Stage 2). Re-encoded frame *timing* only:
  - Same 73 captured frames, pixel-for-pixel identical (verified programmatically).
  - Two consecutive frames near the end were already pixel-duplicates in the
    source (a natural "hold" after the pen lifts) and got merged into one
    longer-duration frame by the encoder — this is a file-size optimization,
    not a content change; on-screen playback is indistinguishable from the
    original at any given moment in time.
  - Per-frame delay set to 20ms (2 centiseconds — GIF stores delay in 10ms
    units, so this is an exact value with no rounding ambiguity).
  - Total playback: ~1.46s (vs. 5.84s original at 80ms/frame).
  - File size: ~15.6KB (vs. ~143KB original) — smaller despite no visual
    change, because removing an unnecessary full-frame-redraw flag let the
    GIF encoder delta-compress between frames instead of storing the full
    600x300 canvas on every frame.
