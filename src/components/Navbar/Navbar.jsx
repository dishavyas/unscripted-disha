import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const navItems = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Services",
    link: "/#services",
  },
  {
    name: "Portfolio",
    link: "/portfolio",
  },
  
  {
    name: "About",
    link: "/about",
  },
  {
    name: "Testimonials",
    link: "/#testimonials",
  },
];


export default function Navbar() {
  const [open, setOpen] = useState(false);

  // 👉 Replace this with your own WhatsApp number
  const whatsappLink =
    "https://wa.me/919876543210?text=Hi%20Unscripted%20Disha!%20I%20want%20to%20buy%20your%20AI%20Reel%20package.";

  return (
    <>
      <AppBar
  position="absolute"
  elevation={0}
  sx={{
    top: 18,
    left: "50%",
    transform: "translateX(-50%)",
    width: "92%",
    maxWidth: "1450px",

    background:
      "rgba(255,255,255,0.12)",

    backdropFilter: "blur(20px)",

    WebkitBackdropFilter:
      "blur(20px)",

    border:
      "1px solid rgba(255,255,255,0.25)",

    borderRadius: "50px",

    boxShadow:
      "0 15px 40px rgba(20,10,50,.15)",
  }}
>
        <Toolbar
          sx={{
            px: 3,
            py: 1,
          }}
        >
          {/* Logo */}
       <Typography
  sx={{
    flexGrow: 1,
    fontWeight: 900,
    fontSize: "25px",
    color: "#fff",
  }}
>
  Unscripted{" "}
  <span style={{ color: "#ff7b52" }}>
    Disha
  </span>
</Typography>

          {/* Desktop Menu */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              gap: 1,
              alignItems: "center",
            }}
          >
            {navItems.map((item) => (
              <Button
                key={item.name}
                href={item.link}
                sx={{
                     color: "#fff",
    fontWeight: 700,

                  px: 2,
                  textTransform: "none",
                  transition: ".3s",

                  "&:hover": {
                    color: "#FF7A3D",
                    transform: "translateY(-2px)",
                    background: "transparent",
                  },
                }}
              >
                {item.name}
              </Button>
            ))}

            <Button
              variant="contained"
              startIcon={<WhatsAppIcon />}
              href={whatsappLink}
              target="_blank"
              sx={{
                ml: 2,
                bgcolor: "#25D366",
                color: "#fff",
                borderRadius: "40px",
                px: 3.5,
                py: 1.3,
                fontWeight: 700,
                textTransform: "none",
                boxShadow: "0 12px 25px rgba(37,211,102,.35)",

                "&:hover": {
                  bgcolor: "#1EBE5B",
                  transform: "translateY(-3px)",
                  boxShadow: "0 18px 35px rgba(37,211,102,.45)",
                },
              }}
            >
              Order Now
            </Button>
          </Box>

          {/* Mobile Menu Button */}
          <IconButton
            sx={{
              display: { xs: "flex", md: "none" },
              color: "#222",
            }}
            onClick={() => setOpen(true)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={open}
        onClose={() => setOpen(false)}
        PaperProps={{
          sx: {
            width: 280,
            background: "rgba(255,255,255,.92)",
            backdropFilter: "blur(20px)",
          },
        }}
      >
        <Box sx={{ pt: 3 }}>
          <Typography
            variant="h5"
            align="center"
            sx={{
              fontWeight: 800,
              mb: 3,
            }}
          >
            Unscripted{" "}
            <Box component="span" sx={{ color: "#FF7A3D" }}>
              Disha
            </Box>
          </Typography>

          <List>
            {navItems.map((item) => (
              <ListItem key={item.name} disablePadding>
                <ListItemButton
                  component="a"
                  href={item.link}
                  onClick={() => setOpen(false)}
                >
                  <ListItemText primary={item.name} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>

          <Box p={3}>
            <Button
              fullWidth
              variant="contained"
              startIcon={<WhatsAppIcon />}
              href={whatsappLink}
              target="_blank"
              sx={{
                bgcolor: "#25D366",
                borderRadius: "40px",
                py: 1.5,
                fontWeight: 700,

                "&:hover": {
                  bgcolor: "#1EBE5B",
                },
              }}
            >
              Order Now
            </Button>
          </Box>
        </Box>
      </Drawer>
    </>
  );
}