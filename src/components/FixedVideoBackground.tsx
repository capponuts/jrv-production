"use client"

export default function FixedVideoBackground() {
  return (
    <div className="fixed inset-0 -z-50 w-full h-full overflow-hidden bg-gray-900">
      <div className="absolute inset-0 bg-black/40 z-10" /> {/* Overlay sombre pour lisibilité */}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/video-hero.webm" type="video/webm" />
        <source src="/video-hero.mp4" type="video/mp4" />
      </video>
    </div>
  )
}

