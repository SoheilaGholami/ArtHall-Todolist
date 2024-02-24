import { createTheme } from "@mui/material";
import createCache from '@emotion/cache';
import rtlPlugin from 'stylis-plugin-rtl';
import { prefixer } from 'stylis';
export const theme = createTheme({
    direction:"rtl",
    palette :{
        primary: {
            main:"#0D929A",
        },
        secondary :{
            main:"#F1C400"
        },
        info:{
            main:"rgba(255,255,255,0.15)",
            light:"rgba(255,255,255,0.5)",
        }
    },
    typography:{
        "h1" :{
            fontSize: "32px",
            fontWeight:"bold",
            color:"white"
        }
    }
})

export const cacheRtl = createCache({
    key: 'muirtl',
    stylisPlugins: [prefixer, rtlPlugin],
  });