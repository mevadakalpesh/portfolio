import {
  useEffect
} from "react";
import "./NewProjects.css";

const loadScript = (src) => {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = src;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error(`Script load error: ${src}`));
    document.body.appendChild(script);
  });
};


const NewProjects = () => {
  useEffect(() => {
    const initializeGrid = async () => {
      try {
        // Load scripts in order
        await loadScript('/js/imagesloaded.pkgd.min.js');
        await loadScript('/js/masonry.pkgd.min.js');
        await loadScript('/js/dynamics.min.js');
        await loadScript('/js/classie.js');
        await loadScript('/js/animOnScroll.js');
        await loadScript('/js/main.js');

        // Your initialization code
        function getRandomInt(min, max) {
          return Math.floor(Math.random() * (max - min + 1)) + min;
        }

        document.querySelectorAll('.isolayer').forEach(el => {
          new IsoGrid(el, {
            type: 'scrollable',
            transform: 'translateX(-15vw) translateY(275px) rotateX(45deg) rotateZ(45deg)',
            stackItemsAnimation: {
              properties: (pos) => ({
                translateZ: (pos + 1) * 50,
                rotateZ: getRandomInt(-3, 3),
              }),
              options: (pos, itemstotal) => ({
                type: dynamics.bezier,
                duration: 500,
                points: [
                  { x: 0, y: 0, cp: [{ x: 0.2, y: 1 }] },
                  { x: 1, y: 1, cp: [{ x: 0.3, y: 1 }] },
                ],
                // delay: (itemstotal - pos - 1) * 40
              }),
            },
            onGridLoaded: () => {
              classie.add(document.body, 'grid-loaded');
            },
          });
        });
      } catch (error) {
        console.error(error);
      }
    };

    initializeGrid();

    return () => {
      // Cleanup code if necessary
      // Remove any dynamically added scripts if needed
      const scripts = document.querySelectorAll('script[src^="/js/"]');
      scripts.forEach(script => document.body.removeChild(script));
    };
  }, []);

  
  return (
    <>
      <div className="demo-1">
			<div className="isolayer isolayer--scroll1 isolayer--shadow">
				<ul className="grid grid--effect-flip">
					<li className="grid__item">
						<a className="grid__link" href="https://dribbble.com/forefathers">
							<img className="grid__img layer" src="img/canvas.png" alt="Canvas Dummy" />
							<img className="grid__img layer" src="img/wireframe.png" alt="Wireframe Dummy" />
							<img className="grid__img layer" src="img/Dribbble1/1.jpg" alt="01" />
							<span className="grid__title">Forefathers</span>
						</a>
					</li>
					<li className="grid__item">
						<a className="grid__link" href="https://dribbble.com/JulienLavallee">
							<img className="grid__img layer" src="img/canvas.png" alt="Canvas Dummy" />
							<img className="grid__img layer" src="img/wireframe.png" alt="Wireframe Dummy" />
							<img className="grid__img layer" src="img/Dribbble1/2_1.jpg" alt="021" />
							<span className="grid__title">Julien Lavallee</span>
						</a>
					</li>
					<li className="grid__item">
						<a className="grid__link" href="https://dribbble.com/creativemints">
							<img className="grid__img layer" src="img/canvas.png" alt="Canvas Dummy" />
							<img className="grid__img layer" src="img/wireframe.png" alt="Wireframe Dummy" />
							<img className="grid__img layer" src="img/Dribbble1/3.jpg" alt="03" />
							<span className="grid__title">Mike | Creative Mints</span>
						</a>
					</li>
					<li className="grid__item">
						<a className="grid__link" href="https://dribbble.com/Radium">
							<img className="grid__img layer" src="img/canvas.png" alt="Canvas Dummy" />
							<img className="grid__img layer" src="img/wireframe.png" alt="Wireframe Dummy" />
							<img className="grid__img layer" src="img/Dribbble1/4_2.jpg" alt="042" />
							<span className="grid__title">Cosmin Capitanu</span>
						</a>
					</li>
					<li className="grid__item">
						<a className="grid__link" href="https://dribbble.com/forefathers">
							<img className="grid__img layer" src="img/canvas.png" alt="Canvas Dummy" />
							<img className="grid__img layer" src="img/wireframe.png" alt="Wireframe Dummy" />
							<img className="grid__img layer" src="img/Dribbble1/1_1.jpg" alt="011" />
							<span className="grid__title">Forefathers</span>
						</a>
					</li>
					<li className="grid__item">
						<a className="grid__link" href="https://dribbble.com/JulienLavallee">
							<img className="grid__img layer" src="img/canvas.png" alt="Canvas Dummy" />
							<img className="grid__img layer" src="img/wireframe.png" alt="Wireframe Dummy" />
							<img className="grid__img layer" src="img/Dribbble1/2.jpg" alt="02" />
							<span className="grid__title">Julien Lavallee</span>
						</a>
					</li>
					<li className="grid__item">
						<a className="grid__link" href="https://dribbble.com/creativemints">
							<img className="grid__img layer" src="img/canvas.png" alt="Canvas Dummy" />
							<img className="grid__img layer" src="img/wireframe.png" alt="Wireframe Dummy" />
							<img className="grid__img layer" src="img/Dribbble1/3_1.jpg" alt="031" />
							<span className="grid__title">Mike | Creative Mints</span>
						</a>
					</li>
					<li className="grid__item">
						<a className="grid__link" href="https://dribbble.com/Radium">
							<img className="grid__img layer" src="img/canvas.png" alt="Canvas Dummy" />
							<img className="grid__img layer" src="img/wireframe.png" alt="Wireframe Dummy" />
							<img className="grid__img layer" src="img/Dribbble1/4.jpg" alt="04" />
							<span className="grid__title">Cosmin Capitanu</span>
						</a>
					</li>
					<li className="grid__item">
						<a className="grid__link" href="https://dribbble.com/forefathers">
							<img className="grid__img layer" src="img/canvas.png" alt="Canvas Dummy" />
							<img className="grid__img layer" src="img/wireframe.png" alt="Wireframe Dummy" />
							<img className="grid__img layer" src="img/Dribbble1/1_2.jpg" alt="012" />
							<span className="grid__title">Forefathers</span>
						</a>
					</li>
					<li className="grid__item">
						<a className="grid__link" href="https://dribbble.com/JulienLavallee">
							<img className="grid__img layer" src="img/canvas.png" alt="Canvas Dummy" />
							<img className="grid__img layer" src="img/wireframe.png" alt="Wireframe Dummy" />
							<img className="grid__img layer" src="img/Dribbble1/2_2.jpg" alt="022" />
							<span className="grid__title">Julien Lavallee</span>
						</a>
					</li>
					<li className="grid__item">
						<a className="grid__link" href="https://dribbble.com/creativemints">
							<img className="grid__img layer" src="img/canvas.png" alt="Canvas Dummy" />
							<img className="grid__img layer" src="img/wireframe.png" alt="Wireframe Dummy" />
							<img className="grid__img layer" src="img/Dribbble1/3_2.jpg" alt="032" />
							<span className="grid__title">Mike | Creative Mints</span>
						</a>
					</li>
					<li className="grid__item">
						<a className="grid__link" href="https://dribbble.com/forefathers">
							<img className="grid__img layer" src="img/canvas.png" alt="Canvas Dummy" />
							<img className="grid__img layer" src="img/wireframe.png" alt="Wireframe Dummy" />
							<img className="grid__img layer" src="img/Dribbble1/1_3.jpg" alt="013" />
							<span className="grid__title">Forefathers</span>
						</a>
					</li>
					<li className="grid__item">
						<a className="grid__link" href="https://dribbble.com/Radium">
							<img className="grid__img layer" src="img/canvas.png" alt="Canvas Dummy" />
							<img className="grid__img layer" src="img/wireframe.png" alt="Wireframe Dummy" />
							<img className="grid__img layer" src="img/Dribbble1/4_1.jpg" alt="041" />
							<span className="grid__title">Cosmin Capitanu</span>
						</a>
					</li>
					<li className="grid__item">
						<a className="grid__link" href="https://dribbble.com/forefathers">
							<img className="grid__img layer" src="img/canvas.png" alt="Canvas Dummy" />
							<img className="grid__img layer" src="img/wireframe.png" alt="Wireframe Dummy" />
							<img className="grid__img layer" src="img/Dribbble1/1.jpg" alt="01" />
							<span className="grid__title">Forefathers</span>
						</a>
					</li>
					<li className="grid__item">
						<a className="grid__link" href="https://dribbble.com/JulienLavallee">
							<img className="grid__img layer" src="img/canvas.png" alt="Canvas Dummy" />
							<img className="grid__img layer" src="img/wireframe.png" alt="Wireframe Dummy" />
							<img className="grid__img layer" src="img/Dribbble1/2_1.jpg" alt="021" />
							<span className="grid__title">Julien Lavallee</span>
						</a>
					</li>
					<li className="grid__item">
						<a className="grid__link" href="https://dribbble.com/creativemints">
							<img className="grid__img layer" src="img/canvas.png" alt="Canvas Dummy" />
							<img className="grid__img layer" src="img/wireframe.png" alt="Wireframe Dummy" />
							<img className="grid__img layer" src="img/Dribbble1/3.jpg" alt="03" />
							<span className="grid__title">Mike | Creative Mints</span>
						</a>
					</li>
					<li className="grid__item">
						<a className="grid__link" href="https://dribbble.com/Radium">
							<img className="grid__img layer" src="img/canvas.png" alt="Canvas Dummy" />
							<img className="grid__img layer" src="img/wireframe.png" alt="Wireframe Dummy" />
							<img className="grid__img layer" src="img/Dribbble1/4_2.jpg" alt="042" />
							<span className="grid__title">Cosmin Capitanu</span>
						</a>
					</li>
					<li className="grid__item">
						<a className="grid__link" href="https://dribbble.com/forefathers">
							<img className="grid__img layer" src="img/canvas.png" alt="Canvas Dummy" />
							<img className="grid__img layer" src="img/wireframe.png" alt="Wireframe Dummy" />
							<img className="grid__img layer" src="img/Dribbble1/1_1.jpg" alt="011" />
							<span className="grid__title">Forefathers</span>
						</a>
					</li>
					<li className="grid__item">
						<a className="grid__link" href="https://dribbble.com/JulienLavallee">
							<img className="grid__img layer" src="img/canvas.png" alt="Canvas Dummy" />
							<img className="grid__img layer" src="img/wireframe.png" alt="Wireframe Dummy" />
							<img className="grid__img layer" src="img/Dribbble1/2.jpg" alt="02" />
							<span className="grid__title">Julien Lavallee</span>
						</a>
					</li>
					<li className="grid__item">
						<a className="grid__link" href="https://dribbble.com/creativemints">
							<img className="grid__img layer" src="img/canvas.png" alt="Canvas Dummy" />
							<img className="grid__img layer" src="img/wireframe.png" alt="Wireframe Dummy" />
							<img className="grid__img layer" src="img/Dribbble1/3_1.jpg" alt="031" />
							<span className="grid__title">Mike | Creative Mints</span>
						</a>
					</li>
					<li className="grid__item">
						<a className="grid__link" href="https://dribbble.com/Radium">
							<img className="grid__img layer" src="img/canvas.png" alt="Canvas Dummy" />
							<img className="grid__img layer" src="img/wireframe.png" alt="Wireframe Dummy" />
							<img className="grid__img layer" src="img/Dribbble1/4.jpg" alt="04" />
							<span className="grid__title">Cosmin Capitanu</span>
						</a>
					</li>
					<li className="grid__item">
						<a className="grid__link" href="https://dribbble.com/forefathers">
							<img className="grid__img layer" src="img/canvas.png" alt="Canvas Dummy" />
							<img className="grid__img layer" src="img/wireframe.png" alt="Wireframe Dummy" />
							<img className="grid__img layer" src="img/Dribbble1/1_2.jpg" alt="012" />
							<span className="grid__title">Forefathers</span>
						</a>
					</li>
					<li className="grid__item">
						<a className="grid__link" href="https://dribbble.com/JulienLavallee">
							<img className="grid__img layer" src="img/canvas.png" alt="Canvas Dummy" />
							<img className="grid__img layer" src="img/wireframe.png" alt="Wireframe Dummy" />
							<img className="grid__img layer" src="img/Dribbble1/2_2.jpg" alt="022" />
							<span className="grid__title">Julien Lavallee</span>
						</a>
					</li>
					<li className="grid__item">
						<a className="grid__link" href="https://dribbble.com/creativemints">
							<img className="grid__img layer" src="img/canvas.png" alt="Canvas Dummy" />
							<img className="grid__img layer" src="img/wireframe.png" alt="Wireframe Dummy" />
							<img className="grid__img layer" src="img/Dribbble1/3_2.jpg" alt="032" />
							<span className="grid__title">Mike | Creative Mints</span>
						</a>
					</li>
					<li className="grid__item">
						<a className="grid__link" href="https://dribbble.com/forefathers">
							<img className="grid__img layer" src="img/canvas.png" alt="Canvas Dummy" />
							<img className="grid__img layer" src="img/wireframe.png" alt="Wireframe Dummy" />
							<img className="grid__img layer" src="img/Dribbble1/1_3.jpg" alt="013" />
							<span className="grid__title">Forefathers</span>
						</a>
					</li>
					<li className="grid__item">
						<a className="grid__link" href="https://dribbble.com/Radium">
							<img className="grid__img layer" src="img/canvas.png" alt="Canvas Dummy" />
							<img className="grid__img layer" src="img/wireframe.png" alt="Wireframe Dummy" />
							<img className="grid__img layer" src="img/Dribbble1/4_1.jpg" alt="041" />
							<span className="grid__title">Cosmin Capitanu</span>
						</a>
					</li>
					<li className="grid__item">
						<a className="grid__link" href="https://dribbble.com/forefathers">
							<img className="grid__img layer" src="img/canvas.png" alt="Canvas Dummy" />
							<img className="grid__img layer" src="img/wireframe.png" alt="Wireframe Dummy" />
							<img className="grid__img layer" src="img/Dribbble1/1.jpg" alt="01" />
							<span className="grid__title">Forefathers</span>
						</a>
					</li>
					<li className="grid__item">
						<a className="grid__link" href="https://dribbble.com/JulienLavallee">
							<img className="grid__img layer" src="img/canvas.png" alt="Canvas Dummy" />
							<img className="grid__img layer" src="img/wireframe.png" alt="Wireframe Dummy" />
							<img className="grid__img layer" src="img/Dribbble1/2_1.jpg" alt="021" />
							<span className="grid__title">Julien Lavallee</span>
						</a>
					</li>
					<li className="grid__item">
						<a className="grid__link" href="https://dribbble.com/creativemints">
							<img className="grid__img layer" src="img/canvas.png" alt="Canvas Dummy" />
							<img className="grid__img layer" src="img/wireframe.png" alt="Wireframe Dummy" />
							<img className="grid__img layer" src="img/Dribbble1/3.jpg" alt="03" />
							<span className="grid__title">Mike | Creative Mints</span>
						</a>
					</li>
					<li className="grid__item">
						<a className="grid__link" href="https://dribbble.com/Radium">
							<img className="grid__img layer" src="img/canvas.png" alt="Canvas Dummy" />
							<img className="grid__img layer" src="img/wireframe.png" alt="Wireframe Dummy" />
							<img className="grid__img layer" src="img/Dribbble1/4_2.jpg" alt="042" />
							<span className="grid__title">Cosmin Capitanu</span>
						</a>
					</li>
					<li className="grid__item">
						<a className="grid__link" href="https://dribbble.com/forefathers">
							<img className="grid__img layer" src="img/canvas.png" alt="Canvas Dummy" />
							<img className="grid__img layer" src="img/wireframe.png" alt="Wireframe Dummy" />
							<img className="grid__img layer" src="img/Dribbble1/1_1.jpg" alt="011" />
							<span className="grid__title">Forefathers</span>
						</a>
					</li>
					<li className="grid__item">
						<a className="grid__link" href="https://dribbble.com/JulienLavallee">
							<img className="grid__img layer" src="img/canvas.png" alt="Canvas Dummy" />
							<img className="grid__img layer" src="img/wireframe.png" alt="Wireframe Dummy" />
							<img className="grid__img layer" src="img/Dribbble1/2.jpg" alt="02" />
							<span className="grid__title">Julien Lavallee</span>
						</a>
					</li>
					<li className="grid__item">
						<a className="grid__link" href="https://dribbble.com/creativemints">
							<img className="grid__img layer" src="img/canvas.png" alt="Canvas Dummy" />
							<img className="grid__img layer" src="img/wireframe.png" alt="Wireframe Dummy" />
							<img className="grid__img layer" src="img/Dribbble1/3_1.jpg" alt="031" />
							<span className="grid__title">Mike | Creative Mints</span>
						</a>
					</li>
					<li className="grid__item">
						<a className="grid__link" href="https://dribbble.com/Radium">
							<img className="grid__img layer" src="img/canvas.png" alt="Canvas Dummy" />
							<img className="grid__img layer" src="img/wireframe.png" alt="Wireframe Dummy" />
							<img className="grid__img layer" src="img/Dribbble1/4.jpg" alt="04" />
							<span className="grid__title">Cosmin Capitanu</span>
						</a>
					</li>
					<li className="grid__item">
						<a className="grid__link" href="https://dribbble.com/forefathers">
							<img className="grid__img layer" src="img/canvas.png" alt="Canvas Dummy" />
							<img className="grid__img layer" src="img/wireframe.png" alt="Wireframe Dummy" />
							<img className="grid__img layer" src="img/Dribbble1/1_2.jpg" alt="012" />
							<span className="grid__title">Forefathers</span>
						</a>
					</li>
					<li className="grid__item">
						<a className="grid__link" href="https://dribbble.com/JulienLavallee">
							<img className="grid__img layer" src="img/canvas.png" alt="Canvas Dummy" />
							<img className="grid__img layer" src="img/wireframe.png" alt="Wireframe Dummy" />
							<img className="grid__img layer" src="img/Dribbble1/2_2.jpg" alt="022" />
							<span className="grid__title">Julien Lavallee</span>
						</a>
					</li>
					<li className="grid__item">
						<a className="grid__link" href="https://dribbble.com/creativemints">
							<img className="grid__img layer" src="img/canvas.png" alt="Canvas Dummy" />
							<img className="grid__img layer" src="img/wireframe.png" alt="Wireframe Dummy" />
							<img className="grid__img layer" src="img/Dribbble1/3_2.jpg" alt="032" />
							<span className="grid__title">Mike | Creative Mints</span>
						</a>
					</li>
					<li className="grid__item">
						<a className="grid__link" href="https://dribbble.com/forefathers">
							<img className="grid__img layer" src="img/canvas.png" alt="Canvas Dummy" />
							<img className="grid__img layer" src="img/wireframe.png" alt="Wireframe Dummy" />
							<img className="grid__img layer" src="img/Dribbble1/1_3.jpg" alt="013" />
							<span className="grid__title">Forefathers</span>
						</a>
					</li>
					<li className="grid__item">
						<a className="grid__link" href="https://dribbble.com/Radium">
							<img className="grid__img layer" src="img/canvas.png" alt="Canvas Dummy" />
							<img className="grid__img layer" src="img/wireframe.png" alt="Wireframe Dummy" />
							<img className="grid__img layer" src="img/Dribbble1/4_1.jpg" alt="041" />
							<span className="grid__title">Cosmin Capitanu</span>
						</a>
					</li>
					<li className="grid__item">
						<a className="grid__link" href="https://dribbble.com/forefathers">
							<img className="grid__img layer" src="img/canvas.png" alt="Canvas Dummy" />
							<img className="grid__img layer" src="img/wireframe.png" alt="Wireframe Dummy" />
							<img className="grid__img layer" src="img/Dribbble1/1.jpg" alt="01" />
							<span className="grid__title">Forefathers</span>
						</a>
					</li>
					<li className="grid__item">
						<a className="grid__link" href="https://dribbble.com/JulienLavallee">
							<img className="grid__img layer" src="img/canvas.png" alt="Canvas Dummy" />
							<img className="grid__img layer" src="img/wireframe.png" alt="Wireframe Dummy" />
							<img className="grid__img layer" src="img/Dribbble1/2_1.jpg" alt="021" />
							<span className="grid__title">Julien Lavallee</span>
						</a>
					</li>
					<li className="grid__item">
						<a className="grid__link" href="https://dribbble.com/creativemints">
							<img className="grid__img layer" src="img/canvas.png" alt="Canvas Dummy" />
							<img className="grid__img layer" src="img/wireframe.png" alt="Wireframe Dummy" />
							<img className="grid__img layer" src="img/Dribbble1/3.jpg" alt="03" />
							<span className="grid__title">Mike | Creative Mints</span>
						</a>
					</li>
					<li className="grid__item">
						<a className="grid__link" href="https://dribbble.com/Radium">
							<img className="grid__img layer" src="img/canvas.png" alt="Canvas Dummy" />
							<img className="grid__img layer" src="img/wireframe.png" alt="Wireframe Dummy" />
							<img className="grid__img layer" src="img/Dribbble1/4_2.jpg" alt="042" />
							<span className="grid__title">Cosmin Capitanu</span>
						</a>
					</li>
					<li className="grid__item">
						<a className="grid__link" href="https://dribbble.com/forefathers">
							<img className="grid__img layer" src="img/canvas.png" alt="Canvas Dummy" />
							<img className="grid__img layer" src="img/wireframe.png" alt="Wireframe Dummy" />
							<img className="grid__img layer" src="img/Dribbble1/1_1.jpg" alt="011" />
							<span className="grid__title">Forefathers</span>
						</a>
					</li>
					<li className="grid__item">
						<a className="grid__link" href="https://dribbble.com/JulienLavallee">
							<img className="grid__img layer" src="img/canvas.png" alt="Canvas Dummy" />
							<img className="grid__img layer" src="img/wireframe.png" alt="Wireframe Dummy" />
							<img className="grid__img layer" src="img/Dribbble1/2.jpg" alt="02" />
							<span className="grid__title">Julien Lavallee</span>
						</a>
					</li>
					<li className="grid__item">
						<a className="grid__link" href="https://dribbble.com/creativemints">
							<img className="grid__img layer" src="img/canvas.png" alt="Canvas Dummy" />
							<img className="grid__img layer" src="img/wireframe.png" alt="Wireframe Dummy" />
							<img className="grid__img layer" src="img/Dribbble1/3_1.jpg" alt="031" />
							<span className="grid__title">Mike | Creative Mints</span>
						</a>
					</li>
					<li className="grid__item">
						<a className="grid__link" href="https://dribbble.com/Radium">
							<img className="grid__img layer" src="img/canvas.png" alt="Canvas Dummy" />
							<img className="grid__img layer" src="img/wireframe.png" alt="Wireframe Dummy" />
							<img className="grid__img layer" src="img/Dribbble1/4.jpg" alt="04" />
							<span className="grid__title">Cosmin Capitanu</span>
						</a>
					</li>
					<li className="grid__item">
						<a className="grid__link" href="https://dribbble.com/forefathers">
							<img className="grid__img layer" src="img/canvas.png" alt="Canvas Dummy" />
							<img className="grid__img layer" src="img/wireframe.png" alt="Wireframe Dummy" />
							<img className="grid__img layer" src="img/Dribbble1/1_2.jpg" alt="012" />
							<span className="grid__title">Forefathers</span>
						</a>
					</li>
					<li className="grid__item">
						<a className="grid__link" href="https://dribbble.com/JulienLavallee">
							<img className="grid__img layer" src="img/canvas.png" alt="Canvas Dummy" />
							<img className="grid__img layer" src="img/wireframe.png" alt="Wireframe Dummy" />
							<img className="grid__img layer" src="img/Dribbble1/2_2.jpg" alt="022" />
							<span className="grid__title">Julien Lavallee</span>
						</a>
					</li>
					<li className="grid__item">
						<a className="grid__link" href="https://dribbble.com/creativemints">
							<img className="grid__img layer" src="img/canvas.png" alt="Canvas Dummy" />
							<img className="grid__img layer" src="img/wireframe.png" alt="Wireframe Dummy" />
							<img className="grid__img layer" src="img/Dribbble1/3_2.jpg" alt="032" />
							<span className="grid__title">Mike | Creative Mints</span>
						</a>
					</li>
					<li className="grid__item">
						<a className="grid__link" href="https://dribbble.com/forefathers">
							<img className="grid__img layer" src="img/canvas.png" alt="Canvas Dummy" />
							<img className="grid__img layer" src="img/wireframe.png" alt="Wireframe Dummy" />
							<img className="grid__img layer" src="img/Dribbble1/1_3.jpg" alt="013" />
							<span className="grid__title">Forefathers</span>
						</a>
					</li>
					<li className="grid__item">
						<a className="grid__link" href="https://dribbble.com/Radium">
							<img className="grid__img layer" src="img/canvas.png" alt="Canvas Dummy" />
							<img className="grid__img layer" src="img/wireframe.png" alt="Wireframe Dummy" />
							<img className="grid__img layer" src="img/Dribbble1/4_1.jpg" alt="041" />
							<span className="grid__title">Cosmin Capitanu</span>
						</a>
					</li>
					<li className="grid__item">
						<a className="grid__link" href="https://dribbble.com/forefathers">
							<img className="grid__img layer" src="img/canvas.png" alt="Canvas Dummy" />
							<img className="grid__img layer" src="img/wireframe.png" alt="Wireframe Dummy" />
							<img className="grid__img layer" src="img/Dribbble1/1.jpg" alt="01" />
							<span className="grid__title">Forefathers</span>
						</a>
					</li>
					<li className="grid__item">
						<a className="grid__link" href="https://dribbble.com/JulienLavallee">
							<img className="grid__img layer" src="img/canvas.png" alt="Canvas Dummy" />
							<img className="grid__img layer" src="img/wireframe.png" alt="Wireframe Dummy" />
							<img className="grid__img layer" src="img/Dribbble1/2_1.jpg" alt="021" />
							<span className="grid__title">Julien Lavallee</span>
						</a>
					</li>
					<li className="grid__item">
						<a className="grid__link" href="https://dribbble.com/creativemints">
							<img className="grid__img layer" src="img/canvas.png" alt="Canvas Dummy" />
							<img className="grid__img layer" src="img/wireframe.png" alt="Wireframe Dummy" />
							<img className="grid__img layer" src="img/Dribbble1/3.jpg" alt="03" />
							<span className="grid__title">Mike | Creative Mints</span>
						</a>
					</li>
					<li className="grid__item">
						<a className="grid__link" href="https://dribbble.com/Radium">
							<img className="grid__img layer" src="img/canvas.png" alt="Canvas Dummy" />
							<img className="grid__img layer" src="img/wireframe.png" alt="Wireframe Dummy" />
							<img className="grid__img layer" src="img/Dribbble1/4_2.jpg" alt="042" />
							<span className="grid__title">Cosmin Capitanu</span>
						</a>
					</li>
					<li className="grid__item">
						<a className="grid__link" href="https://dribbble.com/forefathers">
							<img className="grid__img layer" src="img/canvas.png" alt="Canvas Dummy" />
							<img className="grid__img layer" src="img/wireframe.png" alt="Wireframe Dummy" />
							<img className="grid__img layer" src="img/Dribbble1/1_1.jpg" alt="011" />
							<span className="grid__title">Forefathers</span>
						</a>
					</li>
					<li className="grid__item">
						<a className="grid__link" href="https://dribbble.com/JulienLavallee">
							<img className="grid__img layer" src="img/canvas.png" alt="Canvas Dummy" />
							<img className="grid__img layer" src="img/wireframe.png" alt="Wireframe Dummy" />
							<img className="grid__img layer" src="img/Dribbble1/2.jpg" alt="02" />
							<span className="grid__title">Julien Lavallee</span>
						</a>
					</li>
					<li className="grid__item">
						<a className="grid__link" href="https://dribbble.com/creativemints">
							<img className="grid__img layer" src="img/canvas.png" alt="Canvas Dummy" />
							<img className="grid__img layer" src="img/wireframe.png" alt="Wireframe Dummy" />
							<img className="grid__img layer" src="img/Dribbble1/3_1.jpg" alt="031" />
							<span className="grid__title">Mike | Creative Mints</span>
						</a>
					</li>
					<li className="grid__item">
						<a className="grid__link" href="https://dribbble.com/Radium">
							<img className="grid__img layer" src="img/canvas.png" alt="Canvas Dummy" />
							<img className="grid__img layer" src="img/wireframe.png" alt="Wireframe Dummy" />
							<img className="grid__img layer" src="img/Dribbble1/4.jpg" alt="04" />
							<span className="grid__title">Cosmin Capitanu</span>
						</a>
					</li>
					<li className="grid__item">
						<a className="grid__link" href="https://dribbble.com/forefathers">
							<img className="grid__img layer" src="img/canvas.png" alt="Canvas Dummy" />
							<img className="grid__img layer" src="img/wireframe.png" alt="Wireframe Dummy" />
							<img className="grid__img layer" src="img/Dribbble1/1_2.jpg" alt="012" />
							<span className="grid__title">Forefathers</span>
						</a>
					</li>
					<li className="grid__item">
						<a className="grid__link" href="https://dribbble.com/JulienLavallee">
							<img className="grid__img layer" src="img/canvas.png" alt="Canvas Dummy" />
							<img className="grid__img layer" src="img/wireframe.png" alt="Wireframe Dummy" />
							<img className="grid__img layer" src="img/Dribbble1/2_2.jpg" alt="022" />
							<span className="grid__title">Julien Lavallee</span>
						</a>
					</li>
					<li className="grid__item">
						<a className="grid__link" href="https://dribbble.com/creativemints">
							<img className="grid__img layer" src="img/canvas.png" alt="Canvas Dummy" />
							<img className="grid__img layer" src="img/wireframe.png" alt="Wireframe Dummy" />
							<img className="grid__img layer" src="img/Dribbble1/3_2.jpg" alt="032" />
							<span className="grid__title">Mike | Creative Mints</span>
						</a>
					</li>
					<li className="grid__item">
						<a className="grid__link" href="https://dribbble.com/forefathers">
							<img className="grid__img layer" src="img/canvas.png" alt="Canvas Dummy" />
							<img className="grid__img layer" src="img/wireframe.png" alt="Wireframe Dummy" />
							<img className="grid__img layer" src="img/Dribbble1/1_3.jpg" alt="013" />
							<span className="grid__title">Forefathers</span>
						</a>
					</li>
					<li className="grid__item">
						<a className="grid__link" href="https://dribbble.com/Radium">
							<img className="grid__img layer" src="img/canvas.png" alt="Canvas Dummy" />
							<img className="grid__img layer" src="img/wireframe.png" alt="Wireframe Dummy" />
							<img className="grid__img layer" src="img/Dribbble1/4_1.jpg" alt="041" />
							<span className="grid__title">Cosmin Capitanu</span>
						</a>
					</li>
					<li className="grid__item">
						<a className="grid__link" href="https://dribbble.com/forefathers">
							<img className="grid__img layer" src="img/canvas.png" alt="Canvas Dummy" />
							<img className="grid__img layer" src="img/wireframe.png" alt="Wireframe Dummy" />
							<img className="grid__img layer" src="img/Dribbble1/1.jpg" alt="01" />
							<span className="grid__title">Forefathers</span>
						</a>
					</li>
					<li className="grid__item">
						<a className="grid__link" href="https://dribbble.com/JulienLavallee">
							<img className="grid__img layer" src="img/canvas.png" alt="Canvas Dummy" />
							<img className="grid__img layer" src="img/wireframe.png" alt="Wireframe Dummy" />
							<img className="grid__img layer" src="img/Dribbble1/2_1.jpg" alt="021" />
							<span className="grid__title">Julien Lavallee</span>
						</a>
					</li>
					<li className="grid__item">
						<a className="grid__link" href="https://dribbble.com/creativemints">
							<img className="grid__img layer" src="img/canvas.png" alt="Canvas Dummy" />
							<img className="grid__img layer" src="img/wireframe.png" alt="Wireframe Dummy" />
							<img className="grid__img layer" src="img/Dribbble1/3.jpg" alt="03" />
							<span className="grid__title">Mike | Creative Mints</span>
						</a>
					</li>
					<li className="grid__item">
						<a className="grid__link" href="https://dribbble.com/Radium">
							<img className="grid__img layer" src="img/canvas.png" alt="Canvas Dummy" />
							<img className="grid__img layer" src="img/wireframe.png" alt="Wireframe Dummy" />
							<img className="grid__img layer" src="img/Dribbble1/4_2.jpg" alt="042" />
							<span className="grid__title">Cosmin Capitanu</span>
						</a>
					</li>
					<li className="grid__item">
						<a className="grid__link" href="https://dribbble.com/forefathers">
							<img className="grid__img layer" src="img/canvas.png" alt="Canvas Dummy" />
							<img className="grid__img layer" src="img/wireframe.png" alt="Wireframe Dummy" />
							<img className="grid__img layer" src="img/Dribbble1/1_1.jpg" alt="011" />
							<span className="grid__title">Forefathers</span>
						</a>
					</li>
					<li className="grid__item">
						<a className="grid__link" href="https://dribbble.com/JulienLavallee">
							<img className="grid__img layer" src="img/canvas.png" alt="Canvas Dummy" />
							<img className="grid__img layer" src="img/wireframe.png" alt="Wireframe Dummy" />
							<img className="grid__img layer" src="img/Dribbble1/2.jpg" alt="02" />
							<span className="grid__title">Julien Lavallee</span>
						</a>
					</li>
					<li className="grid__item">
						<a className="grid__link" href="https://dribbble.com/creativemints">
							<img className="grid__img layer" src="img/canvas.png" alt="Canvas Dummy" />
							<img className="grid__img layer" src="img/wireframe.png" alt="Wireframe Dummy" />
							<img className="grid__img layer" src="img/Dribbble1/3_1.jpg" alt="031" />
							<span className="grid__title">Mike | Creative Mints</span>
						</a>
					</li>
					<li className="grid__item">
						<a className="grid__link" href="https://dribbble.com/Radium">
							<img className="grid__img layer" src="img/canvas.png" alt="Canvas Dummy" />
							<img className="grid__img layer" src="img/wireframe.png" alt="Wireframe Dummy" />
							<img className="grid__img layer" src="img/Dribbble1/4.jpg" alt="04" />
							<span className="grid__title">Cosmin Capitanu</span>
						</a>
					</li>
					<li className="grid__item">
						<a className="grid__link" href="https://dribbble.com/forefathers">
							<img className="grid__img layer" src="img/canvas.png" alt="Canvas Dummy" />
							<img className="grid__img layer" src="img/wireframe.png" alt="Wireframe Dummy" />
							<img className="grid__img layer" src="img/Dribbble1/1_2.jpg" alt="012" />
							<span className="grid__title">Forefathers</span>
						</a>
					</li>
					<li className="grid__item">
						<a className="grid__link" href="https://dribbble.com/JulienLavallee">
							<img className="grid__img layer" src="img/canvas.png" alt="Canvas Dummy" />
							<img className="grid__img layer" src="img/wireframe.png" alt="Wireframe Dummy" />
							<img className="grid__img layer" src="img/Dribbble1/2_2.jpg" alt="022" />
							<span className="grid__title">Julien Lavallee</span>
						</a>
					</li>
					<li className="grid__item">
						<a className="grid__link" href="https://dribbble.com/creativemints">
							<img className="grid__img layer" src="img/canvas.png" alt="Canvas Dummy" />
							<img className="grid__img layer" src="img/wireframe.png" alt="Wireframe Dummy" />
							<img className="grid__img layer" src="img/Dribbble1/3_2.jpg" alt="032" />
							<span className="grid__title">Mike | Creative Mints</span>
						</a>
					</li>
					<li className="grid__item">
						<a className="grid__link" href="https://dribbble.com/forefathers">
							<img className="grid__img layer" src="img/canvas.png" alt="Canvas Dummy" />
							<img className="grid__img layer" src="img/wireframe.png" alt="Wireframe Dummy" />
							<img className="grid__img layer" src="img/Dribbble1/1_3.jpg" alt="013" />
							<span className="grid__title">Forefathers</span>
						</a>
					</li>
					<li className="grid__item">
						<a className="grid__link" href="https://dribbble.com/Radium">
							<img className="grid__img layer" src="img/canvas.png" alt="Canvas Dummy" />
							<img className="grid__img layer" src="img/wireframe.png" alt="Wireframe Dummy" />
							<img className="grid__img layer" src="img/Dribbble1/4_1.jpg" alt="041" />
							<span className="grid__title">Cosmin Capitanu</span>
						</a>
					</li>
					<li className="grid__item">
						<a className="grid__link" href="https://dribbble.com/creativemints">
							<img className="grid__img layer" src="img/canvas.png" alt="Canvas Dummy" />
							<img className="grid__img layer" src="img/wireframe.png" alt="Wireframe Dummy" />
							<img className="grid__img layer" src="img/Dribbble1/3_2.jpg" alt="032" />
							<span className="grid__title">Mike | Creative Mints</span>
						</a>
					</li>
					<li className="grid__item">
						<a className="grid__link" href="https://dribbble.com/forefathers">
							<img className="grid__img layer" src="img/canvas.png" alt="Canvas Dummy" />
							<img className="grid__img layer" src="img/wireframe.png" alt="Wireframe Dummy" />
							<img className="grid__img layer" src="img/Dribbble1/1_3.jpg" alt="013" />
							<span className="grid__title">Forefathers</span>
						</a>
					</li>
					<li className="grid__item">
						<a className="grid__link" href="https://dribbble.com/Radium">
							<img className="grid__img layer" src="img/canvas.png" alt="Canvas Dummy" />
							<img className="grid__img layer" src="img/wireframe.png" alt="Wireframe Dummy" />
							<img className="grid__img layer" src="img/Dribbble1/4_1.jpg" alt="041" />
							<span className="grid__title">Cosmin Capitanu</span>
						</a>
					</li>
					<li className="grid__item">
						<a className="grid__link" href="https://dribbble.com/forefathers">
							<img className="grid__img layer" src="img/canvas.png" alt="Canvas Dummy" />
							<img className="grid__img layer" src="img/wireframe.png" alt="Wireframe Dummy" />
							<img className="grid__img layer" src="img/Dribbble1/1.jpg" alt="01" />
							<span className="grid__title">Forefathers</span>
						</a>
					</li>
					<li className="grid__item">
						<a className="grid__link" href="https://dribbble.com/JulienLavallee">
							<img className="grid__img layer" src="img/canvas.png" alt="Canvas Dummy" />
							<img className="grid__img layer" src="img/wireframe.png" alt="Wireframe Dummy" />
							<img className="grid__img layer" src="img/Dribbble1/2_1.jpg" alt="021" />
							<span className="grid__title">Julien Lavallee</span>
						</a>
					</li>
					<li className="grid__item">
						<a className="grid__link" href="https://dribbble.com/creativemints">
							<img className="grid__img layer" src="img/canvas.png" alt="Canvas Dummy" />
							<img className="grid__img layer" src="img/wireframe.png" alt="Wireframe Dummy" />
							<img className="grid__img layer" src="img/Dribbble1/3.jpg" alt="03" />
							<span className="grid__title">Mike | Creative Mints</span>
						</a>
					</li>
					<li className="grid__item">
						<a className="grid__link" href="https://dribbble.com/Radium">
							<img className="grid__img layer" src="img/canvas.png" alt="Canvas Dummy" />
							<img className="grid__img layer" src="img/wireframe.png" alt="Wireframe Dummy" />
							<img className="grid__img layer" src="img/Dribbble1/4_2.jpg" alt="042" />
							<span className="grid__title">Cosmin Capitanu</span>
						</a>
					</li>
					<li className="grid__item">
						<a className="grid__link" href="https://dribbble.com/forefathers">
							<img className="grid__img layer" src="img/canvas.png" alt="Canvas Dummy" />
							<img className="grid__img layer" src="img/wireframe.png" alt="Wireframe Dummy" />
							<img className="grid__img layer" src="img/Dribbble1/1_1.jpg" alt="011" />
							<span className="grid__title">Forefathers</span>
						</a>
					</li>
					<li className="grid__item">
						<a className="grid__link" href="https://dribbble.com/JulienLavallee">
							<img className="grid__img layer" src="img/canvas.png" alt="Canvas Dummy" />
							<img className="grid__img layer" src="img/wireframe.png" alt="Wireframe Dummy" />
							<img className="grid__img layer" src="img/Dribbble1/2.jpg" alt="02" />
							<span className="grid__title">Julien Lavallee</span>
						</a>
					</li>
					<li className="grid__item">
						<a className="grid__link" href="https://dribbble.com/creativemints">
							<img className="grid__img layer" src="img/canvas.png" alt="Canvas Dummy" />
							<img className="grid__img layer" src="img/wireframe.png" alt="Wireframe Dummy" />
							<img className="grid__img layer" src="img/Dribbble1/3_1.jpg" alt="031" />
							<span className="grid__title">Mike | Creative Mints</span>
						</a>
					</li>
					<li className="grid__item">
						<a className="grid__link" href="https://dribbble.com/Radium">
							<img className="grid__img layer" src="img/canvas.png" alt="Canvas Dummy" />
							<img className="grid__img layer" src="img/wireframe.png" alt="Wireframe Dummy" />
							<img className="grid__img layer" src="img/Dribbble1/4.jpg" alt="04" />
							<span className="grid__title">Cosmin Capitanu</span>
						</a>
					</li>
					<li className="grid__item">
						<a className="grid__link" href="https://dribbble.com/forefathers">
							<img className="grid__img layer" src="img/canvas.png" alt="Canvas Dummy" />
							<img className="grid__img layer" src="img/wireframe.png" alt="Wireframe Dummy" />
							<img className="grid__img layer" src="img/Dribbble1/1_2.jpg" alt="012" />
							<span className="grid__title">Forefathers</span>
						</a>
					</li>
					<li className="grid__item">
						<a className="grid__link" href="https://dribbble.com/JulienLavallee">
							<img className="grid__img layer" src="img/canvas.png" alt="Canvas Dummy" />
							<img className="grid__img layer" src="img/wireframe.png" alt="Wireframe Dummy" />
							<img className="grid__img layer" src="img/Dribbble1/2_2.jpg" alt="022" />
							<span className="grid__title">Julien Lavallee</span>
						</a>
					</li>
					<li className="grid__item">
						<a className="grid__link" href="https://dribbble.com/creativemints">
							<img className="grid__img layer" src="img/canvas.png" alt="Canvas Dummy" />
							<img className="grid__img layer" src="img/wireframe.png" alt="Wireframe Dummy" />
							<img className="grid__img layer" src="img/Dribbble1/3_2.jpg" alt="032" />
							<span className="grid__title">Mike | Creative Mints</span>
						</a>
					</li>
					<li className="grid__item">
						<a className="grid__link" href="https://dribbble.com/forefathers">
							<img className="grid__img layer" src="img/canvas.png" alt="Canvas Dummy" />
							<img className="grid__img layer" src="img/wireframe.png" alt="Wireframe Dummy" />
							<img className="grid__img layer" src="img/Dribbble1/1_3.jpg" alt="013" />
							<span className="grid__title">Forefathers</span>
						</a>
					</li>
					<li className="grid__item">
						<a className="grid__link" href="https://dribbble.com/Radium">
							<img className="grid__img layer" src="img/canvas.png" alt="Canvas Dummy" />
							<img className="grid__img layer" src="img/wireframe.png" alt="Wireframe Dummy" />
							<img className="grid__img layer" src="img/Dribbble1/4_1.jpg" alt="041" />
							<span className="grid__title">Cosmin Capitanu</span>
						</a>
					</li>
				</ul>
			</div>
		 </div>
		<a className="pater" href="https://goo.gl/k3vxNx">
			<p className="pater__desc">Let me give a chance to add your dream project in this
			list and make me happy !</p>
		</a>
		
    </>
  );
};

export default NewProjects;