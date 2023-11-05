import * as React from 'react';
import { useState } from "react";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';

import Images from './ImageList';

function srcset(image, width, height, rows = 1, cols = 1) {
    return {
        src: `${image}?w=${width * cols}&h=${height * rows}&fit=crop&auto=format`,
        srcSet: `${image}?w=${width * cols}&h=${height * rows
            }&fit=crop&auto=format&dpr=2 2x`,
    };
}

export default function Gallery() {
    const [items, setItems] = useState(itemData);
    const [featured, setFeatured] = useState(itemData[0]);

    const toggleFeatured = (item) => {
        setFeatured(() => item);

        const title = item.title;
        setItems((prevItemData) =>
            prevItemData.map((item) =>
                item.title === title ? { ...item, featured: !item.featured } : item
            )
        );

    };

    return (
        <>
            <ImageList sx={{}} gap={5} style={{ margin: '10%' }}>
                <ImageListItem key={featured.img} cols={2} rows={2} style={{ marginBottom: '10%' }}>
                    <img
                        {...srcset(featured.img, 250, 200, 2, 2)}
                        alt={featured.title}
                        loading="lazy"
                        onDragStart={(e) => e.preventDefault()}
                    />
                    <ImageListItemBar
                        title={"Featured"}
                        position="top"
                        actionIcon={
                            <IconButton
                                sx={{ color: 'white' }}
                                aria-label={`star ${featured.title}`}
                            >
                            </IconButton>
                        }
                        actionPosition="left"
                    />
                </ImageListItem>
                <Images items={items} featured={featured} toggleFeatured={toggleFeatured}/>
            </ImageList>
        </>
    );
}

const itemData = [
    {
        img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
        title: 'Breakfast',
        author: '@bkristastucchio',
        featured: true,
    },
    {
        img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
        title: 'Burger',
        author: '@rollelflex_graphy726',
    },
    {
        img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
        title: 'Camera',
        author: '@helloimnik',
    },
    {
        img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
        title: 'Coffee',
        author: '@nolanissac',
    },
    {
        img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
        title: 'Hats',
        author: '@hjrc33',
    },
    {
        img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
        title: 'Honey',
        author: '@arwinneil',
        featured: true,
    },
    {
        img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
        title: 'Basketball',
        author: '@tjdragotta',
    },
    {
        img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
        title: 'Fern',
        author: '@katie_wasserman',
    },
    {
        img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
        title: 'Mushrooms',
        author: '@silverdalex',
    },
    {
        img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
        title: 'Tomato basil',
        author: '@shelleypauls',
    },
    {
        img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
        title: 'Sea star',
        author: '@peterlaster',
    },
    {
        img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
        title: 'Bike',
        author: '@southside_customs',
    },
];
