import "./BlogsDetails.css";
import { GrFormPreviousLink } from "react-icons/gr";
import { GrFormNextLink } from "react-icons/gr";
import { useParams } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import TopGreenBar from "../../components/TopGreenBar/TopGreenBar";
import RecentBlog from "../../components/RecentBlog/RecentBlog";
import { useEffect, useState } from "react";
import axios from "axios";
import config from "../../Constants/enviroment";
const BlogsDetails = () => {
  const postsDetails = [
    {
      id: 1,
      image: "/assets/Images/post-1.png",
      PublishDate: "8 Feb 2024 ",
      title: "First Time Home Owner Ideas",
      bigTitle:
        "The Dvin, Seven Visions: A Luxurious Art Deco Hotel in Yerevan, Armenia",
      articleText:
        "If you are looking for an exquisite retreat in Armenia, Seven Visions Resort & Places, The Dvin, is the epitome of luxury and style. This stunning Art Deco hotel in Yerevan seamlessly blends timeless elegance with modern sophistication, offering travelers an unparalleled experience. Every aspect of the hotel's design, from its lavish rooms to its custom-made décor, has been meticulously crafted to ensure an unforgettable stay. A Modern Take on Art Deco Luxury Located in the heart of Yerevan, Armenia, The Dvin is a masterpiece of Art Deco luxury. Completed in 2023, this five-star hotel offers 153 magnificent rooms, each designed to embody comfort, tranquility, and grandeur. The architecture and interiors reflect the spirit of the Art Deco era, incorporating geometric patterns, mirrored surfaces, and intricate moldings, creating an atmosphere of opulence and refinement.Every room perfectly blends timeless design with modern amenities. Large mirrors enhance the sense of space, reflecting soft lighting and creating a cozy ambiance. Bed frames are adorned with subtle geometric patterns, characteristic of the Art Deco style, while contemporary furnishings ensure maximum comfort for guests. The interiors of The Dvin are a work of art. Every detail has been carefully curated to showcase the Art Deco style with a modern twist. 3D wall panels and ceiling moldings, designed by Wall Deco, serve as key decorative elements, adding depth and character to every space.One of the most striking features is the striped 3D panels, which give the walls a bold and sophisticated appearance. The interplay of light and shadow on these surfaces creates a mesmerizing visual effect, further enhanced by LED lighting, highlighting the intricate details of the décor. In addition to striped panels, some rooms also feature unique geometric 3D panels, custom-designed exclusively for the hotel. These bespoke decorative elements add a distinct character to the hotel's interior. As guests step into The Dvin’s hallways, they are immersed in an atmosphere of refined luxury. Deep black tones dominate the corridors, creating a bold yet sophisticated aesthetic that enhances the sense of grandeur.One of the hallways' standout features is the high ceiling, which contributes to a feeling of spaciousness and elegance. Ceiling moldings add a touch of classic Art Deco charm, serving as a subtle yet significant design element. The dark and light tones balance creates a visually captivating yet harmonious ambiance. One of the most original decorative elements in the hotel is the rose-pink bas-relief behind a wine bottle in the hallway. This unique installation immediately captures guests' attention, inviting them to admire the artistry behind it. Designed by Wall Deco, this wavy bas-relief creates the illusion of movement, adding depth and intrigue to the space.This attion to detail is evident throughout the hotel, creating a visually stunning and immersive design. Every decorative choice, from custom-designed wall features to exclusive furniture pieces, has been thoughtfully integrated to form a luxurious and inviting space.",
      publisher: "john",
      date: "Feb 8th, 2025",
    },
    {
      id: 2,
      image: "/assets/Images/post-1.png",
      PublishDate: "8 Feb 2024 ",
      title: "First Time Home Owner Ideas",
      bigTitle:
        "The Dvin, Seven Visions: A Luxurious Art Deco Hotel in Yerevan, Armenia",
      articleText:
        "If you are looking for an exquisite retreat in Armenia, Seven Visions Resort & Places, The Dvin, is the epitome of luxury and style. This stunning Art Deco hotel in Yerevan seamlessly blends timeless elegance with modern sophistication, offering travelers an unparalleled experience. Every aspect of the hotel's design, from its lavish rooms to its custom-made décor, has been meticulously crafted to ensure an unforgettable stay. A Modern Take on Art Deco Luxury Located in the heart of Yerevan, Armenia, The Dvin is a masterpiece of Art Deco luxury. Completed in 2023, this five-star hotel offers 153 magnificent rooms, each designed to embody comfort, tranquility, and grandeur. The architecture and interiors reflect the spirit of the Art Deco era, incorporating geometric patterns, mirrored surfaces, and intricate moldings, creating an atmosphere of opulence and refinement.Every room perfectly blends timeless design with modern amenities. Large mirrors enhance the sense of space, reflecting soft lighting and creating a cozy ambiance. Bed frames are adorned with subtle geometric patterns, characteristic of the Art Deco style, while contemporary furnishings ensure maximum comfort for guests. The interiors of The Dvin are a work of art. Every detail has been carefully curated to showcase the Art Deco style with a modern twist. 3D wall panels and ceiling moldings, designed by Wall Deco, serve as key decorative elements, adding depth and character to every space.One of the most striking features is the striped 3D panels, which give the walls a bold and sophisticated appearance. The interplay of light and shadow on these surfaces creates a mesmerizing visual effect, further enhanced by LED lighting, highlighting the intricate details of the décor. In addition to striped panels, some rooms also feature unique geometric 3D panels, custom-designed exclusively for the hotel. These bespoke decorative elements add a distinct character to the hotel's interior. As guests step into The Dvin’s hallways, they are immersed in an atmosphere of refined luxury. Deep black tones dominate the corridors, creating a bold yet sophisticated aesthetic that enhances the sense of grandeur.One of the hallways' standout features is the high ceiling, which contributes to a feeling of spaciousness and elegance. Ceiling moldings add a touch of classic Art Deco charm, serving as a subtle yet significant design element. The dark and light tones balance creates a visually captivating yet harmonious ambiance. One of the most original decorative elements in the hotel is the rose-pink bas-relief behind a wine bottle in the hallway. This unique installation immediately captures guests' attention, inviting them to admire the artistry behind it. Designed by Wall Deco, this wavy bas-relief creates the illusion of movement, adding depth and intrigue to the space.This attion to detail is evident throughout the hotel, creating a visually stunning and immersive design. Every decorative choice, from custom-designed wall features to exclusive furniture pieces, has been thoughtfully integrated to form a luxurious and inviting space.",
      publisher: "john",
      date: "Feb 8th, 2025",
    },
    {
      id: 3,
      image: "/assets/Images/post-1.png",
      PublishDate: "8 Feb 2024 ",
      title: "First Time Home Owner Ideas",
      bigTitle:
        "The Dvin, Seven Visions: A Luxurious Art Deco Hotel in Yerevan, Armenia",
      articleText:
        "If you are looking for an exquisite retreat in Armenia, Seven Visions Resort & Places, The Dvin, is the epitome of luxury and style. This stunning Art Deco hotel in Yerevan seamlessly blends timeless elegance with modern sophistication, offering travelers an unparalleled experience. Every aspect of the hotel's design, from its lavish rooms to its custom-made décor, has been meticulously crafted to ensure an unforgettable stay. A Modern Take on Art Deco Luxury Located in the heart of Yerevan, Armenia, The Dvin is a masterpiece of Art Deco luxury. Completed in 2023, this five-star hotel offers 153 magnificent rooms, each designed to embody comfort, tranquility, and grandeur. The architecture and interiors reflect the spirit of the Art Deco era, incorporating geometric patterns, mirrored surfaces, and intricate moldings, creating an atmosphere of opulence and refinement.Every room perfectly blends timeless design with modern amenities. Large mirrors enhance the sense of space, reflecting soft lighting and creating a cozy ambiance. Bed frames are adorned with subtle geometric patterns, characteristic of the Art Deco style, while contemporary furnishings ensure maximum comfort for guests. The interiors of The Dvin are a work of art. Every detail has been carefully curated to showcase the Art Deco style with a modern twist. 3D wall panels and ceiling moldings, designed by Wall Deco, serve as key decorative elements, adding depth and character to every space.One of the most striking features is the striped 3D panels, which give the walls a bold and sophisticated appearance. The interplay of light and shadow on these surfaces creates a mesmerizing visual effect, further enhanced by LED lighting, highlighting the intricate details of the décor. In addition to striped panels, some rooms also feature unique geometric 3D panels, custom-designed exclusively for the hotel. These bespoke decorative elements add a distinct character to the hotel's interior. As guests step into The Dvin’s hallways, they are immersed in an atmosphere of refined luxury. Deep black tones dominate the corridors, creating a bold yet sophisticated aesthetic that enhances the sense of grandeur.One of the hallways' standout features is the high ceiling, which contributes to a feeling of spaciousness and elegance. Ceiling moldings add a touch of classic Art Deco charm, serving as a subtle yet significant design element. The dark and light tones balance creates a visually captivating yet harmonious ambiance. One of the most original decorative elements in the hotel is the rose-pink bas-relief behind a wine bottle in the hallway. This unique installation immediately captures guests' attention, inviting them to admire the artistry behind it. Designed by Wall Deco, this wavy bas-relief creates the illusion of movement, adding depth and intrigue to the space.This attion to detail is evident throughout the hotel, creating a visually stunning and immersive design. Every decorative choice, from custom-designed wall features to exclusive furniture pieces, has been thoughtfully integrated to form a luxurious and inviting space.",
      publisher: "john",
      date: "Feb 8th, 2025",
    },
    {
      id: 4,
      image: "/assets/Images/post-1.png",
      PublishDate: "8 Feb 2024 ",
      title: "First Time Home Owner Ideas",
      bigTitle:
        "The Dvin, Seven Visions: A Luxurious Art Deco Hotel in Yerevan, Armenia",
      articleText:
        "If you are looking for an exquisite retreat in Armenia, Seven Visions Resort & Places, The Dvin, is the epitome of luxury and style. This stunning Art Deco hotel in Yerevan seamlessly blends timeless elegance with modern sophistication, offering travelers an unparalleled experience. Every aspect of the hotel's design, from its lavish rooms to its custom-made décor, has been meticulously crafted to ensure an unforgettable stay. A Modern Take on Art Deco Luxury Located in the heart of Yerevan, Armenia, The Dvin is a masterpiece of Art Deco luxury. Completed in 2023, this five-star hotel offers 153 magnificent rooms, each designed to embody comfort, tranquility, and grandeur. The architecture and interiors reflect the spirit of the Art Deco era, incorporating geometric patterns, mirrored surfaces, and intricate moldings, creating an atmosphere of opulence and refinement.Every room perfectly blends timeless design with modern amenities. Large mirrors enhance the sense of space, reflecting soft lighting and creating a cozy ambiance. Bed frames are adorned with subtle geometric patterns, characteristic of the Art Deco style, while contemporary furnishings ensure maximum comfort for guests. The interiors of The Dvin are a work of art. Every detail has been carefully curated to showcase the Art Deco style with a modern twist. 3D wall panels and ceiling moldings, designed by Wall Deco, serve as key decorative elements, adding depth and character to every space.One of the most striking features is the striped 3D panels, which give the walls a bold and sophisticated appearance. The interplay of light and shadow on these surfaces creates a mesmerizing visual effect, further enhanced by LED lighting, highlighting the intricate details of the décor. In addition to striped panels, some rooms also feature unique geometric 3D panels, custom-designed exclusively for the hotel. These bespoke decorative elements add a distinct character to the hotel's interior. As guests step into The Dvin’s hallways, they are immersed in an atmosphere of refined luxury. Deep black tones dominate the corridors, creating a bold yet sophisticated aesthetic that enhances the sense of grandeur.One of the hallways' standout features is the high ceiling, which contributes to a feeling of spaciousness and elegance. Ceiling moldings add a touch of classic Art Deco charm, serving as a subtle yet significant design element. The dark and light tones balance creates a visually captivating yet harmonious ambiance. One of the most original decorative elements in the hotel is the rose-pink bas-relief behind a wine bottle in the hallway. This unique installation immediately captures guests' attention, inviting them to admire the artistry behind it. Designed by Wall Deco, this wavy bas-relief creates the illusion of movement, adding depth and intrigue to the space.This attion to detail is evident throughout the hotel, creating a visually stunning and immersive design. Every decorative choice, from custom-designed wall features to exclusive furniture pieces, has been thoughtfully integrated to form a luxurious and inviting space.",
      publisher: "john",
      date: "Feb 8th, 2025",
    },
    {
      id: 5,
      image: "/assets/Images/post-1.png",
      PublishDate: "8 Feb 2024 ",
      title: "First Time Home Owner Ideas",
      bigTitle:
        "The Dvin, Seven Visions: A Luxurious Art Deco Hotel in Yerevan, Armenia",
      articleText:
        "If you are looking for an exquisite retreat in Armenia, Seven Visions Resort & Places, The Dvin, is the epitome of luxury and style. This stunning Art Deco hotel in Yerevan seamlessly blends timeless elegance with modern sophistication, offering travelers an unparalleled experience. Every aspect of the hotel's design, from its lavish rooms to its custom-made décor, has been meticulously crafted to ensure an unforgettable stay. A Modern Take on Art Deco Luxury Located in the heart of Yerevan, Armenia, The Dvin is a masterpiece of Art Deco luxury. Completed in 2023, this five-star hotel offers 153 magnificent rooms, each designed to embody comfort, tranquility, and grandeur. The architecture and interiors reflect the spirit of the Art Deco era, incorporating geometric patterns, mirrored surfaces, and intricate moldings, creating an atmosphere of opulence and refinement.Every room perfectly blends timeless design with modern amenities. Large mirrors enhance the sense of space, reflecting soft lighting and creating a cozy ambiance. Bed frames are adorned with subtle geometric patterns, characteristic of the Art Deco style, while contemporary furnishings ensure maximum comfort for guests. The interiors of The Dvin are a work of art. Every detail has been carefully curated to showcase the Art Deco style with a modern twist. 3D wall panels and ceiling moldings, designed by Wall Deco, serve as key decorative elements, adding depth and character to every space.One of the most striking features is the striped 3D panels, which give the walls a bold and sophisticated appearance. The interplay of light and shadow on these surfaces creates a mesmerizing visual effect, further enhanced by LED lighting, highlighting the intricate details of the décor. In addition to striped panels, some rooms also feature unique geometric 3D panels, custom-designed exclusively for the hotel. These bespoke decorative elements add a distinct character to the hotel's interior. As guests step into The Dvin’s hallways, they are immersed in an atmosphere of refined luxury. Deep black tones dominate the corridors, creating a bold yet sophisticated aesthetic that enhances the sense of grandeur.One of the hallways' standout features is the high ceiling, which contributes to a feeling of spaciousness and elegance. Ceiling moldings add a touch of classic Art Deco charm, serving as a subtle yet significant design element. The dark and light tones balance creates a visually captivating yet harmonious ambiance. One of the most original decorative elements in the hotel is the rose-pink bas-relief behind a wine bottle in the hallway. This unique installation immediately captures guests' attention, inviting them to admire the artistry behind it. Designed by Wall Deco, this wavy bas-relief creates the illusion of movement, adding depth and intrigue to the space.This attion to detail is evident throughout the hotel, creating a visually stunning and immersive design. Every decorative choice, from custom-designed wall features to exclusive furniture pieces, has been thoughtfully integrated to form a luxurious and inviting space.",
      publisher: "john",
      date: "Feb 8th, 2025",
    },
    {
      id: 6,
      image: "/assets/Images/post-1.png",
      PublishDate: "8 Feb 2024 ",
      title: "First Time Home Owner Ideas",
      bigTitle:
        "The Dvin, Seven Visions: A Luxurious Art Deco Hotel in Yerevan, Armenia",
      articleText:
        "If you are looking for an exquisite retreat in Armenia, Seven Visions Resort & Places, The Dvin, is the epitome of luxury and style. This stunning Art Deco hotel in Yerevan seamlessly blends timeless elegance with modern sophistication, offering travelers an unparalleled experience. Every aspect of the hotel's design, from its lavish rooms to its custom-made décor, has been meticulously crafted to ensure an unforgettable stay. A Modern Take on Art Deco Luxury Located in the heart of Yerevan, Armenia, The Dvin is a masterpiece of Art Deco luxury. Completed in 2023, this five-star hotel offers 153 magnificent rooms, each designed to embody comfort, tranquility, and grandeur. The architecture and interiors reflect the spirit of the Art Deco era, incorporating geometric patterns, mirrored surfaces, and intricate moldings, creating an atmosphere of opulence and refinement.Every room perfectly blends timeless design with modern amenities. Large mirrors enhance the sense of space, reflecting soft lighting and creating a cozy ambiance. Bed frames are adorned with subtle geometric patterns, characteristic of the Art Deco style, while contemporary furnishings ensure maximum comfort for guests. The interiors of The Dvin are a work of art. Every detail has been carefully curated to showcase the Art Deco style with a modern twist. 3D wall panels and ceiling moldings, designed by Wall Deco, serve as key decorative elements, adding depth and character to every space.One of the most striking features is the striped 3D panels, which give the walls a bold and sophisticated appearance. The interplay of light and shadow on these surfaces creates a mesmerizing visual effect, further enhanced by LED lighting, highlighting the intricate details of the décor. In addition to striped panels, some rooms also feature unique geometric 3D panels, custom-designed exclusively for the hotel. These bespoke decorative elements add a distinct character to the hotel's interior. As guests step into The Dvin’s hallways, they are immersed in an atmosphere of refined luxury. Deep black tones dominate the corridors, creating a bold yet sophisticated aesthetic that enhances the sense of grandeur.One of the hallways' standout features is the high ceiling, which contributes to a feeling of spaciousness and elegance. Ceiling moldings add a touch of classic Art Deco charm, serving as a subtle yet significant design element. The dark and light tones balance creates a visually captivating yet harmonious ambiance. One of the most original decorative elements in the hotel is the rose-pink bas-relief behind a wine bottle in the hallway. This unique installation immediately captures guests' attention, inviting them to admire the artistry behind it. Designed by Wall Deco, this wavy bas-relief creates the illusion of movement, adding depth and intrigue to the space.This attion to detail is evident throughout the hotel, creating a visually stunning and immersive design. Every decorative choice, from custom-designed wall features to exclusive furniture pieces, has been thoughtfully integrated to form a luxurious and inviting space.",
      publisher: "john",
      date: "Feb 8th, 2025",
    },
    {
      id: 7,
      image: "/assets/Images/post-1.png",
      PublishDate: "8 Feb 2024 ",
      title: "First Time Home Owner Ideas",
      bigTitle:
        "The Dvin, Seven Visions: A Luxurious Art Deco Hotel in Yerevan, Armenia",
      articleText:
        "If you are looking for an exquisite retreat in Armenia, Seven Visions Resort & Places, The Dvin, is the epitome of luxury and style. This stunning Art Deco hotel in Yerevan seamlessly blends timeless elegance with modern sophistication, offering travelers an unparalleled experience. Every aspect of the hotel's design, from its lavish rooms to its custom-made décor, has been meticulously crafted to ensure an unforgettable stay. A Modern Take on Art Deco Luxury Located in the heart of Yerevan, Armenia, The Dvin is a masterpiece of Art Deco luxury. Completed in 2023, this five-star hotel offers 153 magnificent rooms, each designed to embody comfort, tranquility, and grandeur. The architecture and interiors reflect the spirit of the Art Deco era, incorporating geometric patterns, mirrored surfaces, and intricate moldings, creating an atmosphere of opulence and refinement.Every room perfectly blends timeless design with modern amenities. Large mirrors enhance the sense of space, reflecting soft lighting and creating a cozy ambiance. Bed frames are adorned with subtle geometric patterns, characteristic of the Art Deco style, while contemporary furnishings ensure maximum comfort for guests. The interiors of The Dvin are a work of art. Every detail has been carefully curated to showcase the Art Deco style with a modern twist. 3D wall panels and ceiling moldings, designed by Wall Deco, serve as key decorative elements, adding depth and character to every space.One of the most striking features is the striped 3D panels, which give the walls a bold and sophisticated appearance. The interplay of light and shadow on these surfaces creates a mesmerizing visual effect, further enhanced by LED lighting, highlighting the intricate details of the décor. In addition to striped panels, some rooms also feature unique geometric 3D panels, custom-designed exclusively for the hotel. These bespoke decorative elements add a distinct character to the hotel's interior. As guests step into The Dvin’s hallways, they are immersed in an atmosphere of refined luxury. Deep black tones dominate the corridors, creating a bold yet sophisticated aesthetic that enhances the sense of grandeur.One of the hallways' standout features is the high ceiling, which contributes to a feeling of spaciousness and elegance. Ceiling moldings add a touch of classic Art Deco charm, serving as a subtle yet significant design element. The dark and light tones balance creates a visually captivating yet harmonious ambiance. One of the most original decorative elements in the hotel is the rose-pink bas-relief behind a wine bottle in the hallway. This unique installation immediately captures guests' attention, inviting them to admire the artistry behind it. Designed by Wall Deco, this wavy bas-relief creates the illusion of movement, adding depth and intrigue to the space.This attion to detail is evident throughout the hotel, creating a visually stunning and immersive design. Every decorative choice, from custom-designed wall features to exclusive furniture pieces, has been thoughtfully integrated to form a luxurious and inviting space.",
      publisher: "john",
      date: "Feb 8th, 2025",
    },
    {
      id: 8,
      image: "/assets/Images/post-1.png",
      PublishDate: "8 Feb 2024 ",
      title: "First Time Home Owner Ideas",
      bigTitle:
        "The Dvin, Seven Visions: A Luxurious Art Deco Hotel in Yerevan, Armenia",
      articleText:
        "If you are looking for an exquisite retreat in Armenia, Seven Visions Resort & Places, The Dvin, is the epitome of luxury and style. This stunning Art Deco hotel in Yerevan seamlessly blends timeless elegance with modern sophistication, offering travelers an unparalleled experience. Every aspect of the hotel's design, from its lavish rooms to its custom-made décor, has been meticulously crafted to ensure an unforgettable stay. A Modern Take on Art Deco Luxury Located in the heart of Yerevan, Armenia, The Dvin is a masterpiece of Art Deco luxury. Completed in 2023, this five-star hotel offers 153 magnificent rooms, each designed to embody comfort, tranquility, and grandeur. The architecture and interiors reflect the spirit of the Art Deco era, incorporating geometric patterns, mirrored surfaces, and intricate moldings, creating an atmosphere of opulence and refinement.Every room perfectly blends timeless design with modern amenities. Large mirrors enhance the sense of space, reflecting soft lighting and creating a cozy ambiance. Bed frames are adorned with subtle geometric patterns, characteristic of the Art Deco style, while contemporary furnishings ensure maximum comfort for guests. The interiors of The Dvin are a work of art. Every detail has been carefully curated to showcase the Art Deco style with a modern twist. 3D wall panels and ceiling moldings, designed by Wall Deco, serve as key decorative elements, adding depth and character to every space.One of the most striking features is the striped 3D panels, which give the walls a bold and sophisticated appearance. The interplay of light and shadow on these surfaces creates a mesmerizing visual effect, further enhanced by LED lighting, highlighting the intricate details of the décor. In addition to striped panels, some rooms also feature unique geometric 3D panels, custom-designed exclusively for the hotel. These bespoke decorative elements add a distinct character to the hotel's interior. As guests step into The Dvin’s hallways, they are immersed in an atmosphere of refined luxury. Deep black tones dominate the corridors, creating a bold yet sophisticated aesthetic that enhances the sense of grandeur.One of the hallways' standout features is the high ceiling, which contributes to a feeling of spaciousness and elegance. Ceiling moldings add a touch of classic Art Deco charm, serving as a subtle yet significant design element. The dark and light tones balance creates a visually captivating yet harmonious ambiance. One of the most original decorative elements in the hotel is the rose-pink bas-relief behind a wine bottle in the hallway. This unique installation immediately captures guests' attention, inviting them to admire the artistry behind it. Designed by Wall Deco, this wavy bas-relief creates the illusion of movement, adding depth and intrigue to the space.This attion to detail is evident throughout the hotel, creating a visually stunning and immersive design. Every decorative choice, from custom-designed wall features to exclusive furniture pieces, has been thoughtfully integrated to form a luxurious and inviting space.",
      publisher: "john",
      date: "Feb 8th, 2025",
    },
    {
      id: 9,
      image: "/assets/Images/post-1.png",
      PublishDate: "8 Feb 2024 ",
      title: "First Time Home Owner Ideas",
      bigTitle:
        "The Dvin, Seven Visions: A Luxurious Art Deco Hotel in Yerevan, Armenia",
      articleText:
        "If you are looking for an exquisite retreat in Armenia, Seven Visions Resort & Places, The Dvin, is the epitome of luxury and style. This stunning Art Deco hotel in Yerevan seamlessly blends timeless elegance with modern sophistication, offering travelers an unparalleled experience. Every aspect of the hotel's design, from its lavish rooms to its custom-made décor, has been meticulously crafted to ensure an unforgettable stay. A Modern Take on Art Deco Luxury Located in the heart of Yerevan, Armenia, The Dvin is a masterpiece of Art Deco luxury. Completed in 2023, this five-star hotel offers 153 magnificent rooms, each designed to embody comfort, tranquility, and grandeur. The architecture and interiors reflect the spirit of the Art Deco era, incorporating geometric patterns, mirrored surfaces, and intricate moldings, creating an atmosphere of opulence and refinement.Every room perfectly blends timeless design with modern amenities. Large mirrors enhance the sense of space, reflecting soft lighting and creating a cozy ambiance. Bed frames are adorned with subtle geometric patterns, characteristic of the Art Deco style, while contemporary furnishings ensure maximum comfort for guests. The interiors of The Dvin are a work of art. Every detail has been carefully curated to showcase the Art Deco style with a modern twist. 3D wall panels and ceiling moldings, designed by Wall Deco, serve as key decorative elements, adding depth and character to every space.One of the most striking features is the striped 3D panels, which give the walls a bold and sophisticated appearance. The interplay of light and shadow on these surfaces creates a mesmerizing visual effect, further enhanced by LED lighting, highlighting the intricate details of the décor. In addition to striped panels, some rooms also feature unique geometric 3D panels, custom-designed exclusively for the hotel. These bespoke decorative elements add a distinct character to the hotel's interior. As guests step into The Dvin’s hallways, they are immersed in an atmosphere of refined luxury. Deep black tones dominate the corridors, creating a bold yet sophisticated aesthetic that enhances the sense of grandeur.One of the hallways' standout features is the high ceiling, which contributes to a feeling of spaciousness and elegance. Ceiling moldings add a touch of classic Art Deco charm, serving as a subtle yet significant design element. The dark and light tones balance creates a visually captivating yet harmonious ambiance. One of the most original decorative elements in the hotel is the rose-pink bas-relief behind a wine bottle in the hallway. This unique installation immediately captures guests' attention, inviting them to admire the artistry behind it. Designed by Wall Deco, this wavy bas-relief creates the illusion of movement, adding depth and intrigue to the space.This attion to detail is evident throughout the hotel, creating a visually stunning and immersive design. Every decorative choice, from custom-designed wall features to exclusive furniture pieces, has been thoughtfully integrated to form a luxurious and inviting space.",
      publisher: "john",
      date: "Feb 8th, 2025",
    },
    {
      id: 10,
      image: "/assets/Images/post-1.png",
      PublishDate: "8 Feb 2024 ",
      title: "First Time Home Owner Ideas",
      bigTitle:
        "The Dvin, Seven Visions: A Luxurious Art Deco Hotel in Yerevan, Armenia",
      articleText:
        "If you are looking for an exquisite retreat in Armenia, Seven Visions Resort & Places, The Dvin, is the epitome of luxury and style. This stunning Art Deco hotel in Yerevan seamlessly blends timeless elegance with modern sophistication, offering travelers an unparalleled experience. Every aspect of the hotel's design, from its lavish rooms to its custom-made décor, has been meticulously crafted to ensure an unforgettable stay. A Modern Take on Art Deco Luxury Located in the heart of Yerevan, Armenia, The Dvin is a masterpiece of Art Deco luxury. Completed in 2023, this five-star hotel offers 153 magnificent rooms, each designed to embody comfort, tranquility, and grandeur. The architecture and interiors reflect the spirit of the Art Deco era, incorporating geometric patterns, mirrored surfaces, and intricate moldings, creating an atmosphere of opulence and refinement.Every room perfectly blends timeless design with modern amenities. Large mirrors enhance the sense of space, reflecting soft lighting and creating a cozy ambiance. Bed frames are adorned with subtle geometric patterns, characteristic of the Art Deco style, while contemporary furnishings ensure maximum comfort for guests. The interiors of The Dvin are a work of art. Every detail has been carefully curated to showcase the Art Deco style with a modern twist. 3D wall panels and ceiling moldings, designed by Wall Deco, serve as key decorative elements, adding depth and character to every space.One of the most striking features is the striped 3D panels, which give the walls a bold and sophisticated appearance. The interplay of light and shadow on these surfaces creates a mesmerizing visual effect, further enhanced by LED lighting, highlighting the intricate details of the décor. In addition to striped panels, some rooms also feature unique geometric 3D panels, custom-designed exclusively for the hotel. These bespoke decorative elements add a distinct character to the hotel's interior. As guests step into The Dvin’s hallways, they are immersed in an atmosphere of refined luxury. Deep black tones dominate the corridors, creating a bold yet sophisticated aesthetic that enhances the sense of grandeur.One of the hallways' standout features is the high ceiling, which contributes to a feeling of spaciousness and elegance. Ceiling moldings add a touch of classic Art Deco charm, serving as a subtle yet significant design element. The dark and light tones balance creates a visually captivating yet harmonious ambiance. One of the most original decorative elements in the hotel is the rose-pink bas-relief behind a wine bottle in the hallway. This unique installation immediately captures guests' attention, inviting them to admire the artistry behind it. Designed by Wall Deco, this wavy bas-relief creates the illusion of movement, adding depth and intrigue to the space.This attion to detail is evident throughout the hotel, creating a visually stunning and immersive design. Every decorative choice, from custom-designed wall features to exclusive furniture pieces, has been thoughtfully integrated to form a luxurious and inviting space.",
      publisher: "john",
      date: "Feb 8th, 2025",
    },
    {
      id: 11,
      image: "/assets/Images/post-1.png",
      PublishDate: "8 Feb 2024 ",
      title: "First Time Home Owner Ideas",
      bigTitle:
        "The Dvin, Seven Visions: A Luxurious Art Deco Hotel in Yerevan, Armenia",
      articleText:
        "If you are looking for an exquisite retreat in Armenia, Seven Visions Resort & Places, The Dvin, is the epitome of luxury and style. This stunning Art Deco hotel in Yerevan seamlessly blends timeless elegance with modern sophistication, offering travelers an unparalleled experience. Every aspect of the hotel's design, from its lavish rooms to its custom-made décor, has been meticulously crafted to ensure an unforgettable stay. A Modern Take on Art Deco Luxury Located in the heart of Yerevan, Armenia, The Dvin is a masterpiece of Art Deco luxury. Completed in 2023, this five-star hotel offers 153 magnificent rooms, each designed to embody comfort, tranquility, and grandeur. The architecture and interiors reflect the spirit of the Art Deco era, incorporating geometric patterns, mirrored surfaces, and intricate moldings, creating an atmosphere of opulence and refinement.Every room perfectly blends timeless design with modern amenities. Large mirrors enhance the sense of space, reflecting soft lighting and creating a cozy ambiance. Bed frames are adorned with subtle geometric patterns, characteristic of the Art Deco style, while contemporary furnishings ensure maximum comfort for guests. The interiors of The Dvin are a work of art. Every detail has been carefully curated to showcase the Art Deco style with a modern twist. 3D wall panels and ceiling moldings, designed by Wall Deco, serve as key decorative elements, adding depth and character to every space.One of the most striking features is the striped 3D panels, which give the walls a bold and sophisticated appearance. The interplay of light and shadow on these surfaces creates a mesmerizing visual effect, further enhanced by LED lighting, highlighting the intricate details of the décor. In addition to striped panels, some rooms also feature unique geometric 3D panels, custom-designed exclusively for the hotel. These bespoke decorative elements add a distinct character to the hotel's interior. As guests step into The Dvin’s hallways, they are immersed in an atmosphere of refined luxury. Deep black tones dominate the corridors, creating a bold yet sophisticated aesthetic that enhances the sense of grandeur.One of the hallways' standout features is the high ceiling, which contributes to a feeling of spaciousness and elegance. Ceiling moldings add a touch of classic Art Deco charm, serving as a subtle yet significant design element. The dark and light tones balance creates a visually captivating yet harmonious ambiance. One of the most original decorative elements in the hotel is the rose-pink bas-relief behind a wine bottle in the hallway. This unique installation immediately captures guests' attention, inviting them to admire the artistry behind it. Designed by Wall Deco, this wavy bas-relief creates the illusion of movement, adding depth and intrigue to the space.This attion to detail is evident throughout the hotel, creating a visually stunning and immersive design. Every decorative choice, from custom-designed wall features to exclusive furniture pieces, has been thoughtfully integrated to form a luxurious and inviting space.",
      publisher: "john",
      date: "Feb 8th, 2025",
    },
    {
      id: 12,
      image: "/assets/Images/post-1.png",
      PublishDate: "8 Feb 2024 ",
      title: "First Time Home Owner Ideas",
      bigTitle:
        "The Dvin, Seven Visions: A Luxurious Art Deco Hotel in Yerevan, Armenia",
      articleText:
        "If you are looking for an exquisite retreat in Armenia, Seven Visions Resort & Places, The Dvin, is the epitome of luxury and style. This stunning Art Deco hotel in Yerevan seamlessly blends timeless elegance with modern sophistication, offering travelers an unparalleled experience. Every aspect of the hotel's design, from its lavish rooms to its custom-made décor, has been meticulously crafted to ensure an unforgettable stay. A Modern Take on Art Deco Luxury Located in the heart of Yerevan, Armenia, The Dvin is a masterpiece of Art Deco luxury. Completed in 2023, this five-star hotel offers 153 magnificent rooms, each designed to embody comfort, tranquility, and grandeur. The architecture and interiors reflect the spirit of the Art Deco era, incorporating geometric patterns, mirrored surfaces, and intricate moldings, creating an atmosphere of opulence and refinement.Every room perfectly blends timeless design with modern amenities. Large mirrors enhance the sense of space, reflecting soft lighting and creating a cozy ambiance. Bed frames are adorned with subtle geometric patterns, characteristic of the Art Deco style, while contemporary furnishings ensure maximum comfort for guests. The interiors of The Dvin are a work of art. Every detail has been carefully curated to showcase the Art Deco style with a modern twist. 3D wall panels and ceiling moldings, designed by Wall Deco, serve as key decorative elements, adding depth and character to every space.One of the most striking features is the striped 3D panels, which give the walls a bold and sophisticated appearance. The interplay of light and shadow on these surfaces creates a mesmerizing visual effect, further enhanced by LED lighting, highlighting the intricate details of the décor. In addition to striped panels, some rooms also feature unique geometric 3D panels, custom-designed exclusively for the hotel. These bespoke decorative elements add a distinct character to the hotel's interior. As guests step into The Dvin’s hallways, they are immersed in an atmosphere of refined luxury. Deep black tones dominate the corridors, creating a bold yet sophisticated aesthetic that enhances the sense of grandeur.One of the hallways' standout features is the high ceiling, which contributes to a feeling of spaciousness and elegance. Ceiling moldings add a touch of classic Art Deco charm, serving as a subtle yet significant design element. The dark and light tones balance creates a visually captivating yet harmonious ambiance. One of the most original decorative elements in the hotel is the rose-pink bas-relief behind a wine bottle in the hallway. This unique installation immediately captures guests' attention, inviting them to admire the artistry behind it. Designed by Wall Deco, this wavy bas-relief creates the illusion of movement, adding depth and intrigue to the space.This attion to detail is evident throughout the hotel, creating a visually stunning and immersive design. Every decorative choice, from custom-designed wall features to exclusive furniture pieces, has been thoughtfully integrated to form a luxurious and inviting space.",
      publisher: "john",
      date: "Feb 8th, 2025",
    },
    {
      id: 13,
      image: "/assets/Images/post-1.png",
      PublishDate: "8 Feb 2024 ",
      title: "First Time Home Owner Ideas",
      bigTitle:
        "The Dvin, Seven Visions: A Luxurious Art Deco Hotel in Yerevan, Armenia",
      articleText:
        "If you are looking for an exquisite retreat in Armenia, Seven Visions Resort & Places, The Dvin, is the epitome of luxury and style. This stunning Art Deco hotel in Yerevan seamlessly blends timeless elegance with modern sophistication, offering travelers an unparalleled experience. Every aspect of the hotel's design, from its lavish rooms to its custom-made décor, has been meticulously crafted to ensure an unforgettable stay. A Modern Take on Art Deco Luxury Located in the heart of Yerevan, Armenia, The Dvin is a masterpiece of Art Deco luxury. Completed in 2023, this five-star hotel offers 153 magnificent rooms, each designed to embody comfort, tranquility, and grandeur. The architecture and interiors reflect the spirit of the Art Deco era, incorporating geometric patterns, mirrored surfaces, and intricate moldings, creating an atmosphere of opulence and refinement.Every room perfectly blends timeless design with modern amenities. Large mirrors enhance the sense of space, reflecting soft lighting and creating a cozy ambiance. Bed frames are adorned with subtle geometric patterns, characteristic of the Art Deco style, while contemporary furnishings ensure maximum comfort for guests. The interiors of The Dvin are a work of art. Every detail has been carefully curated to showcase the Art Deco style with a modern twist. 3D wall panels and ceiling moldings, designed by Wall Deco, serve as key decorative elements, adding depth and character to every space.One of the most striking features is the striped 3D panels, which give the walls a bold and sophisticated appearance. The interplay of light and shadow on these surfaces creates a mesmerizing visual effect, further enhanced by LED lighting, highlighting the intricate details of the décor. In addition to striped panels, some rooms also feature unique geometric 3D panels, custom-designed exclusively for the hotel. These bespoke decorative elements add a distinct character to the hotel's interior. As guests step into The Dvin’s hallways, they are immersed in an atmosphere of refined luxury. Deep black tones dominate the corridors, creating a bold yet sophisticated aesthetic that enhances the sense of grandeur.One of the hallways' standout features is the high ceiling, which contributes to a feeling of spaciousness and elegance. Ceiling moldings add a touch of classic Art Deco charm, serving as a subtle yet significant design element. The dark and light tones balance creates a visually captivating yet harmonious ambiance. One of the most original decorative elements in the hotel is the rose-pink bas-relief behind a wine bottle in the hallway. This unique installation immediately captures guests' attention, inviting them to admire the artistry behind it. Designed by Wall Deco, this wavy bas-relief creates the illusion of movement, adding depth and intrigue to the space.This attion to detail is evident throughout the hotel, creating a visually stunning and immersive design. Every decorative choice, from custom-designed wall features to exclusive furniture pieces, has been thoughtfully integrated to form a luxurious and inviting space.",
      publisher: "john",
      date: "Feb 8th, 2025",
    },
    {
      id: 14,
      image: "/assets/Images/post-1.png",
      PublishDate: "8 Feb 2024 ",
      title: "First Time Home Owner Ideas",
      bigTitle:
        "The Dvin, Seven Visions: A Luxurious Art Deco Hotel in Yerevan, Armenia",
      articleText:
        "If you are looking for an exquisite retreat in Armenia, Seven Visions Resort & Places, The Dvin, is the epitome of luxury and style. This stunning Art Deco hotel in Yerevan seamlessly blends timeless elegance with modern sophistication, offering travelers an unparalleled experience. Every aspect of the hotel's design, from its lavish rooms to its custom-made décor, has been meticulously crafted to ensure an unforgettable stay. A Modern Take on Art Deco Luxury Located in the heart of Yerevan, Armenia, The Dvin is a masterpiece of Art Deco luxury. Completed in 2023, this five-star hotel offers 153 magnificent rooms, each designed to embody comfort, tranquility, and grandeur. The architecture and interiors reflect the spirit of the Art Deco era, incorporating geometric patterns, mirrored surfaces, and intricate moldings, creating an atmosphere of opulence and refinement.Every room perfectly blends timeless design with modern amenities. Large mirrors enhance the sense of space, reflecting soft lighting and creating a cozy ambiance. Bed frames are adorned with subtle geometric patterns, characteristic of the Art Deco style, while contemporary furnishings ensure maximum comfort for guests. The interiors of The Dvin are a work of art. Every detail has been carefully curated to showcase the Art Deco style with a modern twist. 3D wall panels and ceiling moldings, designed by Wall Deco, serve as key decorative elements, adding depth and character to every space.One of the most striking features is the striped 3D panels, which give the walls a bold and sophisticated appearance. The interplay of light and shadow on these surfaces creates a mesmerizing visual effect, further enhanced by LED lighting, highlighting the intricate details of the décor. In addition to striped panels, some rooms also feature unique geometric 3D panels, custom-designed exclusively for the hotel. These bespoke decorative elements add a distinct character to the hotel's interior. As guests step into The Dvin’s hallways, they are immersed in an atmosphere of refined luxury. Deep black tones dominate the corridors, creating a bold yet sophisticated aesthetic that enhances the sense of grandeur.One of the hallways' standout features is the high ceiling, which contributes to a feeling of spaciousness and elegance. Ceiling moldings add a touch of classic Art Deco charm, serving as a subtle yet significant design element. The dark and light tones balance creates a visually captivating yet harmonious ambiance. One of the most original decorative elements in the hotel is the rose-pink bas-relief behind a wine bottle in the hallway. This unique installation immediately captures guests' attention, inviting them to admire the artistry behind it. Designed by Wall Deco, this wavy bas-relief creates the illusion of movement, adding depth and intrigue to the space.This attion to detail is evident throughout the hotel, creating a visually stunning and immersive design. Every decorative choice, from custom-designed wall features to exclusive furniture pieces, has been thoughtfully integrated to form a luxurious and inviting space.",
      publisher: "john",
      date: "Feb 8th, 2025",
    },
    {
      id: 15,
      image: "/assets/Images/post-1.png",
      PublishDate: "8 Feb 2024 ",
      title: "First Time Home Owner Ideas",
      bigTitle:
        "The Dvin, Seven Visions: A Luxurious Art Deco Hotel in Yerevan, Armenia",
      articleText:
        "If you are looking for an exquisite retreat in Armenia, Seven Visions Resort & Places, The Dvin, is the epitome of luxury and style. This stunning Art Deco hotel in Yerevan seamlessly blends timeless elegance with modern sophistication, offering travelers an unparalleled experience. Every aspect of the hotel's design, from its lavish rooms to its custom-made décor, has been meticulously crafted to ensure an unforgettable stay. A Modern Take on Art Deco Luxury Located in the heart of Yerevan, Armenia, The Dvin is a masterpiece of Art Deco luxury. Completed in 2023, this five-star hotel offers 153 magnificent rooms, each designed to embody comfort, tranquility, and grandeur. The architecture and interiors reflect the spirit of the Art Deco era, incorporating geometric patterns, mirrored surfaces, and intricate moldings, creating an atmosphere of opulence and refinement.Every room perfectly blends timeless design with modern amenities. Large mirrors enhance the sense of space, reflecting soft lighting and creating a cozy ambiance. Bed frames are adorned with subtle geometric patterns, characteristic of the Art Deco style, while contemporary furnishings ensure maximum comfort for guests. The interiors of The Dvin are a work of art. Every detail has been carefully curated to showcase the Art Deco style with a modern twist. 3D wall panels and ceiling moldings, designed by Wall Deco, serve as key decorative elements, adding depth and character to every space.One of the most striking features is the striped 3D panels, which give the walls a bold and sophisticated appearance. The interplay of light and shadow on these surfaces creates a mesmerizing visual effect, further enhanced by LED lighting, highlighting the intricate details of the décor. In addition to striped panels, some rooms also feature unique geometric 3D panels, custom-designed exclusively for the hotel. These bespoke decorative elements add a distinct character to the hotel's interior. As guests step into The Dvin’s hallways, they are immersed in an atmosphere of refined luxury. Deep black tones dominate the corridors, creating a bold yet sophisticated aesthetic that enhances the sense of grandeur.One of the hallways' standout features is the high ceiling, which contributes to a feeling of spaciousness and elegance. Ceiling moldings add a touch of classic Art Deco charm, serving as a subtle yet significant design element. The dark and light tones balance creates a visually captivating yet harmonious ambiance. One of the most original decorative elements in the hotel is the rose-pink bas-relief behind a wine bottle in the hallway. This unique installation immediately captures guests' attention, inviting them to admire the artistry behind it. Designed by Wall Deco, this wavy bas-relief creates the illusion of movement, adding depth and intrigue to the space.This attion to detail is evident throughout the hotel, creating a visually stunning and immersive design. Every decorative choice, from custom-designed wall features to exclusive furniture pieces, has been thoughtfully integrated to form a luxurious and inviting space.",
      publisher: "john",
      date: "Feb 8th, 2025",
    },
  ];
  /* const recentBlogs = [
    {
      id: 1,
      blogTitle:
        "The Dvin, Seven Visions: A Luxurious Art Deco Hotel in Yerevan, Armenia",
      publisherDate: " 5 Sep 2024",
      publisherName: "Auther name",
    },
    {
      id: 2,
      blogTitle:
        "The Dvin, Seven Visions: A Luxurious Art Deco Hotel in Yerevan, Armenia",
      publisherDate: " 5 Sep 2024",
      publisherName: "Auther name",
    },
    {
      id: 3,
      blogTitle:
        "The Dvin, Seven Visions: A Luxurious Art Deco Hotel in Yerevan, Armenia",
      publisherDate: " 5 Sep 2024",
      publisherName: "Auther name",
    },
    {
      id: 4,
      blogTitle:
        "The Dvin, Seven Visions: A Luxurious Art Deco Hotel in Yerevan, Armenia",
      publisherDate: " 5 Sep 2024",
      publisherName: "Auther name",
    },
  ]; */

  const [searchedKey, setSearchedKey] = useState("");
  const [recentBlogs, setRecentBlogs] = useState([]);
  const [filteredBlogs, setFilteredBlogs] = useState(recentBlogs);
  const { id } = useParams();
  const blog = postsDetails.find((b) => b.id === parseInt(id));
  useEffect(() => {
    axios
      .get(config.baseUrl + "/" + config.recentblogs)
      .then((res) => {
        setRecentBlogs(res.data);
        setFilteredBlogs(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  useEffect(() => {
    const res = recentBlogs.filter((blog) => blog.title.includes(searchedKey));
    setFilteredBlogs(res);
  }, [searchedKey]);

  return (
    <div className="blogs">
      <TopGreenBar dynamicLink={blog.bigTitle} />
      <div className="container">
        <div className="blogs-detais-container">
          <div className="article-detailes">
            <img className="blog-img" src={blog.image} />
            <div className="date-publisher">
              <p>{blog.PublishDate}</p>
              <p>-</p>
              <p>{blog.publisher}</p>
            </div>
            <div className="article-body">
              <h1>{blog.bigTitle}</h1>
              <p>{blog.articleText}</p>
            </div>
            <div className="share-post">
              <p>Share Post:</p>
              <a>
                <img src="/assets/Images/whatsapp.png" />
              </a>
              <a>
                <img src="/assets/Images/facebook.png" />
              </a>
              <a>
                <img src="/assets/Images/linkedin.png" />
              </a>
              <a>
                <img src="/assets/Images/link.png" />
              </a>
              <a>
                <img src="/assets/Images/email.png" />
              </a>
            </div>
            <div className="posts-slider">
              <div className="previous">
                <GrFormPreviousLink className="previous-icon" />
                <p>Previous Post</p>
              </div>
              <div className="next">
                <p>Next Post</p>
                <GrFormNextLink className="next-icon" />
              </div>
            </div>
            <div className="comment-bar">
              <h1>
                Comment: <span>1</span>
              </h1>
              <div className="name-and-comment">
                <div className="name-and-time">
                  <p className="name">Batoul abdulHadi </p>
                  <p className="time"> 5 days ago</p>
                </div>

                <p className="comment">
                  "Such a well-written piece! Insightful and inspiring — keep up
                  the amazing work!"
                </p>
              </div>
            </div>
            <div className="write-comment-sec">
              <h1>Post a comment</h1>
              <div className="write-comment-form">
                <div className="phone-email-info">
                  <input type="text" placeholder="Phone"></input>
                  <input type="text" placeholder="E-mail"></input>
                </div>
                <div className="textarea-to-write-comment">
                  <label>Your Message</label>
                  <textarea />
                </div>
                <div className="agree-yo-save-your-info">
                  <input className="check" type="checkbox" />
                  <label>
                    Save my name, email, and website in this browser for the
                    next time I comment.
                  </label>
                </div>
                <button className="send-comment">Send</button>
              </div>
            </div>
          </div>
          <div className="recent-posts-info">
            <h3>Search</h3>
            <div className="search-container">
              <input
                type="text"
                value={searchedKey}
                onChange={(e) => setSearchedKey(e.target.value)}
              />
              <CiSearch className="search-icon" />
            </div>
            <div className="recent-posts">
              <h2 className="recent-blogs-text">Recent Posts</h2>
              <div className="recent-blogs">
                {filteredBlogs.map((recent) => (
                  <RecentBlog
                    key={recent.id}
                    id={recent.id}
                    title={recent.title}
                    date={recent.date}
                    publisher={recent?.publisher}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogsDetails;
