

let apeImages=[
    "https://www.google.com/imgres?imgurl=https%3A%2F%2Fstatic.techspot.com%2Fimages2%2Fnews%2Fbigimage%2F2021%2F09%2F2021-09-10-image-18.jpg&imgrefurl=https%3A%2F%2Fwww.techspot.com%2Fnews%2F92599-seller-loses-250000-after-listing-bored-ape-yacht.html&tbnid=D-ZkPfnyhKUXjM&vet=12ahUKEwj7zuLgtaf2AhXc_zgGHedXB5wQMygLegUIARDTAQ..i&docid=v2JYkCxz92U95M&w=1251&h=1075&q=bored%20ape%20hd&ved=2ahUKEwj7zuLgtaf2AhXc_zgGHedXB5wQMygLegUIARDTAQ",
    "https://www.google.com/imgres?imgurl=https%3A%2F%2Fwallpaperaccess.com%2Ffull%2F7779209.png&imgrefurl=https%3A%2F%2Fwallpaperaccess.com%2Fbored-ape-yacht-club&tbnid=IPFC1_K2suMjcM&vet=12ahUKEwj7zuLgtaf2AhXc_zgGHedXB5wQMygaegUIARD4AQ..i&docid=ybPKyEPbf6U-BM&w=1262&h=1262&q=bored%20ape%20hd&ved=2ahUKEwj7zuLgtaf2AhXc_zgGHedXB5wQMygaegUIARD4AQ",
    "https://www.google.com/imgres?imgurl=https%3A%2F%2Fuploads-ssl.webflow.com%2F5ead65b4cd1146b85071bfdf%2F608ff2a12bc39c3ff457ae36_Bored%2520Ape%25208622-%2520Image%25202.png&imgrefurl=https%3A%2F%2Fwww.electricartefacts.art%2Fnews%2Fbored-ape-yacht-club-the-latest-trend-to-take-the-nft-world-by-storm&tbnid=G5EzrhzxXTVo-M&vet=12ahUKEwj7zuLgtaf2AhXc_zgGHedXB5wQMygyegQIARA_..i&docid=umJRPBLKKSbRsM&w=631&h=631&q=bored%20ape%20hd&ved=2ahUKEwj7zuLgtaf2AhXc_zgGHedXB5wQMygyegQIARA_",
    "https://www.google.com/imgres?imgurl=https%3A%2F%2Fassets.thevalue.com%2Fad81a47725585b993585b3a821d0ec02c7435662%2Fmobile%2F31dd3295b8e3e1a81221ebe94f68fa96314512c8.jpg%3F1630572123&imgrefurl=https%3A%2F%2Fen.thevalue.com%2Farticles%2Fbored-ape-yacht-kennel-club-sothebys-auction-101-nft&tbnid=NfKfHpc0pySb_M&vet=12ahUKEwj7zuLgtaf2AhXc_zgGHedXB5wQMyhMegQIARB7..i&docid=oXbzegyAsqjtJM&w=500&h=500&q=bored%20ape%20hd&ved=2ahUKEwj7zuLgtaf2AhXc_zgGHedXB5wQMyhMegQIARB7",
    "https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.siliconrepublic.com%2Fwp-content%2Fuploads%2F2022%2F02%2Fboredape-718x523.jpeg&imgrefurl=https%3A%2F%2Fwww.siliconrepublic.com%2Fbusiness%2Fbored-ape-yacht-club-founders-bayc-nft-yuga-labs&tbnid=Ivve4naT9Nt_UM&vet=12ahUKEwj7zuLgtaf2AhXc_zgGHedXB5wQMyhYegUIARCUAQ..i&docid=IEkx5VCGzyOPCM&w=718&h=523&q=bored%20ape%20hd&ved=2ahUKEwj7zuLgtaf2AhXc_zgGHedXB5wQMyhYegUIARCUAQ",
    "https://www.google.com/imgres?imgurl=https%3A%2F%2Flh3.googleusercontent.com%2F-YTjXGpGcqMpNF8yzVbyP26f4HSm1YPjfZiTkQBigc29FvMkxoSYA2xdL-KPUJ2AH5Fig_tq5nK_hVNtnaZev356DLHJYiAHHtBAOg%3Dw600&imgrefurl=https%3A%2F%2Fopensea.io%2Fassets%2F0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d%2F1080&tbnid=AShOVpbESnOSyM&vet=12ahUKEwj7zuLgtaf2AhXc_zgGHedXB5wQMyhfegUIARCjAQ..i&docid=xXbV_PuSQWSrfM&w=600&h=600&q=bored%20ape%20hd&ved=2ahUKEwj7zuLgtaf2AhXc_zgGHedXB5wQMyhfegUIARCjAQ",
    "https://www.google.com/imgres?imgurl=https%3A%2F%2Fboredapetronclub.com%2Fassets%2FBored-Ape-Tron-Club.png&imgrefurl=https%3A%2F%2Fboredapetronclub.com%2F&tbnid=PPKoUBN5gl8EhM&vet=10CDYQMyiAAWoXChMIuKH6gLan9gIVAAAAAB0AAAAAEAI..i&docid=OgcPA2PqpRny9M&w=911&h=911&q=bored%20ape%20hd&ved=0CDYQMyiAAWoXChMIuKH6gLan9gIVAAAAAB0AAAAAEAI"
];

let imgs=document.getElementsByTagName('img');

for(let i=0;i<imgs.length;i++)
{
    const randomImg=Math.floor((Math.random()*apeImages.length));
    imgs[i].src=apeImages[randomImg];
}
