import { Box, Typography, IconButton } from '@mui/material'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import MapIcon from '@mui/icons-material/Map';
import React from 'react'

export default function Contact() {

    const contactCard = [
        { icons: LocalPhoneIcon, title: "phone", des: "+922 832 832" },
        { icons: EmailIcon, title: "email address", des: "test@gmail.com" },
        { icons: AttachFileIcon, title: "website link", des: "webgroup.com" },
        { icons: MapIcon, title: "Exact location", des: "16/4 nyc,us" }
    ]

    return (
        <Box
            sx={{
                px: { xs: 2, md: 10 },
                py: { xs: 3, md: 5 },
            }}>
            <Typography variant="h6" color="primary">Contact Info</Typography>
            <Typography variant="h5" color="secondary" sx={{ my: 1 }}>Talk or meet with me</Typography>
            <Typography variant="body1" color="secondary">Lorem ipsum dolor, sit amet consectetur adipisicing elit. A consequuntur optio possimus <br /> officiis. Nihil optio praesentium esse non, consequatur commodi!</Typography>
            <Box sx={{
                display: "flex",
                flexWrap:"wrap",
                justifyContent: "center",
                m: 1,
                p: 3,
                gap:{xs:2,md:3},
            }}>
                {
                    contactCard.map((info, ele) => {
                        const Icon = info.icons
                        return (
                            <Box key={ele} sx={{width:{xs:"100%" ,sm:"45%",md:"22%"}, borderRadius: 6, bgcolor: "#191919", p: 1, display: "flex", alignItems: "center", gap: 1 }}>
                                <IconButton sx={{ color: "primary.main" }}>
                                    <Icon />
                                </IconButton>
                                <Box sx={{ p: 1 }}>
                                    <Typography variant="body1" color="secondary">{info.title}</Typography>
                                    <Typography variant="body1" color="secondary">{info.des}</Typography>
                                </Box>
                            </Box>

                        )
                    })

                }


            </Box>
        </Box>
    )
}
