import InstagramIcon from '@mui/icons-material/Instagram';
import {
  Box,
  Container,
  Grid,
  IconButton,
  Stack,
  Typography,
} from '@mui/material';
import TwitterIcon from '@mui/icons-material/Twitter';
import { FormattedMessage } from 'react-intl';
import { getAppConfig } from '../services/app';
import { SocialMedia } from '../types/config';
import Link from './Link';

const appConfig = getAppConfig();

export function Footer() {
  const renderIcon = (media: SocialMedia) => {
    if (media.type === 'instagram') {
      return <InstagramIcon />;
    } else if (media.type === 'twitter') {
      return <TwitterIcon />;
    }
  };

  const renderLink = (media: SocialMedia) => {
    if (media.type === 'instagram') {
      return `https://instagram.com/${media.handle}`;
    } else if (media.type === 'twitter') {
      return `https://twitter.com/${media.handle}`;
    }

    return '';
  };

  return (
    <Box py={2} sx={{ bgcolor: (theme) => theme.palette.background.paper }}>
      <Container>
       
        <Grid container justifyContent="center" alignItems="center"
          alignContent="center" spacing={2} sx={{ marginTop: 2 }}>
          <Grid item height='4' xs={12} sm={6} md={3}>
            <Typography variant="h6">MARKET</Typography>
            <Typography variant="body2">Land</Typography>
            <Typography variant="body2">House</Typography>
            <Typography variant="body2">Apartment</Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6">My Account</Typography>
            <Typography variant="body2">Profile</Typography>
            <Typography variant="body2">Favorites</Typography>
            <Typography variant="body2">History</Typography>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6">COMPANY</Typography>
            <Typography variant="body2">About</Typography>
            <Typography variant="body2">Careers</Typography>
            <Typography variant="body2">Ventures</Typography>
          </Grid>
        </Grid>

        <Grid
          container
          justifyContent="center"
          alignItems="center"
          alignContent="center"
          spacing={2}
          
          sx={{ marginTop: 4, flexDirection: { xs: 'column', sm: 'row' } }}
        >

          <Grid item>
            <Stack direction="column" alignItems="center" spacing={1}>
              <Typography variant="body1" align="center">
                <Link href="/" color="primary">
                  {appConfig.name}
                </Link>{' '}
                <FormattedMessage
                  defaultMessage="© All Rights Reserved"
                  id="is.powered.by"
                />{' '}
              </Typography>
              <Stack direction="row" spacing={1}>
                {appConfig?.social &&
                  appConfig.social.map((media, index) => (
                    <IconButton
                      key={index}
                      href={renderLink(media)}
                      LinkComponent={Link}
                      target="_blank"
                      size="small"
                    >
                      {renderIcon(media)}
                    </IconButton>
                  ))}
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}