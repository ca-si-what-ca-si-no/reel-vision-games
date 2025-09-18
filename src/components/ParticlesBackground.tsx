import { useCallback, useEffect, useMemo } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { Container, Engine } from "@tsparticles/engine";

const ParticlesBackground = () => {
  const particlesLoaded = useCallback(async (container: Container | undefined) => {
    console.log(container);
  }, []);

  useEffect(() => {
    initParticlesEngine(async (engine: Engine) => {
      await loadSlim(engine);
    });
  }, []);

  const options = useMemo(
    () => ({
      background: {
        color: {
          value: "transparent",
        },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "repulse",
          },
        },
        modes: {
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: ["#8B5CF6", "#A855F7", "#C084FC", "#DDD6FE", "#EDE9FE"],
        },
        links: {
          color: "#8B5CF6",
          distance: 150,
          enable: true,
          opacity: 0.3,
          width: 1,
        },
        move: {
          enable: true,
          speed: 1,
        },
        number: {
          density: {
            enable: true,
          },
          value: 80,
        },
        opacity: {
          value: 0.5,
          animation: {
            enable: true,
            speed: 1,
          },
        },
        shape: {
          type: "circle",
        },
        size: {
          value: 3,
          animation: {
            enable: true,
            speed: 2,
          },
        },
      },
      detectRetina: true,
    }),
    []
  );

  return (
    <Particles
      id="tsparticles"
      particlesLoaded={particlesLoaded}
      options={options}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -2,
      }}
    />
  );
};

export default ParticlesBackground;