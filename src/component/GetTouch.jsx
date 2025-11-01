import { Box, Button, TextField, Typography } from '@mui/material'
import React from 'react'

export default function GetTouch() {
    return (
        <Box
            sx={{
                px: { xs: 2, md: 10 },
                py: { xs: 3, md: 5 },
            }}>
            <Typography variant="h6" color="primary">Get In Touch</Typography>
            <Typography variant="h5" color="secondary" sx={{ my: 1 }}>Feel Free To</Typography>
            <Typography variant="body1" color="secondary">Lorem ipsum dolor, sit amet consectetur adipisicing elit. A consequuntur optio possimus <br /> officiis. Nihil optio praesentium esse non, consequatur commodi!</Typography>
            <Box sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
            }}>
                <Box sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 1,
                    width: {xs:"100%", md:"40%"},
                    mt: 2

                }}>
                    <TextField
                        placeholder="Enter Name Here"
                        sx={{
                            "& .MuiInputBase-input::placeholder": {
                                color: "secondary.main",
                                opacity: 1,
                            },
                            bgcolor: "#191919",
                            m: 1

                        }}
                    />
                    <TextField
                        placeholder="Enter Email Address"
                        sx={{
                            "& .MuiInputBase-input::placeholder": {
                                color: "secondary.main",
                                opacity: 1,
                            },
                            bgcolor: "#191919",
                            m: 1
                        }}
                    />
                    <TextField
                        placeholder="Enter subject Here"
                        sx={{
                            "& .MuiInputBase-input::placeholder": {
                                color: "secondary.main",
                                opacity: 1,
                            },
                            bgcolor: "#191919",
                            m: 1
                        }}
                    />
                </Box>
                <Box sx={{
                    display:"flex",
                    flexDirection:"column",
                    justifyContent:"space-between",
                    width: {xs:"100",md:"60%"}

                }}>
                    <TextField placeholder="Enter Name Here"
                        multiline
                        rows={6}
                        sx={{
                            "& .MuiInputBase-input::placeholder": {
                                color: "secondary.main",
                                opacity: 1,
                            },
                            bgcolor: "#191919",
                            m: 1,
                            width: "100%",
                            mt: 2,
                            borderRadius: 3

                        }}
                    />
                    <Box sx={{
                        display:"flex",
                        justifyContent:"flex-end",mt:2
                    }}>
                        <Button sx={{
                            bgcolor: "primary.main",
                            color: "secondary.main",
                            borderRadius: 3
                        }}>Send Message</Button>
                    </Box>

                </Box>


            </Box>
        </Box>
    )
}
