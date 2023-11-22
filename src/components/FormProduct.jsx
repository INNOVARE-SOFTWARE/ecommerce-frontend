import { useEffect, useState } from 'react';
<<<<<<< HEAD
import { Skeleton, Box } from "@mui/material";
import Button from '@mui/material/Button';
=======
import { TextField, Box, Button } from "@mui/material";
>>>>>>> 0171aa5f9d2f58ee29c0fb3d7094a610868a27b4
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
<<<<<<< HEAD
import { TextField, AppBar, Container, IconButton, Toolbar, Typography } from '@mui/material';
import { createProduct } from '../api/products.api';

=======
import { createProduct } from '../api/products.api';


>>>>>>> 0171aa5f9d2f58ee29c0fb3d7094a610868a27b4
function FormProduct(props) {
    const [open, setOpen] = useState(false);
    const [product, setProduct] = useState({
        name: '',
        catalog: '',
        image: '',
        description: '',
        price: 0,
        stock: 0
    });

    const handleClickOpen = () => {
        setOpen(true);
<<<<<<< HEAD
    };
=======
    }
>>>>>>> 0171aa5f9d2f58ee29c0fb3d7094a610868a27b4

    const handleClose = () => {
        setOpen(false);
    };

<<<<<<< HEAD

    const handleSubmit = (e) => {
        e.preventDefault();
        createProduct(product).then((response) => {
            if (response.data) {
                setOpen(false);
                props.fetchData()
            }
        }).catch((error) => {
            alert(error);
            setOpen(false);
        });  
      
    }


=======
>>>>>>> 0171aa5f9d2f58ee29c0fb3d7094a610868a27b4
    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct({
            ...product,
            [name]: value,
        });
    };

<<<<<<< HEAD
=======
    const handleSubmit = (e) => {
        e.preventDefault();
        
        createProduct(product).then((response) => {
            if (response.data) {
                setOpen(false);
                props.fetchData()
            }
        }).catch((error) => {
            alert(error);
            setOpen(false);
        });

    };
>>>>>>> 0171aa5f9d2f58ee29c0fb3d7094a610868a27b4

    return (
        <Box>
            <Button variant="outlined" onClick={handleClickOpen}>
                Nuevo Producto
            </Button>
            <Dialog
                open={open}
                onClose={handleClose}
            >
                <form onSubmit={handleSubmit}>
<<<<<<< HEAD
=======

>>>>>>> 0171aa5f9d2f58ee29c0fb3d7094a610868a27b4
                    <DialogTitle id="alert-dialog-title">
                        {"Crear nuevo Producto"}
                    </DialogTitle>
                    <DialogContent>

                        <TextField fullWidth
                            label="Nombre"
                            margin="normal"
                            name="name"
                            value={product.name}
                            onChange={handleChange}
                            required
                        />
                        <TextField fullWidth
                            label="Descripción"
                            margin="normal"
                            name="description"
                            value={product.description}
                            onChange={handleChange}
                            required
                        />
                        <TextField fullWidth
                            label="Imagen URL"
                            margin="normal"
                            name="image"
                            value={product.image}
                            onChange={handleChange}

                        />
                        <TextField fullWidth
                            label="Precio"
                            margin="normal"
                            name="price"
                            value={product.price}
                            onChange={handleChange}
                            required
                            type={'number'}
                        />
                        <TextField fullWidth
                            label="Stock"
                            margin="normal"
                            name="stock"
                            value={product.stock}
                            onChange={handleChange}
                            type={'number'}
                        />

                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose}>Cancelar</Button>
                        <Button type='submit' autoFocus>
                            Guardar
                        </Button>
                    </DialogActions>
                </form>
            </Dialog>
        </Box>
<<<<<<< HEAD
    );
}

export default FormProduct;


=======
    )
}
export default FormProduct;
>>>>>>> 0171aa5f9d2f58ee29c0fb3d7094a610868a27b4
