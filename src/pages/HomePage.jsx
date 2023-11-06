
import { getAllProducts } from '../api/products.api';
import { useEffect, useState } from 'react';
import { Container, Grid, Divider, TextField, Button } from '@mui/material';
import Feed from '../components/Feed'
import SearchIcon from '@mui/icons-material/Search';
import Loader from '../components/Loader'


function HomePage() {
    const [products, setProducts] = useState([]);
    const [searchTerm, setSearchTerm] = useState('')
    const [load, setLoad] = useState(false);

    useEffect(() => {
        fetchData();
    }, []);

    const handleFilter = () => {
        searchTerm ? fetchData(searchTerm) : fetchData('')
    }

    const fetchData = (param) => {
        setLoad(true)
        getAllProducts(param).then((response) => {
            setProducts(response.data);
            setLoad(false)
        });
    }

    return (
        <Container>
            <TextField
                placeholder="Escriba su búsqueda..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            ></TextField>
            <Button onClick={handleFilter} variant="outlined" startIcon={<SearchIcon />}> Buscar </Button>
            {load ?
                <Loader /> :
                <Grid container spacing={2}>
                    {products.map((product, idx) => (
                        <Grid item key={idx} xs={12} sm={6} md={4} lg={3}>
                            <Feed product={product} />
                        </Grid>
                    ))}
                </Grid>}
            <Divider style={{ marginBottom: 100 }}></Divider>
        </Container>
    );
}

export default HomePage;
