"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import { renderToString } from "react-dom/server";

// Simplified Icon interface for 2D positioning (x, y) and ID
interface Icon {
  x: number;
  y: number;
  id: number;
}

interface IconCloudProps {
  icons?: React.ReactNode[];
  images?: string[];
  iconSize?: number; // Optional: Size of the icon (default 40)
  padding?: number; // Optional: Padding around icons (default 20)
}

// Helper to get dimensions of the parent element
const useParentSize = (ref: React.RefObject<HTMLElement>) => {
  const [size, setSize] = useState({ width: 0, height: 0 });

  const updateSize = useCallback(() => {
    if (ref.current) {
      setSize({
        width: ref.current.clientWidth,
        height: ref.current.clientHeight,
      });
    }
  }, [ref]);

  useEffect(() => {
    updateSize(); // Initial size set

    if (
      ref.current &&
      typeof window !== "undefined" &&
      "ResizeObserver" in window
    ) {
      const observer = new ResizeObserver(updateSize);
      observer.observe(ref.current);
      return () => observer.disconnect();
    } else if (typeof window !== "undefined") {
      window.addEventListener("resize", updateSize);
      return () => window.removeEventListener("resize", updateSize);
    }
    // Fallback for SSR/no ResizeObserver
    return undefined;
  }, [ref, updateSize]);

  return size;
};

// Function to generate positions in a 2D grid/pseudo-random layout
const generate2DPositions = (
  numIcons: number,
  canvasWidth: number,
  canvasHeight: number,
  iconSize: number,
  padding: number
): Icon[] => {
  if (canvasWidth === 0 || canvasHeight === 0) return [];
  const positions: Icon[] = [];
  const iconSpacing = iconSize + padding;

  // Calculate how many columns and rows can fit
  const numColumns = Math.floor(canvasWidth / iconSpacing);
  const numRows = Math.ceil(numIcons / numColumns);

  // Center the grid within the canvas
  const gridWidth = Math.min(numColumns, numIcons) * iconSpacing;
  const startX = (canvasWidth - gridWidth) / 2 + iconSize / 2;
  const startY = (canvasHeight - numRows * iconSpacing) / 2 + iconSize / 2;

  for (let i = 0; i < numIcons; i++) {
    const col = i % numColumns;
    const row = Math.floor(i / numColumns);

    if (row >= numRows) break;

    positions.push({
      x: startX + col * iconSpacing,
      y: startY + row * iconSpacing,
      id: i,
    });
  }
  return positions;
};

