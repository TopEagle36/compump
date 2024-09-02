'use client';

// @mui
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
// components
import { useSettingsContext } from 'src/components/settings';
import CreateOverview from '../create/create-overview';
import { AvatarShape } from 'src/assets/illustrations';
import { SeoIllustration } from 'src/assets/illustrations';
import ProjectCard from './project-card';

// ----------------------------------------------------------------------

export default function SalesList() {
  const settings = useSettingsContext();
  const pools = [
    {
      id: 1,
      role: 1,
      name: "First pool",
      coverUrl: "https://primary.jwwb.nl/public/l/b/m/temp-kzkawyomjmaqwtzivpfh/84d53feb-high.jpg?enable-io=true&enable=upscale&crop=900%2C1080%2Cx90%2Cy0%2Csafe&width=345&height=414",
      avatarUrl: '/assets/chains/eth-coin2.png',
      totalFollowers: 44,
      totalPosts: 34,
      totalFollowing: 23,
    },
    {
      id: 2,
      role: 1,
      name: "Second pool",
      coverUrl: "https://primary.jwwb.nl/public/l/b/m/temp-kzkawyomjmaqwtzivpfh/84d53feb-high.jpg?enable-io=true&enable=upscale&crop=900%2C1080%2Cx90%2Cy0%2Csafe&width=345&height=414",
      avatarUrl: "/assets/chains/eth-coin2.png",
      totalFollowers: 44,
      totalPosts: 34,
      totalFollowing: 23,
    },
    {
      id: 3,
      role: 1,
      name: "Third pool",
      coverUrl: "https://primary.jwwb.nl/public/l/b/m/temp-kzkawyomjmaqwtzivpfh/84d53feb-high.jpg?enable-io=true&enable=upscale&crop=900%2C1080%2Cx90%2Cy0%2Csafe&width=345&height=414",
      avatarUrl: "/assets/chains/eth-coin2.png",
      totalFollowers: 44,
      totalPosts: 34,
      totalFollowing: 23,
    },
    {
      id: 4,
      role: 1,
      name: "Forth pool",
      coverUrl: "https://primary.jwwb.nl/public/l/b/m/temp-kzkawyomjmaqwtzivpfh/84d53feb-high.jpg?enable-io=true&enable=upscale&crop=900%2C1080%2Cx90%2Cy0%2Csafe&width=345&height=414",
      avatarUrl: "/assets/chains/eth-coin2.png",
      totalFollowers: 44,
      totalPosts: 34,
      totalFollowing: 23,
    },
    {
      id: 5,
      role: 1,
      name: "First pool",
      coverUrl: "https://primary.jwwb.nl/public/l/b/m/temp-kzkawyomjmaqwtzivpfh/84d53feb-high.jpg?enable-io=true&enable=upscale&crop=900%2C1080%2Cx90%2Cy0%2Csafe&width=345&height=414",
      avatarUrl: "/assets/chains/eth-coin2.png",
      totalFollowers: 44,
      totalPosts: 34,
      totalFollowing: 23,
    },
    {
      id: 6,
      role: 1,
      name: "Second pool",
      coverUrl: "https://primary.jwwb.nl/public/l/b/m/temp-kzkawyomjmaqwtzivpfh/84d53feb-high.jpg?enable-io=true&enable=upscale&crop=900%2C1080%2Cx90%2Cy0%2Csafe&width=345&height=414",
      avatarUrl: "/assets/chains/eth-coin2.png",
      totalFollowers: 44,
      totalPosts: 34,
      totalFollowing: 23,
    },
    {
      id: 7,
      role: 1,
      name: "Third pool",
      coverUrl: "https://primary.jwwb.nl/public/l/b/m/temp-kzkawyomjmaqwtzivpfh/84d53feb-high.jpg?enable-io=true&enable=upscale&crop=900%2C1080%2Cx90%2Cy0%2Csafe&width=345&height=414",
      avatarUrl: "/assets/chains/eth-coin2.png",
      totalFollowers: 44,
      totalPosts: 34,
      totalFollowing: 23,
    }
  ]
  return (
    <Container maxWidth={settings.themeStretch ? false : 'xl'}>
      {/* <Typography variant="h4"> Page One </Typography> */}

      {/* <Box
        sx={{
          mt: 5,
          width: 1,
          height: 320,
          borderRadius: 2,
          bgcolor: (theme) => alpha(theme.palette.grey[500], 0.04),
          border: (theme) => `dashed 1px ${theme.palette.divider}`,
        }}
      /> */}
      <Grid container spacing={3}>
        <Grid xs={12} md={12}>
          <CreateOverview
            title={`Welcome to 👋 ComPump \n`}
            description={`\n Please create your meme coin! It will be listed on PancakeSwap once pool collect $10,000! We strongly recommend buying your coin as soon as it's created to secure a low price!`}
            img={<SeoIllustration />}
            action={
              <Button variant="contained" color="primary">
                Create Meme Coin
              </Button>
            }
          />
        </Grid>

      </Grid>
      <Box
        gap={3}
        display="grid"
        gridTemplateColumns={{
          xs: 'repeat(1, 1fr)',
          sm: 'repeat(2, 1fr)',
          md: 'repeat(4, 1fr)',
        }}
        sx={{
          marginTop: '32px'
        }}
      >
        {pools.map((pool) => (
          <ProjectCard key={pool.id} pool={pool} />
        ))}
      </Box>
    </Container>
  );
}
