const getUrlForCoffeeStores = (latlng: string, query: string, limit: number): string => {
  return `https://api.foursquare.com/v3/places/search?query=${query}&ll=${latlng}&limit=${limit}`;
}

export const fetchCoffeeStores = async () => {
  const response = await fetch(
    getUrlForCoffeeStores('49.645882,-124.946358', 'coffee', 6),
    {
      headers: {
        Accept: "application/json",
        Authorization: process.env.FOURSQUARE_KEY || '',
      },
    }
  );

  const data = await response.json();

  return data.results;
};

export type CoffeeStore = {
  fsq_id: number;
  name: string;
  imgUrl: string;
};
