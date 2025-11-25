import styled from 'styled-components';
import { Typography, Container, ExperienceCard, Divider } from '../../atoms';
import { useState } from 'react';
import frontendIcon from './frontend-icon.svg';
import fullstackIcon from './fullstack-icon.svg';
import freelanceIcon from './freelance-icon.svg';
import leaderIcon from './leader-icon.svg';

const ExperienceSectionWrapper = styled.section`
  padding: 0  0 80px 0;
  background: transparent;
  position: relative;
  overflow: visible;
  
  @media (max-width: 768px) {
    padding: 60px 0;
  }
`;

const ExperienceContent = styled.div`
  padding-top: 80px;
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

const ExperienceGrid = styled.div`
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
  animation: floatGentle 12s ease-in-out infinite;
  animation-delay: ${props => props.delay || '0s'};
  opacity: 0.3;
  
  @keyframes floatGentle {
    0%, 100% { transform: translateY(0px) rotate(0deg); }
    50% { transform: translateY(-25px) rotate(180deg); }
  }
  
  @media (max-width: 768px) {
    width: ${props => props.mobileSize || '80px'};
    height: ${props => props.mobileSize || '80px'};
  }
`;

// Iconos desde archivos SVG (carpeta Experience)
const FrontendIcon = () => (
  <img src={frontendIcon} alt="Frontend" />
);

const FullStackIcon = () => (
  <img src={fullstackIcon} alt="Fullstack" />
);

const FreelanceIcon = () => (
  <img src={freelanceIcon} alt="Freelance" />
);

const LeaderIcon = () => (
  <img src={leaderIcon} alt="Líder" />
);

const experienceData = [
  {
    id: 1,
    title: "Full Stack Developer",
    company: "Cadmus Tech",
    period: "2022 – 2024",
    location: "Remoto",
    teamSize: "6 desarrolladores",
    methodology: "Scrum, entregas quincenales",
    description: "Lideré la construcción del front con enfoque en performance y accesibilidad.",
    icon: <FrontendIcon />,
    iconMaskSrc: frontendIcon,
    iconBg: "linear-gradient(135deg, #00ff88, #00cc6a)",
    skills: ["React", "TypeScript", "Vite", "Styled-Components", "Jest", "Accessibility"],
    outcomes: [
      "Reducción de LCP en 38% y TTI en 25%",
      "Incremento de conversión en 14% tras refactor UI",
      "Definí guía de componentes reutilizables y patrones de accesibilidad"
    ],
    projects: [
      {
        name: "Marketplace B2C",
        summary: "Refactor de catálogo y checkout, optimizando renders y carga diferida.",
        tech: ["React", "Suspense", "Code splitting", "Stripe"],
        impact: ["+12% tasa de compra", "-30% tamaño del bundle"],
        responsibilities: [
          "Diseño de arquitectura de estados y cache local",
          "Implementación de lazy routes y prefetch inteligente"
        ],
        links: { demo: "#", repo: "#" }
      },
      {
        name: "Design System",
        summary: "Sistema de tokens y librería de componentes accesibles.",
        tech: ["Storybook", "Styled-Components", "Jest", "RTL"],
        impact: ["-40% tiempo de desarrollo de nuevas vistas"],
        responsibilities: [
          "Definición de tokens de color, tipografía y espaciado",
          "Pruebas de snapshot y accesibilidad"
        ],
        links: { docs: "#" }
      }
    ]
  },
  {
    id: 2,
    title: "Frontend Developer",
    company: "Wost Solutions",
    period: "2020 – 2022",
    location: "Híbrido",
    teamSize: "8 (frontend + backend)",
    methodology: "Kanban",
    description: "Construcción de APIs y front para dashboards de analítica.",
    icon: <FullStackIcon />,
    iconMaskSrc: fullstackIcon,
    iconBg: "linear-gradient(135deg, #00cc6a, #009955)",
    skills: ["Node.js", "Express", "PostgreSQL", "React", "Docker"],
    outcomes: [
      "Tiempo de respuesta de API -45% con índices y caching",
      "Automatización CI/CD redujo incidencias de despliegue en 60%"
    ],
    projects: [
      {
        name: "Dashboard de KPIs",
        summary: "Visualización en tiempo real con sockets y filtros avanzados.",
        tech: ["React", "Socket.IO", "PostgreSQL"],
        impact: ["-50% tiempo de análisis para gerencia"],
        responsibilities: ["Diseño de modelos", "Queries optimizadas", "Gráficas interactivas"],
        links: { demo: "#" }
      }
    ]
  },
  {
    id: 3,
    title: "Software Developer",
    company: "Marea Picante",
    period: "2019 – Presente",
    location: "Remoto",
    teamSize: "Individual / colaboraciones",
    methodology: "Lean",
    description: "Desarrollo de sitios y MVPs para clientes pequeños y startups.",
    icon: <FreelanceIcon />,
    iconMaskSrc: freelanceIcon,
    iconBg: "linear-gradient(135deg, #009955, #007744)",
    skills: ["Next.js", "Tailwind", "Supabase", "Stripe"],
    outcomes: ["Sitios entregados en 2–4 semanas", "Mejoras SEO y Core Web Vitals"],
    projects: [
      {
        name: "E-commerce artesanal",
        summary: "Catálogo con pagos y panel de inventario simple.",
        tech: ["Next.js", "Stripe", "Supabase"],
        impact: ["+20% ventas en 3 meses"],
        responsibilities: ["Integración de pagos", "Panel CRUD"],
        links: { demo: "#" }
      }
    ]
  },
  {
    id: 4,
    title: "Freelance developer",
    company: "Dacax",
    period: "2017 – 2019",
    location: "On-site",
    teamSize: "10+",
    methodology: "Scrum",
    description: "Gestión de equipo y roadmap técnico para múltiples productos internos.",
    icon: <LeaderIcon />,
    iconMaskSrc: leaderIcon,
    iconBg: "linear-gradient(135deg, #007744, #005533)",
    skills: ["Liderazgo", "Arquitectura", "Mentoring", "QA"],
    outcomes: ["Reducción de bugs críticos 35%", "Time-to-market -25%"],
    projects: [
      {
        name: "Portal interno de soporte",
        summary: "Flujos de tickets y SLA con métricas de rendimiento.",
        tech: ["React", "Node", "MongoDB"],
        impact: ["SLA cumplido 95%"],
        responsibilities: ["Roadmap", "Code reviews", "KPIs"],
        links: { docs: "#" }
      }
    ]
  }
];

const ModalOverlay = styled.div`
  display: ${props => (props.$open ? 'block' : 'none')};
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.6);
  backdrop-filter: blur(6px);
  z-index: 2000;
