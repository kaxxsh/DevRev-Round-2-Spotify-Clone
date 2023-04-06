import React, { useState } from "react";
import { IoChevronBackCircleOutline } from "react-icons/io5";
import { IoChevronForwardCircleOutline } from "react-icons/io5";
import { BiUserCircle } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

function Home({ setNav }) {
  const navigate = useNavigate();
  const [NavColour, setNavColour] = useState(false);

  const ChangeNavColour = () => {
    if (window.scrollY >= 748) {
      setNavColour(true);
    } else {
      setNavColour(false);
    }
  };

  const images = [
    "https://www.google.com/url?sa=i&url=https%3A%2F%2Fopen.spotify.com%2Falbum%2F1NzPxOOkzZaZxclygsBP63&psig=AOvVaw1MgoP-MKBkN4uEa_Ru6jZK&ust=1680871799716000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCODArMWllf4CFQAAAAAdAAAAABAE",
    "https://www.google.com/imgres?imgurl=https%3A%2F%2Fi.scdn.co%2Fimage%2Fab67616d0000b2730da5a4c2fb31e562da528981&tbnid=rw0C5iR-JT-tqM&vet=12ahUKEwibsMbFpZX-AhU_9nMBHQb1BcAQMygFegUIARDHAQ..i&imgrefurl=https%3A%2F%2Fopen.spotify.com%2Falbum%2F7DGviaaZngxjdBk0mdv1tj&docid=5RNPri1T2EtepM&w=640&h=640&q=u1%20shankar%20raja%20spotify%20image&ved=2ahUKEwibsMbFpZX-AhU_9nMBHQb1BcAQMygFegUIARDHAQ",
    "https://www.google.com/imgres?imgurl=https%3A%2F%2Fi.scdn.co%2Fimage%2Fab67616d00001e0268c288fe40d9c32a95df1299&tbnid=ci2zolyWd_vr4M&vet=12ahUKEwibsMbFpZX-AhU_9nMBHQb1BcAQMygIegUIARDNAQ..i&imgrefurl=https%3A%2F%2Fopen.spotify.com%2Ftrack%2F3P6zRJ409f09GI1iNwjcpa&docid=QUkkp8s_Uuv9OM&w=300&h=300&q=u1%20shankar%20raja%20spotify%20image&ved=2ahUKEwibsMbFpZX-AhU_9nMBHQb1BcAQMygIegUIARDNAQ",
    "https://www.google.com/imgres?imgurl=https%3A%2F%2Fi.scdn.co%2Fimage%2Fab67616d0000b2738db1046d93aae2c1f18daf93&tbnid=6mOS4NmbtWgVcM&vet=12ahUKEwibsMbFpZX-AhU_9nMBHQb1BcAQMygKegUIARDRAQ..i&imgrefurl=https%3A%2F%2Fopen.spotify.com%2Falbum%2F2lhSBwdCFOzuEQLGlrotat&docid=lhAnJdEuQ_4i5M&w=640&h=640&q=u1%20shankar%20raja%20spotify%20image&ved=2ahUKEwibsMbFpZX-AhU_9nMBHQb1BcAQMygKegUIARDRAQ",
    "https://www.google.com/imgres?imgurl=https%3A%2F%2Fi.scdn.co%2Fimage%2Fab67616d0000b2737978987fbfbb984efa6172d8&tbnid=O-On4mQkYx6aOM&vet=12ahUKEwibsMbFpZX-AhU_9nMBHQb1BcAQMygNegUIARDXAQ..i&imgrefurl=https%3A%2F%2Fopen.spotify.com%2Ftrack%2F0lNr0bkRupchqckGeSMSpZ&docid=J_Cs_Bd_ZSL4UM&w=640&h=640&q=u1%20shankar%20raja%20spotify%20image&ved=2ahUKEwibsMbFpZX-AhU_9nMBHQb1BcAQMygNegUIARDXAQ",
    "https://www.google.com/imgres?imgurl=https%3A%2F%2Fi.scdn.co%2Fimage%2Fab67616d0000b273493d78e64ca5f3d0e8390ab4&tbnid=I19MIM2i1tJ1DM&vet=12ahUKEwibsMbFpZX-AhU_9nMBHQb1BcAQMygTegUIARDjAQ..i&imgrefurl=https%3A%2F%2Fopen.spotify.com%2Ftrack%2F4FOCZFqxIS1Xc5JWla5VNj&docid=pizqh-atxC9vKM&w=640&h=640&q=u1%20shankar%20raja%20spotify%20image&ved=2ahUKEwibsMbFpZX-AhU_9nMBHQb1BcAQMygTegUIARDjAQ",
    "https://www.google.com/imgres?imgurl=https%3A%2F%2Fi.scdn.co%2Fimage%2Fab67616d0000b2739487dff8100675dae9d291a8&tbnid=zvDPtPR8s8hH8M&vet=12ahUKEwibsMbFpZX-AhU_9nMBHQb1BcAQMygWegUIARDpAQ..i&imgrefurl=https%3A%2F%2Fopen.spotify.com%2Ftrack%2F4pjiljlDP3MgVzhNSazqAT&docid=tAaRvaklcIX9GM&w=640&h=640&q=u1%20shankar%20raja%20spotify%20image&ved=2ahUKEwibsMbFpZX-AhU_9nMBHQb1BcAQMygWegUIARDpAQ",
    "https://www.google.com/imgres?imgurl=https%3A%2F%2Fi.scdn.co%2Fimage%2Fab67616d0000b273e3c9a1140f0a4832c7132599&tbnid=ti8C96kG9IXoWM&vet=12ahUKEwibsMbFpZX-AhU_9nMBHQb1BcAQMygiegUIARCGAg..i&imgrefurl=https%3A%2F%2Fopen.spotify.com%2Ftrack%2F4VRbTCQD08n5Jg67u2sykX&docid=FHFYETj9yy--sM&w=640&h=640&q=u1%20shankar%20raja%20spotify%20image&ved=2ahUKEwibsMbFpZX-AhU_9nMBHQb1BcAQMygiegUIARCGAg",
    "https://www.google.com/imgres?imgurl=https%3A%2F%2Fi.scdn.co%2Fimage%2Fab67616d0000b273fba5304c0119e72d0b998aea&tbnid=3gN_rLRaUzxHyM&vet=12ahUKEwibsMbFpZX-AhU_9nMBHQb1BcAQMygjegUIARCIAg..i&imgrefurl=https%3A%2F%2Fopen.spotify.com%2Falbum%2F57EwhOeKmfQPDC7IUjKubv&docid=TksxS-dulRsMdM&w=640&h=640&q=u1%20shankar%20raja%20spotify%20image&ved=2ahUKEwibsMbFpZX-AhU_9nMBHQb1BcAQMygjegUIARCIAg",
    "https://www.google.com/imgres?imgurl=https%3A%2F%2Fi.scdn.co%2Fimage%2Fab67616d00001e027de8959929372430846f570e&tbnid=QNTpWpfKmpel0M&vet=12ahUKEwibsMbFpZX-AhU_9nMBHQb1BcAQMyglegUIARCMAg..i&imgrefurl=https%3A%2F%2Fopen.spotify.com%2Ftrack%2F1vzxYeTJ9dTtyJXkNWVJDZ&docid=4ycBWiHmrvBsaM&w=300&h=300&q=u1%20shankar%20raja%20spotify%20image&ved=2ahUKEwibsMbFpZX-AhU_9nMBHQb1BcAQMyglegUIARCMAg",
    "https://www.google.com/imgres?imgurl=https%3A%2F%2Fi.scdn.co%2Fimage%2Fab67616d00001e024f32c4b2cecc78e5e647ecd0&tbnid=AK4sdFRlSNAxbM&vet=12ahUKEwibsMbFpZX-AhU_9nMBHQb1BcAQMyg0egQIARBL..i&imgrefurl=https%3A%2F%2Fopen.spotify.com%2Ftrack%2F3gnWw0LToxswxfC6Eb8GBp&docid=IUgZiicDff9jPM&w=300&h=300&q=u1%20shankar%20raja%20spotify%20image&ved=2ahUKEwibsMbFpZX-AhU_9nMBHQb1BcAQMyg0egQIARBL",
    "https://www.google.com/imgres?imgurl=https%3A%2F%2Fa10.gaanacdn.com%2Fimages%2Falbums%2F89%2F1981189%2Fcrop_480x480_1981189.jpg&tbnid=y2_-_I1-mGchiM&vet=12ahUKEwji1461ppX-AhXIo2MGHUniCz0QMygEegUIARDNAQ..i&imgrefurl=https%3A%2F%2Fgaana.com%2Falbum%2Fbest-of-love-anirudh-ravichander&docid=oWt504-FjCDaHM&w=480&h=480&q=anirudh%20album%20songs&ved=2ahUKEwji1461ppX-AhXIo2MGHUniCz0QMygEegUIARDNAQ",
    "https://www.google.com/imgres?imgurl=https%3A%2F%2Fs.saregama.tech%2Fimage%2Fc%2Fm%2F9%2Ff4%2F8f%2Fanirudh-ravichander_1644397954.jpg&tbnid=__gQsp6yisL6OM&vet=12ahUKEwji1461ppX-AhXIo2MGHUniCz0QMygOegUIARDlAQ..i&imgrefurl=https%3A%2F%2Fwww.saregama.com%2Fartist%2Fanirudh-ravichander_58135%2Falbums&docid=zegFZmfQ8URfGM&w=300&h=300&q=anirudh%20album%20songs&ved=2ahUKEwji1461ppX-AhXIo2MGHUniCz0QMygOegUIARDlAQ",
    "https://www.google.com/imgres?imgurl=https%3A%2F%2Flookaside.fbsbx.com%2Flookaside%2Fcrawler%2Fmedia%2F%3Fmedia_id%3D100063886997466&tbnid=-tcAYsVzDxwx2M&vet=12ahUKEwji1461ppX-AhXIo2MGHUniCz0QMygWegUIARD3AQ..i&imgrefurl=https%3A%2F%2Fwww.facebook.com%2Fanirudh.music.forever%2F&docid=pR953MyjLKc9xM&w=1440&h=1440&q=anirudh%20album%20songs&ved=2ahUKEwji1461ppX-AhXIo2MGHUniCz0QMygWegUIARD3AQ",
    "https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.onlykollywood.com%2Fwp-content%2Fuploads%2F2014%2F08%2FAnirudh-on-kaththi-songs-copy.jpg&tbnid=KtQxE4K4AT-ZQM&vet=12ahUKEwji1461ppX-AhXIo2MGHUniCz0QMygsegUIARCqAg..i&imgrefurl=https%3A%2F%2Fwww.onlykollywood.com%2Fkaththi-album-anirudh-full-surprises-mid-september%2F&docid=3je4sBCEdPQD9M&w=610&h=334&q=anirudh%20album%20songs&ved=2ahUKEwji1461ppX-AhXIo2MGHUniCz0QMygsegUIARCqAg",
    "https://www.google.com/imgres?imgurl=https%3A%2F%2Fi.scdn.co%2Fimage%2Fab67616d0000b273493d78e64ca5f3d0e8390ab4&tbnid=I19MIM2i1tJ1DM&vet=12ahUKEwibsMbFpZX-AhU_9nMBHQb1BcAQMygTegUIARDjAQ..i&imgrefurl=https%3A%2F%2Fopen.spotify.com%2Ftrack%2F4FOCZFqxIS1Xc5JWla5VNj&docid=pizqh-atxC9vKM&w=640&h=640&q=u1%20shankar%20raja%20spotify%20image&ved=2ahUKEwibsMbFpZX-AhU_9nMBHQb1BcAQMygTegUIARDjAQ",
    "https://www.google.com/imgres?imgurl=https%3A%2F%2Fi.scdn.co%2Fimage%2Fab67616d0000b2739487dff8100675dae9d291a8&tbnid=zvDPtPR8s8hH8M&vet=12ahUKEwibsMbFpZX-AhU_9nMBHQb1BcAQMygWegUIARDpAQ..i&imgrefurl=https%3A%2F%2Fopen.spotify.com%2Ftrack%2F4pjiljlDP3MgVzhNSazqAT&docid=tAaRvaklcIX9GM&w=640&h=640&q=u1%20shankar%20raja%20spotify%20image&ved=2ahUKEwibsMbFpZX-AhU_9nMBHQb1BcAQMygWegUIARDpAQ",
    "https://www.google.com/imgres?imgurl=https%3A%2F%2Fi.scdn.co%2Fimage%2Fab67616d0000b273e3c9a1140f0a4832c7132599&tbnid=ti8C96kG9IXoWM&vet=12ahUKEwibsMbFpZX-AhU_9nMBHQb1BcAQMygiegUIARCGAg..i&imgrefurl=https%3A%2F%2Fopen.spotify.com%2Ftrack%2F4VRbTCQD08n5Jg67u2sykX&docid=FHFYETj9yy--sM&w=640&h=640&q=u1%20shankar%20raja%20spotify%20image&ved=2ahUKEwibsMbFpZX-AhU_9nMBHQb1BcAQMygiegUIARCGAg",
    "https://www.google.com/imgres?imgurl=https%3A%2F%2Fi.scdn.co%2Fimage%2Fab67616d0000b2737978987fbfbb984efa6172d8&tbnid=O-On4mQkYx6aOM&vet=12ahUKEwibsMbFpZX-AhU_9nMBHQb1BcAQMygNegUIARDXAQ..i&imgrefurl=https%3A%2F%2Fopen.spotify.com%2Ftrack%2F0lNr0bkRupchqckGeSMSpZ&docid=J_Cs_Bd_ZSL4UM&w=640&h=640&q=u1%20shankar%20raja%20spotify%20image&ved=2ahUKEwibsMbFpZX-AhU_9nMBHQb1BcAQMygNegUIARDXAQ",
    "https://www.google.com/imgres?imgurl=https%3A%2F%2Fi.scdn.co%2Fimage%2Fab67616d0000b273493d78e64ca5f3d0e8390ab4&tbnid=I19MIM2i1tJ1DM&vet=12ahUKEwibsMbFpZX-AhU_9nMBHQb1BcAQMygTegUIARDjAQ..i&imgrefurl=https%3A%2F%2Fopen.spotify.com%2Ftrack%2F4FOCZFqxIS1Xc5JWla5VNj&docid=pizqh-atxC9vKM&w=640&h=640&q=u1%20shankar%20raja%20spotify%20image&ved=2ahUKEwibsMbFpZX-AhU_9nMBHQb1BcAQMygTegUIARDjAQ",
    "https://www.google.com/imgres?imgurl=https%3A%2F%2Fi.scdn.co%2Fimage%2Fab67616d0000b2739487dff8100675dae9d291a8&tbnid=zvDPtPR8s8hH8M&vet=12ahUKEwibsMbFpZX-AhU_9nMBHQb1BcAQMygWegUIARDpAQ..i&imgrefurl=https%3A%2F%2Fopen.spotify.com%2Ftrack%2F4pjiljlDP3MgVzhNSazqAT&docid=tAaRvaklcIX9GM&w=640&h=640&q=u1%20shankar%20raja%20spotify%20image&ved=2ahUKEwibsMbFpZX-AhU_9nMBHQb1BcAQMygWegUIARDpAQ",
    "https://www.google.com/imgres?imgurl=https%3A%2F%2Fi.scdn.co%2Fimage%2Fab67616d0000b273fba5304c0119e72d0b998aea&tbnid=3gN_rLRaUzxHyM&vet=12ahUKEwibsMbFpZX-AhU_9nMBHQb1BcAQMygjegUIARCIAg..i&imgrefurl=https%3A%2F%2Fopen.spotify.com%2Falbum%2F57EwhOeKmfQPDC7IUjKubv&docid=TksxS-dulRsMdM&w=640&h=640&q=u1%20shankar%20raja%20spotify%20image&ved=2ahUKEwibsMbFpZX-AhU_9nMBHQb1BcAQMygjegUIARCIAg",
    "https://www.google.com/imgres?imgurl=https%3A%2F%2Fi.scdn.co%2Fimage%2Fab67616d00001e027de8959929372430846f570e&tbnid=QNTpWpfKmpel0M&vet=12ahUKEwibsMbFpZX-AhU_9nMBHQb1BcAQMyglegUIARCMAg..i&imgrefurl=https%3A%2F%2Fopen.spotify.com%2Ftrack%2F1vzxYeTJ9dTtyJXkNWVJDZ&docid=4ycBWiHmrvBsaM&w=300&h=300&q=u1%20shankar%20raja%20spotify%20image&ved=2ahUKEwibsMbFpZX-AhU_9nMBHQb1BcAQMyglegUIARCMAg",
    "https://www.google.com/imgres?imgurl=https%3A%2F%2Fi.scdn.co%2Fimage%2Fab67616d00001e027de8959929372430846f570e&tbnid=QNTpWpfKmpel0M&vet=12ahUKEwibsMbFpZX-AhU_9nMBHQb1BcAQMyglegUIARCMAg..i&imgrefurl=https%3A%2F%2Fopen.spotify.com%2Ftrack%2F1vzxYeTJ9dTtyJXkNWVJDZ&docid=4ycBWiHmrvBsaM&w=300&h=300&q=u1%20shankar%20raja%20spotify%20image&ved=2ahUKEwibsMbFpZX-AhU_9nMBHQb1BcAQMyglegUIARCMAg",
    "https://www.google.com/imgres?imgurl=https%3A%2F%2Fi.scdn.co%2Fimage%2Fab67616d00001e024f32c4b2cecc78e5e647ecd0&tbnid=AK4sdFRlSNAxbM&vet=12ahUKEwibsMbFpZX-AhU_9nMBHQb1BcAQMyg0egQIARBL..i&imgrefurl=https%3A%2F%2Fopen.spotify.com%2Ftrack%2F3gnWw0LToxswxfC6Eb8GBp&docid=IUgZiicDff9jPM&w=300&h=300&q=u1%20shankar%20raja%20spotify%20image&ved=2ahUKEwibsMbFpZX-AhU_9nMBHQb1BcAQMyg0egQIARBL",
    "https://www.google.com/imgres?imgurl=https%3A%2F%2Fa10.gaanacdn.com%2Fimages%2Falbums%2F89%2F1981189%2Fcrop_480x480_1981189.jpg&tbnid=y2_-_I1-mGchiM&vet=12ahUKEwji1461ppX-AhXIo2MGHUniCz0QMygEegUIARDNAQ..i&imgrefurl=https%3A%2F%2Fgaana.com%2Falbum%2Fbest-of-love-anirudh-ravichander&docid=oWt504-FjCDaHM&w=480&h=480&q=anirudh%20album%20songs&ved=2ahUKEwji1461ppX-AhXIo2MGHUniCz0QMygEegUIARDNAQ",
    "https://www.google.com/imgres?imgurl=https%3A%2F%2Fs.saregama.tech%2Fimage%2Fc%2Fm%2F9%2Ff4%2F8f%2Fanirudh-ravichander_1644397954.jpg&tbnid=__gQsp6yisL6OM&vet=12ahUKEwji1461ppX-AhXIo2MGHUniCz0QMygOegUIARDlAQ..i&imgrefurl=https%3A%2F%2Fwww.saregama.com%2Fartist%2Fanirudh-ravichander_58135%2Falbums&docid=zegFZmfQ8URfGM&w=300&h=300&q=anirudh%20album%20songs&ved=2ahUKEwji1461ppX-AhXIo2MGHUniCz0QMygOegUIARDlAQ",
    "https://www.google.com/imgres?imgurl=https%3A%2F%2Flookaside.fbsbx.com%2Flookaside%2Fcrawler%2Fmedia%2F%3Fmedia_id%3D100063886997466&tbnid=-tcAYsVzDxwx2M&vet=12ahUKEwji1461ppX-AhXIo2MGHUniCz0QMygWegUIARD3AQ..i&imgrefurl=https%3A%2F%2Fwww.facebook.com%2Fanirudh.music.forever%2F&docid=pR953MyjLKc9xM&w=1440&h=1440&q=anirudh%20album%20songs&ved=2ahUKEwji1461ppX-AhXIo2MGHUniCz0QMygWegUIARD3AQ",
    "https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.onlykollywood.com%2Fwp-content%2Fuploads%2F2014%2F08%2FAnirudh-on-kaththi-songs-copy.jpg&tbnid=KtQxE4K4AT-ZQM&vet=12ahUKEwji1461ppX-AhXIo2MGHUniCz0QMygsegUIARCqAg..i&imgrefurl=https%3A%2F%2Fwww.onlykollywood.com%2Fkaththi-album-anirudh-full-surprises-mid-september%2F&docid=3je4sBCEdPQD9M&w=610&h=334&q=anirudh%20album%20songs&ved=2ahUKEwji1461ppX-AhXIo2MGHUniCz0QMygsegUIARCqAg",
    "https://www.google.com/imgres?imgurl=https%3A%2F%2Fi.scdn.co%2Fimage%2Fab67616d0000b273493d78e64ca5f3d0e8390ab4&tbnid=I19MIM2i1tJ1DM&vet=12ahUKEwibsMbFpZX-AhU_9nMBHQb1BcAQMygTegUIARDjAQ..i&imgrefurl=https%3A%2F%2Fopen.spotify.com%2Ftrack%2F4FOCZFqxIS1Xc5JWla5VNj&docid=pizqh-atxC9vKM&w=640&h=640&q=u1%20shankar%20raja%20spotify%20image&ved=2ahUKEwibsMbFpZX-AhU_9nMBHQb1BcAQMygTegUIARDjAQ",
    "https://www.google.com/imgres?imgurl=https%3A%2F%2Fs.saregama.tech%2Fimage%2Fc%2Fm%2F9%2Ff4%2F8f%2Fanirudh-ravichander_1644397954.jpg&tbnid=__gQsp6yisL6OM&vet=12ahUKEwji1461ppX-AhXIo2MGHUniCz0QMygOegUIARDlAQ..i&imgrefurl=https%3A%2F%2Fwww.saregama.com%2Fartist%2Fanirudh-ravichander_58135%2Falbums&docid=zegFZmfQ8URfGM&w=300&h=300&q=anirudh%20album%20songs&ved=2ahUKEwji1461ppX-AhXIo2MGHUniCz0QMygOegUIARDlAQ",
    "https://www.google.com/imgres?imgurl=https%3A%2F%2Flookaside.fbsbx.com%2Flookaside%2Fcrawler%2Fmedia%2F%3Fmedia_id%3D100063886997466&tbnid=-tcAYsVzDxwx2M&vet=12ahUKEwji1461ppX-AhXIo2MGHUniCz0QMygWegUIARD3AQ..i&imgrefurl=https%3A%2F%2Fwww.facebook.com%2Fanirudh.music.forever%2F&docid=pR953MyjLKc9xM&w=1440&h=1440&q=anirudh%20album%20songs&ved=2ahUKEwji1461ppX-AhXIo2MGHUniCz0QMygWegUIARD3AQ",
    "https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.onlykollywood.com%2Fwp-content%2Fuploads%2F2014%2F08%2FAnirudh-on-kaththi-songs-copy.jpg&tbnid=KtQxE4K4AT-ZQM&vet=12ahUKEwji1461ppX-AhXIo2MGHUniCz0QMygsegUIARCqAg..i&imgrefurl=https%3A%2F%2Fwww.onlykollywood.com%2Fkaththi-album-anirudh-full-surprises-mid-september%2F&docid=3je4sBCEdPQD9M&w=610&h=334&q=anirudh%20album%20songs&ved=2ahUKEwji1461ppX-AhXIo2MGHUniCz0QMygsegUIARCqAg",
    "https://www.google.com/imgres?imgurl=https%3A%2F%2Fi.scdn.co%2Fimage%2Fab67616d0000b273493d78e64ca5f3d0e8390ab4&tbnid=I19MIM2i1tJ1DM&vet=12ahUKEwibsMbFpZX-AhU_9nMBHQb1BcAQMygTegUIARDjAQ..i&imgrefurl=https%3A%2F%2Fopen.spotify.com%2Ftrack%2F4FOCZFqxIS1Xc5JWla5VNj&docid=pizqh-atxC9vKM&w=640&h=640&q=u1%20shankar%20raja%20spotify%20image&ved=2ahUKEwibsMbFpZX-AhU_9nMBHQb1BcAQMygTegUIARDjAQ",
    "https://www.google.com/imgres?imgurl=https%3A%2F%2Fi.scdn.co%2Fimage%2Fab67616d0000b2739487dff8100675dae9d291a8&tbnid=zvDPtPR8s8hH8M&vet=12ahUKEwibsMbFpZX-AhU_9nMBHQb1BcAQMygWegUIARDpAQ..i&imgrefurl=https%3A%2F%2Fopen.spotify.com%2Ftrack%2F4pjiljlDP3MgVzhNSazqAT&docid=tAaRvaklcIX9GM&w=640&h=640&q=u1%20shankar%20raja%20spotify%20image&ved=2ahUKEwibsMbFpZX-AhU_9nMBHQb1BcAQMygWegUIARDpAQ",
    "https://www.google.com/imgres?imgurl=https%3A%2F%2Fi.scdn.co%2Fimage%2Fab67616d0000b273e3c9a1140f0a4832c7132599&tbnid=ti8C96kG9IXoWM&vet=12ahUKEwibsMbFpZX-AhU_9nMBHQb1BcAQMygiegUIARCGAg..i&imgrefurl=https%3A%2F%2Fopen.spotify.com%2Ftrack%2F4VRbTCQD08n5Jg67u2sykX&docid=FHFYETj9yy--sM&w=640&h=640&q=u1%20shankar%20raja%20spotify%20image&ved=2ahUKEwibsMbFpZX-AhU_9nMBHQb1BcAQMygiegUIARCGAg",
    "https://www.google.com/imgres?imgurl=https%3A%2F%2Fi.scdn.co%2Fimage%2Fab67616d0000b2737978987fbfbb984efa6172d8&tbnid=O-On4mQkYx6aOM&vet=12ahUKEwibsMbFpZX-AhU_9nMBHQb1BcAQMygNegUIARDXAQ..i&imgrefurl=https%3A%2F%2Fopen.spotify.com%2Ftrack%2F0lNr0bkRupchqckGeSMSpZ&docid=J_Cs_Bd_ZSL4UM&w=640&h=640&q=u1%20shankar%20raja%20spotify%20image&ved=2ahUKEwibsMbFpZX-AhU_9nMBHQb1BcAQMygNegUIARDXAQ",
    "https://www.google.com/imgres?imgurl=https%3A%2F%2Fi.scdn.co%2Fimage%2Fab67616d0000b273493d78e64ca5f3d0e8390ab4&tbnid=I19MIM2i1tJ1DM&vet=12ahUKEwibsMbFpZX-AhU_9nMBHQb1BcAQMygTegUIARDjAQ..i&imgrefurl=https%3A%2F%2Fopen.spotify.com%2Ftrack%2F4FOCZFqxIS1Xc5JWla5VNj&docid=pizqh-atxC9vKM&w=640&h=640&q=u1%20shankar%20raja%20spotify%20image&ved=2ahUKEwibsMbFpZX-AhU_9nMBHQb1BcAQMygTegUIARDjAQ",
    "https://www.google.com/imgres?imgurl=https%3A%2F%2Fi.scdn.co%2Fimage%2Fab67616d0000b2739487dff8100675dae9d291a8&tbnid=zvDPtPR8s8hH8M&vet=12ahUKEwibsMbFpZX-AhU_9nMBHQb1BcAQMygWegUIARDpAQ..i&imgrefurl=https%3A%2F%2Fopen.spotify.com%2Ftrack%2F4pjiljlDP3MgVzhNSazqAT&docid=tAaRvaklcIX9GM&w=640&h=640&q=u1%20shankar%20raja%20spotify%20image&ved=2ahUKEwibsMbFpZX-AhU_9nMBHQb1BcAQMygWegUIARDpAQ",
  ];

  window.addEventListener("scroll", ChangeNavColour);
  return (
    <>
      <div className="Home-Container">
        <nav>
          <div
            className={
              NavColour ? "Nav-Container" : "Navbar Home-Nav-Container"
            }
          >
            <div className="Navigation">
              <div className="Nav-Back" onClick={() => setNav(3)}>
                <IoChevronBackCircleOutline size={35} />
              </div>
              <div className="Nav-Next" onClick={() => setNav(2)}>
                <IoChevronForwardCircleOutline size={35} />
              </div>
            </div>
            <div className="Nav-End">
              <div className="Nav-upgrade" onClick={() => navigate("/")}>
                update
              </div>
              <div className="Display-UserName">
                <BiUserCircle size={26} fill="grey" />
                Deadpool
              </div>
            </div>
          </div>
        </nav>
        <section>
          <div className="Section-Welcome">Good afternoon, Deadpool</div>
          <div className="Recently-Played">
            <div className="Recent-Box">
              <div className="Played-Box">
                <div className="Music-Img"></div>
                <div className="Music-Name">Movie</div>
              </div>
              <div className="Played-Box">
                <div className="Music-Img"></div>
                <div className="Music-Name">Movie</div>
              </div>
              <div className="Played-Box">
                <div className="Music-Img"></div>
                <div className="Music-Name">Movie</div>
              </div>
            </div>
            <div className="Recent-Box">
              <div className="Played-Box">
                <div className="Music-Img"></div>
                <div className="Music-Name">Movie</div>
              </div>
              <div className="Played-Box">
                <div className="Music-Img"></div>
                <div className="Music-Name">Movie</div>
              </div>
              <div className="Played-Box">
                <div className="Music-Img"></div>
                <div className="Music-Name">Movie</div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="Made-container">
            <div className="Made-Title">Made For Deadpool</div>
            <div className="Made-Box">
              <div className="Made-Playlist-Box">
                <div className="Made-Img"></div>
                <div className="Made-Name">Name</div>
              </div>
              <div className="Made-Playlist-Box">
                <div className="Made-Img"></div>
                <div className="Made-Name">Name</div>
              </div>
              <div className="Made-Playlist-Box">
                <div className="Made-Img"></div>
                <div className="Made-Name">Name</div>
              </div>
              <div className="Made-Playlist-Box">
                <div className="Made-Img"></div>
                <div className="Made-Name">Name</div>
              </div>
              <div className="Made-Playlist-Box">
                <div className="Made-Img"></div>
                <div className="Made-Name">Name</div>
              </div>
              <div className="Made-Playlist-Box">
                <div className="Made-Img"></div>
                <div className="Made-Name">Name</div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="Made-container">
            <div className="Made-Title">Made For Deadpool</div>
            <div className="Made-Box">
              <div className="Made-Playlist-Box">
                <div className="Made-Img"></div>
                <div className="Made-Name">Name</div>
              </div>
              <div className="Made-Playlist-Box">
                <div className="Made-Img"></div>
                <div className="Made-Name">Name</div>
              </div>
              <div className="Made-Playlist-Box">
                <div className="Made-Img"></div>
                <div className="Made-Name">Name</div>
              </div>
              <div className="Made-Playlist-Box">
                <div className="Made-Img"></div>
                <div className="Made-Name">Name</div>
              </div>
              <div className="Made-Playlist-Box">
                <div className="Made-Img"></div>
                <div className="Made-Name">Name</div>
              </div>
              <div className="Made-Playlist-Box">
                <div className="Made-Img"></div>
                <div className="Made-Name">Name</div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="Made-container">
            <div className="Made-Title">Made For Deadpool</div>
            <div className="Made-Box">
              <div className="Made-Playlist-Box">
                <div className="Made-Img"></div>
                <div className="Made-Name">Name</div>
              </div>
              <div className="Made-Playlist-Box">
                <div className="Made-Img"></div>
                <div className="Made-Name">Name</div>
              </div>
              <div className="Made-Playlist-Box">
                <div className="Made-Img"></div>
                <div className="Made-Name">Name</div>
              </div>
              <div className="Made-Playlist-Box">
                <div className="Made-Img"></div>
                <div className="Made-Name">Name</div>
              </div>
              <div className="Made-Playlist-Box">
                <div className="Made-Img"></div>
                <div className="Made-Name">Name</div>
              </div>
              <div className="Made-Playlist-Box">
                <div className="Made-Img"></div>
                <div className="Made-Name">Name</div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="Made-container">
            <div className="Made-Title">Made For Deadpool</div>
            <div className="Made-Box">
              <div className="Made-Playlist-Box">
                <div className="Made-Img"></div>
                <div className="Made-Name">Name</div>
              </div>
              <div className="Made-Playlist-Box">
                <div className="Made-Img"></div>
                <div className="Made-Name">Name</div>
              </div>
              <div className="Made-Playlist-Box">
                <div className="Made-Img"></div>
                <div className="Made-Name">Name</div>
              </div>
              <div className="Made-Playlist-Box">
                <div className="Made-Img"></div>
                <div className="Made-Name">Name</div>
              </div>
              <div className="Made-Playlist-Box">
                <div className="Made-Img"></div>
                <div className="Made-Name">Name</div>
              </div>
              <div className="Made-Playlist-Box">
                <div className="Made-Img"></div>
                <div className="Made-Name">Name</div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="Made-container">
            <div className="Made-Title">Made For Deadpool</div>
            <div className="Made-Box">
              <div className="Made-Playlist-Box">
                <div className="Made-Img"></div>
                <div className="Made-Name">Name</div>
              </div>
              <div className="Made-Playlist-Box">
                <div className="Made-Img"></div>
                <div className="Made-Name">Name</div>
              </div>
              <div className="Made-Playlist-Box">
                <div className="Made-Img"></div>
                <div className="Made-Name">Name</div>
              </div>
              <div className="Made-Playlist-Box">
                <div className="Made-Img"></div>
                <div className="Made-Name">Name</div>
              </div>
              <div className="Made-Playlist-Box">
                <div className="Made-Img"></div>
                <div className="Made-Name">Name</div>
              </div>
              <div className="Made-Playlist-Box">
                <div className="Made-Img"></div>
                <div className="Made-Name">Name</div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="Made-container">
            <div className="Made-Title">Made For Deadpool</div>
            <div className="Made-Box">
              <div className="Made-Playlist-Box">
                <div className="Made-Img"></div>
                <div className="Made-Name">Name</div>
              </div>
              <div className="Made-Playlist-Box">
                <div className="Made-Img"></div>
                <div className="Made-Name">Name</div>
              </div>
              <div className="Made-Playlist-Box">
                <div className="Made-Img"></div>
                <div className="Made-Name">Name</div>
              </div>
              <div className="Made-Playlist-Box">
                <div className="Made-Img"></div>
                <div className="Made-Name">Name</div>
              </div>
              <div className="Made-Playlist-Box">
                <div className="Made-Img"></div>
                <div className="Made-Name">Name</div>
              </div>
              <div className="Made-Playlist-Box">
                <div className="Made-Img"></div>
                <div className="Made-Name">Name</div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="Made-container">
            <div className="Made-Title">Made For Deadpool</div>
            <div className="Made-Box">
              <div className="Made-Playlist-Box">
                <div className="Made-Img"></div>
                <div className="Made-Name">Name</div>
              </div>
              <div className="Made-Playlist-Box">
                <div className="Made-Img"></div>
                <div className="Made-Name">Name</div>
              </div>
              <div className="Made-Playlist-Box">
                <div className="Made-Img"></div>
                <div className="Made-Name">Name</div>
              </div>
              <div className="Made-Playlist-Box">
                <div className="Made-Img"></div>
                <div className="Made-Name">Name</div>
              </div>
              <div className="Made-Playlist-Box">
                <div className="Made-Img"></div>
                <div className="Made-Name">Name</div>
              </div>
              <div className="Made-Playlist-Box">
                <div className="Made-Img"></div>
                <div className="Made-Name">Name</div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Home;
