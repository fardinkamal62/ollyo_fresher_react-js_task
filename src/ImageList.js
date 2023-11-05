import { ImageListItem, ImageListItemBar, IconButton } from '@mui/material';
import StarBorderIcon from '@mui/icons-material/StarBorder';

function srcset(image, width, height, rows = 1, cols = 1) {
    return {
        src: `${image}?w=${width * cols}&h=${height * rows}&fit=crop&auto=format`,
        srcSet: `${image}?w=${width * cols}&h=${height * rows
            }&fit=crop&auto=format&dpr=2 2x`,
    };
}

export default function ImageList({ items, featured, toggleFeatured }) {
    return (
        <>
            {items.map((item) => {
                if (item.title === featured?.title) return null;
                return (
                    <ImageListItem key={item.img} cols={1} rows={1}>
                        <img
                            {...srcset(item.img, 250, 200, 1, 1)}
                            alt={item.title}
                            loading="lazy"
                            onDragStart={(e) => e.preventDefault()}
                        />
                        <ImageListItemBar
                            title={item.title}
                            position="top"
                            actionIcon={
                                <IconButton
                                    sx={{ color: 'white' }}
                                    aria-label={`star ${item.title}`}
                                    onClick={() => toggleFeatured(item)}
                                >
                                    <StarBorderIcon />
                                </IconButton>
                            }
                            actionPosition="left"
                        />
                    </ImageListItem>
                );
            })}
        </>
    );
};