`;

const ModalContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: min(860px, 92vw);
  max-height: 86vh;
  overflow: auto;
  border-radius: 20px;
  border: 1px solid #3C4434;
  background: linear-gradient(103deg, #0F1408 16.66%, rgba(23, 32, 9, 0.27) 81.61%);
  box-shadow: 0 20px 60px rgba(0,0,0,0.35);
  padding: 28px;
  z-index: 2001;

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

const ModalHeader = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 16px;
  margin-bottom: 16px;
`;

const CloseButton = styled.button`
  margin-left: auto;
  background: none;
  border: 1px solid rgba(255,255,255,0.18);
  color: #ffffff;
  border-radius: 10px;
  padding: 6px 10px;
  cursor: pointer;
  font-size: 14px;
  transition: all 0.2s ease;
  
  &:hover { background: rgba(255,255,255,0.12); }
`;

const TagList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: 8px 0 16px 0;
`;

const Tag = styled.span`
  display: inline-flex;
  align-items: center;
  padding: 6px 10px;
  border-radius: 999px;
  border: 1px solid rgba(185,255,102,0.35);
  color: #b9ff66;
  font-size: 12px;
  background: rgba(185,255,102,0.08);
`;

const SectionBlock = styled.div`
  margin-top: 18px;
`;

const BulletList = styled.ul`
  margin: 6px 0 0 0;
  padding-left: 18px;
  color: #cccccc;
  line-height: 1.6;
`;

const ProjectItem = styled.div`
  border-top: 1px solid rgba(255,255,255,0.08);
  padding-top: 12px;
  margin-top: 12px;
