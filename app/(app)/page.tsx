'use client'

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Box, Title, Flex, NavLink, Button, Text, Container, Anchor } from '@mantine/core';
import {
  RocketLogo,
  CopmArch,
  LaunchNotifications,
  FavoriteMissions,
  GitHubLogo,
  MailLogo,
  miniTwitterLogo,
  miniGitHubLogo
} from '@/components/icon/icons';
import classes from './page.module.css';

const HomePage = () => {
  const phrases = [
    "Monitoring SpaceX's journey to the stars",
    "Tracking the future of space exploration",
    "Your window to the cosmos"
  ];

  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  const TYPING_SPEED = 70;
  const DELETING_SPEED = 30;
  const PAUSE_END_OF_LINE = 1250;
  const PAUSE_AFTER_DELETE = 1000;

  useEffect(() => {
    const targetPhrase = phrases[currentPhraseIndex];
    let timerId;

    const handleTyping = () => {
      setCurrentText((prevText) => {
        const nextChar = targetPhrase[prevText.length];
        return prevText + nextChar;
      });
    };

    const handleDeleting = () => {
      setCurrentText((prevText) => {
        return prevText.slice(0, -1);
      });
    };

    if (!isDeleting) {
      if (currentText.length < targetPhrase.length) {
        timerId = setTimeout(handleTyping, TYPING_SPEED);
      } else {
        timerId = setTimeout(() => {
          setIsDeleting(true);
        }, PAUSE_END_OF_LINE);
      }
    } else {
      if (currentText.length > 0) {
        timerId = setTimeout(handleDeleting, DELETING_SPEED);
      } else {
        timerId = setTimeout(() => {
          setIsDeleting(false);
          setCurrentPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
        }, PAUSE_AFTER_DELETE);
      }
    }

    return () => clearTimeout(timerId);

  }, [currentText, isDeleting, currentPhraseIndex, phrases]);


  return (
    <Box>
      {/* Header */}
      <Flex component='header' className={classes.header} >
        <Flex align="center">
          <Box className={classes.rocketIcon}>
             {RocketLogo}
          </Box>
          <Title order={3} className={classes.headerTitle}>
            Space Launch Tracker
          </Title>
        </Flex>

        <Flex component="nav" className={classes.navLinksContainer} align="center">
           <NavLink
             component={Link}
             href="/"
             label="Home"
             className={classes.navLink}
           />
           <NavLink
             component={Link}
             href="/launches"
             label="Launches"
             className={classes.navLink}
           />
            <NavLink
             component={Link}
             href="/favorites"
             label="Favorites"
             className={classes.navLink}
           />
            <NavLink
             component={Link}
             href="/about"
             label="About"
             className={classes.navLink}
           />
        </Flex>

        <Box className={classes.mobileMenuButton}>
           <Button>Menu</Button>
        </Box>
      </Flex>

      {/* Main Content */}
      <Box component="main">
        <section className={classes.heroSection}>
            <div id="stars-background" className={classes.starsBackground}></div>

            <div className={classes.heroContent}>
                <Title order={1} className={classes.heroTitle}>
                  Explore The Final Frontier
                </Title>
                <Box className={classes.textAnimationArea}>
                     <Text component='span' className={classes.textAnimationText}>{currentText}</Text>
                     <Text component='span' className={classes.typingCursor}>|</Text>
                </Box>
                <Text className={classes.heroDescription}>
                  Your comprehensive resource for tracking SpaceX launches in real-time. Explore mission details, view launch statistics, and never miss another historic moment in space exploration.
                </Text>
                <Button component={Link} href="/launches" className={classes.exploreButton}>
                    Explore Launches
                </Button>
            </div>

            <div className={classes.featureBlocksGridContainer}>
               <Box className={classes.featureCard}>
                   <Box className={classes.featureIconContainer}>
                       {CopmArch}
                   </Box>
                   <Title order={4} className={classes.featureCardTitle}>
                       Comprehensive Archive
                   </Title>
                   <Text className={classes.featureCardDescription}>
                       Access detailed information about historical and upcoming SpaceX launches.
                   </Text>
               </Box>

               <Box className={classes.featureCard}>
                   <Box className={classes.featureIconContainer}>
                       {LaunchNotifications}
                   </Box>
                   <Title order={4} className={classes.featureCardTitle}>
                       Launch Notifications
                   </Title>
                   <Text className={classes.featureCardDescription}>
                       Stay updated with notifications for upcoming launches and mission developments.
                   </Text>
               </Box>

                <Box className={classes.featureCard}>
                   <Box className={classes.featureIconContainer}>
                       {FavoriteMissions}
                   </Box>
                   <Title order={4} className={classes.featureCardTitle}>
                       Favorite Missions
                   </Title>
                   <Text className={classes.featureCardDescription}>
                       Mark your favorite launches and create a personalized collection of space missions.
                   </Text>
               </Box>
            </div>
        </section>

         <section className={classes.aboutSection}>
             <Container className={classes.aboutContent} fluid={false}>
                 <Title order={2} className={classes.aboutTitle}>
                     About the Developer
                 </Title>
                 <Text className={classes.aboutDescription}>
                     This application was built as a learning project and portfolio piece by a passionate space enthusiast and developer. The data is sourced from the SpaceX API, providing reliable and up-to-date information about launches.
                 </Text>
                 <Flex className={classes.socialLinks}>
                       <Anchor
                         component={Link}
                         href="https://github.com/Web-Zefir"
                         className={classes.socialLink}
                         target="_blank"
                         rel="noopener noreferrer"
                       >
                           {GitHubLogo}
                       </Anchor>

                       <Anchor
                         component={Link}
                         href="mailto:mikhaylov.1313@gmail.com"
                         className={classes.socialLink}
                       >
                           {MailLogo}
                       </Anchor>
                 </Flex>
                  <Button component={Link} href="/launches" className={classes.startExploringButton}>
                       Start Exploring
                  </Button>
             </Container>
         </section>

      </Box>

      {/* Footer */}
      <Box component="footer" className={classes.footerSection}>
           <Container className={classes.footerContent} fluid={false}>
              <div className={classes.footerGrid}>
                 <div>
                     <div className={classes.footerLogoContainer}>
                        <Box className={classes.rocketIcon}>
                            {RocketLogo}
                        </Box>
                         <Title order={4} className={classes.footerLogoTitle}>Space Launch Tracker</Title>
                     </div>
                     <Text className={classes.footerDescription}>
                          Your comprehensive resource for tracking SpaceX launches in real-time.
                     </Text>
                     <Flex className={classes.footerSocialLinks}>
                         <Anchor
                           component={Link}
                           href="#"
                           className={classes.footerSocialLink}
                           target="_blank"
                           rel="noopener noreferrer"
                         >
                              {miniTwitterLogo}
                         </Anchor>
                          <Anchor
                            component={Link}
                            href="https://github.com/Web-Zefir"
                            className={classes.footerSocialLink}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                              {miniGitHubLogo}
                         </Anchor>
                          <Anchor
                            component={Link}
                            href="mailto:mikhaylov.1313@gmail.com"
                            className={classes.footerSocialLink}
                          >
                              {MailLogo}
                         </Anchor>
                     </Flex>
                 </div>

                 <div>
                    <Title order={5} className={classes.footerLinksColumnTitle}>Quick Links</Title>
                    <ul className={classes.footerLinksList}>
                        <li><Anchor component={Link} href="/">Home</Anchor></li>
                        <li><Anchor component={Link} href="/launches">Launches</Anchor></li>
                        <li><Anchor component={Link} href="/favorites">Favorites</Anchor></li>
                        <li><Anchor component={Link} href="/about">About</Anchor></li>
                    </ul>
                 </div>

                 <div>
                    <Title order={5} className={classes.footerLinksColumnTitle}>Resources</Title>
                     <ul className={classes.footerLinksList}>
                         <li>
                           <Anchor
                             component={Link}
                             href="https://spacex-api.fly.dev/graphql"
                             target='_blank'
                             rel="noopener noreferrer"
                           >
                             SpaceX API
                           </Anchor>
                         </li>
                         <li><Anchor component={Link} href="#">NASA Resources</Anchor></li>
                         <li><Anchor component={Link} href="#">Space News</Anchor></li>
                         <li><Anchor component={Link} href="mailto:mikhaylov.1313@gmail.com">Contact Developer</Anchor></li>
                     </ul>
                 </div>
              </div>

              <div className={classes.footerBottom}>
                  <Text className={classes.footerCopyright}>
                       © 2025 Space Launch Tracker. Data provided by SpaceX API. This is a learning project.
                  </Text>
                  <Flex className={classes.footerPolicyLinks}>
                     <Anchor component={Link} href="#" className={classes.footerPolicyLink}>Privacy Policy</Anchor>
                     <Anchor component={Link} href="#" className={classes.footerPolicyLink}>Terms of Service</Anchor>
                  </Flex>
              </div>

           </Container>
      </Box>

    </Box>
  );
};

export default HomePage;