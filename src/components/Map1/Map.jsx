import React, { useState } from "react";
import GoogleMapReact from "google-map-react";
import { Paper,Typography} from '@material-ui/core';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import { Rating } from '@material-ui/lab';
import useStyles from './stylesMap';
import { useMediaQuery } from "@material-ui/core";
// import mapStyles from '../../mapStyles';

const Map = ({coordinates,places,setCoordinates,setBounds,setChildClicked}) => {
    const classes=useStyles();
    const isDesktop=useMediaQuery('(min-width:600px)');
    return ( 
        <div className={classes.mapContainer}>
            <GoogleMapReact
            bootstrapURLKeys={{key:'AIzaSyC_xWZDKY1trGx4ilKrS0z7ZTuHTpSt8bI'}}
            defaultCenter={coordinates}
            center={coordinates}
            defaultZoom={14}
            margin={[50,50,50,50]}
            options={{disableDefaultUI:true,zoomControl:true,styles:mapStyles}}
            onChange={(e)=>{
                setCoordinates({lat:e.center.lat,lng:e.center.lng});
                setBounds({ne:e.marginBounds.ne,sw:e.marginBounds.sw});
            }}
            onChildClick={(child)=>setChildClicked(child)}
            >
                {places?.length&&places.map((place,i)=>(
                    <div className={classes.markerContainer} lat={Number(place.latitude)} lng={Number(place.longitude)} key={i} >
                            {
                                !isDesktop?(
                                    <LocationOnOutlinedIcon color="primary" fontSize="large"/>
                                ):(
                                    <Paper elevation={3} className={classes.paper}>
                                        <Typography className={classes.typography} variant="subtitle2" gutterBottom>
                                            {place.name}
                                        </Typography>
                                        <img
                                        className={classes.pointer} src={place.photo?place.photo.images.large.url:'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'} alt={place.name}/>
                                        <Rating size="small" value={Number(place.rating)} readOnly />
                                    </Paper>
                                )
                            }
                    </div>
                ))}
                {/* {weatherData?.list?.map((data,i)=>(
                    <div key={i} lat={data.coord.lat} lng={data.coord.lon}>
                        <img src={`https://openweathermap.org/img/w/${data.weather[0].icon}.png`}/>
                    </div>
                ))} */}
            </GoogleMapReact>

        </div>
     );
}
 
export default Map;