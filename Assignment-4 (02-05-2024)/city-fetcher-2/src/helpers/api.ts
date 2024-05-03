export const getCountriesList = async () => {
  const data = await fetch("https://countriesnow.space/api/v0.1/countries", {
    method: "GET",
  });
  const jsonData = await data.json();
  return jsonData.data;
};

export const getCities = async (country: string) => {
  const data = await getCountriesList();
  const choosenCountry = await data.filter((e: any) => e.country.toLowerCase() === country.toLowerCase());
  return choosenCountry[0].cities;
};
