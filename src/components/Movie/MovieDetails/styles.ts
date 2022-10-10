import { Colors } from "../../../styles/Styles";

export const classes = {
  loaderWrapper: { 
    display: 'flex', 
    justifyContent: 'center', 
    pt: '20%' 
  },
  backBtnWrapper: { 
    display: 'flex', 
    alignItems: 'center', 
    height: '40px', 
    mb: '10px' 

  },
  backBtnBlock: { 
    display: 'flex', 
    alignItems: 'center', 
    textDecoration: 'none' 
  },
  backBtnIcon: { 
    color: 'primary.light', 
    mr: '10px' 
  },
  backBtnText: { 
    color: 'primary.light' 
  },
  movieInfoSection: { 
    display: 'flex', 
    width: '100%', 
    mb: '20px' 
  },
  movieImageWrapper: { 
    maxHeight: '500px', 
    mr: '30px' 
  },
  brokenMovieImageWrapper: {
    mr: '30px',
    height: '500px',
    minWidth: '333px',
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    bgcolor: Colors.card_bg_color
  },
  brokenMovieImageIcon: {
    height: "20%",
    width: "20%",
    color: Colors.card_icon_color,
    fontSize: "large"
  },
  movieInfoWrapper: { 
    flexGrow: '1' 
  },
  movieInfoTitleWrapper: { 
    display: 'flex', 
    justifyContent: 'space-between', 
    alignItems: 'center', 
    mb: '20px' 
  },
  movieInfoTitle: { 
    color: 'text.primary' 
  },
  movieInfoImdbImage: { 
    height: '30px', 
    cursor: 'pointer', 
    ml: '20px' 
  },
  movieInfoRating: { 
    display: 'flex', 
    alignItems: 'center' 
  },
  movieInfoRatingIcon: { 
    color: Colors.rating_color, 
    pb: '3px', 
    pl: '5px' 
  },
  movieInfoRatingText: {
    color: 'text.primary',
    fontSize: '1.0rem',
    fontWeight: '500',
    ml: '5px',
  },
  movieInfoItem: { 
    color: 'primary.light' 
  },
  movieInfoItemText: { 
    color: 'text.primary', 
    pl: '5px' 
  },
  sectionWrapper: { 
    mb: '20px' 
  },
  sectionTitle: { 
    color: 'primary.light', 
    mb: '20px' 
  },
  suggestionsWrapper: { 
    display: 'flex', 
    flexDirection: 'column', 
    justifyContent: 'space-between'
  }
};