'use client';
import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Chip from '@mui/material/Chip';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Link from '@mui/material/Link';
import CodeIcon from '@mui/icons-material/Code';
import WebIcon from '@mui/icons-material/Web';
import ApiIcon from '@mui/icons-material/Api';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import BuildIcon from '@mui/icons-material/Build';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LocationOnIcon from '@mui/icons-material/LocationOn';

export default function Home() {
  return (
    <Box sx={{ minHeight: '100vh', bgcolor: 'background.default' }}>
      {/* Hero Section */}
      <Container maxWidth="lg">
        <Box
          sx={{
            pt: { xs: 16, md: 20 },
            pb: { xs: 8, md: 12 },
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
          }}
        >
          <Avatar
            alt="Cristhian Yair Lara Reyes"
            src="/images/MIlos.jpg"
            sx={{
              width: { xs: 120, md: 150 },
              height: { xs: 120, md: 150 },
              mb: 3,
              border: '4px solid',
              borderColor: 'primary.main',
            }}
          />

          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: '2.5rem', md: '3.5rem' },
              fontWeight: 700,
              mb: 2,
              background: (theme) =>
                theme.palette.mode === 'dark'
                  ? 'linear-gradient(45deg, #3b82f6 30%, #8b5cf6 90%)'
                  : 'linear-gradient(45deg, #2563eb 30%, #7c3aed 90%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Cristhian Yair Lara Reyes
          </Typography>

          <Typography
            variant="h5"
            color="text.secondary"
            sx={{ mb: 3, fontWeight: 400 }}
          >
            Ingeniero de Software
          </Typography>

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 4 }}>
            <LocationOnIcon sx={{ color: 'text.secondary', fontSize: 20 }} />
            <Typography color="text.secondary">
              Puebla, México
            </Typography>
          </Box>

          <Typography
            variant="h6"
            color="text.secondary"
            sx={{
              maxWidth: '800px',
              mb: 4,
              lineHeight: 1.7,
              fontWeight: 300,
            }}
          >
            Con 2 años de experiencia en desarrollo de software, me especializo en crear
            <Box component="strong" sx={{ color: 'primary.main', fontWeight: 600 }}> soluciones tecnológicas específicas</Box> para
            cada cliente. Desarrollador Full Stack dedicado a construir aplicaciones
            eficientes y efectivas utilizando tecnologías modernas.
          </Typography>

          <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
            <Button
              variant="contained"
              size="large"
              href="#contacto"
              sx={{ px: 4 }}
            >
              Contactar
            </Button>
            <Button
              variant="outlined"
              size="large"
              href="#servicios"
              sx={{ px: 4 }}
            >
              Ver Servicios
            </Button>
          </Box>
        </Box>

        {/* Servicios Section */}
        <Box id="servicios" sx={{ py: { xs: 6, md: 10 } }}>
          <Typography
            variant="h3"
            sx={{
              textAlign: 'center',
              mb: 6,
              fontWeight: 700,
            }}
          >
            Servicios
          </Typography>

          <Grid container spacing={3}>
            {[
              {
                icon: <WebIcon sx={{ fontSize: 40 }} />,
                title: 'Desarrollo Web',
                description: 'Aplicaciones web modernas y responsivas con React, Next.js y tecnologías actuales.',
              },
              {
                icon: <CodeIcon sx={{ fontSize: 40 }} />,
                title: 'Sistemas a Medida',
                description: 'Soluciones personalizadas adaptadas a las necesidades específicas de tu negocio.',
              },
              {
                icon: <ApiIcon sx={{ fontSize: 40 }} />,
                title: 'APIs y Backend',
                description: 'Desarrollo de APIs robustas con Node.js, PHP y Python para tus aplicaciones.',
              },
              {
                icon: <SmartToyIcon sx={{ fontSize: 40 }} />,
                title: 'Integración de IA',
                description: 'Implementación de modelos de IA como ChatGPT, Gemini, Claude y automatizaciones con N8N.',
              },
              {
                icon: <BuildIcon sx={{ fontSize: 40 }} />,
                title: 'Consultoría Tecnológica',
                description: 'Asesoramiento técnico para elegir las mejores soluciones para tu proyecto.',
              },
              {
                icon: <SupportAgentIcon sx={{ fontSize: 40 }} />,
                title: 'Mantenimiento y Soporte',
                description: 'Soporte continuo y mantenimiento de aplicaciones existentes.',
              },
            ].map((service, index) => (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'all 0.3s ease',
                    border: '1px solid',
                    borderColor: 'divider',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: (theme) =>
                        theme.palette.mode === 'dark'
                          ? '0 12px 24px rgba(59, 130, 246, 0.3)'
                          : '0 12px 24px rgba(37, 99, 235, 0.2)',
                      borderColor: 'primary.main',
                    },
                  }}
                >
                  <CardContent sx={{ flexGrow: 1, p: 3 }}>
                    <Box sx={{ color: 'primary.main', mb: 2 }}>
                      {service.icon}
                    </Box>
                    <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                      {service.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {service.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Tecnologías Section */}
        <Box id="tecnologias" sx={{ py: { xs: 6, md: 10 } }}>
          <Typography
            variant="h3"
            sx={{
              textAlign: 'center',
              mb: 6,
              fontWeight: 700,
            }}
          >
            Tecnologías y Habilidades
          </Typography>

          <Grid container spacing={4}>
            <Grid size={{ xs: 12, md: 6 }}>
              <Card sx={{ p: 3, border: '1px solid', borderColor: 'divider' }}>
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, mb: 3 }}>
                  Frontend
                </Typography>
                <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                  {['React', 'Next.js', 'JavaScript', 'TypeScript', 'Material-UI', 'Tailwind CSS'].map((tech) => (
                    <Chip
                      key={tech}
                      label={tech}
                      color="primary"
                      variant="outlined"
                      sx={{ mb: 1 }}
                    />
                  ))}
                </Stack>
              </Card>
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <Card sx={{ p: 3, border: '1px solid', borderColor: 'divider' }}>
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, mb: 3 }}>
                  Backend
                </Typography>
                <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                  {['Node.js', 'PHP', 'Python', 'Express'].map((tech) => (
                    <Chip
                      key={tech}
                      label={tech}
                      color="primary"
                      variant="outlined"
                      sx={{ mb: 1 }}
                    />
                  ))}
                </Stack>
              </Card>
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <Card sx={{ p: 3, border: '1px solid', borderColor: 'divider' }}>
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, mb: 3 }}>
                  Bases de Datos
                </Typography>
                <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                  {['MySQL', 'MongoDB', 'PostgreSQL'].map((tech) => (
                    <Chip
                      key={tech}
                      label={tech}
                      color="primary"
                      variant="outlined"
                      sx={{ mb: 1 }}
                    />
                  ))}
                </Stack>
              </Card>
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <Card sx={{ p: 3, border: '1px solid', borderColor: 'divider' }}>
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, mb: 3 }}>
                  IA y Herramientas
                </Typography>
                <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                  {['ChatGPT', 'Claude', 'Gemini', 'N8N', 'Git', 'Docker', 'AWS'].map((tech) => (
                    <Chip
                      key={tech}
                      label={tech}
                      color="secondary"
                      variant="outlined"
                      sx={{ mb: 1 }}
                    />
                  ))}
                </Stack>
              </Card>
            </Grid>
          </Grid>
        </Box>

        {/* Contacto Section */}
        <Box id="contacto" sx={{ py: { xs: 6, md: 10 } }}>
          <Typography
            variant="h3"
            sx={{
              textAlign: 'center',
              mb: 6,
              fontWeight: 700,
            }}
          >
            Contacto
          </Typography>

          <Card sx={{ maxWidth: 600, mx: 'auto', p: 4, border: '1px solid', borderColor: 'divider' }}>
            <Stack spacing={3}>
              <Typography variant="h6" textAlign="center" color="text.secondary">
                ¿Tienes un proyecto en mente? ¡Hablemos!
              </Typography>

              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <EmailIcon sx={{ color: 'primary.main' }} />
                <Box>
                  <Typography variant="body2" color="text.secondary">
                    Email
                  </Typography>
                  <Link
                    href="mailto:contacto@nexuslara.com"
                    sx={{ textDecoration: 'none', color: 'text.primary' }}
                  >
                    contacto@nexuslara.com
                  </Link>
                </Box>
              </Box>

              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <PhoneIcon sx={{ color: 'primary.main' }} />
                <Box>
                  <Typography variant="body2" color="text.secondary">
                    Teléfono
                  </Typography>
                  <Link
                    href="tel:----"
                    sx={{ textDecoration: 'none', color: 'text.primary' }}
                  >
                    Próximamente disponible
                  </Link>
                </Box>
              </Box>

              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <LocationOnIcon sx={{ color: 'primary.main' }} />
                <Box>
                  <Typography variant="body2" color="text.secondary">
                    Ubicación
                  </Typography>
                  <Typography>Puebla, México</Typography>
                </Box>
              </Box>

              <Box sx={{ pt: 2 }}>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                  Redes Sociales
                </Typography>
                <Stack direction="row" spacing={2}>
                  <Link
                    href="https://github.com"
                    target="_blank"
                    rel="noopener"
                    sx={{ color: 'text.primary' }}
                  >
                    <GitHubIcon sx={{ fontSize: 32 }} />
                  </Link>
                  <Link
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener"
                    sx={{ color: 'text.primary' }}
                  >
                    <LinkedInIcon sx={{ fontSize: 32 }} />
                  </Link>
                </Stack>
              </Box>
            </Stack>
          </Card>
        </Box>

        {/* Footer */}
        <Box
          component="footer"
          sx={{
            py: 4,
            textAlign: 'center',
            borderTop: '1px solid',
            borderColor: 'divider',
            mt: 8,
          }}
        >
          <Typography variant="body2" color="text.secondary">
            © {new Date().getFullYear()} Cristhian Yair Lara Reyes. Todos los derechos reservados.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
