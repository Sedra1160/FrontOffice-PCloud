/*!

=========================================================
* Now UI Dashboard React - v1.5.0
=========================================================

* Product Page: https://www.creative-tim.com/product/now-ui-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/now-ui-dashboard-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { useState, useEffect } from "react";
import ReactDOM from 'react-dom';

// reactstrap components
import { Row, Col, Card, CardHeader, CardBody } from "reactstrap";

// core components
import PanelHeader from "components/PanelHeader/PanelHeader.js";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const MapWrapper = () => {
  
  const [data, setData] = useState(null);
  const [compteur, setCompteur] = useState(true);
  const [count, setCount] = useState(true);
  const mapRef = React.useRef(null);
  const queryParams = new URLSearchParams(window.location.search);
  var lati = queryParams.get("lat");
  var longi = queryParams.get("long");
  
  // let sary=null;

  React.useEffect(() => {
    if (compteur){
      fetch("https://projetcloudrayansedraravo.herokuapp.com/ato/signalement")
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
          throw response;
        })
        .then((data) => {
          setData(data);
          // console.log(data);
          setCompteur(false);
        })
      }
    
    let google = window.google;
    let map = mapRef.current;
    // let lat = "-18.939";
    var lat=[-18.939,-18.908718,-18.910390];
    // let lng = "47.521";
    var lng=[47.521, 47.508899,47.505972];
    const myLatlng = new google.maps.LatLng(lati, longi);
    const Latlng = new google.maps.LatLng(lat[0], lng[0]);
    
    
  
  const mapOptions2 = {
    zoom: 13,
    center: Latlng,
    scrollwheel: false,
    zoomControl: true,
    styles: [
      {
        featureType: "water",
        elementType: "geometry",
        stylers: [{ color: "#e9e9e9" }, { lightness: 17 }],
      },
      {
        featureType: "landscape",
        elementType: "geometry",
        stylers: [{ color: "#f5f5f5" }, { lightness: 20 }],
      },
      {
        featureType: "road.highway",
        elementType: "geometry.fill",
        stylers: [{ color: "#ffffff" }, { lightness: 17 }],
      },
      {
        featureType: "road.highway",
        elementType: "geometry.stroke",
        stylers: [{ color: "#ffffff" }, { lightness: 29 }, { weight: 0.2 }],
      },
      {
        featureType: "road.arterial",
        elementType: "geometry",
        stylers: [{ color: "#ffffff" }, { lightness: 18 }],
      },
      {
        featureType: "road.local",
        elementType: "geometry",
        stylers: [{ color: "#ffffff" }, { lightness: 16 }],
      },
      {
        featureType: "poi",
        elementType: "geometry",
        stylers: [{ color: "#f5f5f5" }, { lightness: 21 }],
      },
      {
        featureType: "poi.park",
        elementType: "geometry",
        stylers: [{ color: "#dedede" }, { lightness: 21 }],
      },
      {
        elementType: "labels.text.stroke",
        stylers: [
          { visibility: "on" },
          { color: "#ffffff" },
          { lightness: 16 },
        ],
      },
      {
        elementType: "labels.text.fill",
        stylers: [
          { saturation: 36 },
          { color: "#333333" },
          { lightness: 40 },
        ],
      },
      { elementType: "labels.icon", stylers: [{ visibility: "off" }] },
      {
        featureType: "transit",
        elementType: "geometry",
        stylers: [{ color: "#f2f2f2" }, { lightness: 19 }],
      },
      {
        featureType: "administrative",
        elementType: "geometry.fill",
        stylers: [{ color: "#fefefe" }, { lightness: 20 }],
      },
      {
        featureType: "administrative",
        elementType: "geometry.stroke",
        stylers: [{ color: "#fefefe" }, { lightness: 17 }, { weight: 1.2 }],
      },
    ],
  };

    const mapOptions = {
      zoom: 13,
      center: myLatlng,
      scrollwheel: false,
      zoomControl: true,
      styles: [
        {
          featureType: "water",
          elementType: "geometry",
          stylers: [{ color: "#e9e9e9" }, { lightness: 17 }],
        },
        {
          featureType: "landscape",
          elementType: "geometry",
          stylers: [{ color: "#f5f5f5" }, { lightness: 20 }],
        },
        {
          featureType: "road.highway",
          elementType: "geometry.fill",
          stylers: [{ color: "#ffffff" }, { lightness: 17 }],
        },
        {
          featureType: "road.highway",
          elementType: "geometry.stroke",
          stylers: [{ color: "#ffffff" }, { lightness: 29 }, { weight: 0.2 }],
        },
        {
          featureType: "road.arterial",
          elementType: "geometry",
          stylers: [{ color: "#ffffff" }, { lightness: 18 }],
        },
        {
          featureType: "road.local",
          elementType: "geometry",
          stylers: [{ color: "#ffffff" }, { lightness: 16 }],
        },
        {
          featureType: "poi",
          elementType: "geometry",
          stylers: [{ color: "#f5f5f5" }, { lightness: 21 }],
        },
        {
          featureType: "poi.park",
          elementType: "geometry",
          stylers: [{ color: "#dedede" }, { lightness: 21 }],
        },
        {
          elementType: "labels.text.stroke",
          stylers: [
            { visibility: "on" },
            { color: "#ffffff" },
            { lightness: 16 },
          ],
        },
        {
          elementType: "labels.text.fill",
          stylers: [
            { saturation: 36 },
            { color: "#333333" },
            { lightness: 40 },
          ],
        },
        { elementType: "labels.icon", stylers: [{ visibility: "off" }] },
        {
          featureType: "transit",
          elementType: "geometry",
          stylers: [{ color: "#f2f2f2" }, { lightness: 19 }],
        },
        {
          featureType: "administrative",
          elementType: "geometry.fill",
          stylers: [{ color: "#fefefe" }, { lightness: 20 }],
        },
        {
          featureType: "administrative",
          elementType: "geometry.stroke",
          stylers: [{ color: "#fefefe" }, { lightness: 17 }, { weight: 1.2 }],
        },
      ],
    };
    
  if(lati != null && longi !=null){
    map = new google.maps.Map(map, mapOptions);
  }
  if(lati == null && longi ==null){
    map = new google.maps.Map(map, mapOptions2);
  }

    //fonction pour marquer
    //couleur: bleu pour nouveau
    //        jaune pour traitement
    //        vert si c'est finie
    // icon: {
    //   url: "http://maps.google.com/mapfiles/ms/icons/green-dot.png"
    // },
    function funMarker(location, color, dataSigne, photo) {
      
      //affichage photo et fiche signalement
      let contentString = "";
      if(photo){
        contentString+="<Carousel axis='vertical'><div>";
        photo.map((saryRay, key) =>{
        contentString +=
          // "<div key='"+key+"'>"+
          "<img src='data:image/jpeg;base64, "+saryRay.image.data+"' width='50px'/>";
        })
        contentString+="</div> </Carousel>";
      } else contentString+="<p>tsisy sary</p>";

      contentString+='<div class="info-window-content">' +
      "<p>Statut:"+dataSigne.etat.nom+"</p>"+
      "<p>Utilisateur:"+dataSigne.utilisateur.nom+" "+dataSigne.utilisateur.prenom+"</p>"+
      "<p>Type:"+dataSigne.type.nom+"</p></div>";

      const infowindow = new google.maps.InfoWindow({
        content: contentString,
      });

      var marker = new google.maps.Marker({
        position: location,
        map: map,
        animation: google.maps.Animation.DROP,
        title: "carte avec liste des signalement",
        icon: {
          url: "http://maps.google.com/mapfiles/ms/icons/"+color+"-dot.png"
        },
      });

      //ecoute de la souris
      google.maps.event.addListener(marker, "click", function () {
        if(marker.open){
          infowindow.close(map, marker);marker.open = false;
        }
        infowindow.open(map, marker);
        marker.open = true;
      });
      
    }

    if(data)data.forEach(signalement => {
      const location=new google.maps.LatLng(signalement.latitude, signalement.longitude);
      let sary=null;  
      let color = "blue";
      if(signalement.etat.id==2)color="yellow";
      if(signalement.etat.id==3)color="green";

        fetch(`https://projetcloudrayansedraravo.herokuapp.com/ato/photos/${signalement.id}`, {mode:'cors', credentials: 'include'})
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
          throw response;
        })
        .then((photo) => {
          sary=photo;
        })
        .finally(() => {
          setCount(false);
          funMarker(location, color, signalement,sary);
        });
    })
  });

  return (
    <>
      <div style={{ height: `100%` }} ref={mapRef}></div>
    </>
  );
};

  function FullScreenMap() {
  return (
    <>
      <PanelHeader size="sm" />
      <div className="content">
        <Row>
          <Col xs={12}>
            <Card>
              <CardHeader>Google Maps</CardHeader>
              <CardBody>
                <div
                  id="map"
                  className="map"
                  style={{ position: "relative", overflow: "hidden" }}
                >
                  <MapWrapper />
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default FullScreenMap;
