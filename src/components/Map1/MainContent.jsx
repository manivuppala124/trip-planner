import { React,useEffect, useState } from "react";
import { CssBaseline, Grid } from "@material-ui/core";
import Header from './Header';
import List from './List';
import Map from './Map';
import { getPlacesData } from "../../context/MainContext";

const getPlaceDetails = () => {
    const [places,setPlaces]=useState([]);

    const [childClicked,setChildClicked]=useState(null);

    const [filteredPlaces,setFilteredPlaces]=useState([]);

    const [coordinates,setCoordinates]=useState({lat:0,lng:0});

    const [bounds,setBounds]=useState({});

    // const [weatherData,setWeatherData]=useState({});

    const [isLoading,setIsLoading]=useState(false);

    const [rating,setRating]=useState('restaurants');
    const [type,setType]=useState([]);
    const [autocomplete,setAutocomplete]=useState(null);

    useEffect(()=>{
        navigator.geolocation.getCurrentPosition(({coords:{latitude,longitude}})=>{
            setCoordinates({lat:latitude,lng:longitude})
        })
    },[]);

    useEffect(()=>{
        const filtered=places?.filter((place)=>place.rating>rating);
        setFilteredPlaces(filtered);
    },[rating,places]);

    useEffect(()=>{
        if(bounds.sw&&bounds.ne){
        setIsLoading(true);
        // getWeatherData({places})
        // .then((data)=>setWeatherData(data));
        getPlacesData(type,bounds.sw,bounds.ne)
        .then((data)=>{
            setPlaces(data?.filter((place)=>place.name&&place.num_reviews>0));
            setFilteredPlaces([]);
            setRating('');
            setIsLoading(false);
        });
    }
    },[type,bounds]);

    const onLoad=(autoC)=>setAutocomplete(autoC);

    const onPlaceChanged=()=>{
    const lat=autocomplete.getPlace().geometry.location.lat();
    const lng=autocomplete.getPlace().geometry.location.lng();

    setCoordinates({lat,lng});
};

    return ( 
        <>
        <CssBaseline/>
        <Header onPlaceChanged={onPlaceChanged} onLoad={onLoad}/>
        <Grid container spacing={3} style={{width:'100%'}}>
        <Grid item xs={12} md={4} >
            <List isLoading={isLoading} childClicked={childClicked} places={filteredPlaces?.length?filteredPlaces:places} type={type} setType={setType} rating={rating} setRating={setRating}></List>
        </Grid>
        <Grid item xs={12} md={8} style={{display:'flex',justifyContent:'center',alignItems:'center'}} >
            <Map
            setChildClicked={setChildClicked}
            setBounds={setBounds}
            setCoordinates={setCoordinates}
            coordinates={coordinates}
            places={filteredPlaces?.length?filteredPlaces:places}
            />
        </Grid>
        </Grid>

        </>
     );
}
 
export default getPlaceDetails;