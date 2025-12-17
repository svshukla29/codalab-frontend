import React, { useState } from 'react';
import { Box, Typography, Button, IconButton, Link } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import HomeIcon from '@mui/icons-material/Home';

const ContactCard = () => {
  const [addressType, setAddressType] = useState('mailing');

  const handleAddressTypeChange = (type) => {
    setAddressType(type);
  };

  return (
    <Box
     style={{marginLeft: '48%', marginTop:'-9%', marginBottom:'5%'}}
      sx={{
        border: '1px solid #f0c040',
        padding: '24px',
        maxWidth: { xs: '90%', md: '60%', lg: '34%' },
        margin: 'auto',
        mt: { xs: 2, md: 4 },
        mb: { xs: 4, md: 6 },
        position: 'relative',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          borderBottom: '1px solid #FFE9B8',
          pb: 2,
          mb: 2,
        }}
      >
        <Typography
          align="center"
          gutterBottom
          sx={{
            fontFamily: 'Abhaya Libre Bold',
            fontSize: '1.4rem',
            marginBottom: '0.35em',
          }}
        >
          CONTACT
        </Typography>
        <Box sx={{ display: 'flex', flexDirection: 'row' }}>
          <Button
            onClick={() => handleAddressTypeChange('mailing')}
            sx={{
              fontFamily: 'Abhaya Libre Bold',
              fontSize: '1.3rem',
              mr: '5%',
            }}
          >
            Mailing Address
          </Button>
          <Button
            onClick={() => handleAddressTypeChange('office')}
            sx={{
              fontFamily: 'Abhaya Libre Bold',
              fontSize: '1.3rem',
              mr: '5%',
            }}
          >
            Office Address
          </Button>
        </Box>
      </Box>

      {addressType === 'mailing' ? (
        <>
          <Typography sx={{ fontFamily: 'Abhaya Libre Bold', fontSize: '1.4rem' }} gutterBottom>
            Department Of Computer Science And Engineering
          </Typography>
          <Typography sx={{ fontFamily: 'Abhaya Libre Bold', fontSize: '1.4rem' }} gutterBottom>
            Indian Institute Of Technology (IIT) Roorkee
          </Typography>
          <Typography sx={{ fontFamily: 'Abhaya Libre Bold', fontSize: '1.4rem' }} gutterBottom>
            Roorkee 247667, Uttarakhand, India
          </Typography>
        </>
      ) : (
        <>
          <Typography sx={{ fontFamily: 'Abhaya Libre Bold', fontSize: '1.4rem' }} gutterBottom>
            Room No. N-315
          </Typography>
          <Typography sx={{ fontFamily: 'Abhaya Libre Bold', fontSize: '1.4rem' }} gutterBottom>
            Department Of Computer Science And Engineering
          </Typography>
          <Typography sx={{ fontFamily: 'Abhaya Libre Bold', fontSize: '1.4rem' }} gutterBottom>
            Indian Institute Of Technology (IIT) Roorkee
          </Typography>
        </>
      )}

      <Box sx={{ borderBottom: '1px solid #f0c040', pb: 2, mb: 3 }} />

      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          borderBottom: '1px solid #f0c040',
          pb: 2,
          mb: 2,
          flexWrap: 'wrap',
        }}
      >
        <Typography variant="body1" sx={{ flexGrow: 1, fontSize: '1.4rem' }}>
          (+91)-1332-284815 (O)
        </Typography>
        <IconButton>
          <PhoneIcon />
        </IconButton>
      </Box>

      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          borderBottom: '1px solid #f0c040',
          pb: 2,
          mb: 2,
          flexWrap: 'wrap',
        }}
      >
        <Box sx={{ flexGrow: 1 }}>
          <Typography
            variant="body1"
            sx={{
              fontSize: '1.4rem',
              fontFamily: 'Abhaya Libre Bold',
            }}
          >
            <a href="mailto:Sudip.Roy@Cs.iitr.Ac.In" style={{ textDecoration: 'none', color: 'inherit' }}>
              Mail1
            </a>
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: '1.4rem',
              fontFamily: 'Abhaya Libre Bold',
            }}
          >
            <a href="mailto:Sudiproy.Bkp@Gmail.Com" style={{ textDecoration: 'none', color: 'inherit' }}>
              Mail2
            </a>
          </Typography>
        </Box>
        <IconButton>
          <EmailIcon />
        </IconButton>
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
        <Link href="https://www.iitr.ac.in/~CSE/Sudip_Roy" target="_blank" rel="noopener" underline="none">
          <Typography
            variant="body1"
            sx={{
              fontSize: '1.5rem',
              fontFamily: 'Abhaya Libre Bold',
            }}
          >
            Sudip Roy (iitr.Ac.In)
          </Typography>
        </Link>
        <IconButton>
          <HomeIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default ContactCard;
