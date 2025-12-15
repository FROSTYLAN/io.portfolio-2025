import styled from 'styled-components';
import { Typography, Container, ProjectCard, ReactIcon, NodeJsIcon, DatabaseIcon, TailwindIcon } from '../../atoms';
import background from './background.png';

import auditiaImg from './demo.auditia.png';
import digenioImg from './demo.digenio.png';
import smartTalentImg from './demo.smarttalent.png';
import copalcontImg from './demo.coplacont.png';

const ProjectsSectionWrapper = styled.section`
  padding: 80px 0;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 30% 20%, rgba(0, 255, 136, 0.04) 0%, transparent 50%),
                radial-gradient(circle at 70% 80%, rgba(0, 255, 136, 0.06) 0%, transparent 50%);
    pointer-events: none;
  }
  
  @media (max-width: 768px) {
    padding: 60px 0;
  }
`;

const ProjectsContent = styled.div`
  position: relative;
  z-index: 2;
`;

const CenterBackground = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 140%;
  height: 140%;
  background-image: url(${background});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  opacity: 1;
  filter: blur(0.6px);
  z-index: 1;

  @media (max-width: 968px) {
    width: 520px;
    height: 520px;
  }
  @media (max-width: 768px) {
    width: 360px;
    height: 360px;
  }
`;

const SectionHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 16px;
  margin-bottom: 48px;
  
  @media (max-width: 768px) {
    margin-bottom: 32px;
  }
`;

const SectionIcon = styled.div`
  width: 40px;
  height: 40px;
  background: rgba(185, 255, 102, 1);
  border-radius: 50%;
  flex-shrink: 0;
  
  @media (max-width: 768px) {
    width: 14px;
    height: 14px;
  }
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 32px;
  justify-items: center;
  align-items: start;
  justify-content: center;
  align-content: center;
  width: 100%;
  margin: 0 auto;
  min-height: clamp(360px, 60vh, 760px);
  box-sizing: border-box;

  @media (max-width: 1024px) {
    gap: 28px;
    max-width: 1000px;
    min-height: clamp(320px, 55vh, 680px);
  }

  @media (max-width: 968px) {
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 24px;
    max-width: 600px;
    min-height: clamp(280px, 50vh, 600px);
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    gap: 20px;
    max-width: 520px;
    min-height: clamp(240px, 48vh, 520px);
  }
`;

const FloatingShape = styled.div`
  position: absolute;
  width: ${props => props.size || '120px'};
  height: ${props => props.size || '120px'};
  background: ${props => props.bg || 'rgba(0, 255, 136, 0.03)'};
  border-radius: ${props => props.rounded ? '50%' : '24px'};
  top: ${props => props.top};
  left: ${props => props.left};
  right: ${props => props.right};
  bottom: ${props => props.bottom};
  animation: floatGentle 10s ease-in-out infinite;
  animation-delay: ${props => props.delay || '0s'};
  opacity: 0.3;
  
  @keyframes floatGentle {
    0%, 100% { transform: translateY(0px) rotate(0deg); }
    50% { transform: translateY(-20px) rotate(180deg); }
  }
  
  @media (max-width: 768px) {
    width: ${props => props.mobileSize || '80px'};
    height: ${props => props.mobileSize || '80px'};
  }
`;

