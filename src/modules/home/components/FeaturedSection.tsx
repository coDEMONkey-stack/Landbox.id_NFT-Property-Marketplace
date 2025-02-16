import { Grid, Button } from '@mui/material';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { SectionItem } from '../../../types/config';
import { AssetCardWithData } from '../../nft/components/AssetCardWidthData';
import CollectionCardWithData from './CollectionCardWithData';
import Image from "next/image";


interface Props {
  title: React.ReactNode | React.ReactNode[];
  items: SectionItem[];
}

export function FeaturedSection({ title, items }: Props) {
  const renderItems = () => {
    return items.map((item, index: number) => {
      if (item.type === 'asset' && item.tokenId !== undefined) {
        return (
          <Grid item xs={6} sm={3} key={index}>
            <AssetCardWithData
              address={item.contractAddress}
              id={item.tokenId}
            />
          </Grid>
        );
      } else if (item.type === 'collection') {
        return (
          <Grid item xs={12} sm={6} key={index}>
            <CollectionCardWithData
              contractAddress={item.contractAddress}
              chainId={item.chainId}
              title={item.title}
              backgroundImageUrl={item.backgroundImageUrl}
            />
          </Grid>
        );
      }
    });
  };

  return (
    <Box py={8} bgcolor="white">
    <Container maxWidth="lg">
      <Grid container alignItems="center" spacing={4}>
        {/* Logo / Image */}
        <Grid item xs={12} md={4} display="flex" justifyContent="center">
          <Image
            src="/assets/images/landbox.png"
            alt="Logo"
            width={150}
            height={150}
          />
        </Grid>

        {/* Text Content */}
        <Grid item xs={12} md={8}>
          <Typography variant="body2" color="gray">
            Join the future of real estate today.
          </Typography>
          <Typography variant="h4" fontWeight="bold" mt={1}>
            Buy, Sell, and Own RWA properties seamlessly with NFTs
          </Typography>
          <Typography variant="body1" color="gray" mt={2}>
            We revolutionizing Indonesia real estate market with Blockchain
            and making real estate transactions faster, transparent, and
            accessible. By tokenizing properties as NFTs, we eliminate
            lengthy paperwork, reduce costs, and ensure secure ownership
            records on the blockchain.
          </Typography>

          <Button
            variant="contained"
            sx={{
              mt: 3,
              backgroundColor: "black",
              color: "white",
              "&:hover": { backgroundColor: "#333" },
            }}
          >
            GET STARTED
          </Button>
        </Grid>
      </Grid>
    </Container>
  </Box>
  );
}
