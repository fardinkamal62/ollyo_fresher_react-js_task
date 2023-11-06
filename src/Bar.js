import React from 'react';
import IconButton from '@mui/material/IconButton';
import DeleteOutline from '@mui/icons-material/DeleteOutline';
import Button from '@mui/material/Button';

export default function Bar({ items, deleteImages, selectAll }) {
    const checked = items.filter(item => item.checked);
    const length = checked.length;

    return (
        <>
            <div className='bar'>
                {length > 0 ? <p>{length} {length === 1 ? 'Image' : 'Images'} Selected</p> : <p>Total {items.length} Images</p>}
                {length > 0 && <IconButton
                    sx={{ color: 'red' }}
                    aria-label={`trash-all`}
                    onClick={() => deleteImages()}
                >
                    <DeleteOutline />
                </IconButton>}
                <div>
                    <Button
                        variant="contained"
                        onClick={() => selectAll(false)}
                        style={{margin: '10px'}}
                    >
                        Deselect All
                    </Button>
                    <Button
                        variant="contained"
                        onClick={() => selectAll(true)}
                        style={{margin: '10px'}}
                    >
                        Select All
                    </Button>
                </div>
            </div>
        </>
    );
};
