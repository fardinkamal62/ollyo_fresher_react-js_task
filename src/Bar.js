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
                {length > 0 ? <b>{length} {length === 1 ? 'Image' : 'Images'} Selected</b> : <b>Total {items.length} Images</b>}
                {length > 0 && <IconButton
                    sx={{ color: 'red' }}
                    aria-label={`trash-all`}
                    onClick={() => deleteImages()}
                >
                    <DeleteOutline />
                </IconButton>}
                <Button
                    variant="contained"
                    onClick={() => selectAll(false)}
                >
                    Deselect All
                </Button>
                <Button
                    variant="contained"
                    onClick={() => selectAll(true)}
                >
                    Select All
                </Button>
            </div>
        </>
    );
};
