// Initialize the map
function initMap() {
    // Default location (e.g., Bangalore)
    const defaultLocation = { lat: 12.9716, lng: 77.5946 };
  
    // Create a map centered at the default location
    const map = new google.maps.Map(document.getElementById("map"), {
      center: defaultLocation,
      zoom: 12,
    });
  
    // Add a marker at the default location
    new google.maps.Marker({
      position: defaultLocation,
      map: map,
      title: "Safe Location",
    });
  
    // Search functionality
    const searchBox = document.getElementById("searchBox");
    const searchButton = document.getElementById("searchButton");
  
    searchButton.addEventListener("click", () => {
      const geocoder = new google.maps.Geocoder();
      geocoder.geocode({ address: searchBox.value }, (results, status) => {
        if (status === "OK") {
          // Center the map on the searched location
          map.setCenter(results[0].geometry.location);
  
          // Add a marker at the searched location
          new google.maps.Marker({
            map: map,
            position: results[0].geometry.location,
          });
        } else {
          alert("Location not found.");
        }
      });
    });
  }
  // Initialize the map
function initMap() {
    const defaultLocation = { lat: 12.9716, lng: 77.5946 };
    const map = new google.maps.Map(document.getElementById("map"), {
      center: defaultLocation,
      zoom: 12,
    });
  
    const directionsService = new google.maps.DirectionsService();
    const directionsRenderer = new google.maps.DirectionsRenderer();
    directionsRenderer.setMap(map);
  
    // Add a marker at the default location
    new google.maps.Marker({
      position: defaultLocation,
      map: map,
      title: "Safe Location",
    });
  
    // Search functionality
    const searchBox = document.getElementById("searchBox");
    const searchButton = document.getElementById("searchButton");
  
    searchButton.addEventListener("click", () => {
      const geocoder = new google.maps.Geocoder();
      geocoder.geocode({ address: searchBox.value }, (results, status) => {
        if (status === "OK") {
          const destination = results[0].geometry.location;
  
          // Calculate and display the route
          directionsService.route(
            {
              origin: defaultLocation,
              destination: destination,
              travelMode: google.maps.TravelMode.DRIVING,
            },
            (response, status) => {
              if (status === "OK") {
                directionsRenderer.setDirections(response);
              } else {
                alert("Directions request failed due to " + status);
              }
            }
          );
        } else {
          alert("Location not found.");
        }
      });
    });
  }