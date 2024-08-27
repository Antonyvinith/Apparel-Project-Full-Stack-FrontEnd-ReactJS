import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { useNavigate } from 'react-router-dom';
import { Dashboard, InventoryTwoTone, ShoppingCart, AdminPanelSettings, LocalShipping } from '@mui/icons-material';
import { Collapse } from '@mui/material';
import { useState } from 'react';
import { ExpandMore, ExpandLess } from '@mui/icons-material';
import { AiOutlineUnorderedList } from 'react-icons/ai';
import { Store, ShopTwo, Person, Category, Inventory, FmdGood, Settings, ListAlt } from '@mui/icons-material';
import "../Styling/SidebarStyle.css"

const drawerWidth = 240;

export default function Sidebar() {

  const navigate = useNavigate();
  const [isOrderClosed, setIsOrderClosed] = useState(false);
  const [isInvClosed, setIsInvClosed] = useState(false);
  const [isAdminClosed, setIsAdminClosed] = useState(false);
  const [isProdClosed, setIsProdClosed] = useState(false);

  const handleOrderCollapse = () =>{
    setIsOrderClosed(!isOrderClosed);
  }

  const handleInvCollapse = () =>{
    setIsInvClosed(!isInvClosed);
  }

  const handleAdminCollapse = () =>{
    setIsAdminClosed(!isAdminClosed);
  }

  const handleProdCollapse = () =>{
    setIsProdClosed(!isProdClosed);
  }


  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <Divider />
        <List className="sidebar" style={{height:100 +"vh"}}>
          <ListItem disablePadding sx={{ display: "block" }} onClick={() => navigate("/dashboard")}>
            <ListItemButton className="menuItem">
              <ListItemIcon>
                <Dashboard />
              </ListItemIcon>
              <ListItemText primary="Dashboard" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding sx={{ display: "flex" }} onClick={handleOrderCollapse}>
            <ListItemButton className="menuItem">
              <ListItemIcon>
                <ShoppingCart />
              </ListItemIcon>
              <ListItemText primary="Order Management" />
              {isOrderClosed? <ExpandLess/> : <ExpandMore/>}
            </ListItemButton>
          </ListItem>

          <Collapse in={isOrderClosed} timeout="auto" unmountOnExit>
            <ListItem sx={{display:"block"}} onClick={() => {navigate("/HD")}}>
              <ListItemButton className="menuList">
                <ListItemIcon>
                  <LocalShipping/>
                </ListItemIcon>
                <ListItemText primary = "HD Orders"/>
              </ListItemButton>
            </ListItem>

            <ListItem sx={{display:"block"}} onClick={() => {navigate("/CC")}}>
              <ListItemButton className="menuList">
                <ListItemIcon>
                  <Store/>
                </ListItemIcon>
                <ListItemText primary = "CC Orders"/>
              </ListItemButton>
            </ListItem>

            <ListItem sx={{display:"block"}} onClick={() => {navigate("/order")}}>
              <ListItemButton className="menuList">
                <ListItemIcon>
                  <ShopTwo/>
                </ListItemIcon>
                <ListItemText primary = "Orders"/>
              </ListItemButton>
            </ListItem>

            <ListItem sx={{display:"block"}} onClick={() => {navigate("/customer")}}>
              <ListItemButton className="menuList">
                <ListItemIcon>
                  <Person/>
                </ListItemIcon>
                <ListItemText primary = "Customers"/>
              </ListItemButton>
            </ListItem>


          </Collapse>


          <ListItem disablePadding sx={{ display: "block" }} onClick={handleProdCollapse}>
            <ListItemButton className="menuItem">
              <ListItemIcon>
                <ListAlt />
              </ListItemIcon>
              <ListItemText primary="Category and Product" />
              {isProdClosed? <ExpandLess/> : <ExpandMore/>}
            </ListItemButton>
          </ListItem>

          <Collapse in={isProdClosed} timeout="auto" unmountOnExit>

          <ListItem sx={{display:"block"}} onClick={() => {navigate("/product")}}>
              <ListItemButton className="menuList">
                <ListItemIcon>
                  <AiOutlineUnorderedList/>
                </ListItemIcon>
                <ListItemText primary = "Products"/>
              </ListItemButton>
            </ListItem>

            <ListItem sx={{display:"block"}} onClick={() => {navigate("/category")}}>
              <ListItemButton className="menuList">
                <ListItemIcon>
                  <Category/>
                </ListItemIcon>
                <ListItemText primary = "Category"/>
              </ListItemButton>
            </ListItem>

          </Collapse>

          <ListItem disablePadding sx={{ display: "block" }} onClick={handleInvCollapse}>
            <ListItemButton className="menuItem">
              <ListItemIcon>
                <InventoryTwoTone />
              </ListItemIcon>
              <ListItemText primary="Inventory and Location" />
              {isInvClosed? <ExpandLess/> : <ExpandMore/>}
            </ListItemButton>
          </ListItem>

          <Collapse in={isInvClosed} timeout="auto" unmountOnExit>
            
          <ListItem sx={{display:"block"}} onClick={() => {navigate("/inventory")}}>
              <ListItemButton className="menuList">
                <ListItemIcon>
                  <Inventory/>
                </ListItemIcon>
                <ListItemText primary = "Inventory"/>
              </ListItemButton>
            </ListItem>

            
            <ListItem sx={{display:"block"}} onClick={() => {navigate("/location")}}>
              <ListItemButton className="menuList">
                <ListItemIcon>
                  <FmdGood/>
                </ListItemIcon>
                <ListItemText primary = "Location"/>
              </ListItemButton>
            </ListItem>


          </Collapse>



          <ListItem disablePadding sx={{ display: "block" }} onClick={handleAdminCollapse}>
            <ListItemButton className="menuItem">
              <ListItemIcon>
                <AdminPanelSettings />
              </ListItemIcon>
              <ListItemText primary="Admin" />
              {isAdminClosed? <ExpandLess/> : <ExpandMore/>}
            </ListItemButton>
          </ListItem>

          <Collapse in={isAdminClosed} timeout="auto" unmountOnExit>
          <ListItem sx={{display:"block"}} onClick={() => {navigate("/")}}>
              <ListItemButton className="menuList">
                <ListItemIcon>
                  <Settings/>
                </ListItemIcon>
                <ListItemText primary = "Settings"/>
              </ListItemButton>
            </ListItem>

            <ListItem sx={{display:"block"}} onClick={() => {navigate("/user")}}>
              <ListItemButton className="menuList">
                <ListItemIcon>
                  <Person/>
                </ListItemIcon>
                <ListItemText primary = "Users"/>
              </ListItemButton>
            </ListItem>
          </Collapse>
        </List>
      </Drawer>
      <Box >

      </Box>
    </Box>
  );
}