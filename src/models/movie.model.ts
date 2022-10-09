
export interface IMovieList {
      movies: IMoviesListItem[];
}

export interface IMoviesListItem {
      id: number;
      url: string;
      slug: string;
      imdb_code: string;
      title: string;
      title_english: string;
      title_long: string;
      year: number;
      rating: number;
      genres: IMovieGenres[];
      runtime: number;
      summary: string;
      description_full: string;
      yt_trailer_code: string;
      background_image: string;
      background_image_original: string;
      small_cover_image: string;
      medium_cover_image: string;
      large_cover_image: string;
      torrents: ITorrentData[];
}

export interface IMovie extends IMoviesListItem{
      cast: ICast[];
      large_screenshot_image1: string;
      large_screenshot_image2: string;
      large_screenshot_image3: string;
      medium_screenshot_image1: string;
      medium_screenshot_image2: string;
      medium_screenshot_image3: string;
      mpa_rating: string;
}

enum IMovieGenres {
      Documentary = 'Documentary',
      Adventure = 'Adventure',
      Crime = 'Crime',
      Drama = 'Drama',
      Romance = 'Romance',
      Music = 'Music',
      Action = 'Action',
      Comedy = 'Comedy',
      Fantasy = 'Fantasy',
      SciFi = 'Sci-Fi',
      Horror = 'Horror',
      Mystery = 'Mystery',
      Thriller = 'Thriller',
      History = 'History',
}

interface ITorrentData { 
      url: string;
      hash: string;
      quality: string;
      type: string;
      seeds: number;
      peers: number;
      size: string;
      size_bytes: number;
      date_uploaded: string;
      date_uploaded_unix: number;
}

interface ICast {
      name: string;
      character_name: string;
      url_small_image: string;
      imdb_code: string;
  }