"use client"

export default function FixedVideoBackground() {
  return (
    <div className="fixed inset-0 -z-50 w-full h-full overflow-hidden">
      <div className="absolute inset-0 bg-black/20 z-10" />
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/videoback2.mp4" type="video/mp4" />
      </video>
    </div>
  )
}

