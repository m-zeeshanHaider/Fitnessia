export const exerciseOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Host": "exercises-by-api-ninjas.p.rapidapi.com",
    "X-RapidAPI-Key": "3dd9c1a4c7msh7108d1d5fa18f12p102d8ejsn7a9426dfed82",
  },
};

export const youtubeVideosOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "3dd9c1a4c7msh7108d1d5fa18f12p102d8ejsn7a9426dfed82",
    "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
  },
};

export const fetchData = async (url, options) => {
    const response = await fetch(url, options);
    const data = response.json();
    return data;
};

// Does not work for some reason
// 'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY
