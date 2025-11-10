import styled from 'styled-components';
import { Typography, Container, ProjectCard } from '../../atoms';

const ProjectsSectionWrapper = styled.section`
  padding: 80px 0;
  background: linear-gradient(180deg, #0a0a0a 0%, #1a1a1a 50%, #0a0a0a 100%);
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

const SectionHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 48px;
  
  @media (max-width: 768px) {
    margin-bottom: 32px;
    justify-content: center;
  }
`;

const SectionIcon = styled.div`
  width: 16px;
  height: 16px;
  background: #00ff88;
  border-radius: 50%;
  flex-shrink: 0;
  
  @media (max-width: 768px) {
    width: 14px;
    height: 14px;
  }
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px;
  
  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 24px;
    max-width: 600px;
    margin: 0 auto;
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
    title: "AuditAI - Sistema de Auditoría",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.",
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='240' viewBox='0 0 400 240'%3E%3Crect width='400' height='240' fill='%23f8f9fa'/%3E%3Ctext x='200' y='120' text-anchor='middle' dy='.3em' font-family='Arial, sans-serif' font-size='24' font-weight='bold' fill='%23343a40'%3EAuditAI%3C/text%3E%3C/svg%3E",
    technologies: [
      { name: "React", icon: "⚛️", color: "#61dafb" },
      { name: "Node.js", icon: "🟢", color: "#339933" },
      { name: "Database", icon: "🗄️", color: "#336791" }
    ],
    demoUrl: "#"
  },
  {
    id: 2,
    title: "SmartTalent - Gestión de RR.HH.",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.",
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='240' viewBox='0 0 400 240'%3E%3Crect width='400' height='240' fill='%23e3f2fd'/%3E%3Ctext x='200' y='120' text-anchor='middle' dy='.3em' font-family='Arial, sans-serif' font-size='20' font-weight='bold' fill='%231976d2'%3ESmartTalent%3C/text%3E%3C/svg%3E",
    technologies: [
      { name: "Vue", icon: "🟢", color: "#4fc08d" },
      { name: "Laravel", icon: "🔴", color: "#ff2d20" },
      { name: "MySQL", icon: "🗄️", color: "#4479a1" }
    ],
    demoUrl: "#"
  },
  {
    id: 3,
    title: "Coplacont - Sistema Contable",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.",
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='240' viewBox='0 0 400 240'%3E%3Crect width='400' height='240' fill='%23f3e5f5'/%3E%3Ctext x='200' y='120' text-anchor='middle' dy='.3em' font-family='Arial, sans-serif' font-size='20' font-weight='bold' fill='%237b1fa2'%3ECoplacont%3C/text%3E%3C/svg%3E",
    technologies: [
      { name: "Angular", icon: "🅰️", color: "#dd0031" },
      { name: "Spring", icon: "🍃", color: "#6db33f" },
      { name: "PostgreSQL", icon: "🐘", color: "#336791" }
    ],
    demoUrl: "#"
  },
  {
    id: 4,
    title: "Digenio - Sistema de Gestión",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.",
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='240' viewBox='0 0 400 240'%3E%3Crect width='400' height='240' fill='%23fff3e0'/%3E%3Ctext x='200' y='120' text-anchor='middle' dy='.3em' font-family='Arial, sans-serif' font-size='24' font-weight='bold' fill='%23f57c00'%3EDigenio%3C/text%3E%3C/svg%3E",
    technologies: [
      { name: "React", icon: "⚛️", color: "#61dafb" },
      { name: "Express", icon: "🚀", color: "#000000" },
      { name: "MongoDB", icon: "🍃", color: "#47a248" }
    ],
    demoUrl: "#"
  }
];

const Projects = () => {
  return (
    <ProjectsSectionWrapper>
      <Container>
        <ProjectsContent>
          <SectionHeader>
            <SectionIcon />
            <Typography 
              variant="h2" 
              color="#ffffff"
            >
              Proyectos destacados
            </Typography>
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