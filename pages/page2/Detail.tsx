import React, { useState } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  Typography,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions
} from "@mui/material";
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer 
} from "recharts";
import houseImage from "../../assets/house.jpg";

const priceHistoryData = [
  { date: "Feb 11", price: 1.7 },
  { date: "Feb 12", price: 1.8 },
  { date: "Feb 13", price: 1.9 },
  { date: "Feb 14", price: 2.0 },
];

const initialOffers = [
  { id: 1, price: "2M LANDX", idr: "2,000,000,000", expiration: "Feb 15, 2025", from: "Amisha" },
  { id: 2, price: "1.9M LANDX", idr: "1,900,000,000", expiration: "Feb 15, 2025", from: "Angga" },
  { id: 3, price: "1.8M LANDX", idr: "1,800,000,000", expiration: "Feb 15, 2025", from: "Ilham" },
  { id: 4, price: "1.7M LANDX", idr: "1,700,000,000", expiration: "Feb 15, 2025", from: "Zahra" },
  { id: 5, price: "1.95M LANDX", idr: "1,950,000,000", expiration: "Feb 15, 2025", from: "Sasa" },

];

export default function RealEstateDashboard() {
  const [offers, setOffers] = useState(initialOffers);
  const [open, setOpen] = useState(false);
  const [bidAmount, setBidAmount] = useState("");

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  
  const handleSubmit = () => {
    if (bidAmount && parseFloat(bidAmount) > 0) {
      const bidInIDR = parseFloat(bidAmount) * 1000000000;
      const newOffer = {
        id: offers.length + 1,
        price: `${bidAmount}M LANDX`,
        idr: bidInIDR.toLocaleString("id-ID"),
        expiration: "Feb 15, 2025",
        from: "You"
      };
      setOffers([newOffer, ...offers]);
      setBidAmount("");
      handleClose();
    }
  };

  const handleAccept = (id) => {
    setOffers(offers.filter(offer => offer.id !== id));
    alert("Offer accepted!");
  };

  const handleReject = (id) => {
    setOffers(offers.filter(offer => offer.id !== id));
  };

  return (
    <Box p={3}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Card>
            <img src={houseImage} alt="House" width="100%" height={250} style={{ objectFit: "cover" }} />
            <CardContent>
              <Typography variant="h6">Cluster Anggrek Tipe B</Typography>
              <Typography variant="body2">Owner by: Investor</Typography>
              <Typography variant="h6">2M LANDX</Typography>
              <Button variant="contained" fullWidth onClick={handleOpen}>Offer</Button>
            </CardContent>
          </Card>
        </Grid>
        
        <Grid item xs={12} md={8}>
          <Card>
            <CardContent>
              <Typography variant="h6">Description</Typography>
              <Typography variant="body2">
                Rumah ini dirancang untuk memberikan kenyamanan maksimal bagi keluarga muda.
              </Typography>
              <ul>
                <li>SHM</li>
                <li>LT 60</li>
                <li>LB 90</li>
                <li>2 Lantai</li>
                <li>1 Kamar Tidur</li>
                <li>1 Kamar Mandi</li>
                <li>Listrik 1300 VA</li>
                <li>Sumber Air Tanah</li>
                <li>Hadap Utara</li>
              </ul>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      
      <Grid container spacing={3} mt={2}>
        <Grid item xs={12} md={6}>
          <Paper>
            <Typography variant="h6" p={2}>Offers</Typography>
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Price</TableCell>
                    <TableCell>IDR Price</TableCell>
                    <TableCell>Expiration</TableCell>
                    <TableCell>From</TableCell>
                    <TableCell>Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {offers.map((offer) => (
                    <TableRow key={offer.id}>
                      <TableCell>{offer.price}</TableCell>
                      <TableCell>{offer.idr}</TableCell>
                      <TableCell>{offer.expiration}</TableCell>
                      <TableCell>{offer.from}</TableCell>
                      <TableCell>
                        <Button color="success" onClick={() => handleAccept(offer.id)}>Accept</Button>
                        <Button color="error" onClick={() => handleReject(offer.id)}>Reject</Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper>
            <Typography variant="h6" p={2}>Price History</Typography>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={priceHistoryData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="price" stroke="#8884d8" />
              </LineChart>
            </ResponsiveContainer>
          </Paper>
        </Grid>
      </Grid>
      
      {/* Dialog for Bidding */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Place a Bid</DialogTitle>
        <DialogContent>
          <TextField 
            autoFocus
            margin="dense"
            label="Bid Amount"
            type="number"
            fullWidth
            value={bidAmount}
            onChange={(e) => setBidAmount(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary">Cancel</Button>
          <Button onClick={handleSubmit} variant="contained">Submit Bid</Button>
        </DialogActions>
          </Dialog>
    </Box>
  );
}
