const key = 'f9b919c00c97b97072f6fdaad1e76892';

const requests = {
    requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
    requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`,
    requestTrending: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=2`,
    requestUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`,
    requestAction: `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&query=action&page=1&include_adult=false`,
    requestAnime: `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&query=anime&page=1&include_adult=false`,
    requestComedy: `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&query=comedy&page=1&include_adult=false`,
    requestDocumentaries: `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&query=documentaries&page=1&include_adult=false`,
    requestKids: `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&query=kids&page=1&include_adult=false`,
    requestRomantic: `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&query=romantic&page=1&include_adult=false`,
    requestSports: `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&query=sports&page=1&include_adult=false`,
    requestThriller: `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&query=thriller&page=1&include_adult=false`
};

export default requests