`;

const Experience = () => {
  const [selectedExp, setSelectedExp] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const openExperienceModal = (exp) => {
    setSelectedExp(exp);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedExp(null);
  };

  return (
    <ExperienceSectionWrapper>
      <Divider direction='left' />
      <Container>
        <ExperienceContent>
          <SectionHeader>
            <SectionIcon />
            <Typography 
              variant="h2" 
              color="#ffffff"
              style={{ fontFamily: "'Tilt Neon', sans-serif" }}
            >
              Mi experiencia laboral
            </Typography>
          </SectionHeader>
          
          <ExperienceGrid>
            {experienceData.map((experience, index) => (
              <ExperienceCard
                key={experience.id}
                title={experience.title}
                company={experience.company}
                period={experience.period}
                description={experience.description}
                icon={experience.icon}
                iconBg={experience.iconBg}
                iconMaskSrc={experience.iconMaskSrc}
                style={{
                  animationDelay: `${index * 0.15}s`
                }}
                onClick={() => openExperienceModal(experience)}
              />
            ))}
          </ExperienceGrid>
        </ExperienceContent>
      </Container>
      
      {/* Floating Shapes */}
      <FloatingShape 
        top="12%" 
        left="6%" 
        size="130px"
        mobileSize="70px"
        rounded
        delay="0s"
        bg="rgba(0, 255, 136, 0.04)"
      />
      
      <FloatingShape 
        bottom="18%" 
        right="8%" 
        size="110px"
        mobileSize="60px"
        delay="5s"
        bg="rgba(0, 255, 136, 0.06)"
      />
      
      <FloatingShape 
        top="55%" 
        right="4%" 
        size="90px"
        mobileSize="50px"
        rounded
        delay="8s"
        bg="rgba(0, 255, 136, 0.03)"
      />
      
      <FloatingShape 
        bottom="45%" 
        left="8%" 
        size="70px"
        mobileSize="40px"
        delay="3s"
        bg="rgba(0, 255, 136, 0.05)"
      />
      <ModalOverlay $open={modalOpen} onClick={closeModal} />
      {modalOpen && selectedExp && (
        <ModalContainer role="dialog" aria-modal="true">
          <ModalHeader>
            <Typography variant="h3" color="#ffffff" style={{ fontFamily: '"Tilt Neon"', fontSize: '1.5rem' }}>
              {selectedExp.title} · {selectedExp.company}
            </Typography>
            <CloseButton onClick={closeModal}>Cerrar</CloseButton>
          </ModalHeader>
          <Typography variant="subtitle" color="#cccccc" style={{ marginBottom: '4px' }}>
            {selectedExp.period} · {selectedExp.location} · {selectedExp.teamSize}
          </Typography>
          <Typography variant="body" color="#cccccc">
            {selectedExp.description}
          </Typography>

          <TagList>
            {selectedExp.skills?.map((s) => (<Tag key={s}>{s}</Tag>))}
          </TagList>

          {selectedExp.outcomes && (
            <SectionBlock>
              <Typography variant="h3" color="#b9ff66" style={{ fontSize: '1.1rem', fontWeight: 600 }}>Impacto clave</Typography>
              <BulletList>
                {selectedExp.outcomes.map((o, i) => (<li key={i}>{o}</li>))}
              </BulletList>
            </SectionBlock>
          )}

          {selectedExp.projects && (
            <SectionBlock>
              <Typography variant="h3" color="#b9ff66" style={{ fontSize: '1.1rem', fontWeight: 600 }}>Proyectos destacados</Typography>
              {selectedExp.projects.map((p, i) => (
                <ProjectItem key={i}>
                  <Typography variant="subtitle" color="#ffffff" style={{ fontWeight: 600 }}>{p.name}</Typography>
                  <Typography variant="body" color="#cccccc">{p.summary}</Typography>
                  <TagList>
                    {p.tech?.map((t) => (<Tag key={t}>{t}</Tag>))}
                  </TagList>
                  {p.impact && (
                    <BulletList>
                      {p.impact.map((imp, j) => (<li key={j}>{imp}</li>))}
                    </BulletList>
                  )}
                </ProjectItem>
              ))}
            </SectionBlock>
          )}
        </ModalContainer>
      )}
    </ExperienceSectionWrapper>
  );
};

export default Experience;
