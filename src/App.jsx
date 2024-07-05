import React from "react";
import { Switch, Route } from "react-router-dom";
import { HotelsList, RestaurantsList, AttractionsList, SearchResult, Grid, MapView } from "./pages";
import { PlaceDetails } from "./pages/templates";
// import App1 from "./components/Map1/MainContent";
import Homepage from "./pages/HomePage";

const App = () => {
  return (
    <>
      <Switch>
        <Route path={"/map"}>
          <MapView />
        </Route>
        <Route exact path={"/restaurants"}>
          <RestaurantsList />
        </Route>
        <Route exact path={"/hotels"}>
          <HotelsList />
        </Route>
        <Route exact path={"/attractions"}>
          <AttractionsList />
        </Route>
        <Route path={"/search"}>
          <SearchResult />
        </Route>
        <Route path={"/:type/:id"}>
          <PlaceDetails />
        </Route>
        <Route path={"/home"}>
          <Grid />
        </Route>      
        <Route path={"/"}>
          <Homepage />
        </Route>      
      </Switch>
    </>
  );
};

export default App;
