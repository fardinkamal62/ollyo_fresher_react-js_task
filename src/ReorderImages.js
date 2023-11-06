import React, { Component } from 'react';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import ImageListItem from '@mui/material/ImageListItem';

function srcset(image, width, height, rows = 1, cols = 1) {
    return {
        src: `${image}?w=${width * cols}&h=${height * rows}&fit=crop&auto=format`,
        srcSet: `${image}?w=${width * cols}&h=${height * rows}&fit=crop&auto=format&dpr=2 2x`,
    };
}


class ReorderImages extends Component {
    constructor(props) {
        super();
        const { images } = props;
        this.state = {
            images,
        };
        this.dragId = '';
    }

    imageDragOver = ev => ev.preventDefault();

    imageDragStart = ev => (this.dragId = ev.target.id);

    dropImage = ev => {
        ev.preventDefault();
        const dragElement = this.dragId.split('-');
        let dragIndex = '';
        if (dragElement.length > 1) {
            dragIndex = dragElement[0];
        }

        const dropElement = ev.target.id.split('-');
        let dropIndex = '';
        if (dropElement.length > 1) {
            dropIndex = dropElement[0];
        }

        if (dragIndex !== '' && dropIndex !== '') {
            const { images } = this.state;
            const dragObject = images[dragIndex];
            images.splice(dragIndex, 1);
            images.splice(dropIndex, 0, dragObject);
            this.setState({ images });
            this.props.callback(images);
        }
    };

    render() {
        const { images } = this.state;
        return (
            <div>
                {images &&
                    images.length > 0 &&
                    images.map((item, index) => {
                        return (
                            <ImageListItem key={item.img} cols={1} rows={1} id={`${index}-div`} onDrop={this.dropImage} onDragOver={this.imageDragOver}>
                                <img
                                    {...srcset(item.img, 250, 200, 1, 1)}
                                    id={`${index}-img`}
                                    alt={item.title}
                                    draggable={true}
                                    onDragStart={this.imageDragStart}
                                    data-holder-rendered='true'
                                />
                                <ImageListItemBar
                                    title={item.title}
                                    position="top"
                                    actionIcon={
                                        <IconButton
                                            sx={{ color: 'white' }}
                                            aria-label={`star ${item.title}`}
                                        >
                                            <StarBorderIcon />
                                        </IconButton>
                                    }
                                    actionPosition="left"
                                />
                            </ImageListItem>
                        );
                    })}
            </div>
        );
    }
}
export default ReorderImages;