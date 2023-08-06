import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

const ProductosCard = ({ elemento = true }) => {
  return (
    <Card
      sx={{
        width: 300,
        backgroundColor: "rgba(0, 0, 0, 0.468);",
        margin: "0.5rem",
        borderRadius: "30px",
        boxShadow: "2px -2px 2px black",
      }}
    >
      <CardMedia
        component="img"
        alt="monkeyRock"
        height="300"
        image={elemento.imagen}
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          color={"yellow"}
          fontFamily={"Neucha"}
          textAlign={"center"}
          textShadow={"1px 1px 1px black"}
          fontWeight={"600"}
        >
          {elemento.titulo}
        </Typography>
      </CardContent>
      <CardActions>
        <Link to={`/itemDetail/${elemento.id}`}>
          <Button
            style={{
              color: "yellow",
              border: "1px solid yellow",
              borderRadius: "10px",
              fontFamily: "fantasy",
              textShadow: "2px 2px 2px black",
              letterSpacing: "0.1rem",
              cursor: "pointer",
              margin: "0.5rem",
            }}
            size="small"
          >
            Ver detalle
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default ProductosCard;
