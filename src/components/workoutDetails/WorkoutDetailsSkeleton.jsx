import React from "react";

export default function WorkoutDetailsSkeleton() {
  return (
    <div
      className="container mx-auto px-4 sm:px-6 lg:px-8 rounded-2xl border border-[#1f232d] bg-[#12141a] p-6 shadow-xl"
      aria-hidden="true"
    >
      <div className="flex flex-col gap-6 sm:flex-row">
        {/* Left Side: Media Image Placeholder */}
        <div className="relative aspect-square w-full max-w-none sm:max-w-[320px] shrink-0 overflow-hidden rounded-xl bg-[#1c1f26]">
          <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.5s_infinite] bg-linear-to-r from-transparent via-[#282c37] to-transparent" />
        </div>

        {/* Right Side: Content Details */}
        <div className="flex flex-1 flex-col gap-4">
          {/* Title & Subtitle */}
          <div className="space-y-2">
            <div className="relative h-7 w-1/2 overflow-hidden rounded-md bg-[#1c1f26]">
              <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.5s_infinite] bg-linear-to-r from-transparent via-[#282c37] to-transparent" />
            </div>
            <div className="relative h-4 w-11/12 overflow-hidden rounded-md bg-[#1c1f26]">
              <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.5s_infinite] bg-linear-to-r from-transparent via-[#282c37] to-transparent" />
            </div>
          </div>

          {/* Details Table Container */}
          <div className="my-1 flex flex-col gap-3 rounded-xl bg-[#171a21] p-4">
            {[
              { labelW: "w-1/4", valueW: "w-1/3" },
              { labelW: "w-1/4", valueW: "w-1/5" },
              { labelW: "w-1/5", valueW: "w-1/6" },
              { labelW: "w-1/5", valueW: "w-1/6" },
              { labelW: "w-1/4", valueW: "w-1/5" },
              { labelW: "w-1/5", valueW: "w-1/6" },
            ].map((row, idx) => (
              <div key={idx} className="flex items-center justify-between">
                <div
                  className={`relative h-3 ${row.labelW} overflow-hidden rounded bg-[#222630]`}
                >
                  <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.5s_infinite] bg-linear-to-r from-transparent via-[#303545] to-transparent" />
                </div>
                <div
                  className={`relative h-3 ${row.valueW} overflow-hidden rounded bg-[#222630]`}
                >
                  <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.5s_infinite] bg-linear-to-r from-transparent via-[#303545] to-transparent" />
                </div>
              </div>
            ))}
          </div>

          {/* Instructions Block */}
          <div className="space-y-2">
            <div className="relative h-3 w-1/3 overflow-hidden rounded bg-[#1c1f26]">
              <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.5s_infinite] bg-linear-to-r from-transparent via-[#282c37] to-transparent" />
            </div>
            <div className="relative h-2.5 w-full overflow-hidden rounded bg-[#1c1f26]">
              <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.5s_infinite] bg-linear-to-r from-transparent via-[#282c37] to-transparent" />
            </div>
            <div className="relative h-2.5 w-4/5 overflow-hidden rounded bg-[#1c1f26]">
              <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.5s_infinite] bg-linear-to-r from-transparent via-[#282c37] to-transparent" />
            </div>
          </div>

          {/* Action Buttons Skeleton */}
          <div className="mt-auto flex gap-3 pt-2">
            <div className="relative h-10 flex-[1.2] overflow-hidden rounded-lg bg-[#1c1f26]">
              <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.5s_infinite] bg-linear-to-r from-transparent via-[#282c37] to-transparent" />
            </div>
            <div className="relative h-10 flex-1 overflow-hidden rounded-lg bg-[#1c1f26]">
              <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.5s_infinite] bg-linear-to-r from-transparent via-[#282c37] to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
