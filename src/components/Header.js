import { ShoppingBasket } from "@mui/icons-material";
import { Badge, IconButton, Toolbar, Typography } from "@mui/material";
import AppBar from "@mui/material/AppBar";

const Header = ({closeCart, orderLength}) => {
    return (
        <AppBar
            position="static">
            <Toolbar>
                <Typography
                    variant="h6"
                    component="span"
                    sx={{ flexGrow: 1 }}>
                    MUI Shop
                </Typography>
                <IconButton
                    onClick={closeCart}
                    color="inherit"
                    >
                        <Badge
                            color='secondary'
                            badgeContent={orderLength}
                        >
                            <ShoppingBasket></ShoppingBasket>
                        </Badge>
                </IconButton>
            </Toolbar>
        </AppBar>
    );
}

export default Header;