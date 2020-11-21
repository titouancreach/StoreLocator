import Airtable from './airtable.browser';

if (!("remove" in Element.prototype)) {
  Element.prototype.remove = function () {
    if (this.parentNode) {
      this.parentNode.removeChild(this);
    }
  };
}

const airtableDatabase = new Airtable({ apiKey: "keyivOeI56X4blAIx" }).base(
  "appozkf4aTSkgrAEv"
);

mapboxgl.accessToken =
  "pk.eyJ1IjoidGl0b3VhbmNyZWFjaCIsImEiOiJja2hheDd2MnIwa280MnBrNG5wazhmbXY3In0.hIQY0ILrWDV0RVSO5HWcYQ";

const map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/mapbox/light-v10",
  center: [-77.034084142948, 38.909671288923],
  zoom: 13,
  scrollZoom: true,
});

async function* getStoreListFromAirtable() {
  const records = await new Promise((resolve) => {
    base("StoreLocator")
      .select({
        view: "Grid view",
      })
      .firstPage(function (err, records) {
        resolve(records);
      });
  });

  for (let store in records) {
    yield {
      type: "feature",
      geometry: {
        type: "point",
        coordinates: [store.Longitude, store.Latitude],
        properties: {
          name: store.Name,
          description: store.DescriptionHtml,
        },
      },
    };
  }
}

async function getGeoJsonStores() {
  const features = await getStoreListFromAirtable();
  return {
    type: "FeatureCollection",
    features: [...features],
  };
}

(async function () {
  const stores = await getGeoJsonStores();

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
})();
