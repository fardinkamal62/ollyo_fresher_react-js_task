import React, {Component} from 'react';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import CheckBoxOutlineBlankOutlinedIcon from '@mui/icons-material/CheckBoxOutlineBlankOutlined';
import CheckBoxOutlined from '@mui/icons-material/CheckBoxOutlined';
import DeleteOutline from '@mui/icons-material/DeleteOutline';
import ImageListItem from '@mui/material/ImageListItem';
import ImageList from '@mui/material/ImageList';

function deepEqual(x, y) {
    const ok = Object.keys, tx = typeof x, ty = typeof y;
    return x && y && tx === 'object' && tx === ty ? (
        ok(x).length === ok(y).length &&
        ok(x).every(key => deepEqual(x[key], y[key]))
    ) : (x === y);
}

class ReorderImages extends Component {
    constructor(props) {
        super(props);
        const {images, style, toggleSelect, deleteImages} = props;
        this.state = {
            images, style, toggleSelect, deleteImages
        };
        this.dragId = '';
    }

    componentDidUpdate(prevProps) {
        if (!deepEqual(prevProps.images, this.props.images)) {
            this.setState({images: this.props.images});
        }
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
            const {images} = this.state;
            const dragObject = images[dragIndex];
            images.splice(dragIndex, 1);
            images.splice(dropIndex, 0, dragObject);
            this.setState({images});
            this.props.callback(images);
        }
    };

    render() {
        const {images, style, toggleSelect, deleteImages} = this.state;
        if (!images || images.length < 1) return null;

        return (
            <>{images && images.length > 0 &&
                <ImageList
                    variant="masonry"
                    cols={2}
                    style={style ? style : {}}
                >
                    <ImageListItem key={`${images[0].title}-list`} id={`0-div`} onDrop={this.dropImage}
                                   onDragOver={this.imageDragOver}
                                   className={images[0].selected ? 'image-selected' : ''}>
                        <img
                            src={images[0].img}
                            srcSet={images[0].img}
                            alt={images[0].title}
                            loading="lazy"
                            id={`0-img`}
                            draggable={true}
                            onDragStart={this.imageDragStart}
                            key={images[0].title}
                            className="image-hover"
                        />
                        <ImageListItemBar
                            title={"Featured"}
                            position="top"
                            draggable={true}
                            onDragStart={this.imageDragStart}
                            id={`0-bar`}
                            actionIcon={
                                <>
                                    <IconButton
                                        sx={{color: 'white'}}
                                        aria-label={`star ${images[0].title}`}
                                        onClick={() => toggleSelect(images[0])}
                                    >
                                        {images[0].checked ? <CheckBoxOutlined/> :
                                            <CheckBoxOutlineBlankOutlinedIcon/>}
                                    </IconButton>
                                    <IconButton
                                        sx={{color: 'white'}}
                                        aria-label={`trash ${images[0].title}`}
                                        onClick={() => deleteImages(images[0])}
                                    >
                                        <DeleteOutline/>
                                    </IconButton>
                                </>
                            }
                            actionPosition="left"
                        />
                    </ImageListItem>
                </ImageList>
            }
                <ImageList
                    variant="masonry"
                    cols={4}
                    style={style ? style : {}}
                >
                    {images.map((item, index) => {
                        if (index === 0) {
                            return null;
                        } else {
                            return (
                                <ImageListItem key={`${item.title}-list`} cols={1} rows={1} id={`${index}-div`}
                                               onDrop={this.dropImage} onDragOver={this.imageDragOver}>
                                    <img
                                        src={item.img}
                                        srcSet={item.img}
                                        loading="lazy"
                                        id={`${index}-img`}
                                        alt={item.title}
                                        draggable={true}
                                        onDragStart={this.imageDragStart}
                                        key={item.title}
                                        className="image-hover image-selected"
                                    />
                                    <ImageListItemBar
                                        position="top"
                                        draggable={true}
                                        onDragStart={this.imageDragStart}
                                        id={`${index}-bar`}
                                        actionIcon={
                                            <>
                                                <IconButton
                                                    sx={{color: 'white'}}
                                                    aria-label={`star ${item.title}`}
                                                    onClick={() => toggleSelect(item)}
                                                >
                                                    {item.checked ? <CheckBoxOutlined/> :
                                                        <CheckBoxOutlineBlankOutlinedIcon/>}
                                                </IconButton>
                                                <IconButton
                                                    sx={{color: 'white'}}
                                                    aria-label={`trash ${item.title}`}
                                                    onClick={() => deleteImages(item)}
                                                >
                                                    <DeleteOutline/>
                                                </IconButton>
                                            </>
                                        }
                                        actionPosition="left"
                                    />
                                </ImageListItem>
                            )
                        }
                    })}
                </ImageList>
            </>
        )
    }
}

export default ReorderImages;


/*
Credit: https://github.com/syadav214/react-reorder-images
Proudly copied, skillfully modified
*/