import { Grid, Button, Paper } from '@mui/material';
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

  const steps = [
    {
      id: 1,
      title: "Primary verification",
      description: "To ensure transaction security, every buyer is required to complete the KYC process.",
    },
    {
      id: 2,
      title: "Make an offer",
      description: "If you’re interested in purchasing a property, submit an offer that will remain valid for one month.",
    },
    {
      id: 3,
      title: "For listing property",
      description: "To list your Real Estate, you need to complete a second KYC check. Basically to ensure the Real Estate are legitimate and not fraudulent.",
    },
    {
      id: 4,
      title: "Payment in CRYPTO",
      description: "Buy, sell, and invest in Real Estate with CRYPTO—enjoy lower fees, faster transactions, and exclusive rewards in a blockchain-powered ecosystem.",
    },
  ];

  return (
    <Box py={8} bgcolor="white">
    <Container maxWidth="lg">
      <Grid container alignItems="center" spacing={4}>
        <Grid item xs={12} md={4} display="flex" justifyContent="center">
          <Image
            src="/assets/images/landbox.png"
            alt="Logo"
            width={150}
            height={150}
          />
        </Grid>

        <Grid item xs={12} md={8}>
          <Typography variant="body2" color="gray">
            Join the future of real estate today.
          </Typography>
          <Typography variant="h4" fontWeight="bold" mt={1}>
            Buy, Sell, and Own RWA Real Estate seamlessly with NFTs
          </Typography>
          <Typography variant="body1" color="gray" mt={2}>
            We revolutionizing Indonesia real estate market with Blockchain
            and making real estate transactions faster, transparent, and
            accessible. By tokenizing Real Estate as NFTs, we eliminate
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

      <Grid container alignItems="center" spacing={4} mt={8}>   
        <Grid item xs={12} md={8}>
          <Typography variant="body2" color="gray">
            How does it works?
          </Typography>
          <Typography variant="h4" fontWeight="bold" mt={1}>
           Bringing Real Estate to the Blockchain Era
          </Typography>

        <Grid container spacing={3} sx={{ display: "flex", flexWrap: "wrap" }}>
          {steps.map((step) => (
            <Grid item xs={12} sm={6} md={3} key={step.id} sx={{display:"flex"}}>
              <Paper
                sx={{
                  p: 3,
                  textAlign: "left",
                  backgroundColor: "#E0E0E0",
                  borderRadius: 2,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: 1.5,
                  width: "100%",
                  maxWidth: "500px!important",
                  height: "100%",
                }}
                elevation={0}
              >
                <Box
                  sx={{
                    width: 40,
                    height: 40,
                    backgroundColor: "white",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: 1,
                    mb: 2,
                  }}
                >
                  <Typography variant="body2" fontWeight="bold">
                    Icon
                  </Typography>
                </Box>

                <Typography variant="h5" fontWeight="bold" sx={{ mb: 1 }}>
                  {step.id}
                </Typography>

                <Typography variant="h6" fontWeight="bold">
                  {step.title}
                </Typography>

                <Typography variant="body2" color="textSecondary" mt={1}>
                  {step.description}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>

        </Grid>
      </Grid>
    </Container>
  </Box>
  );
}
