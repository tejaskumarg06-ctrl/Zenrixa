import { useEffect, useRef } from "react";

export default function ScrollAnimationCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const currentFrameRef = useRef<number>(0);

  const totalFrames = 360;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext("2d");
    if (!context) return;

    // Preload all 360 image frames from both folders.
    // import.meta.env.BASE_URL resolves to '/' in dev and '/Zenrixa/' on GitHub Pages.
    const base = import.meta.env.BASE_URL;
    const images: HTMLImageElement[] = [];
    for (let i = 1; i <= totalFrames; i++) {
      const img = new Image();
      if (i <= 120) {
        img.src = `${base}ezgif-887de5c5dce9aa4d-jpg/ezgif-frame-${i.toString().padStart(3, '0')}.jpg`;
      } else {
        const idx = i - 120;
        img.src = `${base}ezgif-1124c15541a78832-jpg/ezgif-frame-${idx.toString().padStart(3, '0')}.jpg`;
      }
      images.push(img);
    }
    imagesRef.current = images;

    const resizeAndDraw = (img: HTMLImageElement) => {
      if (!img || !img.complete) return;

      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = window.innerWidth + "px";
      canvas.style.height = window.innerHeight + "px";

      context.scale(dpr, dpr);
      context.imageSmoothingEnabled = true;
      context.imageSmoothingQuality = "high";

      const canvasWidth = window.innerWidth;
      const canvasHeight = window.innerHeight;

      // Crop 6% off the edges to reliably hide corner watermarks
      const cropX = img.width * 0.06;
      const cropY = img.height * 0.06;
      const sWidth = img.width - cropX * 2;
      const sHeight = img.height - cropY * 2;

      const scale = Math.max(canvasWidth / sWidth, canvasHeight / sHeight);
      const dWidth = sWidth * scale;
      const dHeight = sHeight * scale;

      const dx = (canvasWidth - dWidth) / 2;
      const dy = (canvasHeight - dHeight) / 2;

      context.clearRect(0, 0, canvasWidth, canvasHeight);
      context.drawImage(
        img,
        cropX,
        cropY,
        sWidth,
        sHeight,
        dx,
        dy,
        dWidth,
        dHeight
      );
    };

    images[0].onload = () => {
      resizeAndDraw(images[0]);
    };

    const handleResize = () => {
      const img = imagesRef.current[currentFrameRef.current];
      if (img && img.complete) {
        resizeAndDraw(img);
      }
    };

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const scrollDistance = document.documentElement.scrollHeight - window.innerHeight;
      
      let scrollFraction = 0;
      if (scrollDistance > 0) {
        scrollFraction = scrollTop / scrollDistance;
      }
      
      scrollFraction = Math.max(0, Math.min(1, scrollFraction));

      const frameIndex = Math.min(
        totalFrames - 1,
        Math.floor(scrollFraction * totalFrames)
      );

      if (frameIndex !== currentFrameRef.current) {
        currentFrameRef.current = frameIndex;
        requestAnimationFrame(() => {
          const img = imagesRef.current[frameIndex];
          if (img && img.complete) {
            resizeAndDraw(img);
          }
        });
      }
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <canvas
        ref={canvasRef}
        className="w-full h-full object-cover"
      />
    </div>
  );
}