export function IconCloud({
  icons,
  images,
  iconSize = 40,
  padding = 20,
}: IconCloudProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { width: parentWidth, height: parentHeight } =
    useParentSize(containerRef);

  const [iconPositions, setIconPositions] = useState<Icon[]>([]);
  const [offset, setOffset] = useState({ x: 0, y: 0 }); // 2D offset for dragging

  const [isDragging, setIsDragging] = useState(false);
  const [lastMousePos, setLastMousePos] = useState({ x: 0, y: 0 });

  const iconCanvasesRef = useRef<HTMLCanvasElement[]>([]);
  const imagesLoadedRef = useRef<boolean[]>([]);
  const animationFrameRef = useRef<number>(0);

  // 1. Create icon canvases
  useEffect(() => {
    const items = icons || images || [];
    imagesLoadedRef.current = new Array(items.length).fill(false);

    const newIconCanvases = items.map((item, index) => {
      const offscreen = document.createElement("canvas");
      offscreen.width = iconSize;
      offscreen.height = iconSize;
      const offCtx = offscreen.getContext("2d");

      if (offCtx) {
        if (images) {
          // Handle image URLs
          const img = new Image();
          img.crossOrigin = "anonymous";
          img.src = items[index] as string;
          img.onload = () => {
            offCtx.clearRect(0, 0, offscreen.width, offscreen.height);
            // Draw the image, applying a circular clip if desired (removed for simplicity)
            offCtx.drawImage(img, 0, 0, iconSize, iconSize);
            imagesLoadedRef.current[index] = true;
          };
        } else {
          // Handle SVG icons
          // Adjust scale based on desired iconSize (assuming SVG output is normalized)
          const scaleFactor = iconSize / 100; // Example: scale to 40px if base SVG is 100
          offCtx.scale(scaleFactor, scaleFactor);
          const svgString = renderToString(item as React.ReactElement);
          const img = new Image();
          img.src = "data:image/svg+xml;base64," + btoa(svgString);
          img.onload = () => {
            offCtx.clearRect(0, 0, offscreen.width, offscreen.height);
            // The drawing size needs to be adjusted back if the offCtx.scale was used
            offCtx.drawImage(
              img,
              0,
              0,
              iconSize / scaleFactor,
              iconSize / scaleFactor
            );
            imagesLoadedRef.current[index] = true;
          };
        }
      }
      return offscreen;
    });

    iconCanvasesRef.current = newIconCanvases;
  }, [icons, images, iconSize]);

  // 2. Generate initial 2D rectangular icon positions when content or size changes
  useEffect(() => {
    const items = icons || images || [];
    const numIcons = items.length || 20;

    const newIcons = generate2DPositions(
      numIcons,
      parentWidth,
      parentHeight,
      iconSize,
      padding
    );
    setIconPositions(newIcons);
    setOffset({ x: 0, y: 0 }); // Reset offset on resize
  }, [icons, images, parentWidth, parentHeight, iconSize, padding]);

  // 3. Handle 2D Mouse Dragging
  const handleMouseDown = (e: React.MouseEvent<HTMLCanvasElement>) => {
    setIsDragging(true);
    setLastMousePos({ x: e.clientX, y: e.clientY });
    // Prevent default touch/mouse behavior on the canvas
    e.preventDefault();
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (isDragging) {
      const deltaX = e.clientX - lastMousePos.x;
      const deltaY = e.clientY - lastMousePos.y;

      setOffset((prev) => ({
        x: prev.x + deltaX,
        y: prev.y + deltaY,
      }));

      setLastMousePos({ x: e.clientX, y: e.clientY });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // 4. Animation and 2D Rendering
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    // Set canvas dimensions to parent's size
    canvas.width = parentWidth;
    canvas.height = parentHeight;

    // Only run animation loop if we have dimensions
    if (parentWidth === 0 || parentHeight === 0) return;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Simple friction for drag release (optional)
      if (!isDragging) {
        setOffset((prev) => ({
          x: prev.x * 0.95, // Apply friction
          y: prev.y * 0.95,
        }));
      }

      iconPositions.forEach((icon, index) => {
        // Apply 2D offset
        const screenX = icon.x + offset.x;
        const screenY = icon.y + offset.y;

        // Check if icon is within bounds before drawing
        if (
          screenX + iconSize / 2 > 0 &&
          screenX - iconSize / 2 < canvas.width &&
          screenY + iconSize / 2 > 0 &&
          screenY - iconSize / 2 < canvas.height
        ) {
          ctx.save();
          ctx.translate(screenX, screenY);
          ctx.globalAlpha = 1; // No opacity change

          if (icons || images) {
            // Only try to render icons/images if they exist and are loaded
            if (
              iconCanvasesRef.current[index] &&
              imagesLoadedRef.current[index]
            ) {
              ctx.drawImage(
                iconCanvasesRef.current[index],
                -iconSize / 2, // Draw offset from the center
                -iconSize / 2,
                iconSize,
                iconSize
              );
            }
          } else {
            // Show numbered circles if no icons/images are provided
            ctx.beginPath();
            ctx.arc(0, 0, iconSize / 2, 0, Math.PI * 2);
            ctx.fillStyle = "#4444ff";
            ctx.fill();
            ctx.fillStyle = "white";
            ctx.textAlign = "center";
            ctx.textBaseline = "middle";
            ctx.font = `${iconSize * 0.4}px Arial`;
            ctx.fillText(`${icon.id + 1}`, 0, 0);
          }

          ctx.restore();
        }
      });
      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [
    icons,
    images,
    iconPositions,
    isDragging,
    offset,
    parentWidth,
    parentHeight,
    iconSize,
  ]); // Dependencies updated for 2D

  // The wrapper div is crucial for useParentSize to work.
  return (
    <div
      ref={containerRef}
      style={{ width: "100%", height: "100%", position: "relative" }} // Take parent's shape
      className="rounded-lg overflow-hidden" // Keep styling, important for defining the space
    >
      <canvas
        ref={canvasRef}
        // Width/height are set in useEffect, but setting them here prevents initial flash
        width={parentWidth}
        height={parentHeight}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        aria-label="Interactive 2D Icon Grid"
        role="img"
        style={{ display: "block" }}
      />
    </div>
  );
}