const projectsData = [
  {
    id: 1,
    title: "Coplacont - Sistema Contable",
    description: "Sistema contable con estados financieros, conciliación y automatización de asientos.",
    image: copalcontImg,
    technologies: [
      { name: "React", icon: <ReactIcon />, color: "linear-gradient(103deg, #17200C 16.66%, #080E02 81.61%)" },
      { name: "Express", icon: <NodeJsIcon />, color: "linear-gradient(103deg, #17200C 16.66%, #080E02 81.61%)" },
      { name: "MongoDB", icon: <TailwindIcon />, color: "linear-gradient(103deg, #17200C 16.66%, #080E02 81.61%)" }
    ],
    demoUrl: "https://demo-coplacont.netlify.app"
  },

  {
    id: 2,
    title: "SmartTalent - Gestión de RR.HH.",
    description: "Portal de RR.HH. para reclutamiento, evaluación y seguimiento de desempeño.",
    image: smartTalentImg,
    technologies: [
      { name: "React", icon: <ReactIcon />, color: "linear-gradient(103deg, #17200C 16.66%, #080E02 81.61%)" },
      { name: "Express", icon: <NodeJsIcon />, color: "linear-gradient(103deg, #17200C 16.66%, #080E02 81.61%)" },
      { name: "MongoDB", icon: <TailwindIcon />, color: "linear-gradient(103deg, #17200C 16.66%, #080E02 81.61%)" }
    ],
    demoUrl: "https://demo-smart-talent.netlify.app"
  },
  {
    id: 3,
    title: "Digenio - Sistema de Gestión",
    description: "Plataforma para gestión de personal, equipos de desarrollo y proyectos o startups.",
    image: digenioImg,
    technologies: [
      { name: "React", icon: <ReactIcon />, color: "linear-gradient(103deg, #17200C 16.66%, #080E02 81.61%)" },
      { name: "Express", icon: <NodeJsIcon />, color: "linear-gradient(103deg, #17200C 16.66%, #080E02 81.61%)" },
      { name: "MongoDB", icon: <TailwindIcon />, color: "linear-gradient(103deg, #17200C 16.66%, #080E02 81.61%)" }
    ],
    demoUrl: "https://demo-digenio.vercel.app"
  },
  // {
  //   id: 4,
  //   title: "MP Cashier - Gestión de ventas",
  //   description: "Plataforma web para gestión de caja, que se complementa con una aplicación móvil para los meseros.",
  //   image: digenioImg,
  //   technologies: [
  //     { name: "React", icon: <ReactIcon />, color: "linear-gradient(103deg, #17200C 16.66%, #080E02 81.61%)" },
  //     { name: "Express", icon: <NodeJsIcon />, color: "linear-gradient(103deg, #17200C 16.66%, #080E02 81.61%)" },
  //     { name: "MongoDB", icon: <TailwindIcon />, color: "linear-gradient(103deg, #17200C 16.66%, #080E02 81.61%)" }
  //   ],
  //   demoUrl: "https://demo-digenio.vercel.app"
  // }
];

const Projects = () => {
  return (
    <ProjectsSectionWrapper>
      <CenterBackground />
      <Container>
        <ProjectsContent>
          <SectionHeader>
            <Typography
              variant="h2"
              color="#ffffff"
              style={{ fontFamily: "'Tilt Neon', sans-serif" }}
            >
              Proyectos destacados
            </Typography>
            <SectionIcon />
          </SectionHeader>

          <ProjectsGrid>
            {projectsData.map((project, index) => (
              <ProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
                image={project.image}
                technologies={project.technologies}
                demoUrl={project.demoUrl}
                style={{
                  animationDelay: `${index * 0.15}s`
                }}
              />
            ))}
          </ProjectsGrid>
        </ProjectsContent>
      </Container>

      {/* Floating Shapes */}
      <FloatingShape
        top="10%"
        left="5%"
        size="140px"
        mobileSize="80px"
        rounded
        delay="0s"
        bg="rgba(0, 255, 136, 0.04)"
      />

      <FloatingShape
        bottom="15%"
        right="8%"
        size="100px"
        mobileSize="60px"
        delay="4s"
        bg="rgba(0, 255, 136, 0.06)"
      />

      <FloatingShape
        top="60%"
        right="3%"
        size="80px"
        mobileSize="50px"
        rounded
        delay="7s"
        bg="rgba(0, 255, 136, 0.03)"
      />

      <FloatingShape
        bottom="40%"
        left="10%"
        size="60px"
        mobileSize="40px"
        delay="2s"
        bg="rgba(0, 255, 136, 0.05)"
      />
    </ProjectsSectionWrapper>
  );
};

export default Projects;
