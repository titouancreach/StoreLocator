if (!("remove" in Element.prototype)) {
  Element.prototype.remove = function () {
    if (this.parentNode) {
      this.parentNode.removeChild(this);
    }
  };
}

mapboxgl.accessToken =
  "pk.eyJ1IjoidGl0b3VhbmNyZWFjaCIsImEiOiJja2hheDd2MnIwa280MnBrNG5wazhmbXY3In0.hIQY0ILrWDV0RVSO5HWcYQ";

const map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/mapbox/light-v10",
  center: [-77.034084142948, 38.909671288923],
  zoom: 13,
  scrollZoom: false,
});

const stores = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-77.034084142948, 38.909671288923],
      },
      properties: {
        phoneFormatted: "(202) 234-7336",
        phone: "2022347336",
        address: "1471 P St NW",
        city: "Washington DC",
        country: "United States",
        crossStreet: "at 15th St NW",
        postalCode: "20005",
        state: "D.C.",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-77.049766, 38.900772],
      },
      properties: {
        phoneFormatted: "(202) 507-8357",
        phone: "2025078357",
        address: "2221 I St NW",
        city: "Washington DC",
        country: "United States",
        crossStreet: "at 22nd St NW",
        postalCode: "20037",
        state: "D.C.",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-77.043929, 38.910525],
      },
      properties: {
        phoneFormatted: "(202) 387-9338",
        phone: "2023879338",
        address: "1512 Connecticut Ave NW",
        city: "Washington DC",
        country: "United States",
        crossStreet: "at Dupont Circle",
        postalCode: "20036",
        state: "D.C.",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-77.0672, 38.90516896],
      },
      properties: {
        phoneFormatted: "(202) 337-9338",
        phone: "2023379338",
        address: "3333 M St NW",
        city: "Washington DC",
        country: "United States",
        crossStreet: "at 34th St NW",
        postalCode: "20007",
        state: "D.C.",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-77.002583742142, 38.887041080933],
      },
      properties: {
        phoneFormatted: "(202) 547-9338",
        phone: "2025479338",
        address: "221 Pennsylvania Ave SE",
        city: "Washington DC",
        country: "United States",
        crossStreet: "btwn 2nd & 3rd Sts. SE",
        postalCode: "20003",
        state: "D.C.",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-76.933492720127, 38.99225245786],
      },
      properties: {
        address: "8204 Baltimore Ave",
        city: "College Park",
        country: "United States",
        postalCode: "20740",
        state: "MD",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-77.097083330154, 38.980979],
      },
      properties: {
        phoneFormatted: "(301) 654-7336",
        phone: "3016547336",
        address: "4831 Bethesda Ave",
        cc: "US",
        city: "Bethesda",
        country: "United States",
        postalCode: "20814",
        state: "MD",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-77.359425054188, 38.958058116661],
      },
      properties: {
        phoneFormatted: "(571) 203-0082",
        phone: "5712030082",
        address: "11935 Democracy Dr",
        city: "Reston",
        country: "United States",
        crossStreet: "btw Explorer & Library",
        postalCode: "20190",
        state: "VA",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-77.10853099823, 38.880100922392],
      },
      properties: {
        phoneFormatted: "(703) 522-2016",
        phone: "7035222016",
        address: "4075 Wilson Blvd",
        city: "Arlington",
        country: "United States",
        crossStreet: "at N Randolph St.",
        postalCode: "22203",
        state: "VA",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-75.28784, 40.008008],
      },
      properties: {
        phoneFormatted: "(610) 642-9400",
        phone: "6106429400",
        address: "68 Coulter Ave",
        city: "Ardmore",
        country: "United States",
        postalCode: "19003",
        state: "PA",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-75.20121216774, 39.954030175164],
      },
      properties: {
        phoneFormatted: "(215) 386-1365",
        phone: "2153861365",
        address: "3925 Walnut St",
        city: "Philadelphia",
        country: "United States",
        postalCode: "19104",
        state: "PA",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-77.043959498405, 38.903883387232],
      },
      properties: {
        phoneFormatted: "(202) 331-3355",
        phone: "2023313355",
        address: "1901 L St. NW",
        city: "Washington DC",
        country: "United States",
        crossStreet: "at 19th St",
        postalCode: "20036",
        state: "D.C.",
      },
    },
  ],
};

/**
 * Assign a unique id to each store. You'll use this `id`
 * later to associate each point on the map with a listing
 * in the sidebar.
 */
stores.features.forEach(function (store, i) {
  store.properties.id = i;
});

map.on("load", function (e) {
  map.addSource("places", {
    type: "geojson",
    data: stores,
  });
  buildLocationList(stores);
  addMarkers();
});

function addMarkers() {
  stores.features.forEach(function (marker) {
    const el = document.createElement("div");
    el.id = "marker-" + marker.properties.id;
    el.className = "marker";

    new mapboxgl.Marker(el, { offset: [0, -23] })
      .setLngLat(marker.geometry.coordinates)
      .addTo(map);

    el.addEventListener("click", function (e) {
      flyToStore(marker);
      createPopUp(marker);
      const activeItem = document.getElementsByClassName("active");
      e.stopPropagation();
      if (activeItem[0]) {
        activeItem[0].classList.remove("active");
      }
      const listing = document.getElementById(
        "listing-" + marker.properties.id
      );
      listing.classList.add("active");
    });
  });
}

function buildLocationList(data) {
  data.features.forEach(function (store, i) {
    const prop = store.properties;

    const listings = document.getElementById("listings");
    const listing = listings.appendChild(document.createElement("div"));
    listing.id = "listing-" + prop.id;
    listing.className = "item";

    const link = listing.appendChild(document.createElement("a"));
    link.href = "#";
    link.className = "title";
    link.id = "link-" + prop.id;
    link.innerHTML = prop.address;

    const details = listing.appendChild(document.createElement("div"));
    details.innerHTML = prop.city;
    if (prop.phone) {
      details.innerHTML += " · " + prop.phoneFormatted;
    }

    link.addEventListener("click", function (e) {
      for (let feature of data.features) {
        if (this.id === "link-" + feature.properties.id) {
          flyToStore(feature);
          createPopUp(feature);
        }
      }
      const activeItem = document.getElementsByClassName("active");
      if (activeItem[0]) {
        activeItem[0].classList.remove("active");
      }
      this.parentNode.classList.add("active");
    });
  });
}

function flyToStore(currentFeature) {
  map.flyTo({
    center: currentFeature.geometry.coordinates,
    zoom: 15,
  });
}

function createPopUp(currentFeature) {
  const popUps = document.getElementsByClassName("mapboxgl-popup");
  if (popUps[0]) popUps[0].remove();
  const popup = new mapboxgl.Popup({ closeOnClick: false })
    .setLngLat(currentFeature.geometry.coordinates)
    .setHTML(
      "<h3>Sweetgreen</h3>" +
        "<h4>" +
        currentFeature.properties.address +
        "</h4>"
    )
    .addTo(map);
}
