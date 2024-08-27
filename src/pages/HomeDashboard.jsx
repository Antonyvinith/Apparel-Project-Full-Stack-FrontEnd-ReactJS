import React from "react";
import Sidebar from "../components/Sidebar";
import Navebar from "../components/Navebar";
import {Box, Stack } from "@mui/material";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import CardContent from '@mui/material/CardContent';
import Card from '@mui/material/Card';
import "../Styling/SidebarStyle.css"

export default function HomeDashboard(){
    return <>
    <Navebar />
    <Box height={40} />
    <Box sx={{ display: "flex" }} className="pageBack">
        <Sidebar />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <Grid container spacing={2}>

                <Grid item xs={8}>

                    <Stack spacing={2} direction="row">

                        <Card sx={{ maxWidth: 49 + "%", height: 140 }}>
                            {/* <CardMedia
                                    component="img"
                                    alt="green iguana"
                                    height="140"
                                    image="/static/images/cards/contemplative-reptile.jpg"
                                /> */}
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Lizard
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000
                                    species, ranging across all continents except Antarctica
                                </Typography>
                            </CardContent>
                            {/* <CardActions>
                                    <Button size="small">Share</Button>
                                    <Button size="small">Learn More</Button>
                                </CardActions> */}
                        </Card>

                        <Card sx={{ maxWidth: 49 + "%", height: 140 }}>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Lizard
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000
                                    species, ranging across all continents except Antarctica
                                </Typography>
                            </CardContent>
                        </Card>

                    </Stack>

                </Grid>

                <Grid item xs={4}>

                    <Stack spacing={2}>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Lizard
                                </Typography>
                            </CardContent>
                        </Card>

                        <Card sx={{ maxWidth: 345 }}>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Lizard
                                </Typography>
                            </CardContent>
                        </Card>

                    </Stack>

                </Grid>


            </Grid>

            <Box height={20} />

            <Grid container spacing={2}>

                <Grid item xs={8}>

                    <Stack spacing={2}>
                        <Card sx={{ height: 60 + "vh" }}>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Lizard
                                </Typography>
                            </CardContent>

                        </Card>

                    </Stack>

                </Grid>

                <Grid item xs={4}>

                    <Stack spacing={2}>
                        <Card sx={{ height: 60 + "vh" }}>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Lizard
                                </Typography>
                            </CardContent>

                        </Card>

                    </Stack>

                </Grid>

            </Grid>
        </Box>
    </Box>
            
    </>
}