import { useEffect, useState } from 'react';
import { TextField, Button, Snackbar, Container, Alert, Toolbar, Typography } from '@mui/material';
import emailjs from 'emailjs-com';

const ContactPage = () => {
    const [contact, setContact] = useState({
        name: '',
        lastanme: '',
        email: '',
        message: ''
    });
    const [open, setOpen] = useState(false);

    const handleClose = () => {
        setOpen(false);
    };

    const handleSubmit = (e) => {

        emailjs.sendForm('service_vd4fhry', 'template_vucohr5', e.target, '1kJkddVlofxdGh33o')
            .then((result) => {
                window.location.reload()  //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior) 
            }, (error) => {
                console.log(error.text);
            });

        setOpen(true)
        e.preventDefault()

    }


    const handleChange = (e) => {
        const { name, value } = e.target;
        setContact({
            ...contact,
            [name]: value,
        });
    };

    return (
        <Container sx={{ marginTop: '20px' }}>
            <h4>Complete su información y envíe su consulta</h4>
            <form onSubmit={handleSubmit}>
                <TextField fullWidth
                    label="Nombre"
                    margin="normal"
                    name="name"
                    value={contact.name}
                    onChange={handleChange}
                    required
                />
                <TextField fullWidth
                    label="Apellido"
                    margin="normal"
                    name="lastanme"
                    value={contact.lastanme}
                    onChange={handleChange}
                    required
                />
                <TextField fullWidth
                    label="Email"
                    margin="normal"
                    name="email"
                    value={contact.email}
                    onChange={handleChange}
                    required
                />
                <TextField fullWidth
                    label="Mensaje"
                    margin="normal"
                    name="message"
                    value={contact.message}
                    onChange={handleChange}
                    multiline
                    rows={5}
                />
                <Button variant='contained' type="submit" sx={{ mt: 2 }}>
                    Enviar
                </Button>
            </form>
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                    Mensaje Enviado!
                </Alert>
            </Snackbar>
        </Container>
    );
};

export default ContactPage;