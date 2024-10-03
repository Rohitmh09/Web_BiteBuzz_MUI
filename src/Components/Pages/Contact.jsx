import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React from "react";
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
import BusinessIcon from '@mui/icons-material/Business';

export default function Contact() {
  return (
    <>
      <Box sx={{ my: 5, ml: { xs: 2, md: 10 } }}>
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            mb: 2,
          }}
        >
          Contact Us
        </Typography>
       <Box sx={{fontFamily: "sans-serif", fontSize: "18px" , "& p": {mb: 1}}}>

        <p >
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur ab
          corrupti labore. Exercitationem quod ipsam possimus sit officia odit
          mollitia est molestiae dicta reprehenderit deleniti hic animi quidem
          voluptate soluta ut itaque dignissimos quasi voluptatibus assumenda, a
          nostrum fugit temporibus iure. Odit eaque ipsum voluptatem, dolorem,
          sed dolorum, aspernatur in exercitationem ipsam dicta accusamus
          itaque? Sapiente quis reprehenderit voluptates animi neque nostrum in
        </p>
         <p> iusto non voluptate eius enim officia reiciendis dicta
          error repellendus dolorem quisquam qui vel nobis omnis veniam, nemo
          quasi? Ratione sapiente quaerat voluptatibus iusto unde, molestiae
          rerum id omnis quibusdam libero suscipit vero nemo, culpa quia. 
          </p>
       </Box>
      </Box>
      <Box padding={2} marginBottom={42} sx={{m:{xs:2, lg: 3 },maxWidth:600}}>
        <TableContainer component={Paper} >
          <Table aria-label="contact table">
            <TableHead>
              <TableRow>
                <TableCell sx={{fontFamily: "sans-serif", fontSize: "18px", fontWeight: "bold", color: "white", backgroundColor: "#1c3f78", textAlign: "center"}}>Contact Details</TableCell>
              </TableRow>
            </TableHead>
            <TableBody >
              <TableRow >
                <TableCell sx={{ alignItems: "center", display: "flex",}}>
                  <SupportAgentIcon sx={{marginX:2, color:"gray"}} /> +1800-14-6566 (tollfree)
                </TableCell>
                <TableCell sx={{ alignItems: "center", display: "flex",}}>
                  <EmailIcon sx={{marginX:2, color:"gray"}} />  info@restaurant.com
                </TableCell>
                <TableCell sx={{ alignItems: "center", display: "flex",}}>
                  <CallIcon sx={{marginX:2, color:"gray"}} />  +91 1155663322 (tollfree)
                </TableCell>
                <TableCell sx={{ alignItems: "center", display: "flex",}}>
                  <BusinessIcon sx={{marginX:2, color:"gray"}} />  #123, 1st Floor, Mind Building, Head Street, City:Human
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </>
  );
}
